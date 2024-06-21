package com.example.bottomnavbarsandbox.activity

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.annotation.RequiresApi
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import com.example.bottomnavbarsandbox.database.MovieAppViewModel
import com.example.bottomnavbarsandbox.ui.bar.BottomNavBar
import com.example.bottomnavbarsandbox.ui.theme.BottomNavBarSandboxTheme
import com.example.bottomnavbarsandbox.ui.theme.Purple40

import com.example.bottomnavbarsandbox.ui.*
import com.example.bottomnavbarsandbox.ui.register.Register

import com.example.bottomnavbarsandbox.ui.login.Login
//import com.example.bottomnavbarsandbox.ui.login.LoginTest

@RequiresApi(0)
class MainActivity : ComponentActivity() {
    private val madbViewModel: MovieAppViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContent {

            BottomNavBarSandboxTheme {

                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = Purple40
                ) {

                    BottomNavBar(madbViewModel)
                }
            }
        }
    }
}


@Composable
fun DisplayApp (
    title:String,
    content: @Composable () -> Unit
){
    Scaffold (
//        topBar = { TopNavigationBar(title = title) },
//        bottomBar = { BottomNavigationBar() },
    ) { innerPadding ->
        // Apply padding to your content using the innerPadding modifier
        Column(
            modifier = Modifier
                .padding(innerPadding)
                .background(Color.Black)
                .fillMaxSize()
        ) {
            // Your content goes here
            content()
        }
    }
}




