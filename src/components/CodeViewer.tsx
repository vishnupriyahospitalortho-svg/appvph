import React, { useState } from 'react';
import { 
  FileCode2, 
  Copy, 
  Check, 
  Download, 
  FolderTree, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Terminal,
  Search
} from 'lucide-react';
import JSZip from 'jszip';
import { ANDROID_FILES, AndroidFile } from '../data/androidProjectFiles';

export const CodeViewer: React.FC = () => {
  const [selectedFilePath, setSelectedFilePath] = useState<string>(ANDROID_FILES[0].path); // build_signed_apk.sh by default
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [isZipping, setIsZipping] = useState(false);

  const selectedFile = ANDROID_FILES.find(f => f.path === selectedFilePath) || ANDROID_FILES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      const zip = new JSZip();

      // Top-level files
      zip.file("settings.gradle.kts", `pluginManagement {
    repositories {
        google {
            content {
                includeGroupByRegex("com\\\\.android.*")
                includeGroupByRegex("com\\\\.google.*")
                includeGroupByRegex("androidx.*")
            }
        }
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.name = "VishnuPriyaHospital"
include(":app")
`);

      zip.file("build.gradle.kts", `plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.kotlin.compose) apply false
}
`);

      zip.file("gradle.properties", `org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
android.useAndroidX=true
kotlin.code.style=official
android.nonTransitiveRClass=true
`);

      zip.file("gradlew", `#!/bin/sh
APP_BASE_NAME=\`basename "$0"\`
warn () { echo "$*" ; } >&2
die () { echo ; echo "$*" ; echo ; exit 1 ; } >&2
if [ -n "$JAVA_HOME" ] ; then
    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then JAVACMD="$JAVA_HOME/jre/sh/java" ; else JAVACMD="$JAVA_HOME/bin/java" ; fi
else JAVACMD="java" ; which java >/dev/null 2>&1 || die "ERROR: JAVA_HOME not set and 'java' not found in PATH." ; fi
DIRNAME=\`dirname "$0"\`
WRAPPER_JAR="$DIRNAME/gradle/wrapper/gradle-wrapper.jar"
if [ ! -r "$WRAPPER_JAR" ]; then
    mkdir -p "$DIRNAME/gradle/wrapper"
    curl -sLo "$WRAPPER_JAR" "https://raw.githubusercontent.com/gradle/gradle/v8.9.0/gradle/wrapper/gradle-wrapper.jar" 2>/dev/null || true
fi
exec "$JAVACMD" -jar "$WRAPPER_JAR" "$@"
`);

      zip.file("gradle/wrapper/gradle-wrapper.properties", `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.9-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`);

      // Add all defined Android project files into the zip archive
      ANDROID_FILES.forEach(file => {
        zip.file(file.path, file.content);
      });

      // Add a README.md for instructions
      zip.file("README.md", `# Vishnu Priya Hospital, Korutla - Native Android App

100% Native Android application for Vishnu Priya Hospital, Korutla (Telangana) built with Kotlin 2.0 and Jetpack Compose (Material 3).

## Package Details
- **Package Name**: \`com.vishnupriyahospital.korutla\`
- **Language**: Kotlin 2.0 + Jetpack Compose BOM 2024.09
- **Minimum SDK**: 24 (Android 7.0+)
- **Target SDK**: 34 (Android 14)
- **Permissions**: ONLY \`android.permission.INTERNET\` (Zero camera, mic, location, or storage permissions)
- **Release Signing**: Keystore \`vishnupriya-key.jks\`, alias \`vishnupriya\`, pass \`VPH@Korutla2026\`
- **Minification**: R8 / ProGuard enabled with resource shrinking

## Zero-Input 1-Click Production Build
To automatically generate the release keystore and compile the signed production APK:
\`\`\`bash
chmod +x build_signed_apk.sh
./build_signed_apk.sh
\`\`\`
The signed production APK will be created at:
\`app/build/outputs/apk/release/app-release.apk\`

## Open in Android Studio
1. Open Android Studio (Hedgehog, Iguana, Koala, Ladybug or newer).
2. Select **File > Open...** and choose this unzipped folder.
3. Allow Gradle Sync to finish.
4. Run or select **Build > Generate Signed Bundle / APK...** or run \`./gradlew assembleRelease\`.
`);

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'VishnuPriyaHospital-Android-JetpackCompose.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to generate zip', err);
    } finally {
      setIsZipping(false);
    }
  };

  const filteredFiles = ANDROID_FILES.filter(f => {
    const matchesCategory = categoryFilter === 'all' || f.category === categoryFilter;
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.path.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-xl overflow-hidden flex flex-col h-[760px]">
      {/* Header bar */}
      <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="font-bold text-base text-white">
              Native Android Project (Kotlin & Jetpack Compose)
            </h2>
            <span className="bg-teal-500/20 text-teal-300 text-[11px] font-mono font-semibold px-2 py-0.5 rounded border border-teal-500/30">
              com.vishnupriyahospital.korutla
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            100% Native Material 3 UI • Strictly INTERNET permission only • Zero WebViews
          </p>
        </div>

        {/* 1-Click Download Zip Button */}
        <button
          onClick={handleDownloadZip}
          disabled={isZipping}
          className="bg-teal-600 hover:bg-teal-500 active:scale-95 text-white font-bold text-xs py-2 px-4 rounded-xl flex items-center gap-2 shadow-md transition-all"
        >
          <Download className="w-4 h-4" />
          <span>{isZipping ? 'Bundling Zip...' : 'Download Android Studio Project (.zip)'}</span>
        </button>
      </div>

      {/* Main split: File list left, Code content right */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left File Tree column */}
        <div className="w-72 bg-slate-950/60 border-r border-slate-800 flex flex-col">
          {/* Search and Category Filter */}
          <div className="p-3 border-b border-slate-800 space-y-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="flex gap-1 overflow-x-auto no-scrollbar text-[10px]">
              {['all', 'build', 'manifest', 'app', 'ui', 'theme', 'config'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-2 py-1 rounded font-medium capitalize shrink-0 ${
                    categoryFilter === cat
                      ? 'bg-teal-700 text-white'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Files List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {filteredFiles.map((f) => {
              const isSelected = selectedFilePath === f.path;
              return (
                <button
                  key={f.path}
                  onClick={() => setSelectedFilePath(f.path)}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-start space-x-2 text-xs ${
                    isSelected
                      ? 'bg-teal-900/60 text-teal-200 border border-teal-500/40 shadow-xs'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                  }`}
                >
                  <FileCode2 className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-teal-400' : 'text-slate-500'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{f.name}</div>
                    <div className="text-[10px] text-slate-500 truncate font-mono">{f.path}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Strict Permission Compliance Badge */}
          <div className="p-3 bg-slate-950 border-t border-slate-800 text-[11px] text-emerald-400 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>INTERNET permission only</span>
          </div>
        </div>

        {/* Right Code Content Pane */}
        <div className="flex-1 flex flex-col bg-slate-900 overflow-hidden">
          {/* File bar */}
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-teal-300 font-semibold">{selectedFile.path}</span>
              <span className="text-[10px] uppercase bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                {selectedFile.language}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Code'}</span>
            </button>
          </div>

          {/* Description banner */}
          <div className="px-4 py-2 bg-slate-950/50 border-b border-slate-800/80 text-xs text-slate-400">
            {selectedFile.description}
          </div>

          {/* Code Viewer with Line Numbers */}
          <div className="flex-1 overflow-auto p-4 font-mono text-xs text-slate-200 leading-relaxed bg-slate-950">
            <pre className="tab-4">
              <code>{selectedFile.content}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
