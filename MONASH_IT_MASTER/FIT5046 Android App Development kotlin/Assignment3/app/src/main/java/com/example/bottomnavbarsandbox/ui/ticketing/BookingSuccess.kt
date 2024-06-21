package com.example.bottomnavbarsandbox.ui.ticketing

import android.content.Intent
import android.os.Bundle
import android.provider.CalendarContract
import android.provider.CalendarContract.Events
import android.util.Log
import android.widget.Toast
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.currentCompositionLocalContext
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import androidx.core.content.ContextCompat.startActivity
import androidx.navigation.NavHostController
import com.example.bottomnavbarsandbox.database.MovieAppViewModel
import com.example.bottomnavbarsandbox.restful.addToGCal.AuthorizationResponse
import com.example.bottomnavbarsandbox.restful.addToGCal.RetrofitClient
import com.example.bottomnavbarsandbox.router.Routes
import com.google.api.services.calendar.model.Event
import java.math.BigInteger
import java.security.SecureRandom
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import kotlin.coroutines.coroutineContext


@Composable
fun BookingSuccess (navController: NavHostController, madbViewModel: MovieAppViewModel) {

//    val name = remember { mutableStateOf("") }

// LEO
// I can't figure out how to get the Booking from the Unit from the Job
// I will leave this here in case anyone can solve it lol
    var bookingToDisplay_bookingId by remember {mutableStateOf( "00001" ) }
    // by remember {mutableStateOf( 1 ) }
    var bookingToDisplay_movieId by remember {mutableStateOf( 1 ) }
    var bookingToDisplay_movieName by remember {mutableStateOf(  "Planet Earth 3" )}
    var bookingToDisplay_DateTime by remember {mutableStateOf(  "2024-01-25T10:30" )}
    var bookingToDisplay_Date by remember {mutableStateOf("0")}
    var bookingToDisplay_Time by remember {mutableStateOf("0")}
    var bookingToDisplay_adultTickets by remember {mutableStateOf( "A1 A2 A3" )}
    var bookingToDisplay_concessionTickets by remember {mutableStateOf( "A4")}
//
//    val allBookings by madbViewModel.allBookings.observeAsState(emptyList())
//    var bookingToDisplay: Booking = Booking()

//    val madbMovieList = madbViewModel.allMovies.value
//    val madbMovieList_names: MutableList<String> = mutableListOf()
//    if (madbMovieList != null) {
//        for (movie_entry in madbMovieList){
//            madbMovieList_names += movie_entry.movieName
//        }
//    } else {
//        madbMovieList_names += "Planet Earth 3"
//    }
//    var booked = selectedMovie.value

    LaunchedEffect(Unit){
        val retrievedBooking = madbViewModel.getBookingById(1)
        Log.d("LOAD retrievedBooking", "retrievedBooking loaded: "+retrievedBooking.toString())
        bookingToDisplay_bookingId          = retrievedBooking.bookingId.toString()
        bookingToDisplay_movieId            = retrievedBooking.movieId // <- getMovieById
        val retrievedMovie = madbViewModel.getMovieById(bookingToDisplay_movieId)
        bookingToDisplay_movieName = retrievedMovie.movieName
        bookingToDisplay_DateTime           = retrievedBooking.bookingDateTime.toString()
        val splitDateTime = bookingToDisplay_DateTime.split("T")
        bookingToDisplay_Date = splitDateTime[0]
        bookingToDisplay_Time = splitDateTime[1]
        bookingToDisplay_adultTickets       = retrievedBooking.adultSeat.toString()
        bookingToDisplay_concessionTickets  = retrievedBooking.concessionSeat.toString()
    }



    Column {
        Spacer(modifier = Modifier.height(16.dp))
        Text(text = "Thank you for choosing IMAX Melbourne\nYour booking details are as follows:")

        // Rows below:
        //     Booking ID
        //     Movie name
        //     Date
        //     Time
        //     Adult Tickets (count or code?)
        //     Concession Tickets (count or code?)
        Row{
            Column {
                Text(text = "Booking ID", textAlign = TextAlign.Start)
                Text(text = "Movie name", textAlign = TextAlign.Start)
                Text(text = "Date", textAlign = TextAlign.Start)
                Text(text = "Time", textAlign = TextAlign.Start)
            }
            Column {

                Log.d("DISPLAY retrievedBooking", "")
                Text(text = bookingToDisplay_bookingId)
                Text(text = bookingToDisplay_movieName)
                Text(text = bookingToDisplay_Date)
                Text(text = bookingToDisplay_Time)
            }
        }

        CreateCalendarEventButton(madbViewModel)

        Button(onClick = {navController.navigate(Routes.Home.value)}) {
            Text(text = "Return to Home")}
    }


    // Logic Flow:
    // [App] Retrieve the "bookingId" from SeatSelection
    // [App] Displays all of it

    // ----------
    // For Google Calendar integration:
    // ASSUMPTION - User is logged in with Google Account
    // [User] presses a button
    // [App] Retrieves the movie's length from Movie table using booking.movieId
    // [App] Creates and executes the request using Retrofit
    //       -> Account: current logged-in Google user
    //       -> event time: booking.booking_date_time
    //       -> event duration: booking.movieId => movie.movie_runtime_hour, movie.movie_runtime_minute
    //       -> event name: booking.movieId => movie.movieName
    // [App] Display response of above request

    // ----------
    // [User] can return to Home screen
}

@Composable
fun CreateCalendarEventButton(madbViewModel: MovieAppViewModel) {
    var showDialog by remember { mutableStateOf(false) }

    Button(
        onClick = { showDialog = true },
        shape = RoundedCornerShape(16.dp)
    ) {
        Text("Add ticket to your Google Calendar")
    }

    if (showDialog) {
        CalendarEventDialog(onDismiss = { showDialog = false },madbViewModel)
    }
}

@Composable
fun CalendarEventDialog(onDismiss: () -> Unit, madbViewModel: MovieAppViewModel) {
    // State to hold the access token
    val accessTokenState = remember { mutableStateOf<String?>(null) }
    // State to hold the event data
    val eventState = remember { mutableStateOf<Event?>(null) }

    // get booked movie details:
    Log.d("CEDialogue", "CalendarEventDialog: initiation")
    val LDTformat = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss")
    val bookedDateTime_start = LocalDateTime.parse(madbViewModel.currentBooking_ChosenDateTime.value,LDTformat)
    Log.d("CEDialogue", "bookedDateTime_start= $bookedDateTime_start")
    val bookedMovie = madbViewModel.movieDetailChosen.value
    val bookedMovie_name = bookedMovie.movieName
    val bookedMovie_duration_h = bookedMovie.movieRuntimeHour
    val bookedMovie_duration_m = bookedMovie.movieRuntimeMinute
    val bookedDateTime_end = bookedDateTime_start.plusHours(bookedMovie_duration_h.toLong()).plusMinutes(bookedMovie_duration_m.toLong()).withSecond(0)

    val context_lcc = LocalContext.current

//    startActivity(context_lcc,calIntent, Bundle())
//    calIntent.apply {
//
//    }


    // Function to show a Toast message
    fun showToast(message: String) {
        Toast.makeText(context_lcc, message, Toast.LENGTH_SHORT).show()
    }

//    // Call handleAuthorization when the screen is first displayed
//    LaunchedEffect(Unit) {
//        handleAuthorization()
//    }
//
//    // Launch a coroutine to handle event insertion when accessTokenState changes
//    LaunchedEffect(accessTokenState.value) {
//        if (accessTokenState.value != null) {
//            handleEventInsertion(event)
//        }
//    }

    Dialog(onDismissRequest = onDismiss) {
        Surface(
            modifier = Modifier.padding(16.dp),
            shape = RoundedCornerShape(16.dp)
        ) {
            Column(
                modifier = Modifier.padding(16.dp)
            ) {
                Text("Create Calendar Event")
                // Add form fields for event details (e.g., title, date, time)
                Button(
                    onClick = {
                        // Perform action to create calendar event
                        // Call Google Calendar API or any other relevant logic
                        // Ensure there's an access token before inserting the event
                        // Remember to dismiss the dialog after creating the event
                        showToast("Event Added to Calendar")
                        // References:
                        //     https://code.tutsplus.com/android-essentials-adding-events-to-the-users-calendar--mobile-8363t
                        //     https://developer.android.com/training/basics/intents/sending
                        //     https://developer.android.com/reference/android/provider/CalendarContract.Events
                        val calIntent = Intent(Intent.ACTION_INSERT)
                        calIntent.setDataAndType(CalendarContract.Events.CONTENT_URI,"vnd.android.cursor.item/event")
                        calIntent.putExtra(CalendarContract.Events.TITLE, bookedMovie_name);
                        calIntent.putExtra(CalendarContract.Events.EVENT_LOCATION, "IMAX Melbourne")
                        calIntent.putExtra(CalendarContract.Events.DTSTART,bookedDateTime_start.atZone(ZoneId.of("Australia/Melbourne")).toInstant().toEpochMilli())
                        Log.d("calIntent", "DTSTART: "+bookedDateTime_start.atZone(ZoneId.of("Australia/Melbourne")).toInstant().toEpochMilli())
                        calIntent.putExtra(CalendarContract.Events.DTEND,bookedDateTime_end  .atZone(ZoneId.of("Australia/Melbourne")).toInstant().toEpochMilli())
                        Log.d("calIntent", "DTEND: "+bookedDateTime_end  .atZone(ZoneId.of("Australia/Melbourne")).toInstant().toEpochMilli())
                        calIntent.putExtra(CalendarContract.Events.EVENT_TIMEZONE,"Australia/Melbourne")
                        //calIntent.putExtra(CalendarContract.Events.CALENDAR_ID, "primary")
                        calIntent.putExtra(Events.ACCESS_LEVEL, Events.ACCESS_PRIVATE)
                        calIntent.putExtra(Events.AVAILABILITY, Events.AVAILABILITY_BUSY)
                        //calIntent.putExtra()
                        startActivity(context_lcc,calIntent, Bundle())
                        Log.d("GCAL Act Start", "Started calendar app")
                        onDismiss()
                    },
                    modifier = Modifier.padding(top = 16.dp)
                ) {
                    Text("Create Event")
                }
            }
        }
    }
}

// Steps for GCal
// REF: https://developers.google.com/identity/protocols/oauth2/native-app?hl=en
// Enable API for project
// Create auth credentials: OAuth2.0 ID and Secret
// Identify access scopes
//     https://www.googleapis.com/auth/calendar
//     https://www.googleapis.com/auth/calendar.events
// Obtain OAuth2.0 Access Tokens
//   1. Generate a code verifier and challenge
//      > val codeVerifier = generateRandomString(50)
//      > val code_challenge = code_verifier // Use plain to reduce effort
//   2.

fun generateRandomString(length: Int): String {
    val random = SecureRandom()
    val randomBytes = ByteArray(length)
    random.nextBytes(randomBytes)
    return BigInteger(1, randomBytes).toString(32)
}

suspend fun requestAuthorization(): AuthorizationResponse {
    Log.d("requestAuthorization", "function start: ")
    val clientId = "708796991753-scskn3k6ognlqm6mf2vi74om9cnvn4gn.apps.googleusercontent.com"
    val redirectUri = "urn:ietf:wg:oauth:2.0:oob"
    val responseType = "code"
    val scope = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"
    val state = "the_state_is_just_a_random_string_to_prevent_CSRF"

    val service = RetrofitClient.createOAuthService()
    val response = service.requestAuthorization(clientId, redirectUri, responseType, scope, state)

    Log.d("requestAuthorization","Authorization URL: ${response.authorizationUrl}")
    return response
}

suspend fun insertEvent(accessToken: String, event: Event) {
    val service = RetrofitClient.createCalendarService()
    val insertedEvent = service.insertEvent("Bearer $accessToken", event)
    // Handle the response as needed
    Log.d("insertEvent","Event inserted: ${insertedEvent.id}")
}
//
