package com.example.bottomnavbarsandbox.database

import android.app.Application
import android.provider.ContactsContract.CommonDataKinds.Email
import android.util.Log
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.asLiveData
import androidx.lifecycle.viewModelScope
import com.example.retrofitgooglelab.ItemsRepository
import com.example.retrofitgooglelab.SearchResponse
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.launch
import java.time.LocalDateTime

class MovieAppViewModel (application: Application): AndroidViewModel(application) {
    private val madbRepo : MovieAppRepository
    init {
        madbRepo = MovieAppRepository(application)
    }

    val allBookings: LiveData<List<Booking>> = madbRepo.allBookings.asLiveData()
    val allCustomers: LiveData<List<Customer>> = madbRepo.allCustomers.asLiveData()
    val allMovies: LiveData<List<Movie>> = madbRepo.allMovies.asLiveData()
    val allMoviesComingSoon: LiveData<List<Movie>> = madbRepo.allMoviesComingSoon.asLiveData()
    // Booking Repo operations List:
    // - Create
    // - > addBooking()
    // - Read
    // - > getAll()
    // - > getBookingById()
    // - > getBookingByDateTime()
    // - > getBookingByCustomerId()
    // - Update
    // - > updateBooking
    // - Delete
    // - > deleteBookingById()

    fun addBooking(booking: Booking) = viewModelScope.launch (Dispatchers.IO) {
        madbRepo.addBooking(booking)
    }
    suspend fun getBookingById(bookingId: Int) : Booking {
        return madbRepo.getBookingById(bookingId)
    }
    suspend fun getBookingByDateTime(movieId: Int,screeningDateTime: String): List<Booking> {
        return madbRepo.getBookingByDateTime(movieId,screeningDateTime)
    }
    suspend fun getBookingByCustomerId(customerId: String): List<Booking> {
        return madbRepo.getBookingByCustomerId(customerId)
    }
    fun updateBooking(
        bookingId: Int,
        movieId: Int,
        customerId: String,
        adultSeat: String,
        concessionSeat: String,
    ) = viewModelScope.launch (Dispatchers.IO) {
        madbRepo.updateBooking(bookingId = bookingId, movieId = movieId, customerId = customerId, adultSeat = adultSeat, concessionSeat = concessionSeat)
    }
    fun deleteBookingById(bookingId: Int) = viewModelScope.launch (Dispatchers.IO) {
        madbRepo.deleteBookingById(bookingId)
    }

    // Customer Repo operations List:
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
    fun register(newCustomer:Customer) = viewModelScope.launch (Dispatchers.IO) {
        madbRepo.register(newCustomer)
    }
    suspend fun getCustomerById(customerId: String): Customer {
        return madbRepo.getCustomerById(customerId)
    }
    suspend fun getCustomerByEmail(email: String): Customer {
        return madbRepo.getCustomerByEmail(email)
    }



    suspend fun getCustomerLoginWithEmailAndPassword(loginEmail: String, loginPassword: String): Customer
     {
       return madbRepo.getCustomerLoginWithEmailAndPassword(loginEmail = loginEmail, loginPassword = loginPassword)
    }
    fun updatePassword(customerId: String, newPassword: String) = viewModelScope.launch (Dispatchers.IO) {
        madbRepo.updatePassword(customerId = customerId, newPassword = newPassword)
    }
    fun deleteCustomerById(customerId: String) = viewModelScope.launch (Dispatchers.IO) {
        madbRepo.deleteCustomerById(customerId)
    }

    // Movie Repo Operations list:
    // - Create
    // - > addMovie()
    // - GET
    // - > getMovieListByGenre()
    // - Read
    // - > getAll() -> returns Flow<List<Movie>>
    // - > getMovieById()
    // - Update
    // - > updateMovie
    // - Delete
    // - > deleteMovieById()
    fun addMovie(newMovie:Movie) = viewModelScope.launch (Dispatchers.IO) {
        madbRepo.addMovie(newMovie)
    }

    suspend fun getMovieListByGenre(movieGenre: String): List<Movie> {
        return viewModelScope.async(Dispatchers.IO)
        {
            madbRepo.getMovieListByGenre(movieGenre)
        }.await()
    }

    suspend fun getMovieById(movieId: Int) : Movie {
        return madbRepo.getMovieById(movieId)
    }
    suspend fun getMovieByName(movieName: String) : Movie {
        return madbRepo.getMovieByName(movieName)
    }

    fun updateMovie(
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
    ) = viewModelScope.launch (Dispatchers.IO) {
        madbRepo.updateMovie(movieId, movieName, esrbRating, movieGenre, movieRuntimeHour, movieRuntimeMinute, movieUserRating, movieImagePath, movieSummary, movieStartDate, movieEndDate)
    }
    fun deleteMovieById(movieId: Int) = viewModelScope.launch (Dispatchers.IO) {
        madbRepo.deleteMovieById(movieId)
    }


    // Add extra variables here if you want viewModel to track them

    val homePageCheck: MutableState<Boolean> = mutableStateOf(false)
    val homePageResult: MutableState<String> = mutableStateOf("")

    fun setHomePageCheck(newBoolean: Boolean) {
        homePageCheck.value=newBoolean
    }

    fun setHomePageResult(newText: String) {
        homePageResult.value=newText
    }


    val movieDetailChosen: MutableState<Movie> = mutableStateOf(Movie(
        movieName = "Planet Earth 3",
        esrbRating = "PG",
        movieGenre = "Nature Documentary",
        movieRuntimeHour = 2,
        movieRuntimeMinute = 30, movieUserRating = 4.5, movieImagePath = "filename",
        movieSummary = "summary", movieStartDate = LocalDateTime.of(2024, 9, 9, 5, 30),
        movieEndDate = LocalDateTime.of(2024, 9, 9, 5, 30),
        movieScreenings = "",
        movieId = 100
    ))

    fun setMovieDetailChosen(newMovie: Movie) {
        movieDetailChosen.value=newMovie
    }

    val genreChosen: MutableState<String> = mutableStateOf("Any")
    fun setGenreFilterChosen(genreChoice: String) {
        genreChosen.value=genreChoice
    }


    val name: MutableState<String> = mutableStateOf("")

    fun setName(newName: String) {
        name.value=newName
    }

    val processingBooking_Date: MutableState<String> = mutableStateOf("2024-02-10")
    fun processingBooking_Date_setter(pbd: String){
        processingBooking_Date.value = pbd
    }
    val processingBooking_Time: MutableState<String> = mutableStateOf("10:30:00")
    fun processingBooking_Time_setter(pbt: String){
        processingBooking_Time.value = pbt
    }


    val currentBooking_ChosenDateTime: MutableState<String> = mutableStateOf("2024-02-10T10:30:00")
    fun currentBooking_ChosenDateTime_setter(cdt: String){
        currentBooking_ChosenDateTime.value = cdt
    }


    //Google Search Repository
    private val repository = ItemsRepository()
    val retrofitResponse: MutableState <SearchResponse> =
        mutableStateOf(SearchResponse())
    fun getResponse(keyword:String) {
        viewModelScope.launch {
            try {
                val responseReturned = repository.getResponse(keyword)
                retrofitResponse.value = responseReturned
            } catch (e: Exception) {
                Log.i("Connection fail", "Cannot get response from Google search")
            }
        }
    }
}