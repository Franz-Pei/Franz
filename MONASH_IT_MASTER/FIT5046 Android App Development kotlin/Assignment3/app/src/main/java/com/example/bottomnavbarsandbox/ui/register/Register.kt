package com.example.bottomnavbarsandbox.ui.register

import android.content.Intent
import android.content.res.ColorStateList
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.text.InputType
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.FrameLayout
import android.widget.LinearLayout
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.viewModels
import androidx.annotation.RequiresApi

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding

import androidx.compose.material3.Button
import androidx.compose.material3.DatePicker
import androidx.compose.material3.DatePickerDialog
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TextField
import androidx.compose.material3.rememberDatePickerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.focusProperties
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.unit.dp
import com.example.bottomnavbarsandbox.database.Customer
import com.example.bottomnavbarsandbox.database.CustomerDao
import com.example.bottomnavbarsandbox.database.MovieAppDatabase
import com.example.bottomnavbarsandbox.database.MovieAppViewModel
import com.example.bottomnavbarsandbox.ui.login.Login
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.runBlocking
import java.text.SimpleDateFormat
import java.time.Instant
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.Calendar
import java.util.Date
import java.util.Locale

class Register : ComponentActivity() {
//    private lateinit var customerDao: CustomerDao
    private val madbViewModel: MovieAppViewModel by viewModels()
    @RequiresApi(Build.VERSION_CODES.O)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // 获取CustomerDao实例
//        customerDao = MovieAppDatabase.getDatabase(this).getCustomerDao()
        setContentView(loadRegister())
//        val db = MovieAppDatabase.getDatabase(this)
//        customerDao = db.getCustomerDao()
    }

    @RequiresApi(Build.VERSION_CODES.O)
    private fun loadRegister(): View {
        val layout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setBackgroundColor(Color.BLACK)
            setPadding(50, 100, 50, 100)
        }

        val editTextFirstName = createEditText("First name")
        val editTextSecondName = createEditText("Second name")
        val editTextEmail = createEditText("Email")
        val editTextPassword = createEditText("Password").apply {
            inputType = InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_PASSWORD
        }
        val editTextRePassword = createEditText("Re-Password").apply {
            inputType = InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_PASSWORD
        }

        var selectedState = ""

        val editTextAddress = ComposeView(this).apply {
            setContent {
                RegisterAddress(selectedValue = selectedState,
                    onValueSelected = { value ->
                        selectedState = value
                    })
            }
        }

        val layoutDate = LinearLayout(this).apply {
            setPadding(0, 20, 0, 0)
        }
        val editTextDate = createEditText("Select your birthday").apply {
            layoutParams = LinearLayout.LayoutParams(
                630,
                FrameLayout.LayoutParams.WRAP_CONTENT
            )
            isEnabled = false
        }
        val editTextDateBirth = ComposeView(this).apply {
            setContent {
                SelectDatePicker(editTextDate = editTextDate,
                    onValueSelected = { value ->
                        editTextDate.setText(value)
                    })
            }
        }
        layoutDate.addView(editTextDate)
        layoutDate.addView(editTextDateBirth)

        val buttonRegister = Button(this).apply {
            text = "Register"
            isAllCaps = false
            setBackgroundColor(Color.RED)
            setTextColor(Color.WHITE)
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            ).apply {
                topMargin = -250
            }
            setOnClickListener {
                val firstName = editTextFirstName.text.toString()
                val secondName = editTextSecondName.text.toString()
                val email = editTextEmail.text.toString()
                val password = editTextPassword.text.toString()
                val rePassword = editTextRePassword.text.toString()
                val state = selectedState
                val birthDate = editTextDate.text.toString()
                // selectedState gets the address
                // editTextDate.text.toString() gets the date
                if (password.isEmpty() || rePassword.isEmpty()) {
                    Toast.makeText(this@Register, "Please enter a password", Toast.LENGTH_SHORT).show()
                    return@setOnClickListener
                }
                if (password != rePassword) {
                    return@setOnClickListener Toast.makeText(this@Register, " Passwords do not match", Toast.LENGTH_SHORT).show()
                }
                var birth : LocalDateTime? = null
                if (birthDate != ""){
                    birth = LocalDateTime.parse(birthDate+"T00:00:00", DateTimeFormatter.ISO_LOCAL_DATE_TIME)
                }
                runBlocking {
                    val customer : Customer = madbViewModel.getCustomerByEmail(email)
                    if (customer != null){
                        Toast.makeText(this@Register, "The Email have already register", Toast.LENGTH_SHORT).show()
                        return@runBlocking
                    }
                    val c = Customer(null, firstName, secondName,password, email, state, birth?: LocalDateTime.now())
                    madbViewModel.register(c)
                    Toast.makeText(this@Register, " Registration successful", Toast.LENGTH_SHORT).show()
                    val intent = Intent(this@Register, Login::class.java)
                    startActivity(intent)
                }
            }
        }

        val buttonLogin = Button(this).apply {
            text = "Login"
            isAllCaps = false
            setBackgroundColor(Color.TRANSPARENT)
            setTextColor(Color.WHITE)
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            ).apply {
                topMargin = 20
            }
            setOnClickListener {
                val intent = Intent(this@Register, Login::class.java)
                startActivity(intent)
                finish() // Optional: Close the current registration interface
            }
        }

        layout.addView(editTextFirstName)
        layout.addView(editTextSecondName)
        layout.addView(editTextEmail)
        layout.addView(editTextPassword)
        layout.addView(editTextRePassword)
        layout.addView(editTextAddress)
        layout.addView(layoutDate)
        layout.addView(buttonRegister)
        layout.addView(buttonLogin)

        return layout
    }



    private fun createEditText(hint: String): EditText {
        return EditText(this).apply {
            this.hint = hint
            setTextColor(Color.WHITE)
            setHintTextColor(Color.GRAY)
            backgroundTintList = ColorStateList.valueOf(Color.WHITE)
            layoutParams = LinearLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.WRAP_CONTENT
            ).apply {
                topMargin = 20
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun RegisterAddress(selectedValue: String, onValueSelected: (String) -> Unit) {
    val states = listOf("VIC", "QLD", "NSW", "SA", "TAS", "WA", "ACT", "NT")
    var isExpanded by remember { mutableStateOf(false) }
    var selectedState by remember { mutableStateOf(states[0]) }
    var addressText by remember { mutableStateOf("") }

    Column(
        modifier = Modifier.padding(top = 16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        ExposedDropdownMenuBox(
            expanded = isExpanded,
            onExpandedChange = { isExpanded = it },
        ) {
            TextField(
                modifier = Modifier
                    .menuAnchor()
                    .fillMaxWidth()
                    .focusProperties {
                        canFocus = false
                    }
                    .padding(bottom = 8.dp),
                readOnly = true,
                value = selectedState,
                onValueChange = {},
                label = { Text("State") },
                //manages the arrow icon up and down
                trailingIcon = {
                    ExposedDropdownMenuDefaults.TrailingIcon(expanded = isExpanded)
                },
            )
            ExposedDropdownMenu(
                expanded = isExpanded,
                onDismissRequest = { isExpanded = false }
            ) {
                states.forEach { selectionOption ->
                    DropdownMenuItem(
                        text = { Text(selectionOption) },
                        onClick = {
                            selectedState = selectionOption
                            onValueSelected(selectedState)
                            isExpanded = false
                        },
                        contentPadding = ExposedDropdownMenuDefaults.ItemContentPadding,
                    )
                }
            }
        }
        TextField(
            value = addressText,
            onValueChange = { addressText = it },
            label = { Text("Address") },
            modifier = Modifier.fillMaxWidth()
        )
    }
}

@RequiresApi(Build.VERSION_CODES.O)
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SelectDatePicker(editTextDate: EditText, onValueSelected: (String) -> Unit) {
    val calendar = Calendar.getInstance()
    calendar.set(2024, 0, 1) // month (0) is January
    val datePickerState = rememberDatePickerState(
        initialSelectedDateMillis = Instant.now().toEpochMilli()
    )
    var showDatePicker by remember {
        mutableStateOf(false)
    }
    var selectedDate by remember {
        mutableStateOf(calendar.timeInMillis)
    }
    val formatter = SimpleDateFormat("yyyy-MM-dd", Locale.ROOT)
    Column(modifier = Modifier.offset(0.dp, -70.dp)) {
        Text(
            text = "Date of Birth Entry",
            style = MaterialTheme.typography.headlineSmall
        )
        if (showDatePicker) {
            DatePickerDialog(
                onDismissRequest = {
                    showDatePicker = false
                },
                confirmButton = {
                    TextButton(onClick = {
                        showDatePicker = false
                        //selectedDateMillis!! null safety because type declared as Long?
                        selectedDate = datePickerState.selectedDateMillis!!
                        onValueSelected(formatter.format(Date(selectedDate)))
                    }) {
                        Text(text = "OK")
                    }
                },
                dismissButton = {
                    TextButton(onClick = {
                        showDatePicker = false
                    }) {
                        Text(text = "Cancel")
                    }
                }
            ) { //still column scope
                DatePicker(
                    state = datePickerState
                )
            }
        } // end of if
        Button(
            onClick = {
                showDatePicker = true
            }
        ) {
            Text(text = "Select Birth")
        }
        Text(
            text = "Date of Birth: ${formatter.format(Date(selectedDate))}"
        )
    }
}
