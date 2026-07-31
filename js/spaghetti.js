
// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const darkIcon = document.getElementById('dark-icon');
const lightIcon = document.getElementById('light-icon');

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';

// Set initial theme
if (currentTheme === 'light') {
  htmlElement.classList.remove('dark');
  darkIcon.classList.remove('hidden');
  lightIcon.classList.add('hidden');
} else {
  htmlElement.classList.add('dark');
  darkIcon.classList.add('hidden');
  lightIcon.classList.remove('hidden');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    // Switch to light mode
    htmlElement.classList.remove('dark');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
    localStorage.setItem('theme', 'light');
  } else {
    // Switch to dark mode
    htmlElement.classList.add('dark');
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
    localStorage.setItem('theme', 'dark');
  }
});

// Particle Animation
function createParticles() {
  const particlesContainer = document.getElementById('particles-js');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 3 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.background = ['#00f0ff', '#ff00aa', '#00ff88'][Math.floor(Math.random() * 3)];
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animation = 'float 6s ease-in-out infinite';
    
    particlesContainer.appendChild(particle);
  }
}

createParticles();

// Initialize Tilt.js for cards
if (typeof $ !== 'undefined' && $.fn.tilt) {
  $('.tilt-effect').tilt({
    maxTilt: 10,
    perspective: 1000,
    glare: true,
    maxGlare: 0.3,
    speed: 400
  });
}

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
  AOS.init();
}