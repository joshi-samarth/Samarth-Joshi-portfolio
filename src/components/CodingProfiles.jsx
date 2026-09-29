import React from 'react';
import { personalInfo } from '../data/data';

const CodingProfiles = () => {
    const profiles = Object.values(personalInfo.profiles);

    return (
        <section
            id="coding-profiles"
            className="py-20 bg-[#F3F4F1] dark:bg-[#181818] border-t border-[#E5E5E0] dark:border-[#2A2A2A]"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="max-w-2xl mb-12">
                    <p className="section-subtitle mb-1">Profiles</p>
                    <h2 className="section-title">Coding & Professional Profiles</h2>
                </div>

                {/* Profiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {profiles.map((profile) => {
                        const Icon = profile.icon;
                        return (
                            <a
                                key={profile.name}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-clean p-6 flex flex-col justify-between space-y-4 hover:border-[#2563EB] dark:hover:border-[#60A5FA]"
                                aria-label={`Visit ${profile.name} profile`}
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 rounded bg-[#FAFAF8] dark:bg-[#111111] border border-[#E5E5E0] dark:border-[#2A2A2A]">
                                            <Icon className="w-6 h-6" style={{ color: profile.brandColor }} />
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#FAFAF8] dark:bg-[#111111] text-[#666666] dark:text-[#A3A3A3] border border-[#E5E5E0] dark:border-[#2A2A2A]">
                                            {profile.badge}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-[#171717] dark:text-[#F5F5F5]">
                                            {profile.name}
                                        </h3>
                                        <p className="text-xs text-[#666666] dark:text-[#A3A3A3] font-mono">
                                            {profile.username}
                                        </p>
                                    </div>

                                    <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                                        {profile.description}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[#E5E5E0] dark:border-[#2A2A2A] flex items-center justify-between text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA]">
                                    <span>Visit Profile</span>
                                    <span>→</span>
                                </div>
                            </a>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default CodingProfiles;
