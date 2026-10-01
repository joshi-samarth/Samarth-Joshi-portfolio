import React from 'react';
import { personalInfo } from '../data/data';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const profiles = Object.values(personalInfo.profiles);

    return (
        <footer className="bg-[#FAFAFA] dark:bg-[#000000] border-t border-[#CCCCCC] dark:border-[#333333] py-12 text-[#000000] dark:text-[#FFFFFF] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                
                <h3 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">
                    {personalInfo.name}
                </h3>

                <p className="text-xs text-[#666666] dark:text-[#CCCCCC] font-medium">
                    Software Developer • Full Stack Developer • Problem Solver
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#666666] dark:text-[#CCCCCC] pt-2">
                    {profiles.map((profile) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#000000] dark:hover:text-[#FFFFFF] transition-colors font-medium"
                        >
                            {profile.name}
                        </a>
                    ))}
                </div>

                <div className="pt-6 border-t border-[#CCCCCC] dark:border-[#333333] text-xs text-[#999999] dark:text-[#666666]">
                    © {currentYear} {personalInfo.name}. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
