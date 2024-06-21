package com.example.retrofitgooglelab

import android.util.Log
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch
class RetrofitViewModel: ViewModel() {
    private val repository = ItemsRepository()
    val retrofitResponse: MutableState <SearchResponse> =
        mutableStateOf(SearchResponse())
    fun getResponse(keyword:String) {
        viewModelScope.launch {
            try {
                val responseReturned = repository.getResponse(keyword)
                retrofitResponse.value = responseReturned
            } catch (e: Exception) {
                Log.i("Error ", "Response failed")
            }
        }
    }
}