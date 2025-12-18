// script.js - Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ===== GLOBAL VARIABLES =====
    const projectsData = [
        {
            id: 1,
            title: "Study Buddy AI",
            category: "education",
            description: "Intelligent learning assistant with AI-powered features including content summarization, quiz generation, and adaptive learning recommendations.",
            tech: ["OpenAI GPT", "React", "Node.js", "PostgreSQL"],
            features: [
                "Real-time content summarization",
                "Adaptive quiz generation",
                "Personalized learning paths",
                "Multi-modal input support"
            ],
            challenges: [
                "API cost optimization",
                "Real-time response generation",
                "User personalization"
            ],
            solutions: [
                "Multi-API fallback strategy",
                "Caching implementation",
                "User behavior tracking"
            ],
            liveLink: "https://study-buddy-ai-verse.lovable.app/",
            githubLink: "#",
            image: "study-buddy.png"
        },
        {
            id: 2,
            title: "Smart Train Delay Prediction System",
            category: "transportation",
            description: "AI-powered real-time train delay prediction system with alternative routing suggestions.",
            tech: ["Python", "Machine Learning", "React Native", "Real-time APIs"],
            features: [
                "85% delay prediction accuracy",
                "Alternative transportation options",
                "Live map with train animation",
                "Multi-station support"
            ],
            challenges: [
                "Real-time data processing",
                "Multiple API integrations",
                "Accuracy improvement"
            ],
            solutions: [
                "No-code AI tools integration",
                "Efficient data pipeline",
                "Continuous model training"
            ],
            liveLink: "https://study-https://www.figma.com/make/Ru2dNLU0y6TamcPdWH4sQr/Train-Delay-Prediction-System?p=f&t=n2ZyiEVFVdwbsR3O-0buddy-ai-verse.lovable.app/",
            githubLink: "https://github.com/Xolelwa09/Traindelaypredictionsystem",
            image: "train-system.png"
        },
        {
            id: 3,
            title: "Bias Audit Tool",
            category: "ethics",
            description: "Comprehensive bias detection and mitigation tool for machine learning models.",
            tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
            features: [
                "Gender bias detection",
                "67% bias reduction achieved",
                "Model fairness metrics",
                "Transparent reporting"
            ],
            challenges: [
                "Identifying hidden biases",
                "Minimizing accuracy impact",
                "Ethical compliance"
            ],
            solutions: [
                "Post-processing adjustments",
                "Pre-processing data balancing",
                "Explainable AI techniques"
            ],
            liveLink: "#",
            githubLink: "#",
            image: "bias-audit.png"
        },
        {
            id: 4,
            title: "SentiFlow",
            category: "productivity",
            description: "Real-time collaboration platform with live updates, secure access, and offline capabilities.",
            tech: ["Firebase", "React", "JavaScript", "Cloud Functions"],
            features: [
                "Live team collaboration",
                "Automatic synchronization",
                "Offline work capability",
                "Role-based permissions"
            ],
            challenges: [
                "Conflict resolution",
                "Data security",
                "Performance optimization"
            ],
            solutions: [
                "Real-time sync technology",
                "Enterprise-grade encryption",
                "Smart caching system"
            ],
            liveLink: "#",
            githubLink: "#",
            image: "sentiflow.png"
        },
        {
            id: 5,
            title: "AI Educational Chatbot",
            category: "education",
            description: "Interactive chatbot for AI education with conversational flows about NLP and AI ethics.",
            tech: ["Microsoft Copilot Studio", "No-code AI", "Chatbot"],
            features: [
                "15+ Q&A pairs",
                "Multimedia integration",
                "Educational content flow",
                "Interactive quizzes"
            ],
            challenges: [
                "Natural conversation flow",
                "Educational content accuracy",
                "User engagement"
            ],
            solutions: [
                "Structured conversation design",
                "Expert-verified content",
                "Interactive elements"
            ],
            liveLink: "https://copilotstudio.microsoft.com/...",
            githubLink: "#",
            image: "chatbot.png"
        },
        {
            id: 6,
            title: "Writ-AI Creative Assistant",
            category: "creative",
            description: "AI-powered creative writing tool with genre-specific templates and optimization features.",
            tech: ["React TypeScript", "DevvAI API", "Firebase", "Tailwind CSS"],
            features: [
                "Genre-specific templates",
                "Performance optimization",
                "Rate-limit handling",
                "Safety compliance"
            ],
            challenges: [
                "Creative output quality",
                "API rate limits",
                "Content safety"
            ],
            solutions: [
                "Advanced prompt engineering",
                "Token optimization",
                "Safety filters"
            ],
            liveLink: "#",
            githubLink: "#",
            image: "writ-ai.png"
        },
        {
            id: 7,
            title: "EasyCV Resume Builder",
            category: "productivity",
            description: "Browser-based resume builder with offline functionality and multiple templates.",
            tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
            features: [
                "Offline functionality",
                "Multiple templates",
                "PDF export",
                "Auto-save feature"
            ],
            challenges: [
                "Browser compatibility",
                "PDF generation",
                "User data persistence"
            ],
            solutions: [
                "Progressive enhancement",
                "Client-side PDF generation",
                "Local storage optimization"
            ],
            liveLink: "https://www.figma.com/make/Ru2dNLU0y6TamcPdWH4sQr/Train-Delay-Prediction-System?t=3Z3Wvyf6uPkrfDZL-1",
            githubLink: "https://github.com/Xolelwa09/Easycv",
            image: "easycv.png"
        }
    ];

    // ===== DOM ELEMENTS =====
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksAll = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');
    const currentYear = document.getElementById('currentYear');
    const projectsGrid = document.getElementById('projectsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectModal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');
    const contactForm = document.getElementById('contactForm');
    const skillBars = document.querySelectorAll('.skill-progress');

    // ===== INITIALIZATION =====
    initPortfolio();

    // ===== CORE FUNCTIONS =====
    function initPortfolio() {
        // Set current year
        currentYear.textContent = new Date().getFullYear();
        
        // Initialize navigation
        initNavigation();
        
        // Initialize projects
        renderProjects();
        initProjectFiltering();
        
        // Initialize skills animation
        initSkillsAnimation();
        
        // Initialize contact form
        initContactForm();
        
        // Initialize modal
        initModal();
        
        // Initialize back to top
        initBackToTop();
        
        // Initialize scroll animations
        initScrollAnimations();
        
        // Add fade-in animation to sections
        animateSections();
    }

    // ===== NAVIGATION =====
    function initNavigation() {
        if (!menuToggle || !navLinks) return;
        
        // Mobile menu toggle
        menuToggle.addEventListener('click', toggleMobileMenu);
        
        // Close mobile menu when clicking a link
        navLinksAll.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Update active nav link on scroll
        window.addEventListener('scroll', updateActiveNavLink);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', smoothScroll);
        });
    }

    function toggleMobileMenu() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    }

    function closeMobileMenu() {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('#navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            closeMobileMenu();
        }
    }

    // ===== PROJECTS =====
    function renderProjects(filter = 'all') {
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projectsData 
            : projectsData.filter(project => project.category === filter);
        
        filteredProjects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);
        
        const categoryNames = {
            'education': 'Education',
            'transportation': 'Transportation',
            'ethics': 'Ethics',
            'productivity': 'Productivity',
            'creative': 'Creative'
        };
        
        card.innerHTML = `
            <div class="project-image">
                <i class="fas fa-${getProjectIcon(project.category)}"></i>
            </div>
            <div class="project-content">
                <span class="project-category">${categoryNames[project.category]}</span>
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="#" class="project-link project-demo" data-id="${project.id}">View Details</a>
                    ${project.liveLink !== '#' ? `<a href="${project.liveLink}" class="project-link project-demo" target="_blank">Live Demo</a>` : ''}
                </div>
            </div>
        `;
        
        // Add click event for view details
        card.querySelector('.project-link[data-id]').addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal(project.id);
        });
        
        return card;
    }

    function getProjectIcon(category) {
        const icons = {
            'education': 'graduation-cap',
            'transportation': 'train',
            'ethics': 'balance-scale',
            'productivity': 'tasks',
            'creative': 'paint-brush'
        };
        return icons[category] || 'project-diagram';
    }

    function initProjectFiltering() {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects
                const filter = button.getAttribute('data-filter');
                renderProjects(filter);
            });
        });
    }

    // ===== MODAL =====
    function initModal() {
        if (!projectModal || !closeModal) return;
        
        closeModal.addEventListener('click', () => {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;
        
        const categoryNames = {
            'education': 'Education',
            'transportation': 'Transportation',
            'ethics': 'Ethics',
            'productivity': 'Productivity',
            'creative': 'Creative'
        };
        
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${project.title}</h2>
                <span class="project-category">${categoryNames[project.category]}</span>
            </div>
            
            <div style="background: linear-gradient(45deg, var(--primary-color), var(--success-color)); height: 200px; border-radius: 10px; margin: 20px 0; display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-${getProjectIcon(project.category)}" style="font-size: 4rem; color: white;"></i>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h3>Project Overview</h3>
                <p>${project.description}</p>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h3>Technologies Used</h3>
                <div class="project-tech" style="display: flex; flex-wrap: wrap; gap: 10px;">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                <div>
                    <h3>Key Features</h3>
                    <ul style="list-style: none; padding: 0;">
                        ${project.features.map(feature => `
                            <li style="padding: 8px 0; border-bottom: 1px solid var(--light-color); display: flex; align-items: flex-start;">
                                <i class="fas fa-check" style="color: var(--success-color); margin-right: 10px; margin-top: 5px;"></i>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div>
                    <h3>Challenges & Solutions</h3>
                    <div style="background: var(--light-color); padding: 20px; border-radius: var(--border-radius);">
                        <h4 style="margin-bottom: 10px; color: var(--secondary-color);">Challenges:</h4>
                        <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
                            ${project.challenges.map(challenge => `
                                <li style="padding: 5px 0;">
                                    <i class="fas fa-exclamation-triangle" style="color: var(--warning-color); margin-right: 8px;"></i>
                                    ${challenge}
                                </li>
                            `).join('')}
                        </ul>
                        
                        <h4 style="margin-bottom: 10px; color: var(--secondary-color);">Solutions:</h4>
                        <ul style="list-style: none; padding: 0;">
                            ${project.solutions.map(solution => `
                                <li style="padding: 5px 0;">
                                    <i class="fas fa-check-circle" style="color: var(--success-color); margin-right: 8px;"></i>
                                    ${solution}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div style="display: flex; gap: 15px; margin-top: 30px;">
                ${project.liveLink !== '#' ? `
                    <a href="${project.liveLink}" class="btn btn-primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
                ${project.githubLink !== '#' ? `
                    <a href="${project.githubLink}" class="btn btn-outline" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>
                ` : ''}
            </div>
        `;
        
        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // ===== SKILLS ANIMATION =====
    function initSkillsAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillLevel = entry.target;
                    const level = skillLevel.getAttribute('data-level');
                    
                    // Animate the progress bar
                    setTimeout(() => {
                        skillLevel.style.width = `${level}%`;
                    }, 300);
                    
                    observer.unobserve(skillLevel);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
    }

    // ===== CONTACT FORM =====
    function initContactForm() {
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Real-time validation
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }

    function validateField(e) {
        const field = e.target;
        const errorElement = document.getElementById(`${field.id}Error`);
        
        if (!field.value.trim()) {
            showFieldError(field, errorElement, 'This field is required');
            return false;
        }
        
        if (field.type === 'email' && !isValidEmail(field.value)) {
            showFieldError(field, errorElement, 'Please enter a valid email');
            return false;
        }
        
        if (field.id === 'message' && field.value.length < 20) {
            showFieldError(field, errorElement, 'Message must be at least 20 characters');
            return false;
        }
        
        clearFieldError(field, errorElement);
        return true;
    }

    function showFieldError(field, errorElement, message) {
        field.classList.add('invalid');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function clearFieldError(e) {
        const field = e.target || e;
        const errorElement = document.getElementById(`${field.id}Error`);
        
        field.classList.remove('invalid');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const subjectField = document.getElementById('subject');
        const messageField = document.getElementById('message');
        
        const isNameValid = validateField({ target: nameField });
        const isEmailValid = validateField({ target: emailField });
        const isSubjectValid = validateField({ target: subjectField });
        const isMessageValid = validateField({ target: messageField });
        
        if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
            showFormStatus('error', 'Please fix the errors above');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call (in real app, this would be fetch to your backend)
            await simulateFormSubmission();
            
            showFormStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
            contactForm.reset();
            
            // Clear all field errors
            const errorElements = contactForm.querySelectorAll('.error-message');
            errorElements.forEach(el => {
                el.textContent = '';
                el.style.display = 'none';
            });
            
            const formInputs = contactForm.querySelectorAll('input, textarea');
            formInputs.forEach(input => input.classList.remove('invalid'));
            
        } catch (error) {
            showFormStatus('error', 'Something went wrong. Please try again later.');
        } finally {
            // Reset button state
            btnText.style.display = 'inline-block';
            btnLoader.style.display = 'none';
            submitBtn.disabled = false;
        }
    }

    function simulateFormSubmission() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: 'Form submitted successfully'
                });
            }, 2000);
        });
    }

    function showFormStatus(type, message) {
        const formStatus = document.getElementById('formStatus');
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';
        
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }

    // ===== BACK TO TOP =====
    function initBackToTop() {
        if (!backToTop) return;
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== SCROLL ANIMATIONS =====
    function initScrollAnimations() {
        // Add scroll-triggered animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    function animateSections() {
        // Add initial animation class
        document.body.classList.add('loaded');
        
        // Animate sections with delay
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // ===== PERFORMANCE OPTIMIZATIONS =====
    // Debounce scroll event
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Handle scroll events efficiently
        }, 100);
    });

    // ===== ERROR HANDLING =====
    window.addEventListener('error', (e) => {
        console.error('Error occurred:', e.error);
    });

    // ===== WINDOW LOAD =====
    window.addEventListener('load', () => {
        // Preload images
        preloadImages();
        
        // Remove initial loading state
        setTimeout(() => {
            document.body.classList.add('fully-loaded');
        }, 500);
    });

    function preloadImages() {
        // In a real application, you would preload your project images
        const images = [
            'assets/images/study-buddy.png',
            'assets/images/train-system.png',
            'assets/images/bias-audit.png',
            'assets/images/sentiflow.png',
            'assets/images/chatbot.png',
            'assets/images/writ-ai.png',
            'assets/images/easycv.png'
        ];
        
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
});