package com.example.bottomnavbarsandbox.router

enum class Routes (val value: String) {
    // Home
    Home("Home"),

    // Now showing / Movie List screen
    MoviesComingSoon("MoviesComingSoon"),
    MoviesNowShowing("MoviesNowShowing"),
    MovieDetail("MovieDetail"),

    // Ticketing
    Sessions("Sessions"),
    SeatSelection("SeatSelection"),
    BookingSuccess("BookingSuccess"),

    // Contact us
    ContactUs("Contact Us"),
    Map("Map"),

    // Account
    Profile("Profile"),
}