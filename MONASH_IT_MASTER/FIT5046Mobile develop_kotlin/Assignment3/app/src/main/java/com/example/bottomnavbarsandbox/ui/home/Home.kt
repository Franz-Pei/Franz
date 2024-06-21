package com.example.bottomnavbarsandbox.ui.home

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Button
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
import com.example.bottomnavbarsandbox.database.MovieAppViewModel
import com.example.bottomnavbarsandbox.router.Routes
import com.example.retrofitgooglelab.googleSearchResultFinish
import com.example.retrofitgooglelab.googleSearchResults


@Composable
fun Home(navController: NavHostController, madbViewModel: MovieAppViewModel) {

    val blueColor = Color(0xFF6DB1FF)
    val backgroundColor = Color(0xFF0A0F2F)
    val context = LocalContext.current

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(color = backgroundColor)
        .verticalScroll(rememberScrollState())
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
                    text = "Home Screen",
                    style = MaterialTheme.typography.headlineMedium
                )
            }
        )

        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier
                .fillMaxWidth()
                .background(color = backgroundColor)
                )
        {

            val image = painterResource(
                R.drawable.cinema_craiyon)
            Column {
                Image(
                    painter = image,
                    contentDescription = null,
                    contentScale = ContentScale.Crop,
                    alpha = 0.9F,
                    modifier = Modifier.size(200.dp,200.dp)
                )
            }
            Column()
            {
                Button(
                    onClick = {

                        navController.navigate(Routes.MoviesNowShowing.value)
                    },
                    modifier = Modifier
                        .padding(25.dp)
                        .size(width = 180.dp, height = 80.dp)
                        .background(color = blueColor)
                )
                {
                    Text(text = "Movies Now Showing", fontSize = 20.sp,
                        textAlign = TextAlign.Center)
                }

                Button(
                    onClick = {

                        navController.navigate(Routes.MoviesComingSoon.value)
                    },
                    modifier = Modifier
                        .padding(25.dp)
                        .size(width = 180.dp, height = 80.dp)
                )
                {
                    Text(
                        text = "Movies Coming Soon", fontSize = 18.sp,
                        textAlign = TextAlign.Center
                    )
                }
            }
            Column(horizontalAlignment = Alignment.CenterHorizontally)
            {// If Home page loads first time, run search API
                if(madbViewModel.homePageCheck.value == false) {
                    googleSearchResults(madbViewModel)
                    madbViewModel.setHomePageCheck(true)
                }
                else {
                    googleSearchResultFinish(madbViewModel.homePageResult.value)
                }

            }
        }

    }
}
