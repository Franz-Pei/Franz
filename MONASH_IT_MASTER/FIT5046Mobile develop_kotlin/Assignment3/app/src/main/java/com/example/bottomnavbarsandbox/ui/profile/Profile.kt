package com.example.bottomnavbarsandbox.ui.profile

import android.content.Intent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CornerSize
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.rememberNavController
import com.example.bottomnavbarsandbox.R
import com.example.bottomnavbarsandbox.ui.login.Login
import com.example.bottomnavbarsandbox.ui.profile.MyTicketActivity


@Composable
fun Profile (navController: NavHostController) {

    ProfileScreen(navController)


}

@Composable
fun ProfileScreen(navController: NavHostController) {
    val context = LocalContext.current
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(color = Color.Black)
            .padding(10.dp, 30.dp, 10.dp, 0.dp)
    ) {
        Top()
        Subject(R.drawable.user_img, "User", jump = {})
        DivisionLine()
        UnitHeader("Account")
        Subject(R.drawable.pay, "Payment", jump = {})
        Subject(R.drawable.ticket, "Your Ticket", jump = {
            val intent = Intent(context, MyTicketActivity::class.java)
            context.startActivity(intent)
        })
        DivisionLine()
        UnitHeader("Privacy & Policy")
        Subject(R.drawable.notify, "Notification", jump = {})
        val navController = rememberNavController()
        Subject(
            R.drawable.logout,
            "Logout",
            jump = {
                val intent = Intent(context, Login::class.java)
                context.startActivity(intent)
            }
        )
    }

}

@Composable
fun UnitHeader(title: String) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
    ) {
        Text(text = title, color = Color.White)
    }
}

@Composable
fun DivisionLine() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(0.dp, 30.dp, 0.dp, 20.dp)
            .height(1.dp)
            .background(color = Color.Gray)
    ) {}
}

@Composable
fun Subject(image_path: Int, card_info: String, jump: () -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(0.dp, 20.dp, 0.dp, 0.dp)
    ) {
        Button(
            onClick = {
                jump()
            },
            shape = MaterialTheme.shapes.small.copy(CornerSize(0.dp)),
            modifier = Modifier
                .padding(0.dp)
                .height(60.dp)
                .fillMaxWidth(),
            contentPadding = PaddingValues(0.dp),
            colors = ButtonDefaults.buttonColors(Color.Black)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Image(
                        painter = painterResource(id = image_path), // 背景图片资源
                        contentDescription = null,
                        modifier = Modifier
                            .width(60.dp)
                            .height(60.dp)
                    )
                    Text(
                        text = card_info,
                        color = Color.White,
                        modifier = Modifier.padding(10.dp, 0.dp, 0.dp, 0.dp)
                    )
                }
                Image(
                    painter = painterResource(id = R.drawable.right_arrow), // 背景图片资源
                    contentDescription = null,
                    modifier = Modifier
                        .width(30.dp)
                        .height(30.dp)
                )
            }
        }
    }
}

@Composable
fun Top() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(0.dp, 0.dp, 0.dp, 30.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Button(
            onClick = {

            },
            shape = MaterialTheme.shapes.small.copy(CornerSize(0.dp)),
            modifier = Modifier
                .padding(0.dp)
                .height(30.dp)
                .width(30.dp),
            contentPadding = PaddingValues(0.dp),
            colors = ButtonDefaults.buttonColors(Color.White)
        ) {
            Image(
                painter = painterResource(id = R.drawable.left_arrow), // 背景图片资源
                contentDescription = null,
                modifier = Modifier
                    .width(30.dp)
                    .height(30.dp)
            )
        }
        Box(
            modifier = Modifier.fillMaxWidth(),
            contentAlignment = Alignment.Center
        ) {
            Text(text = "Profile", color = Color.White)
        }
    }
}