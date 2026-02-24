// ============================================
// BIOMEDIC PRINCIPAL FLOW - MOCK DATABASE
// ============================================

const db = {
    users: [
        { username: 'student', password: '123', role: 'student', name: 'Gideon Tre', enrolledClasses: [1, 2, 3, 4, 5, 6, 7] },
        { username: 'teacher', password: '123', role: 'teacher', name: 'Dr. Smith' },
        { username: 'admin', password: 'admin', role: 'teacher', name: 'Administrator' }
    ],
    classes: [
        { id: 1, name: 'Hospital Information System and Management', description: 'Learn about healthcare IT systems, hospital management software, and health informatics.' },
        { id: 2, name: 'Biomedical Sensors and Measurement Devices', description: 'Study of biosensors, transducers, and medical measurement equipment.' },
        { id: 3, name: 'Biomedical Signals and Systems', description: 'Analysis of biological signals, signal processing, and system modeling.' },
        { id: 4, name: 'Troubleshooting of Medical Electronics', description: 'Diagnostic techniques, repair procedures, and maintenance of medical equipment.' },
        { id: 5, name: 'Electronic Circuits and Devices', description: 'Fundamentals of electronic circuits, amplifiers, and semiconductor devices.' },
        { id: 6, name: 'Medical Imaging Techniques', description: 'X-ray, CT, MRI, ultrasound, and other medical imaging modalities.' },
        { id: 7, name: 'Multi Disciplinary Design Project I / Real life Project II', description: 'Capstone project combining biomedical engineering principles with real-world applications.' }
    ],
    materials: [
        // Hospital Information System
        { id: 1, classId: 1, title: 'Introduction to Hospital Information Systems', type: 'PDF', size: '2.4 MB', date: '2026-01-15', downloads: 45 },
        { id: 2, classId: 1, title: 'Health Informatics Fundamentals', type: 'PDF', size: '3.1 MB', date: '2026-01-18', downloads: 32 },
        { id: 3, classId: 1, title: 'Hospital Management Software Demo', type: 'Video', size: '150 MB', date: '2026-01-20', downloads: 28 },
        
        // Biomedical Sensors
        { id: 4, classId: 2, title: 'Biosensors - Principles and Applications', type: 'PDF', size: '4.2 MB', date: '2026-01-10', downloads: 67 },
        { id: 5, classId: 2, title: 'Transducers in Medical Devices', type: 'PPTX', size: '8.5 MB', date: '2026-01-22', downloads: 89 },
        { id: 6, classId: 2, title: 'Lab: Pulse Oximeter Construction', type: 'DOCX', size: '1.2 MB', date: '2026-01-25', downloads: 56 },
        
        // Biomedical Signals
        { id: 7, classId: 3, title: 'ECG Signal Processing Tutorial', type: 'PDF', size: '5.8 MB', date: '2026-01-12', downloads: 74 },
        { id: 8, classId: 3, title: 'MATLAB Exercises for Signal Analysis', type: 'ZIP', size: '12 MB', date: '2026-01-19', downloads: 45 },
        
        // Medical Electronics
        { id: 9, classId: 4, title: 'Troubleshooting Medical Equipment Guide', type: 'PDF', size: '6.2 MB', date: '2026-01-14', downloads: 90 },
        { id: 10, classId: 4, title: 'Safety Standards in Medical Electronics', type: 'PDF', size: '2.8 MB', date: '2026-01-21', downloads: 67 },
        
        // Electronic Circuits
        { id: 11, classId: 5, title: 'Amplifier Circuits - Lecture Notes', type: 'PDF', size: '3.5 MB', date: '2026-01-16', downloads: 78 },
        { id: 12, classId: 5, title: 'Semiconductor Devices Overview', type: 'PPTX', size: '4.1 MB', date: '2026-01-23', downloads: 54 },
        
        // Medical Imaging
        { id: 13, classId: 6, title: 'Principles of X-Ray Imaging', type: 'PDF', size: '4.8 MB', date: '2026-01-11', downloads: 82 },
        { id: 14, classId: 6, title: 'MRI Physics and Applications', type: 'PDF', size: '6.5 MB', date: '2026-01-24', downloads: 71 },
        { id: 15, classId: 6, title: 'Ultrasound Imaging Techniques', type: 'Video', size: '200 MB', date: '2026-01-26', downloads: 63 },
        
        // Capstone Project
        { id: 16, classId: 7, title: 'Project Guidelines and Requirements', type: 'PDF', size: '1.8 MB', date: '2026-01-08', downloads: 95 },
        { id: 17, classId: 7, title: 'Project Proposal Template', type: 'DOCX', size: '450 KB', date: '2026-01-09', downloads: 88 },
        { id: 18, classId: 7, title: 'Previous Year Projects Showcase', type: 'PDF', size: '15 MB', date: '2026-01-10', downloads: 76 }
    ],
    results: [
        { id: 1, subject: 'Hospital Information System', assignment: 'Midterm Examination', score: 85, grade: 'B+', comment: 'Excellent understanding of health informatics concepts!' },
        { id: 2, subject: 'Biomedical Sensors', assignment: 'Lab Report 1', score: 92, grade: 'A', comment: 'Outstanding sensor calibration analysis.' },
        { id: 3, subject: 'Biomedical Signals', assignment: 'Signal Processing Project', score: 78, grade: 'C+', comment: 'Good work, but MATLAB implementation needs improvement.' },
        { id: 4, subject: 'Medical Electronics', assignment: 'Troubleshooting Assessment', score: 88, grade: 'A-', comment: 'Strong diagnostic skills demonstrated.' },
        { id: 5, subject: 'Electronic Circuits', assignment: 'Circuit Design Quiz', score: 95, grade: 'A', comment: 'Perfect score! Excellent circuit analysis.' },
        { id: 6, subject: 'Medical Imaging', assignment: 'Imaging Modalities Test', score: 90, grade: 'A-', comment: 'Thorough understanding of imaging principles.' },
        { id: 7, subject: 'Capstone Project', assignment: 'Project Proposal', score: 86, grade: 'B+', comment: 'Solid proposal with clear objectives.' }
    ]
};

// ============================================
// GLOBAL VARIABLES
// ============================================

let currentUser = null;
let authMode = 'login';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Check for saved session
    const savedUser = localStorage.getItem('bpf_currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        loginSuccess();
    }
    
    // Setup auth form
    document.getElementById('auth-form').addEventListener('submit', handleAuth);
});

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

function handleAuth(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    if (authMode === 'login') {
        const user = db.users.find(u => u.username === username && u.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('bpf_currentUser', JSON.stringify(user));
            loginSuccess();
        } else {
            showNotification('Invalid credentials! Try student/123 or teacher/123', 'error');
        }
    } else {
        // Register new user
        const exists = db.users.find(u => u.username.toLowerCase() === username.toLowerCase());
        if (exists) {
            showNotification('Username already exists!', 'error');
        } else {
            const newUser = { 
                username, 
                password, 
                role, 
                name: username.charAt(0).toUpperCase() + username.slice(1),
                enrolledClasses: role === 'student' ? [1, 2, 3, 4, 5, 6, 7] : [] 
            };
            db.users.push(newUser);
            currentUser = newUser;
            localStorage.setItem('bpf_currentUser', JSON.stringify(newUser));
            loginSuccess();
            showNotification('Registration successful! Welcome to Biomedic Principal Flow!', 'success');
        }
    }
}

function loginSuccess() {
    document.getElementById('auth-page').classList.remove('active');
    document.getElementById('auth-page').classList.add('hidden');
    document.getElementById('navbar').classList.remove('hidden');
    
    if (currentUser.role === 'teacher') {
        document.getElementById('adminLink').classList.remove('hidden');
        showPage('admin');
    } else {
        document.getElementById('adminLink').classList.add('hidden');
        showPage('dashboard');
    }
    
    loadDashboard();
    loadClasses();
    loadMaterials();
    loadResults();
    populateAdminForms();
    
    if (currentUser.role === 'student') {
        document.getElementById('student-name').textContent = currentUser.name || 'Student';
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('bpf_currentUser');
    
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
        p.classList.add('hidden');
    });
    
    document.getElementById('auth-page').classList.remove('hidden');
    document.getElementById('auth-page').classList.add('active');
    document.getElementById('navbar').classList.add('hidden');
    document.getElementById('adminLink').classList.add('hidden');
    document.getElementById('auth-form').reset();
    
    showNotification('You have been logged out.', 'info');
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.remove('hidden');
        targetPage.classList.add('active');
    }
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const isFlex = navLinks.style.display === 'flex';
    
    if (isFlex) {
        navLinks.style.display = '';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        navLinks.style.gap = '10px';
    }
}

// ============================================
// DASHBOARD FUNCTIONS
// ============================================

function loadDashboard() {
    if (!currentUser || currentUser.role !== 'student') return;
    
    const enrolledCount = currentUser.enrolledClasses.length;
    document.getElementById('stat-classes').textContent = enrolledCount;
    
    const scores = db.results.map(r => r.score);
    const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    document.getElementById('stat-score').textContent = avg + '%';
    
    const progressBar = document.getElementById('overall-progress');
    if (progressBar) {
        progressBar.style.width = avg + '%';
        document.getElementById('progress-text').textContent = `Overall Performance: ${avg}%`;
    }
    
    const materialsList = document.getElementById('dash-materials-list');
    if (materialsList) {
        materialsList.innerHTML = '';
        const recentMaterials = db.materials.slice(-4).reverse();
        recentMaterials.forEach(m => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${m.title}</span>
                <span style="color: var(--primary); font-size: 0.85rem;">${m.type}</span>
            `;
            materialsList.appendChild(li);
        });
    }
}

// ============================================
// CLASSES FUNCTIONS
// ============================================

function loadClasses() {
    const container = document.getElementById('classes-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    db.classes.forEach(cls => {
        const isEnrolled = currentUser && currentUser.enrolledClasses && currentUser.enrolledClasses.includes(cls.id);
        
        const card = document.createElement('div');
        card.className = 'class-card';
        
        let buttonHtml = '';
        if (currentUser && currentUser.role === 'student') {
            if (isEnrolled) {
                buttonHtml = '<button class="btn-secondary" disabled>✓ Enrolled</button>';
            } else {
                buttonHtml = `<button class="btn-enroll" onclick="enrollClass(${cls.id})">Enroll Now</button>`;
            }
        } else if (currentUser && currentUser.role === 'teacher') {
            buttonHtml = '<span style="color: var(--text-light); font-size: 0.9rem;">Teacher View</span>';
        }
        
        const materialCount = db.materials.filter(m => m.classId === cls.id).length;
        
        card.innerHTML = `
            <div class="class-header">
                <h3>${cls.name}</h3>
                <span class="class-badge">${materialCount} Materials</span>
            </div>
            <p>${cls.description}</p>
            <div class="class-footer">
                ${buttonHtml}
            </div>
        `;
        
        container.appendChild(card);
    });
}

function enrollClass(classId) {
    if (!currentUser) {
        showNotification('Please login to enroll in classes.', 'error');
        return;
    }
    
    if (!currentUser.enrolledClasses) {
        currentUser.enrolledClasses = [];
    }
    
    if (currentUser.enrolledClasses.includes(classId)) {
        showNotification('You are already enrolled in this class!', 'warning');
        return;
    }
    
    currentUser.enrolledClasses.push(classId);
    
    const userIndex = db.users.findIndex(u => u.username === currentUser.username);
    if (userIndex !== -1) {
        db.users[userIndex] = currentUser;
        localStorage.setItem('bpf_currentUser', JSON.stringify(currentUser));
    }
    
    showNotification('Successfully enrolled in class!', 'success');
    loadClasses();
    loadDashboard();
    loadMaterials();
}

// ============================================
// MATERIALS FUNCTIONS
// ============================================

function loadMaterials() {
    const container = document.getElementById('materials-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    let filteredMaterials = db.materials;
    if (currentUser && currentUser.role === 'student' && currentUser.enrolledClasses) {
        filteredMaterials = db.materials.filter(m => 
            currentUser.enrolledClasses.includes(m.classId)
        );
    }
    
    if (filteredMaterials.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>📭 No materials available.</p>
                <p style="font-size: 0.9rem; color: var(--text-light);">Enroll in classes to access learning materials.</p>
            </div>
        `;
        return;
    }
    
    filteredMaterials.forEach(mat => {
        const className = db.classes.find(c => c.id === mat.classId)?.name || 'Unknown Class';
        
        const item = document.createElement('div');
        item.className = 'material-item';
        item.innerHTML = `
            <div class="material-icon">${getFileIcon(mat.type)}</div>
            <div class="material-info">
                <h4>${mat.title}</h4>
                <p>${className} • ${mat.type} • ${mat.size} • ${mat.date}</p>
            </div>
            <div class="material-actions">
                <button class="btn-primary" style="width: auto; padding: 8px 16px;" onclick="downloadMaterial(${mat.id})">
                    ⬇ Download
                </button>
            </div>
        `;
        container.appendChild(item);
    });
}

function getFileIcon(type) {
    const icons = {
        'PDF': '📄',
        'DOCX': '📝',
        'PPTX': '📊',
        'Video': '🎬',
        'ZIP': '📦'
    };
    return icons[type] || '📁';
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

function downloadMaterial(materialId) {
    const material = db.materials.find(m => m.id === materialId);
    if (material) {
        showNotification(`Downloading: ${material.title}`, 'success');
    }
}

// ============================================
// RESULTS FUNCTIONS
// ============================================

function loadResults() {
    const tableBody = document.getElementById('results-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (db.results.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px; color: var(--text-light);">
                    No results available yet.
                </td>
            </tr>
        `;
        return;
    }
    
    db.results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${result.subject}</strong></td>
            <td>${result.assignment}</td>
            <td><span class="score-badge">${result.score}%</span></td>
            <td><span class="grade-badge ${getGradeClass(result.grade)}">${result.grade}</span></td>
            <td style="color: var(--text-light); font-style: italic;">"${result.comment}"</td>
        `;
        tableBody.appendChild(row);
    });
}

function getGradeClass(grade) {
    if (grade.startsWith('A')) return 'grade-a';
    if (grade.startsWith('B')) return 'grade-b';
    if (grade.startsWith('C')) return 'grade-c';
    return 'grade-d';
}

// ============================================
// ADMIN FUNCTIONS
// ============================================

function populateAdminForms() {
    if (currentUser && currentUser.role === 'teacher') {
        const select = document.getElementById('upload-class');
        if (select) {
            select.innerHTML = '<option value="">Select Course</option>';
            db.classes.forEach(cls => {
                const option = document.createElement('option');
                option.value = cls.id;
                option.textContent = cls.name;
                select.appendChild(option);
            });
        }
    }
}

function handleUpload(e) {
    e.preventDefault();
    
    const classId = parseInt(document.getElementById('upload-class').value);
    const title = document.getElementById('upload-title').value;
    const type = document.getElementById('upload-type').value;
    
    if (!classId || !title || !type) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    const newMaterial = {
        id: db.materials.length + 1,
        classId: classId,
        title: title,
        type: type,
        size: Math.floor(Math.random() * 10) + 1 + ' MB',
        date: new Date().toISOString().split('T')[0],
        downloads: 0
    };
    
    db.materials.push(newMaterial);
    
    showNotification('Material uploaded successfully!', 'success');
    e.target.reset();
    loadMaterials();
}

function handleAddClass(e) {
    e.preventDefault();
    
    const name = document.getElementById('new-class-name').value;
    const description = document.getElementById('new-class-desc').value;
    
    if (!name || !description) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    const newClass = {
        id: db.classes.length + 1,
        name: name,
        description: description
    };
    
    db.classes.push(newClass);
    
    showNotification('Course created successfully!', 'success');
    e.target.reset();
    populateAdminForms();
}

function handleAddResult(e) {
    e.preventDefault();
    
    const subject = document.getElementById('result-subject').value;
    const assignment = document.getElementById('result-assignment').value;
    const score = parseInt(document.getElementById('result-score').value);
    const comment = document.getElementById('result-comment').value;
    
    if (!subject || !assignment || !score || !comment) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    let grade = 'F';
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B+';
    else if (score >= 70) grade = 'B';
    else if (score >= 60) grade = 'C+';
    else if (score >= 50) grade = 'C';
    else if (score >= 40) grade = 'D';
    
    const newResult = {
        id: db.results.length + 1,
        subject: subject,
        assignment: assignment,
        score: score,
        grade: grade,
        comment: comment
    };
    
    db.results.push(newResult);
    
    showNotification('Result added successfully!', 'success');
    e.target.reset();
    loadResults();
    loadDashboard();
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    const colors = {
        success: '#27AE60',
        error: '#E74C3C',
        warning: '#F39C12',
        info: '#3498DB'
    };
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 3000);
}