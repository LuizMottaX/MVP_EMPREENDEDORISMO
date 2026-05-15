<template>
  <section id="servicos" aria-labelledby="servicos-title">
    <div class="container">
      <header class="section-header reveal">
        <div class="tag">O que oferecemos</div>
        <h2 class="section-title" id="servicos-title">Serviços especializados<br/>para cada necessidade</h2>
        <p class="section-subtitle">Do diagnóstico à entrega, cobrimos todas as etapas da manutenção com precisão técnica e agilidade.</p>
      </header>
      <div class="services-grid">
        <article class="service-card reveal reveal-delay-1" id="service-computers">
          <div class="service-icon" aria-hidden="true">🖥️</div>
          <h3>Computadores &amp; Desktops</h3>
          <p>Limpeza interna, troca de componentes, upgrade de hardware e formatação com reinstalação completa do sistema operacional.</p>
        </article>
        <article class="service-card reveal reveal-delay-2" id="service-notebooks">
          <div class="service-icon" aria-hidden="true">💻</div>
          <h3>Notebooks &amp; Ultrabooks</h3>
          <p>Reparo de telas, teclados, baterias, coolers e placas-mãe. Diagnóstico completo sem custo adicional.</p>
        </article>
        <article class="service-card reveal reveal-delay-3" id="service-printers">
          <div class="service-icon" aria-hidden="true">🖨️</div>
          <h3>Impressoras &amp; Multifuncionais</h3>
          <p>Manutenção preventiva e corretiva, troca de peças desgastadas, calibração e limpeza de cabeçotes.</p>
        </article>
        <article class="service-card reveal reveal-delay-4" id="service-network">
          <div class="service-icon" aria-hidden="true">🔌</div>
          <h3>Redes &amp; Infraestrutura</h3>
          <p>Instalação e configuração de redes cabeadas e Wi-Fi, configuração de roteadores e switches corporativos.</p>
        </article>
        <article class="service-card reveal reveal-delay-1" id="service-recovery">
          <div class="service-icon" aria-hidden="true">💾</div>
          <h3>Recuperação de Dados</h3>
          <p>Recuperação de arquivos de HDs, SSDs e pendrives danificados. Alto índice de sucesso mesmo em casos críticos.</p>
        </article>
        <article class="service-card reveal reveal-delay-2" id="service-support">
          <div class="service-icon" aria-hidden="true">🛡️</div>
          <h3>Suporte Técnico Remoto</h3>
          <p>Atendimento imediato via acesso remoto seguro para resolver problemas de software, vírus e configurações.</p>
        </article>
        <article class="service-card service-card--highlight reveal reveal-delay-3" id="service-consultoria">
          <div class="service-icon service-icon--accent" aria-hidden="true">🔍</div>
          <div class="service-badge">Destaque</div>
          <h3>Consultoria para Compra de Usados</h3>
          <p>Avaliamos o equipamento antes da sua compra: análise técnica completa, manutenção preventiva inclusa e garantia de funcionamento.</p>
          <a href="#consultoria" class="service-card-link">Saiba mais →</a>
        </article>
        <article class="service-card service-card--amber reveal reveal-delay-4" id="service-vistoria">
          <div class="service-icon service-icon--amber" aria-hidden="true">📋</div>
          <div class="service-badge service-badge--amber">Novo Serviço</div>
          <h3>Contrato de Vistoria</h3>
          <p>Intermediação segura na venda de equipamentos usados com vistoria técnica e contrato para ambas as partes.</p>
          <a href="#vistoria" class="service-card-link service-card-link--amber">Saiba mais →</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()
</script>
