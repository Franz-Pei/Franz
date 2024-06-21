package com.example.bottomnavbarsandbox.ui.contactus

import androidx.compose.animation.animateContentSize
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.spring
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.bottomnavbarsandbox.R
import androidx.compose.material.icons.Icons.Filled
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material.icons.filled.KeyboardArrowUp

//import androidx.compose.material.icons.filled.ExpandLess
//import androidx.compose.material.icons.filled.ExpandMore

@Composable
fun ContactUs (navController: NavHostController) {
    Box (
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
//        Column (
//            horizontalAlignment = Alignment.CenterHorizontally
//        ) {
//            Text(
//                text = "Contact Us",
//                style = MaterialTheme.typography.headlineMedium
//            )
//            Spacer (modifier = Modifier.size(30.dp))
//            Text(
//                text = "This app was created as part of FIT5046 exercise",
//                style = MaterialTheme.typography.bodyLarge
//            )
//        }
        var questionAndAnswerList: ArrayList<QuestionAndAnswer> = ArrayList()
        questionAndAnswerList.add(QuestionAndAnswer("Movie Club","movieclub@royalfilms.com"))
        questionAndAnswerList.add(QuestionAndAnswer("General Feedback","feedback@royalfilms.com"))
        questionAndAnswerList.add(QuestionAndAnswer("Royal Films Head Office","Phone: (03) 4567 8900"))
        questionAndAnswerList.add(QuestionAndAnswer("Mailing address:","PO Box 1234, East Park, VIC 3214"))
        Greetings(questionAndAnswerList = questionAndAnswerList)
    }
}
@Composable
private fun Greetings(
    modifier: Modifier = Modifier,
    questionAndAnswerList: List<QuestionAndAnswer> = listOf()
) {
    LazyColumn(modifier = modifier.padding(vertical = 4.dp)) {
        items(items = questionAndAnswerList) { item ->
            QuestionAndAnswerCard(item)
        }
    }
}

@Composable
private fun QuestionAndAnswerCard(questionAndAnswer: QuestionAndAnswer, modifier: Modifier = Modifier) {
    Card(
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.primary
        ),
        modifier = modifier.padding(vertical = 4.dp, horizontal = 8.dp)
    ) {
        CardContent(questionAndAnswer)
    }
}

@Composable
private fun CardContent(questionAndAnswer: QuestionAndAnswer) {
    var expanded by rememberSaveable { mutableStateOf(false) }

    Row(
        modifier = Modifier
            .padding(12.dp)
            .animateContentSize(
                animationSpec = spring(
                    dampingRatio = Spring.DampingRatioMediumBouncy,
                    stiffness = Spring.StiffnessLow
                )
            )
    ) {
        Column(
            modifier = Modifier
                .weight(1f)
                .padding(12.dp)
        ) {
//            Text(text = "Hello, ")
            Text(
                text = questionAndAnswer.question, style = MaterialTheme.typography.headlineMedium.copy(
                    fontWeight = FontWeight.ExtraBold
                )
            )
            if (expanded) {
                Text(
                    text = (questionAndAnswer.answer),
                )
            }
        }
        IconButton(onClick = { expanded = !expanded }) {
            Icon(
                imageVector = if (expanded) Filled.KeyboardArrowUp else Icons.Filled.KeyboardArrowDown,
                contentDescription = if (expanded) {
                    stringResource(R.string.show_less)
                } else {
                    stringResource(R.string.show_more)
                }
            )
        }
    }
}