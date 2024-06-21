package com.example.bottomnavbarsandbox.restful.addToGCal

import retrofit2.http.GET
import retrofit2.http.Query

interface GoogleOAuthService {
    @GET("/o/oauth2/v2/auth")
    suspend fun requestAuthorization(
        @Query("client_id") clientId: String,
        @Query("redirect_uri") redirectUri: String,
        @Query("response_type") responseType: String,
        @Query("scope") scope: String,
        @Query("state") state: String
    ): AuthorizationResponse
}