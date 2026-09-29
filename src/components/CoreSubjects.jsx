import React from 'react';
import { coreCsSubjects } from '../data/data';

const CoreSubjects = () => {
    return (
        <section
            id="core-subjects"
            className="py-20 bg-[#FAFAF8] dark:bg-[#111111] border-t border-[#E5E5E0] dark:border-[#2A2A2A]"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="max-w-2xl mb-12">
                    <p className="section-subtitle mb-1">Foundations</p>
                    <h2 className="section-title">Core CS Fundamentals</h2>
                </div>

                {/* 3x3 Grid of Minimal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreCsSubjects.map((subject) => {
                        const Icon = subject.icon;
                        return (
                            <div
                                key={subject.id}
                                className="card-clean p-6 space-y-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded bg-[#F3F4F1] dark:bg-[#181818] border border-[#E5E5E0] dark:border-[#2A2A2A] text-[#2563EB] dark:text-[#60A5FA]">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-[#171717] dark:text-[#F5F5F5]">
                                        {subject.title}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
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
