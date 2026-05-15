<template>
  <footer role="contentinfo">
    <div class="container footer-inner">
      <p class="footer-copy">
        &copy; {{ currentYear }} É o brique. Todos os direitos reservados.
      </p>
      <ul class="footer-links" role="list">
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#vistoria">Vistoria</a></li>
        <li><a href="#processo">Como Funciona</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
