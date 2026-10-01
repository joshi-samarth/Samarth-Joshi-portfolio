import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/data';

const EducationTimeline = () => {
    return (
        <section
            id="education"
            className="py-20 bg-[#FFFFFF] dark:bg-[#000000] border-t border-[#CCCCCC] dark:border-[#333333] transition-colors duration-300"
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
                <div className="relative pl-6 sm:pl-8 border-l-2 border-[#CCCCCC] dark:border-[#333333] space-y-10 ml-2 sm:ml-4">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.id + index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.35, delay: index * 0.1 }}
                            className="relative group"
                        >
                            
                            {/* Monochrome Timeline Node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.25, delay: index * 0.1 + 0.1 }}
                                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#000000] dark:bg-[#FFFFFF] ring-4 ring-[#FFFFFF] dark:ring-[#000000]"
                            />

                            {/* Timeline Card */}
                            <div className="card-clean p-6 space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">
                                            {item.degree}
                                        </h3>
                                        <p className="text-base font-semibold text-[#333333] dark:text-[#CCCCCC] mt-0.5">
                                            {item.institution}
                                        </p>
                                        <p className="text-sm text-[#666666] dark:text-[#999999]">
                                            {item.branch}
                                        </p>
                                    </div>

                                    <div className="text-xs font-semibold px-3 py-1 rounded bg-[#FAFAFA] dark:bg-[#121212] text-[#000000] dark:text-[#FFFFFF] border border-[#CCCCCC] dark:border-[#333333] self-start">
                                        {item.duration}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#666666] dark:text-[#999999] pt-1 border-t border-[#CCCCCC] dark:border-[#333333]">
                                    <span className="font-bold text-[#000000] dark:text-[#FFFFFF]">{item.score}</span>
                                    <span>•</span>
                                    <span>{item.location}</span>
                                </div>

                                <p className="text-sm text-[#666666] dark:text-[#CCCCCC] leading-relaxed">
                                    {item.description}
                                </p>

                                {item.highlights && item.highlights.length > 0 && (
                                    <ul className="space-y-1.5 pt-2">
                                        {item.highlights.map((point, pIdx) => (
                                            <li key={pIdx} className="text-xs sm:text-sm text-[#666666] dark:text-[#CCCCCC] flex items-start gap-2">
                                                <span className="text-[#000000] dark:text-[#FFFFFF] font-bold">•</span>
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
