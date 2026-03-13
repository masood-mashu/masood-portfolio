# Mohammed Masood — Portfolio

A modern, responsive developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

🔗 **Live:** [mohammed-masood.vercel.app](https://mohammed-masood.vercel.app)

---

## ✨ Features

- 🌗 Dark / Light mode toggle with smooth transitions
- 🎨 Cyan + purple gradient theme with glassmorphism cards
- ⚡ Animated skill progress bars (triggered on scroll)
- 🖱️ Custom cursor glow effect
- 📜 Scroll progress indicator
- 🌌 Particle background (theme-aware)
- 📱 Fully responsive — mobile + desktop
- 🔤 Typing animation in hero section

---

## 🛠️ Tech Stack

| Technology           | Purpose                         |
| -------------------- | ------------------------------- |
| React + Vite         | Frontend framework & build tool |
| Tailwind CSS         | Utility-first styling           |
| Framer Motion        | Animations & transitions        |
| Lucide React         | Icon library                    |
| React Type Animation | Typing effect in hero           |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Responsive nav with dark/light toggle
│   ├── Hero.jsx            # Landing section with typing animation
│   ├── About.jsx           # About me + quick facts + stats
│   ├── Skills.jsx          # Animated skill bars (4 categories)
│   ├── Projects.jsx        # Project cards with live/GitHub links
│   ├── FeaturedProject.jsx # Featured Titanic Dashboard card
│   ├── Contact.jsx         # Contact links + resume download
│   ├── Footer.jsx          # Footer
│   ├── ParticlesBg.jsx     # Theme-aware particle background
│   ├── CursorGlow.jsx      # Custom cursor glow
│   └── ScrollProgress.jsx  # Scroll progress bar
├── context/
│   └── ThemeContext.jsx     # Dark/light theme state
├── App.jsx
├── main.jsx
└── index.css               # CSS variables + global styles
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

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

## 📦 Dependencies

```bash
npm install framer-motion react-type-animation lucide-react
```

---

## 🌐 Deployment

This portfolio is deployed on **Vercel**. Any push to the `main` branch triggers an automatic deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📬 Contact

- **LinkedIn:** [linkedin.com/in/mohammed-masood-blr03](https://www.linkedin.com/in/mohammed-masood-blr03)
- **GitHub:** [github.com/masood-mashu](https://github.com/masood-mashu)
- **Email:** masoodmashu03@gmail.com

---

> Built by Mohammed Masood — CSE (Data Science) @ BIT Bangalore
