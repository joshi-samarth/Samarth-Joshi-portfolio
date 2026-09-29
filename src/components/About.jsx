import React from 'react';
import { aboutMe } from '../data/data';

const About = () => {
    return (
        <section
            id="about"
            className="py-20 bg-[#F3F4F1] dark:bg-[#181818] border-t border-[#E5E5E0] dark:border-[#2A2A2A]"
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
                    <div className="lg:col-span-5 card-clean p-6 sm:p-8 space-y-4">
                        <h3 className="text-lg font-bold text-[#171717] dark:text-[#F5F5F5]">
                            Developer Mindset
                        </h3>
                        <p className="text-base text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                            {aboutMe.summary}
                        </p>
                        <p className="text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                            I am focused on writing readable, testable code with clean separation of concerns and optimized algorithmic performance.
                        </p>
                    </div>

                    {/* 6 Core Pillars */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {aboutMe.pillars.map((pillar) => (
                            <div
                                key={pillar.title}
                                className="card-clean p-5 space-y-2"
                            >
                                <h4 className="text-base font-bold text-[#171717] dark:text-[#F5F5F5]">
                                    {pillar.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
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
