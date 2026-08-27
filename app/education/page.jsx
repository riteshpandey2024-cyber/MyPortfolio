'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function EducationPage() {
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

    const educationData = [
        {
            degree: "B.Tech in Computer Science Engineering",
            institution: "Indian Institute of Information Technology",
            board: "Kottayam",
            // score: "CGPA: 6.5",
            year: "2023 - 2027",
            location: "Kottayam, Kerala",
            color: "from-purple-500 to-indigo-500",
            coursework: ["Data Science & Analytics", "Machine Learning (Basics)", "Internet of Things", "Database Management Systems", "Computer Organisation", "Operating Systems", "Computer Networks", "Database Security", "Financial Crime"]
        },
        {
            degree: "Intermediate",
            institution: "JPS Inter College Balpur Gonda",
            board: "UP Board",
            // score: "Percentage: 76.8%",
            // year: "2022",
            location: "Gonda, Uttar Pradesh",
            color: "from-blue-500 to-cyan-500",
            coursework: []
        },
        {
            degree: "High School",
            institution: "City Montessori School",
            board: "UP Board",
            // score: "Percentage: 79.6%",
            // year: "2020",
            location: "Balrampur, Uttar Pradesh",
            color: "from-pink-500 to-rose-500",
            coursework: []
        }
    ];

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-[#050011] text-white' : 'bg-gray-50 text-gray-900'} selection:bg-purple-500/30 overflow-x-hidden font-Outfit relative`}>

            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            {/* Background Glow Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 pt-32 pb-12 lg:pt-40 lg:pb-20 relative z-10">
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
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Education</span>
                    </h1>
                    <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg">
                        My academic journey and educational qualifications that have built the foundation for my career in tech.
                    </p>
                </motion.div>

                {/* Timeline / Cards Section */}
                <div className="space-y-8">
                    {educationData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.01 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                            <div className="bg-white dark:bg-[#0a0118]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                                {/* Left accent bar */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.color}`}></div>

                                <div className="flex-1 pl-4">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2 dark:text-white/90">
                                        {item.degree}
                                    </h2>
                                    <h3 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {item.institution} <span className="text-purple-500 hidden sm:inline">•</span> <span className="block sm:inline text-sm sm:text-base text-gray-500 dark:text-gray-400">{item.board}</span>
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        {item.location}
                                    </p>

                                    {item.coursework && item.coursework.length > 0 && (
                                        <div className="mt-6">
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-3">Relevant Coursework</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {item.coursework.map((course, cIdx) => (
                                                    <span
                                                        key={cIdx}
                                                        className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col md:items-end w-full md:w-auto pl-4 md:pl-0 border-l-2 md:border-l-0 border-gray-100 dark:border-white/10">
                                    <div className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 rounded-lg font-bold text-lg mb-2">
                                        {item.score}
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400 font-medium flex items-center gap-2 mt-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        {item.year}
                                    </div>
                                </div>

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
