package com.example.bottomnavbarsandbox.restful.addToGCal

data class EventRequest (
    // If you want to access the primary calendar
    // of the currently logged in user,
    // use the "primary" keyword.
    // =====
    // For the MovieApp, get the calendarId from the CalendarRequest,
    // Then pass that ID here to create the event in the same calendar
    var calendarId: String,

    // summary
    // 		string
    // 		Title of the event.

    // start.dateTime
    // 		datetime
    //		The time, as a combined date-time value (formatted according to RFC3339).
    //		A time zone offset is required unless a time zone is explicitly specified in timeZone.
)