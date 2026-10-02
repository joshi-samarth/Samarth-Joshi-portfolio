import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useScrollPosition } from '../hooks/useCustomHooks';

const ScrollToTop = () => {
    const scrollPosition = useScrollPosition();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(scrollPosition > 300);
    }, [scrollPosition]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-[#222222] dark:bg-[#F5F5F5] text-[#FFFFFF] dark:text-[#181818] border border-[#DDDDDD] dark:border-[#333333] rounded-full shadow-lg hover:bg-[#000000] dark:hover:bg-[#FFFFFF] flex items-center justify-center transition-all duration-300"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
