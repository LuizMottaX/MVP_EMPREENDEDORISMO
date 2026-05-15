<template>
  <section id="processo" aria-labelledby="processo-title">
    <div class="container">
      <header class="section-header reveal">
        <div class="tag">Simples e transparente</div>
        <h2 class="section-title" id="processo-title">Como funciona o<br/>nosso atendimento</h2>
        <p class="section-subtitle">Um processo claro e eficiente, do primeiro contato até a entrega do seu equipamento ou emissão do contrato.</p>
      </header>
      <div class="process-steps" role="list">
        <div class="step reveal reveal-delay-1" id="step-contact" role="listitem">
          <div class="step-num" aria-hidden="true">1</div>
          <h3>Contato Inicial</h3>
          <p>Você nos chama pelo WhatsApp, telefone ou preenchendo o formulário. Respondemos em minutos.</p>
        </div>
        <div class="step reveal reveal-delay-2" id="step-diagnosis" role="listitem">
          <div class="step-num" aria-hidden="true">2</div>
          <h3>Avaliação / Vistoria</h3>
          <p>Realizamos o diagnóstico do defeito ou a vistoria técnica completa para compra/venda de usados.</p>
        </div>
        <div class="step reveal reveal-delay-3" id="step-budget" role="listitem">
          <div class="step-num" aria-hidden="true">3</div>
          <h3>Orçamento / Contrato</h3>
          <p>Enviamos o orçamento do reparo ou emitimos o contrato de intermediação para assinatura.</p>
        </div>
        <div class="step reveal reveal-delay-4" id="step-repair" role="listitem">
          <div class="step-num" aria-hidden="true">4</div>
          <h3>Entrega</h3>
          <p>Executamos o serviço com qualidade e entregamos no prazo combinado, com garantia.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()
</script>
