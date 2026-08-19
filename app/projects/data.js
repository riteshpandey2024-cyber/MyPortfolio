export const projectsData = [
    {
        title: "DocRAG",
        techStack: ["React", "Django", "ChromaDB", "LangChain", "Groq API", "JWT", "Tailwind CSS"],
        duration: "Jun – Jul 2026",
        github: "https://github.com/riteshpandey2024-cyber/DocRAG",
        color: "from-blue-500 to-cyan-500",
        description: [
            "Built an AI-powered document assistant enabling users to instantly query and extract answers from uploaded PDFs, reducing manual document search effort through intelligent automation.",
            "Implemented Hybrid Retrieval (MMR + BM25) with ChromaDB and LangChain, achieving high contextual accuracy for automated document Q&A.",
            "Designed the system as a reusable AI agent architecture with multi-turn conversational support, persistent chat history, and autonomous document understanding.",
            "Developed secure REST APIs using Django REST Framework and JWT authentication, supporting chat management, PDF uploads, and user-specific document retrieval."
        ]
    },
    {
        title: "SuggestBot",
        techStack: ["Streamlit", "SQLite", "LangChain", "Ollama(LLaMA2)", "Gemini API", "RapidFuzz"],
        duration: "Jan - Apr 2026",
        github: "https://github.com/riteshpandey2024-cyber/SuggestBot",
        color: "from-orange-500 to-red-500",
        description: [
            "Built Natural Language-to-SQL pipeline achieving high structured query accuracy on healthcare dataset.",
            "Developed a context-aware chatbot with Gemini API and SQLite-based chat history multi-turn interactions.",
            "Reduced query failure rate by 40% using typo-tolerant fuzzy matching (RapidFuzz).",
            "Integrated FAISS-based vector retrieval enabling contextual multi-turn reasoning.",
            "Designed an end-to-end NL → SQL → DB pipeline for real-time query execution and response generation."
        ]
    },
    {
        title: "Hopalong",
        techStack: ["ReactJS", "NodeJS", "PostgreSQL", "Centrifuge", "GeoApiFy", "Supabase", "TypeScript"],
        duration: "Jan - Apr 2025",
        github: "https://github.com/riteshpandey2024-cyber/hopalong",
        color: "from-blue-500 to-cyan-500",
        description: [
            "Built a full-stack ride-sharing platform with secure institute authentication using React.js.",
            "Designed RESTful APIs for ride matching, booking, and real-time messaging workflows.",
            "Implemented partial route matching, cost splitting, and ride history tracking features.",
            "Integrated real-time messaging via Centrifuge with end-to-end encryption.",
            "Developed scalable database schema and responsive UI with GeoApiFy, Tailwind CSS, and Framer Motion."
        ]
    },
    {
        title: "ChatInsight",
        techStack: ["T5", "PyTorch", "HuggingFace Transformers", "NLP", "Seq2Seq", "Deep Learning"],
        duration: "Sept - Oct 2025",
        github: "https://github.com/riteshpandey2024-cyber/ChatInsight",
        color: "from-purple-500 to-indigo-500",
        description: [
            "Built an end-to-end data preprocessing pipeline (cleaning, tokenization, batching) using Pandas and Regex.",
            "Designed evaluation workflow using ROUGE-based metrics to assess model performance.",
            "Trained model using HuggingFace Trainer API with AdamW optimizer and weight decay tuning.",
            "Developed an abstractive summarization system using T5 Transformer for multi-turn dialogue summarization."
        ]
    },
    {
        title: "GreenShift",
        techStack: ["Chart.js", "FastAPI", "Uvicorn", "NumPy", "Pandas", "MDP"],
        duration: "Feb - Mar 2026",
        github: "https://github.com/riteshpandey2024-cyber/GreenShift",
        color: "from-emerald-500 to-teal-500",
        description: [
            "Developed an MDP-driven system to align workload scheduling with renewable energy availability.",
            "Applied value iteration to derive optimal VM allocation strategies under changing demand.",
            "Built FastAPI services to simulate system behavior and evaluate optimization policies.",
            "Processed and integrated real-world workload datasets with energy consumption models.",
            "Designed comparative analysis across scheduling strategies using key energy efficiency metrics.",
            "Presented insights through interactive visualizations of performance and convergence behavior."
        ]
    },
    {
        title: "Infosec",
        techStack: ["Python", "Excel", "JavaScript", "Chart.js", "Data Visualisation", "Time-Series Analysis"],
        duration: "Mar - Apr 2026",
        github: "https://github.com/riteshpandey2024-cyber/InfoSec",
        color: "from-pink-500 to-rose-500",
        description: [
            "Analysed 25 cybersecurity threats using structured datasets and multi-domain classification.",
            "Built a multi-factor risk scoring model (Likelihood, Asset Value, Mitigation, Uncertainty) based on the NIST framework to rank threats and identify critical risks.",
            "Performed time-series analysis (2015–2024) on cyberattack trends.",
            "Visualized data using Chart.js (bar, line, pie, scatter, heatmap).",
            "Identified critical low-frequency threats through risk vs frequency analysis."
        ]
    },
    {
        title: "Chrome Dino",
        techStack: ["HTML", "CSS", "React", "PHP", "MySQL"],
        duration: "Aug – Nov 2024",
        github: "https://github.com/riteshpandey2024-cyber/Chrome-Dino",
        color: "from-green-500 to-emerald-500",
        description: [
            "Developed a full-stack browser-based game inspired by Chrome Dino.",
            "Implemented a real-time leaderboard system to dynamically track and display player scores.",
            "Built a messaging and notification module to enable user communication.",
            "Designed and integrated a badge and reward system, allowing users to purchase and unlock achievements."
        ]
    }
];

export function slugify(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
