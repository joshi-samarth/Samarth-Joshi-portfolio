import React, { useState } from 'react';
import { personalInfo } from '../data/data';

const Contact = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 500);
    };

    return (
        <section
            id="contact"
            className="py-20 bg-[#292124] text-[#FFFFFF] border-t border-[#42363A]"
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="max-w-2xl mb-12">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#D9D9D9] mb-1">
                        Get In Touch
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
                        Let's Connect
                    </h2>
                    <p className="mt-2 text-base text-[#D9D9D9]">
                        I'm always open to discussing software development, internship opportunities, projects, and new opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-[#32282B] border border-[#42363A] rounded-xl p-6 sm:p-8 space-y-6 shadow-subtle">
                            <h3 className="text-lg font-bold text-[#FFFFFF]">
                                Contact Details
                            </h3>

                            <div className="space-y-5 text-sm text-[#D9D9D9]">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] mb-0.5">
                                        Email
                                    </p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-[#FFFFFF] font-medium hover:text-[#8F3D45] transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] mb-0.5">
                                        Phone
                                    </p>
                                    <p className="text-[#FFFFFF] font-medium">
                                        {personalInfo.phone}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] mb-0.5">
                                        Location
                                    </p>
                                    <p className="text-[#FFFFFF] font-medium">
                                        {personalInfo.location}
                                    </p>
                                </div>

                                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
                                    {personalInfo.profiles?.linkedin?.url && (
                                        <a href={personalInfo.profiles.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] hover:text-[#8F3D45] transition-colors">
                                            LinkedIn Profile →
                                        </a>
                                    )}
                                    {personalInfo.profiles?.github?.url && (
                                        <a href={personalInfo.profiles.github.url} target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] hover:text-[#8F3D45] transition-colors">
                                            GitHub Repositories →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#32282B] border border-[#42363A] rounded-xl p-6 sm:p-8 shadow-subtle">
                            <h3 className="text-lg font-bold text-[#FFFFFF] mb-6">
                                Send a Message
                            </h3>

                            {isSubmitted && (
                                <div className="mb-6 p-4 rounded-lg bg-[#8F3D45]/20 border border-[#8F3D45]/40 text-[#FFFFFF] text-sm font-medium">
                                    Message sent successfully. Thank you for reaching out!
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold text-[#FFFFFF] uppercase mb-1">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#231B1E] border border-[#42363A] text-sm text-[#FFFFFF] placeholder-[#707070] focus:outline-none focus:border-[#8F3D45]"
                                        />
                                        {errors.name && <p className="mt-1 text-xs text-[#E57373]">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-[#FFFFFF] uppercase mb-1">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#231B1E] border border-[#42363A] text-sm text-[#FFFFFF] placeholder-[#707070] focus:outline-none focus:border-[#8F3D45]"
                                        />
                                        {errors.email && <p className="mt-1 text-xs text-[#E57373]">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-xs font-semibold text-[#FFFFFF] uppercase mb-1">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Software Development Opportunity / Inquiry"
                                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#231B1E] border border-[#42363A] text-sm text-[#FFFFFF] placeholder-[#707070] focus:outline-none focus:border-[#8F3D45]"
                                    />
                                    {errors.subject && <p className="mt-1 text-xs text-[#E57373]">{errors.subject}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-[#FFFFFF] uppercase mb-1">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#231B1E] border border-[#42363A] text-sm text-[#FFFFFF] placeholder-[#707070] focus:outline-none focus:border-[#8F3D45] resize-none"
                                    />
                                    {errors.message && <p className="mt-1 text-xs text-[#E57373]">{errors.message}</p>}
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
