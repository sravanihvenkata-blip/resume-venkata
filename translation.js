const translations = {
  en: {
    "title": "Sravani H. Venkata - Machine Learning Engineer",
    "name": "Sravani Hukumathi Venkata",
    "tagline": "Data Scientist | 11 Years Automotive Expertise | Sorbonne AI Specialization",
    "email": "Email",
    "phone": "Phone",
    "location": "Location",
    "github": "Project Link",
    
    "summary_title": "Summary",
    "summary_text": "High-impact Machine Learning Engineer with 11 years of automotive expertise and advanced Data Science training from Université Paris Panthéon-Sorbonne. Proven track record in developing AI-driven automation and real-time anomaly detection systems. Seeking a Data Scientist role to integrate Generative AI with Embedded Systems.",
    "summary_text_short": "ML Engineer with 11 years of automotive expertise and Sorbonne AI training. Expert in real-time anomaly detection and AI automation.",
    
    "skills_title": "Skills",
    "skills_cat_ml": "Data Science & ML",
    "skills_ml_details": "LLMs (LangChain), RAG Architecture, Computer Vision, Time Series, Anomaly Detection",
    "skills_cat_dl": "Deep Learning",
    "skills_dl_details": "Keras, PyTorch, TensorFlow, CNNs, Transformers",
    "skills_cat_prog": "Programming",
    "skills_prog_lang_details": "Python (Expert), SQL, C++, Embedded C",
    "skills_cat_other": "Embedded Systems",
    "skills_other_details": "AUTOSAR, CAN, FlexRay, Ethernet, Microcontrollers (Tricore, RH850)",
    "skills_cat_tools": "Tools, Platforms & Libraries",
    "skills_tools_details": "Github, Docker, AWS, Scikit-learn, Pandas, Davinci Configurator",
    "skills_cat_soft": "Soft Skills",
    "skills_soft_details": "Strategic Stakeholder Communication, Technical Mentorship, Agile Leadership",
    
    "projects_title": "Projects",
    "project_1_title": "CAN Bus Anomaly Detection (AI Safety)",
    "project_1_desc": "Built an automated security system identifying vehicle cyber-attacks with 97.6% accuracy.",
    "project_1_li_1": "Methods Used: The notebook employs an ensemble of unsupervised learning models, primarily Isolation Forest (for DoS detection) and Local Outlier Factor (LOF) (for Fuzzy anomaly detection), enhanced by a Heuristic Priority Logic, most notably the 'New ID Priority' rule, to accurately distinguish attack types.",
    "project_1_li_2": "Features Used: Key features for DoS detection include frequency_hz and log_iat, while Fuzzy detection relies on payload analysis through rolling_volatility, hamming_dist, and the critical is_new_id flag. General message attributes like can_id_dec and dic are also incorporated.",
    "project_1_li_3": "Outcome: The result is a robust anomaly detection system achieving high performance across all classes, specifically Fuzzy attack recall of ~97.6%, DoS attack precision of ~98.8%, and normal frame recall of ~99.9%.",
    "project_1_li_4": "Demonstrated the ability to detect various attack types, including DoS and Fuzzy attacks, by analyzing CAN ID frequency, inter-arrival times, and payload characteristics.",
    
    "experience_title": "PROFESSIONAL EXPERIENCE (LAST 11 YEARS: AUTOMOTIVE EMBEDDED SYSTEMS)",
    "exp_1_title": "Project Lead | Montbleu Technologies GmbH, Germany",
    "exp_1_date": "Aug 2021 – Feb 2025",
    "exp_1_li_1": "Directed full-cycle AUTOSAR MCAL adaptation for next-gen hardware, ensuring 100% OEM alignment.",
    "exp_1_li_2": "Engineered high-performance multicore solutions, optimizing data throughput by 20%.",
    "exp_1_li_3": "Spearheaded integration of safety-critical watchdogs, significantly enhancing system reliability.",
    "exp_1_li_4": "Acted as technical bridge between customer requirements and execution for Tier-1 partners.",
    
    "exp_2_title": "Lead Engineer | Avin Systems GmbH, Berlin",
    "exp_2_date": "Sep 2019 – July 2021",
    "exp_2_li_1": "Orchestrated BMS development for Mercedes-Benz, steering architecture for energy efficiency.",
    "exp_2_li_2": "Delivered AUTOSAR-compliant stacks, reducing system integration time and ensuring safety.",
    "exp_2_li_3": "Mentored 5 junior engineers, resulting in a 30% increase in team coding efficiency.",
    
    "exp_3_title": "Senior Software Engineer | KPIT Technologies, Munich",
    "exp_3_date": "Oct 2013 – June 2019",
    "exp_3_li_1": "Developed safety-critical software for BMW and Continental for millions of production vehicles.",
    "exp_3_li_2": "Mastered CAN/FlexRay protocols, establishing the foundation for advanced data analysis.",
    "exp_3_li_3": "Architected software designs to streamline integration and reduce development cycles.",
    
    "education_title": "Education",
    "edu_1_title": "Advanced Data Science Training",
    "edu_1_desc": "Université Paris Panthéon-Sorbonne",
    "edu_1_date": "Sep 2025 - Dec 2025",
    "edu_2_title": "Bachelor of Engineering",
    "edu_2_desc": "B.V.B College of Engineering, India",
    "edu_2_date": "2009 – 2013",
    
    "languages_title": "Languages",
    "languages_details": "English (Fluent), German (B2), Telugu (Native), Kannada, Hindi",
    "download_button": "Download Full CV (PDF)"
  },
  de: {
    "title": "Sravani H. Venkata - Machine Learning Engineer",
    "name": "Sravani Hukumathi Venkata",
    "tagline": "Data Scientist | 11 Jahre Automotive-Expertise | Sorbonne KI-Spezialisierung",
    "email": "E-Mail",
    "phone": "Telefon",
    "location": "Standort",
    "github": "Projekt-Link",
    
    "summary_title": "Zusammenfassung",
    "summary_text": "Leistungsstarke ML-Ingenieurin mit 11 Jahren Automotive-Expertise und Ausbildung an der Sorbonne. Spezialisiert auf KI-Automatisierung und Echtzeit-Anomalieerkennung.",
    "summary_text_short": "ML-Ingenieurin mit 11 Jahren Automotive-Expertise und Sorbonne KI-Weiterbildung.",
    
    "skills_title": "Fähigkeiten",
    "skills_cat_ml": "Data Science & ML",
    "skills_ml_details": "LLMs, RAG-Architektur, Computer Vision, Zeitreihen, Anomalieerkennung",
    "skills_cat_dl": "Deep Learning",
    "skills_dl_details": "Keras, PyTorch, TensorFlow, CNNs, Transformers",
    "skills_cat_prog": "Programmierung",
    "skills_prog_lang_details": "Python (Experte), SQL, C++, Embedded C",
    "skills_cat_other": "Embedded Systems",
    "skills_other_details": "AUTOSAR, CAN, FlexRay, Ethernet, Mikrocontroller",
    "skills_cat_soft": "Soft Skills",
    "skills_soft_details": "Stakeholder-Kommunikation, Mentoring, Agile Führung",
    "skills_cat_tools": "Tools, Platforms & Libraries",
    "skills_tools_details": "Github, Docker, AWS, Scikit-learn, Davinci Configurator",
    
    "projects_title": "Projekte",
    "project_1_title": "CAN-Bus Anomalieerkennung (KI-Sicherheit)",
    "project_1_desc": "KI-Sicherheitssystem zur Erkennung von Cyberangriffen mit 97,6 % Genauigkeit.",
    "project_1_li_1": "Einsatz von LSTM-Autoencodern zur automatischen Überwachung von Fahrzeugdaten.",
    "project_1_li_2": "Analyse der Nachrichtenfrequenz zur Abwehr von Cyberangriffen.",
    "project_1_li_3": "98,8 % Präzision bei der Identifizierung von DoS-Angriffen.",
    "project_1_li_4": "Verbindung von Automotive-Hardware mit modernen KI-Protokollen.",
    
    "experience_title": "Berufserfahrung",
    "exp_1_title": "Project Lead | Montbleu Technologies GmbH, Deutschland",
    "exp_1_date": "Aug 2021 – Feb 2025",
    "exp_1_li_1": "Leitung der AUTOSAR MCAL-Anpassung für Next-Gen-Hardware.",
    "exp_1_li_2": "Entwicklung von Multicore-Lösungen, Optimierung des Datendurchsatzes um 20%.",
    "exp_1_li_3": "Integration sicherheitskritischer Funktionen zur Erhöhung der Zuverlässigkeit.",
    "exp_1_li_4": "Technische Schnittstelle für Tier-1-Automobilpartner.",
    
    "exp_2_title": "Lead Engineer | Avin Systems GmbH, Berlin",
    "exp_2_date": "Sep 2019 – Juli 2021",
    "exp_2_li_1": "BMS-Entwicklung für Mercedes-Benz, Architektursteuerung für Energieeffizienz.",
    "exp_2_li_2": "Bereitstellung AUTOSAR-konformer Stacks zur Reduzierung der Integrationszeit.",
    "exp_2_li_3": "Mentoring von 5 Ingenieuren, Steigerung der Effizienz um 30%.",
    
    "exp_3_title": "Senior Software Engineer | KPIT Technologies, München",
    "exp_3_date": "Okt 2013 – Juni 2019",
    "exp_3_li_1": "Softwareentwicklung für BMW und Continental für Millionen von Fahrzeugen.",
    "exp_3_li_2": "Experte für CAN/FlexRay-Protokolle als Basis für Datenanalysen.",
    "exp_3_li_3": "Softwaredesign zur Rationalisierung der Systemintegration.",
    
    "education_title": "Ausbildung",
    "edu_1_title": "Fortgeschrittene Data Science Ausbildung",
    "edu_1_desc": "Université Paris Panthéon-Sorbonne",
    "edu_1_date": "Sep 2025 - Dez 2025",
    "edu_2_title": "Bachelor of Engineering",
    "edu_2_desc": "B.V.B College of Engineering, Indien",
    "edu_2_date": "2009 – 2013",
    
    "languages_title": "Sprachen",
    "languages_details": "Englisch (Fließend), Deutsch (B2), Telugu, Kannada, Hindi",
    "download_button": "Lebenslauf herunterladen (PDF)"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const setLanguage = (language) => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      if (translations[language] && translations[language][key]) {
        element.innerHTML = translations[language][key];
      }
    });
  };

  document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(item.getAttribute('data-lang'));
    });
  });

  const currentLang = localStorage.getItem('language') || 'en';
  setLanguage(currentLang);

  document.getElementById('download-btn').addEventListener('click', () => {
      window.print();
  });
});
