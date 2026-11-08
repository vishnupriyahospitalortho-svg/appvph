# ==============================================================================
# ProGuard & R8 Configuration for Vishnu Priya Hospital Native Android App
# Package: com.vishnupriyahospital.korutla
# Jetpack Compose + Kotlin 2.0 + Material 3
# ==============================================================================

# 1. Keep App Model Classes
-keep class com.vishnupriyahospital.korutla.model.** { *; }
-keepclassmembers class com.vishnupriyahospital.korutla.model.** { *; }

# 2. Kotlin Language & Coroutines
-keepattributes *Annotation*, Signature, InnerClasses, EnclosingMethod
-dontwarn kotlin.**
-keepclassmembers class kotlin.Metadata {
    public <methods>;
}

# Keep Kotlin Coroutines internal names for stacktraces
-keepnames class kotlinx.coroutines.internal.MainDispatcherFactory {}
-keepnames class kotlinx.coroutines.CoroutineExceptionHandler {}
-keepclassmembers class kotlinx.coroutines.** {
    volatile <fields>;
}

# 3. Jetpack Compose
-dontwarn androidx.compose.**
-keep class androidx.compose.runtime.** { *; }
-keep class androidx.compose.ui.** { *; }
-keep class androidx.compose.material3.** { *; }
-keep class androidx.compose.animation.** { *; }
-keep class androidx.compose.foundation.** { *; }

# Keep Composable singletons and functions
-keepclassmembers class * {
    @androidx.compose.runtime.Composable *;
    void *(androidx.compose.runtime.Composer, int);
}

# 4. AndroidX Navigation & Lifecycle
-keep class androidx.navigation.** { *; }
-keepclassmembers class androidx.navigation.** { *; }
-keepclassmembers class * extends androidx.lifecycle.ViewModel {
    <init>();
}

# 5. Core Android & Component Activity
-keep public class com.vishnupriyahospital.korutla.MainActivity { *; }
-keep public class * extends androidx.activity.ComponentActivity

# 6. Suppress safe warnings during minification
-dontwarn sun.misc.Unsafe
-dontwarn java.lang.invoke.**
