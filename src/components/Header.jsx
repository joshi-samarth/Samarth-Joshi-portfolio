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
            className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-[#FAFAF9]/90 dark:bg-[#181818]/90 backdrop-blur-md border-b border-[#DDDDDD] dark:border-[#333333]"
        >
            <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main Navigation">
                
                {/* Brand Name / Logo */}
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-base font-extrabold text-[#2F2F2F] dark:text-[#F5F5F5] hover:text-[#666666] dark:hover:text-[#B5B5B5] transition-colors tracking-tight"
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
                                        ? 'text-[#2F2F2F] dark:text-[#F5F5F5] font-bold border-b-2 border-[#222222] dark:border-[#F5F5F5] pb-0.5'
                                        : 'text-[#666666] dark:text-[#B5B5B5] hover:text-[#2F2F2F] dark:hover:text-[#F5F5F5]'
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
                        className="text-xs font-semibold text-[#2F2F2F] dark:text-[#F5F5F5] bg-[#F2F2F1] dark:bg-[#222222] hover:bg-[#DDDDDD]/50 dark:hover:bg-[#333333] px-3 py-1.5 rounded-md border border-[#DDDDDD] dark:border-[#333333] transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
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
                        className="text-xs font-semibold text-[#2F2F2F] dark:text-[#F5F5F5] bg-[#F2F2F1] dark:bg-[#222222] px-2.5 py-1 rounded border border-[#DDDDDD] dark:border-[#333333]"
                    >
                        {isDark ? '☀️ Light' : '🌙 Dark'}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-[#2F2F2F] dark:text-[#F5F5F5] focus:outline-none"
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
                <div className="md:hidden bg-[#FAFAF9] dark:bg-[#181818] border-b border-[#DDDDDD] dark:border-[#333333] px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className="block w-full text-left py-2 text-sm font-medium text-[#2F2F2F] dark:text-[#F5F5F5] hover:text-[#666666] dark:hover:text-[#B5B5B5]"
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className="pt-2 border-t border-[#DDDDDD] dark:border-[#333333]">
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
