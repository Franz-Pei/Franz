package com.example.bottomnavbarsandbox.restful.addToGCal

import retrofit2.http.Body
import retrofit2.http.POST

// REFERENCE CODE DO NOT DELETE
//interface ApiService {
//    @GET("endpoint")
//    fun getData(): Call<ResponseBody> // Define your desired return type
//}

interface ApiService {
    // Events: insert
    @POST("calendars/calendarId/events")
    suspend fun postEvent(@Body request: EventRequest): CalendarResponse

    // Calendar: insert
    @POST("calendar/v3/calendars/calendarId/events")
    suspend fun postCalendar(@Body request: CalendarRequest): CalendarResponse

    // LEO
    // API specific information DO NOT DELETE
    // The URL of the service you want to access.
    // >  Base:
    // >    https://www.googleapis.com/
    // >  Events Insert:
    // >    calendars/calendarId/events
    // >  Calendar Insert:
    // >    calendar/v3/calendars/calendarId/events
    // The auth scope:
    // >   asd
    // A client ID and client secret
    // >  Client ID:
    // >    708796991753-scskn3k6ognlqm6mf2vi74om9cnvn4gn.apps.googleusercontent.com
    // >  Client SC:
    // >    The JSON file "client_secret_7087(...).googleusercontent.com.json"
}