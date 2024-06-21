plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("com.google.devtools.ksp")
    kotlin("kapt")
}

android {
    signingConfigs {
        getByName("debug") {
            storeFile = file("./android.jks")
            storePassword = "12345678"
            keyAlias = "android"
            keyPassword = "12345678"
        }
    }
    namespace = "com.example.bottomnavbarsandbox"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.example.bottomnavbarsandbox"
        minSdk = 26
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }
        externalNativeBuild {
            cmake {
                cppFlags += ""
            }
        }
        signingConfig = signingConfigs.getByName("debug")
        javaCompileOptions {
            annotationProcessorOptions {
                    arguments += mapOf("room.schemaLocation" to "$projectDir/schemas".toString())

            }
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
    buildFeatures {
        compose = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.1"
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }


}

dependencies {

    implementation("com.squareup.okhttp3:okhttp:4.10.0")
    implementation("com.google.code.gson:gson:2.10")
    implementation ("com.google.zxing:core:3.4.0")

    implementation("com.google.android.gms:play-services-auth:20.5.0")
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.7.0")
    implementation("androidx.activity:activity-compose:1.8.2")
    implementation(platform("androidx.compose:compose-bom:2023.08.00"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-graphics")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3")
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
    androidTestImplementation(platform("androidx.compose:compose-bom:2023.08.00"))
    androidTestImplementation("androidx.compose.ui:ui-test-junit4")
    debugImplementation("androidx.compose.ui:ui-tooling")
    debugImplementation("androidx.compose.ui:ui-test-manifest")

    implementation("androidx.compose.material:material:1.6.3")
    implementation("androidx.navigation:navigation-compose:2.7.7")


    val room_version = "2.6.1"

    implementation("androidx.room:room-runtime:$room_version")
    annotationProcessor("androidx.room:room-compiler:$room_version")
    implementation("androidx.room:room-ktx:$room_version")
    kapt("androidx.room:room-compiler:$room_version")

    implementation ("androidx.lifecycle:lifecycle-livedata-ktx:2.6.1")
    implementation("androidx.compose.runtime:runtime-livedata:1.6.1")

    // Paging 3 Integration
    implementation("androidx.room:room-paging:$room_version")

    implementation ("com.google.code.gson:gson:2.8.8")

    //map
    implementation("com.google.maps.android:maps-compose:4.4.1")
    // Optionally, you can include the Compose utils library for Clustering,
    // Street View metadata checks, etc.
    implementation("com.google.maps.android:maps-compose-utils:4.4.1")
    // Optionally, you can include the widgets library for ScaleBar, etc.
    implementation("com.google.maps.android:maps-compose-widgets:4.4.1")

    // Documentation said something about these two
    //implementation("androidx.room.Room.databaseBuilder")
    //implementation("androidx.room.Room.inMemoryDatabaseBuilder")

    //for google auth and calendar integrations
    implementation("com.google.oauth-client:google-oauth-client-jetty:1.23.0")
    implementation("com.google.apis:google-api-services-calendar:v3-rev305-1.23.0")
    implementation("com.google.android.gms:play-services-auth:20.4.0")

    //to avoid conflicts in libraries
    implementation("com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava")

    implementation("com.google.api-client:google-api-client-android:1.23.0") {
        exclude(group = "org.apache.httpcomponents")
    }

    //so that we can easily control permissions
    implementation("pub.devrel:easypermissions:3.0.0")

    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.retrofit2:converter-gson:2.9.0") // For JSON serialization/deserialization
    implementation("androidx.compose.material:material-icons-extended")

//    implementation("com.google.api-client:google-api-client-android:1.32.1")
    implementation("com.google.apis:google-api-services-calendar:v3-rev305-1.32.1")
}