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

    return (
        <section
            id="experience"
            ref={ref}
            className="section-padding bg-gray-50 dark:bg-dark-card"
        >
            <div className="container-custom">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isIntersecting ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Experience & <span className="text-primary">Education</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
                        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                            My professional journey and educational background
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />

                        {experience.map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                                    }`}
                            >
                                <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white dark:bg-dark-bg border-4 border-primary flex items-center justify-center shadow-lg z-10">
                                        {item.type === 'work' ? (
                                            <FaBriefcase className="text-primary text-2xl" />
                                        ) : (
                                            <FaGraduationCap className="text-primary text-2xl" />
                                        )}
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className={`card w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                                            }`}
                                    >
                                        {/* Mobile Icon */}
                                        <div className="md:hidden mb-4">
                                            {item.type === 'work' ? (
                                                <FaBriefcase className="text-primary text-2xl" />
                                            ) : (
                                                <FaGraduationCap className="text-primary text-2xl" />
                                            )}
                                        </div>

                                        {/* Date Badge */}
                                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                            <FaCalendar />
                                            {item.period}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {item.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                                            <span className="font-semibold">{item.company}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <FaMapMarkerAlt className="text-sm" />
                                                {item.location}
                                            </span>
                                        </div>

                                        <ul className="space-y-2">
                                            {item.description.map((point, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                                                >
                                                    <span className="text-primary mt-1.5">▹</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
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
