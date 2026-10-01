import React, { useState } from 'react';
import { personalInfo } from '../data/data';

const Hero = () => {
    const [imgError, setImgError] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const profileList = Object.values(personalInfo.profiles);

    return (
        <section
            id="home"
            className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FFFFFF] dark:bg-[#000000] transition-colors duration-300"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column */}
                    <div className="md:col-span-7 space-y-6 text-left">
                        
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#666666] dark:text-[#CCCCCC]">
                            Hi, I'm
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#000000] dark:text-[#FFFFFF] tracking-tight leading-tight">
                            {personalInfo.name}
                        </h1>

                        <p className="text-xl font-semibold text-[#333333] dark:text-[#CCCCCC]">
                            Software Developer
                        </p>

                        <p className="text-base sm:text-lg text-[#666666] dark:text-[#999999] leading-relaxed max-w-xl">
                            {personalInfo.heroIntro}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="btn-primary"
                            >
                                View Projects
                            </button>

                            <a
                                href={personalInfo.resumeUrl}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                Download Resume
                            </a>
                        </div>

                        {/* Social / Profile Icons */}
                        <div className="pt-6 border-t border-[#CCCCCC] dark:border-[#333333]">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#999999] mb-3">
                                Profiles & Links
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                                {profileList.map((profile) => {
                                    const Icon = profile.icon;
                                    return (
                                        <a
                                            key={profile.name}
                                            href={profile.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={`${profile.name} (${profile.username})`}
                                            aria-label={profile.name}
                                            className="relative group p-2.5 rounded-lg bg-[#FFFFFF] dark:bg-[#1A1A1A] border border-[#CCCCCC] dark:border-[#333333] text-[#000000] dark:text-[#FFFFFF] hover:border-[#000000] dark:hover:border-[#FFFFFF] hover:bg-[#F5F5F5] dark:hover:bg-[#262626] transition-all duration-200"
                                        >
                                            <Icon className="w-5 h-5" style={{ color: profile.brandColor }} />
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#000000] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#000000] text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                                                {profile.name}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Profile Image */}
                    <div className="md:col-span-5 flex justify-center md:justify-end">
                        <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-[#CCCCCC] dark:border-[#333333] shadow-card dark:shadow-darkCard overflow-hidden bg-[#FFFFFF] dark:bg-[#1A1A1A] p-1.5 transition-all duration-300 hover:border-[#666666] dark:hover:border-[#999999]">
                            <img
                                src={imgError ? "/profile-placeholder.svg" : personalInfo.profileImage}
                                alt={personalInfo.name}
                                className="w-full h-full object-cover rounded-full"
                                onError={() => setImgError(true)}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

