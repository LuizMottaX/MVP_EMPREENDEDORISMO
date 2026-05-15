<template>
  <section id="hero" aria-label="Seção principal">
    <div class="hero-bg" :style="{ backgroundImage: `url(${heroBg})` }" role="img" aria-label="Fundo decorativo"></div>
    <div class="hero-glow" aria-hidden="true"></div>
    <canvas ref="canvasRef" style="position:absolute;inset:0;pointer-events:none;z-index:0;opacity:0.4;"></canvas>
    <div class="container">
      <div class="hero-content">
        <div class="tag" aria-label="Slogan"><span>⚡</span> Especialistas em Tecnologia</div>
        <h1>Seu equipamento<br/><span>de volta ao máximo</span><br/>desempenho.</h1>
        <p>Manutenção profissional, vistoria técnica e intermediação segura na compra e venda de equipamentos usados. Diagnóstico rápido, peças originais e garantia em todos os serviços.</p>
        <div class="hero-actions">
          <a href="#contato" class="btn btn-primary" id="hero-cta-btn">
            Solicitar Orçamento Grátis
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
          </a>
          <a href="#servicos" class="btn btn-outline" id="hero-services-btn">Ver Serviços</a>
        </div>
        <div class="hero-stats" role="list" aria-label="Números da empresa">
          <div class="stat-item" role="listitem">
            <strong><span ref="counter1">0+</span></strong>
            <span>Equipamentos Reparados</span>
          </div>
          <div class="stat-item" role="listitem">
            <strong><span ref="counter2">0%</span></strong>
            <span>Clientes Satisfeitos</span>
          </div>
          <div class="stat-item" role="listitem">
            <strong><span ref="counter3">0</span></strong>
            <span>De Experiência</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import heroBg from '@/assets/hero_bg.png'

const canvasRef = ref(null)
const counter1 = ref(null)
const counter2 = ref(null)
const counter3 = ref(null)
let animId = null

function animateCounter(el, target, suffix, duration = 1800) {
  let start = 0
  const step = target / (duration / 16)
  const update = () => {
    start += step
    if (start < target) {
      el.textContent = Math.floor(start) + suffix
      requestAnimationFrame(update)
    } else {
      el.textContent = target + suffix
    }
  }
  update()
}

onMounted(() => {
  // Counters
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        if (counter1.value) animateCounter(counter1.value, 1200, '+')
        if (counter2.value) animateCounter(counter2.value, 98, '%')
        if (counter3.value) animateCounter(counter3.value, 8, ' anos')
        obs.disconnect()
      }
    })
  }, { threshold: 0.5 })
  if (counter1.value) obs.observe(counter1.value)

  // Particles
  const canvas = canvasRef.value
  if (!canvas) return
  const hero = canvas.parentElement
  const ctx = canvas.getContext('2d')
  let W, H, particles = []

  function resize() { W = canvas.width = hero.offsetWidth; H = canvas.height = hero.offsetHeight }
  function Particle() {
    this.x = Math.random() * W; this.y = Math.random() * H
    this.r = Math.random() * 1.5 + 0.3
    this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3
    this.alpha = Math.random() * 0.6 + 0.2
  }
  function init() { particles = Array.from({ length: 90 }, () => new Particle()) }
  function draw() {
    ctx.clearRect(0, 0, W, H)
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0,210,255,${p.alpha})`; ctx.fill()
    })
    animId = requestAnimationFrame(draw)
  }
  resize(); init(); draw()
  window.addEventListener('resize', () => { resize(); init() })
})

onUnmounted(() => { if (animId) cancelAnimationFrame(animId) })
</script>
