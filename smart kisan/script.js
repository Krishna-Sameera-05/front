document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Elements
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const adminDashboard = document.getElementById('admin-dashboard');
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    const logoutBtn = document.getElementById('logout-btn');

    // Simple Login Mock Logic
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add a small loading state to the button
        const btn = loginForm.querySelector('.btn-primary');
        const originalText = btn.innerText;
        btn.innerText = 'Logging in...';
        btn.disabled = true;

        setTimeout(() => {
            loginScreen.classList.remove('active');
            adminDashboard.classList.add('active');
            
            // Re-initialize icons in dashboard
            lucide.createIcons();
            
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1200);
    });

    // Navigation Logic
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            
            // Update Navigation UI
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Show Target Section
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // Re-initialize icons for the new section
            lucide.createIcons();
        });
    });

    // Logout Logic
    logoutBtn.addEventListener('click', () => {
        adminDashboard.classList.remove('active');
        loginScreen.classList.add('active');
        
        // Clear form
        loginForm.reset();
    });

    // Form Submissions (Mock)
    const addProductForm = document.getElementById('add-product-form');
    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Product added successfully! (Simulation)');
            addProductForm.reset();
        });
    }

    const reportFraudForm = document.getElementById('report-fraud-form');
    if (reportFraudForm) {
        reportFraudForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Fraud report submitted. Our team will investigate. (Simulation)');
            reportFraudForm.reset();
        });
    }

    // Dynamic Search Interaction (Mock)
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            console.log('Searching for:', e.target.value);
            // Here you would typically filter lists or tables
        });
    }
});
