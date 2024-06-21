package com.example.bottomnavbarsandbox.database

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update
import kotlinx.coroutines.flow.Flow

@Dao
interface BookingDao {
    // CRUD Operations list:
    // - Create
    // - > addBooking()
    // - Read
    // - > getAll() -> returns Flow<List<Booking>>
    // - > getBookingById()
    // - > getBookingByDateTime()
    // - > getBookingByCustomerId()
    // - Update
    // - > updateBooking
    // - > updateBookingDAO <- the Room-annotated function that actually interacts with database.
    // - Delete
    // - > deleteBookingById()
    // - > deleteBookingDAO() <- the Room-annotated function that actually interacts with database.

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    fun addBooking(newBooking: Booking)//: Int
    // Create a Movie object first, then pass it into addMovie() like this:
    // val newBooking = Booking(
    //    movieId = "12345",
    //    adultSeat = "1A 1B",
    //    concessionSeat = "1C"
    // )
    // bookingDao.addBooking(newBooking)
    //
    // INSERT operations can return the bookingId of the new entry?

    @Query("SELECT * FROM Booking")
    fun getAll(): Flow<List<Booking>>

    @Query("SELECT * FROM Booking WHERE booking_id IN (:bookingId)")
    fun getBookingById(bookingId: Int): Booking
    // May add getBookingByFullName() if needed in the future

    @Query("SELECT * FROM Booking WHERE movie_id = :movieId AND booking_date_time = :screeningDateTime")
    fun getBookingByDateTime(movieId: Int, screeningDateTime: String): List<Booking>
    // Get all bookings of a given movie at a given screeningDateTime
    // Beware of booking_date_time's format, 2024-05-01T14:30:00

    @Query("SELECT * FROM Booking WHERE customer_id = :customerId")
    fun getBookingByCustomerId(customerId: String) : List<Booking>
    // For "Your Tickets" function
    // If you have the logged in user's ID, you can get all of his bookings.

    fun updateBooking(
        bookingId: Int,
        movieId: Int,
        customerId: String,
        adultSeat: String,
        concessionSeat: String,
    ){
        val bookingToUpdate = getBookingById(bookingId)
        if (bookingToUpdate != null) {
            if (movieId != null)        { bookingToUpdate.movieId = movieId }
            if (customerId != null)     { bookingToUpdate.customerId = customerId }
            if (adultSeat != null)      { bookingToUpdate.adultSeat = adultSeat }
            if (concessionSeat != null) { bookingToUpdate.concessionSeat = concessionSeat }
            updateBookingDAO(bookingToUpdate)
        } else {
            // Handle case where booking with given ID doesn't exist
        }
    }
    // Change attributes of movie of the given movie_id
    // Call it like this to change specified fields:
    // bookingDao.updateBooking(bookingId = 123, adultSeat = "A1 A2 A3")

    @Update
    fun updateBookingDAO(booking: Booking)

    fun deleteBookingById(bookingId: Int){
        val bookingToUpdate = getBookingById(bookingId)
        deleteBookingDAO(bookingToUpdate)
    }
    @Delete
    fun deleteBookingDAO(booking: Booking)
    // Delete the booking of the given booking_id
}