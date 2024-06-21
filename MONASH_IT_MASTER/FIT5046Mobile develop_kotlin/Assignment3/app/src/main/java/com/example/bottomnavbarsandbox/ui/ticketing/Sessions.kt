package com.example.bottomnavbarsandbox.ui.ticketing

import android.util.Log
import androidx.annotation.RequiresApi
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.DatePicker
import androidx.compose.material3.DatePickerDialog
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TextField
import androidx.compose.material3.rememberDatePickerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.focusProperties
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.example.bottomnavbarsandbox.activity.DisplayApp
import com.example.bottomnavbarsandbox.database.Movie
import com.example.bottomnavbarsandbox.database.MovieAppViewModel
import com.example.bottomnavbarsandbox.router.Routes
import com.example.bottomnavbarsandbox.ui.theme.Custom_DarkPurple
import com.example.bottomnavbarsandbox.ui.theme.Custom_LightBlue
import java.time.Instant
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.Calendar

/*
@Composable
fun Sessions (navController: NavHostController, navViewModel: NavigationViewModel) {

    val name = remember { mutableStateOf("") }

    // Logic Flow:
    // [App] Retrieve list of all movies
    // [App] Show list of movies in dropdown
    //       ^ Default showing the first movie of the list?
    //         Should it show date and time yet?
    // [User] Choose a movie from the dropdown list
    // [App] Retrieve that movie's screening DATES
    //          val chosenMovie = getMovieById() ->
    //       -> val screeningsString = chosenMovie.movieScreenings ->
    //       -> val screeningsStringArray: Array<String> = Gson().fromJson(screeningsString, Array<String>::class.java) ->
    //       -> val screeningsLDTArray = screeningsStringArray.map { LocalDateTime.parse(it) } ->
    //       -> val screeningsLDTArray_Date = screeningsLDTArray.map { it.toLocalDate() }
    // [App] Show screening dates in DatePicker with only screeningsLDTArray_Date dates selectable
    // [User] Chooses a date in DatePicker, within the given date range
    // [App] Retrieves that movie's screenings TIMES of the given date
    //          val chosenDate //somehow get the chosen date as LocalDate
    //       -> val screeningsLDTArray_Time = screeningsLDTArray
    //                                        .filter{ dateTime -> dateTime.toLocalDate() == chosenDate }
    //                                        .map { dateTime -> dateTime.toLocalTime() }
    // [App] Show screening dates in LazyRow with screeningsLDTArray_Time timeslots selectable
    //                                                                    ^ Only as starting time
    // [User] Chooses a screening time from the table
    // [App] Consolidates information (movieId, the chosen DateTime as one string).
    // [App] Navigates the user to SeatSelection with the above information.
}


 */

/*
class Sessions : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            androidx.compose.material.MaterialTheme {
                sessionsModel()
            }
        }
    }

}

 */

@RequiresApi(0)
@Composable
fun Sessions(navController: NavHostController, madbViewModel: MovieAppViewModel) {
    DisplayApp(title = "Sessions") {
        Column {
            DisplayMoviePicker(madbViewModel)
            DisplayDatePicker(madbViewModel)
            DisplayTimePicker(navController,madbViewModel)
        }
    }
}

@RequiresApi(0)
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DisplayDatePicker(madbViewModel: MovieAppViewModel){
    val calendar = Calendar.getInstance()
    val selectedDate = remember { mutableStateOf(calendar)}
    var selectedDateString = remember { mutableStateOf(madbViewModel.processingBooking_Date)}
    var showDatePicker by remember {
        mutableStateOf(false)
    }
    val datePickerState = rememberDatePickerState(
        initialSelectedDateMillis = Instant.now().toEpochMilli()
    )
    Column (
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxWidth()
    ) {
        if (showDatePicker) {
            DatePickerDialog(
                onDismissRequest = {
                    showDatePicker = false
                },
                confirmButton = {
                    TextButton(onClick = {
                        showDatePicker = false
                        //selectedDateMillis!! null safety because type declared as Long? selectedDate = datePickerState.selectedDateMillis!!
                        //val dateFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd")
                        //madbViewModel.processingBooking_Date_setter(datePickerState.selectedDate) // Convert this millis to a string of YYYY-MM-DD
                        var processingDateLD = datePickerState.selectedDateMillis?.let {
                            Instant.ofEpochMilli(it)
                                .atZone(ZoneId.systemDefault())
                                .toLocalDate()
                        }
                        madbViewModel.processingBooking_Date_setter(processingDateLD.toString())
                        Log.d("DatePicker picked", "madbViewModel.processingBooking_Date: "+madbViewModel.processingBooking_Date.value)
                    }) {
                        Text(text = "OK")
                    }
                },
                dismissButton = {
                    TextButton(onClick = {
                        showDatePicker = false
                    }) {
                        Text(text = "Cancel")
                    }
                }
            ) //end of dialog
            { //still column scope
                DatePicker(
                    state = datePickerState
                )
            }
        }// end of if
        Button(
            onClick = {
                showDatePicker = true
            },

        ) {
            Text(text = "Select by date")
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DisplayMoviePicker(madbViewModel: MovieAppViewModel){

    // Retrieve movie list from movie table entity
    val madbMovieList = madbViewModel.allMovies.value

    val movies = listOf(
        "Binah",
        "Hieronymus",
        "Kaitenger vs Perorodzilla",
        "Chesed",
        "Hod",
        "Gregorius")

    // Retrieving movie screening times information from chosen movie from Movie detail page
    //
    //@ColumnInfo(name = "movie_screenings")
    // "2024-02-10T10:30:00,2024-02-10T14:30:00,2024-02-10T20:30:00,2024-03-14T12:30:00"

    val inputMovieFromMovieDetailPage: Movie = madbViewModel.movieDetailChosen.value
    val inputMovieScreenings: String = inputMovieFromMovieDetailPage.movieScreenings
    val inputMovieScreeningsList: List<String> = inputMovieScreenings
        .split(",").map { it.trim() }

    // Add the LocalDateTime of each screen time to new list
    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss")
    val inputMovieScreeningsList2: List<LocalDateTime> = listOf()

    for (item in inputMovieScreeningsList)
    {
        if (item.length == 19)
        {
            inputMovieScreeningsList2.plus(LocalDateTime.parse(item))
        }
        else {

            val index = 12
            val resultString = item.substring(0, index) + item.substring(index+1)
        }
    }


    val madbMovieList_names: MutableList<String> = mutableListOf()

    if (madbMovieList != null) {
        for (movie_entry in madbMovieList){
            madbMovieList_names += movie_entry.movieName
        }
    } else {
        madbMovieList_names += "Planet Earth 3"
    }


    var isExpanded by remember { mutableStateOf(false) }

    //var selectedMovie by remember { mutableStateOf(madbMovieList_names[0]) }
    var selectedMovie by remember { mutableStateOf(madbViewModel.movieDetailChosen.value.movieName) }

    Column (modifier = Modifier.padding(16.dp)) {
        Text(text = "Select by movie")
        ExposedDropdownMenuBox(
            expanded = isExpanded,
            onExpandedChange = { isExpanded = it },
        ) {
            TextField(
                modifier = Modifier
                    .menuAnchor()
                    .fillMaxWidth()
                    .focusProperties { canFocus = false }
                    .padding(5.dp),
                readOnly = true,
                value = selectedMovie,
                onValueChange = {},
                label = { Text(text = "Movie")},
                trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = isExpanded) },
            )

            ExposedDropdownMenu(
                expanded = isExpanded,
                onDismissRequest = { isExpanded = false }
            ) {
                madbMovieList_names.forEach { selectionOption ->
                        DropdownMenuItem(
                            text = { Text(selectionOption) },
                            onClick = {
                                selectedMovie = selectionOption
                                isExpanded = false
                            },
                            contentPadding = ExposedDropdownMenuDefaults.ItemContentPadding,
                        )
                    }

            }
        }
    }
}

@Composable
fun DisplayTimePicker (navController: NavHostController, madbViewModel: MovieAppViewModel) {

    var timeslots by remember {
        mutableStateOf(mutableListOf("09:00:00","10:30:00","12:00:00"))
    }
    val LDTformatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss")
    val LDformatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
    var dayToFilter by remember {
        mutableStateOf(LocalDate.parse("2024-02-15T10:30:00",LDTformatter))
    }

    LaunchedEffect(Unit){
        // Get the first available screening date as default
        val chosenMovie = madbViewModel.movieDetailChosen.value
        var retrievedTimeslots = chosenMovie.movieScreenings.split(",")
        var retrievedTimeslots_first = retrievedTimeslots[0]
        dayToFilter = (LocalDate.parse(retrievedTimeslots_first,LDTformatter))
        madbViewModel.processingBooking_Date_setter(dayToFilter.toString())
    }

    // Launch on changes on madbViewModel.processingBooking_Date
    //     madbViewModel.processingBooking_Date_setter executed in LE(Unit){}
    LaunchedEffect(madbViewModel.processingBooking_Date){
        // Get showtimes of chosen movie
        val chosenMovie = madbViewModel.movieDetailChosen.value
        //@ColumnInfo(name = "movie_screenings")
        // "2024-02-10T10:30:00,2024-02-10T14:30:00,2024-02-10T20:30:00,2024-03-14T12:30:00"
        var retrievedTimeslots = chosenMovie.movieScreenings.split(",")
        Log.d("screenings of the movie", "retrievedTimeslots: $retrievedTimeslots")
        // Convert to LocalDateTime
        var retrievedTimeslots_LDT = retrievedTimeslots.map { LocalDateTime.parse(it, LDTformatter) }
        // Get the chosen date from DatePicker (updates when "confirm"ing datepicker calendar dialogue)
        dayToFilter = LocalDate.parse(madbViewModel.processingBooking_Date.value,DateTimeFormatter.ofPattern("yyyy-MM-dd"))
        Log.d("dayToFilter", "dayToFilter: $dayToFilter")
        var retrievedTimeslots_LDT_filtered = retrievedTimeslots_LDT.filter { LDT ->
            LDT.toLocalDate() == dayToFilter
        }
        val retrievedTimeslots_LDT_filtered_str = retrievedTimeslots_LDT_filtered.map { LDT -> LDT.toString() }
        timeslots = retrievedTimeslots_LDT_filtered_str.toMutableList()
        Log.d("PostDayToFilter", "timeslots: $timeslots")
    }

    Spacer(modifier = Modifier.height(10.dp))

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxWidth(),
    ){
        Text(
        text = "Showing Times:",
        modifier = Modifier
            .border(width = 1.dp, color = Color.White)
            .background(color = Custom_LightBlue)
            .align(Alignment.CenterHorizontally)
            .fillMaxWidth(.5f),
        textAlign = TextAlign.Center
        )
    }

    Spacer(modifier = Modifier.height(10.dp))

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
            .background(color = Custom_LightBlue),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
//        RowWithText("09:00 AM",navController,madbViewModel)
//        RowWithText("12:00 PM",navController,madbViewModel)
//        RowWithText("03:00 PM",navController,madbViewModel)
//        RowWithText("06:00 PM",navController,madbViewModel)
        for (screenings in timeslots) {
            RowWithText(screenings,navController,madbViewModel)
        }
    }
}

@Composable
fun RowWithText(content: String,navController: NavHostController, madbViewModel: MovieAppViewModel){
    val context = LocalContext.current
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier
//            .padding(vertical = 4.dp)
            .fillMaxWidth()
            .height(30.dp)
            .border(width = 2.dp, color = Custom_DarkPurple)
    ) {
        Box(
            modifier = Modifier
                .weight(1f)
                .padding(horizontal = 4.dp)
                .clickable {
                    /*
                    var intent = Intent(context, SeatSelection::class.java)
                    context.startActivity(intent)

                    */
                    madbViewModel.currentBooking_ChosenDateTime_setter("2024-02-10T10:30:00")
                    // DEBUG LOG START
                    Log.d(
                        "DEBUG",
                        "SESSIONS.movieID: " + madbViewModel.movieDetailChosen.value.movieId
                    )
                    Log.d(
                        "DEBUG",
                        "SESSIONS.chosenDateTime: " + madbViewModel.currentBooking_ChosenDateTime
                    )
                    // DEBUG LOG BLOCK END
                    navController.navigate(Routes.SeatSelection.value)
                },
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = content,
                fontSize = 16.sp,
            )
        }
    }
}