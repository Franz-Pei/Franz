package com.example.bottomnavbarsandbox.ui.movie

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.bottomnavbarsandbox.database.Movie
import com.example.bottomnavbarsandbox.router.Routes
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.example.bottomnavbarsandbox.database.MovieAppViewModel

@Composable
fun MovieCard(movie: Movie, modelName: String, navController: NavHostController,
              madbViewModel: MovieAppViewModel) {

    ElevatedCard(
        onClick = {

            // When user clicks the movie card, they go to the Movie Detail page for that movie
            madbViewModel.setMovieDetailChosen(movie)

            navController.navigate(Routes.MovieDetail.value)

        },
        elevation = CardDefaults.cardElevation(
            defaultElevation = 6.dp
        ),
        modifier = Modifier
            .fillMaxWidth()
            .padding(0.dp, 0.dp, 0.dp, 10.dp)
    ) {
        Row (
            modifier = Modifier.fillMaxWidth(),
        ){
            Column() {

                displayMovieIcon(movie.movieImagePath,"drawable")

            }

            Column() {
                    Text(
                        text = movie.movieName,
                        modifier = Modifier
                            .padding(2.dp).fillMaxWidth(0.5f),
                        textAlign = TextAlign.Center,
                    )

                    Text(
                        text = movie.movieGenre,
                        modifier = Modifier
                            .padding(2.dp),
                        textAlign = TextAlign.Center
                    )

                Text(
                    text = "Runtime: " + movie.movieRuntimeHour + movie.movieRuntimeMinute,
                    modifier = Modifier
                        .padding(2.dp),
                    textAlign = TextAlign.Center
                )

            }
            Column() {
                Text(
                    text = "Rating: " + movie.esrbRating,
                    modifier = Modifier
                        .padding(2.dp),
                    textAlign = TextAlign.Center
                )
                Text(
                    text = movie.movieUserRating.toString(),
                    modifier = Modifier
                        .padding(2.dp),
                    textAlign = TextAlign.Center
                )
                Text(
                    text = "Available until:" + movie.movieEndDate,
                    modifier = Modifier
                        .padding(2.dp),
                    textAlign = TextAlign.Center
                )
            }
        }
    }
}

@Composable
fun Text(text: String, modifier: Any, textAlign: Any) {
}

@Composable
fun DisplayMovieCard(
    modifier: Modifier = Modifier,
    inputMovieList: List<Movie>,
    modelName: String,
    navController : NavHostController,
    madbViewModel: MovieAppViewModel
 ) {

    /*
    //Example list

    val movieListSample: List<Movie> = listOf(
        Movie(
            movieName = "Planet Earth 3",
            esrbRating = "PG",
            movieGenre = "Nature Documentary",
            movieRuntimeHour = 2,
            movieRuntimeMinute = 30, movieUserRating = 4.5, movieImagePath = "filename",
            movieSummary = "summary", movieStartDate= LocalDateTime.of(2024, 9, 9, 5, 30),
            movieEndDate= LocalDateTime.of(2024, 9, 9, 5, 30),
            movieScreenings="",
            movieId = 100)
        */

    LazyColumn(modifier) {
        items(
            items = inputMovieList,
            key = { movie->
                // key for item
                movie.movieId
            }
        ) { movie ->
            MovieCard(movie = movie, modelName = modelName, navController = navController,madbViewModel)
        }
    }
}

/*
displayMovieIcon(filename: "kungfupanda", resourcetype: "drawable")
*/
@Composable
fun displayMovieIcon(filename: String, resourcetype: String = "drawable") {
    val context = LocalContext.current
    val drawableId: Int = context.getResources()
        .getIdentifier(filename, resourcetype,
            context.getPackageName())

    Image(
        painter = painterResource(drawableId),
        contentDescription = null,
        contentScale = ContentScale.Crop,
        alpha = 0.9F,
        modifier = Modifier.size(78.dp, 78.dp))

}

@Composable
fun displayMovieDetailPicture(filename: String, resourcetype: String = "drawable") {
    val context = LocalContext.current
    val drawableId: Int = context.getResources()
        .getIdentifier(filename, resourcetype,
            context.getPackageName())

    Image(
        painter = painterResource(drawableId),
        contentDescription = null,
        contentScale = ContentScale.Crop,
        alpha = 0.9F,
        modifier = Modifier.size(270.dp,270.dp))

}