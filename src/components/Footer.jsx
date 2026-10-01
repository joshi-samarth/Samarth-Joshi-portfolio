import React from 'react';
import { personalInfo } from '../data/data';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const profiles = Object.values(personalInfo.profiles);

    return (
        <footer className="bg-[#292124] border-t border-[#42363A] py-12 text-[#FFFFFF]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                
                <h3 className="text-lg font-bold text-[#FFFFFF]">
                    {personalInfo.name}
                </h3>

                <p className="text-xs text-[#D9D9D9] font-medium">
                    Software Developer • Full Stack Developer • Problem Solver
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#D9D9D9] pt-2">
                    {profiles.map((profile) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FFFFFF] hover:text-[#8F3D45] transition-colors font-medium"
                        >
                            {profile.name}
                        </a>
                    ))}
                </div>

                <div className="pt-6 border-t border-[#42363A] text-xs text-[#D9D9D9]">
                    © {currentYear} {personalInfo.name}. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
