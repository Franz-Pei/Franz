package com.example.retrofitgooglelab

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

//for by keyword
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment

import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.bottomnavbarsandbox.database.MovieAppViewModel

@Composable
fun googleSearchResults(viewModel: MovieAppViewModel) {
    val itemsReturned by viewModel.retrofitResponse
    var googleSearchResult = ""

    viewModel.getResponse("Top 25 of movies all time")
    Column(horizontalAlignment = Alignment.CenterHorizontally)
    {
        val list: List<Items> = itemsReturned.items
        if (list.isNotEmpty()) {
            val result: String = list[0].snippet + "\n" + "\n" +
                    list[1].snippet
            googleSearchResult = result
            viewModel.setHomePageResult(result)
        }
        Text(
            text = "Top Movies all time from the Web", fontWeight = FontWeight.Bold,
            textAlign = TextAlign.Center,
            modifier = Modifier.width(150.dp),
            fontSize = 20.sp,
            color = Color.White
        )
        Text(
            "\n" + "$googleSearchResult", fontSize = 12.sp,
            color = Color.White
        )
    }
}

@Composable
fun googleSearchResultFinish(result: String)
{
    Text(
        text = "Top Movies all time from the Web", fontWeight = FontWeight.Bold,
        textAlign = TextAlign.Center,
        modifier = Modifier.width(150.dp),
        fontSize = 20.sp,
        color = Color.White
    )
    Text(
        "\n" + "$result", fontSize = 12.sp,
        color = Color.White
    )
}