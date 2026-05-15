<template>
  <nav id="navbar" :class="{ scrolled: isScrolled }" role="navigation" aria-label="Menu principal">
    <div class="container nav-inner">
      <a href="#hero" class="nav-logo" id="logo">
        <div class="logo-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6v2H8v2h8v-2h-2v-2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 12H4V6h16v10z"/>
          </svg>
        </div>
        É o <span style="color:var(--clr-primary)">brique</span>
      </a>
      <ul class="nav-links" role="list">
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#consultoria">Consultoria</a></li>
        <li><a href="#vistoria">Vistoria</a></li>
        <li><a href="#processo">Como Funciona</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <div class="nav-cta">
        <a href="#contato" class="btn btn-primary" id="nav-cta-btn">Solicitar Orçamento</a>
      </div>
      <button class="hamburger" :class="{ open: menuOpen }" id="hamburger" aria-label="Abrir menu" :aria-expanded="menuOpen" @click="toggleMenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div id="mobile-menu" :class="{ open: menuOpen }" role="dialog" aria-label="Menu mobile">
    <a href="#servicos" @click="closeMenu">Serviços</a>
    <a href="#consultoria" @click="closeMenu">Consultoria</a>
    <a href="#vistoria" @click="closeMenu">Vistoria</a>
    <a href="#processo" @click="closeMenu">Como Funciona</a>
    <a href="#contato" @click="closeMenu">Contato</a>
    <a href="#contato" class="btn btn-primary" style="margin-top:16px" @click="closeMenu">Solicitar Orçamento</a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
