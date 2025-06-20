export const projects = [
  {
    id: 1,
    name: 'Secret-App',
    description: 'A secure full-stack application where users can register, log in, and anonymously share secrets. Built with robust authentication, session handling, and protected routes.',
    longDescription: 'Secret-app is a privacy-focused full-stack project that allows users to register and anonymously post secrets. It features secure user authentication using Passport.js and sessions, supports multiple OAuth strategies (Google, Facebook), and ensures data protection through encrypted storage. Ideal for demonstrating authentication and authorization concepts in real-world apps.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Passport.js', 'OAuth 2.0'],
    liveDemo: 'https://secret-app-jrug.onrender.com/',
    github: 'https://github.com/niranjansingh0/secret-app',
    image: '/api/placeholder/400/250',
    featured: true,
    category: 'Full Stack'
  },
  
   {
     id: 2,
     name: 'Daily Journal',
     description: 'A personal blogging web app where users can compose, view, and manage journal entries in a clean and minimal UI.',
     longDescription: 'Daily Journal is a full-stack blog application that allows users to write and publish personal journal entries. Users can compose posts using a simple editor, view individual blogs via dynamic routing, and explore an archive of entries. This project demonstrates routing, templating, and CRUD operations using Node.js and MongoDB.',
     tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap'],
     liveDemo: 'https://blogs-gdmo.onrender.com/',
     github: 'https://github.com/niranjansingh0/Blogs',
     image: '/api/placeholder/400/250',
     featured: true,
     category: 'Full Stack'
   },

   {
    id: 3,
    name: 'Pollution',
    description: 'A responsive website built to raise awareness about pollution, its effects, and ways to reduce it, using informative visuals and structured content.',
    longDescription: 'Pollution Hub is an educational static website designed to inform users about different types of pollution, their causes, and preventive measures. The site features an engaging UI with clean sections, awareness tips, and interactive content to promote environmental consciousness.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://niranjansingh0.github.io/No-Pollution-Hub/',
    github: 'https://github.com/niranjansingh0/No-Pollution-Hub',
    image: '/api/placeholder/400/250',
    featured: false,
    category: 'Web App'
  },

  {
    id: 4,
    name: 'Automated Web Data Extraction & Email Reporting',
    description: 'An RPA project using UiPath to extract structured data from websites and automate email reporting with dynamic Excel summaries.',
    longDescription: 'This project demonstrates the use of UiPath to automate web data extraction from structured web pages, generate reports in Excel format, and automatically send those reports via email. It eliminates manual data collection, improves reporting efficiency, and showcases practical use of selectors, loops, and Outlook integration in UiPath.',
    tech: ['UiPath', 'Excel Automation', 'Outlook', 'Data Scraping', 'Selectors'],
    liveDemo: 'https://github.com/niranjansingh0/Automated-Web-Data-Extraction-and-Email-Reporting', // Optional: remove or update if you have a demo link
    github: 'https://github.com/niranjansingh0/Automated-Web-Data-Extraction-and-Email-Reporting',
    image: '/api/placeholder/400/250',
    featured: true,
    category: 'Automation'
  },

  {
    id: 5,
    name: 'Mileage Prediction - Regression Analysis',
    description: 'A machine learning project using regression models to predict car mileage (MPG) based on various engine and vehicle features.',
    longDescription: 'This data analytics project involves building and evaluating multiple regression models to predict a car’s mileage using features like horsepower, displacement, weight, and model year. It includes data preprocessing, visualization, feature selection, and model evaluation with performance metrics. Ideal for demonstrating practical application of supervised learning techniques.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    liveDemo: 'https://github.com/niranjansingh0/Mileage-Prediction---regression-Analysis/blob/main/Mileage%20Prediction%20-%20Regression%20Analysis.ipynb',
    github: 'https://github.com/niranjansingh0/Mileage-Prediction---regression-Analysis',
    image: '/api/placeholder/400/250',
    featured: false,
    category: 'Data Analytics'
  },

  {
    id: 6,
    name: 'Portfolio Website',
    description: 'Responsive portfolio website built with React.js, featuring dark mode, smooth animations, contact form, and modern design principles.',
    longDescription: 'A modern, responsive portfolio website showcasing projects and skills. Features include dark/light mode toggle, smooth scrolling, contact form with backend integration, and SEO optimization.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'EmailJS'],
    liveDemo: '',
    github: 'https://github.com/niranjansingh0/portfolio-website',
    image: '/api/placeholder/400/250',
    featured: true,
    category: 'Portfolio'
  },
  {
  id: 7,
  name: 'E-commerce Website',
  description: 'Fully responsive e-commerce website built with React.js, designed for showcasing and selling products online with a modern user interface.',
  longDescription: 'A dynamic and responsive e-commerce web application developed using React.js and Tailwind CSS. The platform enables users to browse products, view detailed descriptions, and add items to the cart. It includes a contact form powered by EmailJS, a clean and intuitive UI, and a mobile-friendly layout. Perfect for small businesses looking to establish an online storefront.',
  tech: ['React.js', 'Tailwind CSS', 'Node.js', 'EmailJS'],
  liveDemo: 'https://omcyclestore.vercel.app/',
  github: 'https://github.com/niranjansingh0/quickserve-website',
  image: '/api/placeholder/400/250',
  featured: true,
  category: 'Web App'
}

];

export const projectCategories = [
  'All',
  'Full Stack',
  'Web App',
  'Data Visualization',
  'Automation',
  'Data Analytics',
  'Portfolio'
];

export const featuredProjects = projects.filter(project => project.featured);