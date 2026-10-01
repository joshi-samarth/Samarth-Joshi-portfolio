import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="card-clean flex flex-col justify-between h-full overflow-hidden">
            <div>
                {/* Clean Project Header Area */}
                <div className="h-44 w-full bg-[#F0F0F0] dark:bg-[#231B1E] border-b border-[#D9D9D9] dark:border-[#42363A] flex flex-col justify-between p-5">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#FFFFFF] dark:bg-[#32282B] border border-[#D9D9D9] dark:border-[#42363A] text-[#333333] dark:text-[#FFFFFF]">
                            {project.category || project.duration || "Project"}
                        </span>
                        {project.isFeatured && (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F3D45] dark:text-[#8F3D45]">
                                Featured
                            </span>
                        )}
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-lg font-bold text-[#333333] dark:text-[#FFFFFF] truncate">
                            {project.title}
                        </h4>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                    <p className="text-sm text-[#707070] dark:text-[#D9D9D9] leading-relaxed">
                        {project.shortDescription || project.description}
                    </p>

                    {project.problemSolved && (
                        <div className="p-3.5 rounded-lg bg-[#F0F0F0]/60 dark:bg-[#231B1E]/60 border border-[#D9D9D9] dark:border-[#42363A] space-y-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F3D45] dark:text-[#8F3D45] block">
                                Problem Solved
                            </span>
                            <p className="text-xs text-[#707070] dark:text-[#D9D9D9] leading-relaxed">
                                {project.problemSolved}
                            </p>
                        </div>
                    )}

                    {((project.keyFeatures && project.keyFeatures.length > 0) || (project.achievements && project.achievements.length > 0)) && (
                        <div className="space-y-1.5">
                            <span className="text-xs font-semibold text-[#333333] dark:text-[#FFFFFF] block">
                                {project.keyFeatures ? "Key Features" : "Key Highlights"}
                            </span>
                            <ul className="space-y-1">
                                {(project.keyFeatures || project.achievements || []).slice(0, 4).map((feat, fIdx) => (
                                    <li key={fIdx} className="text-xs text-[#707070] dark:text-[#D9D9D9] flex items-start gap-2">
                                        <span className="text-[#8F3D45] font-bold">•</span>
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Area: Technologies & Links */}
            <div className="px-6 pb-6 pt-3 border-t border-[#D9D9D9] dark:border-[#42363A] space-y-4">
                {/* Tech Icons */}
                {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                        {project.technologies.map((tech) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={tech.name}
                                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F0F0F0] dark:bg-[#231B1E] border border-[#D9D9D9] dark:border-[#42363A]"
                                    title={tech.name}
                                >
                                    {Icon && <Icon className="w-4 h-4" style={{ color: tech.brandColor }} />}
                                    <span className="text-[11px] font-medium text-[#333333] dark:text-[#FFFFFF]">
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
