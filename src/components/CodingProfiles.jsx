import React from 'react';
import { personalInfo } from '../data/data';

const CodingProfiles = () => {
    const profiles = Object.values(personalInfo.profiles);

    return (
        <section
            id="coding-profiles"
            className="py-20 bg-[#F0F0F0] dark:bg-[#292124] border-t border-[#D9D9D9] dark:border-[#42363A]"
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
                                className="card-clean p-6 flex flex-col justify-between space-y-4 hover:border-[#8F3D45] dark:hover:border-[#8F3D45] transition-colors"
                                aria-label={`Visit ${profile.name} profile`}
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 rounded bg-[#F0F0F0] dark:bg-[#231B1E] border border-[#D9D9D9] dark:border-[#42363A]">
                                            {Icon && <Icon className="w-6 h-6" style={{ color: profile.brandColor }} />}
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#F0F0F0] dark:bg-[#231B1E] text-[#707070] dark:text-[#D9D9D9] border border-[#D9D9D9] dark:border-[#42363A]">
                                            {profile.badge}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-[#333333] dark:text-[#FFFFFF]">
                                            {profile.name}
                                        </h3>
                                        <p className="text-xs text-[#707070] dark:text-[#D9D9D9] font-mono">
                                            {profile.username}
                                        </p>
                                    </div>

                                    <p className="text-xs sm:text-sm text-[#707070] dark:text-[#D9D9D9] leading-relaxed">
                                        {profile.description}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[#D9D9D9] dark:border-[#42363A] flex items-center justify-between text-xs font-semibold text-[#8F3D45] dark:text-[#8F3D45]">
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
