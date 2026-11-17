export interface SiteData {
  name: string;
  url: string;
  title: string;
  description: string;
  tagline: string;
  studentsTrained: string;
  address: string;
  phone: string;
  geo: {
    lat: number;
    lng: number;
    region: string;
    placename: string;
  };
  keywords: string[];
  ogImage: string;
  analytics: string[];
  programs: {
    JRP: string;
    IOP: string;
  };
  deliveryModes: string[];
}

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseProject {
  area: string;
  description: string;
}

export interface CourseFAQ {
  q: string;
  a: string;
}

export interface CourseHeroInfo {
  tagline: string;
  badges: string[];
  subtext: string;
  ctaText: string;
}

export interface Course {
  slug: string;
  aliases?: string[];
  h1: string;
  subtitle: string;
  seoTitle?: string;
  metaDescription: string;
  keywords: string[];
  heroInfo: CourseHeroInfo;
  durationHours: number | null;
  modules: CourseModule[] | null;
  tools: string[];
  projects: CourseProject[] | null;
  careerRoles: string[] | null;
  syllabusPdf: string | null;
  faqs: CourseFAQ[] | null;
}

export const siteData: SiteData = {
  name: "Vinsup Skill Academy",
  url: "https://www.vinsupskillacademy.com/",
  title: "Vinsup Skill Academy | Best IT & Digital Marketing Training Institute in Coimbatore",
  description:
    "Career-focused, AI-integrated training in Coimbatore: Data Science & Generative AI, Data Analytics, MERN Stack, UI/UX Design and Digital Marketing with live projects, internship and placement support. 25,000+ students trained.",
  tagline: "Career-focused, AI-integrated training",
  studentsTrained: "25,000+",
  address: "148, A B Gopalsamy Koil Street, Sridevi Nagar, Ganapathy, Coimbatore, Tamil Nadu 641006",
  phone: "+91-8248826374",
  geo: {
    lat: 11.036361,
    lng: 76.97409,
    region: "IN-TN",
    placename: "Coimbatore",
  },
  keywords: [
    "software training institute in coimbatore",
    "IT training institute coimbatore",
    "best institute in coimbatore with placement",
    "data science course coimbatore",
    "digital marketing course coimbatore",
    "full stack course coimbatore",
    "ui ux course coimbatore",
  ],
  ogImage: "https://www.vinsupskillacademy.com/og/vinsup-skill-academy.jpg",
  analytics: ["Google Tag Manager GTM-KTHG586H", "Google Tag Manager GTM-P8XLGSBW"],
  programs: {
    JRP: "Job Readiness Program: soft skills, aptitude, portfolio, internship support, AI mock interviews, resume help",
    IOP: "Interview Opportunity Program: guaranteed interview opportunities",
  },
  deliveryModes: ["Classroom (Ganapathy campus)", "Online"],
};

export const coursesData: Course[] = [
  {
    slug: "devstack-engineer",
    aliases: ["devstack-fullstack-devops"],
    h1: "Devstack Engineer course in Coimbatore",
    subtitle:
      "Full stack web development with React, Node.js, MongoDB and DevOps tools like Git, Docker and Jenkins.",
    seoTitle: "Devstack Engineer Course in Coimbatore | Full Stack & DevOps | Vinsup",
    metaDescription:
      "Devstack Engineer full stack + DevOps course in Coimbatore covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git, Docker and Jenkins, with project based learning, expert mentorship, and hands-on internship.",
    keywords: [
      "devstack engineer course coimbatore",
      "full stack developer course coimbatore",
      "devops course coimbatore",
      "full stack with devops training coimbatore",
      "software training institute coimbatore",
    ],
    heroInfo: {
      tagline: "Learn What No One's Teaching",
      badges: ["Project Based Learning", "Expert Mentorship", "Hands on Internship"],
      subtext: "Click to unlock your job-ready future!",
      ctaText: "Grab Your Seat",
    },
    durationHours: null,
    modules: null,
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "Docker",
      "Jenkins",
    ],
    projects: null,
    careerRoles: [
      "Full Stack Developer",
      "DevOps Engineer",
      "Backend Developer",
      "Frontend Developer",
    ],
    syllabusPdf: null,
    faqs: [
      {
        q: "What is the Devstack Engineer course in Coimbatore?",
        a: "A comprehensive program combining full stack web development (React, Node.js, Express, MongoDB) with essential modern DevOps tools (Git, Docker, Jenkins), live project learning, and internship placement.",
      },
      {
        q: "Who can enroll in the Devstack Engineer course?",
        a: "Freshers, engineering students, and IT professionals aiming to master full stack engineering and cloud DevOps practices.",
      },
    ],
  },
  {
    slug: "data-verse-pro",
    h1: "Data Verse Pro: Data Science with Gen AI course in Coimbatore",
    subtitle:
      "A progression from Excel and SQL through machine learning and deep learning to generative AI.",
    seoTitle: "Data Verse Pro Course in Coimbatore | Data Science & Generative AI | Vinsup",
    metaDescription:
      "A 200-hour Data Science and Generative AI course covering Python, SQL, Power BI, machine learning, deep learning, NLP, LLMs, RAG and AI agents, with real-time projects, expert mentorship, and hands-on internship.",
    keywords: [
      "data verse pro coimbatore",
      "data science course in coimbatore",
      "data science training coimbatore",
      "generative ai course coimbatore",
      "machine learning course coimbatore",
      "AI course coimbatore",
      "data science institute coimbatore with placement",
    ],
    heroInfo: {
      tagline: "Excel to AI in One Powerful Journey !",
      badges: ["Real Time Projects", "Expert Mentorship", "Hands on Internship"],
      subtext: "Click to Unlock Your Job-Ready Future !",
      ctaText: "Enroll Now",
    },
    durationHours: 200,
    modules: [
      {
        title: "Foundations",
        topics: ["Data Science Landscape and Lifecycle", "Environment Setup"],
      },
      {
        title: "Excel for Data Analysis",
        topics: [
          "Excel Basics",
          "Data Entry and Formatting",
          "Formulas and Functions",
          "Lookup and Logical Functions",
          "Data Cleaning and Power Query",
          "Pivot Tables and Pivot Charts",
          "Charts and Excel Dashboards",
          "Advanced Excel",
          "Excel Project",
        ],
      },
      {
        title: "SQL for Data Analysis",
        topics: [
          "Database Concepts and Setup",
          "Querying Data",
          "Aggregates and Grouping",
          "Joins",
          "Set Operations and Subqueries",
          "CTEs and Advanced Subqueries",
          "Window Functions",
          "DDL, DML, Constraints and Normalisation",
          "Views",
          "Indexes and Optimisation",
          "SQL Project",
        ],
      },
      {
        title: "Power BI",
        topics: [
          "Power BI Introduction and Data Connection",
          "Power Query Transformations",
          "Data Modelling",
          "DAX Basics",
          "DAX Time Intelligence and Advanced DAX",
          "Visuals and Report Design",
          "Power BI Service",
          "Publishing and Security",
          "Power BI Project",
        ],
      },
      {
        title: "Python for Data Analysis",
        topics: [
          "Python Basics",
          "Control Flow and Loops",
          "Functions, Modules and Comprehensions",
          "Data Structures",
          "File Handling",
          "Errors and OOP Basics",
          "NumPy: Arrays and Operations",
          "NumPy: Broadcasting and Simulation",
          "Pandas: Series and DataFrames",
          "Pandas: Data Cleaning",
          "Pandas: GroupBy, Merge and Reshape",
          "Pandas: Time Series and Advanced",
          "Matplotlib",
          "Seaborn",
          "EDA Project",
          "Data Acquisition: APIs and Web Scraping",
          "Python Project",
        ],
      },
      {
        title: "Looker Studio & Tableau",
        topics: [
          "Looker Studio Basics",
          "Looker Studio Advanced",
          "Dashboard Design and Data Storytelling",
          "Tableau Basics",
          "Tableau Advanced",
          "Tableau Dashboard Design and Publishing",
        ],
      },
      {
        title: "Statistics and Math for ML",
        topics: [
          "Descriptive Statistics",
          "Probability, Distributions and Central Limit Theorem",
          "Sampling",
          "Confidence Intervals and Hypothesis Testing",
        ],
      },
      {
        title: "Machine Learning",
        topics: [
          "ML Introduction and Workflow",
          "Preprocessing and Feature Engineering",
          "Linear Regression",
          "Regularisation and Regression Metrics",
          "Logistic Regression",
          "Classification Metrics and Class Imbalance",
          "KNN and Naive Bayes",
          "Decision Trees",
          "Random Forest and Bagging",
          "Boosting",
          "Support Vector Machines",
          "Clustering and PCA",
          "Model Selection, Tuning and Pipelines",
          "ML Projects",
        ],
      },
      {
        title: "Deep Learning",
        topics: [
          "Neural Network Fundamentals",
          "Keras, TensorFlow and PyTorch Basics",
          "Training Deep Networks",
          "Convolutional Neural Networks",
          "Computer Vision: Transfer Learning",
          "RNN, LSTM and Time-Series Forecasting",
          "Deep Learning Project",
        ],
      },
      {
        title: "Natural Language Processing",
        topics: [
          "Text Preprocessing",
          "Bag of Words and TF-IDF",
          "Word Embeddings and Text Classification",
          "Transformers and Attention",
          "Hugging Face for NLP",
          "NLP Project",
        ],
      },
      {
        title: "Generative AI",
        topics: [
          "LLM Fundamentals",
          "Prompt Engineering",
          "LLM APIs and Local Models",
          "Embeddings and Vector Databases",
          "RAG: Build a Pipeline",
          "RAG: Evaluation and Improvement",
          "Fine-Tuning Walkthrough",
          "AI Agents: Tools and Function Calling",
          "AI Agents: LangGraph, MCP and Multi-Agent",
          "GenAI Apps and Responsible AI",
        ],
      },
      {
        title: "Deployment and MLOps",
        topics: [
          "Deploying Models with FastAPI and Streamlit Cloud",
          "Docker and Cloud Deployment",
          "MLOps Basics",
        ],
      },
      {
        title: "Capstone and Career Guidance",
        topics: [
          "Capstone Strategy",
          "Data and Modelling",
          "Capstone Build and Deploy",
          "Capstone Documentation",
          "Portfolio and Case Study",
          "Presentation and Career Guidance",
        ],
      },
    ],
    tools: [
      "Excel",
      "Google Sheets",
      "MySQL",
      "Power BI",
      "Looker Studio",
      "Tableau",
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "SciPy",
      "Statsmodels",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Hugging Face Transformers",
      "Streamlit",
      "LangChain",
      "LangGraph",
      "MLflow",
      "Ollama",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Copilot",
      "Perplexity",
      "Cursor",
      "AI2SQL",
      "Text2SQL.ai",
      "Julius",
      "Mockaroo",
    ],
    projects: [
      {
        area: "Capstone",
        description:
          "End-to-end BI to AI product: one business problem from raw data through SQL/Excel cleaning, Python analysis, BI dashboard, ML or GenAI model, to a deployed, documented app",
      },
      {
        area: "Customer Churn Prediction",
        description:
          "Full ML classification pipeline: preprocessing, model comparison, tuning, evaluation",
      },
      {
        area: "Image Classifier",
        description:
          "Fine-tuned CNN on a public dataset using a pretrained backbone",
      },
      {
        area: "Product Review Analyser (NLP)",
        description:
          "Sentiment, topic and summary extraction with Hugging Face pipelines",
      },
      {
        area: "Document Q&A Bot (RAG)",
        description: "Retrieval-augmented chatbot over uploaded documents",
      },
      {
        area: "Deployed ML Model API",
        description:
          "Model served via FastAPI, containerised, deployed to a free cloud tier",
      },
    ],
    careerRoles: [
      "Data Analyst",
      "Junior Data Scientist",
      "BI Analyst",
      "Machine Learning Engineer",
      "GenAI / AI Engineer",
      "Data Science Trainee",
    ],
    syllabusPdf:
      "https://www.vinsupskillacademy.com/brochures/vinsup-ai-data-science-career-accelerator-syllabus.pdf",
    faqs: [
      {
        q: "Which is the best data science course in Coimbatore for freshers?",
        a: "A 200-hour classroom and online program at the Ganapathy campus, from Excel and SQL to ML, deep learning, NLP and generative AI, with five mini projects, a capstone, internship and placement support.",
      },
      {
        q: "Does this data science course cover Generative AI, RAG and AI agents?",
        a: "Yes. Module 11 covers LLM fundamentals, prompt engineering, LLM APIs and local models (Ollama), vector databases, RAG, a fine-tuning walkthrough and agents with function calling, LangGraph and MCP.",
      },
      {
        q: "Do I need coding knowledge to join?",
        a: "No. Python, SQL and statistics are taught from scratch. For students, fresh graduates, career switchers and non-IT learners.",
      },
      { q: "What tools will I learn?", a: "See the tools list." },
      {
        q: "What projects will I build?",
        a: "A capstone plus mini projects in churn prediction, image classification, NLP review analysis, RAG Q&A bot and a deployed FastAPI model.",
      },
      {
        q: "Is placement support included?",
        a: "Yes, through JRP and IOP: soft skills, aptitude, portfolio, internship support, AI mock interviews, resume help, guaranteed interviews.",
      },
      {
        q: "What jobs can I get after this course?",
        a: "Data Analyst, Junior Data Scientist, BI Analyst, entry-level ML Engineer, entry-level GenAI/AI Engineer, Data Science Trainee.",
      },
      {
        q: "Where are the classes held?",
        a: "At the Ganapathy, Coimbatore campus. Online sessions are also available.",
      },
    ],
  },
  {
    slug: "data-analytics",
    h1: "Data Analytics course in Coimbatore",
    subtitle: "Upgrade Your Skills. Unlock High-Demand Jobs with Excel, SQL, Power BI & Python.",
    seoTitle: "Data Analytics Course in Coimbatore | Excel, SQL, Power BI & Python | Vinsup",
    metaDescription:
      "Job-focused data analytics course covering advanced Excel and VBA, MySQL, Power BI with advanced DAX, Looker Studio, Python and AI tools, with hands on training, expert mentorship, live project internship and placement support.",
    keywords: [
      "data analytics course in coimbatore",
      "data analyst course coimbatore",
      "power bi training coimbatore",
      "sql course coimbatore",
      "excel training coimbatore",
      "business analytics course coimbatore",
    ],
    heroInfo: {
      tagline: "Upgrade Your Skills. Unlock High-Demand Jobs.",
      badges: ["Hands on Training", "Expert Mentorship", "Live Project Internship"],
      subtext: "One Click to Kickstart your Data Career !",
      ctaText: "Begin Your Journey",
    },
    durationHours: null,
    modules: [
      {
        title: "Advanced Excel and Spreadsheet Automation",
        topics: [
          "Excel basics and navigation",
          "Formulas, logic, and references",
          "Modern lookup and dynamic reference functions",
          "Data cleaning",
          "Date and text functions, dynamic arrays",
          "Pivot tables and interactive executive dashboards",
          "Macros and VBA automation basics",
        ],
      },
      {
        title: "Relational Databases and Enterprise SQL (MySQL)",
        topics: [
          "Database architecture and DDL",
          "DML, DQL, filtering, and aggregation",
          "Built-in functions and conditional logic",
          "Joins, set operations, and subqueries",
          "Window functions and normalization",
          "CTEs (standard and recursive)",
          "Views and temporary tables",
          "Transactions (TCL), security (DCL), and indexing optimization",
          "Stored procedures, functions, and triggers",
        ],
      },
      {
        title: "Power BI Enterprise Analytics and Advanced DAX",
        topics: [
          "Power BI architecture",
          "Power Query and data modeling",
          "Visualizations, interactions, and UI storyboarding",
          "DAX foundations, evaluation contexts, and calculations",
          "The CALCULATE engine, modifiers, and iterator functions",
          "Time intelligence and dynamic measures",
          "Power BI Service, governance, and row-level security",
        ],
      },
      {
        title: "Google Looker Studio (Cloud BI)",
        topics: [
          "Fundamentals and cloud connectors",
          "Interactive controls",
          "Data blending and calculated fields",
        ],
      },
      {
        title: "Python Core and Advanced Programming",
        topics: [
          "Core foundations and environment setup",
          "Control flow and advanced data structures",
          "Functions, parameters, return values, and scope",
          "Lambda functions",
          "Higher-order functions and recursion",
          "File handling and standard I/O",
        ],
      },
      {
        title: "Python Data Science Libraries",
        topics: ["NumPy", "Pandas", "Matplotlib and Seaborn"],
      },
      {
        title: "Enterprise Capstone, Coding Profiles, and Career Readiness",
        topics: [
          "Capstone project execution",
          "Competitive coding profiles (LeetCode and HackerRank)",
          "Professional portfolio",
          "ATS-friendly resume and mock interviews",
        ],
      },
    ],
    tools: [
      "Excel",
      "MySQL",
      "Power BI",
      "Looker Studio",
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "GitHub",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Copilot",
      "Perplexity",
      "AI2SQL",
      "Vanna AI",
      "Text2SQL.ai",
      "Julius",
      "Mockaroo",
      "Faker",
    ],
    projects: [
      {
        area: "Capstone (choose one)",
        description:
          "Software development and engineering analysis; pharmacy sales and stock analysis; banking transaction pattern analysis; airline passenger and route analysis; network and system performance analytics",
      },
      {
        area: "Excel",
        description: "Customer behaviour analysis",
      },
      {
        area: "SQL",
        description:
          "Relational intelligence for modern care; relational database architecture and demand intelligence for Amazon",
      },
      {
        area: "Power BI",
        description:
          "OTT and entertainment media analysis; food and beverage analysis",
      },
      {
        area: "Python",
        description:
          "Customer churn exploratory data analyzer; financial portfolio risk and scenario simulator",
      },
    ],
    careerRoles: [
      "Data Analyst",
      "BI Analyst",
      "Business Analyst",
      "Finance Analyst",
      "MIS Analyst",
      "SQL Developer",
      "Operations Analyst",
      "Marketing Analyst",
      "Product Analyst",
    ],
    syllabusPdf:
      "https://www.vinsupskillacademy.com/brochures/vinsup-ai-ready-data-analytics-syllabus.pdf",
    faqs: [
      {
        q: "Which is the best data analytics course in Coimbatore?",
        a: "Offered at the Ganapathy campus and online. Covers Excel with VBA, MySQL, Power BI with advanced DAX, Looker Studio and Python, with AI tools in every module and a placement-focused capstone.",
      },
      {
        q: "Will I learn Power BI and advanced DAX?",
        a: "Yes. A full module covers architecture, Power Query, modeling, DAX contexts, CALCULATE, iterators, time intelligence, Power BI Service, governance and row-level security.",
      },
      {
        q: "Which AI tools are included?",
        a: "ChatGPT, Claude, Gemini, Copilot, Perplexity, plus AI2SQL, Vanna AI, Text2SQL.ai, Julius, and Mockaroo/Faker for practice data.",
      },
      {
        q: "Do I need a technical background?",
        a: "No. Starts with Excel fundamentals. Open to commerce, arts, science and engineering graduates.",
      },
      {
        q: "What projects are included?",
        a: "Mini projects in Excel, SQL, Power BI and Python plus one industry capstone.",
      },
      {
        q: "Is placement assistance provided?",
        a: "Yes: soft skills, aptitude, LeetCode/HackerRank profiles, ATS resume, mock interviews, internship and guaranteed interviews via IOP.",
      },
      { q: "What jobs can I apply for?", a: "See career roles." },
    ],
  },
  {
    slug: "software-development",
    aliases: ["mern-stack"],
    h1: "Software Development course in Coimbatore",
    subtitle: "Turn Clicks into Careers with Full-Stack JavaScript & Modern AI Development.",
    seoTitle: "Software Development Course in Coimbatore | Full Stack MERN Training | Vinsup",
    metaDescription:
      "Full stack software development course covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, REST APIs, auth, CI/CD, and AI coding with project based learning, expert mentorship, and live project internship.",
    keywords: [
      "software development course in coimbatore",
      "software developer training coimbatore",
      "mern stack course in coimbatore",
      "full stack developer course coimbatore",
      "react js course coimbatore",
      "node js training coimbatore",
      "web development course coimbatore",
    ],
    heroInfo: {
      tagline: "Turn Clicks into Careers",
      badges: ["Project Based Learning", "Expert Mentorship", "Live Project Internship"],
      subtext: "One Click Closer to Your Dream Career !",
      ctaText: "Get Started Today",
    },
    durationHours: null,
    modules: [
      {
        title: "Development Environment & Version Control",
        topics: [
          "Setting Up the Developer Environment",
          "Git Version Control Fundamentals",
          "GitHub & Collaborative Workflows",
        ],
      },
      {
        title: "HTML: Structure & Semantics",
        topics: [
          "HTML Document Fundamentals",
          "Semantic HTML & Accessibility",
        ],
      },
      {
        title: "CSS: Styling & Layout",
        topics: [
          "CSS Fundamentals",
          "Modern Layout Systems",
          "Advanced CSS & Preprocessing",
        ],
      },
      {
        title: "JavaScript: Core & Advanced Programming",
        topics: [
          "JavaScript Fundamentals",
          "Data Structures & DOM Manipulation",
          "Asynchronous JavaScript",
          "Modern JavaScript (ES6+) & Modules",
        ],
      },
      {
        title: "React: Front-End Framework",
        topics: [
          "React Fundamentals",
          "State & Lifecycle with Hooks",
          "Forms, Events & Component Communication",
          "Routing & Application Structure",
          "Connecting React to APIs",
        ],
      },
      {
        title: "Node.js & Express.js: Backend Development",
        topics: [
          "Node.js Fundamentals",
          "Building Servers with Express.js",
          "Server-Side Architecture Patterns",
        ],
      },
      {
        title: "MongoDB & Mongoose: Database Layer",
        topics: [
          "MongoDB Fundamentals",
          "MongoDB Atlas & MongoDB Compass",
          "Mongoose ODM",
        ],
      },
      {
        title: "REST API Design & Development",
        topics: [
          "REST API Principles",
          "Building a Full REST API",
          "Testing & Documenting APIs with Postman",
        ],
      },
      {
        title: "Authentication & Security",
        topics: [
          "Authentication Fundamentals",
          "Implementing Auth in the MERN Stack",
          "Application Security Best Practices",
        ],
      },
      {
        title: "AI-Assisted Development Workflow",
        topics: [
          "AI Coding Assistants Landscape",
          "Cursor (AI-Native Code Editor)",
          "Cline & Blackbox AI",
          "Google Antigravity",
          "Building a Practical AI-Augmented Workflow",
        ],
      },
      {
        title: "Full-Stack Integration & Project Architecture",
        topics: [
          "Connecting the MERN Stack End-to-End",
          "State, Data Flow & Error Handling Across the Stack",
        ],
      },
      {
        title: "Deployment & DevOps Basics",
        topics: [
          "Preparing an Application for Production",
          "Deploying the Backend & Database",
          "Deploying the Frontend & CI/CD",
        ],
      },
      {
        title: "Capstone Project & Career Readiness",
        topics: [
          "Capstone MERN Application",
          "GitHub Portfolio & Technical Presentation",
          "Interview & Job Readiness",
        ],
      },
    ],
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "REST API",
      "MongoDB",
      "Mongoose",
      "MongoDB Atlas",
      "MongoDB Compass",
      "Postman",
      "Git",
      "GitHub",
      "VS Code",
      "Cursor",
      "Cline",
      "Blackbox AI",
      "Google Antigravity",
    ],
    projects: [
      {
        area: "Capstone (choose one)",
        description:
          "Multi-vendor e-commerce platform; real-time collaborative workspace & chat; learning management & course streaming system; healthcare appointment & teleconsultation portal; project management & issue tracker",
      },
      {
        area: "HTML5, Modern CSS & Tailwind",
        description: "Interactive responsive portfolio & blog",
      },
      {
        area: "Core JavaScript (ES6+)",
        description: "Vanilla JS state-driven expense tracker",
      },
      {
        area: "Async JS & Fetch API",
        description: "Interactive GitHub profile & repo finder",
      },
      {
        area: "React & Hooks",
        description: "Custom component library (design system)",
      },
      {
        area: "React State Management",
        description:
          "Cryptocurrency live tracker & watchlist (Redux/Zustand)",
      },
      {
        area: "Node.js, Express & MongoDB",
        description:
          "Scalable RESTful API for a blog engine with auth, file uploads and real-time features",
      },
    ],
    careerRoles: [
      "Software Developer",
      "Junior Frontend Developer",
      "Junior Backend Developer",
      "Full-Stack MERN Developer",
      "React.js / UI Engineer",
      "Backend / API Engineer",
      "Freelance MERN Developer",
    ],
    syllabusPdf:
      "https://www.vinsupskillacademy.com/brochures/vinsup-ai-integrated-mern-stack-syllabus.pdf",
    faqs: [
      {
        q: "Which is the best software development / MERN course in Coimbatore?",
        a: "Covers HTML, CSS, JavaScript, React, Node.js, Express and MongoDB, with REST APIs, auth, CI/CD deployment, and an AI-assisted development module.",
      },
      {
        q: "Which AI coding tools will I learn?",
        a: "Cursor, Cline, Blackbox AI and Google Antigravity, and how to build an AI-augmented workflow without losing core coding skills.",
      },
      {
        q: "Do I need prior coding experience?",
        a: "No. Starts with the developer environment, Git and HTML fundamentals.",
      },
      {
        q: "What will I build?",
        a: "Ten mini projects and an enterprise capstone application.",
      },
      {
        q: "Will I learn deployment?",
        a: "Yes. Production prep, backend and MongoDB Atlas deploy, frontend deploy and CI/CD.",
      },
      {
        q: "Is placement support provided?",
        a: "Yes: GitHub portfolio, technical presentation, interview prep, internship and guaranteed interviews through IOP.",
      },
      { q: "What jobs can I apply for?", a: "See career roles." },
    ],
  },
  {
    slug: "ui-ux-design",
    aliases: ["ui-ux-graphic-design"],
    h1: "UI/UX & Graphic Design course in Coimbatore",
    subtitle: "Where Imagination Meets Innovation with Figma, AI design tools & Adobe suite.",
    seoTitle: "UI/UX & Graphic Design Course in Coimbatore | Figma & Adobe Training | Vinsup",
    metaDescription:
      "Course covering UX research, Figma, AI design tools, Adobe apps and CorelDRAW, with hands on training, expert mentorship, live project internship, and portfolio placement support.",
    keywords: [
      "ui ux course coimbatore",
      "ui ux graphic design course coimbatore",
      "figma course coimbatore",
      "graphic design course coimbatore",
      "web design course coimbatore",
      "product design course coimbatore",
    ],
    heroInfo: {
      tagline: "Where Imagination Meets Innovation",
      badges: ["Hands On Training", "Expert Mentorship", "Live Project Internship"],
      subtext: "The Creative World needs you — Tap to Begin",
      ctaText: "Register Now",
    },
    durationHours: null,
    modules: [
      {
        title: "UX Foundations & Design Thinking",
        topics: [
          "Introduction to design and the UX/UI industry",
          "UX research fundamentals, user personas, journey mapping, and empathy tools",
          "Research and collaboration in Miro",
          "Usability testing and validation",
        ],
      },
      {
        title: "Information Architecture & Wireframing",
        topics: [
          "Information architecture",
          "User flows and task flows",
          "FigJam for collaborative ideation",
        ],
      },
      {
        title: "Visual & UI Design Fundamentals",
        topics: [
          "Design principles and visual hierarchy",
          "Typography for digital interfaces",
          "Color theory and accessibility",
          "Iconography and imagery",
          "Design systems and component thinking",
        ],
      },
      {
        title: "Figma Mastery",
        topics: [
          "Interface and file management",
          "Core drawing and layout tools",
          "Components, variants, and styles",
          "Advanced Figma: variables, interactive components, and Dev Mode",
          "Prototyping",
          "Collaboration and handoff",
        ],
      },
      {
        title: "AI-Powered Design Tools",
        topics: [
          "AI in the modern design workflow",
          "Claude for design and product workflows",
          "AI wireframing and UI generation (Google Stitch, Uizard, Galileo AI)",
          "AI website and layout tools (Relume, Framer AI)",
        ],
      },
      {
        title: "Web Design & Front-End Foundations",
        topics: [
          "Responsive web design principles",
          "HTML fundamentals",
          "CSS fundamentals",
          "Bootstrap framework",
          "Design-to-web handoff",
        ],
      },
      {
        title: "Graphic Design Suite",
        topics: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Affinity Designer",
          "Adobe InDesign",
          "Branding and visual identity",
        ],
      },
      {
        title: "CorelDRAW for UI/UX Designers",
        topics: [
          "CorelDRAW fundamentals",
          "Icons, illustrations, and UI assets",
          "Layout, export, and handoff",
        ],
      },
      {
        title: "Portfolio, Case Studies & Career Readiness",
        topics: [
          "Building UX/UI case studies",
          "Portfolio platform and presentation",
          "Job readiness and interview preparation",
        ],
      },
    ],
    tools: [
      "Figma",
      "FigJam",
      "Miro",
      "Maze",
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Affinity Designer",
      "CorelDRAW",
      "HTML",
      "CSS",
      "Bootstrap",
      "Behance",
      "Claude",
      "Google Stitch",
      "Uizard",
      "Relume",
      "Framer AI",
    ],
    projects: [
      {
        area: "Capstone (choose one)",
        description:
          "UX case study, mobile app design, e-commerce website, banking app redesign, or personal/business website",
      },
      {
        area: "Figma",
        description: "Login and sign-up flow; landing page design",
      },
      {
        area: "HTML & CSS",
        description: "Personal portfolio website",
      },
      {
        area: "Photoshop",
        description:
          "Social media posts, brochure/flyer design, product advertisement",
      },
      {
        area: "Illustrator",
        description:
          "Logo and branding, business card design, packaging design",
      },
      {
        area: "InDesign",
        description: "Magazine design, infographic design",
      },
    ],
    careerRoles: [
      "UI Designer",
      "UX Designer",
      "Product Designer",
      "UX Researcher",
      "Graphic Designer",
    ],
    syllabusPdf:
      "https://www.vinsupskillacademy.com/brochures/vinsup-ai-uiux-graphic-design-syllabus.pdf",
    faqs: [
      {
        q: "Which is the best UI/UX design course in Coimbatore?",
        a: "Combines UX research, Figma, AI design tools, the Adobe suite and CorelDRAW, giving both product-design and graphic-design portfolio pieces.",
      },
      {
        q: "Which AI design tools are taught?",
        a: "Claude, Google Stitch, Uizard, Galileo AI, Relume and Framer AI.",
      },
      {
        q: "Do I need drawing or coding skills?",
        a: "No. Starts from design fundamentals; basic HTML, CSS and Bootstrap for handoff.",
      },
      {
        q: "Will I build a portfolio?",
        a: "Yes: case studies, mini projects and a capstone, presented on a platform such as Behance.",
      },
      {
        q: "Is graphic design included?",
        a: "Yes: Photoshop, Illustrator, Affinity Designer, InDesign, CorelDRAW and branding.",
      },
      {
        q: "Is placement support available?",
        a: "Yes: portfolio reviews, interview prep, internships, guaranteed interviews via IOP.",
      },
      { q: "What jobs can I apply for?", a: "See career roles." },
    ],
  },
  {
    slug: "digital-marketing",
    h1: "Digital Marketing course in Coimbatore",
    subtitle: "Become a Job-Ready Digital Marketer in 3 Months: Strategy, Technical SEO, Google & Meta Ads, WhatsApp Automation & AI.",
    seoTitle: "Advanced Digital Marketing Course in Coimbatore with Placement | AI, Ads & SEO | Vinsup",
    metaDescription:
      "Become a job-ready digital marketer in 3 months with live training in Coimbatore. Master marketing strategy, technical SEO, Google & Meta Ads, GA4 measurement, WhatsApp automation, and AI workflows with guaranteed placement support.",
    keywords: [
      "digital marketing course in coimbatore",
      "advanced digital marketing course with placement",
      "digital marketing training coimbatore",
      "seo course coimbatore",
      "google ads course coimbatore",
      "social media marketing course coimbatore",
      "performance marketing training coimbatore",
      "best digital marketing institute in coimbatore with placement",
    ],
    heroInfo: {
      tagline: "Become the Digital Expert Every Company Needs",
      badges: ["Hands on Training", "Expert Mentorship", "Live Project Internship"],
      subtext: "One Click Closer to Your Dream Career !",
      ctaText: "Join Now",
    },
    durationHours: 120,
    modules: [
      {
        title: "Part 1: Marketing Strategy, Customer Psychology & Conversion Architecture",
        topics: [
          "Digital Marketing Fundamentals & Marketer's Mindset",
          "Business Fundamentals & Unit Economics (CAC, LTV, ROAS)",
          "Customer Psychology, Buyer Behavior & Journey Mapping",
          "Marketing Funnel Architecture & High-Converting Offer Design",
          "Website Architecture, High-Converting Landing Pages & Persuasive Copywriting",
          "Content Marketing Strategy & Brand Storytelling",
        ],
      },
      {
        title: "Part 2: Search Visibility, SEO Mastery & Paid Media Scaling",
        topics: [
          "Search & Keyword Intent Foundations",
          "Technical SEO Deep Dive (Crawl Budget, Canonicalization & Core Web Vitals)",
          "Content Optimization, Semantic SEO & Structured Data (Schema.org)",
          "Google Search Console, Local SEO Domination & Google Business Profile",
          "Advanced, Programmatic & International SEO Systems",
          "Social Media Landscape & Viral Content Strategy",
          "Meta Ads Manager: Setup, Audience Targeting, CBO & Scaled Campaigns",
          "Google Ads: Search, Display, Video, Shopping & AI Performance Max",
        ],
      },
      {
        title: "Part 3: Tracking Architecture, Marketing Automation, AI & Placement Bootcamp",
        topics: [
          "Full-Funnel Tracking Architecture with GA4 & Google Tag Manager",
          "Attribution Models, Server-Side Measurement & Event Tracking",
          "Email Marketing, Drip Campaigns & CRM Automation",
          "WhatsApp Business API & Automated Marketing Engineering",
          "Marketing Analytics, Performance Dashboards & SQL for Marketers",
          "AI-Powered Digital Marketing: Prompt Engineering, MCP & Automated Reporting",
          "Enterprise Capstone Project: End-to-End Growth Engine Build",
          "Job Readiness Program (JRP) & Placement Bootcamp (ATS Resume, Mock Interviews, Portfolio)",
        ],
      },
    ],
    tools: [
      "Google Ads",
      "Meta Ads Manager",
      "Meta Business Suite",
      "GA4 (Google Analytics 4)",
      "Google Tag Manager",
      "Google Search Console",
      "Looker Studio",
      "WordPress",
      "Elementor",
      "Rank Math",
      "Yoast SEO",
      "Semrush",
      "Ahrefs",
      "Screaming Frog",
      "Ubersuggest",
      "Google Trends",
      "Google Keyword Planner",
      "GTmetrix & PageSpeed Insights",
      "Canva",
      "YouTube Studio",
      "LinkedIn Campaign Manager",
      "Shopify",
      "Mailchimp",
      "Brevo",
      "HubSpot",
      "WhatsApp Business API",
      "AiSensy",
      "Hotjar & Microsoft Clarity",
      "ChatGPT & Claude for Marketers",
    ],
    projects: [
      {
        area: "End-to-End Marketing System Capstone",
        description:
          "Build an integrated conversion engine: high-converting landing page, GA4/GTM tracking, live Google/Meta ad campaign, automated WhatsApp lead capture, and executive analytics dashboard.",
      },
      {
        area: "Technical SEO & Core Web Vitals Audit",
        description:
          "Conduct a live site audit using Screaming Frog, fixing crawl budget issues, canonical tags, structured data schema, and PageSpeed metrics.",
      },
      {
        area: "Local SEO & Google Business Profile Ranking",
        description:
          "Optimize local map listings, review funnels, local citations, and geo-targeted keywords to rank in Coimbatore's local 3-pack.",
      },
      {
        area: "High-ROAS Google & Meta Ads Campaigns",
        description:
          "Design, launch, and optimize live Search, Performance Max, and Meta retargeting campaigns with conversion tracking and ROAS optimization.",
      },
      {
        area: "Automated WhatsApp & Email Lead Nurturing Funnel",
        description:
          "Configure automated welcome series, abandoned cart recovery, and lead qualification workflows using WhatsApp Business API and CRM webhooks.",
      },
    ],
    careerRoles: [
      "Digital Marketing Executive",
      "SEO Specialist / SEO Executive",
      "Performance Marketing Specialist",
      "Google Ads / PPC Specialist",
      "Social Media Marketing Executive",
      "Growth Marketing Executive",
      "Marketing Analytics Executive",
      "Freelance Digital Marketing Consultant",
    ],
    syllabusPdf:
      "https://www.vinsupskillacademy.com/brochures/vinsup-ai-digital-marketing-syllabus.pdf",
    faqs: [
      {
        q: "Which is the best advanced digital marketing course in Coimbatore with placement?",
        a: "Vinsup Skill Academy offers a job-ready 3-month digital marketing program at our Ganapathy campus and online. It goes beyond surface-level tool clicking to teach you real marketing systems: strategy, technical SEO, Google & Meta ads, GA4 tracking architecture, WhatsApp automation, and AI workflows with guaranteed placement support.",
      },
      {
        q: "Do I need coding or prior technical skills to join?",
        a: "No prior technical or coding experience is required. The curriculum begins with business fundamentals, customer psychology, and marketing strategy before progressing step-by-step into platform setup, automation, and AI tools.",
      },
      {
        q: "Are classes and doubt-clearing sessions supported in Tamil?",
        a: "Yes. Lectures are taught in clear English, with conceptual explanations and doubt-clearing available in Tamil whenever needed, ensuring you feel completely comfortable with every topic.",
      },
      {
        q: "Why is there such deep coverage of Technical SEO and Core Web Vitals?",
        a: "Technical SEO is one of the highest-paid specializations in modern search marketing. We teach you how search engines crawl, render, and index pages—covering crawl budget, canonicalization, JavaScript SEO, log file analysis, and Core Web Vitals—so you can systematically diagnose real ranking challenges instead of guessing.",
      },
      {
        q: "Will I build real marketing systems and run live ad campaigns?",
        a: "Yes. You will execute 5 comprehensive hands-on projects, including live Google and Meta ad campaigns, WhatsApp lead automation pipelines, GA4 full-funnel tracking, and local business SEO ranking.",
      },
      {
        q: "How does placement assistance work at Vinsup Skill Academy?",
        a: "Placement is delivered through our Job Readiness Program (JRP) and Interview Opportunity Program (IOP). You receive resume building, LinkedIn optimization, portfolio reviews, AI mock interviews, and guaranteed interview opportunities until you are successfully placed.",
      },
      {
        q: "Where are the training classes held?",
        a: "Classes are held in-person at our Ganapathy campus in Coimbatore, as well as live interactive online batches with flexible weekday timings.",
      },
    ],
  },
];

export function getAllCourseSlugs(): string[] {
  const slugs: string[] = [];
  for (const course of coursesData) {
    slugs.push(course.slug);
    if (course.aliases) {
      slugs.push(...course.aliases);
    }
  }
  return slugs;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find(
    (course) => course.slug === slug || (course.aliases && course.aliases.includes(slug))
  );
}
