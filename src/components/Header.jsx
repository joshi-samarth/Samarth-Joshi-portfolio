import React, { useState } from 'react';
import { useDarkMode, useScrollPosition, useActiveSection } from '../hooks/useCustomHooks';
import { personalInfo, navLinks } from '../data/data';

const Header = () => {
    const [isDark, setIsDark] = useDarkMode();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollPosition = useScrollPosition();

    const sectionIds = navLinks.map(link => link.href);
    const activeSection = useActiveSection(sectionIds);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-[#FAFAF8] dark:bg-[#111111] border-b border-[#E5E5E0] dark:border-[#2A2A2A]`}
        >
            <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main Navigation">
                
                {/* Brand Name / Logo */}
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-base font-bold text-[#171717] dark:text-[#F5F5F5] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
                >
                    {personalInfo.name}
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className={`text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'text-[#2563EB] dark:text-[#60A5FA] font-semibold'
                                        : 'text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5]'
                                }`}
                            >
                                {link.name}
                            </button>
                        );
                    })}
                </div>

                {/* Actions: Resume CTA & Theme Toggle */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="text-xs font-medium text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5] px-2.5 py-1.5 rounded border border-[#E5E5E0] dark:border-[#2A2A2A]"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? 'Light' : 'Dark'}
                    </button>

                    {/* Resume Button */}
                    <a
                        href={personalInfo.resumeUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Hamburger & Theme Button */}
                <div className="flex md:hidden items-center space-x-3">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="text-xs text-[#666666] dark:text-[#A3A3A3] px-2 py-1 rounded border border-[#E5E5E0] dark:border-[#2A2A2A]"
                    >
                        {isDark ? 'Light' : 'Dark'}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-[#171717] dark:text-[#F5F5F5] focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

            </nav>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#FAFAF8] dark:bg-[#111111] border-b border-[#E5E5E0] dark:border-[#2A2A2A] px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className="block w-full text-left py-2 text-sm font-medium text-[#171717] dark:text-[#F5F5F5]"
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className="pt-2 border-t border-[#E5E5E0] dark:border-[#2A2A2A]">
                        <a
                            href={personalInfo.resumeUrl}
                            download
                            className="btn-primary w-full text-center"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
