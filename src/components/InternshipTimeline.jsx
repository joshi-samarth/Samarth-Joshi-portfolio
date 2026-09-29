import React from 'react';
import { motion } from 'framer-motion';
import { internshipData } from '../data/data';

const InternshipTimeline = () => {
    return (
        <section
            id="internship"
            className="py-20 bg-[#F6F0E8] dark:bg-[#292124] border-t border-[#DDD2C8] dark:border-[#42363A]"
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

                {/* Vertical Timeline */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-[#DDD2C8] dark:border-[#42363A] space-y-10 ml-2 sm:ml-4">
                    {internshipData.map((internship, index) => (
                        <motion.div
                            key={internship.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.35, delay: index * 0.1 }}
                            className="relative group"
                        >
                            
                            {/* Signature Burgundy Timeline Node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.25, delay: index * 0.1 + 0.1 }}
                                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#8F3D45] dark:bg-[#8F3D45] ring-4 ring-[#F6F0E8] dark:ring-[#292124]"
                            />

                            {/* Timeline Card */}
                            <div className="card-clean p-6 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#252222] dark:text-[#F6F0E8]">
                                            {internship.role}
                                        </h3>
                                        <p className="text-base font-semibold text-[#8F3D45] dark:text-[#8F3D45] mt-0.5">
                                            {internship.company}
                                        </p>
                                        <p className="text-xs text-[#756D69] dark:text-[#DDD2C8] mt-0.5">
                                            {internship.location}
                                        </p>
                                    </div>

                                    <div className="text-xs font-semibold px-3 py-1 rounded bg-[#F6F0E8] dark:bg-[#231B1E] text-[#8F3D45] dark:text-[#F6F0E8] border border-[#DDD2C8] dark:border-[#42363A] self-start">
                                        {internship.duration}
                                    </div>
                                </div>

                                {/* Technologies Used - Simple Brand Icons */}
                                <div className="pt-2">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#756D69] dark:text-[#DDD2C8] mb-2">
                                        Technologies Used
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3">
                                        {internship.technologies.map((tech) => {
                                            const Icon = tech.icon;
                                            return (
                                                <div
                                                    key={tech.name}
                                                    className="group relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F6F0E8] dark:bg-[#231B1E] border border-[#DDD2C8] dark:border-[#42363A] hover:border-[#8F3D45] transition-colors"
                                                    title={tech.name}
                                                >
                                                    {Icon && <Icon className="w-5 h-5" style={{ color: tech.brandColor }} />}
                                                    <span className="text-xs font-medium text-[#252222] dark:text-[#F6F0E8]">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Responsibilities & Achievements */}
                                <div className="pt-2 border-t border-[#DDD2C8] dark:border-[#42363A]">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#756D69] dark:text-[#DDD2C8] mb-2">
                                        Key Technical Work
                                    </p>
                                    <ul className="space-y-1.5">
                                        {internship.achievements.map((item, aIdx) => (
                                            <li key={aIdx} className="text-xs sm:text-sm text-[#756D69] dark:text-[#DDD2C8] flex items-start gap-2">
                                                <span className="text-[#8F3D45] font-bold">•</span>
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
