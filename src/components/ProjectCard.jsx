import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="card-clean flex flex-col justify-between h-full overflow-hidden">
            <div>
                {/* Project Header Area */}
                <div className="h-44 w-full bg-[#FAFAF9] dark:bg-[#181818] border-b border-[#DDDDDD] dark:border-[#333333] flex flex-col justify-between p-5">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#F2F2F1] dark:bg-[#222222] border border-[#DDDDDD] dark:border-[#333333] text-[#2F2F2F] dark:text-[#F5F5F5]">
                            {project.category || project.duration || "Project"}
                        </span>
                        {project.isFeatured && (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F2F2F] dark:text-[#F5F5F5]">
                                Featured
                            </span>
                        )}
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-lg font-bold text-[#2F2F2F] dark:text-[#F5F5F5] truncate">
                            {project.title}
                        </h4>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                    <p className="text-sm text-[#666666] dark:text-[#B5B5B5] leading-relaxed">
                        {project.shortDescription || project.description}
                    </p>

                    {project.problemSolved && (
                        <div className="p-3.5 rounded-lg bg-[#FAFAF9] dark:bg-[#181818] border border-[#DDDDDD] dark:border-[#333333] space-y-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F2F2F] dark:text-[#F5F5F5] block">
                                Problem Solved
                            </span>
                            <p className="text-xs text-[#666666] dark:text-[#B5B5B5] leading-relaxed">
                                {project.problemSolved}
                            </p>
                        </div>
                    )}

                    {((project.keyFeatures && project.keyFeatures.length > 0) || (project.achievements && project.achievements.length > 0)) && (
                        <div className="space-y-1.5">
                            <span className="text-xs font-semibold text-[#2F2F2F] dark:text-[#F5F5F5] block">
                                {project.keyFeatures ? "Key Features" : "Key Highlights"}
                            </span>
                            <ul className="space-y-1">
                                {(project.keyFeatures || project.achievements || []).slice(0, 4).map((feat, fIdx) => (
                                    <li key={fIdx} className="text-xs text-[#666666] dark:text-[#B5B5B5] flex items-start gap-2">
                                        <span className="text-[#222222] dark:text-[#F5F5F5] font-bold">•</span>
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Area: Technologies & Links */}
            <div className="px-6 pb-6 pt-3 border-t border-[#DDDDDD] dark:border-[#333333] space-y-4">
                {/* Tech Icons */}
                {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                        {project.technologies.map((tech) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={tech.name}
                                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FAFAF9] dark:bg-[#181818] border border-[#DDDDDD] dark:border-[#333333]"
                                    title={tech.name}
                                >
                                    {Icon && <Icon className="w-4 h-4" style={{ color: tech.brandColor }} />}
                                    <span className="text-[11px] font-medium text-[#2F2F2F] dark:text-[#F5F5F5]">
                                        {tech.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* CTAs */}
                <div className="flex items-center gap-3 pt-1">
                    {(project.githubUrl || project.github) && (
                        <a
                            href={project.githubUrl || project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex-1 text-xs py-2 text-center"
                        >
                            GitHub
                        </a>
                    )}
                    {(project.liveDemoUrl || project.liveDemo) && (
                        <a
                            href={project.liveDemoUrl || project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex-1 text-xs py-2 text-center"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
