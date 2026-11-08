import React from 'react';
import { 
  Activity, 
  ShieldAlert, 
  Scissors, 
  Baby, 
  Pill, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { DEPARTMENTS, Department } from '../../data/hospitalData';

interface Props {
  isTelugu: boolean;
  onNavigateToTimings: () => void;
}

export const SimulatedServicesScreen: React.FC<Props> = ({ isTelugu, onNavigateToTimings }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Bone':
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5" />;
      case 'Baby':
        return <Baby className="w-5 h-5" />;
      case 'Pill':
        return <Pill className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-4 pb-12 animate-fadeIn">
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          {isTelugu ? 'వైద్య విభాగాలు & సదుపాయాలు' : 'Departments & Facilities'}
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          {isTelugu 
            ? 'అధునాతన ఆపరేషన్ థియేటర్లు మరియు 24 గంటల అత్యవసర వైద్య సేవలు' 
            : 'Comprehensive clinical specialities and diagnostics under one roof'}
        </p>
      </div>

      <div className="space-y-3.5">
        {DEPARTMENTS.map((dept) => (
          <div 
            key={dept.id}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs hover:border-teal-200 transition-all"
          >
            <div className="flex items-start space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 border border-teal-100/60">
                {getIcon(dept.iconName)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-slate-900">
                  {isTelugu ? dept.nameTe : dept.name}
                </h3>
                <p className="text-[11px] text-teal-700 font-semibold mt-0.5">
                  Lead: {dept.headDoctor}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
              {isTelugu ? dept.descriptionTe : dept.description}
            </p>

            {/* Highlights bullet points */}
            <div className="mt-3 bg-slate-50 rounded-xl p-2.5 border border-slate-100 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {isTelugu ? 'కీలక సేవలు & చికిత్సలు:' : 'Key Procedures & Features:'}
              </div>
              {dept.procedures.map((proc, i) => (
                <div key={i} className="flex items-start space-x-1.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight">{proc}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onNavigateToTimings}
              className="mt-3 w-full py-2 px-3 text-xs font-semibold text-teal-800 hover:bg-teal-50 rounded-xl border border-teal-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{isTelugu ? 'ఓపీ వేళలు చూడండి' : 'View Consultation Timings'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
