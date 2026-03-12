<div align="center">
  <img src="public/assets/logo.jpg" alt="Edvvo Logo" width="120" />
  <h1 style="font-size:2.5rem; margin-bottom:0;">🚀 Edvvo Platform</h1>
  <p style="font-size:1.2rem; margin-top:0; color:#555;"><b>Your Gateway to Modern Educational Resources</b></p>
  <br/>
  <img src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Books','Notes','Scholarly Vault','Entertainment','Focus Timer','Roadmaps'],datasets:[{data:[30,20,15,10,15,10]}]},options:{plugins:{legend:{display:true,position:'bottom'}}}}" alt="Feature Distribution" width="350" />
  <br/>
  <sub><i>Feature Distribution in Edvvo</i></sub>
</div>

<p align="center">
  <img src="https://img.shields.io/github/license/animaapp/edvvo?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/Made%20with-React-blue?style=flat-square" alt="React" />
  <img src="https://img.shields.io/badge/Powered%20by-Tailwind%20CSS-38bdf8?style=flat-square" alt="Tailwind CSS" />
</p>

---

---

<h2 align="center">🌟 Why Edvvo?</h2>

<p align="center">
  <b>Edvvo</b> is a next-generation educational platform, empowering students with instant access to books, notes, scholarly resources, and productivity tools—all in one place. <br/>
  <b>Fast</b>, <b>beautiful</b>, and <b>responsive</b>, Edvvo is built for the modern learner.
</p>

---

## ✨ Features

<table>
  <tr>
    <td>📚 <b>Books & Notes</b></td>
    <td>Curated resources for classes 9–12, always up-to-date.</td>
  </tr>
  <tr>
    <td>🔍 <b>Global Search</b></td>
    <td>Lightning-fast search to find any resource instantly.</td>
  </tr>
  <tr>
    <td>🧑‍🎓 <b>Scholarly Vault</b></td>
    <td>Access research papers and scholarly content.</td>
  </tr>
  <tr>
    <td>🕹️ <b>Entertainment</b></td>
    <td>Enjoy educational entertainment content.</td>
  </tr>
  <tr>
    <td>⏲️ <b>Focus Timer</b></td>
    <td>Boost productivity with a built-in Pomodoro timer.</td>
  </tr>
  <tr>
    <td>🗺️ <b>Roadmaps</b></td>
    <td>Visualize your learning journey with interactive roadmaps.</td>
  </tr>
  <tr>
    <td>🌗 <b>Theme Toggle</b></td>
    <td>Switch between light and dark modes for comfort.</td>
  </tr>
  <tr>
    <td>📱 <b>Responsive Design</b></td>
    <td>Seamless experience on all devices.</td>
  </tr>
</table>

---

## 🛠️ Tech Stack

<ul>
  <li><img src="https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb&style=flat-square" alt="React" /> <b>React</b></li>
  <li><img src="https://img.shields.io/badge/Vite-646cff?logo=vite&logoColor=fff&style=flat-square" alt="Vite" /> <b>Vite</b></li>
  <li><img src="https://img.shields.io/badge/Tailwind_CSS-38bdf8?logo=tailwindcss&logoColor=fff&style=flat-square" alt="Tailwind CSS" /> <b>Tailwind CSS</b></li>
  <li><img src="https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=fff&style=flat-square" alt="TypeScript" /> <b>TypeScript</b></li>
</ul>

---

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16+ recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build

```bash
npm run build
```

---

## 🗂️ Project Structure

Edvvo is organized around **4 main pages** with shared resources for maintainability:

```
src/
├── components/ui/          # Shared UI components (Button, Card, Input, etc.)
├── pages/                  # Main application pages
│   ├── Home/              # Landing page, notifications & sections
│   ├── Explore/           # Educational content browser
│   │   ├── books/         # Class 9–12 textbooks
│   │   ├── notes/         # Class 9–12 notes
│   │   ├── fields/        # Academic discipline pages (11 fields)
│   │   └── programs/      # Degree program pages
│   ├── Workspace/         # Study tools & productivity
│   └── About/             # About & legal pages
├── router/                # Centralized route definitions
├── utils/                 # Helpers (cn, globalResources, data)
├── styles/                # Global styles (Tailwind CSS)
└── types/                 # Shared TypeScript interfaces
```

<details>
<summary>📋 See detailed structure</summary>

**Home** — Landing page, HeroSection, FooterSection, FeaturedBooksSection, ExploreByCategorySection, SearchSection, Notifications

**Explore** — Main explore page, board selector, entry tests, scholarly vault, academic explorer, MindSprint quiz
- `books/` — Class 9, 10, 11, 12 textbooks
- `notes/` — Class 9, 10, 11, 12 study notes
- `fields/` — Islamic Studies, Engineering, Computer Science, Business & Finance, Natural Sciences, Health & Para-Medical, Social Sciences, Architecture & Design, Law, Education, Agriculture & Vet
- `programs/` — Engineering Programs, Applied Science Programs

**Workspace** — Roadmaps, Focus Timer, Solutions, Solution Detail, Study Plans

**About** — About page, Privacy Policy, Terms of Service

**Shared** — `components/ui/` (Button, Card, BookCard, Input, NavigationMenu, ThemeToggle), `utils/` (cn helper, globalResources, notificationsData, recentlyAddedBooks), `types/` (Book, Resource, Category interfaces)

</details>

---

---

## 🤝 Contributing

We love contributions! 🚀

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

Please open issues or submit pull requests for improvements and bug fixes.

---

---

## 📄 License

This project is licensed under the MIT License.

---

---

## 📬 Contact

For questions, feedback, or partnership inquiries, please contact the project maintainer.

---
