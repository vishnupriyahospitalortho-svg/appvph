import React from 'react';
import { 
  Star, 
  Clock, 
  Stethoscope, 
  GraduationCap, 
  Smile,
  PhoneCall,
  CalendarDays,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { DOCTORS, Doctor, HOSPITAL_INFO } from '../../data/hospitalData';

interface Props {
  isTelugu: boolean;
  onNavigateToTimings: () => void;
  onTriggerCall: (number: string) => void;
}

export const SimulatedDoctorsScreen: React.FC<Props> = ({ isTelugu, onNavigateToTimings, onTriggerCall }) => {
  return (
    <div className="space-y-4 pb-12 animate-fadeIn">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          {isTelugu ? 'మా వైద్యులు' : 'Our Specialist Doctors'}
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          {isTelugu 
            ? 'కోరుట్లలో ఎముకలు, కీళ్ల శస్త్రచికిత్స మరియు దంత వైద్య నిపుణులు' 
            : 'Dedicated Orthopaedic and Dental consultants available in Korutla'}
        </p>
      </div>

      {/* Direct Walk-In Notice Banner */}
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 flex items-center space-x-2 text-xs text-teal-900 font-medium">
        <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
        <span>
          {isTelugu 
            ? 'ఆన్‌లైన్ బుకింగ్స్ లేవు • నేరుగా ఆసుపత్రి రిసెప్షన్ వద్ద ఓపీ సంప్రదించవచ్చు' 
            : 'Walk-in OP Only • Direct Registration at Reception (No online bookings required)'}
        </span>
      </div>

      {/* Doctors Cards: Exactly Dr. Naresh and Dr. Archana, BDS */}
      <div className="space-y-3.5">
        {DOCTORS.map((doc) => {
          const isOrtho = doc.id === 'doc-naresh';
          return (
            <div 
              key={doc.id}
              className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 hover:border-teal-200 transition-all"
            >
              <div className="flex items-start space-x-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  isOrtho ? 'bg-teal-50 text-teal-800 border border-teal-100' : 'bg-cyan-50 text-cyan-800 border border-cyan-100'
                }`}>
                  {isOrtho ? <Stethoscope className="w-6 h-6" /> : <Smile className="w-6 h-6" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-slate-900">
                      {isTelugu ? doc.nameTe : doc.name}
                    </h3>
                    <div className="flex items-center space-x-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 shrink-0">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-[11px] font-bold text-amber-900">{doc.rating}</span>
                    </div>
                  </div>

                  <p className={`text-xs font-semibold mt-0.5 ${isOrtho ? 'text-teal-700' : 'text-cyan-700'}`}>
                    {isTelugu ? doc.designationTe : doc.designation}
                  </p>

                  <div className="flex items-center space-x-1.5 text-[11px] text-slate-500 mt-1">
                    <GraduationCap className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                    <span className="font-medium text-slate-700">{doc.qualification}</span>
                  </div>
                </div>
              </div>

              {/* Specializations list */}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  {isTelugu ? 'ముఖ్య చికిత్సలు:' : 'Key Specialities & Procedures:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(isTelugu ? doc.specializationsTe : doc.specializations).map((spec, i) => (
                    <span 
                      key={i} 
                      className="bg-slate-50 text-slate-700 text-[10px] px-2 py-0.5 rounded-md border border-slate-200/60 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timings row */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 bg-slate-50 p-2.5 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1.5 text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span className="text-[11px] font-semibold">{doc.opTimings}</span>
                </div>
                <span className="text-[10px] font-bold text-teal-800 bg-teal-100/60 px-2 py-0.5 rounded">
                  Walk-in OP
                </span>
              </div>

              {/* CTA row: Call Reception or View Timings */}
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => onTriggerCall(HOSPITAL_INFO.emergencyPhone)}
                  className="flex-1 bg-teal-800 hover:bg-teal-900 text-white py-2 px-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{isTelugu ? 'రిసెప్షన్‌కు కాల్ చేయండి' : 'Call Reception'}</span>
                </button>
                <button
                  onClick={onNavigateToTimings}
                  className="border border-slate-200 hover:bg-slate-50 text-slate-700 py-2 px-3 rounded-xl font-semibold text-xs transition-colors"
                >
                  {isTelugu ? 'సమయాలు' : 'Timings'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
