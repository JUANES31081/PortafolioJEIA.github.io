// ====================================
//  DATA COSMOS — Animations & Effects
//  Juan Infante Portfolio
// ====================================

// ===== PARTICLES.JS CONFIG =====
function initParticles() {
  if (typeof particlesJS === 'undefined') return;
  particlesJS('particles-js', {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: ['#00D4FF', '#A855F7', '#FFFFFF'] },
      shape: { type: 'circle' },
      opacity: {
        value: 0.5, random: true,
        anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 2.5, random: true,
        anim: { enable: true, speed: 2, size_min: 0.5, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: '#00D4FF',
        opacity: 0.18,
        width: 1
      },
      move: {
        enable: true, speed: 1.2, direction: 'none',
        random: true, straight: false, out_mode: 'out', bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
}

// ===== GSAP SCROLL ANIMATIONS =====
function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Section headers
  gsap.utils.toArray('.section-header').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      }
    );
  });

  // Staggered skill categories
  gsap.utils.toArray('.skill-category').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 50, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
        delay: i * 0.1,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  // Project cards stagger
  gsap.utils.toArray('.project-item').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        delay: (i % 3) * 0.12,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      }
    );
  });

  // Contact cards
  gsap.utils.toArray('.contact-card').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        delay: i * 0.15,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  // About grid
  const aboutAvatar = document.querySelector('.about-avatar');
  const aboutContent = document.querySelector('.about-content');
  if (aboutAvatar) {
    gsap.fromTo(aboutAvatar,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: aboutAvatar, start: 'top 85%', once: true }
      }
    );
  }
  if (aboutContent) {
    gsap.fromTo(aboutContent,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: aboutContent, start: 'top 85%', once: true }
      }
    );
  }

  // Stat counters — read from data-target attribute
  gsap.utils.toArray('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.target, 10) || 0;
    let started = false;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        if (started) return;
        started = true;
        const duration = 1400;
        const startTime = performance.now();

        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // ease out quad
          const eased = 1 - Math.pow(1 - progress, 2);
          el.textContent = Math.floor(eased * target) + '+';
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      }
    });
  });
}

// ===== TYPEWRITER EFFECT =====
function initTypewriter() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const words = [
    'Data Scientist',
    'AI Engineer',
    'MLOps Practitioner',
    'GenAI Developer',
    'Systems Engineer'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let pause = false;

  function type() {
    if (pause) return;
    const word = words[wordIndex];

    if (isDeleting) {
      el.textContent = word.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = word.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 90;

    if (!isDeleting && charIndex === word.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 350;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 1400);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function () {
  initParticles();
  initScrollAnimations();
  initTypewriter();
});
