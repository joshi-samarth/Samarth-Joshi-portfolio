import React from 'react';
import { coreCsSubjects } from '../data/data';

const CoreSubjects = () => {
    return (
        <section
            id="core-subjects"
            className="py-20 bg-[#F7F3ED] dark:bg-[#171412] border-t border-[#D8CEC2] dark:border-[#40352E] transition-colors duration-300"
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
                                className="card-clean bg-[#F7F3ED] dark:bg-[#28211D] p-6 space-y-3 border border-[#D8CEC2] dark:border-[#40352E] hover:border-[#6E473B] dark:hover:border-[#A66B57]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-lg bg-[#EDE6DA] dark:bg-[#211C19] border border-[#D8CEC2] dark:border-[#40352E] text-[#291C0E] dark:text-[#A66B57]">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-[#291C0E] dark:text-[#F5EFE8]">
                                        {subject.title}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-sm text-[#6E473B] dark:text-[#C8BBB0] leading-relaxed">
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
