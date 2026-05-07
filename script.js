// =============================================
// NAVBAR SCROLL EFFECT
// =============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// =============================================
// MOBILE MENU TOGGLE
// =============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// =============================================
// SCROLL REVEAL ANIMATION
// =============================================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// =============================================
// ANIMATED COUNTER
// =============================================
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const update = () => {
    start += step;
    if (start < target) {
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
      requestAnimationFrame(update);
    } else {
      el.textContent = target + (el.dataset.suffix || '');
    }
  };
  update();
}

const counterEls = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCounter(el, parseInt(el.dataset.counter), 1800);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counterEls.forEach(el => counterObserver.observe(el));

// =============================================
// ACTIVE NAV LINK (SCROLL SPY)
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--clr-primary)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => spyObserver.observe(s));

// =============================================
// CONTACT FORM HANDLER
// =============================================
const form = document.getElementById('contact-form');
const successMsg = document.querySelector('.success-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('.form-submit');
  const originalText = btn.innerHTML;

  // Validate
  const name    = form.querySelector('#name').value.trim();
  const email   = form.querySelector('#email').value.trim();
  const message = form.querySelector('#message').value.trim();

  if (!name || !email || !message) {
    shakeInvalid(form);
    return;
  }

  // Simulate submission
  btn.innerHTML = '<span>Enviando...</span>';
  btn.disabled = true;

  setTimeout(() => {
    form.style.opacity = '0';
    form.style.transition = 'opacity 0.4s ease';
    setTimeout(() => {
      form.style.display = 'none';
      successMsg.style.display = 'block';
      successMsg.innerHTML = `
        <div style="font-size:2.5rem;margin-bottom:12px;">✅</div>
        <strong>Mensagem enviada!</strong><br>
        <span style="color:var(--clr-muted);font-weight:400;font-size:0.9rem;">
          Em breve entraremos em contato com você.
        </span>
      `;
    }, 400);
  }, 1400);
});

function shakeInvalid(el) {
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'shake 0.4s ease';
}

// Add shake keyframes dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20%      { transform: translateX(-8px); }
    40%      { transform: translateX(8px); }
    60%      { transform: translateX(-6px); }
    80%      { transform: translateX(6px); }
  }
`;
document.head.appendChild(shakeStyle);

// =============================================
// HERO PARTICLE DOTS (SUBTLE BACKGROUND EFFECT)
// =============================================
(function createParticles() {
  const hero = document.getElementById('hero');
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position:absolute;inset:0;pointer-events:none;z-index:0;opacity:0.4;
  `;
  hero.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  function Particle() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.r = Math.random() * 1.5 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.6 + 0.2;
  }

  function init() {
    particles = Array.from({ length: 90 }, () => new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,210,255,${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();
  window.addEventListener('resize', () => { resize(); init(); });
})();
