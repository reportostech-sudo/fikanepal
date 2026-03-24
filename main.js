import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Compass Rotation Logic
const rotateCompass = () => {
  gsap.to('.compass-bg', {
    rotation: '+=360',
    duration: 60,
    repeat: -1,
    ease: 'none'
  });
};


// Hero Slider Logic
const initSlider = () => {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  const nextSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  };

  setInterval(nextSlide, 5000); // Change slide every 5 seconds
};


// Hero Animations
window.addEventListener('DOMContentLoaded', () => {
  rotateCompass();
  initSlider();
  const tl = gsap.timeline();


  
  tl.to('#hero-title', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'expo.out'
  })
  .to('#hero-subtitle', {
    opacity: 0.8,
    y: 0,
    duration: 1,
    ease: 'expo.out'
  }, '-=0.8')
  .to('.hero .btn', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'expo.out'
  }, '-=0.8');

  // Reveal Animations
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Staggered Roadmap
  gsap.from('.timeline-item', {
    opacity: 0,
    x: -30,
    stagger: 0.3,
    duration: 1.2,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 80%'
    }
  });

  gsap.from('.pillar-card', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1.5,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: '.pillars-grid',
      start: 'top 80%'
    }
  });

  // Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navWrapper = document.querySelector('.nav-links-wrapper');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navWrapper.classList.toggle('active');
      document.body.style.overflow = navWrapper.classList.contains('active') ? 'hidden' : '';
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navWrapper.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});
