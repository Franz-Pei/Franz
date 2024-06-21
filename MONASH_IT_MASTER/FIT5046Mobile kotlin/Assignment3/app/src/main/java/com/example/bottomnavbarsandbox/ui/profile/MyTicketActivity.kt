package com.example.bottomnavbarsandbox.ui.profile

import android.graphics.Bitmap
import android.graphics.BitmapFactory

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.Card
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.google.zxing.BarcodeFormat
import com.google.zxing.BinaryBitmap
import com.google.zxing.MultiFormatReader
import com.google.zxing.RGBLuminanceSource
import com.google.zxing.common.HybridBinarizer
import com.google.zxing.qrcode.QRCodeWriter
import java.io.ByteArrayOutputStream

data class Cinema(
    val id: String,
    val name: String,
    val address: String,
    val phoneNumber: String
)

class MyTicketActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                val cinemas = getCinemasFromDatabase()
                createTicketView(cinemas)
            }
        }
    }

    private fun getCinemasFromDatabase(): List<Cinema> {
        // 从数据库中获取电影院信息
        // 返回至少包含十条电影院信息的列表
        // 例如:
        return listOf(
            Cinema("1", "Cinema 1", "Address 1", "123456789"),
            Cinema("2", "Cinema 2", "Address 2", "987654321"),
            Cinema("3", "Cinema 3", "Address 3", "123456789"),
            Cinema("4", "Cinema 4", "Address 4", "987654321"),
            Cinema("5", "Cinema 5", "Address 5", "123456789"),
            Cinema("6", "Cinema 6", "Address 6", "987654321"),
            Cinema("7", "Cinema 7", "Address 7", "123456789"),
            Cinema("8", "Cinema 8", "Address 8", "987654321"),
            Cinema("9", "Cinema 9", "Address 9", "123456789"),
            Cinema("10", "Cinema 10", "Address 10", "987654321")
        )
    }

    @Composable
    private fun createTicketView(cinemas: List<Cinema>) {
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            contentPadding = PaddingValues(vertical = 16.dp, horizontal = 8.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            items(cinemas) { cinema ->
                CinemaItem(cinema)
            }
        }
    }

    @Composable
    private fun CinemaItem(cinema: Cinema) {
        Card(
            modifier = Modifier.fillMaxWidth(),
            elevation = 4.dp
        ) {
            Column {
                createCinemaInfoLayout(cinema)
                createQRCodeLayout(cinema.id)
            }
        }
    }

    @Composable
    private fun createCinemaInfoLayout(cinema: Cinema) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            Text(
                text = cinema.name,
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                color = Color.Black
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = cinema.address,
                fontSize = 16.sp,
                color = Color.Gray
            )
            Text(
                text = cinema.phoneNumber,
                fontSize = 16.sp,
                color = Color.Black
            )
        }
    }

    @Composable
    private fun createQRCodeLayout(cinemaId: String) {
        val qrCodeByteArray = generateQRCode(cinemaId)
        val bitmap = BitmapFactory.decodeByteArray(qrCodeByteArray, 0, qrCodeByteArray.size)

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(200.dp)
                .padding(16.dp),
            contentAlignment = Alignment.Center
        ) {
            Image(
                bitmap = bitmap.asImageBitmap(),
                contentDescription = "QR Code"
            )
        }
    }

    private fun generateQRCode(content: String): ByteArray {
        val qrCodeWriter = QRCodeWriter()
        val bitMatrix = qrCodeWriter.encode(content, BarcodeFormat.QR_CODE, 500, 500)
        val width = bitMatrix.width
        val height = bitMatrix.height
        val pixels = IntArray(width * height)
        for (y in 0 until height) {
            val offset = y * width
            for (x in 0 until width) {
                pixels[offset + x] = if (bitMatrix[x, y]) Color.Black.toArgb() else Color.White.toArgb()
            }
        }
        val bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
        bitmap.setPixels(pixels, 0, width, 0, 0, width, height)
        val outputStream = ByteArrayOutputStream()
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, outputStream)
        return outputStream.toByteArray()
    }

    private fun parseQRCode(bitmap: Bitmap): String? {
        val reader = MultiFormatReader()
        val width = bitmap.width
        val height = bitmap.height
        val pixels = IntArray(width * height)
        bitmap.getPixels(pixels, 0, width, 0, 0, width, height)
        val source = RGBLuminanceSource(width, height, pixels)
        val binaryBitmap = BinaryBitmap(HybridBinarizer(source))
        return try {
            val result = reader.decode(binaryBitmap)
            result.text
        } catch (e: Exception) {
            null
        }
    }
}