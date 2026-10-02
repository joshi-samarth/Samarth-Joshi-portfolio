import React from 'react';
import { personalInfo } from '../data/data';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const profiles = Object.values(personalInfo.profiles);

    return (
        <footer className="bg-[#F2F2F1] dark:bg-[#181818] border-t border-[#DDDDDD] dark:border-[#333333] py-12 text-[#2F2F2F] dark:text-[#F5F5F5] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                
                <h3 className="text-lg font-bold text-[#2F2F2F] dark:text-[#F5F5F5]">
                    {personalInfo.name}
                </h3>

                <p className="text-xs text-[#666666] dark:text-[#B5B5B5] font-medium">
                    Software Developer • Full Stack Developer • Problem Solver
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#666666] dark:text-[#B5B5B5] pt-2">
                    {profiles.map((profile) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#2F2F2F] dark:hover:text-[#F5F5F5] transition-colors font-medium"
                        >
                            {profile.name}
                        </a>
                    ))}
                </div>

                <div className="pt-6 border-t border-[#DDDDDD] dark:border-[#333333] text-xs text-[#999999] dark:text-[#888888]">
                    © {currentYear} {personalInfo.name}. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
