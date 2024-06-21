package com.example.bottomnavbarsandbox.ui.map

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.example.bottomnavbarsandbox.R
import com.google.android.gms.maps.model.CameraPosition
import com.google.android.gms.maps.model.LatLng
import com.google.maps.android.compose.GoogleMap
import com.google.maps.android.compose.Marker
import com.google.maps.android.compose.MarkerState
import com.google.maps.android.compose.rememberCameraPositionState
import kotlin.reflect.KProperty


@Composable
fun Map(navController: NavHostController) {
    var showCustomerWindow by remember { mutableStateOf(false) }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .clickable {
                if (showCustomerWindow)
                    showCustomerWindow = false
            },
        contentAlignment = Alignment.Center
    ) {
        var markerList by remember {
            mutableStateOf(ArrayList<CustomerMarker>())
        }

        markerList.add(
            CustomerMarker(
                lat = -37.88589527514387,
                145.08551958934316,
                name = "Hoyts",
                address = "1341 Dandenong Rd, Chadstone VIC 3148",
                imageInt = R.drawable.cinema_craiyon
            )
        )
        markerList.add(
            CustomerMarker(
                lat = -37.778502292541276, 144.88491311133222,
                name = "Hoyts",
                address = "Rosamond Rd, Maribyrnong VIC 3032",
                imageInt = R.drawable.mission_impossible
            )
        )
        markerList.add(
            CustomerMarker(
                lat = -38.14353578776009, 145.1232187518241,
                name = "HoytsFranks",
                address = "21 Wells St, Frankston VIC 3199",
                imageInt = R.drawable.mission_impossible
            )
        )
        markerList.add(
            CustomerMarker(
                lat = -37.67845542378407, 144.91952091132944,
                name = "Hoytsbroad",
                address = "48/50 Pearcedale Parade, Broadmeadows VIC 3047",
                imageInt = R.drawable.mission_impossible
            )
        )


        markerList.add(
            CustomerMarker(
                lat = -37.701638997803826, 144.775773209483,
                name = "Hoytstaylors",
                address = "Shop 1H/399 Melton Hwy, Taylors Lakes VIC 3038",
                imageInt = R.drawable.mission_impossible
            )
        )

        markerList.add(
            CustomerMarker(
                lat = -37.812677856289184, 145.228840882498,
                name = "Hoytsringwood",
                address = "171-175 Maroondah Hwy, Ringwood VIC 3134",
                imageInt = R.drawable.mission_impossible
            )
        )

        markerList.add(
            CustomerMarker(
                lat = -37.8140043941171, 144.93834929414447,
                name = "Hoytsdock",
                address = "440 Docklands Dr, Docklands VIC 3008",
                imageInt = R.drawable.mission_impossible
            )
        )

        markerList.add(
            CustomerMarker(
                lat = -37.80948451386551, 144.96371994016855,
                name = "Hoytscity",
                address = "Cnr Swanston &, La Trobe St, Melbourne VIC 3000",
                imageInt = R.drawable.mission_impossible
            )
        )

        markerList.add(
            CustomerMarker(
                lat = -37.83476965162035, 145.20130085551077,
                name = "Hoytsforest",
                address = "Canterbury Rd, Forest Hill VIC 3131",
                imageInt = R.drawable.mission_impossible
            )
        )

        val homeLocationLatLng = LatLng(-37.91386, 145.12188)
        val cameraPositionState = rememberCameraPositionState {
            position = CameraPosition.fromLatLngZoom(homeLocationLatLng, 10f)
        }
        var selectedLocation by remember { mutableStateOf(homeLocationLatLng) }
        var currentMarker: CustomerMarker? = null
        var markerState by remember { mutableStateOf(currentMarker) }
//    var selectedLocation by remember { mutableStateOf(homeLocationLatLng) }
        GoogleMap(
            modifier = Modifier
                .fillMaxSize()
                .clickable {
                    if (showCustomerWindow)
                        showCustomerWindow = false
                },
            cameraPositionState = cameraPositionState
        ) {
            Marker(
                state = MarkerState(homeLocationLatLng),
                title = "Home",
                snippet = "This is home address",
//            onClick = {
//                selectedLocation = it.position
//                showCustomerWindow = true
//                true
//            }
            )
            markerList.forEach { marker ->
                Marker(
                    state = MarkerState(LatLng(marker.lat, marker.lng)),
                    title = marker.name,
                    snippet = marker.address,
                    onClick = {
                        selectedLocation = it.position
                        showCustomerWindow = true
                        markerState = marker
                        cameraPositionState.position = CameraPosition.fromLatLngZoom(
                            LatLng(marker.lat, marker.lng),
                            10f
                        )
                        true
                    }
                )
            }
        }
        if (showCustomerWindow) {
            markerState?.let { CustomInfoWindow(it) { showCustomerWindow = false } }
        }
//        MapScreen()
//        Column (
//            horizontalAlignment = Alignment.CenterHorizontally
//        ) {
//            Text(
//                text = "Map Screen",
//                style = MaterialTheme.typography.headlineMedium
//            )
//            Spacer (modifier = Modifier.size(30.dp))
//            Text(
//                text = "This app was created as part of FIT5046 exercise",
//                style = MaterialTheme.typography.bodyLarge
//            )
//        }
    }
}

@Composable
fun MapScreen() {
    var markerList by remember {
        mutableStateOf(ArrayList<CustomerMarker>())
    }

    markerList.add(
        CustomerMarker(
            lat = -37.88589527514387,
            145.08551958934316,
            name = "Hoyts",
            address = "1341 Dandenong Rd, Chadstone VIC 3148",
            imageInt = R.drawable.cinema_craiyon
        )
    )
    markerList.add(
        CustomerMarker(
            lat = -37.778502292541276, 144.88491311133222,
            name = "Hoyts",
            address = "Rosamond Rd, Maribyrnong VIC 3032",
            imageInt = R.drawable.mission_impossible
        )
    )
    markerList.add(
        CustomerMarker(
            lat = -38.14353578776009, 145.1232187518241,
            name = "HoytsFranks",
            address = "21 Wells St, Frankston VIC 3199",
            imageInt = R.drawable.mission_impossible
        )
    )

    val homeLocationLatLng = LatLng(-37.91386, 145.12188)
    val cameraPositionState = rememberCameraPositionState {
        position = CameraPosition.fromLatLngZoom(homeLocationLatLng, 10f)
    }
    var showCustomerWindow by remember { mutableStateOf(false) }
    var selectedLocation by remember { mutableStateOf(homeLocationLatLng) }
    var currentMarker: CustomerMarker? = null
    var markerState by remember { mutableStateOf(currentMarker) }
//    var selectedLocation by remember { mutableStateOf(homeLocationLatLng) }
    GoogleMap(
        modifier = Modifier.fillMaxSize(),
        cameraPositionState = cameraPositionState
    ) {
        Marker(
            state = MarkerState(homeLocationLatLng),
            title = "Home",
            snippet = "This is home address",
//            onClick = {
//                selectedLocation = it.position
//                showCustomerWindow = true
//                true
//            }
        )
        markerList.forEach { marker ->
            Marker(
                state = MarkerState(LatLng(marker.lat, marker.lng)),
                title = marker.name,
                snippet = marker.address,
                onClick = {
                    selectedLocation = it.position
                    showCustomerWindow = true
                    markerState = marker
                    cameraPositionState.position = CameraPosition.fromLatLngZoom(
                        LatLng(marker.lat, marker.lng),
                        10f
                    )
                    true
                }
            )
        }
    }
    if (showCustomerWindow) {
        markerState?.let { CustomInfoWindow(it) { showCustomerWindow = false } }
    }
}


//@Composable
//fun AddMarker(
//    markerList: ArrayList<Unit>,
//    lat: Double,
//    lng: Double,
//    name: String,
//    address: String
//) {
//    markerList.add(
//        Marker(
//            state = MarkerState(LatLng(lat, lng)),
//            title = name,
//            snippet = address,
//            onClick = {
//                selectedLocation = it.position
//                showCustomerWindow = true
//                true
//            }
//        )
//    )
//}

@Composable
fun CustomInfoWindow(marker: CustomerMarker, onDismiss: () -> Unit) {
    Box(
        contentAlignment = Alignment.Center, // Align the info window in the center of the screen
        modifier = Modifier
            .fillMaxSize(), // Fill the parent box
    ) {
        Card(
            modifier = Modifier
                .wrapContentSize()
                .offset(x = 0.dp, y = (-100).dp)
                .clickable { onDismiss() }, // Dismiss the info window on click
//            elevation = 4.dp
        ) {
            Row(modifier = Modifier.padding(8.dp)) {
                Image(
                    painter = painterResource(id = marker.imageInt),
                    contentDescription = marker.name,
                    modifier = Modifier.size(80.dp)
                )
                Spacer(modifier = Modifier.width(8.dp))
                Column {
                    Text(text = marker.name, style = MaterialTheme.typography.bodyLarge)
                    Text(text = marker.address, style = MaterialTheme.typography.bodyMedium)
                }
            }
        }
    }
}

