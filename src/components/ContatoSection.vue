<template>
  <section id="contato" aria-labelledby="contato-title">
    <div class="container">
      <div class="contact-layout">
        <div class="contact-info">
          <div class="tag reveal">Fale conosco</div>
          <h2 class="section-title reveal reveal-delay-1" id="contato-title">Pronto para resolver<br/>seu problema?</h2>
          <p class="section-subtitle reveal reveal-delay-2">
            Entre em contato agora e solicite um serviço ou agende uma vistoria. Nossa equipe responde em até 2 horas.
          </p>
          <div class="contact-details reveal reveal-delay-3" role="list">
            <div class="contact-item" id="contact-phone" role="listitem">
              <div class="ci-icon" aria-hidden="true">📞</div>
              <span>(11) 99999-0000</span>
            </div>
            <div class="contact-item" id="contact-whatsapp" role="listitem">
              <div class="ci-icon" aria-hidden="true">💬</div>
              <span>WhatsApp: (11) 99999-0000</span>
            </div>
            <div class="contact-item" id="contact-email" role="listitem">
              <div class="ci-icon" aria-hidden="true">✉️</div>
              <span>contato@eobrique.com.br</span>
            </div>
            <div class="contact-item" id="contact-hours" role="listitem">
              <div class="ci-icon" aria-hidden="true">🕐</div>
              <span>Seg–Sex: 08h–18h | Sáb: 09h–13h</span>
            </div>
          </div>
        </div>
        <div class="contact-form reveal reveal-delay-2">
          <form id="contact-form" @submit.prevent="handleSubmit" novalidate aria-label="Formulário de contato" ref="formRef" :style="{ opacity: formOpacity, display: formDisplay, transition: 'opacity 0.4s ease' }">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Nome completo *</label>
                <input type="text" id="name" v-model="form.name" placeholder="João Silva" required />
              </div>
              <div class="form-group">
                <label for="email">E-mail *</label>
                <input type="email" id="email" v-model="form.email" placeholder="joao@email.com" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="phone">Telefone / WhatsApp</label>
                <input type="tel" id="phone" v-model="form.phone" placeholder="(11) 99999-0000" />
              </div>
              <div class="form-group">
                <label for="service">Tipo de serviço</label>
                <select id="service" v-model="form.service">
                  <option value="">Selecione...</option>
                  <option value="vistoria">Contrato de Vistoria / Intermediação</option>
                  <option value="computador">Computador / Desktop</option>
                  <option value="notebook">Notebook</option>
                  <option value="impressora">Impressora</option>
                  <option value="rede">Rede / Infraestrutura</option>
                  <option value="dados">Recuperação de Dados</option>
                  <option value="remoto">Suporte Remoto</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="message">Mensagem *</label>
              <textarea id="message" v-model="form.message" placeholder="Descreva o que está precisando..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary form-submit" :disabled="isSubmitting">
              <span v-if="!isSubmitting">Enviar Mensagem</span>
              <span v-else>Enviando...</span>
              <svg v-if="!isSubmitting" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="margin-left:8px;">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
          <div class="success-msg" v-show="showSuccess" style="display:block;">
            <div style="font-size:2.5rem;margin-bottom:12px;">✅</div>
            <strong>Mensagem enviada!</strong><br>
            <span style="color:var(--clr-muted);font-weight:400;font-size:0.9rem;">
              Em breve entraremos em contato com você.
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const form = ref({ name: '', email: '', phone: '', service: '', message: '' })
const isSubmitting = ref(false)
const showSuccess = ref(false)
const formOpacity = ref(1)
const formDisplay = ref('block')
const formRef = ref(null)

function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    if (formRef.value) {
      formRef.value.style.animation = 'none'
      formRef.value.offsetHeight // reflow
      formRef.value.style.animation = 'shake 0.4s ease'
    }
    return
  }

  isSubmitting.value = true
  setTimeout(() => {
    formOpacity.value = 0
    setTimeout(() => {
      formDisplay.value = 'none'
      showSuccess.value = true
    }, 400)
  }, 1400)
}
</script>
