# É o brique - Manutenção e Vistoria de Equipamentos

Um projeto de *Landing Page* moderno, dinâmico e responsivo desenvolvido com Vue.js 3 e Vite, focado na divulgação de serviços de TI e **intermediação segura de equipamentos usados**.

## 🛠 Tecnologias Utilizadas

Este projeto foi convertido de um modelo HTML/CSS/JS estático para um ecossistema moderno:

- **[Vue.js 3](https://vuejs.org/)**: Framework JavaScript para construção de interfaces de usuário (utilizando *Composition API* e `<script setup>`).
- **[Vite](https://vitejs.dev/)**: Ferramenta de build super rápida e servidor de desenvolvimento.
- **CSS Vanilla**: Todo o estilo (Design System) foi construído em CSS puro, utilizando variáveis nativas (`:root`), flexbox, grid e media queries para responsividade.
- **IntersectionObserver API**: Utilizada para gerenciar animações de *Scroll Reveal* (elementos surgindo na tela) e ativação de links do menu conforme a rolagem.
- **Canvas API**: Utilizada para criar o fundo animado interativo da seção Hero.

## 🚀 Proposta da Empresa

**É o brique** atua não só na manutenção corretiva e preventiva de equipamentos (computadores, notebooks, impressoras e redes), mas se destaca por um **serviço exclusivo de intermediação de usados**.

### O Novo Serviço: Contrato de Vistoria e Manutenção
Ao comprar ou vender um equipamento usado de terceiros, muitas vezes há insegurança sobre o estado real do produto. Nós entramos como um terceiro de confiança:
1. **Avaliamos** tecnicamente o equipamento (inspeção de hardware e software).
2. **Realizamos manutenção** (se necessário e solicitado).
3. **Emitimos um contrato** assinado por ambas as partes atestando a condição real do produto.
Isso garante transparência, segurança e evita dores de cabeça futuras, cobrando apenas uma pequena taxa pela intermediação e laudo técnico.

---

## 📦 Como iniciar o projeto localmente

### Pré-requisitos
- Node.js (versão 18+ recomendada)
- NPM, Yarn ou pnpm

### Passos para instalação e execução:

1. **Clone ou acesse o diretório do projeto:**
   ```bash
   cd c:\WORKSPACE\MVP_EMPREENDEDORISMO\MVP_EMPREENDEDORISMO
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   O terminal exibirá a URL local (geralmente `http://localhost:5173`).

### Gerar build de produção
Para gerar os arquivos otimizados e prontos para deploy:
```bash
npm run build
```
Os arquivos minificados serão gerados na pasta `dist/`. Para visualizar localmente o build:
```bash
npm run preview
```

---

## 📂 Estrutura do Projeto

```text
/
├── public/                 # Arquivos estáticos servidos diretamente
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   └── main.css    # Design System global e estilos de base
│   │   └── hero_bg.png     # Imagem de fundo do Hero
│   ├── components/         # Componentes Vue (SFCs) divididos por seções
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── ConsultoriaSection.vue
│   │   ├── VistoriaSection.vue
│   │   ├── DiferenciaisSection.vue
│   │   ├── ProcessoSection.vue
│   │   ├── ContatoSection.vue
│   │   └── FooterSection.vue
│   ├── composables/        # Funções reativas reaproveitáveis
│   │   └── useScrollReveal.js
│   ├── App.vue             # Componente Raiz
│   └── main.js             # Ponto de entrada do Vue
├── index.html              # HTML base onde o app Vue é montado
├── package.json            # Configurações do npm e dependências
└── vite.config.js          # Configurações do build Vite
```
