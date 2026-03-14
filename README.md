# Mohammed Masood — Portfolio

A modern, high-performance developer portfolio built with React + Vite, featuring a custom cursor, canvas particle system, dark/light mode, and smooth scroll animations.

🔗 **Live:** [mohammed-masood.vercel.app](https://mohammed-masood.vercel.app)
📄 **Resume:** Available via the portfolio's Resume button

---

## ✨ Features

- 🖱️ **Custom cursor** — dot + ring with `mix-blend-mode: difference` and spring lag physics
- 🌌 **Canvas particle system** — pure canvas, zero dependencies, mouse repel interaction
- 🌗 **Dark / Light mode** — smooth theme toggle, all colors switch via CSS variables
- 📜 **Scroll progress bar** — spring-smoothed accent bar fixed at the top
- 🎢 **Marquee ticker** — skills scrolling between Hero and About, pauses on hover
- 🎯 **Active section nav** — IntersectionObserver highlights current section in navbar
- ✨ **Framer Motion** — staggered entrance animations + scroll-triggered reveals
- 💡 **Skill proficiency labels** — Strong / Proficient / Familiar / Beginner
- 🔔 **Pulsing availability badge** — Open to Opportunities in Contact section
- 📱 **Fully responsive** — mobile hamburger menu with staggered link animations
- 🔡 **Typing animation** — rotating roles in the hero section

---

## 🎨 Design

- **Palette:** `#080810` background · `#00f5c4` accent · `#7b61ff` accent2
- **Fonts:** Syne (headings) · Space Mono (labels/code) · DM Sans (body)
- **Style:** Dark-first, retro-futuristic, sharp edges, noise texture overlay, glow orbs

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 + Vite 8 | Frontend framework & build tool |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |
| React Type Animation | Typing effect in hero |
| CSS Variables | Theming system (dark/light) |
| Canvas API | Particle background |

---

## 📁 Project Structure

```
masood-portfolio/
├── public/
│   ├── favicon.svg
│   └── Mohammed-Masood-Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive nav + active section detection
│   │   ├── Hero.jsx             # Landing section + typing animation
│   │   ├── Marquee.jsx          # Scrolling skills ticker
│   │   ├── About.jsx            # Bio + quick facts + stats
│   │   ├── FeaturedProject.jsx  # Titanic Dashboard spotlight card
│   │   ├── Projects.jsx         # All projects grid
│   │   ├── Skills.jsx           # Animated skill bars with labels
│   │   ├── Contact.jsx          # LinkedIn, GitHub, Email + resume CTA
│   │   ├── Footer.jsx           # Minimal footer
│   │   ├── CustomCursor.jsx     # Dot + ring cursor with spring physics
│   │   ├── CanvasBg.jsx         # Canvas particle system with mouse repel
│   │   └── ScrollProgress.jsx   # Spring-smoothed scroll indicator
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/light theme state
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # CSS variables + all global styles
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/masood-mashu/masood-portfolio.git

# Navigate into the project
cd masood-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

Deployed on **Vercel** — every push to `main` triggers an automatic deployment.

---

## 📬 Contact

- **Portfolio:** [mohammed-masood.vercel.app](https://mohammed-masood.vercel.app)
- **LinkedIn:** [linkedin.com/in/mohammed-masood-blr03](https://www.linkedin.com/in/mohammed-masood-blr03)
- **GitHub:** [github.com/masood-mashu](https://github.com/masood-mashu)
- **Email:** masoodmashu03@gmail.com

---

> Built by Mohammed Masood — CSE (Data Science) @ BIT Bangalore
