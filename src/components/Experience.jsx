import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useCustomHooks';
import { experience } from '../data/data';

const Experience = () => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    if (!experience || experience.length === 0) return null;

    return (
        <section
            id="experience"
            ref={ref}
            className="py-20 bg-[#FAFAFA] dark:bg-[#121212] border-t border-[#CCCCCC] dark:border-[#333333] transition-colors duration-300"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isIntersecting ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-left mb-16 max-w-2xl">
                        <p className="section-subtitle mb-1">Career Journey</p>
                        <h2 className="section-title">
                            Experience & Education
                        </h2>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#CCCCCC] dark:bg-[#333333] hidden md:block" />

                        {experience.map((item, index) => (
                            <motion.div
                                key={item.id || index}
                                variants={itemVariants}
                                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                                    }`}
                            >
                                <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#FFFFFF] dark:bg-[#000000] border-2 border-[#000000] dark:border-[#FFFFFF] items-center justify-center shadow-subtle z-10">
                                        {item.type === 'work' ? (
                                            <FaBriefcase className="text-[#000000] dark:text-[#FFFFFF] text-lg" />
                                        ) : (
                                            <FaGraduationCap className="text-[#000000] dark:text-[#FFFFFF] text-lg" />
                                        )}
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        className={`card-clean p-6 w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                                            }`}
                                    >
                                        {/* Mobile Icon */}
                                        <div className="md:hidden mb-4">
                                            {item.type === 'work' ? (
                                                <FaBriefcase className="text-[#000000] dark:text-[#FFFFFF] text-xl" />
                                            ) : (
                                                <FaGraduationCap className="text-[#000000] dark:text-[#FFFFFF] text-xl" />
                                            )}
                                        </div>

                                        {/* Date Badge */}
                                        <div className="inline-flex items-center gap-2 bg-[#FAFAFA] dark:bg-[#121212] text-[#000000] dark:text-[#FFFFFF] border border-[#CCCCCC] dark:border-[#333333] px-3 py-1 rounded-md text-xs font-semibold mb-4">
                                            <FaCalendar />
                                            {item.period}
                                        </div>

                                        <h3 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-1">
                                            {item.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-[#666666] dark:text-[#999999] text-xs font-medium mb-4">
                                            <span className="font-semibold text-[#000000] dark:text-[#FFFFFF]">{item.company}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <FaMapMarkerAlt className="text-xs" />
                                                {item.location}
                                            </span>
                                        </div>

                                        {Array.isArray(item.description) && (
                                            <ul className="space-y-1.5">
                                                {item.description.map((point, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2 text-xs sm:text-sm text-[#666666] dark:text-[#CCCCCC]"
                                                    >
                                                        <span className="text-[#000000] dark:text-[#FFFFFF] mt-0.5">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
