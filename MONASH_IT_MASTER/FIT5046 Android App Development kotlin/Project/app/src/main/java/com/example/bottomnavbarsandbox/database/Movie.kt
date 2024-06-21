package com.example.bottomnavbarsandbox.database

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.time.LocalDateTime

/*
Example movie entry

@ColumnInfo(name = "movie_id") 1
@ColumnInfo(name = "movie_name") Kung Fu Panda
@ColumnInfo(name = "movie_esrb_rating") PG
@ColumnInfo(name = "movie_genre") Action
@ColumnInfo(name = "movie_runtime_hour") 2
@ColumnInfo(name = "movie_runtime_minute") 30
@ColumnInfo(name = "movie_user_rating") 4.5,
@ColumnInfo(name = "movie_image_path") "filename"
@ColumnInfo(name = "movie_summary")  Hero panda with a group of friends saves a village from raiders
@ColumnInfo(name = "movie_start_date") 2024-01-25T10:30:00
@ColumnInfo(name = "movie_end_date") 2024-05-25T10:30:00
@ColumnInfo(name = "movie_screenings") "2024-02-10T10:30:00,2024-02-10T14:30:00,
                                            2024-02-10T20:30:00,2024-03-14T12:30:00"
 */
@Entity(tableName = "movie")
data class Movie(
    @PrimaryKey(autoGenerate = true)
    @ColumnInfo(name = "movie_id") val movieId : Int,
    @ColumnInfo(name = "movie_name") var movieName: String = "Kung Fu Panda",
    @ColumnInfo(name = "movie_esrb_rating") var esrbRating: String = "PG",
    @ColumnInfo(name = "movie_genre") var movieGenre: String = "Action",
    @ColumnInfo(name = "movie_runtime_hour") var movieRuntimeHour: Int = 1,
    @ColumnInfo(name = "movie_runtime_minute") var movieRuntimeMinute: Int = 30, // range 0-60
    @ColumnInfo(name = "movie_user_rating") var movieUserRating: Double = 4.5,
    @ColumnInfo(name = "movie_image_path") var movieImagePath: String = "filename", //Movie image filename
    @ColumnInfo(name = "movie_summary") var movieSummary: String = "summary",
    @ColumnInfo(name = "movie_start_date") var movieStartDate: LocalDateTime = LocalDateTime.of(2024, 9, 9, 5, 30),
    @ColumnInfo(name = "movie_end_date") var movieEndDate: LocalDateTime = LocalDateTime.of(2024, 9, 9, 5, 30),
    @ColumnInfo(name = "movie_screenings") var movieScreenings: String = "jsonString"
) {


    /*
* The below method movieList() is used in DisplayMovieCard() in MovieDisplayCardMethods.kt
* LocalDateTime.of(year, month, dayOfMonth, hour, minute)
* */
    fun createMovieList(): List<Movie> {
        return listOf(
            Movie(
                movieName = "Planet Earth 3",
                esrbRating = "PG",
                movieGenre = "Nature Documentary",
                movieRuntimeHour = 2,
                movieRuntimeMinute = 30, movieUserRating = 4.5, movieImagePath = "filename",
                movieSummary = "summary", movieStartDate = LocalDateTime.of(2024, 9, 9, 5, 30),
                movieEndDate = LocalDateTime.of(2024, 9, 9, 5, 30),
                movieScreenings = "",
                movieId = 100
            ),
            Movie(
                movieName = "Planet Earth 3",
                esrbRating = "PG",
                movieGenre = "Nature Documentary",
                movieRuntimeHour = 2,
                movieRuntimeMinute = 30, movieUserRating = 4.5, movieImagePath = "filename",
                movieSummary = "summary", movieStartDate = LocalDateTime.of(2024, 9, 9, 5, 30),
                movieEndDate = LocalDateTime.of(2024, 9, 9, 5, 30),
                movieScreenings = "",
                movieId = 101
            )
        )
    }
}

// From meeting notes: https://docs.google.com/document/d/1NrndrDSP6K8MJaTCRrORftCb8vH08kndfPJjH-7IX4E/edit
// Movies table:
//    Id,
//    val name: String = "Kung Fu Panda",
//    val esrb_rating: String = "PG",
//    val genre: String = "Action",
//    val runtime_hours: Int = 2,
//    val runtime_mins: Int = 30,
//    val runtime: String = "$runtime_hours hours, $runtime_mins mins",
//    val user_rating: Double = 4.5,
//    val icon: String = "",
//    val image_path: String = "", // filename
//    val summary: String = "Hero panda saves town from raiders with friends in village.",
//    val start_date: LocalDateTime,
//    val end_date: LocalDateTime

// 01 MAY 2024 1500
// We need a Screening DateTime of sorts, maybe put JSON string in it?
// Something like var movieScreenings = "[\"2024-05-01T14:30:00\", \"2024-05-02T10:45:00\", \"2024-05-03T18:00:00\"]"
// Since Room does not support LocalDateTime type, we need to convert it to a string
// Might as well use that to store JSON arrays