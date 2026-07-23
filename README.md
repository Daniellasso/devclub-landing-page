
<div align="center">

  <img src="./assets/logo.png" alt="DevClub Logo" width="400"/>

  <h1>DevClub — Landing Page Institucional</h1>

  <p>
    <strong>🚀 A Escola das Profissões do Futuro</strong><br/>
    Página institucional disruptiva com animações, contadores animados e design moderno.
  </p>

  <p>
    <a href="#-sobre-o-projeto">Sobre</a> •
    <a href="#-tecnologias-utilizadas">Tecnologias</a> •
    <a href="#-estrutura-do-projeto">Estrutura</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-como-executar">Como Executar</a> •
    <a href="#-personalização">Personalização</a>
  </p>

  <br/>

  <img src="./assets/fundador.svg" alt="Preview" width="600"/>

</div>

---

## 📋 Sobre o Projeto

Esta é uma **landing page institucional** do **DevClub**, criada como parte de um concurso para uma vaga de programador. O desafio consistia em construir uma página que representasse a essência do DevClub — suas formações, seu fundador, seus alunos e as empresas que confiam na plataforma — de forma **disruptiva e memorável**.

> **"Quero abrir o link e falar 'que animal isso aqui'."** — Rodolfo Mori

A página foi desenvolvida inteiramente em **HTML, CSS e JavaScript puros**, sem dependências de frameworks ou bibliotecas externas (além de ícones e fontes), demonstrando domínio dos fundamentos da web.

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| <img src="./assets/javascript.png" width="18" height="18"/> **HTML5** | Estrutura semântica e acessível da página |
| <img src="./assets/typescript.png" width="18" height="18"/> **CSS3** | Estilização completa com animações e responsividade |
| **JavaScript (Vanilla)** | Interatividade, animações scroll, contadores e parallax |
| **Font Awesome 6** | Ícones de redes sociais (CDN) |
| **Google Fonts (Inter)** | Tipografia moderna e legível |

### Diferenciais Técnicos

- ✅ **Zero dependências de frameworks** — sem React, Vue ou jQuery
- ✅ **CSS puro com animações profissionais** — sem bibliotecas de animação
- ✅ **JavaScript Vanilla com APIs modernas** — IntersectionObserver, scroll suave
- ✅ **Design responsivo completo** — 8 breakpoints do desktop ao mobile extremo
- ✅ **100% acessível** — suporte a `prefers-reduced-motion`

---

## 📁 Estrutura do Projeto

```
├── index.html                  # Página principal
├── README.md                   # Documentação
│
├── assets/                     # Recursos estáticos
│   ├── banner.svg              # Ilustração do hero
│   ├── fundador.svg            # Foto do fundador
│   ├── javascript.png          # Ícone JS
│   ├── typescript.png          # Ícone TS
│   ├── sql.png                 # Ícone SQL
│   ├── logo.png                # Logo horizontal
│   ├── logo-devclub.jpg        # Favicon
│   └── seta-direita.png        # Ícone decorativo
│
├── css/                        # Folhas de estilo
│   ├── style.css               # Estilos principais (8 seções)
│   ├── animations.css          # Keyframes + scroll reveal
│   └── responsive.css          # Responsividade (8 breakpoints)
│
└── js/                         # Scripts
    ├── script.js               # Menu mobile, scroll, header
    ├── scroll.js               # Seções visíveis, parallax, stagger
    └── counter.js              # Contadores animados (IntersectionObserver)
```

---

## ✨ Funcionalidades

### 1. Header com Efeito Glassmorphism
- Menu fixo no topo com efeito de desfoque ao scroll (`backdrop-filter: blur`)
- Menu mobile responsivo com animação em hambúrguer
- Destaque automático do link da seção atual (active menu)

### 2. Hero Section com Parallax
- Título com tipografia ousada e gradientes
- Ilustração flutuante com animação CSS infinita
- Efeito parallax suave na imagem ao scroll

### 3. Marquee de Formações
- Faixa contínua com nomes das áreas de atuação
- Animação infinita com `@keyframes` e gradiente nas bordas

### 4. Seção Sobre com Cards Interativos
- Cards com hover 3D e efeito de brilho
- Animações de entrada com delay escalonado (stagger)

### 5. Linguagens com Cards 3D
- Efeito de perspectiva 3D ao hover (`rotateX` / `rotateY`)
- Brilho deslizante no hover (efeito "shine")
- Glow animado no fundo

### 6. Seção "Para Quem é o DevClub?" com Contadores Animados
- **4 contadores animados**: alunos formados, empregabilidade, avaliação, vidas transformadas
- Animação disparada via `IntersectionObserver` — só conta quando visível
- Suporte a números decimais (4.9) e inteiros com formatação local (`pt-BR`)

### 7. Seção do Fundador
- Citação estilizada com aspas decorativas gigantes
- Card com efeito glass e hover suave
- Redes sociais com hover animado

### 8. Footer Premium
- Grid de 3 colunas com logo, navegação e redes sociais
- Círculos decorativos animados ao fundo
- Botão "Voltar ao Topo" com anel pulsante (`pulseRing`)

### 9. Animações de Scroll (Reveal)
- Elementos aparecem suavemente ao entrar na viewport
- Stagger effect — cards aparecem um após o outro com delay progressivo
- Fade up, fade left, fade right, scale in

### 10. Back to Top Button
- Aparece após 500px de scroll
- Efeito de anel pulsante
- Scroll suave ao topo

---

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Daniellasso/devclub-landing-page.git
   ```

2. **Acesse a pasta do projeto**
   ```bash
   cd devclub-landing-page
   ```

3. **Abra o arquivo `index.html` no navegador**
   - Dê duplo clique no arquivo, ou
   - Use a extensão **Live Server** no VS Code para recarregamento automático

   ```bash
   # Ou via terminal (Windows)
   start index.html
   ```

   ```bash
   # Ou via terminal (Mac)
   open index.html
   ```

   ```bash
   # Ou via terminal (Linux)
   xdg-open index.html
   ```

> ⚡ **Não requer instalação de dependências** — é HTML + CSS + JS puro, roda direto no navegador.

---

## 🎨 Personalização

### Cores
Edite as variáveis CSS no arquivo `css/style.css`:

```css
:root {
  --primary: #0FCB8C;        /* Verde principal */
  --primary-dark: #0ca46f;   /* Verde escuro (hover) */
  --secondary: #111827;      /* Cor do texto principal */
  --gray: #6B7280;           /* Cor do texto secundário */
}
```

### Conteúdo
Os textos, números e depoimentos estão diretamente no `index.html` — basta editar o HTML.

### Contadores
Os valores dos contadores estão nos `data-target`:

```html
<h3 class="counter" data-target="10" data-prefix="+" data-suffix="k"></h3>
```

---

## 📱 Responsividade

A página se adapta perfeitamente a **8 breakpoints**:

| Breakpoint | Largura |
|---|---|
| Extra grande | > 1700px |
| Notebook | ≤ 1400px |
| Desktop pequeno | ≤ 1200px |
| Tablet grande | ≤ 992px |
| Tablet | ≤ 768px |
| Mobile grande | ≤ 576px |
| Mobile pequeno | ≤ 420px |
| Mobile extra | ≤ 360px |

Além disso, suporta:
- Modo paisagem em dispositivos móveis
- Preferência por movimento reduzido (`prefers-reduced-motion`)

---

## 📄 Licença

Este projeto foi desenvolvido para fins de participação em concurso. O código é livre para uso e modificação.

---

<div align="center">
  <p>Feito para o concurso DevClub</p>
  <p>
    <a href="https://github.com/rodolfomori-devclub" target="_blank">GitHub</a> •
    <a href="https://www.instagram.com/rodolfomorii/" target="_blank">Instagram</a> •
    <a href="https://www.youtube.com/@canaldevclub" target="_blank">YouTube</a>
  </p>
</div>

