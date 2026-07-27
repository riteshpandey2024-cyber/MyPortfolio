'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { projectsData, slugify } from '../data';
import Link from 'next/link';

export default function ProjectDetail({ params: paramsPromise }) {
    const [project, setProject] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [params, setParams] = useState(null);

    useEffect(() => {
        // Resolve async params
        Promise.resolve(paramsPromise).then((resolvedParams) => {
            setParams(resolvedParams);
            const found = projectsData.find(p => slugify(p.title) === resolvedParams.slug);
            setProject(found || null);
        });

        // Initialize dark mode
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, [paramsPromise]);

    if (!params) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#050011]">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project not found</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">We couldn't find the project you requested.</p>
                <Link href="/#work" className="mt-6 text-purple-600 dark:text-purple-400 hover:underline">← Back to portfolio</Link>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-[#050011] text-white' : 'bg-gray-50 text-gray-900'} font-Outfit`}>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
                <div className="mb-8">
                    <Link href="/#work" className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors font-medium">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Portfolio
                    </Link>
                </div>

                <div className="bg-white dark:bg-[#0a0118]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    {/* Top gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.color}`}></div>

                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                        <div>
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                <h1 className="text-4xl md:text-5xl font-bold dark:text-white/90">
                                    {project.title}
                                </h1>
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

                    <ul className="space-y-3">
                        {project.description.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
                                <span className="leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>

            <div className="relative z-10">
                <Footer isDarkMode={isDarkMode} />
            </div>
        </div>
    );
}
