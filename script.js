// Project Details
const projectDetails = [
    {
        title: "LAN Design Assignment",
        description: "A comprehensive local area network design project demonstrating network topology and connectivity.",
        details: "<strong>Technologies:</strong> Network Architecture, Network Design Tools<br><strong>Key Features:</strong> Network topology design, Device configuration, Connectivity planning"
    },
    {
        title: "FreshMart Database ER Diagram",
        description: "Relational database design for an e-commerce platform with detailed entity-relationship diagrams.",
        details: "<strong>Technologies:</strong> SQL, Database Design, ER Diagrams<br><strong>Key Features:</strong> Entity relationships, Schema design, Data integrity"
    },
    {
        title: "Computer Hardware Assembling",
        description: "Hands-on experience in building, troubleshooting, and optimizing computer systems.",
        details: "<strong>Technologies:</strong> Hardware components, System optimization<br><strong>Key Features:</strong> System assembly, Troubleshooting, Performance tuning"
    }
];

// DOM Elements
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close');
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
const contactForm = document.getElementById('contactForm');
const projectCards = document.querySelectorAll('.project-card');

// Modal Functions
function openModal(index) {
    const project = projectDetails[index];
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalDetails').innerHTML = project.details;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Project Card Event Listeners
projectCards.forEach((card, index) => {
    const viewBtn = card.querySelector('.view-btn');
    viewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(index);
    });
    
    card.addEventListener('click', () => {
        openModal(index);
    });
});

// Close Modal
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close Modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.textContent = navbar.classList.contains('active') ? '✕' : '☰';
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.textContent = '☰';
    });
});

// Smooth Scroll Behavior for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Contact Form Handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Show success message
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Message Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #27ae60, #229954)';
    
    // Reset after 2 seconds
    setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.style.background = 'linear-gradient(135deg, var(--secondary-color), #2980b9)';
    }, 2000);
    
    console.log('Form submitted:', { name, email, message });
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: var(--secondary-color);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseover', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
    scrollTopBtn.style.background = 'var(--accent-color)';
});

scrollTopBtn.addEventListener('mouseout', () => {
    scrollTopBtn.style.transform = 'scale(1)';
    scrollTopBtn.style.background = 'var(--secondary-color)';
});

// Welcome message
console.log('%c Welcome to my portfolio! 🚀', 'color: #3498db; font-size: 16px; font-weight: bold;');
console.log('%c Made with ❤️ by Ainerugaba Joseph Clancy', 'color: #e74c3c; font-size: 14px;');
