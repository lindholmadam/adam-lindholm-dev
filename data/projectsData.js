const projectsData = [
    {
      slug: "mern-authentication",
      // Huvudrubrik 
      title: "MERN Authentication System",
  

      // Fakta/intro-del 
      description: "A full-stack authentication system built with React, Redux, Node.js, Express, and MongoDB.",
      role: "Full-stack Developer",
      year: "2023",
      techStack: [
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "React", icon: "SiReact" },
        { name: "Redux Toolkit", icon: "SiRedux" },
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "Express", icon: "SiExpress" },
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "JWT", icon: "SiJsonwebtokens" },
        { name: "bcrypt", icon: "SiBcrypt" }
      ],
      demoLink: "https://mern-authentication-hgkc.onrender.com/",
      githubLink: "https://github.com/lindholmadam/MERN-Authentication-System",
  

      // Youtube-video 
      youtubeId: "iNfjhBDV0Y8",
  

      // Introduction (inledning till projektet)
      introduction: `This project started as a broader app concept that would collect and organize 
      information from external APIs. As I refined the idea, I decided to focus on 
      building a modular authentication system—a core feature needed in most applications. 
      The result is a secure and scalable authentication solution using the MERN stack, 
      designed for easy integration into future projects.`,
      features: [
        "User Authentication – Secure login and registration with JWT-based authentication.",
        "OAuth Integration – Google login for a faster, password-free experience.",
        "Secure Password Storage – All passwords are hashed with bcrypt before being stored.",
        "Protected Routes – Middleware ensures only authenticated users access certain parts of the app.",
        "State Management – User sessions handled efficiently with Redux Toolkit.",
        "Multi-Step Registration – A structured sign-up flow for improved user experience.",
        "Profile Management – Users can update their account details securely."
      ],
  

      // The Challenge (problemet & målet)
      challenge: {
        text: `The main challenge was that this was my first large-scale backend project. While I had experience in frontend development, handling authentication, API security, and database management was new territory.
        I wanted to ensure the system followed best practices for security, including hashed passwords, JWT-based authentication, and OAuth integration. Additionally, the solution needed to be scalable and easy to integrate into future applications without major modifications.
        This meant researching authentication flows, understanding how to secure user sessions, and structuring the backend to be modular and maintainable.`,

        screenshots: [
          { "src": "auth-flow-diagram.png", "description": "The Authentication Flow Diagram illustrates the process from user login to JWT validation for protected routes" }
        ]
      },


      // The Solution (hur det byggdes – backend & frontend)
      solution: {
        backend: {
          text: `The backend was built with Node.js, Express, and MongoDB, focusing on security and modularity.`,
          keyPoints: [
            "JWT Authentication: Secure login with httpOnly cookies to prevent XSS attacks.",
            "Password Hashing: All passwords are hashed with bcrypt before storage.",
            "Google OAuth Integration: Allows users to log in via Google for added flexibility.",
            "Protected Routes: Middleware ensures that only authenticated users can access certain endpoints."
          ],
          screenshots: [
            { "src": "mern-architecture.png", "description": "The System Architecture Diagram illustrates the interaction between the client, backend, database, and OAuth provider, detailing how authentication and user data are managed" }
          ]
        },
        frontend: {
          text: `The frontend, built with React and Redux Toolkit, provides a seamless login experience.`,
          keyPoints: [
            "State Management with Redux: Handles user sessions efficiently.",
            "RTK Query for API Calls: Simplifies authentication requests and profile updates.",
            "Multi-Step Registration: A structured sign-up flow for better user experience."
          ],
          screenshots: []
        }
      },
  

      // The Outcome (lärdomar & reflektioner)
      outcome: {
        text: `This project was a deep dive into fullstack development, allowing me to gain hands-on experience with backend security, authentication flows, and API integration. It also reinforced the importance of structuring code in a modular and scalable way.`,
        reflection: `Looking back, I realized that Redux might have been overkill for a simple authentication system - React Context or cookies alone could have handled session management more efficiently. However, working with Redux Toolkit provided valuable experience in state management at scale.`,
        screenshots: []
      }
    },







    {
      "slug": "ecommerce-case-study",
      "title": "E-commerce Business",
      "description": "An online store specializing in home decor, built with Shopify and optimized for automation.",
      "role": "Founder & Developer",
      "year": "2024",
      "techStack": [
        { "name": "Shopify", "icon": "SiShopify" },
        { "name": "Liquid", "icon": "SiShopify" },
        { "name": "JavaScript", "icon": "SiJavascript" },
        { "name": "Google Analytics", "icon": "SiGoogleanalytics" },
        { "name": "Meta Ads", "icon": "SiFacebook" },
        { "name": "Zoho Mail", "icon": "SiZoho" },
        { "name": "Canva", "icon": "SiCanva" }
      ],
      "demoLink": "https://nordicasa.se/",
    
      "youtubeId": "gKGUAbRZ1Hs",
    
      "introduction": "I started this e-commerce store as a way to explore online business, automation, and digital marketing. The goal was to build a self-sustaining store with minimal manual effort, allowing me to focus on strategy rather than day-to-day operations.",
    
      "features": [
        "Automated product imports and inventory management",
        "Optimized checkout process with customized Shopify theme",
        "Multi-language support with automatic and manual translations",
        "Custom navigation and UX improvements for better conversion rates",
        "Integrated analytics and ad tracking for data-driven marketing"
      ],
    
      "challenge": {
        "text": "Managing an e-commerce store requires balancing multiple aspects - product selection, pricing, marketing, and user experience. One of the biggest challenges was pinpointing what needed improvement, as ad responses were limited and required more data to analyze effectively. Additionally, relying on a dropshipping supplier introduced risks due to the lack of control over product availability and unexpected changes.",
        "screenshots": []
      },
    
      "solution": {
        "storeSetup": {
          "text": "To create a scalable e-commerce business, I optimized the Shopify theme, integrated automation tools, and structured the product catalog for a seamless shopping experience.",
          "keyPoints": [
            "Customized Shopify theme using Liquid and JavaScript",
            "Automated product imports with Syncee, later switched to manual selection",
            "Bulk product editing via CSV files for efficiency",
            "Optimized store navigation inspired by top Nordic interior design retailers"
          ],
          "screenshots": ["images/ecommerce-solution.png"]
        },
        "marketing": {
          "text": "To drive traffic and optimize conversion rates, I implemented a combination of paid ads and organic marketing strategies.",
          "keyPoints": [
            "Facebook & Instagram Ads for audience targeting",
            "Google Analytics for performance tracking and data-driven decisions",
            "Canva-designed creatives for ads and branding",
            "Zoho Mail integration for customer support and transactional emails"
          ],
          "screenshots": ["images/ecommerce-marketing.png"]
        }
      },
    
      "outcome": {
        "text": "This project provided valuable insights into e-commerce strategy, automation, and digital marketing. It reinforced the importance of careful planning, supplier reliability and iterative optimization.",
        "reflection": "Looking back, I would focus more on selecting a niche product portfolio, planning the marketing funnel in advance and working with a team to reduce the workload of managing everything alone.",
        "screenshots": []
      }
    },




    {
      "slug": "portfolio-blog-platform",
      "title": "Art Portfolio & Blog Platform",
    
      // Fakta/intro-del
      "description": "A full-stack portfolio and blog platform featuring user authentication, content management, and a custom CMS for artwork and blog posts.",
      "role": "Full-stack Developer",
      "year": "2021",
      "techStack": [
        { "name": "JavaScript", "icon": "SiJavascript" },
        { "name": "Node.js", "icon": "SiNodedotjs" },
        { "name": "Express", "icon": "SiExpress" },
        { "name": "MongoDB", "icon": "SiMongodb" },
        { "name": "EJS", "icon": "SiHtml5" },
        { "name": "Passport.js", "icon": "SiPassport" }
      ],
      "demoLink": "https://artportfolio-ao0q.onrender.com/",
      "githubLink": "https://github.com/lindholmadam/artportfolio",

      "youtubeId": "3-w4cc1hMyE",
    
      // Introduction
      "introduction": "This project was built for an artist who wanted a dedicated space to showcase their work, blog about their creative process, and manage content independently. The platform includes a secure login system, an admin dashboard for adding new artwork and blog posts, and a clean front-end for visitors.",
    
      "features": [
        "Content Management – Admin dashboard for managing blog posts and artwork.",
        "User Authentication – Secure login system with Passport.js and session-based authentication.",
        "Dynamic Artwork Gallery – Display of uploaded artwork with descriptions.",
        "Markdown-based Blog System – Simple blog post creation with text formatting support.",
        "SEO Optimization – Automatically generated sitemaps for better search engine visibility."
      ],
    
      // The Challenge
      "challenge": {
        "text": "The main challenge was creating a full-stack application that allowed easy content management without relying on third-party platforms. Since this was my first large-scale full-stack project, I had to learn how to structure a secure authentication system, handle session-based login, and build an admin dashboard for managing content efficiently."
      },
    
      // The Solution
      "solution": {
        "backend": {
          "text": "The backend was built with Node.js, Express, and MongoDB to store and manage artwork, blog posts, and user authentication securely.",
          "keyPoints": [
            "Express.js with EJS templates for rendering dynamic content.",
            "MongoDB database for storing blog posts, artwork, and user data.",
            "Passport.js for secure authentication and session management."
          ]
        },
        "frontend": {
          "text": "The frontend was designed with simplicity in mind, focusing on clean navigation, easy content consumption, and a minimalistic aesthetic.",
          "keyPoints": [
            "EJS templating system for server-side rendering.",
            "Fully responsive layout for an optimal experience across devices.",
            "Dynamic rendering of blog posts and artwork pages."
          ]
        }
      },
    
      // The Outcome
      "outcome": {
        "text": "The platform successfully provided the artist with an independent space to manage and showcase their work. It was a valuable experience in developing a full-stack system with a focus on both functionality and user experience.",
        "reflection": "If I were to build this project today, I would likely use a headless CMS for better scalability and replace session-based authentication with JWT for improved security."
      }
    },

    {
      "slug": "adam-lindholm-portfolio",
      "title": "adam-lindholm.dev",
    
      // Fakta/Intro-del
      "description": "A modern and minimalistic developer portfolio built with Next.js and Tailwind CSS.",
      "role": "Full-stack Developer",
      "year": "2025",
      "techStack": [
        { "name": "Next.js", "icon": "SiNextdotjs" },
        { "name": "React", "icon": "SiReact" },
        { "name": "Tailwind CSS", "icon": "SiTailwindcss" },
        { "name": "Framer Motion", "icon": "SiFramer" },
        { "name": "Vercel", "icon": "SiVercel" }
      ],
      "githubLink": "https://github.com/lindholmadam/adam-lindholm-dev",
    
      // YouTube-video
      "youtubeId": "",
    
      // Introduction
      "introduction": "As a web developer with a strong interest in both technology and business, I wanted a professional space to showcase my projects and skills. The goal was to create a sleek, minimalistic, and user-friendly portfolio that effectively presents my work while maintaining high performance and scalability.",
    
      // Features
      "features": [
        "Case Studies – Each project has a dedicated page with in-depth details.",
        "Smooth Page Transitions – Enhances the navigation experience.",
        "Optimized Performance – Fast load times using server-side rendering and static generation.",
        "Contact Form – Secure email handling with Resend API.",
        "SEO Optimization – Ensures visibility in search engines.",
        "Fully Responsive – Works seamlessly across all devices."
      ],
    
      // The Solution
      "solution": {
        "frontend": {
          "text": "Built with Next.js and Tailwind CSS to ensure a fast, responsive, and modern design.",
          "keyPoints": [
            "Next.js for Static & Dynamic Rendering",
            "Tailwind CSS for rapid styling and flexibility",
            "Framer Motion for animations and micro-interactions",
            "Dark Theme for a modern and minimal aesthetic"
          ]
        },
        "backend": {
          "text": "The backend is minimal, using Vercel for deployment and Resend API for email handling.",
          "keyPoints": [
            "Vercel for CI/CD and hosting",
            "Custom domain setup with DNS configurations",
            "Secure contact form with email automation"
          ]
        }
      },
    
      // The Outcome
      "outcome": {
        "text": "Building adam-lindholm.dev was a valuable experience in structuring a scalable, maintainable portfolio site.",
        "reflection": "Looking forward, I plan to keep improving the site by adding more interactivity, refining animations, and exploring further SEO and performance optimizations."
      }
    }
    

    
    
  ];
  
  export default projectsData;
  