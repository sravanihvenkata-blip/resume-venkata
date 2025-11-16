const translations = {
  en: {
    "title": "Sravani H. Venkata - Data Scientist",
    "name": "Sravani H. Venkata",
    "tagline": "Aspiring Data Scientist with a background in Automotive Software Development",
    "email": "Email",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "summary_title": "Summary",
    "summary_text": "A seasoned embedded systems engineer with a decade of experience in the automotive industry, specializing in AUTOSAR, diagnostics, and communication protocols. Leveraging my robust embedded systems background and hands-on Python experience, I am now focusing on applying my analytical and problem-solving skills in the field of data science and machine learning. Passionate about leveraging data to solve complex problems, with a strong foundation in Python, machine learning, and data analysis. Eager to apply newly acquired skills in a challenging data science role.",
    "summary_text_short": "A seasoned embedded systems engineer with a decade of experience, now transitioning into data science. Leveraging a strong background in Python and complex systems to solve data-driven problems.",
    "skills_title": "Skills",
    "skills_cat_prog": "Programming Languages",
    "skills_prog_lang_details": "Python (OOP, Unit Testing)",
    "skills_cat_ml": "Machine Learning & Data Analysis",
    "skills_ml_details": "Classification, Regression, Clustering, Dimensionality Reduction (PCA), Feature Engineering, Time Series Analysis, Anomaly Detection, Exploratory Statistics, Data Visualization",
    "skills_cat_dl": "Deep Learning",
    "skills_dl_details": "Keras, PyTorch, TensorFlow, CNNs, DNNs, Transformers, LLMs, Computer Vision (OpenCV)",
    "skills_cat_tools": "Tools & Platforms",
    "skills_tools_details": "Git, GitHub, Linux Command Line, Docker, Streamlit, Virtual Machines, AWS (basics)",
    "skills_cat_other": "Other Skills",
    "skills_other_details": "Data APIs, Web Scraping (BeautifulSoup), SQL",
    "ds_libs_details": "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Plotly",
    "projects_title": "Data Science Projects",
    "project_1_title": "CAN Bus Anomaly Detection",
    "project_tech_title": "Technologies",
    "project_1_tech": "Python, Pandas, Scikit-learn, Keras, Matplotlib",
    "project_methods_title": "Methods",
    "project_1_methods": "EDA, Supervised Classification, Unsupervised Anomaly Detection (LSTM Autoencoder), Feature Engineering (Shannon Entropy).",
    "project_impact_title": "Impact",
    "project_1_impact": "Developed a system to detect various CAN bus attacks (DoS, Fuzzy, Impersonation) in real-time, providing a foundation for enhanced automotive cybersecurity.",
    "project_1_desc": "Developed a robust anomaly detection system for Controller Area Network (CAN) bus traffic to identify malicious messages in real-time.",
    "project_1_li_1": "Implemented and compared two distinct models: a supervised classification model with expert-driven feature engineering and an unsupervised LSTM Autoencoder for detecting zero-day anomalies.",
    "project_1_li_2": "Performed in-depth Exploratory Data Analysis (EDA) to identify statistical differences between normal and attack traffic, validating the feature engineering strategy.",
    "project_1_li_3": "Engineered key features like Shannon Entropy to effectively distinguish between normal, structured CAN messages and high-entropy \"Fuzzy\" attacks.",
    "project_1_li_4": "Demonstrated the ability to detect various attack types, including DoS, Fuzzy, and Impersonation attacks, by analyzing CAN ID frequency, inter-arrival times, and payload characteristics.",
    "experience_title": "Professional Experience (Last 10 Years: Automotive Embedded Systems)",
    "experience_title_print": "Professional Experience",
    "exp_1_title": "Project Lead, Montbleu Technologies GmbH, Germany",
    "exp_1_date": "Aug 2021 – Feb 2025",
    "exp_1_li_1": "Led adaptation and configuration of AUTOSAR MCAL for new automotive hardware platforms.",
    "exp_1_li_2": "Implemented multicore support, XCP over Ethernet and CAN, and customized bootloaders.",
    "exp_1_li_3": "Oversaw SBC and watchdog functionality implementation, and resolved complex system-level issues.",
    "exp_1_li_4": "Delivered high-quality solutions for OEM clients including Stellantis and Vector Informatik.",
    "exp_2_title": "Lead Engineer, Avin Systems GmbH, Berlin",
    "exp_2_date": "Sep 2019 – July 2021",
    "exp_2_li_1": "Managed a Battery Management System project for Mercedes-Benz, steering software architecture and application SWC development.",
    "exp_2_li_2": "Configured diagnostic stacks and base software modules (AUTOSAR-compliant).",
    "exp_2_li_3": "Mentored junior engineers, ensuring code quality through thorough reviews.",
    "exp_3_title": "Senior Software Engineer, KPIT Technologies GmbH, Munich",
    "exp_3_date": "Oct 2013 – June 2019",
    "exp_3_li_1": "Developed embedded automotive software for clients like Continental AG, ZF-TRW, and OEMs such as BMW.",
    "exp_3_li_2": "Specialized in diagnostics and communication protocols (FlexRay, CAN, LIN), bootloader configuration, and hardware/software integration.",
    "exp_3_li_3": "Authored detailed software designs and collaborated with hardware teams for seamless system integration.",
    "tech_skills_title": "Technical Skills Highlight (Embedded Systems)",
    "tech_skills_desc_1": "<b>Extensive experience in:</b> Embedded C, Python, diagnostics stack, CAN, FlexRay, LIN, UDS, Ethernet, MCAL software architecture, configuration tools (Davinci, AUTOSAR Builder, EB Tresos), versioning (SVN, JIRA, GitHub), and test automation (CANoe, CAPL, VectorCast, CANape).",
    "tech_skills_desc_2": "Led cross-functional teams and delivered complex software solutions for leading automotive OEMs.",
    "education_title": "Education",
    "edu_1_title": "Bachelor of Engineering (Instrumentation Technology)",
    "edu_1_desc": "B.V.B College of Engineering and Technology, Hubli, India",
    "edu_1_date": "September 2009 – June 2013",
    "certs_title": "Certifications & Continuous Learning",
    "certs_details": "Completed extensive coursework in Data Science and Machine Learning, covering topics from Python programming, data analysis, and visualization to advanced deep learning models, computer vision, and NLP.",
    "cert_1_title": "Core Data Science and Machine Learning Knowledge",
    "cert_1_li_1": "Fundamentals of Python programming for data analysis",
    "cert_1_li_2": "Exploratory statistics, data quality assessment, and data preprocessing",
    "cert_1_li_3": "Data visualization using Matplotlib, Seaborn, and optionally Plotly",
    "cert_1_li_4": "Experience with Linux command line, Git & GitHub version control, and virtual machine setup",
    "cert_2_title": "Machine Learning Skills",
    "cert_2_li_1": "Classification algorithms and model evaluation",
    "cert_2_li_2": "Regression methods and their applications",
    "cert_2_li_3": "Clustering techniques for unsupervised learning",
    "cert_2_li_4": "Dimensionality reduction (PCA and related methods)",
    "cert_2_li_5": "Feature engineering and optimization best practices",
    "cert_2_li_6": "Time series analysis and forecasting",
    "cert_3_title": "Advanced ML Topics",
    "cert_3_li_1": "Advanced Machine Learning (complex models, model pipelines)",
    "cert_3_li_2": "Anomaly detection techniques",
    "cert_3_li_3": "Ethics and interpretability in AI projects",
    "cert_3_li_4": "Reinforcement learning (optional)",
    "cert_3_li_5": "Introduction to Deep Learning with Keras and PyTorch",
    "cert_3_li_6": "Computer vision (OpenCV), DNNs (Keras), CNNs, and TensorFlow (optional)",
    "cert_3_li_7": "Transformers, LLMs, and agent-based ML (NLP focus)",
    "cert_4_title": "Data Engineering & APIs",
    "cert_4_li_1": "SQL database querying and management",
    "cert_4_li_2": "Building interactive data applications with Streamlit",
    "cert_4_li_3": "Principles of data APIs and Docker for deployment",
    "cert_4_li_4": "AWS cloud basics (optional)",
    "cert_5_title": "Other Technical Skills",
    "cert_5_li_1": "Object oriented programming in Python (optional)",
    "cert_5_li_2": "Unit testing and code quality practices (optional)",
    "cert_5_li_3": "Web scraping with BeautifulSoup (optional)",
    "cert_5_li_4": "Graph theory and network analysis (optional)",
    "cert_5_li_5": "Applied data science for financial datasets (optional)",
    "cert_6_title": "Professional Development & Best Practices",
    "cert_6_li_1": "Methodology and workflow in data science projects",
    "cert_6_li_2": "Ethics, interpretability, and responsible AI practices",
    "cert_6_li_3": "Preparation for technical interviews and tests",
    "download_button": "Download Full CV (PDF)"
  },
  de: {
    "title": "Sravani H. Venkata - Datenwissenschaftlerin",
    "name": "Sravani H. Venkata",
    "tagline": "Angehende Datenwissenschaftlerin mit Hintergrund in der Automotive-Softwareentwicklung",
    "email": "E-Mail",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "summary_title": "Zusammenfassung",
    "summary_text": "Eine erfahrene Ingenieurin für eingebettete Systeme mit einem Jahrzehnt Erfahrung in der Automobilindustrie, spezialisiert auf AUTOSAR, Diagnose und Kommunikationsprotokolle. Ich nutze meinen robusten Hintergrund in eingebetteten Systemen und meine praktische Python-Erfahrung, um meine analytischen und problemlösenden Fähigkeiten nun im Bereich der Datenwissenschaft und des maschinellen Lernens anzuwenden. Leidenschaftlich daran interessiert, Daten zur Lösung komplexer Probleme zu nutzen, mit einer starken Grundlage in Python, maschinellem Lernen und Datenanalyse. Bestrebt, neu erworbene Fähigkeiten in einer anspruchsvollen Rolle als Datenwissenschaftlerin anzuwenden.",
    "summary_text_short": "Erfahrene Ingenieurin für eingebettete Systeme mit einem Jahrzehnt Erfahrung, jetzt im Übergang zur Datenwissenschaft. Nutzt einen starken Hintergrund in Python und komplexen Systemen, um datengesteuerte Probleme zu lösen.",
    "skills_title": "Fähigkeiten",
    "skills_cat_prog": "Programmiersprachen",
    "skills_prog_lang_details": "Python (OOP, Unit Testing)",
    "skills_cat_ml": "Maschinelles Lernen & Datenanalyse",
    "skills_ml_details": "Klassifikation, Regression, Clustering, Dimensionsreduktion (PCA), Feature Engineering, Zeitreihenanalyse, Anomalieerkennung, Explorative Statistik, Datenvisualisierung",
    "skills_cat_dl": "Deep Learning",
    "skills_dl_details": "Keras, PyTorch, TensorFlow, CNNs, DNNs, Transformers, LLMs, Computer Vision (OpenCV)",
    "skills_cat_tools": "Tools & Plattformen",
    "skills_tools_details": "Git, GitHub, Linux-Kommandozeile, Docker, Streamlit, Virtuelle Maschinen, AWS (Grundlagen)",
    "skills_cat_other": "Weitere Fähigkeiten",
    "skills_other_details": "Daten-APIs, Web Scraping (BeautifulSoup), SQL",
    "ds_libs_details": "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Plotly",
    "projects_title": "Data-Science-Projekte",
    "project_1_title": "CAN-Bus-Anomalieerkennung",
    "project_tech_title": "Technologien",
    "project_1_tech": "Python, Pandas, Scikit-learn, Keras, Matplotlib",
    "project_methods_title": "Methoden",
    "project_1_methods": "EDA, Überwachte Klassifikation, Unüberwachte Anomalieerkennung (LSTM Autoencoder), Feature Engineering (Shannon-Entropie).",
    "project_impact_title": "Ergebnis",
    "project_1_impact": "Entwicklung eines Systems zur Echtzeit-Erkennung verschiedener CAN-Bus-Angriffe (DoS, Fuzzy, Impersonation) als Grundlage für eine verbesserte Cybersicherheit im Automobilbereich.",
    "project_1_desc": "Entwicklung eines robusten Anomalieerkennungssystems für den Controller Area Network (CAN)-Busverkehr zur Identifizierung bösartiger Nachrichten in Echtzeit.",
    "project_1_li_1": "Implementierung und Vergleich von zwei unterschiedlichen Modellen: ein überwachtes Klassifikationsmodell mit expertengesteuertem Feature Engineering und ein unüberwachter LSTM-Autoencoder zur Erkennung von Zero-Day-Anomalien.",
    "project_1_li_2": "Durchführung einer tiefgehenden explorativen Datenanalyse (EDA) zur Identifizierung statistischer Unterschiede zwischen normalem und Angriffsverkehr, um die Feature-Engineering-Strategie zu validieren.",
    "project_1_li_3": "Entwicklung von Schlüsselmerkmalen wie der Shannon-Entropie, um effektiv zwischen normalen, strukturierten CAN-Nachrichten und \"Fuzzy\"-Angriffen mit hoher Entropie zu unterscheiden.",
    "project_1_li_4": "Demonstration der Fähigkeit, verschiedene Angriffstypen wie DoS-, Fuzzy- und Impersonation-Angriffe durch Analyse der CAN-ID-Frequenz, der Zwischenankunftszeiten und der Nutzlast-Eigenschaften zu erkennen.",
    "experience_title": "Berufserfahrung (Letzte 10 Jahre: Eingebettete Automotive-Systeme)",
    "experience_title_print": "Berufserfahrung",
    "exp_1_title": "Projektleiterin, Montbleu Technologies GmbH, Deutschland",
    "exp_1_date": "Aug 2021 – Feb 2025",
    "exp_1_li_1": "Leitung der Anpassung und Konfiguration von AUTOSAR MCAL für neue automobile Hardwareplattformen.",
    "exp_1_li_2": "Implementierung von Multicore-Unterstützung, XCP über Ethernet und CAN sowie kundenspezifischen Bootloadern.",
    "exp_1_li_3": "Überwachung der Implementierung von SBC- und Watchdog-Funktionen sowie Lösung komplexer systemweiter Probleme.",
    "exp_1_li_4": "Lieferung hochwertiger Lösungen für OEM-Kunden wie Stellantis und Vector Informatik.",
    "exp_2_title": "Lead Engineer, Avin Systems GmbH, Berlin",
    "exp_2_date": "Sep 2019 – Juli 2021",
    "exp_2_li_1": "Leitung eines Batteriemanagementsystem-Projekts für Mercedes-Benz, Steuerung der Softwarearchitektur und Entwicklung von Anwendungs-SWCs.",
    "exp_2_li_2": "Konfiguration von Diagnosestapeln und Basissoftwaremodulen (AUTOSAR-konform).",
    "exp_2_li_3": "Betreuung von Nachwuchsingenieuren, Sicherstellung der Codequalität durch gründliche Überprüfungen.",
    "exp_3_title": "Senior Software Engineer, KPIT Technologies GmbH, München",
    "exp_3_date": "Okt 2013 – Juni 2019",
    "exp_3_li_1": "Entwicklung von eingebetteter Automotive-Software für Kunden wie Continental AG, ZF-TRW und OEMs wie BMW.",
    "exp_3_li_2": "Spezialisierung auf Diagnose- und Kommunikationsprotokolle (FlexRay, CAN, LIN), Bootloader-Konfiguration und Hardware/Software-Integration.",
    "exp_3_li_3": "Erstellung detaillierter Software-Designs und Zusammenarbeit mit Hardware-Teams für eine nahtlose Systemintegration.",
    "tech_skills_title": "Technische Fähigkeiten im Fokus (Eingebettete Systeme)",
    "tech_skills_desc_1": "<b>Umfassende Erfahrung in:</b> Embedded C, Python, Diagnosestapel, CAN, FlexRay, LIN, UDS, Ethernet, MCAL-Softwarearchitektur, Konfigurationstools (Davinci, AUTOSAR Builder, EB Tresos), Versionierung (SVN, JIRA, GitHub) und Testautomatisierung (CANoe, CAPL, VectorCast, CANape).",
    "tech_skills_desc_2": "Leitung funktionsübergreifender Teams und Lieferung komplexer Softwarelösungen für führende Automobil-OEMs.",
    "education_title": "Ausbildung",
    "edu_1_title": "Bachelor of Engineering (Instrumentierungstechnik)",
    "edu_1_desc": "B.V.B College of Engineering and Technology, Hubli, Indien",
    "edu_1_date": "September 2009 – Juni 2013",
    "certs_title": "Zertifizierungen & kontinuierliches Lernen",
    "certs_details": "Abschluss umfangreicher Kurse in Datenwissenschaft und maschinellem Lernen, die Themen von der Python-Programmierung, Datenanalyse und -visualisierung bis hin zu fortgeschrittenen Deep-Learning-Modellen, Computer Vision und NLP abdecken.",
    "cert_1_title": "Kernwissen über Datenwissenschaft und maschinelles Lernen",
    "cert_1_li_1": "Grundlagen der Python-Programmierung für Datenanalyse",
    "cert_1_li_2": "Explorative Statistik, Datenbewertung und Datenvorverarbeitung",
    "cert_1_li_3": "Datenvisualisierung mit Matplotlib, Seaborn und optional Plotly",
    "cert_1_li_4": "Erfahrung mit Linux-Kommandozeile, Git & GitHub-Versionskontrolle und Virtual-Machine-Setup",
    "cert_2_title": "Fähigkeiten im maschinellen Lernen",
    "cert_2_li_1": "Klassifikationsalgorithmen und Modellbewertung",
    "cert_2_li_2": "Regressionsmethoden und ihre Anwendungen",
    "cert_2_li_3": "Clustering-Techniken für unüberwachtes Lernen",
    "cert_2_li_4": "Dimensionsreduktion (PCA und verwandte Methoden)",
    "cert_2_li_5": "Feature Engineering und Best Practices der Optimierung",
    "cert_2_li_6": "Zeitreihenanalyse und Prognosen",
    "cert_3_title": "Fortgeschrittene ML-Themen",
    "cert_3_li_1": "Fortgeschrittenes Machine Learning (komplexe Modelle, Modell-Pipelines)",
    "cert_3_li_2": "Anomalieerkennungstechniken",
    "cert_3_li_3": "Ethik und Interpretierbarkeit in KI-Projekten",
    "cert_3_li_4": "Reinforcement Learning (optional)",
    "cert_3_li_5": "Einführung in Deep Learning mit Keras und PyTorch",
    "cert_3_li_6": "Computer Vision (OpenCV), DNNs (Keras), CNNs und TensorFlow (optional)",
    "cert_3_li_7": "Transformers, LLMs und agentbasiertes ML (NLP-Fokus)",
    "cert_4_title": "Data Engineering & APIs",
    "cert_4_li_1": "SQL-Datenbankabfragen und -verwaltung",
    "cert_4_li_2": "Erstellung interaktiver Datenanwendungen mit Streamlit",
    "cert_4_li_3": "Prinzipien von Daten-APIs und Docker für Deployment",
    "cert_4_li_4": "AWS-Cloud-Grundlagen (optional)",
    "cert_5_title": "Andere technische Fähigkeiten",
    "cert_5_li_1": "Objektorientierte Programmierung in Python (optional)",
    "cert_5_li_2": "Unit-Tests und Code-Qualitätspraktiken (optional)",
    "cert_5_li_3": "Web Scraping mit BeautifulSoup (optional)",
    "cert_5_li_4": "Graphentheorie und Netzwerkanalyse (optional)",
    "cert_5_li_5": "Angewandte Datenwissenschaft für Finanzdatensätze (optional)",
    "cert_6_title": "Berufliche Entwicklung & Best Practices",
    "cert_6_li_1": "Methodik und Workflow in Datenwissenschaftsprojekten",
    "cert_6_li_2": "Ethik, Interpretierbarkeit und verantwortungsvolle KI-Praktiken",
    "cert_6_li_3": "Vorbereitung auf technische Interviews und Tests",
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


    // --- PDF Generation Logic (Professional Two-Column Layout v2) ---
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
                tempDiv.style.minHeight = '11in';
                tempDiv.style.padding = '0.75in 0.7in';
                tempDiv.style.backgroundColor = 'white';
                tempDiv.style.color = '#2c3e50';
                tempDiv.style.fontFamily = "Calibri, Arial, sans-serif";
                tempDiv.style.fontSize = '10pt';
                tempDiv.style.lineHeight = '1.5';
                tempDiv.style.boxSizing = 'border-box';

                tempDiv.innerHTML = `
<style>
  #pdf-temp-container { font-family: Calibri, Arial, sans-serif; color: #2c3e50; }
  
  /* HEADER */
  .pdf-header { margin-bottom: 12pt; text-align: center; }
  .pdf-header-name { 
    font-size: 16pt; 
    font-weight: bold; 
    color: #1a3a52; 
    margin: 0 0 6pt 0;
    letter-spacing: 0.02em;
  }
  .pdf-header-line { 
    height: 1.5px; 
    background-color: #2980b9; 
    margin: 6pt 0;
    width: 100%;
  }
  .pdf-header-contact { 
    font-size: 9pt; 
    color: #555;
    margin-top: 6pt;
    line-height: 1.5;
    text-align: center;
  }
  .pdf-header-contact span { 
    display: inline; 
  }
  .pdf-header-contact span::after {
    content: ' | ';
    color: #2980b9;
    margin: 0 6pt;
  }
  .pdf-header-contact span:last-child::after {
    content: '';
    margin: 0;
  }
  
  /* TWO COLUMN LAYOUT */
  .pdf-main { display: flex; gap: 16pt; margin-top: 10pt; }
  .pdf-sidebar { 
    width: 28%;
    flex-shrink: 0;
    border-right: 1.5px solid #e8eef5;
    padding-right: 12pt;
  }
  .pdf-content { width: 72%; }
  
  /* SECTIONS */
  .pdf-section { margin-bottom: 10pt; }
  .pdf-section:first-of-type { margin-top: 0; }
  .pdf-section:last-child { margin-bottom: 0; }
  
  .pdf-section h2 { 
    font-size: 10.5pt; 
    font-weight: bold; 
    color: #1a3a52; 
    text-transform: uppercase;
    margin: 6pt 0 8pt 0;
    padding-bottom: 5pt;
    border-bottom: 1.5px solid #2980b9;
    letter-spacing: 0.07em;
  }
  
  /* SIDEBAR CONTENT */
  .pdf-skills { margin-bottom: 12pt; }
  .pdf-skill-category { margin-bottom: 7pt; }
  .pdf-skill-category-title { 
    font-size: 8.5pt; 
    font-weight: bold; 
    color: #2980b9;
    text-transform: uppercase;
    margin-bottom: 3pt;
    letter-spacing: 0.04em;
  }
  .pdf-skill-item { 
    font-size: 8.5pt; 
    margin-bottom: 2pt;
    line-height: 1.3;
  }
  
  .pdf-education { }
  .pdf-edu-item { margin-bottom: 9pt; }
  .pdf-edu-degree { font-size: 9pt; font-weight: bold; color: #1a3a52; margin: 0 0 2pt 0; }
  .pdf-edu-school { font-size: 8.5pt; margin: 0 0 2pt 0; color: #555; }
  .pdf-edu-date { font-size: 8pt; font-style: italic; color: #999; margin: 0; }
  
  /* SIDEBAR CERT SUMMARY */
  .pdf-cert-summary { margin-bottom: 6pt; }
  .pdf-cert-summary-item {
    font-size: 8pt;
    margin-bottom: 2pt;
    color: #555;
    line-height: 1.3;
  }
  
  /* MAIN CONTENT */
  .pdf-summary { margin-bottom: 10pt; }
  .pdf-summary-text { font-size: 9pt; line-height: 1.35; text-align: justify; margin: 0; }
  
  .pdf-job { margin-bottom: 8pt; }
  .pdf-job-title { 
    font-size: 9pt; 
    font-weight: bold; 
    color: #1a3a52; 
    margin: 0 0 1pt 0;
  }
  .pdf-job-meta { 
    font-size: 8pt; 
    font-style: italic; 
    color: #888; 
    margin: 0 0 3pt 0;
  }
  .pdf-job ul { margin: 0; padding: 0; list-style: none; }
  .pdf-job li { 
    font-size: 8.5pt; 
    line-height: 1.3; 
    margin-bottom: 2pt;
    padding-left: 12pt;
    position: relative;
  }
  .pdf-job li::before { 
    content: '◾'; 
    position: absolute; 
    left: 0; 
    color: #2980b9;
    font-size: 7pt;
  }
  
  .pdf-project-item { margin-bottom: 10pt; }
  .pdf-project-title { font-size: 9pt; font-weight: bold; color: #1a3a52; margin: 0 0 4pt 0; }
  .pdf-project-list { margin: 0; padding: 0; list-style: none; }
  .pdf-project-list li {
    font-size: 8.5pt;
    line-height: 1.3;
    margin-bottom: 2pt;
    padding-left: 12pt;
    position: relative;
  }
  .pdf-project-list li::before {
    content: '◾';
    position: absolute;
    left: 0;
    color: #2980b9;
  }
  
  .pdf-cert-category { margin-bottom: 8pt; page-break-inside: avoid; }
  .pdf-cert-category-title { font-size: 9pt; font-weight: bold; color: #1a3a52; margin: 0 0 4pt 0; }
  .pdf-cert ul { margin: 0; padding: 0; list-style: none; }
  .pdf-cert li {
    font-size: 8pt;
    line-height: 1.25;
    margin-bottom: 1pt;
    padding-left: 12pt;
    position: relative;
  }
  .pdf-cert li::before {
    content: '◾';
    position: absolute;
    left: 0;
    color: #2980b9;
    font-size: 7pt;
  }
</style>

<!-- HEADER -->
<div class="pdf-header">
  <div class="pdf-header-name">${trans.name}</div>
  <div class="pdf-header-line"></div>
  <div class="pdf-header-contact">
    <span>${trans.email}: sravani.hvenkata@gmail.com</span>
    <span>${trans.linkedin}: linkedin.com/in/sravani-hukumathi-venkata-750591110</span>
    <span>${trans.github}: github.com/sravanihvenkata-blip</span>
  </div>
</div>

<!-- MAIN CONTENT - TWO COLUMN -->
<div class="pdf-main">
  <!-- LEFT SIDEBAR -->
  <div class="pdf-sidebar">
    <!-- SKILLS -->
    <div class="pdf-section">
      <h2>${trans.skills_title}</h2>
      
      <div class="pdf-skill-category">
        <div class="pdf-skill-category-title">${trans.skills_cat_prog}</div>
        <div class="pdf-skill-item">${trans.skills_prog_lang_details}</div>
      </div>
      
      <div class="pdf-skill-category">
        <div class="pdf-skill-category-title">${trans.skills_cat_ml}</div>
        <div class="pdf-skill-item">${trans.skills_ml_details}</div>
      </div>
      
      <div class="pdf-skill-category">
        <div class="pdf-skill-category-title">${trans.skills_cat_dl}</div>
        <div class="pdf-skill-item">${trans.skills_dl_details}</div>
      </div>
      
      <div class="pdf-skill-category">
        <div class="pdf-skill-category-title">${trans.skills_cat_tools}</div>
        <div class="pdf-skill-item">${trans.skills_tools_details}</div>
      </div>
      
      <div class="pdf-skill-category">
        <div class="pdf-skill-category-title">${trans.skills_cat_other}</div>
        <div class="pdf-skill-item">${trans.skills_other_details}</div>
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

    <!-- CERTIFICATIONS SUMMARY (sidebar) -->
    <div class="pdf-section">
      <h2>${trans.certs_title}</h2>
      <div class="pdf-cert-summary">
        <div class="pdf-cert-summary-item"><b>${trans.cert_1_title}</b></div>
        <div class="pdf-cert-summary-item"><b>${trans.cert_2_title}</b></div>
        <div class="pdf-cert-summary-item"><b>${trans.cert_3_title}</b></div>
        <div class="pdf-cert-summary-item"><b>${trans.cert_4_title}</b></div>
        <div class="pdf-cert-summary-item"><b>${trans.cert_5_title}</b></div>
        <div class="pdf-cert-summary-item"><b>${trans.cert_6_title}</b></div>
      </div>
    </div>
  </div>

  <!-- RIGHT CONTENT -->
  <div class="pdf-content">
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

    <!-- CONTINUOUS LEARNING (detailed, right column) -->
    <div class="pdf-section">
      <h2>Continuous Learning & Development</h2>
      
      <div class="pdf-cert-category">
        <div class="pdf-cert-category-title">${trans.cert_1_title}</div>
        <ul class="pdf-cert">
          <li>${trans.cert_1_li_1}</li>
          <li>${trans.cert_1_li_2}</li>
          <li>${trans.cert_1_li_3}</li>
          <li>${trans.cert_1_li_4}</li>
        </ul>
      </div>

      <div class="pdf-cert-category">
        <div class="pdf-cert-category-title">${trans.cert_2_title}</div>
        <ul class="pdf-cert">
          <li>${trans.cert_2_li_1}</li>
          <li>${trans.cert_2_li_2}</li>
          <li>${trans.cert_2_li_3}</li>
          <li>${trans.cert_2_li_4}</li>
          <li>${trans.cert_2_li_5}</li>
          <li>${trans.cert_2_li_6}</li>
        </ul>
      </div>

      <div class="pdf-cert-category">
        <div class="pdf-cert-category-title">${trans.cert_3_title}</div>
        <ul class="pdf-cert">
          <li>${trans.cert_3_li_1}</li>
          <li>${trans.cert_3_li_2}</li>
          <li>${trans.cert_3_li_3}</li>
          <li>${trans.cert_3_li_4}</li>
          <li>${trans.cert_3_li_5}</li>
          <li>${trans.cert_3_li_6}</li>
          <li>${trans.cert_3_li_7}</li>
        </ul>
      </div>

      <div class="pdf-cert-category">
        <div class="pdf-cert-category-title">${trans.cert_4_title}</div>
        <ul class="pdf-cert">
          <li>${trans.cert_4_li_1}</li>
          <li>${trans.cert_4_li_2}</li>
          <li>${trans.cert_4_li_3}</li>
          <li>${trans.cert_4_li_4}</li>
        </ul>
      </div>

      <div class="pdf-cert-category">
        <div class="pdf-cert-category-title">${trans.cert_5_title}</div>
        <ul class="pdf-cert">
          <li>${trans.cert_5_li_1}</li>
          <li>${trans.cert_5_li_2}</li>
          <li>${trans.cert_5_li_3}</li>
          <li>${trans.cert_5_li_4}</li>
          <li>${trans.cert_5_li_5}</li>
        </ul>
      </div>

      <div class="pdf-cert-category">
        <div class="pdf-cert-category-title">${trans.cert_6_title}</div>
        <ul class="pdf-cert">
          <li>${trans.cert_6_li_1}</li>
          <li>${trans.cert_6_li_2}</li>
          <li>${trans.cert_6_li_3}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
                `;

                document.body.appendChild(tempDiv);

                // Wait for rendering
                await new Promise(resolve => setTimeout(resolve, 800));

                console.log('Capturing professional PDF layout');

                // Capture with html2canvas
                const canvas = await html2canvas(tempDiv, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: 'white',
                    logging: false,
                    proxy: null,
                    removeContainer: false,
                    windowHeight: tempDiv.scrollHeight
                });

                console.log('Canvas created:', canvas.width, 'x', canvas.height);

                // Generate PDF
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF('p', 'in', 'letter');

                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();
                const margin = 0.35;
                const contentWidth = pageWidth - (margin * 2);
                const contentHeight = (canvas.height * contentWidth) / canvas.width;

                const imgData = canvas.toDataURL('image/png');
                
                // Add pages with proper pagination
                let heightLeft = contentHeight;
                let position = 0;

                pdf.addImage(imgData, 'PNG', margin, margin, contentWidth, contentHeight);
                heightLeft -= pageHeight - (margin * 2);

                while (heightLeft > 0) {
                    pdf.addPage();
                    position = heightLeft - contentHeight;
                    pdf.addImage(imgData, 'PNG', margin, position + margin, contentWidth, contentHeight);
                    heightLeft -= pageHeight - (margin * 2);
                }

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
