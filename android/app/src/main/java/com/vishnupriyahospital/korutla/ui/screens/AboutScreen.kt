package com.vishnupriyahospital.korutla.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun AboutScreen(
    isTelugu: Boolean,
    modifier: Modifier = Modifier
) {
    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            ElevatedCard(
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.elevatedCardColors(containerColor = MaterialTheme.colorScheme.surface),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(18.dp)) {
                    Text(
                        text = if (isTelugu) "విష్ణు ప్రియ ఆసుపత్రి గురించి" else "About Vishnu Priya Hospital",
                        style = MaterialTheme.typography.titleLarge.copy(fontWeight = FontWeight.Bold)
                    )
                    Spacer(modifier = Modifier.height(10.dp))
                    Text(
                        text = if (isTelugu)
                            "విష్ణు ప్రియ హాస్పిటల్ కోరుట్ల (జగిత్యాల జిల్లా, తెలంగాణ) లోని ప్రముఖ వైద్య సంస్థ. ముఖ్యంగా ఆర్థోపెడిక్స్, ఎముకలు & కీళ్ల మార్పిడి శస్త్రచికిత్సలు, రోడ్డు ప్రమాదాల అత్యవసర వైద్యం, జనరల్ సర్జరీ మరియు ప్రసూతి విభాగాలలో రోగులకు నిరంతర నాణ్యమైన సేవలను అందిస్తోంది."
                        else
                            "Vishnu Priya Hospital is a premier multi-speciality and advanced orthopaedic center located in Korutla, Telangana. Founded with the mission to deliver ethical, affordable, and world-class medical care to the people of Jagtial district and northern Telangana.",
                        style = MaterialTheme.typography.bodyMedium.copy(
                            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.85f),
                            lineHeight = 22.sp
                        )
                    )

                    Spacer(modifier = Modifier.height(16.dp))

                    val highlights = listOf(
                        "Dr. Naresh - Over 15+ years of trusted orthopedic & joint replacement expertise",
                        "Modern Modular Operation Theatres with laminar airflow",
                        "24/7 Trauma Emergency Casualty with on-call orthopaedic surgeons",
                        "Digital High-Frequency X-Ray and computerized laboratory",
                        "Round-the-clock In-house Pharmacy and ambulance service",
                        "Aarogyasri / Health Insurance & Cashless TPA support (inquire at billing desk)"
                    )

                    highlights.forEach { point ->
                        Row(
                            verticalAlignment = Alignment.Top,
                            modifier = Modifier.padding(vertical = 4.dp)
                        ) {
                            Icon(
                                Icons.Default.Verified,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.primary,
                                modifier = Modifier
                                    .size(18.dp)
                                    .padding(top = 2.dp)
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(point, style = MaterialTheme.typography.bodySmall.copy(lineHeight = 18.sp))
                        }
                    }
                }
            }
        }

        // App Details & Permissions Card (Strict compliance verification)
        item {
            Card(
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.4f)),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = "Native Android App Architecture",
                        style = MaterialTheme.typography.titleSmall.copy(fontWeight = FontWeight.Bold)
                    )
                    Spacer(modifier = Modifier.height(6.dp))
                    Text(
                        text = "• Package: com.vishnupriyahospital.korutla\n• Tech Stack: 100% Kotlin + Jetpack Compose + Material 3\n• Minimum SDK: API 24 (Android 7.0+)\n• Target SDK: API 34 (Android 14)\n• Strict Privacy: ONLY standard android.permission.INTERNET requested. Zero access to camera, microphone, storage, or GPS.",
                        style = MaterialTheme.typography.bodySmall.copy(
                            fontSize = 12.sp,
                            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.8f),
                            lineHeight = 18.sp
                        )
                    )
                }
            }
        }
    }
}
