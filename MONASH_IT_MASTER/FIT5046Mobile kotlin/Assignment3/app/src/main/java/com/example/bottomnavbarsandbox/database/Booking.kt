package com.example.bottomnavbarsandbox.database

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.time.LocalDateTime

@Entity(tableName = "booking")
data class Booking(
    @PrimaryKey(autoGenerate = true)
    @ColumnInfo(name = "booking_id") val bookingId : Int,

    @ColumnInfo(name = "customer_id") var customerId : String,
    @ColumnInfo(name = "movie_id") var movieId: Int,
    @ColumnInfo(name = "booking_date_time") var bookingDateTime: LocalDateTime,
    @ColumnInfo(name = "adult_seat") var adultSeat: String,
    @ColumnInfo(name = "concession_seat") var concessionSeat: String,
)

// From meeting notes: https://docs.google.com/document/d/1NrndrDSP6K8MJaTCRrORftCb8vH08kndfPJjH-7IX4E/edit
// Booking table:
// BookingId, MovieId,
// AdultSeats (store as string like `A1 A2` SQLLite, then in Kotlin we convert the string to a list if needed),
// ConcessionSeat
// (can take other info from movies table with the movieID)
//
// * 01 MAY 2024 1544 NOTE:
//   If each movie contains multiple datetime, movieId will not be unique for context of screenings.
//   Added new column booking_date_time to store this information.
//   Also updated movieId type from String to Int to match movie's configuration