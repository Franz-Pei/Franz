package com.example.bottomnavbarsandbox.ui.movie


import android.annotation.SuppressLint
import android.content.ContentValues
import android.net.Uri
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.example.bottomnavbarsandbox.database.Movie
import com.example.bottomnavbarsandbox.database.MovieAppViewModel
import com.example.bottomnavbarsandbox.ui.bar.BottomNavBar
import com.example.bottomnavbarsandbox.ui.theme.BottomNavBarSandboxTheme
import com.example.bottomnavbarsandbox.ui.theme.Purple40
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import kotlinx.coroutines.launch
import java.io.File
import androidx.compose.runtime.setValue
import androidx.compose.runtime.getValue


@SuppressLint("CoroutineCreationDuringComposition")
@Composable
fun MoviesComingSoon(navController: NavHostController,madbViewModel: MovieAppViewModel)
{
            //retrieve movies from movie table entity
            val databaseMovies by madbViewModel.allMoviesComingSoon.observeAsState(emptyList())
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
                            text = "Movies Coming Soon",
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