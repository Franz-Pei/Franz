package com.example.bottomnavbarsandbox.ui.bar

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.annotation.RequiresApi
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material.icons.filled.DateRange
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Place
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.DatePicker
import androidx.compose.material3.DatePickerDialog
import androidx.compose.material3.Divider
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.MaterialTheme.typography
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TextField
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.material3.rememberDatePickerState
import androidx.compose.material3.rememberTopAppBarState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.focusProperties
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.bottomnavbarsandbox.ui.theme.Custom_Blue
import com.example.bottomnavbarsandbox.ui.theme.Custom_DarkPurple

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopNavigationBar (title:String) {
    Column (
        modifier = Modifier
            .background(Custom_DarkPurple) // Change Top navbar color to purple
            .border(width = 2.dp, color = Custom_Blue)
    ) {
        Box(
            modifier = Modifier
                .height(56.dp) // 10% of the screen height
                .fillMaxWidth(), // Full width
            contentAlignment = Alignment.Center
        ) {
            Row (
                verticalAlignment = Alignment.CenterVertically
            ) {
                Icon(
                    imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                    contentDescription = "Back Arrow",
                    tint = Color.White,
                    modifier = Modifier.padding(start = 16.dp)
                    )
                Spacer(modifier = Modifier.width(8.dp))
                Text(
                    text = title,
                    style = typography.bodyLarge.merge(TextStyle(color = Color.White, textAlign = TextAlign.Center)),
                    modifier = Modifier.weight(1f) // Takes the remaining space
                        .padding(start = 16.dp, end = 16.dp),
                    textAlign = TextAlign.Center
                )
            }



        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BottomNavigationBar (){
    Box(
        modifier = Modifier
            .height(56.dp) // Adjust height as needed
            .fillMaxWidth(), // Full width
        contentAlignment = Alignment.Center
    ) {
        Row(
            horizontalArrangement = Arrangement.SpaceEvenly,
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.fillMaxSize()
        ) {
            // Button 1
            IconButton(
                onClick = { /* Handle button 1 click */ }
            ) {
                Icon(Icons.Default.Home, contentDescription = "Home")
            }

            // Button 2
            IconButton(
                onClick = { /* Handle button 2 click */ }
            ) {
                Icon(Icons.Default.Menu, contentDescription = "Movies")
            }

            // Button 3
            IconButton(
                onClick = { /* Handle button 3 click */ }
            ) {
                Icon(Icons.Default.DateRange, contentDescription = "Calendar")
            }

            // Button 4
            IconButton(
                onClick = { /* Handle button 4 click */ }
            ) {
                Icon(Icons.Default.AccountCircle, contentDescription = "Account")
            }
            // Button 5
            IconButton(
                onClick = { /* Handle button 5 click */ }
            ) {
                Icon(Icons.Default.Place, contentDescription = "About")
            }
        }
    }
}