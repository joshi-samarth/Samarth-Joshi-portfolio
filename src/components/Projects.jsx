import React from 'react';
import { projectsData } from '../data/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const featuredProject = projectsData.find(p => p.isFeatured) || projectsData[0];
    const otherProjects = projectsData.filter(p => p.id !== featuredProject.id);

    return (
        <section
            id="projects"
            className="py-20 bg-[#F7F3ED] dark:bg-[#171412] border-t border-[#D8CEC2] dark:border-[#40352E] transition-colors duration-300"
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
                        <div className="card-clean bg-[#F7F3ED] dark:bg-[#28211D] p-6 sm:p-8 space-y-6 border border-[#D8CEC2] dark:border-[#40352E] dark:hover:border-[#A66B57]">
                            
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8CEC2] dark:border-[#40352E] pb-4">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6E473B] dark:text-[#A66B57]">
                                        Featured Project
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#291C0E] dark:text-[#F5EFE8] mt-0.5">
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

                            <p className="text-base text-[#6E473B] dark:text-[#C8BBB0] leading-relaxed">
                                {featuredProject.shortDescription || featuredProject.description}
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                {featuredProject.problemSolved && (
                                    <div className="space-y-2">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#291C0E] dark:text-[#F5EFE8]">
                                            Problem Solved
                                        </p>
                                        <p className="text-sm text-[#6E473B] dark:text-[#C8BBB0] leading-relaxed">
                                            {featuredProject.problemSolved}
                                        </p>
                                    </div>
                                )}

                                {((featuredProject.keyFeatures && featuredProject.keyFeatures.length > 0) || (featuredProject.achievements && featuredProject.achievements.length > 0)) && (
                                    <div className="space-y-2">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#291C0E] dark:text-[#F5EFE8]">
                                            {featuredProject.keyFeatures ? "Key Features" : "Key Achievements"}
                                        </p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                            {(featuredProject.keyFeatures || featuredProject.achievements || []).map((feat, fIdx) => (
                                                <li key={fIdx} className="text-xs text-[#6E473B] dark:text-[#C8BBB0] flex items-start gap-2">
                                                    <span className="text-[#6E473B] dark:text-[#A66B57] font-bold">•</span>
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Tech Stack */}
                            <div className="pt-4 border-t border-[#D8CEC2] dark:border-[#40352E]">
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#6E473B] dark:text-[#96877D] mb-3">
                                    Technologies Used
                                </p>
                                <div className="flex flex-wrap items-center gap-3">
                                    {featuredProject.technologies.map((tech) => {
                                        const Icon = tech.icon;
                                        return (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#EDE6DA] dark:bg-[#211C19] border border-[#D8CEC2] dark:border-[#40352E]"
                                            >
                                                <Icon className="w-4 h-4" style={{ color: tech.brandColor }} />
                                                <span className="text-xs font-medium text-[#6E473B] dark:text-[#C8BBB0]">
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
