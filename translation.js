const translations = {
  en: {
    "title": "Sravani H. Venkata - Data Scientist",
    "name": "Sravani H. Venkata",
    "tagline": "Data Scientist with a decade of experience in complex systems engineering",
    "email": "Email",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "summary_title": "Summary",
    "summary_text": "Data Scientist with a decade of experience in complex systems engineering, leveraging deep expertise in Python, machine learning, and statistical analysis to solve data-driven problems. Specialized background in diagnostics, system-level analysis, and cross-functional collaboration. Proven track record implementing classification models, anomaly detection systems, and conducting exploratory data analysis. Seeking to apply advanced ML skills and analytical mindset to deliver measurable business impact.",
    "summary_text_short": "Data Scientist with 10 years of experience analyzing complex systems. Expert in Python, machine learning, statistical analysis, and real-time anomaly detection. Proven ability to build and deploy models that solve critical business problems.",
    "skills_title": "Skills",
    "skills_cat_prog": "Programming Languages",
    "skills_prog_lang_details": "Python (OOP, Unit Testing), Embedded C",
    "skills_cat_ml": "Data Science & Machine Learning",
    "skills_ml_details": "Classification, Regression, Clustering, Dimensionality Reduction (PCA), Feature Engineering, Time Series Analysis, Anomaly Detection, Exploratory Data Analysis, Statistical Analysis, Model Evaluation",
    "skills_cat_dl": "Deep Learning & Neural Networks",
    "skills_dl_details": "Keras, PyTorch, TensorFlow, Convolutional Neural Networks, Deep Neural Networks, Transformers, Large Language Models, Computer Vision (OpenCV)",
    "skills_cat_tools": "Tools, Platforms & Libraries",
    "skills_tools_details": "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Plotly, Git, GitHub, Linux Command Line, Docker, Streamlit, SQL, AWS",
    "skills_cat_other": "Specialized Domains",
    "skills_other_details": "Data APIs, Web Scraping (BeautifulSoup), CAN Bus Analysis, Cybersecurity Data, System Integration, Real-time Data Processing",
    "ds_libs_details": "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Plotly",
    "projects_title": "Data Science Projects",
    "project_1_title": "CAN Bus Anomaly Detection System",
    "project_tech_title": "Technologies",
    "project_1_tech": "Python, Pandas, Scikit-learn, Keras, Matplotlib, TensorFlow",
    "project_methods_title": "Methods & Techniques",
    "project_1_methods": "Exploratory Data Analysis (EDA), Feature Engineering (Shannon Entropy), Supervised Classification, Unsupervised Anomaly Detection (LSTM Autoencoder), Model Comparison and Evaluation",
    "project_impact_title": "Impact",
    "project_1_impact": "Developed real-time anomaly detection system identifying CAN bus attacks (DoS, Fuzzy, Impersonation) with high precision, providing foundation for enhanced automotive cybersecurity.",
    "project_1_desc": "Built robust anomaly detection system for CAN bus traffic to identify malicious messages in real-time.",
    "project_1_li_1": "Implemented and compared two distinct models: supervised classification with expert-driven feature engineering and unsupervised LSTM Autoencoder for detecting zero-day anomalies",
    "project_1_li_2": "Conducted in-depth exploratory data analysis to identify statistical differences between normal and attack traffic, validating feature engineering strategy",
    "project_1_li_3": "Engineered key features including Shannon Entropy to distinguish between normal CAN messages and high-entropy Fuzzy attacks",
    "project_1_li_4": "Successfully detected multiple attack types by analyzing CAN ID frequency, inter-arrival times, and payload characteristics",
    "experience_title": "Professional Experience",
    "experience_title_print": "Professional Experience",
    "exp_1_title": "Project Lead, Montbleu Technologies GmbH, Germany",
    "exp_1_date": "Aug 2021 – Feb 2025",
    "exp_1_li_1": "Led architecture and implementation of complex automotive software systems, conducting detailed system analysis and root cause investigations",
    "exp_1_li_2": "Managed multicore system integration and cross-platform compatibility, requiring systematic debugging and performance analysis",
    "exp_1_li_3": "Resolved critical system-level issues through methodical problem-solving and data-driven optimization approaches",
    "exp_1_li_4": "Delivered high-quality solutions for Fortune 500 OEM clients, managing client expectations and requirements analysis",
    "exp_2_title": "Lead Engineer, Avin Systems GmbH, Berlin",
    "exp_2_date": "Sep 2019 – July 2021",
    "exp_2_li_1": "Architected software solutions for major automotive projects, conducting requirements analysis and design reviews",
    "exp_2_li_2": "Implemented modular software architecture and integration frameworks, analyzing performance metrics and system dependencies",
    "exp_2_li_3": "Mentored junior engineers and reviewed complex technical solutions, fostering analytical thinking and best practices",
    "exp_3_title": "Senior Software Engineer, KPIT Technologies GmbH, Munich",
    "exp_3_date": "Oct 2013 – June 2019",
    "exp_3_li_1": "Developed software for leading automotive clients, implementing solutions that integrated hardware and software components",
    "exp_3_li_2": "Specialized in system diagnostics and communication protocols, analyzing data patterns and system behavior",
    "exp_3_li_3": "Authored detailed technical documentation and collaborated across teams for seamless system integration",
    "tech_skills_title": "Technical Skills Highlight",
    "tech_skills_desc_1": "Extensive experience in: Python, Data Analysis, Statistical Methods, System Integration, Problem-solving, Performance Optimization, Git, SVN, GitHub, and Testing Frameworks",
    "tech_skills_desc_2": "Cross-functional team leadership and delivery of complex solutions for enterprise clients",
    "education_title": "Education",
    "edu_1_title": "Bachelor of Engineering (Instrumentation Technology)",
    "edu_1_desc": "B.V.B College of Engineering and Technology, Hubli, India",
    "edu_1_date": "September 2009 – June 2013",
    "certs_title": "Professional Development",
    "certs_details": "Completed comprehensive coursework in Data Science and Machine Learning covering Python, statistical analysis, advanced ML algorithms, deep learning, and real-world applications",
    "cert_1_title": "Data Science Fundamentals",
    "cert_1_li_1": "Python programming for data analysis and manipulation",
    "cert_1_li_2": "Exploratory statistics, data quality assessment, and preprocessing",
    "cert_1_li_3": "Data visualization and communication with stakeholders",
    "cert_1_li_4": "Version control (Git, GitHub), Linux, and command-line tools",
    "cert_2_title": "Machine Learning Algorithms",
    "cert_2_li_1": "Classification and model evaluation techniques",
    "cert_2_li_2": "Regression methods and forecasting",
    "cert_2_li_3": "Clustering and unsupervised learning",
    "cert_2_li_4": "Dimensionality reduction (PCA)",
    "cert_2_li_5": "Feature engineering and model optimization",
    "cert_2_li_6": "Time series analysis and anomaly detection",
    "cert_3_title": "Advanced ML and Deep Learning",
    "cert_3_li_1": "Advanced machine learning with complex models and pipelines",
    "cert_3_li_2": "Deep learning frameworks: Keras, PyTorch, TensorFlow",
    "cert_3_li_3": "Convolutional and recurrent neural networks",
    "cert_3_li_4": "Transformers and large language models",
    "cert_3_li_5": "Computer vision and image processing",
    "cert_3_li_6": "Model interpretability and ethics in AI",
    "cert_4_title": "Data Engineering & Deployment",
    "cert_4_li_1": "SQL database design and querying",
    "cert_4_li_2": "Building interactive applications with Streamlit",
    "cert_4_li_3": "Containerization with Docker",
    "cert_4_li_4": "Cloud basics and deployment strategies",
    "cert_5_title": "Specialized Applications",
    "cert_5_li_1": "Object-oriented programming best practices",
    "cert_5_li_2": "Unit testing and code quality",
    "cert_5_li_3": "Web scraping and API integration",
    "cert_5_li_4": "Real-time data processing",
    "cert_5_li_5": "Domain-specific data analysis",
    "cert_6_title": "Professional Best Practices",
    "cert_6_li_1": "Data science project methodology and workflow",
    "cert_6_li_2": "Responsible AI and ethical considerations",
    "cert_6_li_3": "Technical communication and documentation",
    "download_button": "Download Full CV (PDF)"
  },
  de: {
    "title": "Sravani H. Venkata - Datenwissenschaftlerin",
    "name": "Sravani H. Venkata",
    "tagline": "Datenwissenschaftlerin mit 10 Jahren Erfahrung in komplexen Systemtechniken",
    "email": "E-Mail",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "summary_title": "Zusammenfassung",
    "summary_text": "Datenwissenschaftlerin mit zehn Jahren Erfahrung in der Technik komplexer Systeme und tiefem Fachwissen in Python, maschinellem Lernen und statistischer Analyse zur Lösung datengestützter Probleme. Spezialisiert auf Diagnostik, Systemanalyse und funktionsübergreifende Zusammenarbeit. Nachgewiesene Erfolgsbilanz bei der Implementierung von Klassifikationsmodellen, Anomalieerkennungssystemen und explorativen Datenanalysen. Angestrebt wird die Anwendung fortgeschrittener ML-Fähigkeiten und analytischer Denkweise zur Erzielung messbarer geschäftlicher Auswirkungen.",
    "summary_text_short": "Datenwissenschaftlerin mit 10 Jahren Erfahrung in der Analyse komplexer Systeme. Experte in Python, maschinellem Lernen, statistischer Analyse und Anomalieerkennung in Echtzeit. Nachgewiesene Fähigkeit, Modelle zu entwickeln und bereitzustellen, die kritische Geschäftsprobleme lösen.",
    "skills_title": "Fähigkeiten",
    "skills_cat_prog": "Programmiersprachen",
    "skills_prog_lang_details": "Python (OOP, Unit Testing), Embedded C",
    "skills_cat_ml": "Data Science & Machine Learning",
    "skills_ml_details": "Klassifikation, Regression, Clustering, Dimensionsreduktion (PCA), Feature Engineering, Zeitreihenanalyse, Anomalieerkennung, Explorative Datenanalyse, Statistische Analyse, Modellbewertung",
    "skills_cat_dl": "Deep Learning & Neuronale Netze",
    "skills_dl_details": "Keras, PyTorch, TensorFlow, Convolutional Neural Networks, Deep Neural Networks, Transformers, Large Language Models, Computer Vision (OpenCV)",
    "skills_cat_tools": "Tools, Plattformen & Bibliotheken",
    "skills_tools_details": "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Plotly, Git, GitHub, Linux-Kommandozeile, Docker, Streamlit, SQL, AWS",
    "skills_cat_other": "Spezialisierte Bereiche",
    "skills_other_details": "Daten-APIs, Web Scraping (BeautifulSoup), CAN-Bus-Analyse, Cybersecurity-Daten, Systemintegration, Echtzeit-Datenverarbeitung",
    "ds_libs_details": "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Plotly",
    "projects_title": "Data-Science-Projekte",
    "project_1_title": "CAN-Bus-Anomalieerkennungssystem",
    "project_tech_title": "Technologien",
    "project_1_tech": "Python, Pandas, Scikit-learn, Keras, Matplotlib, TensorFlow",
    "project_methods_title": "Methoden & Techniken",
    "project_1_methods": "Explorative Datenanalyse (EDA), Feature Engineering (Shannon-Entropie), Überwachte Klassifikation, Unüberwachte Anomalieerkennung (LSTM Autoencoder), Modellvergleich und Bewertung",
    "project_impact_title": "Ergebnis",
    "project_1_impact": "Entwicklung eines Echtzeit-Anomalieerkennungssystems zur Identifizierung von CAN-Bus-Angriffen (DoS, Fuzzy, Impersonation) mit hoher Genauigkeit als Grundlage für verbesserte Automobilcybersicherheit",
    "project_1_desc": "Entwicklung eines robusten Anomalieerkennungssystems für CAN-Bus-Verkehr zur Echtzeitidentifizierung bösartiger Nachrichten",
    "project_1_li_1": "Implementierung und Vergleich zweier unterschiedlicher Modelle: überwachte Klassifikation mit expertengesteutem Feature Engineering und unüberwachter LSTM-Autoencoder zur Erkennung von Zero-Day-Anomalien",
    "project_1_li_2": "Durchführung tiefgreifender explorativer Datenanalyse zur Identifizierung statistischer Unterschiede zwischen normalem und Angriffsverkehr und Validierung der Feature-Engineering-Strategie",
    "project_1_li_3": "Entwicklung von Schlüsselmerkmalen wie Shannon-Entropie zur Unterscheidung zwischen normalen CAN-Nachrichten und hochentropischen Fuzzy-Angriffen",
    "project_1_li_4": "Erfolgreiche Erkennung mehrerer Angriffstypen durch Analyse von CAN-ID-Frequenz, Zwischenankunftszeiten und Nutzlast-Eigenschaften",
    "experience_title": "Berufserfahrung",
    "experience_title_print": "Berufserfahrung",
    "exp_1_title": "Projektleiterin, Montbleu Technologies GmbH, Deutschland",
    "exp_1_date": "Aug 2021 – Feb 2025",
    "exp_1_li_1": "Leitung der Architektur und Implementierung komplexer Automobilsoftwaresysteme mit detaillierter Systemanalyse und Fehlerursachenanalyse",
    "exp_1_li_2": "Verwaltung von Multicore-Systemintegration und plattformübergreifender Kompatibilität mit systematischem Debuggen und Leistungsanalyse",
    "exp_1_li_3": "Lösung kritischer Systemprobleme durch methodisches Problemlösen und datengesteuerte Optimierungsansätze",
    "exp_1_li_4": "Lieferung hochwertiger Lösungen für Fortune-500-OEM-Kunden mit Anforderungsmanagement und Kundenerwartungen",
    "exp_2_title": "Lead Engineer, Avin Systems GmbH, Berlin",
    "exp_2_date": "Sep 2019 – Juli 2021",
    "exp_2_li_1": "Architektur von Softwarelösungen für große Automobilprojekte mit Anforderungsanalyse und Designbewertungen",
    "exp_2_li_2": "Implementierung modularer Softwarearchitektur und Integrations-Frameworks mit Analyse von Leistungsmetriken und Systemabhängigkeiten",
    "exp_2_li_3": "Mentoring von Nachwuchsingenieuren und Überprüfung komplexer technischer Lösungen zur Förderung analytischen Denkens",
    "exp_3_title": "Senior Software Engineer, KPIT Technologies GmbH, München",
    "exp_3_date": "Okt 2013 – Juni 2019",
    "exp_3_li_1": "Softwareentwicklung für führende Automobilkunden mit Integration von Hardware- und Softwarekomponenten",
    "exp_3_li_2": "Spezialisierung auf Systemdiagnostik und Kommunikationsprotokolle mit Analyse von Datenmustern und Systemverhalten",
    "exp_3_li_3": "Erstellung detaillierter technischer Dokumentation und funktionsübergreifende Zusammenarbeit für nahtlose Systemintegration",
    "tech_skills_title": "Technische Fähigkeiten",
    "tech_skills_desc_1": "Umfangreiche Erfahrung in: Python, Datenanalyse, statistische Methoden, Systemintegration, Problemlösung, Leistungsoptimierung, Git, SVN, GitHub und Test-Frameworks",
    "tech_skills_desc_2": "Funktionsübergreifende Teamleitung und Lieferung komplexer Lösungen für Enterprise-Kunden",
    "education_title": "Ausbildung",
    "edu_1_title": "Bachelor of Engineering (Instrumentierungstechnik)",
    "edu_1_desc": "B.V.B College of Engineering and Technology, Hubli, Indien",
    "edu_1_date": "September 2009 – Juni 2013",
    "certs_title": "Professionelle Entwicklung",
    "certs_details": "Abschluss umfassender Kurse in Data Science und Machine Learning mit Schwerpunkt auf Python, statistische Analyse, fortgeschrittene ML-Algorithmen, Deep Learning und praktische Anwendungen",
    "cert_1_title": "Data Science Grundlagen",
    "cert_1_li_1": "Python-Programmierung für Datenanalyse und -manipulation",
    "cert_1_li_2": "Explorative Statistik, Datenbewertung und Preprocessing",
    "cert_1_li_3": "Datenvisualisierung und Kommunikation mit Stakeholdern",
    "cert_1_li_4": "Versionskontrolle (Git, GitHub), Linux und Befehlszeilentools",
    "cert_2_title": "Machine Learning Algorithmen",
    "cert_2_li_1": "Klassifikation und Modellevaluationstechniken",
    "cert_2_li_2": "Regressionsmethoden und Prognosen",
    "cert_2_li_3": "Clustering und unüberwachtes Lernen",
    "cert_2_li_4": "Dimensionsreduktion (PCA)",
    "cert_2_li_5": "Feature Engineering und Modelloptimierung",
    "cert_2_li_6": "Zeitreihenanalyse und Anomalieerkennung",
    "cert_3_title": "Fortgeschrittenes ML und Deep Learning",
    "cert_3_li_1": "Fortgeschrittenes Machine Learning mit komplexen Modellen und Pipelines",
    "cert_3_li_2": "Deep Learning Frameworks: Keras, PyTorch, TensorFlow",
    "cert_3_li_3": "Convolutional und Recurrent Neural Networks",
    "cert_3_li_4": "Transformers und Large Language Models",
    "cert_3_li_5": "Computer Vision und Bildverarbeitung",
    "cert_3_li_6": "Modellinterpretierbarkeit und KI-Ethik",
    "cert_4_title": "Data Engineering & Deployment",
    "cert_4_li_1": "SQL-Datenbankdesign und -abfragen",
    "cert_4_li_2": "Erstellung interaktiver Anwendungen mit Streamlit",
    "cert_4_li_3": "Containerisierung mit Docker",
    "cert_4_li_4": "Cloud-Grundlagen und Deployment-Strategien",
    "cert_5_title": "Spezialisierte Anwendungen",
    "cert_5_li_1": "Best Practices für objektorientierte Programmierung",
    "cert_5_li_2": "Unit Testing und Code-Qualität",
    "cert_5_li_3": "Web Scraping und API-Integration",
    "cert_5_li_4": "Echtzeit-Datenverarbeitung",
    "cert_5_li_5": "Domänenspezifische Datenanalyse",
    "cert_6_title": "Professionelle Best Practices",
    "cert_6_li_1": "Data Science Projektmethodik und Workflow",
    "cert_6_li_2": "Verantwortungsvolle KI und ethische Überlegungen",
    "cert_6_li_3": "Technische Kommunikation und Dokumentation",
    "download_button": "Vollständigen Lebenslauf herunterladen (PDF)"
  }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Language Switching Logic ---
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

    const languageSwitcher = document.querySelector('#language-switcher');
    const dropdownItems = document.querySelectorAll('.dropdown-item[data-lang]');

    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedLang = item.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    const currentLang = savedLang || (browserLang === 'de' ? 'de' : 'en');
    setLanguage(currentLang);


    // --- PDF Generation Logic with Proper Page Breaking ---
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        const originalButtonText = translations[currentLang].download_button || 'Download Full CV (PDF)';

        downloadBtn.addEventListener('click', async () => {
            downloadBtn.disabled = true;
            downloadBtn.innerHTML = 'Generating PDF...';

            try {
                const lang = localStorage.getItem('language') || 'en';
                const trans = translations[lang];

                // Create a professional PDF layout container
                const tempDiv = document.createElement('div');
                tempDiv.id = 'pdf-temp-container';
                tempDiv.style.position = 'absolute';
                tempDiv.style.top = '-100vh';
                tempDiv.style.left = '0';
                tempDiv.style.width = '8.5in';
                tempDiv.style.padding = '0.5in 0.6in';
                tempDiv.style.backgroundColor = 'white';
                tempDiv.style.color = '#2c3e50';
                tempDiv.style.fontFamily = "Calibri, Arial, sans-serif";
                tempDiv.style.fontSize = '10pt';
                tempDiv.style.lineHeight = '1.5';
                tempDiv.style.boxSizing = 'border-box';
                tempDiv.style.minHeight = '11in';

                tempDiv.innerHTML = `
<style>
  #pdf-temp-container { 
    font-family: Calibri, Arial, sans-serif; 
    color: #2c3e50;
    width: 8.5in;
    margin: 0;
    padding: 0.5in 0.6in;
  }
  
  /* HEADER */
  .pdf-header { 
    margin-bottom: 10pt; 
    text-align: center; 
    border-bottom: 2px solid #2980b9;
    padding-bottom: 6pt;
  }
  .pdf-header-name { 
    font-size: 13pt; 
    font-weight: bold; 
    color: #1a3a52; 
    margin: 0 0 3pt 0;
  }
  .pdf-header-contact { 
    font-size: 8pt; 
    color: #666;
    margin-top: 3pt;
    line-height: 1.3;
  }
  .pdf-header-contact span { 
    display: block; 
    margin: 1pt 0;
  }
  
  /* SECTIONS */
  .pdf-section { 
    margin-bottom: 10pt; 
    page-break-inside: avoid;
  }
  .pdf-section:last-child { 
    margin-bottom: 4pt; 
  }
  
  .pdf-section h2 { 
    font-size: 10.5pt; 
    font-weight: bold; 
    color: #1a3a52; 
    text-transform: uppercase;
    margin: 8pt 0 5pt 0;
    padding-bottom: 2pt;
    border-bottom: 1px solid #2980b9;
    letter-spacing: 0.05em;
    page-break-after: avoid;
  }
  
  /* SUMMARY */
  .pdf-summary-text { 
    font-size: 9pt; 
    line-height: 1.35; 
    margin: 0;
    text-align: justify;
    page-break-inside: avoid;
  }
  
  /* EXPERIENCE & JOBS */
  .pdf-job { 
    margin-bottom: 8pt; 
    page-break-inside: avoid;
  }
  .pdf-job-title { 
    font-size: 9pt; 
    font-weight: bold; 
    color: #1a3a52; 
    margin: 0 0 1pt 0;
  }
  .pdf-job-meta { 
    font-size: 8pt; 
    color: #777; 
    margin: 0 0 3pt 0;
    font-style: italic;
  }
  .pdf-job ul { 
    margin: 3pt 0 0 0; 
    padding-left: 18pt; 
    list-style: disc;
  }
  .pdf-job li { 
    font-size: 8pt; 
    line-height: 1.25; 
    margin-bottom: 2pt;
  }
  
  /* PROJECTS */
  .pdf-project-item { 
    margin-bottom: 8pt; 
    page-break-inside: avoid;
  }
  .pdf-project-title { 
    font-size: 9pt; 
    font-weight: bold; 
    color: #1a3a52; 
    margin: 0 0 3pt 0;
  }
  .pdf-project-list { 
    margin: 0; 
    padding-left: 18pt; 
    list-style: disc;
  }
  .pdf-project-list li {
    font-size: 8pt;
    line-height: 1.25;
    margin-bottom: 1pt;
  }
  
  /* SKILLS & CATEGORIES */
  .pdf-skill-group { 
    margin-bottom: 6pt; 
    page-break-inside: avoid;
  }
  .pdf-skill-label {
    font-size: 8pt;
    font-weight: bold;
    color: #1a3a52;
    display: inline-block;
    width: 120pt;
    vertical-align: top;
  }
  .pdf-skill-content {
    font-size: 8pt;
    color: #666;
    display: inline-block;
    width: calc(100% - 125pt);
    line-height: 1.3;
  }
  
  /* EDUCATION */
  .pdf-edu-item { 
    margin-bottom: 5pt; 
    page-break-inside: avoid;
  }
  .pdf-edu-degree { 
    font-size: 8pt; 
    font-weight: bold; 
    color: #1a3a52; 
    margin: 0;
  }
  .pdf-edu-school { 
    font-size: 8pt; 
    margin: 0;
    color: #666;
  }
  .pdf-edu-date { 
    font-size: 7.5pt; 
    color: #999;
    margin: 0;
  }
  
  /* CERTIFICATIONS */
  .pdf-cert-item { 
    margin-bottom: 6pt; 
    page-break-inside: avoid;
  }
  .pdf-cert-category-title { 
    font-size: 8pt; 
    font-weight: bold; 
    color: #1a3a52;
    margin-bottom: 2pt;
  }
  .pdf-cert-list {
    font-size: 8pt;
    margin: 0;
    padding-left: 18pt;
    list-style: disc;
    line-height: 1.25;
  }
  .pdf-cert-list li {
    margin-bottom: 1pt;
  }
  
  /* PAGE BREAK SUPPORT */
  @media print {
    .pdf-section { page-break-inside: avoid; }
    .pdf-job { page-break-inside: avoid; }
    .pdf-project-item { page-break-inside: avoid; }
    .pdf-cert-item { page-break-inside: avoid; }
  }
</style>

<!-- HEADER -->
<div class="pdf-header">
  <div class="pdf-header-name">${trans.name}</div>
  <div class="pdf-header-contact">
    <span>${trans.email}: sravani.hvenkata@gmail.com</span>
    <span>${trans.linkedin}: linkedin.com/in/sravani-hukumathi-venkata-750591110</span>
    <span>${trans.github}: github.com/sravanihvenkata-blip</span>
  </div>
</div>

<!-- SUMMARY -->
<div class="pdf-section">
  <h2>${trans.summary_title}</h2>
  <p class="pdf-summary-text">${trans.summary_text_short}</p>
</div>

<!-- EXPERIENCE -->
<div class="pdf-section">
  <h2>${trans.experience_title_print}</h2>
  
  <div class="pdf-job">
    <div class="pdf-job-title">${trans.exp_1_title}</div>
    <div class="pdf-job-meta">${trans.exp_1_date}</div>
    <ul>
      <li>${trans.exp_1_li_1}</li>
      <li>${trans.exp_1_li_2}</li>
      <li>${trans.exp_1_li_3}</li>
      <li>${trans.exp_1_li_4}</li>
    </ul>
  </div>

  <div class="pdf-job">
    <div class="pdf-job-title">${trans.exp_2_title}</div>
    <div class="pdf-job-meta">${trans.exp_2_date}</div>
    <ul>
      <li>${trans.exp_2_li_1}</li>
      <li>${trans.exp_2_li_2}</li>
      <li>${trans.exp_2_li_3}</li>
    </ul>
  </div>

  <div class="pdf-job">
    <div class="pdf-job-title">${trans.exp_3_title}</div>
    <div class="pdf-job-meta">${trans.exp_3_date}</div>
    <ul>
      <li>${trans.exp_3_li_1}</li>
      <li>${trans.exp_3_li_2}</li>
      <li>${trans.exp_3_li_3}</li>
    </ul>
  </div>
</div>

<!-- PROJECTS -->
<div class="pdf-section">
  <h2>${trans.projects_title}</h2>
  
  <div class="pdf-project-item">
    <div class="pdf-project-title">${trans.project_1_title}</div>
    <ul class="pdf-project-list">
      <li><b>${trans.project_tech_title}:</b> ${trans.project_1_tech}</li>
      <li><b>${trans.project_methods_title}:</b> ${trans.project_1_methods}</li>
      <li><b>${trans.project_impact_title}:</b> ${trans.project_1_impact}</li>
    </ul>
  </div>
</div>

<!-- SKILLS -->
<div class="pdf-section">
  <h2>${trans.skills_title}</h2>
  
  <div class="pdf-skill-group">
    <span class="pdf-skill-label">${trans.skills_cat_prog}</span>
    <span class="pdf-skill-content">${trans.skills_prog_lang_details}</span>
  </div>
  
  <div class="pdf-skill-group">
    <span class="pdf-skill-label">${trans.skills_cat_ml}</span>
    <span class="pdf-skill-content">${trans.skills_ml_details}</span>
  </div>
  
  <div class="pdf-skill-group">
    <span class="pdf-skill-label">${trans.skills_cat_dl}</span>
    <span class="pdf-skill-content">${trans.skills_dl_details}</span>
  </div>
  
  <div class="pdf-skill-group">
    <span class="pdf-skill-label">${trans.skills_cat_tools}</span>
    <span class="pdf-skill-content">${trans.skills_tools_details}</span>
  </div>
  
  <div class="pdf-skill-group">
    <span class="pdf-skill-label">${trans.skills_cat_other}</span>
    <span class="pdf-skill-content">${trans.skills_other_details}</span>
  </div>
</div>

<!-- EDUCATION -->
<div class="pdf-section">
  <h2>${trans.education_title}</h2>
  
  <div class="pdf-edu-item">
    <div class="pdf-edu-degree">${trans.edu_1_title}</div>
    <div class="pdf-edu-school">${trans.edu_1_desc}</div>
    <div class="pdf-edu-date">${trans.edu_1_date}</div>
  </div>
</div>

<!-- PROFESSIONAL DEVELOPMENT -->
<div class="pdf-section">
  <h2>${trans.certs_title}</h2>
  
  <div class="pdf-cert-item">
    <div class="pdf-cert-category-title">${trans.cert_1_title}</div>
    <ul class="pdf-cert-list">
      <li>${trans.cert_1_li_1}</li>
      <li>${trans.cert_1_li_2}</li>
      <li>${trans.cert_1_li_3}</li>
      <li>${trans.cert_1_li_4}</li>
    </ul>
  </div>

  <div class="pdf-cert-item">
    <div class="pdf-cert-category-title">${trans.cert_2_title}</div>
    <ul class="pdf-cert-list">
      <li>${trans.cert_2_li_1}</li>
      <li>${trans.cert_2_li_2}</li>
      <li>${trans.cert_2_li_3}</li>
      <li>${trans.cert_2_li_4}</li>
      <li>${trans.cert_2_li_5}</li>
      <li>${trans.cert_2_li_6}</li>
    </ul>
  </div>

  <div class="pdf-cert-item">
    <div class="pdf-cert-category-title">${trans.cert_3_title}</div>
    <ul class="pdf-cert-list">
      <li>${trans.cert_3_li_1}</li>
      <li>${trans.cert_3_li_2}</li>
      <li>${trans.cert_3_li_3}</li>
      <li>${trans.cert_3_li_4}</li>
      <li>${trans.cert_3_li_5}</li>
      <li>${trans.cert_3_li_6}</li>
    </ul>
  </div>

  <div class="pdf-cert-item">
    <div class="pdf-cert-category-title">${trans.cert_4_title}</div>
    <ul class="pdf-cert-list">
      <li>${trans.cert_4_li_1}</li>
      <li>${trans.cert_4_li_2}</li>
      <li>${trans.cert_4_li_3}</li>
      <li>${trans.cert_4_li_4}</li>
    </ul>
  </div>

  <div class="pdf-cert-item">
    <div class="pdf-cert-category-title">${trans.cert_5_title}</div>
    <ul class="pdf-cert-list">
      <li>${trans.cert_5_li_1}</li>
      <li>${trans.cert_5_li_2}</li>
      <li>${trans.cert_5_li_3}</li>
      <li>${trans.cert_5_li_4}</li>
      <li>${trans.cert_5_li_5}</li>
    </ul>
  </div>

  <div class="pdf-cert-item">
    <div class="pdf-cert-category-title">${trans.cert_6_title}</div>
    <ul class="pdf-cert-list">
      <li>${trans.cert_6_li_1}</li>
      <li>${trans.cert_6_li_2}</li>
      <li>${trans.cert_6_li_3}</li>
    </ul>
  </div>
</div>
                `;

                document.body.appendChild(tempDiv);

                // Wait for rendering
                await new Promise(resolve => setTimeout(resolve, 1000));

                console.log('Capturing ATS-friendly PDF layout');

                // Capture with html2canvas
                const canvas = await html2canvas(tempDiv, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: 'white',
                    logging: false,
                    proxy: null,
                    removeContainer: false,
                    windowHeight: tempDiv.scrollHeight,
                    imageTimeout: 0
                });

                console.log('Canvas created:', canvas.width, 'x', canvas.height);

                // Generate PDF with proper page management
                const { jsPDF } = window.jspdf;
                
                const pageWidth = 8.5;
                const pageHeight = 11;
                const margin = 0.4;
                const contentWidth = pageWidth - (margin * 2);
                
                // Get canvas dimensions
                const imgData = canvas.toDataURL('image/png');
                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;
                
                // Calculate scaled image height
                const scaledImgHeight = (canvasHeight * contentWidth) / canvasWidth;
                const usablePageHeight = pageHeight - (margin * 2);
                const numPages = Math.ceil(scaledImgHeight / usablePageHeight);
                
                console.log('Image will be', scaledImgHeight, 'inches tall');
                console.log('Pages needed:', numPages);

                // Create PDF
                const pdf = new jsPDF({
                    orientation: 'p',
                    unit: 'in',
                    format: 'letter'
                });

                // Add image pages
                for (let pageNum = 0; pageNum < numPages; pageNum++) {
                    if (pageNum > 0) {
                        pdf.addPage();
                    }
                    
                    // Calculate which portion of the image to display on this page
                    const sourceY = (pageNum * canvasHeight * usablePageHeight) / scaledImgHeight;
                    const sourceHeight = Math.min(
                        canvasHeight - sourceY,
                        (canvasHeight * usablePageHeight) / scaledImgHeight
                    );
                    
                    // Create temporary canvas with this page's content
                    const tempCanvas = document.createElement('canvas');
                    tempCanvas.width = canvasWidth;
                    tempCanvas.height = sourceHeight;
                    
                    const tempCtx = tempCanvas.getContext('2d');
                    tempCtx.fillStyle = 'white';
                    tempCtx.fillRect(0, 0, canvasWidth, sourceHeight);
                    tempCtx.drawImage(
                        canvas,
                        0, sourceY,
                        canvasWidth, sourceHeight,
                        0, 0,
                        canvasWidth, sourceHeight
                    );
                    
                    // Convert to image and add to PDF
                    const pageImageData = tempCanvas.toDataURL('image/png');
                    const pageImageHeight = (sourceHeight * contentWidth) / canvasWidth;
                    
                    pdf.addImage(
                        pageImageData,
                        'PNG',
                        margin,
                        margin,
                        contentWidth,
                        pageImageHeight
                    );
                }

                // Save PDF
                pdf.save('Sravani_Venkata_CV.pdf');

                console.log('PDF saved successfully');

                // Cleanup
                document.body.removeChild(tempDiv);
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = originalButtonText;

            } catch (error) {
                console.error('Error during PDF generation:', error);
                alert('Error: ' + error.message);
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = originalButtonText;
            }
        });
    }
});
