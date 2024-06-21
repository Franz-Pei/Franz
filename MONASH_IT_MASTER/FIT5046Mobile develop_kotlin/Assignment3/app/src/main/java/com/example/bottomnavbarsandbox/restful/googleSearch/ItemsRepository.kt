package com.example.retrofitgooglelab

class ItemsRepository {
    private val searchService = RetrofitObject.retrofitService
    private val API_KEY = "AIzaSyAHzbFXKa5zNyl16-lwdxe65Renwocoe8Y"
    private val SEARCH_ID_cx = "e1bcfebcc1fec4c1f"
    suspend fun getResponse(keyword: String): SearchResponse {
        return searchService.customSearch(
            API_KEY,
            SEARCH_ID_cx,
            keyword
        )
    }
}