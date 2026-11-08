import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Users, 
  Activity, 
  Clock, 
  PhoneCall, 
  Info, 
  Globe, 
  Wifi, 
  Signal, 
  BatteryMedium,
  PhoneOff
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { SimulatedHomeScreen } from './screens/SimulatedHomeScreen';
import { SimulatedDoctorsScreen } from './screens/SimulatedDoctorsScreen';
import { SimulatedServicesScreen } from './screens/SimulatedServicesScreen';
import { SimulatedTimingsScreen } from './screens/SimulatedTimingsScreen';
import { SimulatedEmergencyScreen } from './screens/SimulatedEmergencyScreen';
import { SimulatedAboutScreen } from './screens/SimulatedAboutScreen';

interface Props {
  isTelugu: boolean;
  onToggleTelugu: () => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const AndroidDeviceSimulator: React.FC<Props> = ({
  isTelugu,
  onToggleTelugu,
  activeTab,
  onSelectTab,
}) => {
  const [currentTime, setCurrentTime] = useState('10:45');
  const [callingState, setCallingState] = useState<{ active: boolean; number: string } | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  const handleTriggerCall = (number: string) => {
    setCallingState({ active: true, number });
  };

  const navItems = [
    { id: 'home', label: isTelugu ? 'హోమ్' : 'Home', icon: Home },
    { id: 'doctors', label: isTelugu ? 'డాక్టర్లు' : 'Doctors', icon: Users },
    { id: 'services', label: isTelugu ? 'విభాగాలు' : 'Services', icon: Activity },
    { id: 'timings', label: isTelugu ? 'ఓపీ వేళలు' : 'OP Timings', icon: Clock },
    { id: 'emergency', label: isTelugu ? 'అత్యవసరం' : 'Emergency', icon: PhoneCall, isAlert: true },
  ];

  return (
    <div className="relative mx-auto w-[380px] max-w-full h-[760px] bg-slate-900 rounded-[48px] p-3 shadow-2xl ring-1 ring-slate-800 shadow-slate-900/40 select-none">
      {/* Outer Phone Frame Highlights */}
      <div className="absolute inset-0 rounded-[48px] border-4 border-slate-700/60 pointer-events-none" />

      {/* Screen Area */}
      <div className="relative w-full h-full bg-slate-50 rounded-[40px] overflow-hidden flex flex-col font-sans">
        
        {/* Android Status Bar */}
        <div className="h-10 bg-teal-900 text-teal-100 px-6 flex items-center justify-between text-xs font-semibold shrink-0 z-30 select-none">
          <span>{currentTime}</span>
          
          {/* Camera Punchhole */}
          <div className="w-3.5 h-3.5 rounded-full bg-black/80 ring-1 ring-white/10 shrink-0" />

          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold tracking-tight">5G</span>
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <div className="flex items-center space-x-0.5">
              <span className="text-[10px]">98%</span>
              <BatteryMedium className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Material 3 CenterAlignedTopAppBar */}
        <div className="bg-teal-900 text-white px-4 py-2.5 flex items-center justify-between shadow-sm shrink-0 z-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-bold text-teal-200 text-xs border border-white/15">
              VP
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-tight text-white leading-tight">
                {isTelugu ? 'విష్ణు ప్రియ హాస్పిటల్' : 'Vishnu Priya Hospital'}
              </h1>
              <p className="text-[10px] text-teal-200/80 font-medium leading-none">
                Korutla • Ortho & Dental Care
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            {/* Language switch button */}
            <button
              onClick={onToggleTelugu}
              className="p-1.5 rounded-lg bg-teal-800/80 hover:bg-teal-700 text-teal-100 flex items-center gap-1 text-xs font-bold transition-colors"
              title="Toggle Telugu / English"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-mono">{isTelugu ? 'TE' : 'EN'}</span>
            </button>

            {/* Quick Emergency Dial */}
            <button
              onClick={() => handleTriggerCall(HOSPITAL_INFO.emergencyPhone)}
              className="p-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-colors"
              title="24/7 Casualty"
            >
              <PhoneCall className="w-3.5 h-3.5" />
            </button>

            {/* About */}
            <button
              onClick={() => onSelectTab('about')}
              className={`p-1.5 rounded-lg transition-colors ${
                activeTab === 'about' ? 'bg-white text-teal-900' : 'text-teal-200 hover:bg-teal-800'
              }`}
              title="Hospital Info"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-4 pt-3 pb-2 scroll-smooth">
          {activeTab === 'home' && (
            <SimulatedHomeScreen 
              isTelugu={isTelugu} 
              onNavigate={(tab) => onSelectTab(tab)}
              onTriggerCall={handleTriggerCall}
            />
          )}

          {activeTab === 'doctors' && (
            <SimulatedDoctorsScreen 
              isTelugu={isTelugu} 
              onNavigateToTimings={() => onSelectTab('timings')}
              onTriggerCall={handleTriggerCall}
            />
          )}

          {activeTab === 'services' && (
            <SimulatedServicesScreen 
              isTelugu={isTelugu}
              onNavigateToTimings={() => onSelectTab('timings')}
            />
          )}

          {activeTab === 'timings' && (
            <SimulatedTimingsScreen 
              isTelugu={isTelugu}
              onTriggerCall={handleTriggerCall}
            />
          )}

          {activeTab === 'emergency' && (
            <SimulatedEmergencyScreen 
              isTelugu={isTelugu}
              onTriggerCall={handleTriggerCall}
            />
          )}

          {activeTab === 'about' && (
            <SimulatedAboutScreen isTelugu={isTelugu} />
          )}
        </div>

        {/* Material 3 NavigationBar (Bottom Tabs) */}
        <div className="bg-white border-t border-slate-200/80 px-2 pt-1.5 pb-2 flex items-center justify-around shrink-0 z-20 shadow-md">
          {navItems.map((item) => {
            const isSelected = activeTab === item.id;
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className="flex flex-col items-center justify-center flex-1 py-1 focus:outline-none transition-all group"
              >
                <div 
                  className={`w-12 h-7 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? item.isAlert
                        ? 'bg-red-100 text-red-700 font-bold'
                        : 'bg-teal-100 text-teal-900 font-bold'
                      : 'text-slate-500 group-hover:text-slate-800'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <span 
                  className={`text-[10px] mt-0.5 tracking-tight transition-colors ${
                    isSelected 
                      ? item.isAlert ? 'text-red-700 font-bold' : 'text-teal-900 font-bold'
                      : 'text-slate-500 font-medium'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Android Gesture Bar */}
        <div className="h-4 bg-white flex items-center justify-center shrink-0">
          <div className="w-28 h-1 bg-slate-300 rounded-full" />
        </div>

        {/* Native Calling Simulator Overlay */}
        {callingState?.active && (
          <div className="absolute inset-0 bg-slate-950/95 z-50 flex flex-col items-center justify-between py-12 px-6 text-white animate-fadeIn">
            <div className="text-center pt-8">
              <div className="w-20 h-20 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <PhoneCall className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Vishnu Priya Hospital</h3>
              <p className="text-sm text-teal-200 mt-1">Reception & Emergency Casualty</p>
              <div className="text-xl font-mono font-bold mt-3 text-white tracking-widest">
                {callingState.number}
              </div>
              <span className="inline-block mt-3 bg-red-500/20 text-red-300 text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                Dialing Native Dialer...
              </span>
            </div>

            <button
              onClick={() => setCallingState(null)}
              className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 flex items-center justify-center text-white shadow-lg transition-transform"
            >
              <PhoneOff className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
