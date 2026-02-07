/**
 * Localization Data for Triage System
 * Maps Indian States to Native Languages and provides translation dictionaries.
 */

const STATE_LANGUAGE_MAP = {
    "Andhra Pradesh": "Telugu",
    "Arunachal Pradesh": "English",
    "Assam": "Assamese",
    "Bihar": "Hindi",
    "Chhattisgarh": "Hindi",
    "Goa": "Konkani",
    "Gujarat": "Gujarati",
    "Haryana": "Hindi",
    "Himachal Pradesh": "Hindi",
    "Jharkhand": "Hindi",
    "Karnataka": "Kannada",
    "Kerala": "Malayalam",
    "Madhya Pradesh": "Hindi",
    "Maharashtra": "Marathi",
    "Manipur": "Manipuri",
    "Meghalaya": "English",
    "Mizoram": "Mizo",
    "Nagaland": "English",
    "Odisha": "Odia",
    "Punjab": "Punjabi",
    "Rajasthan": "Hindi",
    "Sikkim": "Nepali",
    "Tamil Nadu": "Tamil",
    "Telangana": "Telugu",
    "Tripura": "Bengali",
    "Uttar Pradesh": "Hindi",
    "Uttarakhand": "Hindi",
    "West Bengal": "Bengali",
    "Andaman and Nicobar Islands": "Hindi",
    "Chandigarh": "Punjabi",
    "Dadra and Nagar Haveli": "Gujarati",
    "Daman and Diu": "Gujarati",
    "Delhi": "Hindi",
    "Lakshadweep": "Malayalam",
    "Puducherry": "Tamil",
    "Ladakh": "Ladakhi",
    "Jammu and Kashmir": "Urdu"
};

const TRANSLATIONS = {
    "English": {
        urgency_label: "Urgency Level",
        specialist_label: "Recommended Specialist",
        reasoning_label: "Reasoning",
        levels: {
            "Non-Urgent & Routine": "Non-Urgent & Routine",
            "PRIORITY": "PRIORITY",
            "URGENT": "URGENT",
            "IMMEDIATE EMERGENCY": "IMMEDIATE EMERGENCY"
        },
        specialists: {
            "General Practitioner / Community Nurse": "General Practitioner / Community Nurse",
            "Urgent Care / Specialist Consult": "Urgent Care / Specialist Consult",
            "Emergency Room (ER) / Trauma Team": "Emergency Room (ER) / Trauma Team"
        },
        red_flags_detected: "CRITICAL RED FLAGS DETECTED",
        symptoms_reported: "Reported symptoms",
        patient_history: "Patient history of"
    },
    "Hindi": {
        urgency_label: "तात्कालिकता स्तर (Urgency)",
        specialist_label: "अनुशंसित विशेषज्ञ (Specialist)",
        reasoning_label: "कारण (Reasoning)",
        levels: {
            "Non-Urgent & Routine": "सामान्य (Non-Urgent)",
            "PRIORITY": "प्राथमिकता (Priority)",
            "URGENT": "अति आवश्यक (Urgent)",
            "IMMEDIATE EMERGENCY": "आपातकालीन (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "सामान्य चिकित्सक / सामुदायिक नर्स",
            "Urgent Care / Specialist Consult": "तत्काल देखभाल / विशेषज्ञ परामर्श",
            "Emergency Room (ER) / Trauma Team": "आपातकालीन कक्ष (ER) / ट्रॉमा टीम"
        },
        red_flags_detected: "गंभीर खतरे के संकेत मिले",
        symptoms_reported: "बताए गए लक्षण",
        patient_history: "रोगी का इतिहास"
    },
    "Marathi": {
        urgency_label: "तत्वरितता स्तर (Urgency)",
        specialist_label: "शिफारस केलेले तज्ञ (Specialist)",
        reasoning_label: "कारण (Reasoning)",
        levels: {
            "Non-Urgent & Routine": "सामान्य (Non-Urgent)",
            "PRIORITY": "प्राधान्य (Priority)",
            "URGENT": "अति निकडीचे (Urgent)",
            "IMMEDIATE EMERGENCY": "आणीबाणी (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "सामान्य डॉक्टर / समुदाय परिचारिका",
            "Urgent Care / Specialist Consult": "तातडीची काळजी / तज्ञ सल्ला",
            "Emergency Room (ER) / Trauma Team": "आणीबाणी कक्ष (ER)"
        },
        red_flags_detected: "धोक्याची चिन्हे आढळली",
        symptoms_reported: "सांगितलेली लक्षणे",
        patient_history: "रुग्णाचा इतिहास"
    },
    "Gujarati": {
        urgency_label: "તાકીદનું સ્તર (Urgency)",
        specialist_label: "ભલામણ કરેલ નિષ્ણાત (Specialist)",
        reasoning_label: "કારણ (Reasoning)",
        levels: {
            "Non-Urgent & Routine": "સામાન્ય (Non-Urgent)",
            "PRIORITY": "અગ્રતા (Priority)",
            "URGENT": "તાકીદનું (Urgent)",
            "IMMEDIATE EMERGENCY": "ઈમરજન્સી (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "સામાન્ય ડૉક્ટર / નર્સ",
            "Urgent Care / Specialist Consult": "તાત્કાલિક સારવાર / નિષ્ણાત સલાહ",
            "Emergency Room (ER) / Trauma Team": "ઈમરજન્સી રૂમ / ટ્રોમા ટીમ"
        },
        red_flags_detected: "ગંભીર જોખમી ચિહ્નો મળ્યા",
        symptoms_reported: "જણાવેલ લક્ષણો",
        patient_history: "દર્દીનો ઇતિહાસ"
    },
    "Tamil": {
        urgency_label: "அவசர நிலை (Urgency)",
        specialist_label: "பரிந்துரைக்கப்பட்ட நிபுணர்",
        reasoning_label: "காரணம்",
        levels: {
            "Non-Urgent & Routine": "சாதாரண (Non-Urgent)",
            "PRIORITY": "முன்னுரிமை (Priority)",
            "URGENT": "அவசரம் (Urgent)",
            "IMMEDIATE EMERGENCY": "மிக அவசரம் (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "பொது மருத்துவர் / செவிலியர்",
            "Urgent Care / Specialist Consult": "அவசர சிகிச்சை / நிபுணர் ஆலோசனை",
            "Emergency Room (ER) / Trauma Team": "அவசர சிகிச்சை பிரிவு (ER)"
        },
        red_flags_detected: "ஆபத்தான அறிகுறிகள் கண்டறியப்பட்டன",
        symptoms_reported: "அறிகுறிகள்",
        patient_history: "நோயாளி வரலாறு"
    },
    "Telugu": {
        urgency_label: "అత్యవసర స్థాయి",
        specialist_label: "సూచించిన నిపుణులు",
        reasoning_label: "కారణం",
        levels: {
            "Non-Urgent & Routine": "సాధారణ (Non-Urgent)",
            "PRIORITY": "ప్రాధాన్యత (Priority)",
            "URGENT": "అత్యవసరం (Urgent)",
            "IMMEDIATE EMERGENCY": "ఎమర్జెన్సీ (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "జనరల్ డాక్టర్ / నర్స్",
            "Urgent Care / Specialist Consult": "అత్యవసర చికిత్స / స్పెషలిస్ట్",
            "Emergency Room (ER) / Trauma Team": "ఎమర్జెన్సీ రూమ్ (ER)"
        },
        red_flags_detected: "ప్రమాదకర లక్షణాలు గుర్తించబడ్డాయి",
        symptoms_reported: "ముఖ్య లక్షణాలు",
        patient_history: "రోగి చరిత్ర"
    },
    "Kannada": {
        urgency_label: "ತುರ್ತು ಮಟ್ಟ",
        specialist_label: "ಶಿಫಾರಸು ಮಾಡಿದ ತಜ್ಞರು",
        reasoning_label: "ಕಾರಣ",
        levels: {
            "Non-Urgent & Routine": "ಸಾಮಾನ್ಯ (Non-Urgent)",
            "PRIORITY": "ಆದ್ಯತೆ (Priority)",
            "URGENT": "ತುರ್ತು (Urgent)",
            "IMMEDIATE EMERGENCY": "ತುರ್ತು ಚಿಕಿತ್ಸೆ (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "ಸಾಮಾನ್ಯ ವೈದ್ಯರು",
            "Urgent Care / Specialist Consult": "ತುರ್ತು ಆರೈಕೆ / ತಜ್ಞರ ಸಲಹೆ",
            "Emergency Room (ER) / Trauma Team": "ತುರ್ತು ಚಿಕಿತ್ಸಾ ಘಟಕ (ER)"
        },
        red_flags_detected: "ಅಪಾಯದ ಚಿಹ್ನೆಗಳು ಕಂಡುಬಂದಿವೆ",
        symptoms_reported: "ವರದಿಯಾದ ಲಕ್ಷಣಗಳು",
        patient_history: "ರೋಗಿಯ ಇತಿಹಾಸ"
    },
    "Malayalam": {
        urgency_label: "അടിയന്തിര നില",
        specialist_label: "ശുപാർശ ചെയ്യുന്ന വിദഗ്ദ്ധൻ",
        reasoning_label: "കാരണം",
        levels: {
            "Non-Urgent & Routine": "സാധാരണ (Non-Urgent)",
            "PRIORITY": "മുൻഗണന (Priority)",
            "URGENT": "അടിയന്തിരം (Urgent)",
            "IMMEDIATE EMERGENCY": "എമർജൻസി (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "ജനറൽ ഡോക്ടർ / നഴ്സ്",
            "Urgent Care / Specialist Consult": "അടിയന്തിര പരിചരണം / സ്പെഷ്യലിസ്റ്റ്",
            "Emergency Room (ER) / Trauma Team": "എമർജൻസി റൂം (ER)"
        },
        red_flags_detected: "അപകടസൂചനകൾ കണ്ടെത്തി",
        symptoms_reported: "ലക്ഷണങ്ങൾ",
        patient_history: "രോഗചരിത്രം"
    },
    "Bengali": {
        urgency_label: "জরুরী অবস্থা",
        specialist_label: "সুপারিশকৃত বিশেষজ্ঞ",
        reasoning_label: "কারণ",
        levels: {
            "Non-Urgent & Routine": "সাধারণ (Non-Urgent)",
            "PRIORITY": "অগ্রাধিকার (Priority)",
            "URGENT": "জরুরী (Urgent)",
            "IMMEDIATE EMERGENCY": "আপাতকালীন জরুরী (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "সাধারণ ডাক্তার",
            "Urgent Care / Specialist Consult": "জরুরী সেবা / বিশেষজ্ঞ পরামর্শ",
            "Emergency Room (ER) / Trauma Team": "ইমার্জেন্সি রুম (ER)"
        },
        red_flags_detected: "বিপজ্জনক লক্ষণ সনাক্ত হয়েছে",
        symptoms_reported: "লক্ষণসমূহ",
        patient_history: "রোগীর ইতিহাস"
    },
    "Punjabi": {
        urgency_label: "ਜ਼ਰੂਰੀ ਪੱਧਰ (Urgency)",
        specialist_label: "ਸਿਫਾਰਸ਼ ਕੀਤੇ ਮਾਹਰ",
        reasoning_label: "ਕਾਰਨ",
        levels: {
            "Non-Urgent & Routine": "ਆਮ (Non-Urgent)",
            "PRIORITY": "ਪ੍ਰਾਥਮਿਕਤਾ (Priority)",
            "URGENT": "ਜ਼ਰੂਰੀ (Urgent)",
            "IMMEDIATE EMERGENCY": "ਐਮਰਜੈਂਸੀ (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "ਜਨਰਲ ਡਾਕਟਰ",
            "Urgent Care / Specialist Consult": "ਜ਼ਰੂਰੀ ਦੇਖਭਾਲ / ਮਾਹਰ ਸਲਾਹ",
            "Emergency Room (ER) / Trauma Team": "ਐਮਰਜੈਂਸੀ ਰੂਮ (ER)"
        },
        red_flags_detected: "ਖਤਰਨਾਕ ਸੰਕੇਤ ਮਿਲੇ",
        symptoms_reported: "ਲੱਛਣ",
        patient_history: "ਮਰੀਜ਼ ਦਾ ਇਤਿਹਾਸ"
    },
    "Odia": {
        urgency_label: "ଜରୁରୀକାଳୀନ ସ୍ତର (Urgency)",
        specialist_label: "ପରାମର୍ଶିତ ବିଶେଷଜ୍ଞ (Specialist)",
        reasoning_label: "କାରଣ (Reasoning)",
        levels: {
            "Non-Urgent & Routine": "ସାଧାରଣ (Non-Urgent)",
            "PRIORITY": "ପ୍ରାଥମିକତା (Priority)",
            "URGENT": "ଜରୁରୀ (Urgent)",
            "IMMEDIATE EMERGENCY": "ଆପାତକାଳୀନ (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "ସାଧାରଣ ଡାକ୍ତର / ନର୍ସ",
            "Urgent Care / Specialist Consult": "ଜରୁରୀ ସେବା / ବିଶେଷଜ୍ଞ ପରାମର୍ଶ",
            "Emergency Room (ER) / Trauma Team": "ଆପାତକାଳୀନ କକ୍ଷ (ER)"
        },
        red_flags_detected: "ବିପଦର ସଙ୍କେତ ମିଳିଛି",
        symptoms_reported: "ଲକ୍ଷଣ",
        patient_history: "ରୋଗୀର ଇତିಹಾಸ"
    },
    "Assamese": {
        urgency_label: "জৰুৰীকালীন স্তৰ (Urgency)",
        specialist_label: "পৰামৰ্শিত বিশেষজ্ঞ",
        reasoning_label: "কাৰণ",
        levels: {
            "Non-Urgent & Routine": "সাধাৰণ (Non-Urgent)",
            "PRIORITY": "প্ৰাথমিকতা (Priority)",
            "URGENT": "জৰুৰী (Urgent)",
            "IMMEDIATE EMERGENCY": "জৰুৰীকালীন (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "সাধাৰণ চিকিৎসক / নৰ্ছ",
            "Urgent Care / Specialist Consult": "জৰুৰী যতন / বিশেষজ্ঞৰ পৰামৰ্শ",
            "Emergency Room (ER) / Trauma Team": "জৰুৰীকালীন কক্ষ (ER)"
        },
        red_flags_detected: "বিপদৰ সংকেত পোৱা গৈছে",
        symptoms_reported: "লক্ষণসমূহ",
        patient_history: "ৰোগীৰ ইতিহাস"
    },
    "Konkani": {
        urgency_label: "ತುರ್ತು ಮಟ್ಟ (Urgency)",
        specialist_label: "ಶಿಫಾರಸು ಕೆಲ್ಲೆ ತಜ್ಞ",
        reasoning_label: "ಕಾರಣ (Reasoning)",
        levels: {
            "Non-Urgent & Routine": "ಸಾಮಾನ್ಯ (Non-Urgent)",
            "PRIORITY": "ಪ್ರಾಧಾನ್ಯ (Priority)",
            "URGENT": "ತುರ್ತು (Urgent)",
            "IMMEDIATE EMERGENCY": "ಆಣಿಬಾಣಿ (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "ಸಾಮಾನ್ಯ ದ್ಹೊತೊರ್ / ನರ್ಸ್",
            "Urgent Care / Specialist Consult": "ತುರ್ತು ಚಿಕಿತ್ಸಾ / ತಜ್ಞ ಸಲ್ಹೋ",
            "Emergency Room (ER) / Trauma Team": "ಆಣಿಬಾಣಿ ಕಕ್ಷ (ER)"
        },
        red_flags_detected: "ಧೋಕ್ಯಾಚಿಂ ಲಕ್ಷಣಾಂ ಮೆಳ್ಳ್ಳ್ಯಾಂತ್",
        symptoms_reported: "ಲಕ್ಷಣಾಂ",
        patient_history: "ರುಗ್ಣಾಚೊ ಇತಿಹಾಸ"
    },
    "Manipuri": {
        urgency_label: "ଅର୍ଜେନ୍সি ଲେଭଲ (Urgency)",
        specialist_label: "ରେକମେଣ୍ଡେଡ ସ୍ପେସିଆଲିଷ୍ଟ",
        reasoning_label: "ମରମ (Reasoning)",
        levels: {
            "Non-Urgent & Routine": "ନର୍ମାଲ (Non-Urgent)",
            "PRIORITY": "ପ୍ରାୟୋରିଟି (Priority)",
            "URGENT": "ଅର୍ଜେଣ୍ଟ (Urgent)",
            "IMMEDIATE EMERGENCY": "ଇମର୍ଜେନ୍ସି (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "ଜେନେରାଲ ଡାକ୍ତର",
            "Urgent Care / Specialist Consult": "ଅର୍ଜେଣ୍ଟ କେୟାର",
            "Emergency Room (ER) / Trauma Team": "ଇମର୍ଜେନ୍ସି ରୁମ (ER)"
        },
        red_flags_detected: "ଖୁଦୋଂଥିନିଂଙାଇ ଓଇବା",
        symptoms_reported: "ଲକ୍ଷଣସିଂ",
        patient_history: "ଅନାବଗି ୱାରୀ"
    },
    "Mizo": {
        urgency_label: "Hmanhmawh Thlak Dan",
        specialist_label: "Raawn Tur",
        reasoning_label: "A Chhan",
        levels: {
            "Non-Urgent & Routine": "Pangngai (Non-Urgent)",
            "PRIORITY": "Pawimawh (Priority)",
            "URGENT": "Hmanhmawh (Urgent)",
            "IMMEDIATE EMERGENCY": "Chakkhai (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "Doctor Pangngai / Nurse",
            "Urgent Care / Specialist Consult": "Hmanhmawh Enkawlna / Specialist",
            "Emergency Room (ER) / Trauma Team": "Emergency Room (ER)"
        },
        red_flags_detected: "Thil Hlauhawm Hmuh A Ni",
        symptoms_reported: "Landan",
        patient_history: "Damlo Chanchin"
    },
    "Nepali": {
        urgency_label: "अत्यावश्यकता स्तर (Urgency)",
        specialist_label: "सिफारिस गरिएको विशेषज्ञ",
        reasoning_label: "कारण",
        levels: {
            "Non-Urgent & Routine": "सामान्य (Non-Urgent)",
            "PRIORITY": "प्राथमिकता (Priority)",
            "URGENT": "जरूरी (Urgent)",
            "IMMEDIATE EMERGENCY": "आपातकालीन (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "सामान्य चिकित्सक / नर्स",
            "Urgent Care / Specialist Consult": "तत्काल हेरचाह / विशेषज्ञ परामर्श",
            "Emergency Room (ER) / Trauma Team": "आपातकालीन कक्ष (ER)"
        },
        red_flags_detected: "खतराको संकेत भेटियो",
        symptoms_reported: "लक्षणहरू",
        patient_history: "बिरामीको इतिहास"
    },
    "Urdu": {
        urgency_label: "ہنگامی سطح (Urgency)",
        specialist_label: "تجویز کردہ ماہر",
        reasoning_label: "وجہ",
        levels: {
            "Non-Urgent & Routine": "معمولی (Non-Urgent)",
            "PRIORITY": "ترجیح (Priority)",
            "URGENT": "فوری (Urgent)",
            "IMMEDIATE EMERGENCY": "ہنگامی (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "عام ڈاکٹر / نرس",
            "Urgent Care / Specialist Consult": "فوری دیکھ بھال / ماہر مشورہ",
            "Emergency Room (ER) / Trauma Team": "ایمرجنسی روم (ER)"
        },
        red_flags_detected: "خطرناک علامات پائی گئیں",
        symptoms_reported: "علامات",
        patient_history: "مریض کی تاریخ"
    },
    "Ladakhi": {
        urgency_label: "Urgency Level",
        specialist_label: "Specialist",
        reasoning_label: "Reasoning",
        levels: {
            "Non-Urgent & Routine": "Thunmong (Routine)",
            "PRIORITY": "Galche (Priority)",
            "URGENT": "Gyoks (Urgent)",
            "IMMEDIATE EMERGENCY": "Jigpa (Emergency)"
        },
        specialists: {
            "General Practitioner / Community Nurse": "Amchi / Nurse",
            "Urgent Care / Specialist Consult": "Specialist",
            "Emergency Room (ER) / Trauma Team": "Emergency Room (ER)"
        },
        red_flags_detected: "Nyen-kha (Red Flags)",
        symptoms_reported: "Tak-tshen (Symptoms)",
        patient_history: "Nat-pa Lo-gyus"
    }
};

// Fallback for languages not explicitly defined
const DEFAULT_TRANSLATION = TRANSLATIONS["English"];
