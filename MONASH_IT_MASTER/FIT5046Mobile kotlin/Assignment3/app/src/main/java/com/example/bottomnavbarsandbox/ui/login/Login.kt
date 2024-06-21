package com.example.bottomnavbarsandbox.ui.login

import android.content.Intent
import android.content.res.ColorStateList
import android.graphics.*
import android.graphics.drawable.GradientDrawable
import android.os.Bundle
import android.text.InputType
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.FrameLayout
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.result.contract.ActivityResultContracts
import androidx.activity.viewModels
import androidx.annotation.RequiresApi
import androidx.compose.runtime.LaunchedEffect
import androidx.lifecycle.viewModelScope
import com.example.bottomnavbarsandbox.R
import com.example.bottomnavbarsandbox.activity.MainActivity
import com.example.bottomnavbarsandbox.database.Customer
import com.example.bottomnavbarsandbox.database.CustomerDao
import com.example.bottomnavbarsandbox.database.MovieAppDatabase
import com.example.bottomnavbarsandbox.database.MovieAppViewModel
import com.example.bottomnavbarsandbox.router.Routes
import com.example.bottomnavbarsandbox.ui.register.Register
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.api.ApiException
import com.google.android.gms.tasks.Task
import com.google.android.gms.common.SignInButton
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import java.time.LocalDateTime


class Login(): ComponentActivity() {

    private lateinit var googleSignInClient: GoogleSignInClient
    private val API_KEY = "AIzaSyCCP2H0vmj-mxysJEJlmldBJCq39jBE-f4"
    private val SEARCH_ID_cx = "721ef828bec2748ad"
//    private var customerDao : CustomerDao = MovieAppDatabase.getDatabase(this).getCustomerDao()
    private val madbViewModel: MovieAppViewModel by viewModels()

    private val googleSignInLauncher = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
        val task = GoogleSignIn.getSignedInAccountFromIntent(result.data)
        handleGoogleSignInResult(task)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(loadLogin())

        val gso = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestEmail()
            .build()

        googleSignInClient = GoogleSignIn.getClient(this, gso)
    }

    private fun loadLogin(): View {
        val buttonGoogleSignIn = SignInButton(this).apply {
            setSize(SignInButton.SIZE_STANDARD)
            setOnClickListener {
                val signInIntent = googleSignInClient.signInIntent
                googleSignInLauncher.launch(signInIntent)
            }
        }
        val layout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
        }

        val topLayout = createTopLayout()
        val bottomLayout = createBottomLayout()
        val formLayout = createFormLayout()

        layout.addView(topLayout)
        layout.addView(bottomLayout)
        layout.addView(formLayout)
        layout.addView(buttonGoogleSignIn)

        return layout
    }

    private fun createTopLayout(): View {
        val topLayout = FrameLayout(this).apply {
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                1400
            )
        }

        val imageView = ImageView(this).apply {
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            )
            scaleType = ImageView.ScaleType.CENTER_CROP
            setImageResource(R.drawable.login_back)
        }

        topLayout.addView(imageView)

        return topLayout
    }

    private fun createBottomLayout(): View {
        val bottomLayout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            ).apply {
                topMargin = -300
            }
        }

        val centerLayout = FrameLayout(this).apply {
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                200
            )
            background = GradientDrawable(
                GradientDrawable.Orientation.BOTTOM_TOP,
                intArrayOf(Color.argb(255, 0, 0, 0), Color.argb(0, 255, 255, 255))
            )
        }

        val backLayout = FrameLayout(this).apply {
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            )
            setBackgroundColor(Color.BLACK)
        }

        bottomLayout.addView(centerLayout)
        bottomLayout.addView(backLayout)

        return bottomLayout
    }

    private fun createFormLayout(): View {
        val editTextEmail = createEditText("Email")
        val editTextPassword = createEditText("Password").apply {
            inputType = InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_PASSWORD
        }

        val buttonLogin = Button(this).apply {
            text = "Login"
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                150
            ).apply {
                topMargin = 50
            }
            setTextColor(Color.WHITE)
            isAllCaps = false
            setBackgroundColor(Color.RED)
            setOnClickListener {
                val email = editTextEmail.text.toString()
                val password = editTextPassword.text.toString()
                runBlocking {
                    val customer : Customer = madbViewModel.getCustomerByEmail(email)
                    if (customer == null || !password.equals(customer.password)){
                        Toast.makeText(this@Login, "Invalid username or password", Toast.LENGTH_SHORT).show()
                        return@runBlocking
                    }
                    Toast.makeText(this@Login, "Login successful", Toast.LENGTH_SHORT).show()
                    val intent = Intent(this@Login, MainActivity::class.java)
                    startActivity(intent)
                }
            }
        }

        val buttonRegister = Button(this).apply {
            text = "Register"
            setTextColor(Color.WHITE)
            isAllCaps = false
            setBackgroundColor(0x00000000)
            setOnClickListener {
                val intent = Intent(this@Login, Register::class.java)
                startActivity(intent)
            }
        }
        val buttonGoogleSignIn = SignInButton(this).apply {
            setPadding(50, 0, 50, 0)

            setSize(SignInButton.SIZE_STANDARD)
            setOnClickListener {
                val signInIntent = googleSignInClient.signInIntent
                googleSignInLauncher.launch(signInIntent)
            }
        }

        val formLayout = LinearLayout(this).apply {
            setPadding(50, 0, 50, 0)
            orientation = LinearLayout.VERTICAL
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            ).apply {
                topMargin = -1000
            }
            addView(editTextEmail)
            addView(editTextPassword)
            addView(buttonLogin)
            addView(buttonRegister)
            addView(buttonGoogleSignIn)
        }

        return formLayout
    }

    private fun createEditText(hint: String): EditText {
        return EditText(this).apply {
            this.hint = hint
            setTextColor(Color.WHITE)
            setHintTextColor(Color.WHITE)
            backgroundTintList = ColorStateList.valueOf(Color.WHITE)
        }
    }

    @RequiresApi(64)
    private fun handleGoogleSignInResult(completedTask: Task<GoogleSignInAccount>) {
        try {
            val account = completedTask.getResult(ApiException::class.java)
            // Signed in successfully, show authenticated UI.
            Toast.makeText(this, "Google sign-in successful", Toast.LENGTH_SHORT).show()

            // 获取用户信息
            val userId = account?.id
            val userName = account?.displayName
            val userEmail = account?.email

            val nameParts = userName?.split(" ")
            val firstName = nameParts?.getOrNull(0) ?:""
            val lastName = nameParts?.getOrNull(1) ?:""


            //将 userID 转换为字符串
            val userIdString = userId?.toString() ?:""

//            print("xxxxx $userEmail")

            // 创建一个包含用户信息的Bundle
            val resultBundle = Bundle().apply {
                putString("userId", userId)
                putString("firstName", firstName)
                putString("lastName", lastName)
                putString("userName", userName)
                putString("userEmail", userEmail)
            }

            // 创建一个Intent，用于返回结果
            val resultIntent = Intent().apply {
                putExtras(resultBundle)
            }

            // 设置结果码和数据，并结束当前Activity
            setResult(RESULT_OK, resultIntent)
            runBlocking {
                val customer : Customer = madbViewModel.getCustomerById(userIdString)
                if (customer == null){
                    val c = Customer(userIdString, firstName,lastName, "", userEmail.toString(), "", LocalDateTime.now())
                    madbViewModel.register(c)
                }
            }
            val intent = Intent(this@Login, MainActivity::class.java)
            startActivity(intent)
        } catch (e: ApiException) {
            // The ApiException status code indicates the detailed failure reason.
            // Please refer to the GoogleSignInStatusCodes class reference for more information.
            Toast.makeText(this, "Google sign-in failed: ${e.statusCode}", Toast.LENGTH_SHORT).show()
        }

    }
}

