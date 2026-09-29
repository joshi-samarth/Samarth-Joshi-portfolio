import React from 'react';
import { motion } from 'framer-motion';
import { internshipData } from '../data/data';

const InternshipTimeline = () => {
    return (
        <section
            id="internship"
            className="py-20 bg-[#F3F4F1] dark:bg-[#181818] border-t border-[#E5E5E0] dark:border-[#2A2A2A]"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.3 }}
                    className="max-w-2xl mb-12"
                >
                    <p className="section-subtitle mb-1">Work Experience</p>
                    <h2 className="section-title">Internship</h2>
                </motion.div>

                {/* Vertical Timeline - Identical System to Education */}
                <div className="relative pl-6 sm:pl-8 border-l border-[#D4D4D4] dark:border-[#2A2A2A] space-y-10 ml-2 sm:ml-4">
                    {internshipData.map((internship, index) => (
                        <motion.div
                            key={internship.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.35, delay: index * 0.1 }}
                            className="relative group"
                        >
                            
                            {/* Animated 10-12px Timeline Blue Node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.25, delay: index * 0.1 + 0.1 }}
                                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#2563EB] dark:bg-[#60A5FA]"
                            />

                            {/* Timeline Card */}
                            <div className="card-clean p-6 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#171717] dark:text-[#F5F5F5]">
                                            {internship.role}
                                        </h3>
                                        <p className="text-base font-semibold text-[#2563EB] dark:text-[#60A5FA] mt-0.5">
                                            {internship.company}
                                        </p>
                                        <p className="text-xs text-[#666666] dark:text-[#A3A3A3] mt-0.5">
                                            {internship.location}
                                        </p>
                                    </div>

                                    <div className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FAFAF8] dark:bg-[#111111] text-[#171717] dark:text-[#F5F5F5] border border-[#E5E5E0] dark:border-[#2A2A2A] self-start">
                                        {internship.duration}
                                    </div>
                                </div>

                                {/* Technologies Used - Simple Brand Icons */}
                                <div className="pt-2">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A3A3A3] mb-2">
                                        Technologies Used
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3">
                                        {internship.technologies.map((tech) => {
                                            const Icon = tech.icon;
                                            return (
                                                <div
                                                    key={tech.name}
                                                    className="group relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAFAF8] dark:bg-[#111111] border border-[#E5E5E0] dark:border-[#2A2A2A]"
                                                    title={tech.name}
                                                >
                                                    <Icon className="w-5 h-5" style={{ color: tech.brandColor }} />
                                                    <span className="text-xs font-medium text-[#171717] dark:text-[#F5F5F5]">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Responsibilities & Achievements */}
                                <div className="pt-2 border-t border-[#E5E5E0] dark:border-[#2A2A2A]">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A3A3A3] mb-2">
                                        Key Technical Work
                                    </p>
                                    <ul className="space-y-1.5">
                                        {internship.achievements.map((item, aIdx) => (
                                            <li key={aIdx} className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default InternshipTimeline;
