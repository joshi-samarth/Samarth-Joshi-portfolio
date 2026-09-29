// Professional Portfolio Data Configuration
// Minimal, Professional, Human-Designed Developer Portfolio Data

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiSpring,
    SiSpringboot,
    SiPython,
    SiMysql,
    SiMongodb,
    SiPostgresql,
    SiTailwindcss,
    SiFirebase,
    SiGit,
    SiGithub,
    SiLinkedin,
    SiLeetcode,
    SiCodechef,
    SiDocker,
    SiPostman,
    SiLinux,
    SiCplusplus,
    SiTypescript,
    SiRedis,
    SiInstagram,
    SiSequelize,
    SiJsonwebtokens
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';
import { 
    FaEnvelope, 
    FaPhone, 
    FaMapMarkerAlt, 
    FaCode, 
    FaDatabase, 
    FaNetworkWired, 
    FaMicrochip, 
    FaCogs, 
    FaProjectDiagram, 
    FaCloud,
    FaServer,
    FaTerminal
} from 'react-icons/fa';

import { MdMemory, MdAccountTree, MdCloudQueue } from 'react-icons/md';

export const personalInfo = {
    name: "Samarth Vishnu Joshi",
    shortName: "Samarth Joshi",
    role: "Software Developer | Full Stack Developer | Problem Solver",
    heroIntro: "I am a passionate software developer with a strong foundation in programming, full-stack development, databases, and problem solving. I enjoy building practical applications and continuously improving my technical skills.",
    email: "Samarthjoshi.pict@gmail.com",
    phone: "9356804972",
    location: "Pune, Maharashtra, INDIA",
    profileImage: "/Profile.png",
    resumeUrl: "https://drive.google.com/file/d/1NYCDJkZt13BAg6sArdT6Thi7GvmLVwT6/view?usp=sharing",

    // Coding & Professional Profiles
    profiles: {
        github: {
            name: "GitHub",
            url: "https://github.com/joshi-samarth",
            username: "@github-handle",
            icon: SiGithub,
            description: "Open source repositories, personal projects, and active code commits",
            badge: "Repositories",
            brandColor: "#181717"
        },
        linkedin: {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/joshisamarth/",
            username: "in/linkedin-profile",
            icon: SiLinkedin,
            description: "Professional network, work experience, and recommendations",
            badge: "Professional",
            brandColor: "#0A66C2"
        },
        leetcode: {
            name: "LeetCode",
            url: "https://leetcode.com/u/Samarth_Vishnu_Joshi/",
            username: "leetcode.com/user",
            icon: SiLeetcode,
            description: "Data structures, algorithmic problem solving, and contest ratings",
            badge: "DSA & Problem Solving",
            brandColor: "#FFA116"
        },
        codechef: {
            name: "CodeChef",
            url: "https://www.codechef.com/users/team_craft_80",
            username: "codechef.com/users",
            icon: SiCodechef,
            description: "Competitive programming contests, division rankings, and algorithmic challenges",
            badge: "Competitive Coding",
            brandColor: "#5B4638"
        }
        // instagram: {
        //     name: "Instagram",
        //     url: "[YOUR_INSTAGRAM_URL]",
        //     username: "@instagram-handle",
        //     icon: SiInstagram,
        //     description: "Tech community updates, personal projects, and developer highlights",
        //     badge: "Social",
        //     brandColor: "#E4405F"
        // }
    }
};

export const aboutMe = {
    summary: "I am a software developer passionate about building reliable, maintainable, and scalable software solutions. My approach emphasizes clean code architecture, data structures & algorithmic efficiency, normalized database design, and practical software engineering.",
    pillars: [
        {
            title: "Software Development",
            desc: "Designing clean, maintainable code structures using modern software design principles."
        },
        {
            title: "Full-Stack Development",
            desc: "Building complete web platforms with responsive user interfaces and modular REST APIs."
        },
        {
            title: "Problem Solving & DSA",
            desc: "Applying algorithmic logic, optimized data structures, and computational complexity analysis."
        },
        {
            title: "Database Engineering",
            desc: "Structuring relational schemas (MySQL, PostgreSQL) and document stores (MongoDB)."
        },
        {
            title: "Real-World Systems",
            desc: "Translating functional requirements into production-ready web platforms."
        },
        {
            title: "Continuous Learning",
            desc: "Keeping pace with modern frameworks, developer tools, and industry best practices."
        }
    ]
};

// Education - Vertical Timeline
export const educationData = [
    {
        id: "edu-1",
        degree: "Bachelor of Engineering (B.E.)",
        institution: "SCTR'S Pune Institute of Computer Technology",
        branch: "Information Technology",
        duration: "2024 – 2027",
        score: "CGPA: 9.51 ",
        location: "Pune, Maharashtra",
        description: "Pursuing rigorous academic coursework in computer science fundamentals, algorithm design, software development, and systems engineering.",
        highlights: [
            "Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP",
            "Active participant in technical coding clubs and competitive programming contests"
        ]
    },
    {
        id: "edu-2",
        degree: "Diploma",
        institution: "Government Polytechnic College Dharashiv",
        branch: "Computer Engineering",
        duration: "2021 – 2024",
        score: "Percentage: 94.34%",
        location: "Dharashiv, Maharashtra",
        description: "Completed higher secondary education with strong focus on mathematics, analytical logic, and foundational programming.",
        highlights: [
            "Strong foundation in Calculus, Linear Algebra, and Problem Solving"
        ]
    },
    {
        id: "edu-3",
        degree: "10th",
        institution: "Shripatrao Bhosale highschool Dharashiv",
        duration: "2020 – 2021",
        score: "Percentage: 95.80%",
        location: "Dharashiv, Maharashtra",
        description: "Completed higher secondary education with strong focus on mathematics, analytical logic, and foundational programming.",
        highlights: [
            "Strong foundation in Calculus, Linear Algebra, and Problem Solving"
        ]
    }
];

// Internship / Experience - Vertical Timeline (Identical Timeline System as Education)
export const internshipData = [
    {
        id: "intern-1",
        company: "[COMPANY NAME]",
        role: "Software Developer Intern",
        duration: "[MONTH YEAR] – [MONTH YEAR]",
        location: "[CITY / REMOTE]",
        technologies: [
            { name: "React.js", icon: SiReact, brandColor: "#61DAFB" },
            { name: "Node.js", icon: SiNodedotjs, brandColor: "#339933" },
            { name: "Express.js", icon: SiExpress, brandColor: "#000000" },
            { name: "MySQL", icon: SiMysql, brandColor: "#4479A1" }
        ],
        achievements: [
            "Developed responsive user interface components using React.js and modern CSS.",
            "Built modular RESTful API endpoints using Node.js and Express.",
            "Integrated MySQL database operations with optimized queries and constraints.",
            "Improved application usability and overall client-side performance.",
            "Collaborated using Git & GitHub for version control and peer code reviews."
        ]
    }
];

// Projects - Most Important Showcase Section
export const projectsData = [
    {
        id: "airline-management-system",
        title: "Airline Management System",
        isFeatured: true,
        category: "Full Stack",
        thumbnail: "/airline-mockup.png",
        shortDescription: "A full-stack airline management platform that allows users to search flights, select seats, book tickets, manage bookings, and allows administrators to manage flights and passengers.",
        problemSolved: "Automates the manual flight reservation process with transactional booking safety, dynamic seat reservation matrices, and administrative flight scheduling.",
        keyFeatures: [
            "User authentication & Google authentication",
            "Flight search with dynamic filters",
            "Interactive seat selection matrix",
            "Booking management & passenger portal",
            "Admin dashboard for flights & passenger fleets",
            "Ticket generation & email ticket delivery"
        ],
        technologies: [
            { name: "React.js", icon: SiReact, brandColor: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, brandColor: "#06B6D4" },
            { name: "Node.js", icon: SiNodedotjs, brandColor: "#339933" },
            { name: "Express.js", icon: SiExpress, brandColor: "#000000" },
            { name: "MySQL", icon: SiMysql, brandColor: "#4479A1" },
            { name: "Sequelize", icon: SiSequelize, brandColor: "#52B0E7" },
            { name: "JWT", icon: SiJsonwebtokens, brandColor: "#D63AFF" },
            { name: "Firebase", icon: SiFirebase, brandColor: "#FFCA28" }
        ],
        githubUrl: "[YOUR_GITHUB_URL]/airline-management-system",
        liveDemoUrl: "https://airline-management-demo.example.com"
    },
    {
        id: "collaborative-task-manager",
        title: "Real-Time Team Task & Sprint Hub",
        isFeatured: false,
        category: "Full Stack",
        thumbnail: "/task-mockup.png",
        shortDescription: "A collaborative Kanban and sprint task management platform engineered for agile development teams with real-time state synchronization.",
        problemSolved: "Streamlines project task assignment, status updates, and deadline tracking for cross-functional software teams.",
        keyFeatures: [
            "Interactive drag-and-drop Kanban workflow boards",
            "Real-time status updates using WebSockets",
            "Role-based permission controls (Admin, Member, Viewer)",
            "Automated activity audit log and task assignment"
        ],
        technologies: [
            { name: "React.js", icon: SiReact, brandColor: "#61DAFB" },
            { name: "Node.js", icon: SiNodedotjs, brandColor: "#339933" },
            { name: "Express.js", icon: SiExpress, brandColor: "#000000" },
            { name: "MongoDB", icon: SiMongodb, brandColor: "#47A248" },
            { name: "Redis", icon: SiRedis, brandColor: "#DC382D" }
        ],
        githubUrl: "[YOUR_GITHUB_URL]/team-task-hub",
        liveDemoUrl: "https://team-task-hub-demo.example.com"
    },
    {
        id: "e-commerce-api-storefront",
        title: "E-Commerce Storefront & Order Platform",
        isFeatured: false,
        category: "Full Stack",
        thumbnail: "/ecommerce-mockup.png",
        shortDescription: "An online storefront featuring product discovery, cart state management, checkout summary, and order tracking.",
        problemSolved: "Provides a responsive, fast-loading shopping experience with reliable state management and relational product schemas.",
        keyFeatures: [
            "Faceted catalog search and category filtering",
            "Cart state persistence and order summary billing",
            "Inventory management portal with stock status updates",
            "Responsive product visualizer"
        ],
        technologies: [
            { name: "React.js", icon: SiReact, brandColor: "#61DAFB" },
            { name: "JavaScript", icon: SiJavascript, brandColor: "#F7DF1E" },
            { name: "Node.js", icon: SiNodedotjs, brandColor: "#339933" },
            { name: "PostgreSQL", icon: SiPostgresql, brandColor: "#4169E1" }
        ],
        githubUrl: "[YOUR_GITHUB_URL]/ecommerce-storefront",
        liveDemoUrl: "https://ecommerce-storefront-demo.example.com"
    },
    {
        id: "developer-code-analyzer",
        title: "Developer Code Snippet & Review Analyzer",
        isFeatured: false,
        category: "Full Stack",
        thumbnail: "/ai-code-mockup.png",
        shortDescription: "A developer tool providing syntax highlighting, time complexity heuristic estimation, and snippet storage.",
        problemSolved: "Helps developers store reusable code snippets, format code snippets, and review algorithm complexity.",
        keyFeatures: [
            "Multi-language code syntax visualizer",
            "Time & space complexity heuristic analysis",
            "Searchable code snippet repository"
        ],
        technologies: [
            { name: "React.js", icon: SiReact, brandColor: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, brandColor: "#3178C6" },
            { name: "Node.js", icon: SiNodedotjs, brandColor: "#339933" },
            { name: "MongoDB", icon: SiMongodb, brandColor: "#47A248" }
        ],
        githubUrl: "[YOUR_GITHUB_URL]/code-snippet-analyzer",
        liveDemoUrl: "https://code-analyzer-demo.example.com"
    }
];

// Skills / Visual Tech Stack (Grouped Categories with Simple Icons)
export const skillsData = {
    frontend: {
        title: "Frontend",
        description: "Responsive, modular, and accessible user interface development",
        items: [
            { name: "HTML5", icon: SiHtml5, brandColor: "#E34F26" },
            { name: "CSS3", icon: SiCss3, brandColor: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, brandColor: "#F7DF1E" },
            { name: "React.js", icon: SiReact, brandColor: "#61DAFB" }
        ]
    },
    backend: {
        title: "Backend",
        description: "Server architecture, microservices, and REST API engineering",
        items: [
            { name: "Node.js", icon: SiNodedotjs, brandColor: "#339933" },
            { name: "Express.js", icon: SiExpress, brandColor: "#000000" },
            { name: "Java", icon: FaTerminal, brandColor: "#007396" },
            { name: "Spring", icon: SiSpring, brandColor: "#6DB33F" },
            { name: "Spring Boot", icon: SiSpringboot, brandColor: "#6DB33F" },
            { name: "Python", icon: SiPython, brandColor: "#3776AB" }
        ]
    },
    databases: {
        title: "Databases",
        description: "Relational schema design, query structure, and NoSQL stores",
        items: [
            { name: "MySQL", icon: SiMysql, brandColor: "#4479A1" },
            { name: "MongoDB", icon: SiMongodb, brandColor: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, brandColor: "#4169E1" }
        ]
    },
    programmingLanguages: {
        title: "Programming Languages",
        description: "Core languages for systems, algorithms, and application software",
        items: [
            { name: "Java", icon: FaTerminal, brandColor: "#007396" },
            { name: "JavaScript", icon: SiJavascript, brandColor: "#F7DF1E" },
            { name: "Python", icon: SiPython, brandColor: "#3776AB" }
        ]
    },
    tools: {
        title: "Tools & Platforms",
        description: "Version control, containers, API testing, and code environments",
        items: [
            { name: "Git", icon: SiGit, brandColor: "#F05032" },
            { name: "GitHub", icon: SiGithub, brandColor: "#181717" },
            { name: "Docker", icon: SiDocker, brandColor: "#2496ED" },
            { name: "Postman", icon: SiPostman, brandColor: "#FF6C37" },
            { name: "Linux", icon: SiLinux, brandColor: "#FCC624" },
            { name: "VS Code", icon: VscVscode, brandColor: "#007ACC" }
        ]
    }
};

// Core Computer Science Fundamentals - Clean Outline Icons
export const coreCsSubjects = [
    {
        id: "dsa",
        title: "Data Structures & Algorithms",
        shortDesc: "Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, Time & Space Complexity Analysis.",
        icon: MdAccountTree
    },
    {
        id: "oop",
        title: "Object-Oriented Programming",
        shortDesc: "Encapsulation, Inheritance, Polymorphism, Abstraction, SOLID Design Principles.",
        icon: FaCode
    },
    {
        id: "dbms",
        title: "Database Management Systems",
        shortDesc: "Relational Schemas, Normalization (1NF–BCNF), ACID Transactions, Indexing, SQL Queries.",
        icon: FaDatabase
    },
    {
        id: "os",
        title: "Operating Systems",
        shortDesc: "Processes & Threads, CPU Scheduling, Memory Management, Concurrency, Deadlocks.",
        icon: MdMemory
    },
    {
        id: "cn",
        title: "Computer Networks",
        shortDesc: "OSI & TCP/IP Layers, DNS, HTTP/HTTPS Protocol, Routing, Socket Programming.",
        icon: FaNetworkWired
    },
    {
        id: "se",
        title: "Software Engineering",
        shortDesc: "SDLC Lifecycles, Agile/Scrum Methodologies, Version Control, Testing Strategies.",
        icon: FaCogs
    },
    {
        id: "cloud",
        title: "Cloud Computing",
        shortDesc: "Cloud Service Models (IaaS, PaaS, SaaS), Virtualization, Scalable Infrastructure.",
        icon: MdCloudQueue
    }
];

export const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Education', href: 'education' },
    { name: 'Internship', href: 'internship' },
    { name: 'Projects', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' }
];
