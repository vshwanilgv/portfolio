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
  details?: string[];
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
  usecase?: string;
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
  hostedUrl?: string;
  mediumArticleUrl?: string;
  huggingFaceUrl?: string;
  screenshots?: string[];
  year: number | string;
  image: string;
  color: AccentColor;
}

export interface ProjectShowcaseSection {
  id: string;
  title: string;
  gradientFrom: string;
  gradientTo: string;
  projectSlugs: string[];
}

export type AwardType = 'Champion' | '1st Runner Up' | '2nd Runner Up' | 'Winner' | 'Finalist';

export interface AwardItem {
  id: string;
  title: string;
  description: string;
  awardType: AwardType;
  images: string[];
  year?: number | string;
}

export interface PublicationItem {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  publisher: string;
  publishedAt: string;
  publicationUrl: string;
  screenshot?: string;
}

export interface PortfolioContent {
  profile: Profile;
  stats: Stat[];
  journey: JourneyItem[];
  projects: Project[];
  projectShowcaseSections: ProjectShowcaseSection[];
  awards: AwardItem[];
  publications: PublicationItem[];
}

export const PORTFOLIO_DATA: PortfolioContent = {

  profile: {
    name: 'Vishwani Bhagya Geeganage',
    role: 'Software Engineering Undergraduate & Researcher',
    bio: 'Final year undergraduate at Faculty of IT, University of Moratuwa. Passionate about Full Stack Development, AI, and building impactful solutions.',
    location: 'Sri Lanka',
    email: 'vishwanibhagya2002@gmail.com',
    // avatar: '/images/about/about-me.jpeg',
    avatar: '/images/about/profile1.jpg',
    resume: '/resume/Vishwani_CV.pdf',
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
      description: 'Specializing in Software Engineering with focus on Software Engineering, AI, IoT, Embedded System, Computer Networking, Cloud Computing, and full-stack development. Consistent academic excellence with Dean\'s List recognition.',
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
      description: 'Conducted advanced research autonomous robotics systems in Robotics and Image Processing Lab at Shibaura Institute of Technology, Tokyo, Japan. Collaborated with international researchers on cutting-edge AI applications.',
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
      description: 'Contributed to enterprise-grade product engineering by developing scalable backend services, improving internal workflows, and shipping production-ready features in a fast-paced agile environment.',
      details: [
        'Implemented and enhanced microservice endpoints with Spring Boot to support high-volume business operations.',
        'Built and refined ServiceNow solutions to automate internal workflows and improve operational efficiency.',
        'Collaborated across QA, product, and engineering teams to deliver features through sprint-based development.',
        'Participated in code reviews, defect triage, and release readiness activities to maintain software quality.',
      ],
      color: 'green',
      tags: ['Microservices', 'Java', 'React', 'Spring Boot', 'ServiceNow'],
    },
    {
      id: 'exp-hypercube',
      type: 'experience',
      icon: Briefcase,
      title: 'Software developer - Part Time',
      organization: 'HyperCube Labs',
      date: '2023 Dec - 2024 August',
      description: 'Developed end-to-end web product features and contributed to iterative product releases, focusing on performant frontends, reliable APIs, and maintainable codebases.',
      details: [
        'Designed and implemented UI features with React and TypeScript based on evolving product requirements.',
        'Developed and integrated backend APIs for data-driven workflows and user-facing functionality.',
        'Improved responsiveness and usability across desktop and mobile interfaces for key user journeys.',
        'Worked closely with stakeholders to translate business ideas into incremental technical deliverables.',
      ],
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
        backend: ['Spring Boot', 'Node.js', 'Express', 'Microservices', 'RESTful APIs', 'AWS Cognito'],
        frontend: ['React', 'JavaScript', 'Single-SPA', 'CSS'],
        database: ['PostgreSQL'],
        tools: ['Git', 'Postman', 'VS Code', 'AWS'],
      },
      architectureDiagrams: {
        usecase: '/images/projects/food-store/use-case.png',
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
      // architectureDiagrams: {
      //   system: '/images/projects/datacanvas/system-architecture.png',
      // },
      categories: ['Full Stack', 'IoT', 'Web'],
      featured: true,
      year: '2024 - 2026',
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
        'Autonomous takeoff, flight, and landing',
        'Mission planning and execution system',
        'Live video streaming and telemetry',
      ],
      techStack: {
        backend: ['Python'],
        hardware: ['DJI Tello '],
        tools: ['OpenCV', 'MAVLink', 'PX4', 'Gymnasium'],
      },
      architectureDiagrams:{
        system:'/images/projects/uav-navigation/architecture.png',
      },
      categories: ['AI', 'Robotics', 'Research'],
      year: 2025,
      githubUrl:'https://github.com/vshwanilgv/autonuomous-uav-navigation',
      image: '/images/projects/uav-navigation/uav.jpg',
      color: 'blue',
      screenshots:[
        '/images/projects/uav-navigation/UAV-navig.png',
      ],
      mediumArticleUrl:'https://docs.google.com/presentation/d/1kkG5yvwm-0pti57gjArGpWNWZ_9tTVfA/edit?usp=sharing&ouid=116669971725774873755&rtpof=true&sd=true',
    },
    {
      id: '5',
      slug: 'vla-framework',
      title: 'Hierarchical VLA Framework',
      description: 'A hierarchical vision-language navigation framework that separates high-level planning from low-level execution for natural language-guided robot navigation in complex indoor environments.',
      overview: 'Conventional robotic navigation systems often fail because they rely on rigid goal representations, closed-world assumptions, brittle failure modes, and weak adaptation to dynamic changes during navigation. This project addresses those limitations with a hierarchical Vision-Language-Action (VLA) framework that decouples high-level planning from low-level execution. The high-level planner uses a Vision-Language Model to generate discrete navigation commands from three RGB camera feeds, while the low-level executor uses a reinforcement learning controller with depth-based safety execution on the robot platform. We recorded 200 episodes using live FantasyVLN (Qwen2.5-VL) across HM3D minival scenes. Each episode begins from a random spawn with a goal instruction, and captures 64x64 depth observations, the current VLM command, and the agent position and heading at every step. The low-level controller is a CNN-based PPO policy that conditions on depth input, high-level command context, and learned collision-avoidance patterns. Training was run for 1400 PPO updates, totaling about 2.9 million environment steps, on a single NVIDIA RTX 3090 Ti (24GB VRAM) via RunPod, with each run taking about 11.5 hours of GPU compute time. Ongoing work focuses on fine-tuning Qwen2.5-VL 7B on an object-goal navigation dataset generated on Matterport3D and HM3D using Habitat Simulator, and validating deployment on RunPod RTX 4090 32GB instances.',
      keyFeatures: [
        'Hierarchical architecture that separates high-level planning from low-level execution',
        'High-level Vision-Language Model planner that generates discrete navigation commands from three RGB camera feeds',
        'Low-level PPO controller that uses depth observations for safer execution and collision avoidance',
        '200 recorded FantasyVLN episodes collected across HM3D minival scenes for training and evaluation',
        'Per-step state logging with 64x64 depth observations, VLM command context, agent position, and heading',
        'Current high-level planner upgrade to Qwen2.5-VL 7B with Chain-of-Thought reasoning',
        'Ongoing fine-tuning on object-goal navigation data generated with Habitat Simulator',
      ],
      phaseBreakdown: {
        phase1: {
          title: 'High Level Planner',
          highlights: [
            'Uses a Vision-Language Model to produce discrete navigation commands from three RGB camera feeds',
            'Upgraded from an instruct model variant to a Chain-of-Thought vision-language model for stronger reasoning',
            'Moved from smaller 2B/4B models to a 7B parameter model for improved planning quality',
          ],
        },
        phase2: {
          title: 'Low Level Executor',
          highlights: [
            'CNN-based PPO controller consumes depth camera input and high-level commands',
            'Trained with rollout length 2048, 2 epochs per update, minibatch size 256, learning rate 5e-5, entropy coefficient 0.05, value coefficient 0.25, GAE lambda 0.95, and PPO clip ratio 0.2',
            'Trained for 1400 updates and about 2.9 million environment steps on a single RTX 3090 Ti (24GB VRAM)',
          ],
        },
      },
      techStack: {
        backend: ['Python', 'ROS (Robot Operating System)', 'Habitat Simulator', 'PPO'],
        frontend: ['Vision-Language Model planning', '3 RGB camera feeds', 'Depth camera execution'],
        tools: ['Qwen2.5-VL', 'FantasyVLN', 'PyTorch', 'OpenCV', 'RunPod', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090'],
      },
      architectureDiagrams: {
        system: '/images/projects/vla/architecture.png',
      },
      categories: ['AI', 'Research', 'Robotics'],
      featured: true,
      year: 2026,
      image: '/images/projects/vla/image1.jpeg',
      screenshots: [
        '/images/projects/vla/image1.jpeg',
        '/images/projects/vla/architecture.png',
      ],
      color: 'blue',
    },
    {
    id: '6',
    slug: 'gemma-trainer',
    title: 'Fine-Tuning SLMs: Gemma 3 for Astronomy',
    description: 'A specialized training pipeline for fine-tuning Google\'s Gemma 3 (1B) model on astronomy MCQ datasets using Parameter-Efficient Fine-Tuning (PEFT).',
    overview: 'This project explores the capacity of Small Language Models (SLMs) to handle domain-specific reasoning. By fine-tuning Gemma 3 using LoRA, the system transforms general-purpose weights into an astronomy expert capable of answering complex multiple-choice questions while maintaining a low computational footprint.',
    keyFeatures: [
      'Implemented Parameter-Efficient Fine-Tuning (PEFT) using LoRA to reduce GPU memory overhead',
      'Comparative analysis of model capacity between Gemma-3-270M and 1B parameters',
      'Custom data pipeline for formatting raw astronomy MCQs into optimized prompt-answer pairs',
      'Optimized for resource-constrained environments like Google Colab (T4 GPU)',
      'Successfully addressed underfitting issues by scaling model capacity while maintaining training efficiency',
      'Integrated with Hugging Face Transformers for seamless model deployment and sharing',
    ],
    techStack: {
      backend: ['Python', 'PyTorch', 'Transformers', 'PEFT/LoRA'],
      tools: ['Hugging Face', 'Google Colab (T4 GPU)', 'Gemma 3'],
    },
    categories: ['AI', 'SLM', 'Fine-Tuning', 'NLP'],
    year: 2026,
    image: '/images/projects/slm/image1.webp',
    color: 'yellow',
    githubUrl: 'https://github.com/vshwanilgv/FineTuneAstroQnA',
    mediumArticleUrl: 'https://blog.stackademic.com/finetuning-gemma-1b-what-i-learned-8fa9bf0fac65',
    huggingFaceUrl: 'vshwanilgv/gemma-3-1b-it-astro-mcqa'
    },
    {
      id: '14',
      slug: 'rgb-ir-fusion',
      title: 'RGB, IR Multi-Modal Fusion',
      architectureDiagrams: {
        system: '/images/projects/rgb-ir/PBL_REPO.png',
      },
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
      image: '/images/projects/rgb-ir/images.jpeg',
      color: 'cyan',
      screenshots: [
        '/images/projects/rgb-ir/PBL_REPO (1).png',
        '/images/projects/rgb-ir/PBL_REPO (2).png',
      ],
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
      image: '/images/projects/wie-membership/1.png',
      screenshots: [
        '/images/projects/wie-membership/1.png',
        '/images/projects/wie-membership/2.png',
      ],
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
      image: '/images/projects/kiti/kiti1.png',
      screenshots: [
        '/images/projects/kiti/kiti1.png',
        '/images/projects/kiti/kiti2.png',
        '/images/projects/kiti/kiti3.png',
      ],
      color: 'green',
    },
    {
      id: '10',
      slug: 'verifica-fingerprint',
      title: 'Verifica Fingerprint Verification System',
      description: 'A biometric authentication system combining hardware and software for secure fingerprint-based verification and access control.',
      overview: 'Verifica is a complete biometric authentication solution that integrates fingerprint scanning hardware with a robust software platform. The system provides secure, fast, and reliable user verification for access control applications. The System is currently used by CODL University of Moratuwa',
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
      image: '/images/projects/codl/codl.jpeg',
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
      image: '/images/projects/wie/1.png',
      color: 'yellow',
      screenshots: [
        '/images/projects/wie/1.png',
        '/images/projects/wie/2.png',
        '/images/projects/wie/3.png',
        '/images/projects/wie/4.png',
        '/images/projects/wie/5.png',
        '/images/projects/wie/6.png',
      ],
      githubUrl:'https://github.com/vshwanilgv/WIE-web',
      hostedUrl:'https://ieeewieuom.lk/'
      
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
        frontend: ['HTML', 'CSS', 'JavaScript'],
        tools: ['Git'],
      },
      categories: ['Full Stack', 'Web', 'Corporate'],
      year: 2023,
      image: '/images/projects/ies-labs/image1.png',
      screenshots: [
        '/images/projects/ies-labs/image1.png',
        '/images/projects/ies-labs/image2.png',
        '/images/projects/ies-labs/image3.png',
        '/images/projects/ies-labs/image4.png',
      ],
      color: 'cyan',
      hostedUrl:'https://ieslabs.itfac.uom.lk/'
    },
 {
  id: '7',
  slug: 'finsight-rag',
  title: 'FinSight - Financial Document Intelligence',
  description: 'A production-grade Retrieval-Augmented Generation system that analyses financial reports with GPT-4o, achieving 0.883 overall RAGAs score with perfect context recall, featuring semantic reranking, confidence guards, and real-time streaming.',
  overview: 'FinSight is a production-ready RAG system built for financial document analysis. Users upload annual reports, 10-K filings, or earnings releases and ask natural language questions — the system retrieves the most relevant passages, reranks them using a Cohere cross-encoder, and streams cited answers token by token via GPT-4o. Built on a six-layer pipeline covering ingestion, chunking, embedding, retrieval, reranking, and generation, the system was rigorously evaluated using the RAGAs framework achieving 0.992 answer relevancy and 1.000 context recall. A confidence guard refuses to generate when retrieval scores fall below threshold, prioritising accuracy over coverage — critical in financial contexts where a wrong answer is worse than no answer.',
  keyFeatures: [
    'Six-layer RAG pipeline: ingestion → chunking → embedding → retrieval → reranking → generation',
    'Smart chunking with 600-token chunks and 80-token overlap to preserve financial context across boundaries',
    'GPT-4o-mini query rewriting converts conversational questions into search-optimised queries before retrieval',
    'Cohere cross-encoder reranking over top-15 vector candidates for precision-focused retrieval',
    'Confidence guard — refuses generation when top rerank score falls below 0.5 to prevent hallucination',
    'Strict citation enforcement — every claim cited with page number inline using GPT-4o',
    'RAGAs evaluation suite with golden test set: 0.992 answer relevancy, 1.000 context recall, 0.883 overall',
    'Real-time token streaming via FastAPI with NDJSON protocol',
    'PDF upload and ingestion endpoint — supports any financial document format',
    'Streamlit chat interface with live RAGAs metrics dashboard and source card display',
  ],
  techStack: {
    backend: ['Python', 'FastAPI', 'LangChain', 'GPT-4o', 'Cohere Rerank'],
    frontend: ['Streamlit'],
    database: ['ChromaDB'],
    tools: ['OpenAI Embeddings', 'RAGAs', 'PyPDF', 'Uvicorn'],
  },
  architectureDiagrams: {
    system: '/images/projects/finsight/image1.png',
  },
  categories: ['AI', 'RAG', 'NLP', 'FinTech'],
  featured: true,
  year: 2025,
  image: '/images/projects/finsight/image5.png',
  screenshots: [
    '/images/projects/finsight/image2.png',
    '/images/projects/finsight/image3.png',
    '/images/projects/finsight/image4.png',
  ],
  color: 'cyan',
  githubUrl: 'https://github.com/vshwanilgv/RAG',
  mediumArticleUrl: 'https://vshwanilgv.medium.com/beyond-the-knowledge-cutoff-retrieval-augmented-generation-rag-d6e5df0f6bec',
},
  ],
  projectShowcaseSections: [
    {
      id: 'featured-projects',
      title: 'Featured Projects',
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-500',
      projectSlugs: ['food-store-web-app', 'datacanvas', 'predictive-maintenance','autonomous-uav','vla-framework'],
    },
    {
      id: 'ai-machine-learning',
      title: 'AI & Machine Learning',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500',
      projectSlugs: ['gemma-trainer', 'finsight-rag', 'predictive-maintenance', 'rgb-ir-fusion',],
    },
    {
      id: 'hardware-iot',
      title: 'Hardware & IoT',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-emerald-500',
      projectSlugs: ['attendance-monitoring', 'verifica-fingerprint'],
    },
    {
      id: 'research',
      title: 'Research',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-500',
      projectSlugs: ['autonomous-uav', 'vla-framework'],
    },
    {
      id: 'software-development',
      title: 'Software Development',
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-blue-500',
      projectSlugs: ['food-store-web-app', 'datacanvas', 'ieee-wie-membership', 'kiti-iwm', 'ieee-wie-website', 'ies-labs-website'],
    },
  ],
  awards: [
    {
      id: 'award-huawei-2025',
      title: 'Huawei ICT Competition - Asia Pacific - 2025',
      description: 'Representing Team KernelPanic, we won the Grand Prize in the Huawei Developer Competition Asia Pacific 2024 - Student Track. After three intense rounds, we advanced as one of the top nine finalist teams in the Asia-Pacific region and clinched the championship title at the grand finals held at Chulalongkorn University in Bangkok, Thailand, where our solution, AirSense, stood out as an impactful innovation.',
      awardType: 'Champion',
      year: 2025,
      images: ['/images/awards/huawei-ict-competition-2025.jpeg'],
    },
    {
      id: 'award-hackx',
      title: 'HackX Innovation Challenge',
      description: 'From 200 incredible proposals, we were selected as one of the 15 finalists and proudly stood out as the 1st runner-up. Our product, Air Sense, is an innovative solution that facilitates air quality monitoring through visualizations and analytics, addressing the critical issue of air quality decline in industrial workplaces.',
      awardType: '1st Runner Up',
      images: ['/images/awards/hackx-innovation-challenge.jpg'],
    },
    {
      id: 'award-evolve',
      title: 'Evolve 2.0 - Organized by Kelaniya University Sri Lanka',
      description: 'Awarded for delivering Firewatch IoT, a high-impact wildfire detection and alerting system based on mesh networks and sensor fusion, demonstrating innovation and technical excellence in addressing real-world challenges.',
      awardType: '2nd Runner Up',
      images: ['/images/awards/evolve.jpg'],
    },
    {
      id: 'award-codesprint',
      title: 'Codesprint',
      description: 'Developed DataCanvas, an open-source IoT monitoring platform which enables real-time data ingestion using MQTT, centralized device and sensor management for IoT developers.',
      awardType: 'Finalist',
      images: ['/images/awards/codesprint-finalist.jpeg'],
    },
  ],
  publications: [
    {
      id: 'publication-2',
      title: 'VisualNav : Visually Grounded Natural Language Crawler Robot Navigation',
      abstract:
        'The integration of Vision-Language-Action (VLA) models into robotic systems promises to bridge the gap between high-level semantic intent and low-level control. However, deploying these computationally intensive models on resource-constrained mobile platforms while ensuring open-world generalization remains a significant challenge. This paper presents a comparative study of two distinct VLA architectures for natural language-driven navigation on a crawler robot. This work first evaluate a monolithic end-to-end approach, fine-tuning a Large Vision-Language Model to map visual observations directly to control commands. While highly effective in trained scenarios, this method suffers from severe overfitting and fails to generalize to novel objects. To address this issue, this work propose a modular architecture that decouples reasoning and perception using a Small Language Model for intent extraction and an Open-Vocabulary Detector for visual grounding, linked by a lightweight Multi-Layer Perceptron (MLP) control policy. The experiments demonstrate that this modular approach achieves superior zero-shot generalization and lower inference latency compared to the monolithic baseline. These findings suggest that disentangling semantic understanding from control offers a more robust and scalable path for deploying embodied AI on edge devices',
      authors: ['Lakmina Gamage', 'Haritha Weerathunga', 'Vishwani Geeganage', 'Prof. Chinthaka Premachandra', 'B.H.Sudantha'],
      publisher: 'IEEE',
      publishedAt: '2026',
      publicationUrl: 'https://ieeexplore.ieee.org/document/11497828',
      screenshot: '/images/publications/visual-nav.png',
    },
    {
      id: 'publication-1',
      title: 'Reinforcement Learning-Based Autonomous UAV Navigation in Indoor Environments Towards Human Detection',
      abstract:
        'Unmanned Aerial Vehicles (UAVs) have become indispensable in search and rescue (SAR) missions by enabling rapid aerial reconnaissance in unstructured and GPS denied environments that are inaccessible to ground teams. Conventional autonomous navigation systems typically depend on heavy sensor suites such as LiDAR or reliable GPS signals, which are often impractical for lightweight and low-cost rescue drones operating in cluttered indoor spaces, including partially collapsed buildings in disaster zones. To address this limitation, this paper introduces a cost-effective, fully autonomous UAV navigation framework that leverages Deep Reinforcement Learning (DRL) to replace brittle rule-based decision logic with adaptive policy learning. The framework integrates real-time human detection using a monocular RGB camera and YOLOv8n, and evaluates two DRL strategies for autonomous indoor maneuvering toward detected humans, specifically Deep Q-Network (DQN) and Proximal Policy Optimization (PPO). Simulation results indicate that rule-based navigation shows low generalization to dynamic and unstructured conditions. Although DQN shows limited reliability, the PPO based agent achieves higher navigation success rates and more stable decision policies. The proposed system is further validated through Sim to Real transfer using a DJI Tello drone on indoor flight tasks, demonstrating practical deployment without expensive sensing hardware. The results confirm the feasibility of lightweight, low-cost, vision based autonomous UAV agents capable of adaptive indoor navigation toward detected humans.',
      authors: ['Vishwani Geeganage', 'Lakmina Gamage', 'Haritha Weerathunga', 'Prof. Chinthaka Premachandra', 'B.H.Sudantha'],
      publisher: 'IEEE',
      publishedAt: '2026',
      publicationUrl: 'https://ieeexplore.ieee.org/document/11497788',
      screenshot: '/images/publications/rl-paper.png',
    },
  ],
};

export const getJourneyByType = (type: JourneyType): JourneyItem[] => {
  return PORTFOLIO_DATA.journey.filter((item) => item.type === type);
};

export const getAllProjects = (): Project[] => {
  return PORTFOLIO_DATA.projects;
};

export const getProjectShowcaseSections = (): Array<ProjectShowcaseSection & { projects: Project[] }> => {
  const projectsBySlug = new Map(PORTFOLIO_DATA.projects.map((project) => [project.slug, project]));
  return PORTFOLIO_DATA.projectShowcaseSections.map((section) => ({
    ...section,
    projects: section.projectSlugs
      .map((slug) => projectsBySlug.get(slug))
      .filter((project): project is Project => Boolean(project)),
  }));
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return PORTFOLIO_DATA.projects.find((project) => project.slug === slug);
};

export const getAllAwards = (): AwardItem[] => {
  return PORTFOLIO_DATA.awards;
};

export const getAllPublications = (): PublicationItem[] => {
  return PORTFOLIO_DATA.publications;
};
