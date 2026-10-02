import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import EducationTimeline from './components/EducationTimeline';
import InternshipTimeline from './components/InternshipTimeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CoreSubjects from './components/CoreSubjects';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <div className="min-h-screen bg-[#FAFAF9] dark:bg-[#181818] text-[#2F2F2F] dark:text-[#F5F5F5] antialiased selection:bg-[#222222] selection:text-[#FFFFFF] dark:selection:bg-[#F5F5F5] dark:selection:text-[#181818] transition-colors duration-300">
            {/* Sticky Navigation Header */}
            <Header />

            {/* Main Content Sections */}
            <main>
                {/* 1. Hero Section */}
                <Hero />

                {/* 2. About Me */}
                <About />

                {/* 3. Education - Vertical Timeline */}
                <EducationTimeline />

                {/* 4. Internship - Vertical Timeline */}
                <InternshipTimeline />

                {/* 5. Projects - Most Important Showcase */}
                <Projects />

                {/* 6. Skills - Visual Tech Stack */}
                <Skills />

                {/* 7. Core CS Fundamentals */}
                <CoreSubjects />

                {/* 8. Coding & Professional Profiles */}
                <CodingProfiles />

                {/* 9. Contact Section */}
                <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Smooth Scroll to Top Widget */}
            <ScrollToTop />
        </div>
    );
}

export default App;
