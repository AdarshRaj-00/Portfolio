export const profile = {
  name: 'Adarsh Raj',
  role: 'Full Stack Developer | Java Developer | Aspiring Data Analyst',
  roles: ['Full Stack Developer', 'Java Developer', 'Aspiring Data Analyst'],
  intro:
    'Computer Science Engineering student passionate about building full-stack web applications and solving real-world problems using Java, React, Node.js, MongoDB, and SQL.',
  location: 'Mohali, Punjab',
  email: 'adarshraj82945@gmail.com',
  phone: '+91 74888 01142',
  github: 'https://github.com/AdarshRaj-00',
  linkedin: 'https://www.linkedin.com/in/adarsh-raj-259208251/',
  leetcode: 'https://leetcode.com/u/AdarshRaj-agile/',
  resume: '/Adarsh_Raj_Resume.pdf',
  photo: '/assets/adarsh-profile.jpg'
};

export const skillCategories = [
  {
    category: 'Programming Languages',
    icon: 'Code',
    skills: ['Java', 'JavaScript', 'SQL']
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'React']
  },
  {
    category: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'Express.js']
  },
  {
    category: 'Database',
    icon: 'Database',
    skills: ['MongoDB', 'MySQL', 'H2 Database']
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Power BI']
  }
];

export const featuredProjects = [
  {
    title: 'HappyJourney',
    type: 'Travel Planning Web Application',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Map API'],
    description:
      'HappyJourney is a full-stack travel planning web application that helps users plan trips based on destination, budget, travel preferences, and nearby attractions. The application combines route planning, location search, hotel recommendations, restaurant discovery, and map integration into a single platform.',
    features: [
      'User Authentication',
      'Trip Planning',
      'Budget Planning',
      'Nearby Hotels',
      'Nearby Restaurants',
      'Location Search',
      'Map Integration',
      'Travel Preferences'
    ],
    problem: 'Travel planning often spreads across maps, hotel sites, restaurant searches, and budget checklists individually, creating a fragmented and tedious user experience.',
    solution: 'HappyJourney brings trip inputs, budget preferences, location discovery, hotel/restaurant findings, and route maps into a single cohesive dashboard flow.',
    challenge: 'Configuring precise location tracking, user session security, map overlay rendering, filtering restaurants/hotels dynamically based on budget, and calculating distance-based travel expenses in real-time.',
    live: 'https://happy-journey.vercel.app',
    github: 'https://github.com/AdarshRaj-00/Happy_Journey',
    image: '/assets/happyjourney-app.png'
  },
  {
    title: 'Sweet Gallery',
    type: 'E-Commerce Management System',
    stack: ['React', 'Spring Boot', 'Spring Security', 'JWT', 'H2 Database'],
    description:
      'Developed a full-stack e-commerce web application for browsing and purchasing Indian sweets. Implemented secure authentication using Spring Security and JWT, integrated H2 Database, and built responsive frontend pages using React.',
    features: [
      'User Authentication',
      'Catalog Browsing',
      'Wishlist & Cart Operations',
      'Checkout Flow',
      'Responsive Client Pages'
    ],
    problem: 'Traditional sweet shops lack digital cataloging, making online browsing, cart updates, order management, and secure authenticated client checkouts manual or fragmented.',
    solution: 'Sweet Gallery provides a full-stack digital storefront for sweets with responsive React browsing, H2 database persistence, and Spring Boot backend.',
    challenge: 'Implementing secure stateless session management with JWT and Spring Security, handling cross-origin requests (CORS), and designing responsive grid catalogs for various sweet items.',
    live: 'https://sweet-gallery-management-system.vercel.app/',
    github: 'https://github.com/AdarshRaj-00/sweet-gallery-management-system',
    image: '/assets/sweetgallery-app.png'
  }
];

export const otherProjects = [
  {
    title: 'Workflow-Based File Management System',
    subtitle: 'Backend & Database System',
    description: 'Built a Java-based file management system for securely managing uploads, downloads, and file metadata. Designed relational database schemas in MySQL and implemented user access control with CRUD operations.',
    tech: ['Java', 'MySQL', 'JDBC'],
    github: 'https://github.com/AdarshRaj-00'
  }
];

export const education = [
  {
    institution: 'Chandigarh University, Mohali',
    degree: 'B.E. Computer Science Engineering',
    period: '2022–2026',
    score: 'CGPA 6.97'
  },
  {
    institution: 'ABR Foundation School, Sasaram, Bihar',
    degree: 'Senior Secondary (CBSE) - Intermediate (Science)',
    period: '2020 - 2022',
    score: 'Percentage: 62.4%'
  },
  {
    institution: 'ABR Foundation School, Sasaram, Bihar',
    degree: 'Matriculation (CBSE)',
    period: '2019 - 2020',
    score: 'Percentage: 74.6%'
  }
];

export const certifications = [
  {
    name: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    year: '2026',
    credentialId: 'View Certificate',
    link: 'https://www.hackerrank.com/certificates/c636f1c42f02'
  },
  {
    name: 'Java Language Features',
    issuer: 'Infosys Springboard',
    year: '2024',
    credentialId: 'View Learning Record',
    link: '#'
  },
  {
    name: 'Computational Programming with Java Standards',
    issuer: 'Chandigarh University',
    year: '2024',
    credentialId: 'Academic Milestone',
    link: '#'
  }
];

export const achievements = [
  {
    title: '55+ LeetCode Problems',
    description: 'Solved 55+ algorithmic problem-solving challenges on LeetCode with a focus on code optimization.'
  },
  {
    title: 'Research Book Chapter',
    description: 'Co-authored "Emotion-Aware Mobile Cloud Computing in 5G", published by CRC Press.'
  }
];

export const stats = [
  { value: '3', label: 'Projects Built' },
  { value: '55+', label: 'LeetCode Solved' },
  { value: '2026', label: 'Graduating' },
  { value: '100%', label: 'Responsive' }
];
