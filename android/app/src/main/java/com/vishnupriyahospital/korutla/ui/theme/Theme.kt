package com.vishnupriyahospital.korutla.ui.theme

import android.app.Activity
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

private val LightColorScheme = lightColorScheme(
    primary = HospitalPrimary,
    onPrimary = HospitalOnPrimary,
    primaryContainer = HospitalPrimaryContainer,
    onPrimaryContainer = HospitalOnPrimaryContainer,
    secondary = HospitalSecondary,
    onSecondary = HospitalOnSecondary,
    secondaryContainer = HospitalSecondaryContainer,
    onSecondaryContainer = HospitalOnSecondaryContainer,
    tertiary = HospitalTertiary,
    onTertiary = HospitalOnTertiary,
    tertiaryContainer = HospitalTertiaryContainer,
    onTertiaryContainer = HospitalOnTertiaryContainer,
    error = EmergencyRed,
    errorContainer = EmergencyRedContainer,
    onError = OnEmergencyRed,
    onErrorContainer = OnEmergencyRedContainer,
    background = HospitalBackgroundLight,
    surface = HospitalSurfaceLight,
    surfaceVariant = HospitalSurfaceVariant,
    onSurface = HospitalOnSurface
)

private val DarkColorScheme = darkColorScheme(
    primary = HospitalPrimaryDark,
    onPrimary = HospitalOnPrimaryContainer,
    secondary = HospitalSecondaryDark,
    background = HospitalBackgroundDark,
    surface = HospitalSurfaceDark,
    onSurface = HospitalOnSurfaceDark
)

@Composable
fun VishnuPriyaHospitalTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme
    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = colorScheme.primary.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = false
        }
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = HospitalTypography,
        content = content
    )
}
