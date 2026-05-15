<template>
  <section id="vistoria" aria-labelledby="vistoria-title">
    <div class="container">
      <header class="section-header reveal">
        <div class="tag" style="background:rgba(245,158,11,0.1);border-color:rgba(245,158,11,0.3);color:var(--clr-amber);">📋 Novo Serviço</div>
        <h2 class="section-title" id="vistoria-title">
          Contrato de Vistoria e<br/>
          <span style="background:linear-gradient(90deg,var(--clr-amber),var(--clr-amber-dim));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Manutenção de Usados</span>
        </h2>
        <p class="section-subtitle">Vai vender ou comprar um equipamento usado de terceiros? Nós fazemos o intermédio com total segurança, transparência e confiabilidade para ambas as partes.</p>
      </header>
      <div class="vistoria-grid">
        <div class="vistoria-card reveal reveal-delay-1" id="vistoria-inspecao">
          <div class="vistoria-icon" aria-hidden="true"><span>🔎</span></div>
          <h3>Vistoria Técnica Completa</h3>
          <p>Realizamos uma inspeção detalhada do equipamento usado, verificando o estado real de todos os componentes e funcionalidades, garantindo que o produto esteja em conformidade com o que foi anunciado pelo vendedor.</p>
          <ul class="vistoria-list">
            <li>✓ Inspeção física e funcional completa</li>
            <li>✓ Teste de todos os componentes</li>
            <li>✓ Relatório detalhado do estado atual</li>
            <li>✓ Registro fotográfico do equipamento</li>
          </ul>
        </div>
        <div class="vistoria-card vistoria-card--center reveal reveal-delay-2" id="vistoria-contrato">
          <div class="vistoria-icon" aria-hidden="true"><span>📝</span></div>
          <h3>Contrato de Intermediação</h3>
          <p>Emitimos um contrato formal para vendedor e comprador assinarem em comum acordo, documentando as condições do equipamento e os termos da negociação. Cobramos apenas uma pequena taxa pela emissão do documento.</p>
          <ul class="vistoria-list">
            <li>✓ Contrato para ambas as partes</li>
            <li>✓ Termos claros e acordados</li>
            <li>✓ Taxa acessível de emissão</li>
            <li>✓ Validade jurídica documentada</li>
          </ul>
        </div>
        <div class="vistoria-card reveal reveal-delay-3" id="vistoria-garantia">
          <div class="vistoria-icon" aria-hidden="true"><span>🤝</span></div>
          <h3>Garantia de Transparência</h3>
          <p>Atuamos como terceiro de confiança no ato da venda, garantindo que ambos, vendedor e comprador, tenham segurança e um registro que comprove o estado e os meios acordados na negociação do produto.</p>
          <ul class="vistoria-list">
            <li>✓ Intermediação imparcial e segura</li>
            <li>✓ Manutenção sob solicitação</li>
            <li>✓ Comprovação do estado do produto</li>
            <li>✓ Confiabilidade para ambas as partes</li>
          </ul>
        </div>
      </div>
      <div class="vistoria-cta reveal">
        <p>Vai negociar um equipamento usado? <strong>Garanta segurança para ambas as partes!</strong></p>
        <a href="#contato" class="btn btn-primary" style="background:var(--clr-amber);color:#000;" id="vistoria-cta-btn">
          Solicitar Vistoria
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()
</script>
