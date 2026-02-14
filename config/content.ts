import { Github, Linkedin, Mail, Code2, Award, Briefcase, GraduationCap, Users, BookOpen, Brain } from 'lucide-react';
export type AccentColor = 'blue' | 'green' | 'yellow' | 'cyan';

export interface Social {
  platform: string;
  url: string;
  icon: typeof Github; 
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  avatar: string;
  resume: string;
  socials: Social[];
}

export interface Stat {
  id: string;
  icon: typeof Code2; 
  label: string;
  value: string;
  color: AccentColor;
  description: string;
}

export type JourneyType = 'education' | 'experience' | 'volunteering' | 'achievement' | 'award';

export interface JourneyItem {
  id: string;
  type: JourneyType;
  icon: typeof GraduationCap; 
  title: string;
  organization: string;
  date: string;
  description: string;
  color: AccentColor;
  tags?: string[];
}

export interface TechStack {
  hardware?: string[];
  backend?: string[];
  frontend?: string[];
  database?: string[];
  tools?: string[];
}

export interface ArchitectureDiagrams {
  system?: string;
  logical?: string;
  deployment?: string;
}

export interface PhaseDetail {
  title: string;
  highlights: string[];
}

export interface PhaseBreakdown {
  phase1: PhaseDetail;
  phase2: PhaseDetail;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  overview: string;
  keyFeatures: string[];
  phaseBreakdown?: PhaseBreakdown;
  techStack: TechStack;
  architectureDiagrams?: ArchitectureDiagrams;
  categories: string[];
  featured?: boolean;
  githubUrl?: string;
  mediumArticleUrl?: string;
  huggingFaceUrl?: string;
  screenshots?: string[];
  year: number;
  image: string;
  color: AccentColor;
}

export interface PortfolioContent {
  profile: Profile;
  stats: Stat[];
  journey: JourneyItem[];
  projects: Project[];
}

export const PORTFOLIO_DATA: PortfolioContent = {

  profile: {
    name: 'Vishwani Bhagya Geeganage',
    role: 'Software Engineering Undergraduate & Researcher',
    bio: 'Final year undergraduate at Faculty of IT, University of Moratuwa. Passionate about Full Stack Development, AI, and building impactful solutions.',
    location: 'Sri Lanka',
    email: 'vishwanibhagya2002@gmail.com',
    avatar: '/images/about/about-me.jpeg',
    resume: '/resume/Vishwani-Bhagya-Resume.pdf',
    socials: [
      {
        platform: 'GitHub',
        url: 'https://github.com/vshwanilgv', 
        icon: Github,
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/vishwani-bhagya/', 
        icon: Linkedin,
      },
            {
        platform: 'Medium',
        url: 'https://vshwanilgv.medium.com/', 
        icon: BookOpen,
      },
      {
        platform: 'Hugging Face',
        url: 'https://huggingface.co/vshwanilgv', 
        icon: Brain,
      },
      {
        platform: 'Email',
        url: 'mailto:vishwanibhagya2002@gmail.com', 
        icon: Mail,
      },
    ],
  },

  stats: [
    {
      id: 'stat-coding',
      icon: Code2,
      label: 'Coding Journey',
      value: '4+',
      color: 'blue',
      description: 'Years of programming experience across multiple languages',
    },
    {
      id: 'stat-industry',
      icon: Briefcase,
      label: 'Industry Experience',
      value: '1+',
      color: 'green',
      description: 'Years working in professional software development',
    },
    {
      id: 'stat-awards',
      icon: Award,
      label: 'Awards & Honors',
      value: '5+',
      color: 'yellow',
      description: 'Recognition for academic and technical excellence',
    },
    {
      id: 'stat-research',
      icon: Users,
      label: 'Research Labs',
      value: '2',
      color: 'cyan',
      description: 'Collaborations with labs in Japan & Sri Lanka',
    },
  ],

  journey: [
    // Education
    {
      id: 'edu-moratuwa',
      type: 'education',
      icon: GraduationCap,
      title: 'BSc (Hons) in Information Technology',
      organization: 'University of Moratuwa',
      date: '2022 - 2026',
      description: 'Specializing in Software Engineering with focus on AI, distributed systems, and full-stack development. Consistent academic excellence with Dean\'s List recognition for semester 3.',
      color: 'blue',
      tags: ['Software Engineering', 'AI', 'ML','Computer Vision', 'IoT'],
    },
    {
      id: 'edu-sit-japan',
      type: 'education',
      icon: Award,
      title: 'Research Exchange Program',
      organization: 'Shibaura Institute of Technology, Japan',
      date: '2025',
      description: 'Conducted advanced research autonomous robotics systems in Robotics and Image Processing Lab. Collaborated with international researchers on cutting-edge AI applications.',
      color: 'blue',
      tags: ['Research', 'Robotics', 'Machine Learning', 'Computer Vision', 'UAV Navigation', 'Reinforcement Learning'],
    },
    {
      id: 'edu-als',
      type: 'education',
      icon: GraduationCap,
      title: 'GCE Advanced Level - Physical Science Stream',
      organization: 'ST.Thomas\' Girls High School',
      date: '2019 - 2021',
      description: 'Completed Advanced Level studies in Physical Science stream with distinction. Strong foundation in Mathematics, Physics, and Chemistry.',
      color: 'blue',
      tags: ['Mathematics', 'Physics', 'Chemistry'],
    },
    // Experience
    {
      id: 'exp-sysco',
      type: 'experience',
      icon: Briefcase,
      title: 'Software Engineer Intern',
      organization: 'Sysco Labs Sri Lanka',
      date: '2025 May - 2025 Aug',
      description: 'Developed scalable microservices and worked on enterprise-level applications using modern tech stacks. Contributed to improving system performance and reliability.',
      color: 'green',
      tags: ['Microservices', 'Java', 'React', 'Spring Boot'],
    },
    {
      id: 'exp-hypercube',
      type: 'experience',
      icon: Briefcase,
      title: 'Software developer - Part Time',
      organization: 'HyperCube Labs',
      date: '2023',
      description: 'Built full-stack web applications and contributed to product development. Gained hands-on experience in modern web technologies and agile development practices.',
      color: 'green',
      tags: ['Full Stack', 'Web Development', 'Agile'],
    },
    // Volunteering
    {
      id: 'vol-ieee-wie',
      type: 'volunteering',
      icon: Users,
      title: 'Chairwoman',
      organization: 'IEEE WIE Affinity Group',
      date: '2024 - 2025',
      description: 'Led a team organizing technical workshops, competitions and community events for women in engineering. Fostered an inclusive environment and mentored aspiring engineers.',
      color: 'yellow',
      tags: ['Leadership', 'Community', 'Mentorship', 'Empowerment'],
    },
        {
      id: 'vol-ieee-wie-vice',
      type: 'volunteering',
      icon: Users,
      title: 'Vice Chairwoman',
      organization: 'IEEE WIE Affinity Group',
      date: '2023 - 2024',
      description: 'Coordinated technical workshops and mentorship programs to empower women in engineering. Supported strategic planning and managed community outreach initiatives to promote diversity in STEM.',
      color: 'yellow',
      tags: ['Leadership', 'Community', 'Mentorship', 'Empowerment'],
    },
  ],

  projects: [
    {
      id: '1',
      slug: 'food-store-web-app',
      title: 'Food Store Web Application',
      description: 'A scalable e-commerce platform built with microservices architecture and microfrontend design, featuring independent services for users, products, and cart management with a BFF layer for optimized client communication.',
      overview: 'An enterprise grade food store web application demonstrating modern architectural patterns. The backend implements a microservices architecture with independently deployable services (User Service, Product Service, Cart Service), while the frontend follows a microfrontend approach with separate micro-apps for navigation, user management, and product catalog. A Backend-for-Frontend (BFF) layer orchestrates communication between frontend modules and backend microservices, optimizing data aggregation and reducing client-server roundtrips.',
      keyFeatures: [
        'Microservices architecture with independently scalable services',
        'Microfrontend architecture with module federation for independent deployment',
        'BFF layer for optimized data aggregation and API orchestration',
        'AWS Cognito integration for secure user authentication and authorization',
        'Real-time shopping cart with event-driven updates',
        'Decoupled frontend modules (User, Product, Navigation)',
        'Inter-service communication via REST APIs',
        'Independent CI/CD pipelines for each microservice and microfrontend',
      ],
      techStack: {
        backend: ['Node.js', 'Express', 'Microservices', 'RESTful APIs', 'AWS Cognito'],
        frontend: ['React', 'JavaScript', 'Single-SPA', 'CSS'],
        database: ['PostgreSQL'],
        tools: ['Git', 'Postman', 'VS Code', 'AWS'],
      },
      architectureDiagrams: {
        system: '/images/projects/food-store/use-case.png',
        logical: '/images/projects/food-store/logical-diagram.png',
        deployment: '/images/projects/food-store/deployment-diagram.png',
      },
      categories: ['Full Stack', 'Web', 'E-commerce', 'Microservices'],
      featured: true,
      year: 2024,
      image: '/images/projects/food-store/image1.png',
      screenshots: [
        '/images/projects/food-store/image1.png',
        '/images/projects/food-store/image2.png',
        '/images/projects/food-store/image3.png',
        '/images/projects/food-store/image4.png',
      ],
      color: 'green',
      githubUrl: 'https://github.com/Sysco-Project-Summit-Vishwani',
      mediumArticleUrl: 'https://medium.com/devops-dev/micro-service-architecture-42d6bf1b9581'
    },
    {
      id: '2',
      slug: 'datacanvas',
      title: 'DataCanvas IoT Monitoring Platform',
      description: 'A full-stack IoT monitoring platform that enables real-time device data ingestion, storage, visualization, and controlled data sharing via public APIs.',
      overview: 'DataCanvas is an IoT data platform built to simplify real-time device monitoring and data access for developers and organizations. The platform focuses on reliable MQTT-based data ingestion, secure device management, and intuitive data visualization. Phase 1 of the project concentrated on building a stable core system for collecting, storing, and exposing IoT data, while later phases introduced public data access and developer tooling.',
      keyFeatures: [
        // Phase 1 – Core Platform
        'Real-time IoT data ingestion using MQTT protocol',
        'Centralized device and sensor management',
        'Live data visualization through web dashboards',
        'Secure authentication and role-based access control',
        'Time-series data storage for sensor readings',

        // Phase 1.5 – Public API
        'Public REST API for external applications to access IoT data',
        'Token-based authentication for controlled data sharing',
        'API usage scoped per project and device',

        // Phase 2 – Developer Enablement
        'NPM package published to simplify Public API consumption',
      ],
      phaseBreakdown: {
        phase1: {
          title: 'Core IoT Monitoring Platform',
          highlights: [
            'MQTT-based real-time data pipeline',
            'Backend services for device registration and data ingestion',
            'Web dashboard for monitoring live and historical sensor data',
            'User authentication and authorization flows',
            'Initial deployment-ready architecture',
          ],
        },
        phase2: {
          title: 'Public API & Developer Tooling',
          highlights: [
            'Public REST API exposed for third-party websites and applications',
            'Access token generation and management',
            'Reusable NPM package wrapping the Public API',
            'Improved developer experience for external integrations',
          ],
        },
      },
      
      techStack: {
        backend: ['Node.js', 'Express', 'MQTT Broker', 'REST APIs'],
        frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
        database: ['PostgreSQL'],
        tools: ['Docker', 'Nginx', 'GitHub Actions', 'AWS', 'NPM'],
      },
      architectureDiagrams: {
        system: '/images/projects/datacanvas/system-architecture.png',
      },
      categories: ['Full Stack', 'IoT', 'Web'],
      featured: true,
      year: 2024-2026,
      image: '/images/projects/datacanvas/image1.png',
      screenshots: [
        '/images/projects/datacanvas/image1.png',
        '/images/projects/datacanvas/image2.png',
        '/images/projects/datacanvas/image3.png',
        '/images/projects/datacanvas/image4.png',
        '/images/projects/datacanvas/image5.png',       
        '/images/projects/datacanvas/image6.png',
        '/images/projects/datacanvas/image7.png',
        '/images/projects/datacanvas/image8.png',
        '/images/projects/datacanvas/image9.png',
      
      ],
      color: 'green',
      githubUrl:'https://github.com/Datacanvas-IoT'
    },
    {
      id: '3',
      slug: 'predictive-maintenance',
      title: 'Predictive Maintenance Monitoring System',
      description: 'An IoT-based predictive maintenance solution using XGBoost machine learning model to forecast equipment failures with 97.95% accuracy, monitoring multiple machine conditions in real-time.',
      overview: 'A comprehensive predictive maintenance system designed to prevent unexpected machinery breakdowns in manufacturing environments. The system leverages IoT sensors and an XGBoost classifier to monitor critical parameters including temperature, pressure, motor power, vibration, and volume flow. By analyzing real-time sensor data through MQTT protocol, the system predicts five key machine conditions: cooler condition, internal pump leakage, hydraulic accumulator status, and overall stability, achieving an impressive 97.95% accuracy rate. This solution helps industries reduce maintenance costs, increase equipment lifespan, and prevent costly production outages.',
      keyFeatures: [
        'Real-time monitoring using IoT sensors (temperature, pressure, vibration, voltage, current, flow)',
        'XGBoost classifier model with 97.95% overall accuracy',
        'Predicts 5 critical machine conditions simultaneously',
        'MQTT-based real-time data gathering and processing',
        'Flask backend with machine learning model integration',
        'Interactive dashboard for equipment health visualization',
        'Preventive maintenance alerts and notifications',
        'High scalability and customizability for various industries',
      ],
      techStack: {
        backend: ['Python', 'Flask', 'XGBoost', 'MQTT Client'],
        frontend: ['React', 'TypeScript', 'Chart.js'],
        tools: ['MQTT Broker', 'ESP32', 'IoT Sensors', 'scikit-learn'],
      },
      architectureDiagrams: {
        system: '/images/projects/predictive-maintenance/technical-architecture.png',
      },
      categories: ['AI', 'IoT', 'ML', '4IR'],
      featured: true,
      year: 2024,
      image: '/images/projects/predictive-maintenance/image1.png',
      screenshots:[
        '/images/projects/predictive-maintenance/image1.png',
        '/images/projects/predictive-maintenance/image2.png',
        '/images/projects/predictive-maintenance/image3.png'
      ],
      color: 'cyan',
      githubUrl:'https://github.com/vshwanilgv/predictive_maintenance',
      mediumArticleUrl:'https://drive.google.com/drive/u/0/folders/12eTFlABMUEJnPQlhH5pUYY29yKiB0g86'
    },
    {
      id: '4',
      slug: 'autonomous-uav',
      title: 'Autonomous Navigational UAV',
      description: 'An autonomous UAV system with computer vision-based navigation, obstacle avoidance, and path planning capabilities for complex environments.',
      overview: 'Developed an autonomous drone system capable of navigating complex environments without human intervention. The system uses computer vision and sensor fusion to detect obstacles, plan optimal paths, and execute missions autonomously.',
      keyFeatures: [
        'Computer vision-based obstacle detection',
        'Real-time path planning and navigation',
        'GPS and sensor fusion for accurate positioning',
        'Autonomous takeoff, flight, and landing',
        'Mission planning and execution system',
        'Live video streaming and telemetry',
      ],
      techStack: {
        backend: ['Python', 'ROS', 'C++'],
        frontend: ['React', 'JavaScript'],
        database: ['SQLite'],
        tools: ['OpenCV', 'MAVLink', 'PX4', 'Gazebo'],
      },
      categories: ['AI', 'Robotics', 'Research'],
      year: 2024,
      image: '/images/projects/autonomous-uav.jpg',
      color: 'blue',
    },
    {
      id: '5',
      slug: 'vla-framework',
      title: 'Hierarchical VLA Framework',
      description: 'A research project developing hierarchical decision-making systems for robots using Vision-Language-Action models, enabling natural language-guided navigation in complex environments.',
      overview: 'This project explores the integration of Vision-Language-Action (VLA) models into autonomous robotic systems. The hierarchical framework allows robots to understand complex natural language instructions and translate them into actionable navigation strategies in real-world environments. The system demonstrates significant improvements in task completion rates and adaptability across different robot platforms.',
      keyFeatures: [
        'Multi-layered decision architecture for intelligent robot planning',
        'Integration of computer vision with natural language understanding',
        'Cross-platform compatibility with different robot systems',
        'Real-time adaptation to dynamic environments',
        'Natural language command processing for intuitive control',
      ],
      techStack: {
        backend: ['Python', 'ROS (Robot Operating System)', 'FastAPI'],
        frontend: ['React', 'TypeScript', 'WebSocket'],
        database: ['MongoDB', 'Redis'],
        tools: ['TensorFlow', 'PyTorch', 'OpenCV', 'Docker', 'Git'],
      },
      architectureDiagrams: {
        system: '/images/projects/vla-framework/system-architecture.png',
        deployment: '/images/projects/vla-framework/deployment-architecture.png',
      },
      githubUrl: 'https://github.com/vshwanilgv/vla-framework',
      screenshots: [
        '/images/projects/vla-framework/screenshot1.png',
        '/images/projects/vla-framework/screenshot2.png',
        '/images/projects/vla-framework/screenshot3.png',
        '/images/projects/vla-framework/screenshot4.png',
      ],
      categories: ['AI', 'Research', 'Robotics'],
      featured: true,
      year: 2025,
      image: '/images/projects/vla-framework.jpg',
      color: 'blue',
    },
    {
      id: '6',
      slug: 'gemma-trainer',
      title: 'Fine Tunning SLAM - Gemma 3 ',
      description: 'A specialized training pipeline for fine-tuning Google\'s Gemma 3 model on astronomy datasets, enabling domain-specific language understanding for research applications.',
      overview: 'This project focuses on adapting large language models for domain-specific tasks in astronomy research. By fine-tuning Gemma 3 on curated astronomy datasets, the model can assist researchers in literature review, data analysis, and hypothesis generation. The system achieves state-of-the-art performance on astronomy-specific tasks.',
      keyFeatures: [
        // 'Efficient fine-tuning using LoRA and QLoRA techniques',
        // 'Processed and cleaned 100K+ astronomy research papers',
        // '92% accuracy on astronomy-specific Q&A tasks',
        // 'Reduced inference time by 40% through quantization',
        // 'Custom evaluation metrics for astronomical reasoning',
        // 'Interactive web interface for model testing',
      ],
      techStack: {
        backend: ['Python', 'PyTorch', 'Transformers'],
        tools: ['Hugging Face', 'Google Colab (T4 GPU)'],
      },
      categories: ['AI', 'SLM', 'Fine Tunning'],
      year: 2026,
      image: '/images/projects/gemma/image1.png',
      color: 'yellow',
      githubUrl: 'https://github.com/vshwanilgv/FineTuneAstroQnA',
      mediumArticleUrl:'https://blog.stackademic.com/finetuning-gemma-1b-what-i-learned-8fa9bf0fac65',
      huggingFaceUrl:'vshwanilgv/gemma-3-1b-it-astro-mcqa'
    },
    {
      id: '7',
      slug: 'rgb-ir-fusion',
      title: 'RGB, IR Multi-Modal Fusion',
      description: 'An advanced computer vision system that fuses RGB and infrared imaging for enhanced object detection and recognition in challenging environmental conditions.',
      overview: 'This research project develops a multi-modal fusion approach combining RGB and infrared (IR) imaging to improve object detection accuracy in low-light and adverse weather conditions. The system leverages deep learning techniques to intelligently fuse complementary information from both modalities, achieving superior performance compared to single-modal approaches.',
      keyFeatures: [
        'Real-time fusion of RGB and IR image streams',
        'Deep learning-based feature extraction and fusion',
        'Enhanced object detection in low-light conditions',
        'Robust performance in fog, smoke, and adverse weather',
        'Adaptive fusion weights based on environmental context',
        'Support for multiple fusion architectures (early, late, hybrid)',
      ],
      techStack: {
        backend: ['Python', 'PyTorch', 'OpenCV'],
        frontend: ['Flask', 'JavaScript', 'WebRTC'],
        database: ['SQLite'],
        tools: ['CUDA', 'TensorRT', 'NumPy', 'Git'],
      },
      categories: ['AI', 'Computer Vision', 'Research'],
      year: 2024,
      image: '/images/projects/rgb-ir-fusion.jpg',
      color: 'cyan',
    },
    {
      id: '8',
      slug: 'ieee-wie-membership',
      title: 'IEEE WIE Membership Platform',
      description: 'A comprehensive membership management system for IEEE WIE Affinity Group, handling registrations, events, and member engagement.',
      overview: 'Developed a dedicated platform to manage IEEE WIE membership operations including member registration, event management, payment processing, and communication tools. The system streamlines administrative tasks and enhances member engagement.',
      keyFeatures: [
        'Member registration and profile management',
        'Adding Volunteer Contributions and Achievements',
        'Public dashboard showcasing member achievements and contributions',
        'Email notification and communication tools',
        'Admin dashboard for member analytics and approving member roles and contributions',
        'Service letter generation for members based on their contributions and roles',
      ],
      techStack: {
        backend: ['Node.js', 'Express', 'REST API'],
        frontend: ['React', 'TypeScript', 'Tailwind CSS'],
        database: ['MongoDB'],
        tools: ['Git', 'Stripe API', 'Nodemailer'],
      },
      categories: ['Full Stack', 'Web', 'Community'],
      year: 2024,
      image: '/images/projects/ieee-wie-membership.jpg',
      color: 'yellow',
    },
    {
      id: '9',
      slug: 'kiti-iwm',
      title: 'KITI IWM Web Application',
      description: 'A comprehensive information and workflow management system designed to streamline organizational processes and improve collaboration.',
      overview: 'KITI IWM is a web-based information and workflow management platform that helps organizations manage their processes, documents, and team collaboration effectively. The system features role-based access control, workflow automation, and real-time notifications.',
      keyFeatures: [
        'Document management and version control',
        'Workflow automation and task assignment',
        'Role-based access control system',
        'Real-time notifications and alerts',
        'Reporting and analytics dashboard',
        'Integration with third-party services',
      ],
      techStack: {
        backend: ['Java', 'Spring Boot', 'REST API'],
        frontend: ['Angular', 'TypeScript', 'Bootstrap'],
        database: ['MySQL'],
        tools: ['Git', 'Docker', 'Jenkins'],
      },
      categories: ['Full Stack', 'Web', 'Enterprise'],
      year: 2023,
      image: '/images/projects/kiti-iwm.jpg',
      color: 'green',
    },
    {
      id: '10',
      slug: 'verifica-fingerprint',
      title: 'Verifica Fingerprint Verification System',
      description: 'A biometric authentication system combining hardware and software for secure fingerprint-based verification and access control.',
      overview: 'Verifica is a complete biometric authentication solution that integrates fingerprint scanning hardware with a robust software platform. The system provides secure, fast, and reliable user verification for access control applications.',
      keyFeatures: [
        'Fingerprint capture and processing',
        'Real-time fingerprint matching and verification',
        'User enrollment and database management',
        'Access control and audit logging',
        'Multi-factor authentication support',
        'Integration with existing security systems',
      ],
      techStack: {
        backend: ['Python', 'Flask', 'OpenCV'],
        frontend: ['React', 'JavaScript'],
        database: ['PostgreSQL'],
        tools: ['OpenCV', 'NumPy', 'Serial Communication'],
      },
      categories: ['Full Stack', 'Security', 'Hardware'],
      year: 2023,
      image: '/images/projects/verifica.jpg',
      color: 'yellow',
    },
    {
      id: '11',
      slug: 'attendance-monitoring',
      title: 'Faculty Access Control System',
      description: 'An ESP32-powered RFID attendance system with a web application for real-time student attendance tracking, monitoring, and reporting.',
      overview: 'A smart IoT-based attendance marking system developed for the Faculty of IT to automate student attendance tracking. The system uses an ESP32 microcontroller integrated with an RFID reader to scan student ID cards and record attendance in real-time. The captured data is transmitted to a backend server and displayed through a web application dashboard for faculty administrators. The system improves accuracy, reduces manual work, and provides detailed attendance analytics and reporting.',
      keyFeatures: [
        'ESP32-based RFID card scanning device',
        'Real-time attendance recording via WiFi',
        'Student ID card authentication system',
        'Web-based admin dashboard for monitoring',
        'Attendance history tracking per student',
        'Automated report generation (daily/monthly)',
        'Role-based access control for administrators',
        'Export attendance records (CSV/PDF)',
      ],
      techStack: {
        hardware: ['ESP32', 'MFRC522 RFID Module', 'RFID Student ID Cards'],
        backend: ['Node.js / Flask (REST API)'],
        frontend: ['React / HTML, CSS, JavaScript'],
        tools: ['Arduino IDE', 'Git', 'Postman'],
      },
      categories: ['Full Stack', 'IoT', 'Hardware'],
      year: 2023,
      image: '/images/projects/attendance-monitoring/fac-access.jpeg',
      color: 'blue',
    },
    {
      id: '12',
      slug: 'ieee-wie-website',
      title: 'IEEE WIE Website',
      description: 'Official website for IEEE WIE Affinity Group showcasing events, achievements, team members, and community initiatives.',
      overview: 'Designed and developed the official website for IEEE WIE Affinity Group to establish an online presence and showcase the organization\'s activities. The site features event galleries, team profiles, blog posts, and contact information.',
      keyFeatures: [
        'Responsive and modern UI/UX design',
        'Event gallery and news section',
        'Team member profiles and leadership showcase',
        'Blog platform for articles and updates',
        'Contact form and social media integration',
        'Content management system for easy updates',
      ],
      techStack: {
        backend: ['Node.js', 'Express'],
        frontend: ['React', 'JavaScript', 'CSS'],
        database: ['MongoDB'],
        tools: ['Git', 'Figma', 'Netlify'],
      },
      categories: ['Full Stack', 'Web', 'Community'],
      year: 2023,
      image: '/images/projects/ieee-wie-website.jpg',
      color: 'yellow',
    },
    {
      id: '13',
      slug: 'ies-labs-website',
      title: 'IES Labs Official Website',
      description: 'Corporate website for IES Labs showcasing services, projects, team expertise, and client testimonials with a professional design.',
      overview: 'Developed the official website for IES Labs, a technology solutions provider. The site highlights the company\'s services, portfolio, team members, and client success stories with a focus on user experience and modern design.',
      keyFeatures: [
        'Professional and responsive web design',
        'Services and solutions showcase',
        'Project portfolio with case studies',
        'Team member profiles and expertise',
        'Client testimonials and success stories',
        'Contact form and inquiry management',
      ],
      techStack: {
        backend: ['PHP', 'Laravel'],
        frontend: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        database: ['MySQL'],
        tools: ['Git', 'cPanel', 'Adobe XD'],
      },
      categories: ['Full Stack', 'Web', 'Corporate'],
      year: 2023,
      image: '/images/projects/ies-labs.jpg',
      color: 'cyan',
    },
    {
      id: '14',
      slug: 'entrepreneurs-club-website',
      title: 'Entrepreneurs Club Official Website',
      description: 'Dynamic website for the Entrepreneurs Club featuring events, member resources, startup showcase, and networking opportunities.',
      overview: 'Created the official website for the Entrepreneurs Club to connect aspiring entrepreneurs, showcase startup projects, and promote entrepreneurship events. The platform serves as a hub for networking, resources, and community building.',
      keyFeatures: [
        'Event calendar and registration system',
        'Startup showcase and pitch platform',
        'Member directory and networking tools',
        'Resource library for entrepreneurs',
        'Blog and success story section',
        'Social media integration and sharing',
      ],
      techStack: {
        backend: ['Node.js', 'Express'],
        frontend: ['React', 'TypeScript', 'Tailwind CSS'],
        database: ['MongoDB'],
        tools: ['Git', 'Vercel', 'Figma'],
      },
      categories: ['Full Stack', 'Web', 'Community'],
      year: 2024,
      image: '/images/projects/entrepreneurs-club.jpg',
      color: 'green',
    },
  ],
};

export const getJourneyByType = (type: JourneyType): JourneyItem[] => {
  return PORTFOLIO_DATA.journey.filter((item) => item.type === type);
};

export const getAllProjects = (): Project[] => {
  return PORTFOLIO_DATA.projects;
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return PORTFOLIO_DATA.projects.find((project) => project.slug === slug);
};
