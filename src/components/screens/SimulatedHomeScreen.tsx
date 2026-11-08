import React from 'react';
import { 
  PhoneCall, 
  Clock, 
  MapPin, 
  ChevronRight, 
  ShieldAlert, 
  Star, 
  Activity, 
  Sparkles,
  CheckCircle2,
  Stethoscope,
  Smile,
  Info
} from 'lucide-react';
import { DOCTORS, DEPARTMENTS, TESTIMONIALS, HOSPITAL_INFO } from '../../data/hospitalData';

interface Props {
  isTelugu: boolean;
  onNavigate: (tab: string, param?: any) => void;
  onTriggerCall: (number: string) => void;
}

export const SimulatedHomeScreen: React.FC<Props> = ({ isTelugu, onNavigate, onTriggerCall }) => {
  const drNaresh = DOCTORS.find(d => d.id === 'doc-naresh') || DOCTORS[0];
  const drArchana = DOCTORS.find(d => d.id === 'doc-archana') || DOCTORS[1];

  return (
    <div className="space-y-4 pb-12 animate-fadeIn">
      {/* 1. Emergency Trauma Alert Banner */}
      <div 
        onClick={() => onNavigate('emergency')}
        className="cursor-pointer bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-2xl p-4 shadow-md transition-all hover:shadow-lg active:scale-[0.99] border border-red-500/30"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm animate-pulse">
              <ShieldAlert className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-sm tracking-tight">
                  {isTelugu ? '24x7 అత్యవసర & ట్రామా కేర్' : '24x7 Emergency & Trauma Care'}
                </span>
                <span className="bg-red-950/60 text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded text-red-200">
                  LIVE
                </span>
              </div>
              <p className="text-xs text-red-100 font-medium mt-0.5">
                {isTelugu ? 'ఆర్థోపెడిక్ సర్జన్లు & అంబులెన్స్ అందుబాటులో ఉన్నారు' : 'Orthopaedic Trauma Surgeons & Casualty on NH 63'}
              </p>
            </div>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onTriggerCall(HOSPITAL_INFO.emergencyPhone);
            }}
            className="bg-white text-red-600 px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm hover:bg-red-50 shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 fill-red-600" />
            <span>{isTelugu ? 'కాల్' : 'CALL'}</span>
          </button>
        </div>
      </div>

      {/* 2. Hero Welcome Card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-teal-50 text-teal-800 text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase border border-teal-200/60">
            KORUTLA • TELANGANA
          </span>
          <span className="flex items-center text-emerald-600 text-[11px] font-semibold">
            <Sparkles className="w-3 h-3 mr-1" />
            M3 Native UI
          </span>
        </div>

        <h2 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
          {isTelugu ? 'విష్ణు ప్రియ హాస్పిటల్ & డెంటల్ కేర్' : 'Vishnu Priya Hospital & Dental Clinic'}
        </h2>
        
        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
          {isTelugu
            ? 'కోరుట్లలో ప్రముఖ ఆర్థోపెడిక్స్ & జాయింట్ రీప్లేస్‌మెంట్ (డాక్టర్ నరేష్) మరియు అత్యాధునిక దంత సంరక్షణ (డాక్టర్ అర్చన, BDS).'
            : 'Premier Orthopaedic & Joint Replacement Center under Dr. Naresh, and Advanced Dental Care under Dr. Archana, BDS.'}
        </p>

        {/* Walk-in Notice Banner */}
        <div className="mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center space-x-2 text-[11px] text-slate-700">
          <Info className="w-4 h-4 text-teal-700 shrink-0" />
          <span>
            {isTelugu
              ? 'ఆన్‌లైన్ బుకింగ్స్ లేవు • నేరుగా ఆసుపత్రి రిసెప్షన్ వద్ద ఓపీ నమోదు'
              : 'Direct Walk-in Consultations • No prior online booking required'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mt-4">
          <button
            onClick={() => onNavigate('timings')}
            className="bg-teal-800 hover:bg-teal-900 text-white font-semibold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
          >
            <Clock className="w-4 h-4" />
            <span>{isTelugu ? 'ఓపీ సమయాలు' : 'View OP Timings'}</span>
          </button>
          
          <button
            onClick={() => onNavigate('doctors')}
            className="border border-teal-700/30 text-teal-800 hover:bg-teal-50 font-semibold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Stethoscope className="w-4 h-4" />
            <span>{isTelugu ? 'మా వైద్యులు' : 'Our 2 Doctors'}</span>
          </button>
        </div>
      </div>

      {/* 3. Quick Action Grid */}
      <div>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 px-0.5">
          {isTelugu ? 'త్వరిత సేవలు' : 'Quick Actions'}
        </h3>
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => onNavigate('doctors')}
            className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-xs hover:border-teal-300 transition-all active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-1.5">
              <Stethoscope className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold text-slate-800">
              {isTelugu ? 'డాక్టర్లు' : 'Doctors'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('services')}
            className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-xs hover:border-cyan-300 transition-all active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-1.5">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold text-slate-800">
              {isTelugu ? 'విభాగాలు' : 'Services'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('timings')}
            className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-xs hover:border-amber-300 transition-all active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-1.5">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold text-slate-800">
              {isTelugu ? 'సమయాలు' : 'Timings'}
            </span>
          </button>

          <button
            onClick={() => onNavigate('emergency')}
            className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-xs hover:border-red-300 transition-all active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-1.5">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold text-slate-800">
              {isTelugu ? 'లొకేషన్' : 'Location'}
            </span>
          </button>
        </div>
      </div>

      {/* 4. The 2 Doctors Spotlight */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider px-0.5">
          {isTelugu ? 'ఆసుపత్రి వైద్యులు' : 'Hospital Doctors & Specialists'}
        </h3>

        {/* Doctor 1: Dr. Naresh */}
        <div 
          onClick={() => onNavigate('doctors')}
          className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs hover:border-teal-300 cursor-pointer transition-all"
        >
          <div className="flex items-start space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 border border-teal-100">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900">{isTelugu ? drNaresh.nameTe : drNaresh.name}</h4>
                <span className="text-amber-500 text-xs font-bold">★ 4.9</span>
              </div>
              <p className="text-xs font-semibold text-teal-700">{isTelugu ? drNaresh.designationTe : drNaresh.designation}</p>
              <p className="text-[11px] text-slate-400">{drNaresh.qualification}</p>
              <div className="mt-2 text-[11px] text-slate-600 flex items-center justify-between bg-slate-50 p-2 rounded-lg">
                <span>OP: 10:00 AM - 02:00 PM & 06:00 PM - 09:00 PM</span>
                <span className="text-teal-800 font-bold">Walk-in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor 2: Dr. Archana, BDS */}
        <div 
          onClick={() => onNavigate('doctors')}
          className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs hover:border-cyan-300 cursor-pointer transition-all"
        >
          <div className="flex items-start space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-800 flex items-center justify-center shrink-0 border border-cyan-100">
              <Smile className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900">{isTelugu ? drArchana.nameTe : drArchana.name}</h4>
                <span className="text-amber-500 text-xs font-bold">★ 4.9</span>
              </div>
              <p className="text-xs font-semibold text-cyan-700">{isTelugu ? drArchana.designationTe : drArchana.designation}</p>
              <p className="text-[11px] text-slate-400">{drArchana.qualification}</p>
              <div className="mt-2 text-[11px] text-slate-600 flex items-center justify-between bg-slate-50 p-2 rounded-lg">
                <span>OP: 10:00 AM - 01:30 PM & 05:30 PM - 08:30 PM</span>
                <span className="text-cyan-800 font-bold">Walk-in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Key Specialities */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            {isTelugu ? 'ముఖ్య విభాగాలు' : 'Specialised Departments'}
          </h3>
          <button 
            onClick={() => onNavigate('services')}
            className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center"
          >
            {isTelugu ? 'అన్నీ' : 'View All'}
            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </button>
        </div>

        <div className="space-y-2">
          {[
            {
              title: isTelugu ? 'మోకాలి & తుంటి కీళ్ల మార్పిడి (TKR & THR)' : 'Total Knee & Hip Replacement',
              subtitle: 'Led by Dr. Naresh (MS Ortho, FIJR)',
              badge: 'Ortho'
            },
            {
              title: isTelugu ? 'రూట్ కెనాల్ & డెంటల్ ఇంప్లాంట్స్' : 'Root Canal & Cosmetic Dentistry',
              subtitle: 'Led by Dr. Archana (BDS)',
              badge: 'Dental'
            },
            {
              title: isTelugu ? '24/7 ఎముకల విరుగుడు & ప్రమాద విభాగం' : 'Emergency Trauma & Fracture Clinic',
              subtitle: '24-hour casualty with digital X-Ray and C-Arm',
              badge: '24/7'
            },
            {
              title: isTelugu ? '24 గంటల ఆసుపత్రి ఫార్మసీ' : '24-Hour In-House Pharmacy',
              subtitle: 'All orthopaedic & dental medications stocked',
              badge: 'Pharmacy'
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onNavigate('services')}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
            >
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-800">{item.title}</h4>
                  <p className="text-[11px] text-slate-500">{item.subtitle}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Patient Feedback */}
      <div className="bg-teal-50/70 border border-teal-100 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <span className="text-[10px] font-bold text-teal-900 bg-teal-200/60 px-2 py-0.5 rounded-full">
            Patient Feedback
          </span>
        </div>
        <p className="text-xs text-slate-700 italic leading-relaxed">
          "{TESTIMONIALS[0].comment}"
        </p>
        <p className="text-[11px] font-bold text-teal-950 mt-2">
          — {TESTIMONIALS[0].name}, {TESTIMONIALS[0].location}
        </p>
      </div>

      {/* 7. Location Badge */}
      <div className="flex items-start space-x-2 text-[11px] text-slate-500 bg-white p-3 rounded-xl border border-slate-100">
        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-700">Vishnu Priya Hospital: </span>
          NH 63 (Mancherial-Nizamabad Rd), Near Old Bus Stand, Korutla, Telangana 505326.
        </div>
      </div>
    </div>
  );
};
