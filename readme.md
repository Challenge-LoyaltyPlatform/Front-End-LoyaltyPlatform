# 🎮 Loyalty Platform

> Plataforma B2B de gamificação e engajamento criada para ajudar empresas a reterem seus usuários de forma ativa e contínua — sem precisar construir essa estrutura do zero.

---

## 📋 Sobre o Projeto

A **Loyalty Platform** transforma o engajamento dos usuários em recompensas reais por meio de gamificação personalizada. Com missões, rankings, streaks e mascotes interativos, a plataforma conecta o comportamento digital dos usuários a benefícios concretos.

Projeto desenvolvido para o **Challenge 1TDSPX — FIAP NEXT 2026**.

---

## 🗂️ Estrutura do Projeto

```
loyalty-platform/
│
├── index.html                  # Página inicial (Home)
│
├── pages/
│   ├── sobre.html              # Sobre a plataforma
│   ├── integrantes.html        # Equipe do projeto
│   ├── faq.html                # Dúvidas frequentes
│   └── contato.html            # Formulário de contato
│
├── css/
│   ├── styles.css              # Estilos globais (navbar, footer, variáveis)
│   ├── homepage.css            # Estilos da página inicial
│   ├── sobre.css               # Estilos da página Sobre
│   ├── integrantes.css         # Estilos da página de Integrantes
│   ├── faq.css                 # Estilos da página de FAQ
│   └── contato.css             # Estilos da página de Contato
│
├── js/
│   └── contato.js              # Lógica do formulário de contato (validação + toast)
│
└── assets/
    ├── LOGO POSITIVA.svg
    ├── LOGO PRINCIPAL.svg
    ├── FAVICON.svg
    └── ...                     # Demais imagens e ícones
```

---

## 🚀 Funcionalidades

- **Ranking em tempo real** — Competição entre usuários com recompensas para os mais engajados
- **Sistema de Streak** — Incentiva o acesso diário por meio de sequências de engajamento
- **Mascote interativo (Pet)** — Mascote que reflete o nível de engajamento do usuário; morre se abandonado
- **Formulário de contato** — Com validação de campos e toast de confirmação animado
- **FAQ** — Seção de dúvidas frequentes sobre a plataforma
- **Página de Integrantes** — Cards com foto, RM e links para LinkedIn e GitHub de cada membro

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e responsividade |
| JavaScript (Vanilla) | Interatividade do formulário de contato |
| Google Fonts (Sora) | Tipografia |

---

## 🎨 Design System

As cores e variáveis globais estão definidas em `css/styles.css`:

```css
:root {
    --roxo:             #5F37F5;
    --rosa:             #FC3E8E;
    --laranja:          #FC952E;
    --preto:            #08081A;
    --branco:           #E9EAF1;
    --cinza-navegacao:  #13142A;
    --ciano:            #00e5cc;
}
```

---

## 📱 Responsividade

O projeto é responsivo e foi desenvolvido para funcionar em:

- 📱 Celulares pequenos (320px+)
- 📱 Celulares médios/grandes (481px – 767px)
- 💻 Tablets (768px – 1023px)
- 🖥️ Laptops (1024px – 1279px)
- 🖥️ Monitores grandes (1536px – 1919px)
- 🖥️ Ultrawide (1920px+)

---

## ▶️ Como Rodar o Projeto

Por ser um projeto de front-end estático, basta abrir o arquivo `index.html` no navegador — não é necessário nenhum servidor ou instalação de dependências.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/loyalty-platform.git

# Acesse a pasta
cd loyalty-platform

# Abra o index.html no seu navegador
# (ou use a extensão Live Server no VS Code)
```

> **Dica:** Para a melhor experiência durante o desenvolvimento, utilize a extensão **Live Server** no VS Code.

---

## 👥 Integrantes

| Nome | RM | LinkedIn | GitHub |
|---|---|---|---|
| Andrei Oliveira de Sousa | 573373 | [LinkedIn](https://www.linkedin.com/in/andrei-sousa-55662825a) | [GitHub](https://github.com/andreisou-dev) |
| Felipe Coelho da Fonseca | 572133 | [LinkedIn](https://www.linkedin.com/in/felipe-coelho-80b78a394) | [GitHub](https://github.com/devfcoelho) |
| Henrique Soares Pereira | 569898 | [LinkedIn](https://www.linkedin.com/in/henrique-soares-pereira/) | [GitHub](https://github.com/Henriquesope) |
| Luiz Felipe Lourenço da Silva | 572576 | [LinkedIn](https://www.linkedin.com/in/luiz-felipe-lourenço-da-silva-b144b43b5/) | [GitHub](https://github.com/devlipee) |

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos no contexto do **Challenge FIAP 2026 — Turma 1TDSPX**.

---

<p align="center">© 2026 Loyalty Platform · FIAP · Challenge 1TDSPX</p>