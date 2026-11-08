package com.vishnupriyahospital.korutla

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.vishnupriyahospital.korutla.ui.components.HospitalTopBar
import com.vishnupriyahospital.korutla.ui.navigation.BottomNavItems
import com.vishnupriyahospital.korutla.ui.navigation.Screen
import com.vishnupriyahospital.korutla.ui.screens.*
import com.vishnupriyahospital.korutla.ui.theme.VishnuPriyaHospitalTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            VishnuPriyaHospitalTheme {
                MainHospitalApp()
            }
        }
    }
}

@Composable
fun MainHospitalApp() {
    val navController = rememberNavController()
    var isTelugu by remember { mutableStateOf(false) }
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route ?: Screen.Home.route

    Scaffold(
        modifier = Modifier.fillMaxSize(),
        topBar = {
            HospitalTopBar(
                currentTitle = when (currentRoute) {
                    Screen.Home.route -> if (isTelugu) Screen.Home.titleTe else Screen.Home.title
                    Screen.Doctors.route -> if (isTelugu) Screen.Doctors.titleTe else Screen.Doctors.title
                    Screen.Services.route -> if (isTelugu) Screen.Services.titleTe else Screen.Services.title
                    Screen.Timings.route -> if (isTelugu) Screen.Timings.titleTe else Screen.Timings.title
                    Screen.Emergency.route -> if (isTelugu) Screen.Emergency.titleTe else Screen.Emergency.title
                    Screen.About.route -> if (isTelugu) Screen.About.titleTe else Screen.About.title
                    else -> "Vishnu Priya Hospital"
                },
                isTelugu = isTelugu,
                onToggleLanguage = { isTelugu = !isTelugu },
                onEmergencyClick = {
                    navController.navigate(Screen.Emergency.route) {
                        launchSingleTop = true
                    }
                },
                onAboutClick = {
                    navController.navigate(Screen.About.route) {
                        launchSingleTop = true
                    }
                }
            )
        },
        bottomBar = {
            NavigationBar {
                BottomNavItems.forEach { screen ->
                    val isSelected = currentRoute == screen.route
                    NavigationBarItem(
                        selected = isSelected,
                        onClick = {
                            if (currentRoute != screen.route) {
                                navController.navigate(screen.route) {
                                    popUpTo(Screen.Home.route) { saveState = true }
                                    launchSingleTop = true
                                    restoreState = true
                                }
                            }
                        },
                        icon = { Icon(screen.icon, contentDescription = screen.title) },
                        label = {
                            Text(
                                text = if (isTelugu) screen.titleTe else screen.title,
                                style = MaterialTheme.typography.labelSmall
                            )
                        }
                    )
                }
            }
        }
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = Screen.Home.route,
            modifier = Modifier.padding(innerPadding)
        ) {
            composable(Screen.Home.route) {
                HomeScreen(
                    isTelugu = isTelugu,
                    onNavigateToTimings = { navController.navigate(Screen.Timings.route) },
                    onNavigateToDoctors = { navController.navigate(Screen.Doctors.route) },
                    onNavigateToServices = { navController.navigate(Screen.Services.route) },
                    onNavigateToEmergency = { navController.navigate(Screen.Emergency.route) }
                )
            }
            composable(Screen.Doctors.route) {
                DoctorsScreen(
                    isTelugu = isTelugu,
                    onNavigateToTimings = { navController.navigate(Screen.Timings.route) }
                )
            }
            composable(Screen.Services.route) {
                ServicesScreen(
                    isTelugu = isTelugu,
                    onNavigateToTimings = { navController.navigate(Screen.Timings.route) }
                )
            }
            composable(Screen.Timings.route) {
                TimingsScreen(isTelugu = isTelugu)
            }
            composable(Screen.Emergency.route) {
                EmergencyScreen(isTelugu = isTelugu)
            }
            composable(Screen.About.route) {
                AboutScreen(isTelugu = isTelugu)
            }
        }
    }
}
