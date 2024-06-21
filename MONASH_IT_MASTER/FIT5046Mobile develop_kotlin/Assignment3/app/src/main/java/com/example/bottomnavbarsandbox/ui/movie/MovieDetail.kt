package com.example.bottomnavbarsandbox.ui.movie

import android.hardware.camera2.params.BlackLevelPattern
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.Button
import androidx.compose.material.Icon
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.example.bottomnavbarsandbox.R
import com.example.bottomnavbarsandbox.database.Movie
import com.example.bottomnavbarsandbox.database.MovieAppViewModel
import com.example.bottomnavbarsandbox.router.Routes
import java.time.LocalDateTime

@Composable
fun MovieDetail(backModelName: String, navController: NavHostController, madbViewModel: MovieAppViewModel)
{
    val blueColor = Color(0xFF6DB1FF)
    val backgroundColor = Color.Black

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(color = backgroundColor),
    )
    {
        Row(
            modifier = Modifier
                .background(color = blueColor)
                .fillMaxWidth()
                .padding(10.dp),
            horizontalArrangement = Arrangement.Center,

            content = {
                Text(
                    text = "Movie Detail",
                    style = MaterialTheme.typography.headlineMedium
                )
            }
        )

        Column(verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier
                .fillMaxWidth()
                .background(color = backgroundColor)
                )
        {


            val inputMovie: Movie = madbViewModel.movieDetailChosen.value
            displayMovieDetailPicture(inputMovie.movieImagePath)

            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(color = Color.White)){
                Text("Movie name: " + inputMovie.movieName, style =
                MaterialTheme.typography.bodyLarge)
                Text("Movie Synopsis: " + inputMovie.movieSummary, style =
                MaterialTheme.typography.bodyLarge)
                Text("Rating: " + inputMovie.movieUserRating, style =
                MaterialTheme.typography.bodyLarge)
                Text("Genre: " + inputMovie.movieGenre, style =
                MaterialTheme.typography.bodyLarge)
                Text("Runtime: " + inputMovie.movieRuntimeHour + inputMovie.movieRuntimeMinute, style =
                MaterialTheme.typography.bodyLarge)
            }
            val context = LocalContext.current
            Column {
                Button(
                    onClick = {
                        navController.navigate(Routes.MoviesNowShowing.value)
                    },
                    modifier = Modifier
                        .padding(20.dp)
                        .size(width = 250.dp, height = 60.dp)
                        .background(color = blueColor)
                )
                {
                    Text(text = "Back to Movie List", fontSize = 18.sp)
                }
                Button(
                    onClick = {
                        /*
                        var intent = Intent(context, Sessions::class.java)
                        context.startActivity(intent)

                         */

                        navController.navigate(Routes.Sessions.value)
                    },
                    modifier = Modifier
                        .padding(20.dp)
                        .size(width = 250.dp, height = 60.dp)
                )
                {
                    Text(
                        text = "Book Ticket", fontSize = 18.sp,
                        textAlign = TextAlign.Center
                    )
                }
            }
    }
}
}

