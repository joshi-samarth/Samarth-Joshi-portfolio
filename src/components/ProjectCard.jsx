import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="card-clean flex flex-col justify-between h-full overflow-hidden">
            <div>
                {/* Clean Project Header Area */}
                <div className="h-44 w-full bg-[#F3F4F1] dark:bg-[#181818] border-b border-[#E5E5E0] dark:border-[#2A2A2A] flex flex-col justify-between p-5">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white dark:bg-[#1C1C1C] border border-[#E5E5E0] dark:border-[#2A2A2A] text-[#171717] dark:text-[#F5F5F5]">
                            {project.category}
                        </span>
                        {project.isFeatured && (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                Featured
                            </span>
                        )}
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-lg font-bold text-[#171717] dark:text-[#F5F5F5] truncate">
                            {project.title}
                        </h4>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                    <p className="text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                        {project.shortDescription}
                    </p>

                    {project.problemSolved && (
                        <div className="p-3.5 rounded-lg bg-[#FAFAF8] dark:bg-[#111111] border border-[#E5E5E0] dark:border-[#2A2A2A] space-y-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] block">
                                Problem Solved
                            </span>
                            <p className="text-xs text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                                {project.problemSolved}
                            </p>
                        </div>
                    )}

                    {project.keyFeatures && (
                        <div className="space-y-1.5">
                            <span className="text-xs font-semibold text-[#171717] dark:text-[#F5F5F5] block">
                                Key Features
                            </span>
                            <ul className="space-y-1">
                                {project.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                                    <li key={fIdx} className="text-xs text-[#666666] dark:text-[#A3A3A3] flex items-start gap-2">
                                        <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">•</span>
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Area: Technologies & Links */}
            <div className="px-6 pb-6 pt-3 border-t border-[#E5E5E0] dark:border-[#2A2A2A] space-y-4">
                {/* Tech Icons */}
                <div className="flex flex-wrap items-center gap-2">
                    {project.technologies.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={tech.name}
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F3F4F1] dark:bg-[#181818] border border-[#E5E5E0] dark:border-[#2A2A2A]"
                                title={tech.name}
                            >
                                <Icon className="w-4 h-4" style={{ color: tech.brandColor }} />
                                <span className="text-[11px] font-medium text-[#171717] dark:text-[#F5F5F5]">
                                    {tech.name}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3 pt-1">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 text-xs py-2"
                    >
                        GitHub
                    </a>
                    <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 text-xs py-2"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
