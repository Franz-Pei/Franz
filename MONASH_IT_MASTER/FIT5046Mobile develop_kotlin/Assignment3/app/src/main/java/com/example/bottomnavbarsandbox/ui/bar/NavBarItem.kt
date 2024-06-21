package com.example.bottomnavbarsandbox.ui.bar

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Call
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material.icons.filled.Person
import androidx.compose.ui.graphics.vector.ImageVector
import com.example.bottomnavbarsandbox.router.Routes


data class NavBarItem (
    val label : String = "",
    val icon : ImageVector = Icons.Filled.Home,
    val route : String = "",
) {
    fun NavBarItemList () : List <NavBarItem> {
        return listOf(
            NavBarItem(
                label = "Home",
                icon = Icons.Filled.Home,
                route = Routes.Home.value,
            ),
            NavBarItem(
                label = "Movies",
                icon = Icons.Filled.Person,
                route = Routes.MoviesNowShowing.value,
            ),
            NavBarItem(
                label = "Call",
                icon = Icons.Filled.Call,
                route = Routes.ContactUs.value,
            ),
            NavBarItem(
                label = "Map",
                icon = Icons.Filled.LocationOn,
                route = Routes.Map.value,
            ),
            NavBarItem(
                label = "Profile",
                icon = Icons.Filled.AccountCircle,
                route = Routes.Profile.value,
            ),
        )
    }
}