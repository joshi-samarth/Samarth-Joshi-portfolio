import React from 'react';
import { coreCsSubjects } from '../data/data';

const CoreSubjects = () => {
    return (
        <section
            id="core-subjects"
            className="py-20 bg-[#FFFFFF] dark:bg-[#000000] border-t border-[#CCCCCC] dark:border-[#333333] transition-colors duration-300"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="max-w-2xl mb-12">
                    <p className="section-subtitle mb-1">Foundations</p>
                    <h2 className="section-title">Core CS Fundamentals</h2>
                </div>

                {/* Grid of Minimal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreCsSubjects.map((subject) => {
                        const Icon = subject.icon;
                        return (
                            <div
                                key={subject.id}
                                className="card-clean p-6 space-y-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] dark:bg-[#121212] border border-[#CCCCCC] dark:border-[#333333] text-[#000000] dark:text-[#FFFFFF]">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-[#000000] dark:text-[#FFFFFF]">
                                        {subject.title}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-sm text-[#666666] dark:text-[#CCCCCC] leading-relaxed">
                                    {subject.shortDesc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default CoreSubjects;
