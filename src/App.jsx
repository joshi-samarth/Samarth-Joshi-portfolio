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
        <div className="min-h-screen bg-[#F6F0E8] dark:bg-[#292124] text-[#252222] dark:text-[#F6F0E8] antialiased selection:bg-[#8F3D45]/20 selection:text-[#8F3D45]">
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
