package com.example.bottomnavbarsandbox.database

import android.content.Context
import android.os.Build
import androidx.annotation.RequiresApi
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.room.TypeConverter
import androidx.room.TypeConverters
import java.time.LocalDateTime

/*

Add type converters for DateTime to String

https://betulnecanli.medium.com/how-to-store-date-in-room-database-d06dec3a2d7e

 */

@TypeConverters(Converters::class)
@Database(version = 4, entities = [Customer::class, Booking::class, Movie::class])
abstract class MovieAppDatabase : RoomDatabase() {
    // CustomerDao is a class annotated with @Dao
    abstract fun getCustomerDao(): CustomerDao

    // BookingDao is a class annotated with @Dao
    abstract fun getBookingDao(): BookingDao

    // MovieDao is a class annotated with @Dao
    abstract fun getMovieDao(): MovieDao

    companion object {
        @Volatile
        private var INSTANCE: MovieAppDatabase? = null

        fun getDatabase(context: Context) : MovieAppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    MovieAppDatabase::class.java,
                    "Movie_App_Database"
                )
                .fallbackToDestructiveMigration()
                    .createFromAsset("database/prepopulate_database.db")
                .build()
                INSTANCE = instance
                instance
            }
        }
    }

}

class Converters {
    @RequiresApi(Build.VERSION_CODES.O)
    @TypeConverter
    fun fromDateTime(value: String?): LocalDateTime? {
        return value?.let { LocalDateTime.parse(it) }
    }

    @TypeConverter
    fun toDateTime(date: LocalDateTime?): String? {
        return date?.toString()
    }
}


//
// The following code is from documentation https://developer.android.com/reference/kotlin/androidx/room/Database
//// Song and Album are classes annotated with @Entity.
//@Database(version = 1, entities = [Song::class, Album::class])
//abstract class MusicDatabase : RoomDatabase {
//    // SongDao is a class annotated with @Dao.
//    abstract fun getSongDao(): SongDao
//
//    // AlbumDao is a class annotated with @Dao.
//    abstract fun getArtistDao(): ArtistDao
//
//    // SongAlbumDao is a class annotated with @Dao.
//    abstract fun getSongAlbumDao(): SongAlbumDao
//}