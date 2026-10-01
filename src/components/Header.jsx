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
            className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-[#FFFFFF]/90 dark:bg-[#000000]/90 backdrop-blur-md border-b border-[#CCCCCC] dark:border-[#333333]"
        >
            <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main Navigation">
                
                {/* Brand Name / Logo */}
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-base font-extrabold text-[#000000] dark:text-[#FFFFFF] hover:text-[#666666] dark:hover:text-[#CCCCCC] transition-colors tracking-tight"
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
                                        ? 'text-[#000000] dark:text-[#FFFFFF] font-bold border-b-2 border-[#000000] dark:border-[#FFFFFF] pb-0.5'
                                        : 'text-[#666666] dark:text-[#999999] hover:text-[#000000] dark:hover:text-[#FFFFFF]'
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
                        className="text-xs font-semibold text-[#000000] dark:text-[#FFFFFF] bg-[#F5F5F5] dark:bg-[#1A1A1A] hover:bg-[#CCCCCC]/40 dark:hover:bg-[#333333] px-3 py-1.5 rounded-md border border-[#CCCCCC] dark:border-[#333333] transition-colors"
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
                        className="text-xs font-semibold text-[#000000] dark:text-[#FFFFFF] bg-[#F5F5F5] dark:bg-[#1A1A1A] px-2.5 py-1 rounded border border-[#CCCCCC] dark:border-[#333333]"
                    >
                        {isDark ? '☀️ Light' : '🌙 Dark'}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-[#000000] dark:text-[#FFFFFF] focus:outline-none"
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
                <div className="md:hidden bg-[#FFFFFF] dark:bg-[#000000] border-b border-[#CCCCCC] dark:border-[#333333] px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className="block w-full text-left py-2 text-sm font-medium text-[#000000] dark:text-[#FFFFFF] hover:text-[#666666] dark:hover:text-[#CCCCCC]"
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className="pt-2 border-t border-[#CCCCCC] dark:border-[#333333]">
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
