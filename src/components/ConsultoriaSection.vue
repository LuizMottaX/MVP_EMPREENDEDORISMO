<template>
  <section id="consultoria" aria-labelledby="consultoria-title">
    <div class="container">
      <header class="section-header reveal">
        <div class="tag" style="background:rgba(123,97,255,0.1);border-color:rgba(123,97,255,0.3);color:var(--clr-accent);">🔍 Serviço Exclusivo</div>
        <h2 class="section-title" id="consultoria-title">
          Compre equipamentos usados<br/>
          <span style="background:linear-gradient(90deg,var(--clr-accent),var(--clr-primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">com total segurança</span>
        </h2>
        <p class="section-subtitle">Antes de fechar negócio, nossa equipe inspeciona o equipamento, realiza a manutenção preventiva e emite uma garantia de funcionamento. Você compra sem surpresas.</p>
      </header>
      <div class="consultoria-grid">
        <div class="consultoria-card reveal reveal-delay-1" id="consultoria-analise">
          <div class="consultoria-icon" aria-hidden="true"><span>🔬</span></div>
          <h3>Análise Técnica Completa</h3>
          <p>Inspecionamos todos os componentes: placa-mãe, processador, memória RAM, armazenamento, bateria, cooler e periféricos. Um laudo técnico detalhado é emitido com o resultado.</p>
          <ul class="consultoria-list">
            <li>✓ Teste de stress de hardware</li>
            <li>✓ Verificação de setores defeituosos no HD/SSD</li>
            <li>✓ Análise de temperatura e desempenho</li>
            <li>✓ Laudo técnico por escrito</li>
          </ul>
        </div>
        <div class="consultoria-card consultoria-card--center reveal reveal-delay-2" id="consultoria-manutencao">
          <div class="consultoria-icon" aria-hidden="true"><span>🔧</span></div>
          <h3>Manutenção Preventiva Inclusa</h3>
          <p>Após a análise, realizamos a limpeza interna completa, troca de pasta térmica, atualização de drivers e do sistema operacional, deixando o equipamento como novo.</p>
          <ul class="consultoria-list">
            <li>✓ Limpeza interna e cooler</li>
            <li>✓ Troca de pasta térmica</li>
            <li>✓ Formatação e instalação de SO</li>
            <li>✓ Drivers e atualizações em dia</li>
          </ul>
        </div>
        <div class="consultoria-card reveal reveal-delay-3" id="consultoria-garantia">
          <div class="consultoria-icon" aria-hidden="true"><span>🏅</span></div>
          <h3>Garantia de Manutenção</h3>
          <p>Emitimos um certificado de garantia para o equipamento avaliado. Se apresentar defeito nos componentes analisados dentro do prazo, cobrimos o conserto sem custo adicional.</p>
          <ul class="consultoria-list">
            <li>✓ Garantia de 90 dias</li>
            <li>✓ Certificado digital de procedência</li>
            <li>✓ Suporte prioritário incluso</li>
            <li>✓ Válido para compras de terceiros</li>
          </ul>
        </div>
      </div>
      <div class="consultoria-cta reveal">
        <p>Vai comprar um computador ou notebook usado? <strong>Fale com a gente antes!</strong></p>
        <a href="#contato" class="btn btn-primary" id="consultoria-cta-btn">
          Agendar Consultoria
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
