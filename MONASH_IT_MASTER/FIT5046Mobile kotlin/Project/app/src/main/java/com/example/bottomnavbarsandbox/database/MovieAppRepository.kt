package com.example.bottomnavbarsandbox.database

import android.app.Application
import androidx.room.Query
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.withContext
import java.time.LocalDateTime

class MovieAppRepository (application: Application) {
    //Dao's below must be var, not val, otherwise no data received
    private var bookingDao: BookingDao = MovieAppDatabase.getDatabase(application).getBookingDao()
    private var customerDao: CustomerDao = MovieAppDatabase.getDatabase(application).getCustomerDao()
    private var movieDao: MovieDao = MovieAppDatabase.getDatabase(application).getMovieDao()

    // Booking DAO operations List:
    // - Create
    // - > addBooking()
    // - Read
    // - > getAll()
    // - > getBookingById()
    // - > getBookingByDateTime()
    // - > getBookingByCustomerId()
    // - Update
    // - > updateBooking
    // - > updateBookingDAO <- the Room-annotated function that actually interacts with database.
    // - Delete
    // - > deleteBookingById()
    // - > deleteBookingDAO() <- the Room-annotated function that actually interacts with database.

    val allBookings: Flow<List<Booking>> = bookingDao.getAll()
    suspend fun addBooking(newBooking:Booking){
        bookingDao.addBooking(newBooking)
    }
    suspend fun getBookingById(bookingId: Int): Booking{
        return withContext(Dispatchers.IO) {
            bookingDao.getBookingById(bookingId)
        }
    }
    suspend fun getBookingByDateTime(movieId: Int,screeningDateTime: String): List<Booking>{
        return withContext(Dispatchers.IO) {
            bookingDao.getBookingByDateTime(
                movieId = movieId,
                screeningDateTime = screeningDateTime
            )
        }
    }
    suspend fun getBookingByCustomerId(customerId: String): List<Booking>{
        return withContext(Dispatchers.IO) {
            bookingDao.getBookingByCustomerId(customerId = customerId)
        }
    }
    suspend fun updateBooking(
                              bookingId: Int,
                              movieId: Int,
                              customerId: String,
                              adultSeat: String,
                              concessionSeat: String,
    ){
        bookingDao.updateBooking(bookingId = bookingId, movieId = movieId, customerId = customerId, adultSeat = adultSeat, concessionSeat = concessionSeat)
    }
    suspend fun deleteBookingById(bookingId: Int){
        bookingDao.deleteBookingById(bookingId)
    }

    // Customer DAO operations List:
    // - Create
    // - > register()
    // - Read
    // - > getAll() -> returns Flow<List<Customer>>
    // - > getCustomerById()
    // - > login()
    // - Update
    // - > updatePassword
    // - Delete
    // - > deleteCustomerById()

    val allCustomers: Flow<List<Customer>> = customerDao.getAll()

    suspend fun register(newCustomer:Customer){
        customerDao.register(newCustomer)
    }
    suspend fun getCustomerById(customerId: String): Customer{
        return withContext(Dispatchers.IO) {
            customerDao.getCustomerById(customerId)
        }
    }

    suspend fun getCustomerByEmail(email: String): Customer{
        return withContext(Dispatchers.IO) {
            customerDao.getCustomerByEmail(email)
        }
    }
    suspend fun getCustomerLoginWithEmailAndPassword(loginEmail: String, loginPassword: String): Customer {
        return withContext(Dispatchers.IO) {
            customerDao.getCustomerLoginWithEmailAndPassword(loginEmail = loginEmail, loginPassword = loginPassword)
        }
    }

    suspend fun updatePassword(customerId: String, newPassword: String){
        customerDao.updatePassword(customerId = customerId, newPassword = newPassword)
    }
    suspend fun deleteCustomerById(customerId: String){
        customerDao.deleteCustomerById(customerId)
    }

    // Movie DAO Operations list:
    // - Create
    // - > addMovie()
    // - Read
    // - > getAll() -> returns Flow<List<Movie>>
    // - > getMovieById()
    // -> getMovieListByGenre()
    // - Update
    // - > updateMovie
    // - Delete
    // - > deleteMovieById()

    val allMovies: Flow<List<Movie>> = movieDao.getAll()

    val allMoviesComingSoon: Flow<List<Movie>> = movieDao.getAllComingSoon()
    suspend fun addMovie(newMovie:Movie){
        movieDao.addMovie(newMovie)
    }
    suspend fun getMovieById(movieId: Int): Movie{
        return withContext(Dispatchers.IO) {
            movieDao.getMovieById(movieId)
        }
    }
    suspend fun getMovieByName(movieName: String): Movie{
        return withContext(Dispatchers.IO) {
            movieDao.getMovieByName(movieName)
        }
    }

    fun getMovieListByGenre(movieGenre: String): List<Movie>
    {
        val movieList= movieDao.getMovieListByGenre(movieGenre)
        return movieList
    }


    suspend fun updateMovie(
        movieId: Int,
        movieName: String,
        esrbRating: String,
        movieGenre: String,
        movieRuntimeHour: Int,
        movieRuntimeMinute: Int,
        movieUserRating: Double,
        movieImagePath: String,
        movieSummary: String,
        movieStartDate: LocalDateTime,
        movieEndDate: LocalDateTime
    ){
        movieDao.updateMovie(movieId, movieName, esrbRating, movieGenre, movieRuntimeHour, movieRuntimeMinute, movieUserRating, movieImagePath, movieSummary, movieStartDate, movieEndDate)
    }
    suspend fun deleteMovieById(movieId: Int){
        movieDao.deleteMovieById(movieId)
    }
}