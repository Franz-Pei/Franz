package com.example.retrofitgooglelab

import retrofit2.http.GET
import retrofit2.http.Query

interface RetrofitInterface {
    @GET("customsearch/v1")
    suspend fun customSearch(
        @Query("key") API_KEY: String,
        @Query("cx") SEARCH_ID_cx: String,
        @Query("q") keyword: String
    ): SearchResponse
}