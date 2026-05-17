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
            <a :href="whatsappDirectLink" target="_blank" rel="noopener noreferrer" class="contact-item contact-item-link" id="contact-whatsapp" role="listitem" aria-label="Abrir WhatsApp - Luiz">
              <div class="ci-icon ci-icon--whatsapp" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div class="ci-text">
                <span class="ci-label">WhatsApp</span>
                <span>+55 (66) 9 9240-3227</span>
              </div>
            </a>
            <a href="https://wa.me/5566996444963?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+servi%C3%A7o." target="_blank" rel="noopener noreferrer" class="contact-item contact-item-link" id="contact-whatsapp-2" role="listitem" aria-label="Abrir WhatsApp - Erik">
              <div class="ci-icon ci-icon--whatsapp" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div class="ci-text">
                <span class="ci-label">WhatsApp</span>
                <span>+55 (66) 9 9644-4963</span>
              </div>
            </a>
            <div class="contact-item" id="contact-email" role="listitem">
              <div class="ci-icon" aria-hidden="true">✉️</div>
              <div class="ci-text">
                <span class="ci-label">E-mail</span>
                <div class="email-links">
                  <a href="mailto:luiz.xavier@unemat.br" class="email-link">luiz.xavier@unemat.br</a>
                  <a href="mailto:erik.roberto@unemat.br" class="email-link">erik.roberto@unemat.br</a>
                </div>
              </div>
            </div>
            <div class="contact-item" id="contact-hours" role="listitem">
              <div class="ci-icon" aria-hidden="true">🕐</div>
              <div class="ci-text">
                <span class="ci-label">Horário</span>
                <span>Seg–Sex: 08h–18h | Sáb: 09h–13h</span>
              </div>
            </div>
          </div>

          <!-- Botão direto WhatsApp -->
          <a
            :href="whatsappDirectLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-whatsapp reveal reveal-delay-4"
            id="btn-whatsapp-direct"
            aria-label="Chamar no WhatsApp agora"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chamar no WhatsApp agora
          </a>
        </div>

        <!-- Formulário -->
        <div class="contact-form reveal reveal-delay-2">
          <form
            id="contact-form"
            @submit.prevent="handleSubmit"
            novalidate
            aria-label="Formulário de contato"
            ref="formRef"
            :style="{ opacity: formOpacity, display: formDisplay, transition: 'opacity 0.4s ease' }"
          >
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
                <input type="tel" id="phone" v-model="form.phone" placeholder="(66) 99999-0000" />
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

            <!-- aviso de redirecionamento -->
            <p class="form-whatsapp-hint">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="flex-shrink:0;margin-top:2px;">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ao enviar, você será direcionado para continuar pelo WhatsApp.
            </p>

            <button type="submit" class="btn btn-whatsapp form-submit" :disabled="isSubmitting" id="btn-form-submit">
              <span v-if="!isSubmitting">Enviar via WhatsApp</span>
              <span v-else>Redirecionando...</span>
              <svg v-if="!isSubmitting" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
          </form>

          <div class="success-msg" v-show="showSuccess" style="display:block;">
            <div style="font-size:2.5rem;margin-bottom:12px;">✅</div>
            <strong>Redirecionando para o WhatsApp!</strong><br>
            <span style="color:var(--clr-muted);font-weight:400;font-size:0.9rem;">
              Uma janela do WhatsApp foi aberta com sua mensagem. Se não abriu, <a :href="whatsappFormLink" target="_blank" rel="noopener noreferrer" style="color:var(--clr-primary);text-decoration:underline;">clique aqui</a>.
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

// ──────────────────────────────────────────
// Dados de contato
// ──────────────────────────────────────────
const phoneNumber      = '+5566992403227'
const whatsappNumber   = '5566992403227'   // número para receber as mensagens do formulário
const defaultMessage   = 'Olá! Gostaria de solicitar um serviço.'

const whatsappDirectLink = computed(() =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
)

// ──────────────────────────────────────────
// Formulário
// ──────────────────────────────────────────
const form = ref({ name: '', email: '', phone: '', service: '', message: '' })
const isSubmitting    = ref(false)
const showSuccess     = ref(false)
const formOpacity     = ref(1)
const formDisplay     = ref('block')
const formRef         = ref(null)
const whatsappFormLink = ref(whatsappDirectLink.value)

const serviceLabels = {
  vistoria:   'Contrato de Vistoria / Intermediação',
  computador: 'Computador / Desktop',
  notebook:   'Notebook',
  impressora: 'Impressora',
  rede:       'Rede / Infraestrutura',
  dados:      'Recuperação de Dados',
  remoto:     'Suporte Remoto',
  outro:      'Outro',
}

function buildWhatsAppMessage() {
  const { name, email, phone, service, message } = form.value
  const serviceLabel = service ? serviceLabels[service] || service : 'Não informado'
  const phoneInfo    = phone   ? phone : 'Não informado'

  return (
    `Olá! Vim pelo site e gostaria de um orçamento.\n\n` +
    `👤 *Nome:* ${name}\n` +
    `✉️ *E-mail:* ${email}\n` +
    `📞 *Telefone:* ${phoneInfo}\n` +
    `🔧 *Serviço:* ${serviceLabel}\n\n` +
    `📝 *Mensagem:*\n${message}`
  )
}

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

  const text = buildWhatsAppMessage()
  const url  = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  whatsappFormLink.value = url

  // Abre o WhatsApp em nova aba
  window.open(url, '_blank', 'noopener,noreferrer')

  setTimeout(() => {
    formOpacity.value = 0
    setTimeout(() => {
      formDisplay.value = 'none'
      showSuccess.value  = true
      isSubmitting.value = false
    }, 400)
  }, 800)
}
</script>

<style scoped>
/* ── itens de contato com link ── */
.contact-item-link {
  color: inherit;
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition: background var(--transition), transform var(--transition);
  padding: 4px 6px;
  margin: -4px -6px;
}
.contact-item-link:hover {
  background: rgba(0, 210, 255, 0.06);
  transform: translateX(4px);
}

/* ── rótulo secundário dentro dos itens ── */
.ci-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ci-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--clr-primary);
}

/* ── ícone WhatsApp verde ── */
.ci-icon--whatsapp {
  color: #25d366;
  background: rgba(37, 211, 102, 0.1) !important;
  border-color: rgba(37, 211, 102, 0.25) !important;
}

/* ── links de e-mail ── */
.email-links {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.email-link {
  color: var(--clr-muted);
  font-size: 0.88rem;
  transition: color var(--transition);
  text-decoration: none;
}
.email-link:hover {
  color: var(--clr-primary);
  text-decoration: underline;
}

/* ── botão WhatsApp ── */
.btn-whatsapp {
  background: #25d366;
  color: #fff;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 28px;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  margin-top: 2rem;
  white-space: nowrap;
}
.btn-whatsapp:hover {
  background: #1ebe5d;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.35);
}
.btn-whatsapp:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

/* ── dica abaixo do textarea ── */
.form-whatsapp-hint {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--clr-muted);
  margin-bottom: 12px;
  margin-top: -4px;
  line-height: 1.5;
}
.form-whatsapp-hint svg {
  color: #25d366;
}
</style>
