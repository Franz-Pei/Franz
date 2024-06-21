package com.example.bottomnavbarsandbox.restful.addToGCal

// Creates a secondary calendar for adding the booking
// posts insert to Calendars
// HTTP Reqiest:
//     POST https://www.googleapis.com/calendar/v3/calendars
data class CalendarRequest (
    val summary: String, // the name of the new calendar
)