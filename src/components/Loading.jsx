import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFFFFF] dark:bg-[#000000]"
                >
                    <div className="text-center">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            className="w-16 h-16 mx-auto mb-6"
                        >
                            <div className="w-full h-full border-4 border-[#000000] dark:border-[#FFFFFF] border-t-transparent rounded-full animate-spin" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF] tracking-wide"
                        >
                            Loading Portfolio...
                        </motion.h2>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loading;
