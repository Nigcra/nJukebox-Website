// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show temporary feedback
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✅';
        button.style.color = '#1DB954';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.color = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✅';
        button.style.color = '#1DB954';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.color = '';
        }, 2000);
    });
}

// Language switching functionality
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const langContents = document.querySelectorAll('.lang-content');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = btn.dataset.lang;
            
            // Update active button
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show/hide content (skip buttons themselves)
            langContents.forEach(content => {
                if (content.dataset.lang === targetLang) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
            
            // Also handle [data-lang] elements that aren't buttons
            document.querySelectorAll('[data-lang]').forEach(element => {
                // Skip buttons and already handled .lang-content
                if (element.classList.contains('lang-btn') || element.classList.contains('lang-content')) return;
                
                if (element.dataset.lang === targetLang) {
                    element.style.display = '';
                } else {
                    element.style.display = 'none';
                }
            });
            
            // Store preference
            localStorage.setItem('preferred-language', targetLang);
        });
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    const savedBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
    if (savedBtn) {
        savedBtn.click();
    }
}

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(18, 18, 18, 0.98)';
    } else {
        navbar.style.background = 'rgba(18, 18, 18, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switcher
    initLanguageSwitcher();
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe setup steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        observer.observe(step);
    });
    
    // Observe doc cards
    const docCards = document.querySelectorAll('.doc-card');
    docCards.forEach(card => {
        observer.observe(card);
    });
});

// Demo screenshot placeholder
document.addEventListener('DOMContentLoaded', function() {
    const demoScreenshot = document.querySelector('.demo-screenshot img');
    if (demoScreenshot && !demoScreenshot.src.includes('screenshots/')) {
        // Create a placeholder for the demo screenshot
        const placeholder = createDemoPlaceholder();
        demoScreenshot.parentNode.insertBefore(placeholder, demoScreenshot);
        demoScreenshot.style.display = 'none';
    }
});

function createDemoPlaceholder() {
    const placeholder = document.createElement('div');
    placeholder.className = 'demo-placeholder';
    placeholder.innerHTML = `
        <div class="placeholder-content">
            <div class="placeholder-header">
                <div class="placeholder-controls">
                    <span class="control red"></span>
                    <span class="control yellow"></span>
                    <span class="control green"></span>
                </div>
                <div class="placeholder-title">nJukebox Interface</div>
            </div>
            <div class="placeholder-body">
                <div class="placeholder-sidebar">
                    <div class="sidebar-item">🌟 Neu</div>
                    <div class="sidebar-item">👤 Interpret</div>
                    <div class="sidebar-item">💿 Album</div>
                    <div class="sidebar-item">🎷 Genre</div>
                    <div class="sidebar-item">🕰️ Jahrzehnt</div>
                </div>
                <div class="placeholder-main">
                    <div class="search-bar">
                        <input type="text" placeholder="Search for artists, albums, or songs..." readonly>
                    </div>
                    <div class="track-list">
                        <div class="track-item">
                            <div class="track-cover"></div>
                            <div class="track-info">
                                <div class="track-title">Sample Song Title</div>
                                <div class="track-artist">Artist Name • Album Name</div>
                            </div>
                            <div class="track-duration">3:45</div>
                        </div>
                        <div class="track-item">
                            <div class="track-cover"></div>
                            <div class="track-info">
                                <div class="track-title">Another Great Song</div>
                                <div class="track-artist">Different Artist • Cool Album</div>
                            </div>
                            <div class="track-duration">4:12</div>
                        </div>
                        <div class="track-item">
                            <div class="track-cover"></div>
                            <div class="track-info">
                                <div class="track-title">Music Track Example</div>
                                <div class="track-artist">Demo Artist • Sample Album</div>
                            </div>
                            <div class="track-duration">2:58</div>
                        </div>
                    </div>
                </div>
                <div class="placeholder-queue">
                    <div class="queue-header">🎵 Playlist</div>
                    <div class="queue-item">Now Playing: Demo Song</div>
                    <div class="queue-item">Next: Another Song</div>
                    <div class="queue-item">Queue: Third Song</div>
                </div>
            </div>
            <div class="placeholder-footer">
                <div class="footer-controls">
                    <div class="control-btn">⏮</div>
                    <div class="control-btn play-btn">▶</div>
                    <div class="control-btn">⏭</div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
            </div>
        </div>
    `;
    
    // Add styles for the placeholder
    const style = document.createElement('style');
    style.textContent = `
        .demo-placeholder {
            width: 100%;
            height: 400px;
            background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        .placeholder-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            background: #1a1a1a;
            border-radius: 10px;
            overflow: hidden;
        }
        
        .placeholder-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: #2a2a2a;
            border-bottom: 1px solid #333;
        }
        
        .placeholder-controls {
            display: flex;
            gap: 8px;
        }
        
        .placeholder-title {
            color: #1DB954;
            font-weight: 600;
        }
        
        .placeholder-body {
            flex: 1;
            display: flex;
            min-height: 0;
        }
        
        .placeholder-sidebar {
            width: 150px;
            background: #1a1a1a;
            padding: 15px 10px;
            border-right: 1px solid #333;
        }
        
        .sidebar-item {
            padding: 8px 12px;
            margin-bottom: 5px;
            border-radius: 8px;
            font-size: 0.9rem;
            color: #b3b3b3;
            transition: all 0.3s ease;
        }
        
        .sidebar-item:first-child {
            background: rgba(29, 185, 84, 0.2);
            color: #1DB954;
        }
        
        .placeholder-main {
            flex: 1;
            padding: 15px;
        }
        
        .search-bar input {
            width: 100%;
            padding: 10px 15px;
            background: #2a2a2a;
            border: 1px solid #333;
            border-radius: 20px;
            color: #fff;
            margin-bottom: 15px;
        }
        
        .track-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .track-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px;
            background: #2a2a2a;
            border-radius: 8px;
            transition: background 0.3s ease;
        }
        
        .track-item:hover {
            background: #333;
        }
        
        .track-cover {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #1DB954, #1ed760);
            border-radius: 6px;
            position: relative;
        }
        
        .track-cover::after {
            content: '🎵';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 16px;
        }
        
        .track-info {
            flex: 1;
        }
        
        .track-title {
            font-weight: 500;
            margin-bottom: 2px;
            color: #fff;
        }
        
        .track-artist {
            font-size: 0.8rem;
            color: #b3b3b3;
        }
        
        .track-duration {
            color: #666;
            font-size: 0.9rem;
        }
        
        .placeholder-queue {
            width: 200px;
            background: #1a1a1a;
            padding: 15px;
            border-left: 1px solid #333;
        }
        
        .queue-header {
            font-weight: 600;
            margin-bottom: 15px;
            color: #1DB954;
        }
        
        .queue-item {
            padding: 8px;
            margin-bottom: 8px;
            background: #2a2a2a;
            border-radius: 6px;
            font-size: 0.8rem;
            color: #b3b3b3;
        }
        
        .queue-item:first-of-type {
            color: #1DB954;
            background: rgba(29, 185, 84, 0.2);
        }
        
        .placeholder-footer {
            padding: 15px 20px;
            background: #2a2a2a;
            border-top: 1px solid #333;
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        .footer-controls {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        
        .control-btn {
            width: 35px;
            height: 35px;
            background: #333;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .control-btn:hover {
            background: #1DB954;
        }
        
        .play-btn {
            background: #1DB954;
            width: 40px;
            height: 40px;
        }
        
        .progress-bar {
            flex: 1;
            height: 4px;
            background: #333;
            border-radius: 2px;
            overflow: hidden;
        }
        
        .progress-fill {
            width: 30%;
            height: 100%;
            background: #1DB954;
            border-radius: 2px;
            animation: progress 3s ease-in-out infinite;
        }
        
        @keyframes progress {
            0% { width: 30%; }
            50% { width: 60%; }
            100% { width: 30%; }
        }
    `;
    
    document.head.appendChild(style);
    return placeholder;
}

// Enhanced visualizer animation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switcher
    initLanguageSwitcher();
    
    const bars = document.querySelectorAll('.visualizer .bar');
    
    function randomizeHeights() {
        bars.forEach(bar => {
            const height = Math.random() * 80 + 20;
            bar.style.height = height + '%';
        });
    }
    
    // Randomize heights every 500ms for more dynamic effect
    if (bars.length > 0) {
        setInterval(randomizeHeights, 500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        const speed = scrolled * 0.1;
        heroVisual.style.transform = `translateY(${speed}px)`;
    }
});

// Screenshot Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const targetScreenshot = this.dataset.target;
            const gallery = this.closest('.demo-gallery');
            
            // Update active thumbnail
            gallery.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active screenshot
            gallery.querySelectorAll('.screenshot').forEach(s => {
                s.classList.remove('active');
                if (s.dataset.screenshot === targetScreenshot) {
                    s.classList.add('active');
                }
            });
        });
    });
});
