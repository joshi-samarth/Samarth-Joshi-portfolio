import React from 'react';
import { skillsData } from '../data/data';

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-20 bg-[#F6F0E8] dark:bg-[#292124] border-t border-[#DDD2C8] dark:border-[#42363A]"
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
                                <h3 className="text-lg font-bold text-[#252222] dark:text-[#F6F0E8] mb-1 flex items-center gap-2">
                                    <span className="w-1.5 h-4 bg-[#8F3D45] rounded-full"></span>
                                    <span>{category.title}</span>
                                </h3>
                                <p className="text-xs text-[#756D69] dark:text-[#DDD2C8] mb-4">
                                    {category.description}
                                </p>

                                <div className="grid grid-cols-2 gap-2.5">
                                    {category.items.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={item.name}
                                                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F6F0E8] dark:bg-[#231B1E] border border-[#DDD2C8] dark:border-[#42363A] hover:border-[#8F3D45] dark:hover:border-[#8F3D45] transition-colors"
                                            >
                                                {Icon && <Icon className="w-5 h-5 flex-shrink-0" style={{ color: item.brandColor }} />}
                                                <span className="text-xs font-medium text-[#252222] dark:text-[#F6F0E8] truncate">
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
