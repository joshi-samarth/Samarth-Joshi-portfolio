import React from 'react';
import { personalInfo } from '../data/data';

const CodingProfiles = () => {
    const profiles = Object.values(personalInfo.profiles);

    return (
        <section
            id="coding-profiles"
            className="py-20 bg-[#F6F0E8] dark:bg-[#292124] border-t border-[#DDD2C8] dark:border-[#42363A]"
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
                                        <div className="p-2 rounded bg-[#F6F0E8] dark:bg-[#231B1E] border border-[#DDD2C8] dark:border-[#42363A]">
                                            {Icon && <Icon className="w-6 h-6" style={{ color: profile.brandColor }} />}
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#F6F0E8] dark:bg-[#231B1E] text-[#756D69] dark:text-[#DDD2C8] border border-[#DDD2C8] dark:border-[#42363A]">
                                            {profile.badge}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-[#252222] dark:text-[#F6F0E8]">
                                            {profile.name}
                                        </h3>
                                        <p className="text-xs text-[#756D69] dark:text-[#DDD2C8] font-mono">
                                            {profile.username}
                                        </p>
                                    </div>

                                    <p className="text-xs sm:text-sm text-[#756D69] dark:text-[#DDD2C8] leading-relaxed">
                                        {profile.description}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-[#DDD2C8] dark:border-[#42363A] flex items-center justify-between text-xs font-semibold text-[#8F3D45] dark:text-[#8F3D45]">
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
