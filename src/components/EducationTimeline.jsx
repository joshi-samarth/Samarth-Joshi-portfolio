import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/data';

const EducationTimeline = () => {
    return (
        <section
            id="education"
            className="py-20 bg-[#FAFAF8] dark:bg-[#111111] border-t border-[#E5E5E0] dark:border-[#2A2A2A]"
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
                    <p className="section-subtitle mb-1">Academic Background</p>
                    <h2 className="section-title">Education</h2>
                </motion.div>

                {/* Vertical Timeline */}
                <div className="relative pl-6 sm:pl-8 border-l border-[#D4D4D4] dark:border-[#2A2A2A] space-y-10 ml-2 sm:ml-4">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.id + index}
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
                            <div className="card-clean p-6 space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#171717] dark:text-[#F5F5F5]">
                                            {item.degree}
                                        </h3>
                                        <p className="text-base font-medium text-[#2563EB] dark:text-[#60A5FA] mt-0.5">
                                            {item.institution}
                                        </p>
                                        <p className="text-sm text-[#666666] dark:text-[#A3A3A3]">
                                            {item.branch}
                                        </p>
                                    </div>

                                    <div className="text-xs font-semibold px-2.5 py-1 rounded bg-[#F3F4F1] dark:bg-[#181818] text-[#171717] dark:text-[#F5F5F5] border border-[#E5E5E0] dark:border-[#2A2A2A] self-start">
                                        {item.duration}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#666666] dark:text-[#A3A3A3] pt-1 border-t border-[#E5E5E0] dark:border-[#2A2A2A]">
                                    <span>{item.score}</span>
                                    <span>•</span>
                                    <span>{item.location}</span>
                                </div>

                                <p className="text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                                    {item.description}
                                </p>

                                {item.highlights && item.highlights.length > 0 && (
                                    <ul className="space-y-1.5 pt-2">
                                        {item.highlights.map((point, pIdx) => (
                                            <li key={pIdx} className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EducationTimeline;
