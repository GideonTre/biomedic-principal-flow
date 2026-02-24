// ============================================
// MOCK DATABASE - Simulates a backend
// ============================================

const db = {
    users: [
        { username: 'student', password: '123', role: 'student', enrolledClasses: [1, 2] },
        { username: 'teacher', password: '123', role: 'teacher', enrolledClasses: [] }
    ],
    classes: [
        { id: 1, name: 'Introduction to Mathematics', description: 'Basic algebra, calculus fundamentals, and problem-solving techniques.' },
        { id: 2, name: 'English Literature', description: 'Exploring classic novels, poetry analysis, and creative writing.' },
        { id: 3, name: 'Computer Science 101', description: 'Introduction to programming, algorithms, and web development basics.' },
        { id: 4, name: 'World History', description: 'A comprehensive study of ancient civilizations to modern times.' }
    ],
    materials: [
        { id: 1, classId: 1, title: 'Algebra Basics - Chapter 1', type: 'PDF', date: '2024-01-15' },
        { id: 2, classId: 1, title: 'Calculus Problems Set', type: 'DOCX', date: '2024-01-18' },
        { id: 3, classId: 2, title: 'Shakespeare - Hamlet', type: 'PDF', date: '2024-01-10' },
        { id: 4, classId: 3, title: 'HTML & CSS Guide', type: 'PDF', date: '2024-01-20' },
        { id: 5, classId: 4, title: 'Ancient Egypt Notes', type: 'PPTX', date: '2024-01-12' }
    ],
    results: [
        { id: 1, subject: 'Mathematics', assignment: 'Midterm Exam', score: 85, grade: 'B+', comment: 'Good progress!' },
        { id: 2, subject: 'English', assignment: 'Essay: Hamlet', score: 92, grade: 'A', comment: 'Excellent analysis!' },
        { id: 3, subject: 'Computer Science', assignment: 'Project 1', score: 78, grade: 'C+', comment: 'Keep practicing.' },
        { id: 4, subject: 'History', assignment: 'Quiz: Rome', score: 95, grade: 'A', comment: 'Outstanding!' }
    ]
};

// ============================================
// GLOBAL VARIABLES
// ============================================

let currentUser = null;
let authMode = 'login';

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

function toggleAuthMode(mode) {
    authMode = mode;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const roleSelect = document.getElementById('role');
    if (mode === 'register') {
        roleSelect.classList.remove('hidden');
    } else {
        roleSelect.classList.add('hidden');
    }
}

document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    if (authMode === 'login') {
        const user = db.users.find(u => u.username === username && u.password === password);
        if (user) {
            currentUser = user;
            loginSuccess();
        } else {
            alert('Invalid credentials! Try student/123 or teacher/123');
        }
    } else {
        // Register new user
        const exists = db.users.find(u => u.username === username);
        if (exists) {
            alert('Username already exists!');
        } else {
            const newUser = { username, password, role, enrolledClasses: role === 'student' ? [1] : [] };
            db.users.push(newUser);
            currentUser = newUser;
            loginSuccess();
        }
    }
});

function loginSuccess() {
    document.getElementById('auth-page').classList.remove('active');
    document.getElementById('auth-page').classList.add('hidden');
    document.getElementById('navbar').classList.remove('hidden');
    
    if (currentUser.role === 'teacher') {
        document.getElementById('adminLink').classList.remove('hidden');
        showPage('admin');
    } else {
        showPage('dashboard');
    }
    
    loadDashboard();
    loadClasses();
    loadMaterials();
    loadResults();
    populateAdminForms();
}

function logout() {
    currentUser = null;
    document.getElementById('auth-page').classList.remove('hidden');
    document.getElementById('auth-page').classList.add('active');
    document.getElementById('navbar').classList.add('hidden');
    document.getElementById('adminLink').classList.add('hidden');
    
    // Reset pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
        p.classList.add('hidden');
    });
    document.getElementById('auth-page').classList.remove('hidden');
    document.getElementById('auth-page').classList.add('active');
    
    // Clear form
    document.getElementById('auth-form').reset();
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    
    document.getElementById(pageId + '-page').classList.remove('hidden');
    document.getElementById(pageId + '-page').classList.add('active');
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.right = '0';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
}

// ============================================
// DASHBOARD FUNCTIONS
// ============================================

function loadDashboard() {
    if (!currentUser || currentUser.role !== 'student') return;
    
    const enrolledCount = currentUser.enrolledClasses.length;
    document.getElementById('stat-classes').textContent = enrolledCount;
    
    // Calculate average score
    const scores = db.results.map(r => r.score);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    document.getElementById('stat-score').textContent = Math.round(avg) + '%';
    
    // Load recent materials
    const materialsList = document.getElementById('dash-materials-list');
    materialsList.innerHTML = '';
    const recentMaterials = db.materials.slice(-3);
    recentMaterials.forEach(m => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${m.title}</span> <span>${m.type}</span>`;
        materialsList.appendChild(li);
    });
}

// ============================================
// CLASSES FUNCTIONS
// ============================================

function loadClasses() {
    const container = document.getElementById('classes-container');
    container.innerHTML = '';
    
    db.classes.forEach(cls => {
        const isEnrolled = currentUser && currentUser.enrolledClasses.includes(cls.id);
        
        const card = document.createElement('div');
        card.className = 'class-card';
        
        let buttonHtml = '';
        if (currentUser && currentUser.role === 'student') {
            if (isEnrolled) {
                buttonHtml = '<button class="btn-secondary" disabled>Enrolled ✓</button>';
            } else {
                buttonHtml = `<button class="btn-enroll" onclick="enrollClass(${cls.id})">Enroll Now</button>`;
            }
        }
        
        card.innerHTML = `
            <h3>${cls.name}</h3>
            <p>${cls.description}</p>
            ${buttonHtml}
        `;
        
        container.appendChild(card);
    });
}

function enrollClass(classId) {
    if (!currentUser) return;
    
    currentUser.enrolledClasses.push(classId);
    
    // Update in database
    const userIndex = db.users.findIndex(u => u.username === currentUser.username);
    db.users[userIndex] = currentUser;
    
    alert('Successfully enrolled!');
    loadClasses();
    loadDashboard();
    loadMaterials();
}

// ============================================
// MATERIALS FUNCTIONS
// ============================================

function loadMaterials() {
    const container = document.getElementById('materials-container');
    container.innerHTML = '';
    
    // Filter materials by enrolled classes
    let filteredMaterials = db.materials;
    if (currentUser && currentUser.role === 'student') {
        filteredMaterials = db.materials.filter(m => 
            currentUser.enrolledClasses.includes(m.classId)
        );
    }
    
    filteredMaterials.forEach(mat => {
        const className = db.classes.find(c => c.id === mat.classId)?.name || 'Unknown';
        
        const item = document.createElement('div');
        item.className = 'material-item';
        item.innerHTML = `
            <div class="material-info">
                <h4>${mat.title}</h4>
                <span>${className} • ${mat.type} • ${mat.date}</span>
            </div>
            <button class="btn-primary" style="width: auto;" onclick="downloadMaterial('${mat.title}')">Download</button>
        `;
        container.appendChild(item);
    });
}

function filterMaterials() {
    const searchTerm = document.getElementById('search-material').value.toLowerCase();
    const items = document.querySelectorAll('.material-item');
    
    items.forEach(item => {
        const title = item.querySelector('h4').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function downloadMaterial(title) {
    alert(`Downloading: ${title}\n\n(This is a demo - no actual file will download)`);
}

// =========================================