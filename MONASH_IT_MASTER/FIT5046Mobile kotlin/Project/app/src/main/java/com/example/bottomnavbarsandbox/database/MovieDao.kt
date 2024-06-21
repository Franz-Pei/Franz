package com.example.bottomnavbarsandbox.database

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query
import androidx.room.Update
import kotlinx.coroutines.flow.Flow
import java.time.LocalDateTime

@Dao
interface MovieDao {
    // CRUD Operations list:
    // - Create
    // - > addMovie()
    // - Read
    // - > getAll() -> returns Flow<List<Movie>>
    // - > getAllComingSoon() -> returns Flow<List<Movie>>
    // - > getMovieById()
    // - Update
    // - > updateMovie
    // - Delete
    // - > deleteMovieById()

    @Insert
    fun addMovie(newMovie: Movie)
    // Create a Movie object first, then pass it into addMovie() like this:
    // val newMovie = Movie(
    //    movieId = 1,
    //    movieName = "The Shawshank Redemption",
    //    esrbRating = "R",
    //    movieGenre = "Drama",
    //    movieRuntimeHour = 2,
    //    movieRuntimeMinute = 22,
    //    movieUserRating = 9,
    //    movieImagePath = "/path/to/image",
    //    movieSummary = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    //    movieStartDate = Date(), // Replace with actual start date
    //    movieEndDate = Date()    // Replace with actual end date
    // )
    // MovieDao.addMovie(newMovie)
    //
    // movieStartDate/movieEndDate formats: from LocalDateTime "2007-12-03T10:15:30"?
    // TODO: confirm datetime formats stored in Movie table
    // INSERT operations do not return anything.

    @Query("SELECT * FROM Movie")
    fun getAll(): Flow<List<Movie>>

    @Query("SELECT * FROM Movie WHERE datetime(movie_start_date) > datetime(\"2024-06-05T00:00:00\")")
    fun getAllComingSoon(): Flow<List<Movie>>

    @Query("SELECT * FROM Movie WHERE movie_id IN (:movieId)")
    fun getMovieById(movieId: Int): Movie

    @Query("SELECT * FROM Movie WHERE movie_name LIKE (:movieName)")
    fun getMovieByName(movieName: String): Movie

    @Query("SELECT * FROM Movie WHERE movie_genre = (:movieGenre)")
    fun getMovieListByGenre(movieGenre: String): List<Movie>

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
    ) {
        val movieToUpdate = getMovieById(movieId)
        if (movieToUpdate != null){
            if (movieName != null) { movieToUpdate.movieName = movieName }
            if (esrbRating != null) { movieToUpdate.esrbRating = esrbRating }
            if (movieGenre != null) { movieToUpdate.movieGenre = movieGenre }
            if (movieRuntimeHour != null) { movieToUpdate.movieRuntimeHour = movieRuntimeHour }
            if (movieRuntimeMinute != null) { movieToUpdate.movieRuntimeMinute = movieRuntimeMinute }
            if (movieUserRating != null) { movieToUpdate.movieUserRating = movieUserRating }
            if (movieImagePath != null) { movieToUpdate.movieImagePath = movieImagePath }
            if (movieSummary != null) { movieToUpdate.movieSummary = movieSummary }
            if (movieStartDate != null) { movieToUpdate.movieStartDate = movieStartDate }
            if (movieEndDate != null) { movieToUpdate.movieEndDate = movieEndDate }

            updateMovieDAO(movieToUpdate)
        }
    }
    // Change attributes of movie of the given movie_id
    // Call it like this to change specified fields:
    // movieDao.updateMovie(movieId = 123, movieName = "Final Destination Part 32")

    @Update
    fun updateMovieDAO(movieToUpdate: Movie)


    fun deleteMovieById(movieId: Int){
        val movieToDelete = getMovieById(movieId)
        if (movieToDelete != null){
            deleteMovieDAO(movieToDelete)
        }
    }
    // Delete the movie of the given movie_id

    @Delete
    fun deleteMovieDAO(movieToDelete: Movie)
}