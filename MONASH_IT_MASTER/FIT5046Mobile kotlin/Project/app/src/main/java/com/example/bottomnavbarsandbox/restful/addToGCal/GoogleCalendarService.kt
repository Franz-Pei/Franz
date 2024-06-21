package com.example.bottomnavbarsandbox.restful.addToGCal

import retrofit2.http.Body
import retrofit2.http.Header
import retrofit2.http.POST
import com.google.api.services.calendar.model.Event

interface GoogleCalendarService {
    @POST("/calendar/v3/calendars/{calendarId}/events")
    suspend fun insertEvent(
        @Header("Authorization") accessToken: String,
        @Body event: Event
    ): Event // Change the return type according to your needs
}