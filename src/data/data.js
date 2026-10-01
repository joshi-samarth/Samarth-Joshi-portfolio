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
    SiJsonwebtokens,
    SiAwslambda,
    SiAmazon,
    SiAmazondynamodb,
    SiAmazonapigateway,
    SiOpenjdk,
    SiCloudinary
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
        company: "AWS Student Builder Group – PICT",
        role: "Project Contributor (Intern)",
        duration: "February 2026 – April 2026",
        location: "Pune, Maharashtra",
        certificateUrl: "https://drive.google.com/file/d/1Xpm9pCiiomeZat9AstV2WdcZlE3NEqDo/view?usp=sharing",
        certificateTitle: "AWS Student Builder Internship Certificate",
        technologies: [
            { name: "AWS Lambda", icon: SiAwslambda, brandColor: "#FF9900" },
            { name: "EventBridge", icon: SiAmazon, brandColor: "#FF9900" },
            { name: "DynamoDB", icon: SiAmazondynamodb, brandColor: "#4053D6" },
            { name: "Python", icon: SiPython, brandColor: "#3776AB" },
            { name: "React.js", icon: SiReact, brandColor: "#61DAFB" }
        ],
        achievements: [
            "Designed and developed a serverless full-stack cloud application automating Amazon S3 storage lifecycle management using event-driven backend workflows.",
            "Built a React-based monitoring dashboard consuming REST APIs for real-time storage analytics and cost optimisation.",
            "Worked in sprint-based Agile cycles, raising pull requests on GitHub and incorporating code review feedback.",
            "Deployed the application on AWS and Vercel following cloud security and serverless architecture best practices."
        ]
    }
];

// Certificates & Credentials
export const certificatesData = [
    {
        id: "cert-1",
        title: "AWS Student Builder Internship Certificate",
        issuer: "AWS Student Builder Group – PICT",
        issueDate: "April 2026",
        certificateUrl: "https://drive.google.com/file/d/1Xpm9pCiiomeZat9AstV2WdcZlE3NEqDo/view?usp=sharing",
        description: "Certified completion of cloud serverless development, AWS infrastructure automation, and full-stack integration.",
        tags: ["AWS", "Serverless", "React.js", "Python"]
    }
];

// Projects - Most Important Showcase Section
export const projectsData = [
    {
    id: "project-1",
    title: "AWS S3 Storage Lifecycle Management",
    description:
        "Serverless full-stack cloud application that automates Amazon S3 storage lifecycle management using event-driven workflows and provides real-time storage analytics.",
    technologies: [
        { name: "AWS Lambda", icon: SiAwslambda, brandColor: "#FF9900" },
        { name: "EventBridge", icon: SiAmazon, brandColor: "#FF9900" },
        { name: "CloudTrail", icon: SiAmazon, brandColor: "#FF9900" },
        { name: "DynamoDB", icon: SiAmazondynamodb, brandColor: "#4053D6" },
        { name: "API Gateway", icon: SiAmazonapigateway, brandColor: "#FF4F8B" },
        { name: "Python", icon: SiPython, brandColor: "#3776AB" },
        { name: "React.js", icon: SiReact, brandColor: "#61DAFB" }
    ],
    achievements: [
        "Automated Amazon S3 storage lifecycle management through event-driven serverless workflows.",
        "Built a React monitoring dashboard consuming REST APIs for real-time storage analytics and cost optimisation.",
        "Implemented cloud workflows using AWS Lambda, EventBridge, CloudTrail, DynamoDB, and API Gateway.",
        "Collaborated in Agile sprints using GitHub pull requests and peer code reviews.",
        "Deployed the application on AWS and Vercel following serverless architecture and cloud security practices."
    ],
    duration: "February 2026 – April 2026",
    liveDemo: "[LIVE DEMO URL]"
},

{
    id: "project-2",
    title: "FindMyShot",
    description:
        "AI-powered photo finder that enables users to locate their photos from large image collections using face recognition.",
    technologies: [
        { name: "Spring Boot", icon: SiSpringboot, brandColor: "#6DB33F" },
        { name: "Java", icon: SiOpenjdk, brandColor: "#ED8B00" },
        { name: "DJL / ONNX Runtime", icon: SiPython, brandColor: "#3776AB" },
        { name: "React.js", icon: SiReact, brandColor: "#61DAFB" },
        { name: "MongoDB", icon: SiMongodb, brandColor: "#47A248" },
        { name: "Cloudinary", icon: SiCloudinary, brandColor: "#3448C5" }
    ],
    achievements: [
        "Built a full-stack AI-powered application for locating user photos from large albums using face recognition.",
        "Engineered REST APIs with Spring Boot and Java with asynchronous processing for scalable image operations.",
        "Developed a React.js frontend and integrated Cloudinary CDN for scalable image storage and retrieval.",
        "Integrated DJL and ONNX Runtime for AI-based face recognition workflows."
    ],
    liveDemo: "[LIVE DEMO URL]"
},

{
    id: "project-3",
    title: "HackNest",
    description:
        "Full-stack hackathon team formation and collaboration platform for discovering hackathons, building teams, and recruiting members.",
    duration: "May 2026 – July 2026",
    technologies: [
        { name: "Spring Boot", icon: SiSpringboot, brandColor: "#6DB33F" },
        { name: "MongoDB", icon: SiMongodb, brandColor: "#47A248" },
        { name: "JWT", icon: SiJsonwebtokens, brandColor: "#000000" },
        { name: "React.js", icon: SiReact, brandColor: "#61DAFB" }
    ],
    achievements: [
        "Developed a full-stack platform for discovering hackathons, forming teams, and recruiting members.",
        "Built REST APIs using Spring Boot and MongoDB with JWT-based authentication.",
        "Developed a responsive React.js frontend with search, recommendations, applications, and invitations.",
        "Implemented ratings and analytics features to improve team discovery and collaboration."
    ],
    liveDemo: "[LIVE DEMO URL]"
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
