export interface Doctor {
  id: string;
  name: string;
  nameTe: string;
  designation: string;
  designationTe: string;
  qualification: string;
  department: string;
  departmentTe: string;
  experienceYears: number;
  opTimings: string;
  opTimingsTe: string;
  consultationType: string;
  rating: number;
  specializations: string[];
  specializationsTe: string[];
}

export interface Department {
  id: string;
  name: string;
  nameTe: string;
  description: string;
  descriptionTe: string;
  iconName: string;
  procedures: string[];
  headDoctor: string;
}

export const HOSPITAL_INFO = {
  name: "Vishnu Priya Hospital",
  nameTe: "విష్ణు ప్రియ హాస్పిటల్",
  tagline: "Orthopaedic, Trauma & Dental Care Center",
  taglineTe: "ఆర్థోపెడిక్, ట్రామా & దంత వైద్య నిపుణుల కేంద్రం",
  location: "NH 63, Near Old Bus Stand, Korutla, Jagtial Dist, Telangana - 505326",
  locationTe: "ఎన్‌హెచ్ 63, పాత బస్టాండ్ దగ్గర, కోరుట్ల, జగిత్యాల జిల్లా, తెలంగాణ - 505326",
  emergencyPhone: "095155 74014",
  emergencyPhoneAlt: "094916 20595",
  email: "vishnupriyahospitalortho@gmail.com",
  opTimingsWeekdays: "10:00 AM - 02:00 PM & 06:00 PM - 09:00 PM",
  emergencyTimings: "24 Hours Open (Trauma Casualty & Emergency)",
  packageName: "com.vishnupriyahospital.korutla",
  bookingPolicy: "Direct Walk-In Consultations at Reception (No Online Booking Required)",
  bookingPolicyTe: "ఆసుపత్రి రిసెప్షన్ వద్ద నేరుగా ఓపీ రిజిస్ట్రేషన్ (ఆన్‌లైన్ బుకింగ్ లేదు)",
};

// ONLY the 2 doctors as specified: Dr. Naresh and Dr. Archana, BDS
export const DOCTORS: Doctor[] = [
  {
    id: "doc-naresh",
    name: "Dr. Naresh",
    nameTe: "డాక్టర్ నరేష్",
    designation: "Senior Orthopaedic Surgeon & Joint Replacement Specialist",
    designationTe: "సీనియర్ ఆర్థోపెడిక్ సర్జన్ & జాయింట్ రీప్లేస్‌మెంట్ నిపుణులు",
    qualification: "MBBS, MS (Orthopaedics), FIJR (Fellow Joint Replacement)",
    department: "Orthopaedics, Trauma & Joint Replacement",
    departmentTe: "ఆర్థోపెడిక్స్ & ఎముకలు, కీళ్ల శస్త్రచికిత్స విభాగం",
    experienceYears: 16,
    opTimings: "10:00 AM - 02:00 PM & 06:00 PM - 09:00 PM",
    opTimingsTe: "ఉదయం 10:00 - మధ్యాహ్నం 02:00 & సాయంత్రం 06:00 - రాత్రి 09:00",
    consultationType: "Walk-in OP at Reception",
    rating: 4.9,
    specializations: [
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
      "Complex Fracture & Trauma Care",
      "Arthroscopic Key-hole Surgery",
      "Spine & Sciatica Back Pain Care"
    ],
    specializationsTe: [
      "మోకాలి కీళ్ల మార్పిడి శస్త్రచికిత్స (TKR)",
      "తుంటి కీళ్ల మార్పిడి శస్త్రచికిత్స (THR)",
      "ఎముకల విరుగుడు & అత్యవసర ట్రామా కేర్",
      "కీ-హోల్ ఆర్థ్రోస్కోపిక్ సర్జరీ",
      "వెన్నుపూస & నడుము నొప్పి చికిత్స"
    ]
  },
  {
    id: "doc-archana",
    name: "Dr. Archana",
    nameTe: "డాక్టర్ అర్చన",
    designation: "Dental Surgeon & Oral Health Specialist",
    designationTe: "దంత వైద్య నిపుణులు (డెంటల్ సర్జన్)",
    qualification: "BDS (Bachelor of Dental Surgery)",
    department: "Dental Care & Oral Surgery",
    departmentTe: "దంత వైద్య విభాగం",
    experienceYears: 11,
    opTimings: "10:00 AM - 01:30 PM & 05:30 PM - 08:30 PM",
    opTimingsTe: "ఉదయం 10:00 - మధ్యాహ్నం 01:30 & సాయంత్రం 05:30 - రాత్రి 08:30",
    consultationType: "Walk-in OP at Reception",
    rating: 4.9,
    specializations: [
      "Root Canal Treatment (RCT)",
      "Dental Implants & Fixed Teeth",
      "Teeth Alignment & Braces",
      "Painless Tooth Extractions",
      "Cosmetic Dentistry & Scaling"
    ],
    specializationsTe: [
      "రూట్ కెనాల్ ట్రీట్‌మెంట్ (RCT)",
      "డెంటల్ ఇంప్లాంట్లు & స్థిరమైన పళ్ళు",
      "వంకర పళ్ళ సవరణ (బ్రేసెస్)",
      "నొప్పి లేని పంటి తొలగింపు",
      "టీత్ క్లీనింగ్ & స్కేలింగ్"
    ]
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: "orthopaedics",
    name: "Orthopaedics & Joint Replacement",
    nameTe: "ఆర్థోపెడిక్స్ & జాయింట్ రీప్లేస్‌మెంట్ విభాగం",
    description: "Led by Dr. Naresh (MS Ortho), specializing in total knee replacement, hip replacement, spine disorders, and complex fracture fixation.",
    descriptionTe: "డాక్టర్ నరేష్ గారి ఆధ్వర్యంలో మోకాలి మరియు తుంటి కీళ్ల మార్పిడి, సంక్లిష్ట ఎముకల విరుగుడు, మరియు స్పైన్ కేర్ చికిత్సలు.",
    iconName: "Bone",
    procedures: [
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
      "C-Arm Guided Closed & Open Fracture Fixation",
      "Arthroscopic Knee & Shoulder Ligament Repair",
      "Spine & Sciatica Rehabilitation"
    ],
    headDoctor: "Dr. Naresh, MBBS, MS Ortho, FIJR"
  },
  {
    id: "dental",
    name: "Vishnu Priya Dental Clinic & Oral Surgery",
    nameTe: "విష్ణు ప్రియ డెంటల్ క్లినిక్ & దంత వైద్య విభాగం",
    description: "Led by Dr. Archana (BDS), equipped with modern automated dental chair, digital RVG dental X-ray, and painless dentistry equipment.",
    descriptionTe: "డాక్టర్ అర్చన (BDS) గారి ఆధ్వర్యంలో ఆధునిక డెంటల్ చైర్, డిజిటల్ డెంటల్ ఎక్స్-రే, రూట్ కెనాల్ మరియు నొప్పిల్లేని దంత చికిత్సలు.",
    iconName: "Smile",
    procedures: [
      "Single Sitting Root Canal Treatment (RCT)",
      "Fixed Ceramic & Zirconia Dental Crowns",
      "Ultrasonic Teeth Scaling & Stain Removal",
      "Wisdom Tooth Impaction & Extraction",
      "Pediatric Child Dental Care"
    ],
    headDoctor: "Dr. Archana, BDS"
  },
  {
    id: "trauma-emergency",
    name: "24/7 Trauma & Fracture Emergency",
    nameTe: "24/7 ట్రామా & అత్యవసర ఎముకల విభాగం",
    description: "Round-the-clock emergency casualty for road accidents, bone dislocations, head & polytrauma stabilization on NH 63.",
    descriptionTe: "ఎన్‌హెచ్ 63 పై జరిగే రోడ్డు ప్రమాదాలు, తీవ్ర ఎముకల గాయాలకు 24 గంటల తక్షణ అత్యవసర వైద్యం.",
    iconName: "ShieldAlert",
    procedures: [
      "24/7 Dedicated Trauma Casualty Bays",
      "Immediate Splinting, Reduction & Cast Application",
      "Emergency Wound Cleaning & Sterile Suturing",
      "Ambulance Coordination"
    ],
    headDoctor: "Dr. Naresh & Emergency Trauma Duty Staff"
  },
  {
    id: "diagnostics",
    name: "Digital Skeletal & Dental X-Ray Lab",
    nameTe: "డిజిటల్ ఎక్స్-రే & డెంటల్ ఇమేజింగ్",
    description: "High-frequency digital radiography for crystal-clear bone fracture assessment and intra-oral digital dental RVG imaging.",
    descriptionTe: "ఎముకల పరిశీలనకు హై-ఫ్రీక్వెన్సీ డిజిటల్ ఎక్స్-రే మరియు దంతాల కొరకు ఆధునిక ఆర్వీజీ డిజిటల్ ఇమేజింగ్.",
    iconName: "Activity",
    procedures: [
      "High-Resolution Skeletal Digital X-Ray",
      "Intra-Oral Dental RVG Digital Sensor",
      "Blood Testing & Pre-operative Checkup",
      "Instant Report Delivery"
    ],
    headDoctor: "Chief Radiographer"
  },
  {
    id: "pharmacy",
    name: "24-Hour In-House Pharmacy",
    nameTe: "24 గంటల ఆసుపత్రి మందుల దుకాణం",
    description: "Authentic orthopaedic medications, dental antibiotics, pain relievers, knee braces, cervical collars, and surgical supplies.",
    descriptionTe: "ప్రామాణికమైన ఆర్థోపెడిక్ & డెంటల్ మందులు, మోకాలి బెల్టులు మరియు సర్జికల్ సామాగ్రి 24 గంటలూ అందుబాటులో ఉంటాయి.",
    iconName: "Pill",
    procedures: [
      "100% Genuine Prescription Medicines",
      "Knee Caps, Braces & Lumbar Support Belts",
      "Surgical Ortho & Dental Consumables",
      "Round-the-Clock Emergency Availability"
    ],
    headDoctor: "In-House Pharmacy Team"
  }
];

export const TESTIMONIALS = [
  {
    name: "Ramesh Goud",
    location: "Korutla",
    comment: "My father underwent knee surgery under Dr. Naresh at Vishnu Priya Hospital. Within 3 weeks he was walking comfortably without pain. The best orthopedic surgeon in our region!",
    rating: 5,
    treatment: "Knee Treatment (Dr. Naresh)"
  },
  {
    name: "Sowmya Rani",
    location: "Korutla",
    comment: "I had severe tooth pain and got my Root Canal Treatment done by Dr. Archana, BDS. She is very gentle, explains everything clearly, and the procedure was completely painless.",
    rating: 5,
    treatment: "Root Canal Treatment (Dr. Archana, BDS)"
  },
  {
    name: "Srinivas Rao",
    location: "Metpally",
    comment: "I met with a bike accident on NH 63 with a leg fracture. Dr. Naresh and the team treated me immediately. Very prompt and dedicated hospital.",
    rating: 5,
    treatment: "Fracture Treatment (Dr. Naresh)"
  }
];
