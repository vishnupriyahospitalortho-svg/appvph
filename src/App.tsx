import React, { useState } from 'react';
import { 
  Smartphone, 
  Code2, 
  Columns, 
  Download, 
  ShieldCheck, 
  Building2, 
  Sparkles, 
  PhoneCall, 
  CheckCircle2, 
  Info,
  Globe,
  ExternalLink
} from 'lucide-react';
import { AndroidDeviceSimulator } from './components/AndroidDeviceSimulator';
import { CodeViewer } from './components/CodeViewer';
import { HOSPITAL_INFO } from './data/hospitalData';

export default function App() {
  const [viewMode, setViewMode] = useState<'simulator' | 'split' | 'code'>('simulator');
  const [isTelugu, setIsTelugu] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Application Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Hospital Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-700 to-emerald-600 flex items-center justify-center font-black text-white text-base shadow-md ring-2 ring-teal-400/30">
              VP
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-extrabold text-base lg:text-lg text-white tracking-tight">
                  Vishnu Priya Hospital
                </h1>
                <span className="hidden sm:inline-block bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                  Korutla, Telangana
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  100% Native Android
                </span>
                <span className="hidden md:inline-block bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Release Signing Ready
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Kotlin 2.0 • Compose BOM • Material 3 • v1.0 • <span className="font-mono text-teal-400">com.vishnupriyahospital.korutla</span>
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-slate-800/80 p-1 rounded-2xl border border-slate-700/80 text-xs font-semibold">
            <button
              onClick={() => setViewMode('simulator')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                viewMode === 'simulator'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Native Simulator</span>
            </button>

            <button
              onClick={() => setViewMode('split')}
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                viewMode === 'split'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Columns className="w-4 h-4" />
              <span>Split View</span>
            </button>

            <button
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                viewMode === 'code'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Kotlin Codebase</span>
            </button>
          </div>
        </div>
      </header>

      {/* Compliance & Quick Info Ribbon */}
      <div className="bg-teal-950/60 border-b border-teal-900/60 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-teal-200">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Strict Permission Compliance:</strong> ONLY standard <code className="bg-teal-900/80 px-1 py-0.5 rounded text-emerald-300">android.permission.INTERNET</code> requested. Zero location, camera, mic, or storage permissions.
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] text-teal-300">
            <span>24/7 Trauma Emergency: <strong>{HOSPITAL_INFO.emergencyPhone}</strong></span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">NH 63 Near Old Bus Stand, Korutla</span>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 flex flex-col">
        {viewMode === 'simulator' && (
          <div className="flex-1 flex flex-col items-center justify-center py-2 animate-fadeIn">
            <div className="text-center mb-4">
              <h2 className="text-base font-bold text-white flex items-center justify-center gap-2">
                <span>Interactive Google Pixel Android Device</span>
                <span className="text-xs bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full font-mono">
                  Jetpack Compose 1.7 / Material 3
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Interact with the native app below. Switch tabs, view doctor profiles (Dr. Naresh &amp; Dr. Archana, BDS), check walk-in OP hours, and test the 24/7 emergency dialer.
              </p>
            </div>

            <AndroidDeviceSimulator
              isTelugu={isTelugu}
              onToggleTelugu={() => setIsTelugu(!isTelugu)}
              activeTab={activeTab}
              onSelectTab={setActiveTab}
            />
          </div>
        )}

        {viewMode === 'split' && (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fadeIn">
            <div className="lg:col-span-5 flex justify-center">
              <AndroidDeviceSimulator
                isTelugu={isTelugu}
                onToggleTelugu={() => setIsTelugu(!isTelugu)}
                activeTab={activeTab}
                onSelectTab={setActiveTab}
              />
            </div>

            <div className="lg:col-span-7 h-[760px]">
              <CodeViewer />
            </div>
          </div>
        )}

        {viewMode === 'code' && (
          <div className="flex-1 animate-fadeIn">
            <CodeViewer />
          </div>
        )}
      </main>

      {/* Footer Bar */}
      <footer className="border-t border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div>
            Vishnu Priya Hospital, Korutla, Jagtial District, Telangana 505326 • Contact: {HOSPITAL_INFO.emergencyPhone}
          </div>
          <div className="flex items-center space-x-3 text-slate-400">
            <span>Package: <code className="text-teal-400">{HOSPITAL_INFO.packageName}</code></span>
            <span>•</span>
            <span>Jetpack Compose BOM 2024.09</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
