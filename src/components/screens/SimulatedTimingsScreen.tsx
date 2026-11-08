import React from 'react';
import { 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  CalendarDays,
  ShieldCheck,
  Stethoscope,
  Smile
} from 'lucide-react';
import { HOSPITAL_INFO, DOCTORS } from '../../data/hospitalData';

interface Props {
  isTelugu: boolean;
  onTriggerCall: (number: string) => void;
}

export const SimulatedTimingsScreen: React.FC<Props> = ({ isTelugu, onTriggerCall }) => {
  const drNaresh = DOCTORS.find(d => d.id === 'doc-naresh') || DOCTORS[0];
  const drArchana = DOCTORS.find(d => d.id === 'doc-archana') || DOCTORS[1];

  return (
    <div className="space-y-4 pb-12 animate-fadeIn">
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          {isTelugu ? 'ఓపీ సంప్రదింపుల సమయాలు' : 'Doctor Consultation Timings'}
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          {isTelugu 
            ? 'ఆసుపత్రి రిసెప్షన్ కౌంటర్ వద్ద నేరుగా ఓపీ రిజిస్ట్రేషన్ (ఆన్‌లైన్ బుకింగ్స్ లేవు)' 
            : 'Direct walk-in registrations at the hospital reception (No online bookings required)'}
        </p>
      </div>

      {/* No Online Bookings Notice Card */}
      <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-2xl p-4 shadow-sm border border-teal-800">
        <div className="flex items-start space-x-3">
          <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-400/30">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xs uppercase tracking-wider text-teal-300">
                {isTelugu ? 'నేరుగా సంప్రదించవచ్చు' : 'Direct Walk-in Consultation'}
              </span>
              <span className="bg-teal-500/30 text-teal-200 text-[10px] px-1.5 py-0.5 rounded font-mono">
                No Booking Needed
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {isTelugu
                ? 'రోగులు ఆసుపత్రికి వచ్చి రిసెప్షన్ కౌంటర్ వద్ద నేరుగా ఓపీ స్లిప్ పొందవచ్చు. ఆన్‌లైన్ బుకింగ్స్ చేయవలసిన అవసరం లేదు.'
                : 'Patients can visit Vishnu Priya Hospital directly during OP hours and register at the reception counter. There are no online bookings.'}
            </p>
          </div>
        </div>
      </div>

      {/* Dr. Naresh OP Schedule Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs">
        <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
          <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm text-slate-900">
              {isTelugu ? drNaresh.nameTe : drNaresh.name}
            </h3>
            <p className="text-xs font-semibold text-teal-700">
              {isTelugu ? drNaresh.designationTe : drNaresh.designation}
            </p>
            <p className="text-[11px] text-slate-400">{drNaresh.qualification}</p>
          </div>
        </div>

        <div className="mt-3 space-y-2 text-xs">
          <div className="flex items-center justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              <span>{isTelugu ? 'ఉదయం వేళలు:' : 'Morning OP:'}</span>
            </span>
            <span className="font-bold text-slate-900">10:00 AM – 02:00 PM</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              <span>{isTelugu ? 'సాయంత్రం వేళలు:' : 'Evening OP:'}</span>
            </span>
            <span className="font-bold text-slate-900">06:00 PM – 09:00 PM</span>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-slate-500 flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 text-teal-600" />
              <span>{isTelugu ? 'రోజులు:' : 'Days:'}</span>
            </span>
            <span className="font-semibold text-teal-800">Monday to Saturday</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
          <span className="text-slate-500">{isTelugu ? 'విభాగం:' : 'Focus:'} Knee, Hip Replacement & Fracture Surgery</span>
          <span className="text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded">Walk-in OP</span>
        </div>
      </div>

      {/* Dr. Archana, BDS OP Schedule Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs">
        <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
          <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-800 flex items-center justify-center shrink-0">
            <Smile className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm text-slate-900">
              {isTelugu ? drArchana.nameTe : drArchana.name}
            </h3>
            <p className="text-xs font-semibold text-cyan-700">
              {isTelugu ? drArchana.designationTe : drArchana.designation}
            </p>
            <p className="text-[11px] text-slate-400">{drArchana.qualification}</p>
          </div>
        </div>

        <div className="mt-3 space-y-2 text-xs">
          <div className="flex items-center justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              <span>{isTelugu ? 'ఉదయం వేళలు:' : 'Morning OP:'}</span>
            </span>
            <span className="font-bold text-slate-900">10:00 AM – 01:30 PM</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-slate-100">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              <span>{isTelugu ? 'సాయంత్రం వేళలు:' : 'Evening OP:'}</span>
            </span>
            <span className="font-bold text-slate-900">05:30 PM – 08:30 PM</span>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-slate-500 flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 text-cyan-600" />
              <span>{isTelugu ? 'రోజులు:' : 'Days:'}</span>
            </span>
            <span className="font-semibold text-cyan-800">Monday to Saturday</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
          <span className="text-slate-500">{isTelugu ? 'విభాగం:' : 'Focus:'} Root Canal, Teeth Alignment & Dental Care</span>
          <span className="text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded">Walk-in OP</span>
        </div>
      </div>

      {/* Reception Contact Card */}
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
        <h4 className="font-bold text-xs text-slate-800">
          {isTelugu ? 'వైద్యుల లభ్యత కోసం రిసెప్షన్ ఫోన్ నంబర్' : 'Check Daily Availability / Reception Inquiry'}
        </h4>
        <p className="text-xs text-slate-600 mt-1">
          {isTelugu
            ? 'వైద్యులు సర్జరీలో ఉన్నారా లేదా నేరుగా ఓపీలో ఉన్నారా అని తెలుసుకోవడానికి ఫోన్ చేయండి.'
            : 'For doctor schedule inquiries or procedure information, call the reception counter:'}
        </p>

        <button
          onClick={() => onTriggerCall(HOSPITAL_INFO.emergencyPhone)}
          className="mt-3 w-full bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Call Reception: {HOSPITAL_INFO.emergencyPhone}</span>
        </button>
      </div>
    </div>
  );
};
