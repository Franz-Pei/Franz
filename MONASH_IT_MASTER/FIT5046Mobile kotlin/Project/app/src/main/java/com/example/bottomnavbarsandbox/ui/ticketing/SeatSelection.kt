package com.example.bottomnavbarsandbox.ui.ticketing

import android.util.Log
import androidx.annotation.RequiresApi
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.bottomnavbarsandbox.activity.DisplayApp
import com.example.bottomnavbarsandbox.database.Booking
import com.example.bottomnavbarsandbox.database.MovieAppViewModel
import com.example.bottomnavbarsandbox.router.Routes
import com.example.bottomnavbarsandbox.ui.theme.Custom_DarkPurple
import com.example.bottomnavbarsandbox.ui.theme.Custom_LightBlue
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

/*
@Composable
fun SeatSelection (navController: NavHostController, navViewModel: NavigationViewModel) {

val name = remember { mutableStateOf("") }

    // Logic Flow:
    // ASSUMPTION - The theatres are of fixed sizes
    // [App] Retrieve "movieId" and the chosen DateTime as one string "booking_date_time" from Sessions
    // [App] Retrieve all existing bookings of the given movieId and booking_date_time from the database
    // [App] Retrieve all occupied seats from the bookings (booking.adult_seat and booking.concession_seat)
    //          var bookingsOfGivenMovie: List<Booking> = getBookingByDateTime(movieId,booking_date_time)
    //       -> tempString = ""
    //       -> for (loopingBooking in bookingsOfGivenMovie) {
    //              if (loopingBooking.adult_seat != null) {
    //                  tempString += loopingBooking.adult_seat + " " //The whitespace is necessary to separate seat codes
    //              }
    //              if (loopingBooking.concession_seat != null) {
    //                  tempString += loopingBooking.concession_seat + " " //The whitespace is necessary to separate seat codes
    //              }
    //          }
    //       -> tempList = tempString.split(" ") //Creates an List<String> with the seats
    // [App] Create the table that represents seats of the theatre
    //       ^ Color the seats from tempList grey to represent occupied seats
    // [User] Chooses seats (multi-select? How to define input as adult or concession selection?)
    // [App] Consolidates information (movieId, the chosen DateTime as one string, adults_seats and concession_seats).
    // [App] Create new Booking entry with the above information, using BookingDAO.addBooking
    //       ^ @Insert can return the PK of the new entry?
    // [App] Navigates the user to BookingSuccess with the Booking created above (pass by bookingId?)

 */
/*
class SeatSelection : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            androidx.compose.material.MaterialTheme {
                seatSelectionModel()
            }
        }
    }

}
*/


@RequiresApi(0)
@Composable
//fun seatSelectionModel

fun SeatSelection (navController: NavHostController, madbViewModel: MovieAppViewModel ) {
    DisplayApp(title = "Seat Selection", ) {
        Column (){
            DisplaySeatTable(5,6, navController,madbViewModel)
        }
    }
}

@Composable
// Row: A B C... Column: 1 2 3...
fun DisplaySeatTable (row: Int = 1, column: Int = 1, navController: NavHostController,madbViewModel: MovieAppViewModel){
    val rows = (65..<65 + row).map { it.toChar() }
    val columns = (1..column).toList()

    // Pass the selected movie here?
    val chosenMovie = madbViewModel.movieDetailChosen.value
    // 2024-01-25T10:30:00
    // TODO: get the chosen time from Sessions.DisplayTimePicker
    val TEMP_screeningDateTime = madbViewModel.currentBooking_ChosenDateTime
    val chosenMovie_occupied_seats: MutableList<String> = mutableListOf()
    LaunchedEffect(Unit) {
        val chosenMovie_relatedBookings = madbViewModel.getBookingByDateTime(chosenMovie.movieId,TEMP_screeningDateTime.toString())
        for (bookings in chosenMovie_relatedBookings){
            chosenMovie_occupied_seats += bookings.adultSeat.split(" ")
            chosenMovie_occupied_seats += bookings.concessionSeat.split(" ")
        }
    }

    Spacer(modifier = Modifier.height(10.dp))

    Box(
        modifier = Modifier
            .border(width = 2.dp, color = Custom_DarkPurple)
            .background(Color.White)
            .fillMaxWidth(),
        contentAlignment = Alignment.Center

    ) {
        Text(text = "Screen")
    }

    Spacer(modifier = Modifier.height(10.dp))
    
    Column ( modifier = Modifier.fillMaxWidth() ) {
        for (x in rows) {
            Row(modifier = Modifier.padding(vertical = 4.dp)) {
                for (y in columns) {
                    // if $x$y (the seat) is A3, A4; then color the cell green
                    val seat = "$x$y"
//                    var backgroundColor =
//                        if (seat == "A3" || seat == "A4") Color.Green else Color.White
//                    if (seat == "C2" || seat == "C3" || seat == "C4") backgroundColor = Color.Gray

                    var backgroundColor = Color.White
                    if (seat in chosenMovie_occupied_seats){
                        backgroundColor = Color.Gray
                    }
                    Text(
                        text = seat,
                        modifier = Modifier
                            .padding(horizontal = 4.dp)
                            .border(width = 1.dp, color = Custom_DarkPurple)
                            .background(color = backgroundColor)
                            .weight(1f / columns.size),
                        textAlign = TextAlign.Center
                    )
                }
            }
        }


        Spacer(modifier = Modifier.height(20.dp))
        Text(
            text = "Legend",
            modifier = Modifier
                .border(width = 1.dp, color = Color.White)
                .background(color = Custom_LightBlue)
                .align(Alignment.CenterHorizontally)
                .fillMaxWidth(.5f),
            textAlign = TextAlign.Center
        )
        Spacer(modifier = Modifier.height(10.dp))
        Row(){
            Text(
                text = "Chosen seats",
                modifier = Modifier.background(color = Color.Green))
            Text(text = ": A3, A4.", color = Color.White)
        }
        Row(){
            Text(
                text = "Occupied Seats",
                modifier = Modifier.background(color = Color.Gray))
        }
        Row(){
            Text(
                text = "Available Seats",
                modifier = Modifier.background(color = Color.White))
        }


        Spacer(modifier = Modifier.height(20.dp))
        
        Text(
            text = "Ticket Types:",
            modifier = Modifier
                .border(width = 1.dp, color = Color.White)
                .background(color = Custom_LightBlue)
                .align(Alignment.CenterHorizontally)
                .fillMaxWidth(.5f),
            textAlign = TextAlign.Center
        )

        Spacer(modifier = Modifier.height(10.dp))

        Row() {
            Text(text ="Adult Tickets: ", color = Color.White)
            Text(text = "  2  ",
                modifier = Modifier
                    .border(width = 1.dp, color = Custom_DarkPurple)
                    .background(color = Color.White)
            )
        }

        Row() {
            Text(text ="Concession Tickets: ", color = Color.White)
            Text(text = "  0  ",
                Modifier
                    .border(width = 1.dp, color = Custom_DarkPurple)
                    .background(color = Color.White))
        }

        Button(onClick = {
            // DEBUG LOG START
            Log.d("DEBUG", "SEATSELECTION.movieID: "+madbViewModel.movieDetailChosen.value.movieId)
            Log.d("DEBUG", "SEATSELECTION.chosenDateTime: "+madbViewModel.currentBooking_ChosenDateTime)
            // seats as one string
            //     ["B1 B2"]
            // seat type like below
            //     val map = mapOf("A" to 2, "C" to 0)
            //     A = Adult seats, C = Concession seats
            // In the database, cut the seats string by number of each type:
            // For example: ["B1 B2 B3 B4"]
            //              mapOf("A" to 2, "C" to 2)
            //     Then adultSeats = ["B1 B2"]
            //     concessionSeats = ["B3 B4"]
            // The question is do it here or right before inserting into database
            // DEBUG LOG BLOCK END
            val LDTformatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss")
            var bookingLDT_str = madbViewModel.processingBooking_Date.value+"T"+madbViewModel.processingBooking_Time.value
            var bookingLDT = LocalDateTime.parse(bookingLDT_str,LDTformatter)
            var bookingToInsert = Booking(
                bookingId = 10,
                customerId = "10",
                movieId = 1,
                bookingDateTime = bookingLDT,
                adultSeat = "A1 A2",
                concessionSeat = ""
            )
            madbViewModel.addBooking(bookingToInsert)

            navController.navigate(Routes.BookingSuccess.value)

        }) {
            Text(text = "Confirm seat")}
    }
}