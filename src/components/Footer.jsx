import React from 'react';
import { personalInfo } from '../data/data';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const profiles = Object.values(personalInfo.profiles);

    return (
        <footer className="bg-[#291C0E] dark:bg-[#100E0C] border-t border-[#4F3028] dark:border-[#40352E] py-12 text-[#F7F3ED] dark:text-[#F5EFE8] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                
                <h3 className="text-lg font-bold text-[#F7F3ED] dark:text-[#F5EFE8]">
                    {personalInfo.name}
                </h3>

                <p className="text-xs text-[#D8CEC2] dark:text-[#96877D] font-medium">
                    Software Developer • Full Stack Developer • Problem Solver
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#D8CEC2] dark:text-[#C8BBB0] pt-2">
                    {profiles.map((profile) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F7F3ED] dark:text-[#C8BBB0] hover:text-[#6E473B] dark:hover:text-[#C0836B] transition-colors font-medium"
                        >
                            {profile.name}
                        </a>
                    ))}
                </div>

                <div className="pt-6 border-t border-[#4F3028] dark:border-[#40352E] text-xs text-[#D8CEC2] dark:text-[#96877D]">
                    © {currentYear} {personalInfo.name}. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
