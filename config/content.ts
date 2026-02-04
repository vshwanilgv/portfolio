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
  backend?: string[];
  frontend?: string[];
  database?: string[];
  tools?: string[];
}

export interface ArchitectureDiagrams {
  system?: string;
  deployment?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  overview: string;
  keyFeatures: string[];
  techStack: TechStack;
  architectureDiagrams?: ArchitectureDiagrams;
  categories: string[];
  githubUrl?: string;
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
    avatar: '/images/hero/profile.jpeg',
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
      description: 'A full-featured e-commerce platform for online food ordering with real-time inventory management, payment integration, and order tracking capabilities.',
      overview: 'An end-to-end food store web application that streamlines the online food ordering process. The platform includes user authentication, shopping cart functionality, real-time order tracking, and an admin dashboard for inventory and order management.',
      keyFeatures: [
        'User authentication and profile management',
        'Real-time shopping cart and checkout system',
        'Integrated payment gateway for secure transactions',
        'Order tracking and notification system',
        'Admin dashboard for inventory management',
        'Responsive design for mobile and desktop',
      ],
      techStack: {
        backend: ['Node.js', 'Express'],
        frontend: ['React', 'JavaScript', 'CSS'],
        database: ['MongoDB'],
        tools: ['Git', 'Postman', 'VS Code'],
      },
      categories: ['Full Stack', 'Web', 'E-commerce'],
      year: 2023,
      image: '/images/projects/food-store.jpg',
      color: 'green',
    },
    {
      id: '2',
      slug: 'datacanvas',
      title: 'DataCanvas IoT Monitoring Platform',
      description: 'A full-stack IoT data management platform that simplifies device connectivity, real-time data streaming, and visualization for developers building IoT applications.',
      overview: 'DataCanvas is a comprehensive IoT data management solution designed to reduce the complexity of building IoT applications. The platform provides real-time MQTT communication, device management, and powerful data visualization tools. It enables developers to focus on building features rather than managing infrastructure.',
      keyFeatures: [
        'Real-time device connectivity using MQTT protocol',
        'Customizable dashboards with drag-and-drop widgets',
        'RESTful API for seamless third-party integrations',
        'Role-based access control and team collaboration',
        'Time-series data storage and advanced analytics',
        'Alert system for threshold-based notifications',
      ],
      techStack: {
        backend: ['Node.js', 'Express', 'MQTT Broker'],
        frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
        database: ['PostgreSQL', 'TimescaleDB', 'Redis'],
        tools: ['Docker', 'Nginx', 'GitHub Actions', 'AWS'],
      },
      architectureDiagrams: {
        system: '/images/projects/datacanvas/system-architecture.png',
      },
      categories: ['Full Stack', 'IoT', 'Web'],
      year: 2024,
      image: '/images/projects/datacanvas.jpg',
      color: 'green',
    },
    {
      id: '3',
      slug: 'predictive-maintenance',
      title: 'Predictive Maintenance System',
      description: 'An IoT-based predictive maintenance solution using machine learning to forecast equipment failures and optimize maintenance schedules.',
      overview: 'This system leverages IoT sensors and machine learning algorithms to predict equipment failures before they occur. By analyzing sensor data in real-time, the system provides actionable insights to maintenance teams, reducing downtime and maintenance costs.',
      keyFeatures: [
        'Real-time sensor data collection and monitoring',
        'Machine learning models for failure prediction',
        'Anomaly detection and alert system',
        'Maintenance scheduling optimization',
        'Historical data analysis and reporting',
        'Dashboard for equipment health visualization',
      ],
      techStack: {
        backend: ['Python', 'Flask', 'TensorFlow'],
        frontend: ['React', 'TypeScript', 'Chart.js'],
        database: ['PostgreSQL', 'InfluxDB'],
        tools: ['MQTT', 'Docker', 'scikit-learn'],
      },
      categories: ['AI', 'IoT', 'ML'],
      year: 2024,
      image: '/images/projects/predictive-maintenance.jpg',
      color: 'cyan',
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
        '87% success rate in complex navigation tasks',
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
      year: 2025,
      image: '/images/projects/vla-framework.jpg',
      color: 'blue',
    },
    {
      id: '6',
      slug: 'gemma-trainer',
      title: 'Gemma 3 Trainer',
      description: 'A specialized training pipeline for fine-tuning Google\'s Gemma 3 model on astronomy datasets, enabling domain-specific language understanding for research applications.',
      overview: 'This project focuses on adapting large language models for domain-specific tasks in astronomy research. By fine-tuning Gemma 3 on curated astronomy datasets, the model can assist researchers in literature review, data analysis, and hypothesis generation. The system achieves state-of-the-art performance on astronomy-specific tasks.',
      keyFeatures: [
        'Efficient fine-tuning using LoRA and QLoRA techniques',
        'Processed and cleaned 100K+ astronomy research papers',
        '92% accuracy on astronomy-specific Q&A tasks',
        'Reduced inference time by 40% through quantization',
        'Custom evaluation metrics for astronomical reasoning',
        'Interactive web interface for model testing',
      ],
      techStack: {
        backend: ['Python', 'PyTorch', 'Transformers'],
        frontend: ['Streamlit', 'Gradio'],
        database: ['PostgreSQL', 'Vector Database (Pinecone)'],
        tools: ['Hugging Face', 'CUDA', 'Weights & Biases', 'Docker'],
      },
      categories: ['AI', 'Research', 'ML'],
      year: 2024,
      image: '/images/projects/gemma-trainer.jpg',
      color: 'yellow',
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
        'Event creation and RSVP system',
        'Payment integration for membership fees',
        'Email notification and communication tools',
        'Admin dashboard for member analytics',
        'Certificate generation for events and workshops',
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
      description: 'Faculty access control system with automated attendance tracking, RFID integration, and comprehensive reporting capabilities.',
      overview: 'A smart attendance monitoring system designed for educational institutions to automate attendance tracking and access control. The system uses RFID technology to record entries and exits, generating detailed reports for faculty and administration.',
      keyFeatures: [
        'RFID-based automated attendance tracking',
        'Real-time entry and exit logging',
        'Faculty and student database management',
        'Automated report generation and analytics',
        'Admin dashboard for attendance monitoring',
        'Export functionality for attendance records',
      ],
      techStack: {
        backend: ['Python', 'Flask', 'REST API'],
        frontend: ['React', 'JavaScript', 'Bootstrap'],
        database: ['MySQL'],
        tools: ['RFID Reader', 'Arduino', 'Git'],
      },
      categories: ['Full Stack', 'IoT', 'Hardware'],
      year: 2023,
      image: '/images/projects/attendance-system.jpg',
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
