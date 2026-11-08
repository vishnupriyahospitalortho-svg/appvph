package com.vishnupriyahospital.korutla.ui.navigation

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Call
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.LocalHospital
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Schedule
import androidx.compose.ui.graphics.vector.ImageVector

sealed class Screen(
    val route: String,
    val title: String,
    val titleTe: String,
    val icon: ImageVector
) {
    object Home : Screen("home", "Home", "హోమ్", Icons.Default.Home)
    object Doctors : Screen("doctors", "Doctors", "వైద్యులు", Icons.Default.Person)
    object Services : Screen("services", "Departments", "విభాగాలు", Icons.Default.LocalHospital)
    object Timings : Screen("timings", "OP Timings", "ఓపీ వేళలు", Icons.Default.Schedule)
    object Emergency : Screen("emergency", "24/7 Emergency", "అత్యవసరం", Icons.Default.Call)
    object About : Screen("about", "About Us", "ఆసుపత్రి వివరాలు", Icons.Default.Info)
}

val BottomNavItems = listOf(
    Screen.Home,
    Screen.Doctors,
    Screen.Services,
    Screen.Timings,
    Screen.Emergency
)
