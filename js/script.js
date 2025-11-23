// Project Data
const projectsData = [
    {
        name: "Meeting App",
        description: "A WebRTC-based video conferencing application that allows users to create and join meetings with real-time video and audio communication.",
        tags: ["React", "WebRTC", "Firebase", "JavaScript"],
        github: "https://github.com/vinu3838/meeting-app",
        demo: null,
        image: "meeting-app.jpg"
    },
    {
        name: "Jobber",
        description: "A job search and application platform that connects job seekers with employers, featuring job listings, application tracking, and profile management.",
        tags: ["Node.js", "Express", "MongoDB", "React"],
        github: "https://github.com/vinu3838/jobber",
        demo: null,
        image: "jobber.jpg"
    },
    {
        name: "NLP and Deep Learning",
        description: "A collection of natural language processing and deep learning projects, including text classification, sentiment analysis, and language generation models.",
        tags: ["Python", "TensorFlow", "NLP", "Deep Learning"],
        github: "https://github.com/vinu3838/nlpAndDeepLearning",
        demo: null,
        image: "nlp.jpg"
    },
    {
        name: "Machine Learning",
        description: "Various machine learning projects and algorithms implementations, including supervised and unsupervised learning techniques.",
        tags: ["Python", "Scikit-learn", "Machine Learning", "Data Science"],
        github: "https://github.com/vinu3838/machine-learning",
        demo: null,
        image: "ml.jpg"
    },
    {
        name: "Langchain Projects",
        description: "Projects built using Langchain framework for developing applications with large language models (LLMs).",
        tags: ["Python", "Langchain", "LLM", "AI"],
        github: "https://github.com/vinu3838/langchain",
        demo: null,
        image: "langchain.jpg"
    },
    {
        name: "Data Analysis",
        description: "Data analysis and visualization projects using various datasets to extract insights and create meaningful visualizations.",
        tags: ["Python", "Pandas", "Data Analysis", "Visualization"],
        github: "https://github.com/vinu3838/data_analysis",
        demo: null,
        image: "data-analysis.jpg"
    },
    {
        name: "DEX API",
        description: "A decentralized exchange API for cryptocurrency trading, providing endpoints for market data, order placement, and trade execution.",
        tags: ["Node.js", "API", "Blockchain", "Cryptocurrency"],
        github: "https://github.com/vinu3838/dex-api",
        demo: null,
        image: "dex-api.jpg"
    },
    {
        name: "Langgraph Projects",
        description: "Projects built using Langgraph for creating complex AI workflows and agent-based systems.",
        tags: ["Python", "Langgraph", "AI", "Agents"],
        github: "https://github.com/vinu3838/langgraph-projects",
        demo: null,
        image: "langgraph.jpg"
    },
    {
        name: "Micro Frontend",
        description: "Implementation of micro frontend architecture, allowing for independent development and deployment of frontend applications.",
        tags: ["JavaScript", "Micro Frontend", "React", "Module Federation"],
        github: "https://github.com/vinu3838/micro-frontend",
        demo: null,
        image: "micro-frontend.jpg"
    },
    {
        name: "Google Drive Test",
        description: "A testing framework for Google Drive API integration, demonstrating file upload, download, and management capabilities.",
        tags: ["JavaScript", "Google API", "Testing", "Node.js"],
        github: "https://github.com/vinu3838/google-drive-test",
        demo: null,
        image: "google-drive.jpg"
    },
    {
        name: "React App with Custom Webpack",
        description: "A React application with a custom Webpack configuration, demonstrating advanced build optimization techniques.",
        tags: ["React", "Webpack", "JavaScript", "Build Tools"],
        github: "https://github.com/vinu3838/react-app-with-custom-webpack",
        demo: null,
        image: "webpack.jpg"
    },
    {
        name: "Clothing App",
        description: "An e-commerce platform for clothing items, featuring product listings, shopping cart, and checkout functionality.",
        tags: ["React", "Node.js", "E-commerce", "Payment Integration"],
        github: "https://github.com/vinu3838/clothing-app",
        demo: null,
        image: "clothing-app.jpg"
    },
    {
        name: "Multi Docker",
        description: "A multi-container Docker application with orchestration, demonstrating microservices architecture and container management.",
        tags: ["Docker", "Microservices", "DevOps", "Container Orchestration"],
        github: "https://github.com/vinu3838/multi-docker",
        demo: null,
        image: "multi-docker.jpg"
    },
    {
        name: "Image Gallery UI",
        description: "A responsive image gallery user interface with advanced filtering, sorting, and viewing capabilities.",
        tags: ["React", "CSS", "UI/UX", "Frontend"],
        github: "https://github.com/vinu3838/image-gallery-ui",
        demo: null,
        image: "gallery-ui.jpg"
    },
    {
        name: "Image Gallery API",
        description: "Backend API for an image gallery application, handling image uploads, metadata, and user management.",
        tags: ["Node.js", "Express", "MongoDB", "API"],
        github: "https://github.com/vinu3838/image-gallery-api",
        demo: null,
        image: "gallery-api.jpg"
    },
    {
        name: "World Map Code",
        description: "Interactive world map visualization with data overlays and country-specific information display.",
        tags: ["JavaScript", "D3.js", "GeoJSON", "Data Visualization"],
        github: "https://github.com/vinu3838/WorldMapCode",
        demo: null,
        image: "world-map.jpg"
    }
];

// DOM Elements
const projectsGrid = document.querySelector('.projects-grid');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    setupEventListeners();
});

// Populate Projects Section
function populateProjects() {
    projectsGrid.innerHTML = '';
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // Create project image or placeholder
        const imageHtml = `
            <div class="project-image">
                <i class="fas fa-code"></i>
            </div>
        `;
        
        // Create tags HTML
        const tagsHtml = project.tags.map(tag => `<div class="project-tag">${tag}</div>`).join('');
        
        // Create links HTML
        let linksHtml = `
            <a href="${project.github}" target="_blank">
                <i class="fab fa-github"></i> GitHub
            </a>
        `;
        
        if (project.demo) {
            linksHtml += `
                <a href="${project.demo}" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            `;
        }
        
        // Assemble the project card HTML
        projectCard.innerHTML = `
            ${imageHtml}
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
                <div class="project-links">
                    ${linksHtml}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact Form Submission (for demonstration)
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! This is a demo form, so no actual message was sent.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Add scroll event to change header style on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});
