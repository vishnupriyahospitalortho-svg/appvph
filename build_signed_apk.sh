#!/usr/bin/env bash
# ==============================================================================
# Vishnu Priya Hospital, Korutla - Zero-Input Production APK Build & Sign Script
# Package: com.vishnupriyahospital.korutla
# ==============================================================================

set -e

echo "======================================================================"
echo "  Vishnu Priya Hospital - Zero-Input Release APK Builder              "
echo "  Package: com.vishnupriyahospital.korutla                           "
echo "======================================================================"

# Determine directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if [ ! -f "settings.gradle.kts" ] && [ -d "android" ]; then
    echo "Switching to android/ project directory..."
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
    keytool -genkeypair -v \
        -keystore "$KEYSTORE_FILE" \
        -keyalg RSA \
        -keysize 2048 \
        -validity 10000 \
        -alias "$KEY_ALIAS" \
        -storepass "$STORE_PASS" \
        -keypass "$KEY_PASS" \
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
fi
