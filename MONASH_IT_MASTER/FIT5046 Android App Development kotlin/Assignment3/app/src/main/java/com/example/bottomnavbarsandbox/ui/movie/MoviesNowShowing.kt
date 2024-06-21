package com.example.bottomnavbarsandbox.ui.movie


import android.annotation.SuppressLint
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
//import coil.compose.rememberImagePainter

import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.focus.focusProperties
import androidx.navigation.NavHostController
import com.example.bottomnavbarsandbox.database.Movie
import com.example.bottomnavbarsandbox.database.MovieAppViewModel
import kotlinx.coroutines.launch
import com.example.bottomnavbarsandbox.ui.movie.DisplayMovieCard as DisplayMovieCard


    @SuppressLint("CoroutineCreationDuringComposition")
    @Composable
    fun MoviesNowShowing(navController: NavHostController, madbViewModel: MovieAppViewModel) {

        //retrieve movies from movie table entity
        val databaseMovies by madbViewModel.allMovies.observeAsState(emptyList())
        var databaseMoviesByGenre: List<Movie> by remember { mutableStateOf(emptyList())}

        // Create a coroutineScope to call db query coroutine functions
        val composableScope = rememberCoroutineScope()

        // Produce Movies Now Showing Page
        val blueColor = Color(0xFF6DB1FF)
        val backgroundColor = Color.Black

    Column(
            modifier = Modifier.fillMaxSize()
                .background(color = backgroundColor)
        )
        {
            Row(
                modifier = Modifier.background(color = blueColor)
                    .fillMaxWidth()
                    .padding(10.dp),
                horizontalArrangement = Arrangement.Center,
                content = {
                    Text(
                        text = "Movies Now Showing",
                        style = MaterialTheme.typography.headlineMedium
                    )

                }
            )
            Column(modifier = Modifier.fillMaxWidth()
            ) {
                Spacer(modifier = Modifier.size(10.dp))
                GenreFilter(madbViewModel)
            }
            Column(verticalArrangement = Arrangement.Top,
                    modifier = Modifier.fillMaxWidth()
                        .background(color = backgroundColor))

            {
                if (madbViewModel.genreChosen.value == "Any") {
                    DisplayMovieCard(
                        modelName = "MoviesNowShowing",
                        inputMovieList = databaseMovies,
                        navController = navController,
                        madbViewModel = madbViewModel
                    )
                }
                else //Update movie list in response to dropdown menu genre list
                {
                    composableScope.launch {
                        databaseMoviesByGenre = madbViewModel
                            .getMovieListByGenre(madbViewModel.genreChosen.value)
                        println("composable scope launch" + databaseMoviesByGenre)
                    }
                    DisplayMovieCard(
                        modelName = "MoviesNowShowing",
                        inputMovieList = databaseMoviesByGenre,
                        navController = navController,
                        madbViewModel = madbViewModel
                    )
                }

            }
        }
    }


@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun GenreFilter(madbViewModel: MovieAppViewModel) {
    val states = listOf("Any","Action", "Thriller","Science Fiction")
    var isExpanded by remember { mutableStateOf(false) }
    var selectedState by remember { mutableStateOf(states[0]) }

    ExposedDropdownMenuBox(
        expanded = isExpanded,
        onExpandedChange = { isExpanded = it },
    ) {
        TextField(
            modifier = Modifier
                .menuAnchor()
                .fillMaxWidth()
                .focusProperties {
                    canFocus = false
                }
                .padding(bottom = 8.dp),
            readOnly = true,
            value = selectedState,
            onValueChange = {},
            label = { Text("Genre") },

            trailingIcon = {
                ExposedDropdownMenuDefaults.TrailingIcon(expanded = isExpanded)
            },
        )
        ExposedDropdownMenu(
            expanded = isExpanded,
            onDismissRequest = { isExpanded = false }
        )
        {
            states.forEach { selectionOption ->
                DropdownMenuItem(
                    text = { Text(selectionOption) },
                    onClick = {
                        selectedState = selectionOption
                        isExpanded = false
                        madbViewModel.setGenreFilterChosen(selectionOption)
                    },
                    contentPadding = ExposedDropdownMenuDefaults.ItemContentPadding,
                )
            }
        }
    }
}



