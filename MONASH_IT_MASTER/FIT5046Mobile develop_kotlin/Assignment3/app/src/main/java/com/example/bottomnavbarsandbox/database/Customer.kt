package com.example.bottomnavbarsandbox.database

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.sql.Date
import java.time.LocalDate
import java.time.LocalDateTime

@Entity(tableName = "customer")
data class Customer(

    @ColumnInfo(name = "customer_id") val customerId: String?,

    @ColumnInfo(name = "first_name") var firstName: String,
    @ColumnInfo(name = "last_name") var lastName: String,
    @ColumnInfo(name = "password") var password: String,

    @PrimaryKey(autoGenerate = false)
    @ColumnInfo(name = "email") var email: String,
    @ColumnInfo(name = "state") var state: String,
    @ColumnInfo(name = "date_of_birth") var dateOfBirth: LocalDateTime,
)

// From meeting notes: https://docs.google.com/document/d/1NrndrDSP6K8MJaTCRrORftCb8vH08kndfPJjH-7IX4E/edit
// Customer SQL table:
// Id, First name, last name, password, email, state (string), DOB (date)