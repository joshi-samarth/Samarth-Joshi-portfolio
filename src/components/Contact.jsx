import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { personalInfo } from '../data/data';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const errs = {};
        if (!formData.name.trim()) errs.name = 'Name is required.';
        if (!formData.email.trim()) {
            errs.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errs.email = 'Valid email address required.';
        }
        if (!formData.subject.trim()) errs.subject = 'Subject is required.';
        if (!formData.message.trim()) {
            errs.message = 'Message is required.';
        } else if (formData.message.trim().length < 10) {
            errs.message = 'Message must be at least 10 characters.';
        }
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        try {
            if (serviceID && templateID && publicKey) {
                await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
            } else {
                // Direct Mailto fallback
                const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
                window.open(mailtoUrl, '_blank');
            }

            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 6000);
        } catch (error) {
            console.error('Email send error:', error);
            const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
            window.open(mailtoUrl, '_blank');
            
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 6000);
        }
    };

    return (
        <section
            id="contact"
            className="py-20 bg-[#291C0E] dark:bg-[#100E0C] text-[#F7F3ED] dark:text-[#F5EFE8] border-t border-[#4F3028] dark:border-[#40352E] transition-colors duration-300"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="max-w-2xl mb-12">
                    <p className="section-subtitle !text-[#D8CEC2] dark:!text-[#C8BBB0] mb-1">
                        Get In Touch
                    </p>
                    <h2 className="section-title !text-[#F7F3ED] dark:!text-[#F5EFE8]">
                        Let's Connect
                    </h2>
                    <p className="mt-2 text-base text-[#D8CEC2] dark:text-[#C8BBB0]">
                        I'm always open to discussing software development, internship opportunities, projects, and new opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-[#1F150B] dark:bg-[#171412] border border-[#4F3028] dark:border-[#40352E] rounded-xl p-6 sm:p-8 space-y-6 shadow-subtle">
                            <h3 className="text-lg font-bold text-[#F7F3ED] dark:text-[#F5EFE8]">
                                Contact Details
                            </h3>

                            <div className="space-y-5 text-sm text-[#D8CEC2] dark:text-[#C8BBB0]">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#D8CEC2] dark:text-[#96877D] mb-0.5">
                                        Email
                                    </p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-[#F7F3ED] dark:text-[#F5EFE8] font-medium hover:text-[#D8CEC2] dark:hover:text-[#C0836B] transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#D8CEC2] dark:text-[#96877D] mb-0.5">
                                        Phone
                                    </p>
                                    <p className="text-[#F7F3ED] dark:text-[#F5EFE8] font-medium">
                                        {personalInfo.phone}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#D8CEC2] dark:text-[#96877D] mb-0.5">
                                        Location
                                    </p>
                                    <p className="text-[#F7F3ED] dark:text-[#F5EFE8] font-medium">
                                        {personalInfo.location}
                                    </p>
                                </div>

                                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
                                    {personalInfo.profiles?.linkedin?.url && (
                                        <a href={personalInfo.profiles.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-[#F7F3ED] dark:text-[#C0836B] hover:text-[#D8CEC2] dark:hover:text-[#A66B57] transition-colors">
                                            LinkedIn Profile →
                                        </a>
                                    )}
                                    {personalInfo.profiles?.github?.url && (
                                        <a href={personalInfo.profiles.github.url} target="_blank" rel="noopener noreferrer" className="text-[#F7F3ED] dark:text-[#C0836B] hover:text-[#D8CEC2] dark:hover:text-[#A66B57] transition-colors">
                                            GitHub Repositories →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#1F150B] dark:bg-[#171412] border border-[#4F3028] dark:border-[#40352E] rounded-xl p-6 sm:p-8 shadow-subtle">
                            <h3 className="text-lg font-bold text-[#F7F3ED] dark:text-[#F5EFE8] mb-6">
                                Send a Message
                            </h3>

                            {isSubmitted && (
                                <div className="mb-6 p-4 rounded-lg bg-[#6E473B]/20 dark:bg-[#A66B57]/20 border border-[#6E473B] dark:border-[#A66B57] text-[#F7F3ED] dark:text-[#F5EFE8] text-sm font-medium">
                                    Message sent successfully. Thank you for reaching out!
                                </div>
                            )}

                            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold text-[#F7F3ED] dark:text-[#F5EFE8] uppercase mb-1">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#291C0E] dark:bg-[#100E0C] border border-[#4F3028] dark:border-[#40352E] text-sm text-[#F7F3ED] dark:text-[#F5EFE8] placeholder-[#998075] dark:placeholder-[#96877D] focus:outline-none focus:border-[#D8CEC2] dark:focus:border-[#A66B57] transition-colors"
                                        />
                                        {errors.name && <p className="mt-1 text-xs text-[#EDE6DA] dark:text-[#C8BBB0] font-semibold">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-[#F7F3ED] dark:text-[#F5EFE8] uppercase mb-1">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#291C0E] dark:bg-[#100E0C] border border-[#4F3028] dark:border-[#40352E] text-sm text-[#F7F3ED] dark:text-[#F5EFE8] placeholder-[#998075] dark:placeholder-[#96877D] focus:outline-none focus:border-[#D8CEC2] dark:focus:border-[#A66B57] transition-colors"
                                        />
                                        {errors.email && <p className="mt-1 text-xs text-[#EDE6DA] dark:text-[#C8BBB0] font-semibold">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-xs font-semibold text-[#F7F3ED] dark:text-[#F5EFE8] uppercase mb-1">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Software Development Opportunity / Inquiry"
                                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#291C0E] dark:bg-[#100E0C] border border-[#4F3028] dark:border-[#40352E] text-sm text-[#F7F3ED] dark:text-[#F5EFE8] placeholder-[#998075] dark:placeholder-[#96877D] focus:outline-none focus:border-[#D8CEC2] dark:focus:border-[#A66B57] transition-colors"
                                    />
                                    {errors.subject && <p className="mt-1 text-xs text-[#EDE6DA] dark:text-[#C8BBB0] font-semibold">{errors.subject}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-[#F7F3ED] dark:text-[#F5EFE8] uppercase mb-1">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#291C0E] dark:bg-[#100E0C] border border-[#4F3028] dark:border-[#40352E] text-sm text-[#F7F3ED] dark:text-[#F5EFE8] placeholder-[#998075] dark:placeholder-[#96877D] focus:outline-none focus:border-[#D8CEC2] dark:focus:border-[#A66B57] transition-colors resize-none"
                                    />
                                    {errors.message && <p className="mt-1 text-xs text-[#EDE6DA] dark:text-[#C8BBB0] font-semibold">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
