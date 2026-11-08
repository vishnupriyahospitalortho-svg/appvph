import React from 'react';
import { 
  Building, 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  HeartHandshake, 
  Phone, 
  FileCode2, 
  Lock
} from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

interface Props {
  isTelugu: boolean;
}

export const SimulatedAboutScreen: React.FC<Props> = ({ isTelugu }) => {
  return (
    <div className="space-y-4 pb-12 animate-fadeIn">
      {/* Hospital History & Vision */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs">
        <div className="flex items-center space-x-2 text-teal-800 font-bold text-xs uppercase tracking-wider mb-1">
          <Building className="w-4 h-4" />
          <span>{isTelugu ? 'ఆసుపత్రి చరిత్ర' : 'About the Hospital'}</span>
        </div>
        <h2 className="text-base font-bold text-slate-900 mt-1">
          {isTelugu ? 'విష్ణు ప్రియ ఆసుపత్రి, కోరుట్ల' : 'Vishnu Priya Hospital, Korutla'}
        </h2>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          {isTelugu 
            ? 'విష్ణు ప్రియ హాస్పిటల్ కోరుట్లలో ప్రముఖ మల్టీ-స్పెషాలిటీ మరియు అధునాతన ఆర్థోపెడిక్ కేర్ సెంటర్. డాక్టర్ నరేష్ గారి మార్గదర్శకత్వంలో ఎముకల శస్త్రచికిత్సలు, కీళ్ల మార్పిడి మరియు జనరల్ సర్జరీ విభాగాల్లో ప్రజలకు నిరంతర నమ్మకమైన వైద్య సేవలు అందిస్తోంది.' 
            : 'Vishnu Priya Hospital is a premier orthopaedic, trauma, and multi-speciality medical center serving Korutla, Metpally, Jagtial, and surrounding regions in Telangana. Founded on patient-first ethics, compassionate healing, and modern surgical precision under Dr. Naresh.'}
        </p>

        <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-center">
          <div className="bg-teal-50/60 p-2.5 rounded-xl border border-teal-100/50">
            <span className="text-lg font-bold text-teal-900">16+</span>
            <span className="text-[10px] text-teal-700 block font-medium">Years Medical Legacy</span>
          </div>
          <div className="bg-cyan-50/60 p-2.5 rounded-xl border border-cyan-100/50">
            <span className="text-lg font-bold text-cyan-900">10,000+</span>
            <span className="text-[10px] text-cyan-700 block font-medium">Patients Treated</span>
          </div>
        </div>
      </div>

      {/* Facilities & Infrastructure */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs">
        <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700 mb-3">
          {isTelugu ? 'ఆసుపత్రి ఆధునిక వసతులు' : 'Clinical Infrastructure'}
        </h3>
        <div className="space-y-2">
          {[
            {
              title: isTelugu ? 'లామినార్ ఎయిర్‌ఫ్లోతో కూడిన మాడ్యులర్ ఆపరేషన్ థియేటర్' : 'Laminar Airflow Modular Operation Theatres',
              desc: 'Ultra-clean sterile surgical environment for zero-infection joint replacements.'
            },
            {
              title: isTelugu ? 'హై-ఫ్రీక్వెన్సీ డిజిటల్ ఎక్స్-రే & సి-ఆర్మ్ ఫ్లోరోస్కోపీ' : 'High-Frequency Digital X-Ray & C-Arm System',
              desc: 'Pinpoint precision imaging during fracture repair and spine interventions.'
            },
            {
              title: isTelugu ? 'వెంటిలేటర్లతో కూడిన ఇంటెన్సివ్ కేర్ యూనిట్ (ICU)' : 'Fully Equipped Intensive Care Unit (ICU)',
              desc: 'Multi-parameter patient monitors with round-the-clock emergency medical team.'
            },
            {
              title: isTelugu ? '24 గంటల ఆసుపత్రి ఫార్మసీ & ల్యాబ్' : '24x7 In-House Pharmacy & Clinical Lab',
              desc: 'Immediate blood work and 100% authentic surgical consumables on site.'
            }
          ].map((f, i) => (
            <div key={i} className="flex items-start space-x-2 text-xs">
              <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-800">{f.title}</span>
                <p className="text-[11px] text-slate-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strict Privacy & Native Spec Card */}
      <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/80 text-emerald-950">
        <div className="flex items-center space-x-2 font-bold text-xs mb-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Strict Android Permissions Compliance</span>
        </div>
        <p className="text-[11px] text-emerald-900 leading-relaxed">
          This native app strictly adheres to Google Play privacy guidelines. It requests <strong>ONLY standard INTERNET permission</strong>. No camera, microphone, GPS location, contact list, or file storage permissions are requested or accessed.
        </p>
        <div className="mt-2 text-[10px] text-emerald-800 bg-white/70 p-2 rounded-lg font-mono space-y-0.5">
          <div>package: {HOSPITAL_INFO.packageName}</div>
          <div>version: 1.0 (versionCode 1)</div>
          <div>signing: release (vishnupriya-key.jks)</div>
          <div>minification: R8 / ProGuard enabled</div>
          <div>framework: Kotlin 2.0 + Compose BOM + Material 3</div>
        </div>
      </div>

      {/* Production APK Ready Card */}
      <div className="bg-slate-900 text-slate-100 rounded-2xl p-4 border border-slate-800">
        <div className="flex items-center space-x-2 text-teal-400 font-bold text-xs mb-1">
          <FileCode2 className="w-4 h-4" />
          <span>Production APK 1-Click Builder Ready</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Run <code className="text-teal-300 bg-slate-800 px-1 py-0.5 rounded font-mono">./build_signed_apk.sh</code> to automatically generate the production keystore and compile <code className="text-emerald-400 font-mono">app-release.apk</code> without manual inputs.
        </p>
      </div>
    </div>
  );
};
