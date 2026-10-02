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
            className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F7F3ED] dark:bg-[#171412] transition-colors duration-300"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column */}
                    <div className="md:col-span-7 space-y-6 text-left">
                        
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#6E473B] dark:text-[#A66B57]">
                            Hi, I'm
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#291C0E] dark:text-[#F5EFE8] tracking-tight leading-tight">
                            {personalInfo.name}
                        </h1>

                        <p className="text-xl font-semibold text-[#6E473B] dark:text-[#A66B57]">
                            Software Developer
                        </p>

                        <p className="text-base sm:text-lg text-[#6E473B] dark:text-[#C8BBB0] leading-relaxed max-w-xl">
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
                        <div className="pt-6 border-t border-[#D8CEC2] dark:border-[#40352E]">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#6E473B] dark:text-[#96877D] mb-3">
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
                                            className="relative group p-2.5 rounded-lg bg-[#EDE6DA] dark:bg-[#211C19] border border-[#D8CEC2] dark:border-[#40352E] hover:border-[#6E473B] dark:hover:border-[#A66B57] hover:bg-[#F7F3ED] dark:hover:bg-[#28211D] transition-all duration-200"
                                        >
                                            <Icon className="w-5 h-5" style={{ color: profile.brandColor }} />
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#291C0E] dark:bg-[#F5EFE8] text-[#F7F3ED] dark:text-[#171412] text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
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
                        <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-[#D8CEC2] dark:border-[#40352E] shadow-card dark:shadow-darkCard overflow-hidden bg-[#EDE6DA] dark:bg-[#211C19] p-1.5 transition-all duration-300 hover:border-[#6E473B] dark:hover:border-[#A66B57]">
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

