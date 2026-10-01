import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { internshipData } from '../data/data';

const InternshipTimeline = () => {
    return (
        <section
            id="internship"
            className="py-20 bg-[#F0F0F0] dark:bg-[#292124] border-t border-[#D9D9D9] dark:border-[#42363A]"
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
                    <h2 className="section-title">Internship & Certificates</h2>
                </motion.div>

                {/* Vertical Timeline */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-[#D9D9D9] dark:border-[#42363A] space-y-10 ml-2 sm:ml-4">
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
                                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#8F3D45] dark:bg-[#8F3D45] ring-4 ring-[#F0F0F0] dark:ring-[#292124]"
                            />

                            {/* Timeline Card */}
                            <div className="card-clean p-6 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#333333] dark:text-[#FFFFFF]">
                                            {internship.role}
                                        </h3>
                                        <p className="text-base font-semibold text-[#8F3D45] dark:text-[#8F3D45] mt-0.5">
                                            {internship.company}
                                        </p>
                                        <p className="text-xs text-[#707070] dark:text-[#D9D9D9] mt-0.5">
                                            {internship.location}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 self-start flex-wrap">
                                        <div className="text-xs font-semibold px-3 py-1 rounded bg-[#F0F0F0] dark:bg-[#231B1E] text-[#8F3D45] dark:text-[#FFFFFF] border border-[#D9D9D9] dark:border-[#42363A]">
                                            {internship.duration}
                                        </div>

                                        {internship.certificateUrl && (
                                            <a
                                                href={internship.certificateUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5 shadow-none"
                                                title="View Completion Certificate"
                                            >
                                                <FaAward className="w-3.5 h-3.5 text-[#FFFFFF]" />
                                                <span>View Certificate</span>
                                                <FaExternalLinkAlt className="w-2.5 h-2.5 opacity-80" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Technologies Used - Simple Brand Icons */}
                                <div className="pt-2">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#707070] dark:text-[#D9D9D9] mb-2">
                                        Technologies Used
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3">
                                        {internship.technologies.map((tech) => {
                                            const Icon = tech.icon;
                                            return (
                                                <div
                                                    key={tech.name}
                                                    className="group relative flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F0F0F0] dark:bg-[#231B1E] border border-[#D9D9D9] dark:border-[#42363A] hover:border-[#8F3D45] transition-colors"
                                                    title={tech.name}
                                                >
                                                    {Icon && <Icon className="w-4 h-4" style={{ color: tech.brandColor }} />}
                                                    <span className="text-xs font-medium text-[#333333] dark:text-[#FFFFFF]">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Responsibilities & Achievements */}
                                <div className="pt-2 border-t border-[#D9D9D9] dark:border-[#42363A]">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#707070] dark:text-[#D9D9D9] mb-2">
                                        Key Technical Work
                                    </p>
                                    <ul className="space-y-1.5">
                                        {internship.achievements.map((item, aIdx) => (
                                            <li key={aIdx} className="text-xs sm:text-sm text-[#707070] dark:text-[#D9D9D9] flex items-start gap-2">
                                                <span className="text-[#8F3D45] font-bold">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* View Certificate Banner inside Internship Card */}
                                {internship.certificateUrl && (
                                    <div className="pt-3 border-t border-[#D9D9D9] dark:border-[#42363A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#F0F0F0]/60 dark:bg-[#231B1E]/60 p-3.5 rounded-lg border border-[#D9D9D9] dark:border-[#42363A]">
                                        <div className="flex items-center gap-2.5">
                                            <div className="p-2 rounded bg-white dark:bg-[#32282B] border border-[#D9D9D9] dark:border-[#42363A] text-[#8F3D45]">
                                                <FaAward className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[#333333] dark:text-[#FFFFFF]">
                                                    {internship.certificateTitle || "Internship Completion Certificate"}
                                                </p>
                                                <p className="text-[11px] text-[#707070] dark:text-[#D9D9D9]">
                                                    Verified credential issued by {internship.company}
                                                </p>
                                            </div>
                                        </div>
                                        <a
                                            href={internship.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary text-xs py-1.5 px-3 self-stretch sm:self-auto text-center flex items-center justify-center gap-1.5"
                                        >
                                            <span>Open Certificate</span>
                                            <FaExternalLinkAlt className="w-3 h-3" />
                                        </a>
                                    </div>
                                )}

                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default InternshipTimeline;
