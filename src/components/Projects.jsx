import React from 'react';
import { projectsData } from '../data/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const featuredProject = projectsData.find(p => p.isFeatured) || projectsData[0];
    const otherProjects = projectsData.filter(p => p.id !== featuredProject.id);

    return (
        <section
            id="projects"
            className="py-20 bg-[#FFFFFF] dark:bg-[#292124] border-t border-[#D9D9D9] dark:border-[#42363A]"
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
                            
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D9D9] dark:border-[#42363A] pb-4">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8F3D45] dark:text-[#8F3D45]">
                                        Featured Project
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#333333] dark:text-[#FFFFFF] mt-0.5">
                                        {featuredProject.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-3">
                                    {(featuredProject.githubUrl || featuredProject.github) && (
                                        <a
                                            href={featuredProject.githubUrl || featuredProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {(featuredProject.liveDemoUrl || featuredProject.liveDemo) && (
                                        <a
                                            href={featuredProject.liveDemoUrl || featuredProject.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-base text-[#707070] dark:text-[#D9D9D9] leading-relaxed">
                                {featuredProject.shortDescription || featuredProject.description}
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                {featuredProject.problemSolved && (
                                    <div className="space-y-2">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#333333] dark:text-[#FFFFFF]">
                                            Problem Solved
                                        </p>
                                        <p className="text-sm text-[#707070] dark:text-[#D9D9D9] leading-relaxed">
                                            {featuredProject.problemSolved}
                                        </p>
                                    </div>
                                )}

                                {((featuredProject.keyFeatures && featuredProject.keyFeatures.length > 0) || (featuredProject.achievements && featuredProject.achievements.length > 0)) && (
                                    <div className="space-y-2">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#333333] dark:text-[#FFFFFF]">
                                            {featuredProject.keyFeatures ? "Key Features" : "Key Achievements"}
                                        </p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                            {(featuredProject.keyFeatures || featuredProject.achievements || []).map((feat, fIdx) => (
                                                <li key={fIdx} className="text-xs text-[#707070] dark:text-[#D9D9D9] flex items-start gap-2">
                                                    <span className="text-[#8F3D45] font-bold">•</span>
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Tech Stack Simple Icons */}
                            <div className="pt-4 border-t border-[#D9D9D9] dark:border-[#42363A]">
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#707070] dark:text-[#D9D9D9] mb-3">
                                    Technologies Used
                                </p>
                                <div className="flex flex-wrap items-center gap-3">
                                    {featuredProject.technologies.map((tech) => {
                                        const Icon = tech.icon;
                                        return (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F0F0F0] dark:bg-[#231B1E] border border-[#D9D9D9] dark:border-[#42363A]"
                                            >
                                                <Icon className="w-4 h-4" style={{ color: tech.brandColor }} />
                                                <span className="text-xs font-medium text-[#333333] dark:text-[#FFFFFF]">
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
