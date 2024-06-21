package com.example.bottomnavbarsandbox.restful.addToGCal

import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitClient {
    private const val OAUTH_BASE_URL = "https://accounts.google.com"
    private const val CALENDAR_BASE_URL = "https://www.googleapis.com"

    fun createOAuthService(): GoogleOAuthService {
        val client = OkHttpClient.Builder().build()

        return Retrofit.Builder()
            .baseUrl(OAUTH_BASE_URL)
            .client(client)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(GoogleOAuthService::class.java)
    }

    fun createCalendarService(): GoogleCalendarService {
        val client = OkHttpClient.Builder().build()

        return Retrofit.Builder()
            .baseUrl(CALENDAR_BASE_URL)
            .client(client)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(GoogleCalendarService::class.java)
    }
}

//object ApiClient {
//    val apiService: ApiService by lazy {
//        RetrofitClient.retrofit.create(ApiService::class.java)
//    }
//}