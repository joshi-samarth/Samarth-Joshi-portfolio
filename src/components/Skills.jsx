import React from 'react';
import { skillsData } from '../data/data';

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-20 bg-[#F3F4F1] dark:bg-[#181818] border-t border-[#E5E5E0] dark:border-[#2A2A2A]"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="max-w-2xl mb-12">
                    <p className="section-subtitle mb-1">Tech Stack</p>
                    <h2 className="section-title">Skills</h2>
                </div>

                {/* Categorized Grids */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skillsData).map(([key, category]) => (
                        <div
                            key={key}
                            className="card-clean p-6 flex flex-col justify-between space-y-4"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-[#171717] dark:text-[#F5F5F5] mb-1">
                                    {category.title}
                                </h3>
                                <p className="text-xs text-[#666666] dark:text-[#A3A3A3] mb-4">
                                    {category.description}
                                </p>

                                <div className="grid grid-cols-2 gap-2.5">
                                    {category.items.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={item.name}
                                                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#FAFAF8] dark:bg-[#111111] border border-[#E5E5E0] dark:border-[#2A2A2A]"
                                            >
                                                <Icon className="w-5 h-5 flex-shrink-0" style={{ color: item.brandColor }} />
                                                <span className="text-xs font-medium text-[#171717] dark:text-[#F5F5F5] truncate">
                                                    {item.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
