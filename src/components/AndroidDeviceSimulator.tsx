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
    /* Flat, Unwarped 1:1 Rectangular Projection Surface (Zero Keystone / Slant / Trapezoid Distortion) */
    <div className="relative mx-auto w-[390px] max-w-full h-[800px] bg-white border border-slate-700 shadow-none rounded-none overflow-hidden flex flex-col font-sans select-none">
      
      {/* Flat Native Status Bar */}
      <div className="h-8 bg-teal-900 text-teal-100 px-4 flex items-center justify-between text-xs font-semibold shrink-0 z-30 select-none border-b border-teal-800">
        <span className="font-mono text-[11px]">{currentTime}</span>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-bold font-mono">5G</span>
          <Signal className="w-3.5 h-3.5" />
          <Wifi className="w-3.5 h-3.5" />
          <div className="flex items-center space-x-0.5">
            <span className="text-[10px] font-mono">98%</span>
            <BatteryMedium className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Material 3 CenterAlignedTopAppBar */}
      <div className="bg-teal-900 text-white px-4 py-2.5 flex items-center justify-between shadow-none shrink-0 z-20 border-b border-teal-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-none bg-white/10 flex items-center justify-center font-bold text-teal-200 text-xs border border-white/20">
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
            className="p-1.5 rounded-none bg-teal-800 hover:bg-teal-700 text-teal-100 flex items-center gap-1 text-xs font-bold border border-teal-700"
            title="Toggle Telugu / English"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase font-mono">{isTelugu ? 'TE' : 'EN'}</span>
          </button>

          {/* Quick Emergency Dial */}
          <button
            onClick={() => handleTriggerCall(HOSPITAL_INFO.emergencyPhone)}
            className="p-1.5 rounded-none bg-red-600 hover:bg-red-500 text-white border border-red-700"
            title="24/7 Casualty"
          >
            <PhoneCall className="w-3.5 h-3.5" />
          </button>

          {/* About */}
          <button
            onClick={() => onSelectTab('about')}
            className={`p-1.5 rounded-none border ${
              activeTab === 'about' ? 'bg-white text-teal-900 border-white' : 'text-teal-200 hover:bg-teal-800 border-transparent'
            }`}
            title="Hospital Info"
          >
            <Info className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Flat Content Body */}
      <div className="flex-1 overflow-y-auto px-4 pt-3 pb-2 bg-slate-50">
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

      {/* Material 3 Flat NavigationBar */}
      <div className="bg-white border-t border-slate-200 px-2 py-1.5 flex items-center justify-around shrink-0 z-20">
        {navItems.map((item) => {
          const isSelected = activeTab === item.id;
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className="flex flex-col items-center justify-center flex-1 py-1 focus:outline-none"
            >
              <div 
                className={`w-12 h-6 rounded-none flex items-center justify-center ${
                  isSelected
                    ? item.isAlert
                      ? 'bg-red-100 text-red-700 font-bold border-b-2 border-red-700'
                      : 'bg-teal-100 text-teal-900 font-bold border-b-2 border-teal-800'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <IconComponent className="w-4 h-4" />
              </div>
              <span 
                className={`text-[10px] mt-0.5 tracking-tight ${
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

      {/* Android System Navigation Indicator (Flat Rectangle) */}
      <div className="h-4 bg-white flex items-center justify-center shrink-0 border-t border-slate-100">
        <div className="w-24 h-1 bg-slate-300 rounded-none" />
      </div>

      {/* Calling Overlay (Flat 1:1 View) */}
      {callingState?.active && (
        <div className="absolute inset-0 bg-slate-950/95 z-50 flex flex-col items-center justify-between py-12 px-6 text-white">
          <div className="text-center pt-8">
            <div className="w-16 h-16 rounded-none bg-red-600/30 border border-red-500/50 flex items-center justify-center mx-auto mb-4">
              <PhoneCall className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">Vishnu Priya Hospital</h3>
            <p className="text-sm text-teal-200 mt-1">Reception & Emergency Casualty</p>
            <div className="text-xl font-mono font-bold mt-3 text-white tracking-widest">
              {callingState.number}
            </div>
            <span className="inline-block mt-3 bg-red-500/20 text-red-300 text-xs px-3 py-1 rounded-none font-semibold border border-red-500/30">
              Dialing Native Android Dialer...
            </span>
          </div>

          <button
            onClick={() => setCallingState(null)}
            className="w-14 h-14 rounded-none bg-red-600 hover:bg-red-700 flex items-center justify-center text-white border border-red-500"
          >
            <PhoneOff className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
