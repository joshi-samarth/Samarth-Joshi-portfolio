import { useState, useEffect } from 'react';

// Hook for managing dark mode
export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() => {
        try {
            const saved = localStorage.getItem('darkMode');
            return saved ? JSON.parse(saved) : false;
        } catch {
            return false;
        }
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        try {
            localStorage.setItem('darkMode', JSON.stringify(isDark));
        } catch (e) {
            console.error('LocalStorage write error:', e);
        }
    }, [isDark]);

    return [isDark, setIsDark];
};

// Hook for intersection observer (scroll animations)
export const useIntersectionObserver = (options = {}) => {
    const [ref, setRef] = useState(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, {
            threshold: 0.1,
            ...options
        });

        observer.observe(ref);

        return () => {
            if (ref) observer.unobserve(ref);
        };
    }, [ref, JSON.stringify(options)]);

    return [setRef, isIntersecting];
};

// Hook for active section tracking (stable dependency)
export const useActiveSection = (sectionIds = []) => {
    const [activeSection, setActiveSection] = useState('');
    const serializedIds = Array.isArray(sectionIds) ? sectionIds.join(',') : '';

    useEffect(() => {
        if (!serializedIds) return;
        const ids = serializedIds.split(',');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-40% 0px -40% 0px'
            }
        );

        ids.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [serializedIds]);

    return activeSection;
};

// Hook for smooth scroll to section
export const useScrollTo = () => {
    const scrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const offset = 80; // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return scrollTo;
};

// Hook for window scroll position
export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
};
