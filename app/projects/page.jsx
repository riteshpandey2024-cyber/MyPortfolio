'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectsPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark');
        }
    }, [])

    const projectsData = [
        {
            title: "Hopalong",
            techStack: ["ReactJS", "NodeJS", "PostgreSQL", "Centrifuge", "GeoApiFy", "Supabase", "TypeScript"],
            duration: "Jan - Apr 2025",
            github: "https://github.com/riteshpandey2024-cyber/hopalong-frontend",
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
            title: "SuggestBot",
            techStack: ["Streamlit", "SQLite", "LangChain", "Ollama(LLaMA2)", "Gemini API", "RapidFuzz"],
            duration: "Jan - Apr 2026",
            github: "https://github.com/riteshpandey2024-cyber/SuggestBot",
            color: "from-orange-500 to-red-500",
            description: [
                "Built Natural Language-to-SQL pipeline achieving 92% structured query accuracy on healthcare dataset.",
                "Developed a context-aware chatbot with Gemini API and SQLite-based chat history multi-turn interactions.",
                "Reduced query failure rate by 40% using typo-tolerant fuzzy matching (RapidFuzz).",
                "Integrated FAISS-based vector retrieval enabling contextual multi-turn reasoning.",
                "Designed an end-to-end NL → SQL → DB pipeline for real-time query execution and response generation."
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
        }
    ];

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-[#050011] text-white' : 'bg-gray-50 text-gray-900'} selection:bg-purple-500/30 overflow-x-hidden font-Outfit relative`}>

            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            {/* Background Glow Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-32 pb-12 lg:pt-40 lg:pb-20 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <Link href="/#about" className="self-start mb-8 flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors font-medium">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Portfolio
                    </Link>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Projects</span>
                    </h1>
                    <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg">
                        A showcase of my recent work, highlighting problem-solving, architectural design, and full-stack implementation across various domains.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="space-y-12">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                            <div className="bg-white dark:bg-[#0a0118]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">

                                {/* Top gradient accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.color}`}></div>

                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-4 mb-3">
                                            <h2 className="text-3xl font-bold dark:text-white/90">
                                                {project.title}
                                            </h2>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                                                title="View on GitHub"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            {project.duration}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 lg:justify-end max-w-2xl">
                                        {project.techStack.map((tech, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <ul className="space-y-3 mt-6">
                                    {project.description.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="relative z-10">
                <Footer isDarkMode={isDarkMode} />
            </div>
        </div>
    );
}
