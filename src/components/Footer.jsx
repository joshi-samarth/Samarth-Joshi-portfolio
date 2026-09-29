import React from 'react';
import { personalInfo } from '../data/data';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const profiles = Object.values(personalInfo.profiles);

    return (
        <footer className="bg-[#FAFAF8] dark:bg-[#111111] border-t border-[#E5E5E0] dark:border-[#2A2A2A] py-12">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                
                <h3 className="text-lg font-bold text-[#171717] dark:text-[#F5F5F5]">
                    {personalInfo.name}
                </h3>

                <p className="text-xs text-[#666666] dark:text-[#A3A3A3] font-medium">
                    Software Developer • Full Stack Developer • Problem Solver
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#666666] dark:text-[#A3A3A3] pt-2">
                    {profiles.map((profile) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
                        >
                            {profile.name}
                        </a>
                    ))}
                </div>

                <div className="pt-6 border-t border-[#E5E5E0] dark:border-[#2A2A2A] text-xs text-[#666666] dark:text-[#A3A3A3]">
                    © {currentYear} {personalInfo.name}. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
