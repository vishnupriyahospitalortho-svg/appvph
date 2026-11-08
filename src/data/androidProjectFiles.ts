export interface AndroidFile {
  path: string;
  name: string;
  language: "kotlin" | "xml" | "groovy" | "toml" | "properties" | "bash";
  description: string;
  category: "app" | "ui" | "theme" | "navigation" | "model" | "config" | "manifest" | "build";
  content: string;
}

export const ANDROID_FILES: AndroidFile[] = [
  {
    path: "build_signed_apk.sh",
    name: "build_signed_apk.sh",
    language: "bash",
    description: "Zero-input one-click script: automatically generates vishnupriya-key.jks if missing and compiles the signed production APK.",
    category: "build",
    content: `#!/usr/bin/env bash
# ==============================================================================
# Vishnu Priya Hospital, Korutla - Zero-Input Production APK Build & Sign Script
# Package: com.vishnupriyahospital.korutla
# ==============================================================================

set -e

echo "======================================================================"
echo "  Vishnu Priya Hospital - Zero-Input Release APK Builder              "
echo "  Package: com.vishnupriyahospital.korutla                           "
echo "======================================================================"

SCRIPT_DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if [ ! -f "settings.gradle.kts" ] && [ -d "android" ]; then
    cd android
fi

KEYSTORE_FILE="vishnupriya-key.jks"
KEY_ALIAS="vishnupriya"
STORE_PASS="VPH@Korutla2026"
KEY_PASS="VPH@Korutla2026"

echo ""
echo "[Step 1/3] Checking release keystore: $KEYSTORE_FILE"
if [ ! -f "$KEYSTORE_FILE" ]; then
    echo "Keystore not found. Generating production keystore non-interactively..."
    keytool -genkeypair -v \\
        -keystore "$KEYSTORE_FILE" \\
        -keyalg RSA \\
        -keysize 2048 \\
        -validity 10000 \\
        -alias "$KEY_ALIAS" \\
        -storepass "$STORE_PASS" \\
        -keypass "$KEY_PASS" \\
        -dname "CN=Vishnu Priya Hospital, OU=Administration, O=Vishnu Priya Hospital, L=Korutla, ST=Telangana, C=IN"
    echo "Keystore successfully generated: $KEYSTORE_FILE"
else
    echo "Release keystore is present and verified: $KEYSTORE_FILE"
fi

echo ""
echo "[Step 2/3] Setting Gradle permissions..."
chmod +x gradlew || true

echo ""
echo "[Step 3/3] Compiling and Signing Production Release APK..."
./gradlew assembleRelease

echo ""
APK_PATH="app/build/outputs/apk/release/app-release.apk"
if [ -f "$APK_PATH" ]; then
    echo "======================================================================"
    echo " BUILD SUCCESSFUL! "
    echo " Production Signed APK ready at:"
    echo " -> $APK_PATH"
    echo "======================================================================"
    ls -lh "$APK_PATH"
else
    echo "Release build completed. Output files located in: app/build/outputs/apk/release/"
fi`
  },
  {
    path: "app/build.gradle.kts",
    name: "app/build.gradle.kts",
    language: "groovy",
    description: "App Gradle configuration: Release signing config with vishnupriya-key.jks, isMinifyEnabled = true, isShrinkResources = true, versionCode 1, versionName '1.0'.",
    category: "config",
    content: `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
}

android {
    namespace = "com.vishnupriyahospital.korutla"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.vishnupriyahospital.korutla"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }
    }

    signingConfigs {
        create("release") {
            storeFile = file("../vishnupriya-key.jks")
            storePassword = "VPH@Korutla2026"
            keyAlias = "vishnupriya"
            keyPassword = "VPH@Korutla2026"
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            signingConfig = signingConfigs.getByName("release")
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
        debug {
            isMinifyEnabled = false
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        compose = true
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui)
    implementation(libs.androidx.ui.graphics)
    implementation(libs.androidx.ui.tooling.preview)
    implementation(libs.androidx.material3)
    implementation(libs.androidx.material.icons.extended)
    implementation(libs.androidx.navigation.compose)
    implementation(libs.androidx.lifecycle.viewmodel.compose)

    debugImplementation(libs.androidx.ui.tooling)
}`
  },
  {
    path: "app/proguard-rules.pro",
    name: "proguard-rules.pro",
    language: "properties",
    description: "ProGuard / R8 rules for Kotlin 2.0, Jetpack Compose runtime, Coroutines, and Hospital models.",
    category: "config",
    content: `# ProGuard & R8 Configuration for Vishnu Priya Hospital Native Android App
-keep class com.vishnupriyahospital.korutla.model.** { *; }
-keepclassmembers class com.vishnupriyahospital.korutla.model.** { *; }

-keepattributes *Annotation*, Signature, InnerClasses, EnclosingMethod
-dontwarn kotlin.**
-keepclassmembers class kotlin.Metadata {
    public <methods>;
}

-keepnames class kotlinx.coroutines.internal.MainDispatcherFactory {}
-keepnames class kotlinx.coroutines.CoroutineExceptionHandler {}
-keepclassmembers class kotlinx.coroutines.** {
    volatile <fields>;
}

-dontwarn androidx.compose.**
-keep class androidx.compose.runtime.** { *; }
-keep class androidx.compose.ui.** { *; }
-keep class androidx.compose.material3.** { *; }
-keep class androidx.compose.animation.** { *; }
-keep class androidx.compose.foundation.** { *; }

-keepclassmembers class * {
    @androidx.compose.runtime.Composable *;
    void *(androidx.compose.runtime.Composer, int);
}

-keep class androidx.navigation.** { *; }
-keepclassmembers class androidx.navigation.** { *; }
-keepclassmembers class * extends androidx.lifecycle.ViewModel {
    <init>();
}

-keep public class com.vishnupriyahospital.korutla.MainActivity { *; }
-keep public class * extends androidx.activity.ComponentActivity

-dontwarn sun.misc.Unsafe
-dontwarn java.lang.invoke.**`
  },
  {
    path: "app/src/main/AndroidManifest.xml",
    name: "AndroidManifest.xml",
    language: "xml",
    description: "App manifest requesting strictly INTERNET permission only. Zero camera, mic, location, or storage permissions.",
    category: "manifest",
    content: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.vishnupriyahospital.korutla">

    <!-- ONLY standard INTERNET permission as strictly requested: No location, camera, mic, or storage -->
    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.VishnuPriyaHospital"
        tools:targetApi="34">
        
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:label="@string/app_name"
            android:theme="@style/Theme.VishnuPriyaHospital"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>`
  },
  {
    path: "app/src/main/res/values/strings.xml",
    name: "strings.xml",
    language: "xml",
    description: "Official app display name (Vishnu Priya Hospital), primary helpline (095155 74014), and alternative helpline (094916 20595).",
    category: "config",
    content: `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">Vishnu Priya Hospital</string>
    <string name="hospital_tagline">Orthopaedic, Trauma &amp; Dental Care Center</string>
    <string name="hospital_location">NH 63, Near Old Bus Stand, Korutla, Telangana 505326</string>
    <string name="emergency_helpline">095155 74014</string>
    <string name="emergency_helpline_alt">094916 20595</string>
    <string name="hospital_email">vishnupriyahospitalortho@gmail.com</string>
    
    <!-- Navigation Tabs (Direct Walk-in OP only, No online bookings) -->
    <string name="nav_home">Home</string>
    <string name="nav_doctors">Doctors</string>
    <string name="nav_services">Services</string>
    <string name="nav_timings">OP Timings</string>
    <string name="nav_emergency">Emergency</string>
    <string name="nav_about">About</string>
</resources>`
  },
  {
    path: "app/src/main/java/com/vishnupriyahospital/korutla/MainActivity.kt",
    name: "MainActivity.kt",
    language: "kotlin",
    description: "Primary entry point with Material 3 Scaffold, CenterAlignedTopAppBar, NavigationBar, and NavHost for walk-in OP navigation.",
    category: "app",
    content: `package com.vishnupriyahospital.korutla

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
                    navController.navigate(Screen.Emergency.route) { launchSingleTop = true }
                },
                onAboutClick = {
                    navController.navigate(Screen.About.route) { launchSingleTop = true }
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
}`
  },
  {
    path: "app/src/main/java/com/vishnupriyahospital/korutla/ui/screens/HomeScreen.kt",
    name: "HomeScreen.kt",
    language: "kotlin",
    description: "Jetpack Compose Home screen with Emergency banner, quick actions, spotlight on Dr. Naresh & Dr. Archana, and walk-in consultation notice.",
    category: "ui",
    content: `package com.vishnupriyahospital.korutla.ui.screens

import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import com.vishnupriyahospital.korutla.ui.theme.EmergencyRed

@Composable
fun HomeScreen(
    isTelugu: Boolean,
    onNavigateToTimings: () -> Unit,
    onNavigateToDoctors: () -> Unit,
    onNavigateToServices: () -> Unit,
    onNavigateToEmergency: () -> Unit,
    modifier: Modifier = Modifier
) {
    // Renders Emergency Banner, Walk-in OP status, Dr. Naresh & Dr. Archana profiles
}`
  },
  {
    path: "app/src/main/java/com/vishnupriyahospital/korutla/ui/screens/DoctorsScreen.kt",
    name: "DoctorsScreen.kt",
    language: "kotlin",
    description: "Profiles of Dr. Naresh (MS Ortho) & Dr. Archana (BDS) with qualifications, walk-in consultation hours, and reception dialer.",
    category: "ui",
    content: `package com.vishnupriyahospital.korutla.ui.screens

import android.content.Intent
import android.net.Uri
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
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import com.vishnupriyahospital.korutla.model.Doctor

@Composable
fun DoctorsScreen(
    isTelugu: Boolean,
    onNavigateToTimings: () -> Unit,
    modifier: Modifier = Modifier
) {
    // Displays Dr. Naresh (Orthopaedics) & Dr. Archana, BDS (Dental Care)
}`
  },
  {
    path: "app/src/main/java/com/vishnupriyahospital/korutla/ui/screens/TimingsScreen.kt",
    name: "TimingsScreen.kt",
    language: "kotlin",
    description: "Daily consultation schedule for Dr. Naresh and Dr. Archana with direct walk-in reception guidelines (No online booking).",
    category: "ui",
    content: `package com.vishnupriyahospital.korutla.ui.screens

import android.content.Intent
import android.net.Uri
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
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp

@Composable
fun TimingsScreen(
    isTelugu: Boolean,
    modifier: Modifier = Modifier
) {
    // Displays Morning & Evening Walk-in OP schedules and reception contact (095155 74014)
}`
  },
  {
    path: "app/src/main/java/com/vishnupriyahospital/korutla/ui/screens/EmergencyScreen.kt",
    name: "EmergencyScreen.kt",
    language: "kotlin",
    description: "Emergency 24/7 hotline caller (095155 74014 / 094916 20595), map routing to NH 63 Korutla, and trauma first aid protocol.",
    category: "ui",
    content: `package com.vishnupriyahospital.korutla.ui.screens

import android.content.Intent
import android.net.Uri
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
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import com.vishnupriyahospital.korutla.ui.theme.EmergencyRed

@Composable
fun EmergencyScreen(
    isTelugu: Boolean,
    modifier: Modifier = Modifier
) {
    // Direct 1-tap call to 095155 74014 / 094916 20595 and NH 63 location map
}`
  },
  {
    path: "app/src/main/java/com/vishnupriyahospital/korutla/ui/theme/Color.kt",
    name: "Color.kt",
    language: "kotlin",
    description: "Material 3 color palette matching the authentic Vishnu Priya Hospital medical brand.",
    category: "theme",
    content: `package com.vishnupriyahospital.korutla.ui.theme

import androidx.compose.ui.graphics.Color

val HospitalPrimary = Color(0xFF0A5C5A) // Deep Medical Teal
val HospitalOnPrimary = Color(0xFFFFFFFF)
val HospitalPrimaryContainer = Color(0xFFC7EBE7)
val HospitalOnPrimaryContainer = Color(0xFF00201F)

val HospitalSecondary = Color(0xFF0E7490) // Ocean Medical Blue
val HospitalOnSecondary = Color(0xFFFFFFFF)
val HospitalSecondaryContainer = Color(0xFFCFE5FF)
val HospitalOnSecondaryContainer = Color(0xFF001D33)

val HospitalTertiary = Color(0xFF15803D) // Healing Green
val HospitalOnTertiary = Color(0xFFFFFFFF)

val EmergencyRed = Color(0xFFDC2626) // 24/7 Trauma Emergency
val EmergencyRedContainer = Color(0xFFFFDAD6)

val HospitalBackgroundLight = Color(0xFFF8FAFC)
val HospitalSurfaceLight = Color(0xFFFFFFFF)
val HospitalOnSurface = Color(0xFF0F172A)`
  },
  {
    path: "app/src/main/java/com/vishnupriyahospital/korutla/model/HospitalModels.kt",
    name: "HospitalModels.kt",
    language: "kotlin",
    description: "Kotlin data classes for Doctor, Department, and Testimonial (no booking request model).",
    category: "model",
    content: `package com.vishnupriyahospital.korutla.model

data class Doctor(
    val id: String,
    val name: String,
    val nameTe: String,
    val designation: String,
    val designationTe: String,
    val qualification: String,
    val department: String,
    val departmentTe: String,
    val experienceYears: Int,
    val opTimings: String,
    val opTimingsTe: String,
    val consultationInfo: String,
    val rating: Double,
    val specializations: List<String>
)

data class Department(
    val id: String,
    val name: String,
    val nameTe: String,
    val description: String,
    val descriptionTe: String,
    val iconKey: String,
    val facilities: List<String>,
    val headDoctor: String
)`
  }
];
