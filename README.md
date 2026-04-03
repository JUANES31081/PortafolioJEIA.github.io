# 🚀 Juan Infante — Data Scientist & AI Engineer Portfolio

[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-00D4FF?style=flat-square&logo=github)](https://juanes31081.github.io/PortafolioJEIA.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-A855F7?style=flat-square)](LICENSE)

> Personal portfolio website for **Juan Esteban Infante Andrade** — Systems Engineer oriented towards Data Science and AI development. Showcasing projects in GenAI, Machine Learning, MLOps, and Data Engineering.

**🌐 Live:** [https://juanes31081.github.io/PortafolioJEIA.github.io/](https://juanes31081.github.io/PortafolioJEIA.github.io/)

---

## 🎨 Design Theme: Data Cosmos

A dark, immersive portfolio with a cosmic data-science aesthetic:
- **Color Palette:** Deep navy `#060B14` + Neon cyan `#00D4FF` + Violet `#A855F7`
- **Typography:** Inter (UI) + JetBrains Mono (code/labels)
- **Effects:** Particle network background, glassmorphism cards, GSAP scroll animations, typewriter hero

---

## 🗂️ Project Structure

```
PortafolioJEIA.github.io/
├── index.html              ← Main HTML (semantic, SEO-optimized)
├── css/
│   ├── styles.css          ← CSS variables, base, layout, buttons
│   ├── animations.css      ← Keyframes and entrance animations
│   └── components.css      ← Navbar, cards, skills, contact, footer
├── js/
│   ├── main.js             ← Cursor, navbar scroll, mobile menu, active nav
│   ├── animations.js       ← Particles.js config, GSAP ScrollTrigger, typewriter
│   └── cards.js            ← Flip card logic and project filters
├── assets/
│   └── img/
│       └── avatar.png      ← Profile illustration
└── README.md
```

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS (custom properties) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Animations | GSAP 3 + ScrollTrigger |
| Particles | Particles.js |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Inter, JetBrains Mono) |
| Hosting | GitHub Pages |

---

## 🗺️ Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Fullscreen with particle animation, typewriter, name & CTA |
| 2 | **About** | Profile illustration, biography, stats, career path |
| 3 | **Skills** | Tech stack grouped by category (AI/ML, Cloud, Data Science, Dev) |
| 4 | **Projects** | 7 filterable flip cards (GenAI, ML, MLOps, Data, Security) |
| 5 | **Contact** | Email, LinkedIn, GitHub links |

---

## 🃏 Featured Projects

| Project | Category | Technologies |
|---------|----------|-------------|
| GenAI Research Agent | GenAI & LLMs | Gemini, LangChain, Python |
| Customer Churn Prediction | Machine Learning | Scikit-Learn, Pandas |
| Dog Breed Classifier + API | MLOps | TensorFlow, Docker, TF Serving |
| NLP Chatbot | Deep Learning | Keras, NLP |
| Point-E 3D Generator | Generative AI | OpenAI, Point-E |
| Cybersecurity Toolkit | Security | Python, VirusTotal API |
| Web Scraping Pipeline | Data Engineering | Python, BeautifulSoup |

---

## ➕ How to Add a New Project

1. Copy an existing `<div class="project-item">` block in `index.html`
2. Update `data-category` (options: `genai`, `ml`, `mlops`, `data`)  
3. Update the image `src`, title, description, tags, and GitHub link
4. Give the card a unique `id` (e.g., `card-my-project`)
5. If needed, add a new filter button in `.project-filters`

---

## 🚀 GitHub Pages Deployment

This site is hosted directly on GitHub Pages from the `main` branch. Any push to `main` auto-deploys.

**Local preview:** Open `index.html` directly in a browser — no build step required.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

*Made with ❤️ and lots of data by Juan Esteban Infante Andrade*
