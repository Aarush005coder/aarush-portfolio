/* ==========================================================
   SINGLE SOURCE OF TRUTH — add/remove sirf yahan
   - projects array me object add karo -> card auto-render
   - array khali [] -> section auto-hide
   - numbering (02, 03...) auto-calculate hoti hai
========================================================== */
export const PORTFOLIO = {
  profile: {
    name: "Aarush Khandelwal",
    tagline: ["Software engineer building intelligent products", "at the intersection of software, AI and data."],
    intro: "I build reliable software, machine-learning systems, and data-driven products—from computer vision applications to AI-powered experiences.",
    chips: ["AI & Data Science", "Software Engineering", "Jodhpur, India"],
    status: "Open to opportunities",
    note: ["Turning complex problems", "into simple, scalable systems."],
    graph: ["Code", "Data", "Intelligence", "Product"],
  },

  links: {
    github: "https://github.com/Aarush005coder",
    linkedin: "https://www.linkedin.com/in/aarush-khandelwal-1b99a7320/",
    resume: "https://drive.google.com/file/d/1S_J9svU68gm0WQqe_IZNr98mx37qmhAs/view?usp=sharing",
    email: "mailto:khandelwalaarush2@gmail.com",
    emailText: "khandelwalaarush2@gmail.com",
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

   /* ---------- FEATURED PROJECTS (side-by-side, add/remove yahan) ---------- */
  featured: [
    {
      label: "Find Blur",
      title: "Know before you post.",
      description:
        "A computer-vision application that combines Laplacian Variance and FFT-based frequency analysis to detect image blur and classify images as Sharp, Borderline, or Blurry — with configurable sensitivity and confidence scoring.",
      tags: ["Python", "OpenCV", "Streamlit", "NumPy", "Pandas", "FFT"],
      columns: [
        { heading: "Problem", text: "Detect image blur reliably before publishing." },
        { heading: "Approach", text: "Laplacian variance + FFT frequency-domain analysis + configurable thresholds." },
        { heading: "Output", text: "Sharp · Borderline · Blurry + CSV export" },
      ],
      demoUrl: "https://findblur-hvflnggfs2adoxzgy26wvg.streamlit.app/",
      githubUrl: "https://github.com/Aarush005coder/FindBlur",
      mockup: {
        type: "findblur",
        images: ["images/FindBlur_image1", "images/FindBlur_image2"],
        appName: "FindBlur",
        appTag: "Know before you post.",
        samples: [
          { label: "Sharp", tone: "green" },
          { label: "Borderline", tone: "yellow" },
          { label: "Blurry", tone: "red" },
        ],
      },
    },
    {
      label: "Quill",
      title: "One workspace, every language.",
      description:
        "A multilingual translation & productivity workspace — text, speech and document translation with speech-to-text/text-to-speech, automated language detection, PDF/Word/Excel conversion, JWT/OAuth auth, favorites and real-time activity history.",
      tags: ["React", "TypeScript", "Tailwind", "Django", "Python", "PostgreSQL"],
      columns: [
        { heading: "Problem", text: "Scattered tools for translation and document conversion." },
        { heading: "Approach", text: "Unified full-stack workspace with JWT/OAuth auth and real-time history." },
        { heading: "Output", text: "Text · Speech · Document translation + conversions" },
      ],
      demoUrl: "https://quill-one-sandy.vercel.app/",   // Quill live demo (Vercel) link yahan
      githubUrl: "https://github.com/Aarush005coder/Quill", // Quill repo link yahan
      mockup: {
        type: "quill",
        image: "images/Quill_image",
        appName: "Quill",
        appTag: "Translation & productivity workspace.",
      },
    },
    {
      label: "Geo Vision",
      title: "Where on Earth was this?",
      description:
        "An AlexNet-inspired deep CNN that transforms image geolocation into a regression problem — predicting latitude and longitude directly from visual features like landscape, vegetation, architecture and lighting, with coordinates normalized to [0,1] and a sigmoid output head.",
      tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"],
      columns: [
        { heading: "Problem",  text: "Geolocate a photo with zero metadata — pixels only." },
        { heading: "Approach", text: "AlexNet-style CNN adapted for regression: 2 output neurons, sigmoid, GlobalAvgPooling, early stopping + LR scheduling." },
        { heading: "Output",   text: "Predicted lat/lon · Val MAE ≈ 0.14 on 1001 geotagged images." },
      ],
      demoUrl: "",   // Kaggle notebook / demo link yahan daalna
      githubUrl: "https://github.com/Aarush005coder/Geo-Location-CNN-Project", // GeoVision repo link yahan daalna
      mockup: {
        type: "geovision",
        images: ["images/GeoVision_image1", "images/GeoVision_image2"],
        appName: "GeoVision",
        appTag: "Image-based geolocation predictor.",
      },
    },
  ],

  /* ---------- OTHER NOTABLE PROJECTS (chhote cards; abhi khali = section hide) ---------- */
  projects: [],

  /* ---------- 03 / PLATFORMS (auto-scroll marquee) ---------- */
  /* logo = original brand mark. Chaaho to local file bhi de sakte ho:
     logo: "images/leetcode.png" (public/images me rakho) */
  platforms: {
    intro: "I actively practice and solve problems on various platforms to strengthen my DSA, problem-solving and coding skills.",
    items: [
      { 
        name: "LeetCode", logo: "https://cdn.simpleicons.org/leetcode/FFA116",
        desc: "Solved 100+ problems, covering arrays, trees, dynamic programming, graphs and more.",
        stats: [["400+", "Problems Solved"], ["Medium · Hard", "Difficulty Range"]],
        url: "https://leetcode.com/u/Aarush_khandelwal/" 
      },
      { 
        name: "HackerRank", logo: "https://www.google.com/s2/favicons?sz=128&domain=hackerrank.com",
        desc: "Practiced coding challenges and participated in contests to improve speed and accuracy.",
        stats: [["50+", "Problems Solved"], ["Easy · Medium", "Difficulty Range"]],
        url: "https://www.hackerrank.com/profile/khandelwalaarus1" 
      },
      {
        name: "Codolio",
        logo: "https://www.google.com/s2/favicons?sz=128&domain=codolio.com",
        desc: "A unified coding profile that combines activity from multiple platforms, showing solved problems, coding progress, and overall problem-solving status in one place.",
        stats: [["Multi-Platform", "Coding Profile"], ["Progress", "Overall Status"]],
        url: "https://codolio.com/profile/Aarush_Kh"
      },
      { 
        name: "LinkedIn", logo: "https://www.google.com/s2/favicons?sz=128&domain=linkedin.com",
        desc: "Built my professional presence, showcased projects and connected with the tech community.",
        stats: [["Projects", "Showcased"], ["Professional", "Network"]],
        url: "https://www.linkedin.com/in/aarush-khandelwal-1b99a7320/" 
      },
      { 
        name: "GitHub", logo: "https://www.google.com/s2/favicons?sz=128&domain=github.com",
        desc: "Maintain DSA repositories, projects and contribute to open source when possible.",
        stats: [["500+", "Commits"], ["Repositories", "& Projects"]],
        url: "https://github.com/Aarush005coder" 
      },
      { 
        name: "InterviewBit", logo: "https://www.google.com/s2/favicons?sz=128&domain=interviewbit.com",
        desc: "Practiced company-specific questions and mock interviews to prepare for placements.",
        stats: [["30+", "Problems Solved"], ["Practice", "Tests"]],
        url: "https://www.interviewbit.com/profile/aarush-khandelwal/" 
      },
      { 
        name: "GeeksforGeeks", logo: "https://www.google.com/s2/favicons?sz=128&domain=geeksforgeeks.org",
        desc: "Learned core concepts, algorithms and data structures through structured practice.",
        stats: [["50+", "Problems Solved"], ["DSA · Algo", "Topics"]],
        url: "https://www.geeksforgeeks.org/profile/khandelwalaarush005?tab=activity" 
      },
      { 
        name: "CodeChef", logo: "https://www.google.com/s2/favicons?sz=128&domain=codechef.com",
        desc: "Participated in contests and solved competitive programming problems.",
        stats: [["10+", "Contests"], ["Rating", "If available"]],
        url: "https://www.codechef.com/users/aarush_kh" 
      },
      { 
        name: "CodeStudio", logo: "https://cdn.simpleicons.org/codingninjas/1F6BFF",
        desc: "Practiced coding, took assessments and worked on real-world problem statements.",
        stats: [["10+", "Problems Solved"], ["Projects", "& Assessments"]],
        url: "https://codestudio.pro/dashboard" 
      },
      { 
        name: "Kaggle", logo: "https://www.google.com/s2/favicons?sz=128&domain=kaggle.com",
        desc: "Explored datasets, built ML models and worked on data analysis projects.",
        stats: [["10+", "Notebooks"], ["Datasets", "Explored"]],
        url: "https://www.kaggle.com/aarushkhandelwal" 
      },
    ],
  },

  stackIntro: "From algorithmic problem solving to machine-learning systems and production-facing interfaces.",

  /* ---------- SKILLS (original brand logos ke saath) ---------- */
  skills: [
    { icon: "code", title: "Languages", items: [
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "SQL / MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    ]},
    { icon: "brain", title: "AI / ML & LLM Frameworks", items: [
      { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "LangChain", logos: [
        "https://cdn.simpleicons.org/langchain/1C3C3C",
        "https://www.google.com/s2/favicons?sz=128&domain=langchain.com",
        "https://www.google.com/s2/favicons?sz=128&domain=python.langchain.com",
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg",
      ]},
      { name: "LangGraph", logos: [
        "https://cdn.simpleicons.org/langgraph/1C3C3C",
        "https://langchain-ai.github.io/langgraph/site_icon.svg",
        "https://raw.githubusercontent.com/langchain-ai/langgraph/main/docs/docs/site_icon.svg",
        "https://raw.githubusercontent.com/langchain-ai/langgraph/main/docs/site_icon.svg",
        "https://langchain-ai.github.io/langgraph/favicon.ico",
      ]},
    ]},
    { icon: "chart", title: "Data Science & Visualization", items: [
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
      { name: "Seaborn", logo: "https://www.google.com/s2/favicons?sz=128&domain=seaborn.pydata.org" },
      { name: "Plotly", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg" },
      { name: "SciPy", logo: "https://www.google.com/s2/favicons?sz=128&domain=scipy.org" },
    ]},
    { icon: "gear", title: "Web & Backend", items: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
    ]},
    { icon: "db", title: "Data & BI Tools", items: [
      { name: "Power BI", tint: "#F2C811", logos: [
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/powerbi.svg",
        "https://raw.githubusercontent.com/microsoft/powerbi-icons/main/PNG/PowerBI.png",
      ]},
      { name: "Tableau", logo: "https://www.google.com/s2/favicons?sz=128&domain=tableau.com" },
      { name: "Excel", logos: [
        "https://cdn.simpleicons.org/microsoftexcel/217346",
        "https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg",
      ]},
    ]},
    { icon: "box", title: "Developer Tools", items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
      { name: "Kaggle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg" },
    ]},
        { icon: "book", title: "Core CS", items: [
      { name: "DSA", icon: "tree", color: "#2E8B57" },
      { name: "OOP", icon: "blocks", color: "#E53935" },
      { name: "Operating Systems", icon: "monitor", color: "#1E88E5" },
      { name: "Discrete Mathematics", icon: "sigma", color: "#8E24AA" },
      { name: "Data Modeling", icon: "database", color: "#F4511E" }
    ]},
    { icon: "users", title: "Soft Skills", items: [
      { name: "Problem Solving", icon: "puzzle", color: "#FBC02D" },
      { name: "Analytical Thinking", icon: "brain", color: "#00ACC1" },
      { name: "Team Collaboration", icon: "handshake", color: "#3949AB" },
      { name: "Time Management", icon: "clock", color: "#E53935" }
    ]},
  ],

  mindset: [
    { icon: "bulb",     accent: "#D97706", title: "Problem Solving",      text: "DSA, algorithms, optimization, complexity." },
    { icon: "sparkles", accent: "#7C3AED", title: "Machine Intelligence", text: "ML, deep learning, computer vision, NLP, LLMs." },
    { icon: "box",      accent: "#2563EB", title: "Product Engineering",  text: "Frontend, backend, APIs, databases, deployment." },
    { icon: "db",       accent: "#059669", title: "Data",                 text: "Analysis, visualization, experimentation, insights." },
  ],

  /* ---------- EXPERIENCE (resume se) ---------- */
  experience: [
    {
      period: "2026",
      role: "AI & Data Science Intern",
      company: "Programmates · Jaipur",
      description:
        "Developed FindBlur — a computer-vision app combining Laplacian Variance and FFT-based frequency analysis to classify images as Sharp/Borderline/Blurry with confidence scoring. Implemented single-image, batch and live-camera analysis with visual diagnostics and CSV export; deployed on Streamlit Community Cloud.",
      certImage: "images/certs/programmates-certificate",
      tags: ["Python", "OpenCV", "Streamlit", "Pandas"],
    },
    {
      period: "2025",
      role: "Software Developer Intern",
      company: "Bluestock Fintech · Pune",
      description:
        "Developed an IPO web application and REST API integrated with Bluestock's mobile app. Built responsive front-end interfaces with React and backend services in Python and C++ for scalable, data-driven solutions.",
      certImage: "images/certs/bluestock-certificate",
      tags: ["React", "Python", "C++", "REST APIs"],
    },
  ],

  /* ---------- 07 / CERTIFICATES (images public/images/certs/ me daalo) ---------- */
  certificates: [
    { name: "Machine Learning Bootcamp", issuer: "YHills", tag: "Bootcamp",
      image: "images/certs/ml-bootcamp-yhills", url: "" },
    { name: "iCAT Participation", issuer: "Internship Common Aptitude Test", tag: "Aptitude",
      image: "images/certs/icat-participation", url: "" },
    { name: "IEEE Summer of Code", issuer: "IEEE", tag: "Open Source",
      image: "images/certs/ieee-summer-of-code", url: "" },
    { name: "Code Crackdown Participation", issuer: "Amity University", tag: "Participation",
      image: "images/certs/code-crackdown", url: "" },
    { name: "HP Power Lab 2.0", issuer: "HP", tag: "Program",
      image: "images/certs/hp-power-lab", url: "" },
    { name: "PVG Hackhub", issuer: "PVG Hackhub", tag: "Hackathon",
      image: "images/certs/pvg-hackhub", url: "" },
    { name: "Drone Technology Workshop", issuer: "PM-USHA", tag: "Workshop",
      image: "images/certs/drone-workshop", url: "" },
    { name: "Solution Challenge", issuer: "Google Developer Groups (GDG) on Campus", tag: "Challenge",
      image: "images/certs/gdg-solution-challenge", url: "" },
    { name: "HACKSAGON 2026 — Ideation Phase", issuer: "ABV-IIITM IEEE Student Branch", tag: "Hackathon",
      image: "images/certs/hacksagon-2026", url: "" },
    { name: "AINCAT 2026 Participation", issuer: "Naukri Campus · India's Biggest Career Aptitude Test", tag: "Aptitude",
      image: "images/certs/aincat-2026", url: "" },
    { name: "TechQuezt #34: AI in the Real World", issuer: "Naukri Campus", tag: "Quiz",
      image: "images/certs/techquezt-34", url: "" },
  ],

  about: {
    heading: "Behind the code.",
    paragraphs: [
      "I'm Aarush — a B.E. undergraduate in Artificial Intelligence & Data Science at MBM University, Jodhpur (2023–2027, CGPA 8.0).",
      "I enjoy building AI-driven products end-to-end — from computer-vision models and REST APIs to polished, production-facing interfaces.",
    ],
    facts: [
      { k: "Location", v: "Jodhpur, Rajasthan" },
      { k: "Education", v: "B.E. AI & DS · MBM University · 2023–27" },
      { k: "Focus", v: "AI · Computer Vision · Full-Stack" },
      { k: "Phone", v: "+91 8955194332" },
    ],
  },

  contact: {
    heading: "Let's build something intelligent together.",
    text: "Open to internships, collaborations and full-time roles in AI/ML and software engineering.",
  },
};