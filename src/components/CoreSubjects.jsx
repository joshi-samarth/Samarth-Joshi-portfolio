import React from 'react';
import { coreCsSubjects } from '../data/data';

const CoreSubjects = () => {
    return (
        <section
            id="core-subjects"
            className="py-20 bg-[#FFFFFF] dark:bg-[#292124] border-t border-[#D9D9D9] dark:border-[#42363A]"
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
                                    <div className="p-2 rounded bg-[#F0F0F0] dark:bg-[#231B1E] border border-[#D9D9D9] dark:border-[#42363A] text-[#8F3D45]">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-[#333333] dark:text-[#FFFFFF]">
                                        {subject.title}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-sm text-[#707070] dark:text-[#D9D9D9] leading-relaxed">
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
