import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useIntersectionObserver } from '../hooks/useCustomHooks';
import { testimonials } from '../data/data';

const Testimonials = () => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!testimonials || testimonials.length === 0) return null;

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
            className="py-20 bg-[#F6F0E8] dark:bg-[#292124] border-t border-[#DDD2C8] dark:border-[#42363A]"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isIntersecting ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-left mb-16 max-w-2xl">
                        <p className="section-subtitle mb-1">Feedback</p>
                        <h2 className="section-title">
                            Testimonials
                        </h2>
                    </motion.div>

                    {/* Testimonial Slider */}
                    <motion.div
                        variants={itemVariants}
                        className="max-w-4xl mx-auto relative"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="card-clean p-8 md:p-12 space-y-6"
                            >
                                {/* Quote Icon */}
                                <div className="flex justify-start">
                                    <div className="w-12 h-12 bg-[#8F3D45]/10 rounded-full flex items-center justify-center">
                                        <FaQuoteLeft className="text-[#8F3D45] text-xl" />
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-[#756D69] dark:text-[#DDD2C8] text-base md:text-lg leading-relaxed italic">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-4 border-t border-[#DDD2C8] dark:border-[#42363A]">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#8F3D45]">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&background=8F3D45&color=F6F0E8&size=200`;
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-[#252222] dark:text-[#F6F0E8]">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-xs font-semibold text-[#8F3D45]">
                                            {testimonials[currentIndex].role}
                                        </p>
                                        <p className="text-xs text-[#756D69] dark:text-[#DDD2C8]">
                                            {testimonials[currentIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 rounded-full border border-[#DDD2C8] dark:border-[#42363A] bg-white dark:bg-[#32282B] flex items-center justify-center text-[#252222] dark:text-[#F6F0E8] hover:border-[#8F3D45] hover:text-[#8F3D45] transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <FaChevronLeft />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToTestimonial(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? 'bg-[#8F3D45] w-6'
                                                : 'bg-[#DDD2C8] dark:bg-[#42363A] hover:bg-[#8F3D45]/50'
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 rounded-full border border-[#DDD2C8] dark:border-[#42363A] bg-white dark:bg-[#32282B] flex items-center justify-center text-[#252222] dark:text-[#F6F0E8] hover:border-[#8F3D45] hover:text-[#8F3D45] transition-colors"
                                aria-label="Next testimonial"
                            >
                                <FaChevronRight />
                            </button>
                        </div>

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
