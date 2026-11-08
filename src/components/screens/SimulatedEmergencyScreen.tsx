import React from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Navigation, 
  AlertTriangle, 
  Ambulance, 
  Clock, 
  ShieldCheck,
  Building2,
  Mail
} from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

interface Props {
  isTelugu: boolean;
  onTriggerCall: (number: string) => void;
}

export const SimulatedEmergencyScreen: React.FC<Props> = ({ isTelugu, onTriggerCall }) => {
  return (
    <div className="space-y-4 pb-12 animate-fadeIn">
      {/* 24/7 Red Alert Box */}
      <div className="bg-gradient-to-br from-red-600 via-rose-600 to-red-800 text-white rounded-3xl p-5 shadow-lg text-center relative overflow-hidden">
        <div className="w-14 h-14 rounded-full bg-white text-red-600 flex items-center justify-center mx-auto mb-3 shadow-md animate-bounce">
          <PhoneCall className="w-7 h-7" />
        </div>

        <span className="bg-red-950/70 text-red-200 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-red-400/30">
          {isTelugu ? '24 గంటల అత్యవసర హెల్ప్‌లైన్' : '24x7 Emergency Casualty Helpline'}
        </span>

        <h2 className="text-xl font-black mt-2 text-white">
          {HOSPITAL_INFO.emergencyPhone}
        </h2>
        <p className="text-xs text-red-100 font-medium mt-1">
          {isTelugu 
            ? 'రోడ్డు ప్రమాదాలు, ఎముకల గాయాలు & తక్షణ వైద్య సాయం' 
            : 'Immediate response for road accidents, fractures, polytrauma & acute emergencies'}
        </p>

        <div className="mt-4 space-y-2">
          <button
            onClick={() => onTriggerCall(HOSPITAL_INFO.emergencyPhone)}
            className="w-full bg-white text-red-600 font-extrabold text-sm py-3 px-4 rounded-xl shadow-md hover:bg-red-50 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <PhoneCall className="w-4 h-4 fill-red-600" />
            <span>{isTelugu ? `తక్షణమే కాల్ చేయండి (${HOSPITAL_INFO.emergencyPhone})` : `Call Emergency (${HOSPITAL_INFO.emergencyPhone})`}</span>
          </button>

          <button
            onClick={() => onTriggerCall(HOSPITAL_INFO.emergencyPhoneAlt)}
            className="w-full bg-red-900/60 border border-white/20 text-white font-semibold text-xs py-2 px-3 rounded-xl hover:bg-red-900 flex items-center justify-center gap-2"
          >
            <span>Alternate Mobile: {HOSPITAL_INFO.emergencyPhoneAlt}</span>
          </button>
        </div>
      </div>

      {/* Hospital Location & Map Details */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs">
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900">
              {isTelugu ? 'ఆసుపత్రి చిరునామా & లొకేషన్' : 'Hospital Address & Route'}
            </h3>
            <p className="text-[11px] text-slate-500">Korutla, Jagtial District, Telangana</p>
          </div>
        </div>

        <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
          <div className="font-bold text-slate-900">Vishnu Priya Hospital</div>
          <div>NH 63 (Mancherial - Nizamabad National Highway),</div>
          <div>Near Old Bus Stand, Korutla, Telangana - 505326.</div>
          <div className="text-[11px] text-teal-700 font-semibold pt-1">
            Landmark: Convenient highway approach from Metpally, Jagtial, Raikal, and Kathlapur.
          </div>
        </div>

        <a
          href="https://maps.google.com/?q=Vishnu+Priya+Hospital+Korutla"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-full bg-teal-800 text-white font-semibold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-900 transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>{isTelugu ? 'గూగుల్ మ్యాప్స్‌లో నావిగేట్ చేయండి' : 'Open in Google Maps / Navigation'}</span>
        </a>
      </div>

      {/* First Aid & Protocol */}
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
        <div className="flex items-center space-x-2 text-slate-900 font-bold text-xs mb-2">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span>{isTelugu ? 'ప్రమాదం జరిగినప్పుడు తక్షణ సూచనలు' : 'Trauma & Fracture First-Aid Tips'}</span>
        </div>
        <ul className="text-[11px] text-slate-600 space-y-1.5 list-disc pl-4">
          <li><strong>Keep fractured bone immobilized:</strong> Do not attempt to forcibly manipulate or straighten deformed bone joints.</li>
          <li><strong>Call casualty beforehand:</strong> Notifying our on-call orthopaedic surgeons allows the trauma OT and X-ray team to prepare in advance.</li>
          <li><strong>24/7 Casualty entrance:</strong> Ambulance and stretcher access available directly at the ground floor entrance.</li>
        </ul>
      </div>

      {/* Email Contact */}
      <div className="bg-white rounded-xl p-3 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4 text-slate-400" />
          <span>{HOSPITAL_INFO.email}</span>
        </div>
        <span className="text-[10px] text-teal-800 font-bold">Official Email</span>
      </div>
    </div>
  );
};
