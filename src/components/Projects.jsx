import React from 'react';
import { projectsData } from '../data/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const featuredProject = projectsData.find(p => p.isFeatured) || projectsData[0];
    const otherProjects = projectsData.filter(p => p.id !== featuredProject.id);

    return (
        <section
            id="projects"
            className="py-20 bg-[#FAFAF8] dark:bg-[#111111] border-t border-[#E5E5E0] dark:border-[#2A2A2A]"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="max-w-2xl mb-12">
                    <p className="section-subtitle mb-1">Showcase</p>
                    <h2 className="section-title">Projects</h2>
                </div>

                {/* Featured Project Spotlight */}
                {featuredProject && (
                    <div className="mb-12">
                        <div className="card-clean p-6 sm:p-8 space-y-6">
                            
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E5E0] dark:border-[#2A2A2A] pb-4">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                        Featured Project
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] dark:text-[#F5F5F5] mt-0.5">
                                        {featuredProject.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-3">
                                    <a
                                        href={featuredProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={featuredProject.liveDemoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>

                            <p className="text-base text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                                {featuredProject.shortDescription}
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#F5F5F5]">
                                        Problem Solved
                                    </p>
                                    <p className="text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                                        {featuredProject.problemSolved}
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#F5F5F5]">
                                        Key Features
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                        {featuredProject.keyFeatures.map((feat, fIdx) => (
                                            <li key={fIdx} className="text-xs text-[#666666] dark:text-[#A3A3A3] flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">•</span>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Tech Stack Simple Icons */}
                            <div className="pt-4 border-t border-[#E5E5E0] dark:border-[#2A2A2A]">
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A3A3A3] mb-3">
                                    Technologies Used
                                </p>
                                <div className="flex flex-wrap items-center gap-3">
                                    {featuredProject.technologies.map((tech) => {
                                        const Icon = tech.icon;
                                        return (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#F3F4F1] dark:bg-[#181818] border border-[#E5E5E0] dark:border-[#2A2A2A]"
                                            >
                                                <Icon className="w-4 h-4" style={{ color: tech.brandColor }} />
                                                <span className="text-xs font-medium text-[#171717] dark:text-[#F5F5F5]">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/* Additional Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
