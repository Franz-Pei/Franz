package com.example.bottomnavbarsandbox.restful.addToGCal

// Response from a POST HTTP request to insert new calendar.
// The app always creates a new calendar and add the booking as an event.
data class CalendarResponse(
    val items: List<ResponseItem> = ArrayList()
)

//data class CalendarResponse(
//    val kind: String,
//    val etag: String,
//    val id: String,
//    val summary: String,
//    val description: String,
//    val location: String,
//    val timeZone: String,
//    val conferenceProperties: ConferenceProperties
//)
//
//data class ConferenceProperties(
//    val allowedConferenceSolutionTypes: List<String>
//)