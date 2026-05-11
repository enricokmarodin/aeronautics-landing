/* ═══════════════════════════════════════════════
   AERONAUTICS — Main Script
   ═══════════════════════════════════════════════ */

// ── Steam Canvas ──────────────────────────────
const canvas = document.getElementById('steamCanvas');
const ctx    = canvas.getContext('2d');
let W, H;
const particles = [];

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);

class SteamParticle {
  constructor() { this.reset(); }
  reset() {
    this.x  = Math.random() * W;
    this.y  = H + 20;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = -(Math.random() * 0.5 + 0.2);
    this.r  = Math.random() * 60 + 20;
    this.a  = Math.random() * 0.06 + 0.01;
    this.da = -0.0003;
    this.dr = Math.random() * 0.2 + 0.05;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.r += this.dr;
    this.a += this.da;
    if (this.a <= 0 || this.y < -100) this.reset();
  }
  draw() {
    const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
    g.addColorStop(0,   `rgba(200,180,140,${this.a})`);
    g.addColorStop(1,   `rgba(200,180,140,0)`);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
  }
}

for (let i = 0; i < 30; i++) {
  const p = new SteamParticle();
  p.y = Math.random() * H;
  particles.push(p);
}

function animateSteam() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateSteam);
}
animateSteam();

// ── Navbar scroll style ───────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.borderBottomColor = window.scrollY > 40
    ? 'rgba(200,169,110,0.35)'
    : 'rgba(200,169,110,0.2)';
});

// ── Hamburger menu ────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? '' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '64px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'rgba(16,8,3,0.98)';
  navLinks.style.padding = '1rem 2rem 2rem';
  navLinks.style.borderBottom = '1px solid rgba(200,169,110,0.2)';
  if (open) {
    navLinks.style.display = 'none';
  }
});

// ── Stat counter ──────────────────────────────
const statNums = document.querySelectorAll('.stat-num');

function formatNum(n, target) {
  if (target >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  return Math.round(n).toLocaleString();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const dur    = 1800;
    const start  = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = formatNum(ease * target, target);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = formatNum(target, target);
    }
    requestAnimationFrame(tick);
    observer.unobserve(el);
  });
}, { threshold: 0.5 });

statNums.forEach(el => observer.observe(el));

// ── Scroll reveal ─────────────────────────────
const revealEls = document.querySelectorAll(
  '.feature-card, .gallery-item, .step, .log-entry, .dl-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${(i % 4) * 0.08}s, transform 0.5s ease ${(i % 4) * 0.08}s`;
  revealObserver.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {});
document.styleSheets[0] || '';

// Inject revealed style rule
const style = document.createElement('style');
style.textContent = '.revealed { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);

// ── Parallax gears on scroll ──────────────────
const gears = [
  { el: document.querySelector('.g-xl'),    factor: 0.15 },
  { el: document.querySelector('.g-lg'),    factor: -0.1 },
  { el: document.querySelector('.g-sm'),    factor: 0.2  },
  { el: document.querySelector('.g-md'),    factor: -0.12 },
];

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  gears.forEach(({ el, factor }) => {
    if (!el) return;
    el.style.transform = `translateY(${y * factor}px)`;
  });
}, { passive: true });

// ── Smooth active nav link ────────────────────
const sections = document.querySelectorAll('section[id], header[id]');
const links    = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(a => {
      a.style.color = '';
      if (a.getAttribute('href') === '#' + entry.target.id) {
        a.style.color = 'var(--amber-lt)';
      }
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));
