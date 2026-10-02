import React from 'react';
import { aboutMe } from '../data/data';

const About = () => {
    return (
        <section
            id="about"
            className="py-20 bg-[#EDE6DA] dark:bg-[#211C19] border-t border-[#D8CEC2] dark:border-[#40352E] transition-colors duration-300"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="max-w-2xl mb-12">
                    <p className="section-subtitle mb-1">Overview</p>
                    <h2 className="section-title">About Me</h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Summary */}
                    <div className="lg:col-span-5 card-clean bg-[#F7F3ED] dark:bg-[#28211D] p-6 sm:p-8 space-y-4 border border-[#D8CEC2] dark:border-[#40352E] dark:hover:border-[#A66B57]">
                        <h3 className="text-lg font-bold text-[#291C0E] dark:text-[#F5EFE8]">
                            Developer Mindset
                        </h3>
                        <p className="text-base text-[#6E473B] dark:text-[#C8BBB0] leading-relaxed">
                            {aboutMe.summary}
                        </p>
                        <p className="text-sm text-[#6E473B] dark:text-[#C8BBB0] leading-relaxed">
                            I am focused on writing readable, testable code with clean separation of concerns and optimized algorithmic performance.
                        </p>
                    </div>

                    {/* 6 Core Pillars */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {aboutMe.pillars.map((pillar) => (
                            <div
                                key={pillar.title}
                                className="card-clean bg-[#F7F3ED] dark:bg-[#28211D] p-5 space-y-2 border border-[#D8CEC2] dark:border-[#40352E] dark:hover:border-[#A66B57]"
                            >
                                <h4 className="text-base font-bold text-[#291C0E] dark:text-[#F5EFE8] flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#6E473B] dark:bg-[#A66B57]"></span>
                                    <span>{pillar.title}</span>
                                </h4>
                                <p className="text-xs sm:text-sm text-[#6E473B] dark:text-[#C8BBB0] leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
