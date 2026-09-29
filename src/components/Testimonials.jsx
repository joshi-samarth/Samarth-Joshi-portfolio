import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useCustomHooks';
import { testimonials } from '../data/data';

const Testimonials = () => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section
            id="testimonials"
            ref={ref}
            className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"
        >
            <div className="container-custom">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isIntersecting ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Client <span className="text-primary">Testimonials</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
                        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                            What people say about working with me
                        </p>
                    </motion.div>

                    {/* Testimonial Slider */}
                    <motion.div
                        variants={itemVariants}
                        className="max-w-4xl mx-auto relative"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl p-8 md:p-12"
                            >
                                {/* Quote Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                        <FaQuoteLeft className="text-primary text-2xl" />
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl text-center mb-8 leading-relaxed italic">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&background=3b82f6&color=fff&size=200`;
                                            }}
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-primary font-medium mb-1">
                                        {testimonials[currentIndex].role}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {testimonials[currentIndex].company}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevTestimonial}
                                className="w-12 h-12 bg-white dark:bg-dark-card rounded-full shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary hover:shadow-xl transition-all"
                                aria-label="Previous testimonial"
                            >
                                <FaChevronLeft />
                            </motion.button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToTestimonial(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? 'bg-primary w-8'
                                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextTestimonial}
                                className="w-12 h-12 bg-white dark:bg-dark-card rounded-full shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary hover:shadow-xl transition-all"
                                aria-label="Next testimonial"
                            >
                                <FaChevronRight />
                            </motion.button>
                        </div>

                        {/* Counter */}
                        <div className="text-center mt-6 text-gray-600 dark:text-gray-400">
                            <span className="font-semibold text-primary">{currentIndex + 1}</span> / {testimonials.length}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
