package com.vishnupriyahospital.korutla.ui.components

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material.icons.filled.Translate
import androidx.compose.material3.Badge
import androidx.compose.material3.BadgedBox
import androidx.compose.material3.CenterAlignedTopAppBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.vishnupriyahospital.korutla.ui.theme.EmergencyRed

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HospitalTopBar(
    currentTitle: String,
    isTelugu: Boolean,
    onToggleLanguage: () -> Unit,
    onEmergencyClick: () -> Unit,
    onAboutClick: () -> Unit
) {
    CenterAlignedTopAppBar(
        title = {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    text = if (isTelugu) "విష్ణు ప్రియ హాస్పిటల్" else "Vishnu Priya Hospital",
                    style = MaterialTheme.typography.titleLarge.copy(
                        fontWeight = FontWeight.Bold,
                        fontSize = 18.sp
                    ),
                    color = MaterialTheme.colorScheme.onPrimary
                )
            }
        },
        actions = {
            // Language switch button (English / Telugu for Telangana patients)
            IconButton(onClick = onToggleLanguage) {
                BadgedBox(badge = {
                    Badge(containerColor = MaterialTheme.colorScheme.secondary) {
                        Text(if (isTelugu) "TE" else "EN", fontSize = 10.sp)
                    }
                }) {
                    Icon(
                        imageVector = Icons.Default.Translate,
                        contentDescription = "Change Language",
                        tint = MaterialTheme.colorScheme.onPrimary
                    )
                }
            }
            // Quick Emergency Call Icon
            IconButton(onClick = onEmergencyClick) {
                Icon(
                    imageVector = Icons.Default.Phone,
                    contentDescription = "24/7 Emergency",
                    tint = EmergencyRed
                )
            }
            // About Hospital
            IconButton(onClick = onAboutClick) {
                Icon(
                    imageVector = Icons.Default.Info,
                    contentDescription = "Hospital Information",
                    tint = MaterialTheme.colorScheme.onPrimary
                )
            }
        },
        colors = TopAppBarDefaults.centerAlignedTopAppBarColors(
            containerColor = MaterialTheme.colorScheme.primary
        )
    )
}
