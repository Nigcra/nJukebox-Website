// Language switching for documentation pages
document.addEventListener('DOMContentLoaded', function() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Initialize language system
    function initLanguageSwitcher() {
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetLang = btn.dataset.lang;
                
                // Update active button
                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show/hide content based on language (but NOT buttons)
                document.querySelectorAll('[data-lang]').forEach(element => {
                    // Skip buttons
                    if (element.classList.contains('lang-btn')) return;
                    
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
    
    initLanguageSwitcher();

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
});
