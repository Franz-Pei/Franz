package com.example.bottomnavbarsandbox.ui.bar

import androidx.annotation.RequiresApi
import androidx.compose.foundation.layout.padding
import androidx.compose.material.BottomNavigation
import androidx.compose.material.BottomNavigationItem
import androidx.compose.material3.Icon
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.example.bottomnavbarsandbox.database.MovieAppViewModel

import com.example.bottomnavbarsandbox.ui.profile.Profile
import com.example.bottomnavbarsandbox.router.Routes
import com.example.bottomnavbarsandbox.ui.ticketing.SeatSelection
import com.example.bottomnavbarsandbox.ui.ticketing.Sessions
import com.example.bottomnavbarsandbox.ui.contactus.ContactUs
import com.example.bottomnavbarsandbox.ui.map.Map
import com.example.bottomnavbarsandbox.ui.home.Home
import com.example.bottomnavbarsandbox.ui.movie.MovieDetail
import com.example.bottomnavbarsandbox.ui.movie.MoviesComingSoon
import com.example.bottomnavbarsandbox.ui.movie.MoviesNowShowing
import com.example.bottomnavbarsandbox.ui.ticketing.BookingSuccess

@RequiresApi(64)
@Composable
fun BottomNavBar (madbViewModel: MovieAppViewModel) {
    val navController = rememberNavController()
    val testString = "test"

    Scaffold (
//        topBar = {
//            // here need a top bar and contain title
//            // need to set color
//            TopAppBar(
//                title = { Text(text = "Map") }
//            )
//        },
        bottomBar = { 
            BottomNavigation (
                backgroundColor = Color.LightGray
            ) {
                val navBackStackEntry by navController.currentBackStackEntryAsState()
                val currentDestination = navBackStackEntry?.destination
                
                NavBarItem().NavBarItemList().forEach{
                    navBarItem -> BottomNavigationItem(
                        icon = { Icon(navBarItem.icon,contentDescription = null) },
                        label = { Text(text = navBarItem.label) },
                        selected = currentDestination?.hierarchy?.any{
                            it.route == navBarItem.route
                        } == true,
                        onClick = {
                            navController.navigate(navBarItem.route) {
                                popUpTo(navController.graph.findStartDestination().id){saveState=true}
                                launchSingleTop = true
                                restoreState = true
                            }
                        },
                    )
                }
            }
        }
    ) {
        paddingValues ->
        NavHost (
            navController,
            startDestination = Routes.Home.value,
            Modifier.padding(paddingValues)
        ) {
            composable (Routes.Home.value) {
                Home(navController,madbViewModel)
            }
            composable(Routes.MoviesNowShowing.value) {
                MoviesNowShowing(navController,madbViewModel)
            }
            composable(Routes.ContactUs.value) {
                ContactUs(navController)
            }
            composable(Routes.Map.value) {
                Map(navController)
            }
            composable (Routes.Profile.value) {
                Profile(navController)
            }
            //Movies

            composable(Routes.MoviesComingSoon.value) {
                MoviesComingSoon(navController,madbViewModel)
            }
            composable(Routes.MovieDetail.value) {
                MovieDetail(testString,navController,madbViewModel)
            }
            composable (Routes.SeatSelection.value) {
                SeatSelection(navController,madbViewModel)
            }
            composable (Routes.Sessions.value) {
                Sessions(navController, madbViewModel)
            }
            composable (Routes.BookingSuccess.value) {
                BookingSuccess(navController, madbViewModel)
            }
        }
    }
}

