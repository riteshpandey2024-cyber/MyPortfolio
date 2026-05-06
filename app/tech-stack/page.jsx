'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TechStackPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark');
        }
    }, [])

    const categories = [
        {
            title: "Languages",
            skills: ["C", "C++", "Python", "JavaScript"],
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Frontend",
            skills: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            color: "from-pink-500 to-rose-400"
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
            color: "from-green-500 to-emerald-400"
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
            color: "from-yellow-500 to-orange-400"
        },
        {
            title: "Machine Learning",
            skills: ["Linear & Logistic Regression", "PyTorch", "HuggingFace", "Transformers", "T5", "Scikit-learn"],
            color: "from-purple-500 to-indigo-400"
        },
        {
            title: "Data Science",
            skills: ["Pandas", "NumPy", "Statistics & Probability", "Data Wrangling", "Data Visualisation", "BeautifulSoup", "Scrapy"],
            color: "from-red-500 to-orange-500"
        },
        {
            title: "Cloud Tools",
            skills: ["AWS (EC2, S3, IAM, Lambda, RDS, VPC, CloudWatch)", "Postman", "Git/GitHub", "Linux", "Figma"],
            color: "from-teal-500 to-cyan-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-[#050011] text-white' : 'bg-gray-50 text-gray-900'} selection:bg-purple-500/30 overflow-x-hidden font-Outfit relative`}>
            
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            {/* Background Glow Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-12 lg:pt-40 lg:pb-20 relative z-10">
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
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Tech Stack</span>
                    </h1>
                    <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg">
                        A comprehensive overview of my technical skills, tools, and technologies spanning frontend, backend, machine learning, and cloud infrastructure.
                    </p>
                </motion.div>

                {/* Grid Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                    {categories.map((category, idx) => (
                        <motion.div 
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="relative group h-full"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                            <div className="h-full bg-white dark:bg-[#0a0118]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
                                
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>

                                <h2 className="text-2xl font-bold mb-6 dark:text-white/90 flex items-center gap-3">
                                    {category.title}
                                </h2>

                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, sIdx) => (
                                        <span 
                                            key={sIdx}
                                            className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-300 hover:border-purple-500/30 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="relative z-10">
                <Footer isDarkMode={isDarkMode} />
            </div>
        </div>
    );
}
