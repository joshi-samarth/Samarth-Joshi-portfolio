import React from 'react';
import { personalInfo } from '../data/data';

const CodingProfiles = () => {
    const profiles = Object.values(personalInfo.profiles);

    return (
        <section
            id="coding-profiles"
            className="py-20 bg-[#FAFAFA] dark:bg-[#121212] border-t border-[#CCCCCC] dark:border-[#333333] transition-colors duration-300"
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
                                className="card-clean p-6 flex flex-col justify-between space-y-4 hover:border-[#000000] dark:hover:border-[#FFFFFF] transition-all duration-200"
                                aria-label={`Visit ${profile.name} profile`}
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2.5 rounded-lg bg-[#FAFAFA] dark:bg-[#121212] border border-[#CCCCCC] dark:border-[#333333]">
                                            {Icon && <Icon className="w-6 h-6" style={{ color: profile.brandColor }} />}
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#FAFAFA] dark:bg-[#121212] text-[#666666] dark:text-[#CCCCCC] border border-[#CCCCCC] dark:border-[#333333]">
                                            {profile.badge}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">
                                            {profile.name}
                                        </h3>
                                        <p className="text-xs text-[#666666] dark:text-[#999999] font-mono">
                                            {profile.username}
                                        </p>
                                    </div>

                                    <p className="text-xs sm:text-sm text-[#666666] dark:text-[#CCCCCC] leading-relaxed">
                                        {profile.description}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[#CCCCCC] dark:border-[#333333] flex items-center justify-between text-xs font-bold text-[#000000] dark:text-[#FFFFFF]">
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
