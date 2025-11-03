# nJukebox Website

This is the GitHub Pages website for the nJukebox project - a personal touch display hardware jukebox system.

## 🌍 Languages / Sprachen

This website features a **bilingual inline translation system**:

- **English** and **Deutsch** available on all pages
- Switch languages using the flag buttons in the navigation bar
- Language preference is saved automatically

## ⚠️ Notice / Hinweis

**English**: This project was developed for my personal use as a touch display hardware jukebox. It's optimized for large touchscreens, not mobile devices. Code quality is admittedly poor and was written for functionality over best practices.

**Deutsch**: Dieses Projekt wurde für meinen persönlichen Gebrauch als Touch-Display Hardware-Jukebox entwickelt. Es ist für große Touchscreens optimiert, nicht für mobile Geräte. Die Code-Qualität ist zugegebenermaßen schlecht und wurde auf Funktionalität statt auf bewährte Praktiken ausgelegt.

## 📖 Documentation

All documentation pages include both English and German versions with inline language switching:

- **[Getting Started / Erste Schritte](docs/getting-started.html)** - Complete installation and setup guide
- **[Spotify Setup / Spotify-Einrichtung](docs/spotify-setup.html)** - Spotify Premium integration
- **[Admin Guide / Admin-Anleitung](docs/admin-guide.html)** - Admin panel features and event management
- **[Configuration / Konfiguration](docs/configuration.html)** - Advanced configuration options
- **[Troubleshooting / Problembehandlung](docs/troubleshooting.html)** - Common issues and solutions

### Documentation Features
- 🎨 Modern, dark-themed design with sidebar navigation
- 🌐 Bilingual content with instant language switching
- 📱 Responsive layout (optimized for desktop)
- 🔍 Easy navigation between documentation sections

## 🚀 Features

- **Local Music Library**: MP3 collection management with ID3 metadata detection
- **Spotify Integration**: Premium account streaming (requires Widevine DRM)
- **Touch-Friendly Interface**: Optimized for large touchscreen displays
- **Admin Controls**: PIN-protected management panel
- **GEMA Reporting**: Compliance features for German events
- **Multilingual**: Full English and German support
- **Auto-DJ Mode**: Automatic playlist management
- **Visualizations**: Audio-reactive visual effects
- **Event Features**: Special modes for parties and celebrations

## 💻 Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Design**: Modern dark theme with green accents (#1DB954)
- **Translation System**: Data-attribute based language switching with localStorage
- **Documentation**: Inline bilingual content with sidebar navigation
- **Hosting**: GitHub Pages

## 🎨 Design System

- **Color Scheme**: Dark theme (#121212, #191414) with Spotify green (#1DB954)
- **Typography**: Inter font family
- **Layout**: Fixed navbar + sidebar (docs) with responsive design
- **Components**: Custom checkboxes, alert boxes, code blocks, troubleshooting items

## 🔗 Links

- [Main Project Repository](https://github.com/Nigcra/nJukebox)
- [Live Website](https://nigcra.github.io/nJukebox-Website/)
- [GitHub Pages](https://nigcra.github.io/nJukebox-Website/)

## 📝 Project Structure

```
nJukebox-Website/
├── index.html              # Main landing page (bilingual)
├── style.css               # Main stylesheet (includes documentation styles)
├── script.js               # Main page language switching
├── docs/
│   ├── getting-started.html    # Installation guide (EN/DE)
│   ├── spotify-setup.html      # Spotify integration (EN/DE)
│   ├── admin-guide.html        # Admin features (EN/DE)
│   ├── configuration.html      # Advanced config (EN/DE)
│   ├── troubleshooting.html    # Problem solving (EN/DE)
│   └── docs-script.js          # Documentation language switching
├── README.md
└── LICENSE
```

## 🛠️ Development

This is a static website built for GitHub Pages. To run locally:

1. Clone the repository
2. Open `index.html` in a modern browser
3. For development, use a local server (e.g., `python -m http.server` or VS Code Live Server)

No build process required - pure HTML/CSS/JavaScript!

---

**Note**: This website serves as documentation and presentation for the nJukebox project. The actual jukebox application code is in the [main repository](https://github.com/Nigcra/nJukebox).

