// ============================================
// TDBE 1:2 2025/2026 - COMPLETE JAVASCRIPT
// Full Functional LMS for Students & Teachers
// ============================================

const BASE_URL = 'https://gideontre.github.io/biomedic-principal-flow/downloads/';

// ============================================
// MOCK DATABASE
// ============================================
const db = {
    users: [
        { id: 1, email: 'student@gmail.com', password: '123', role: 'student', name: 'Gideon Tre', studentId: 'TDBE/2025/001', enrolledClasses: [1,2,3,4,5,6,7], attendance: 98 },
        { id: 2, email: 'teacher@gmail.com', password: '123', role: 'teacher', name: 'Dr. Smith', department: 'Biomedical Engineering' },
        { id: 3, email: 'admin@gmail.com', password: 'admin', role: 'admin', name: 'Administrator' }
    ],
    classes: [
        { id: 1, name: 'Hospital Information System and Management', code: 'HIS 301', description: 'Learn about healthcare IT systems, hospital management software, health informatics, and electronic health records.', teacher: 'Dr. Smith', credits: 3, schedule: 'Mon, Wed, Fri - 8:00 AM' },
        { id: 2, name: 'Biomedical Sensors and Measurement Devices', code: 'BMD 302', description: 'Study of biosensors, transducers, medical measurement equipment, and signal acquisition systems.', teacher: 'Prof. Johnson', credits: 4, schedule: 'Tue, Thu - 10:00 AM' },
        { id: 3, name: 'Biomedical Signals and Systems', code: 'BSS 303', description: 'Analysis of biological signals, ECG, EEG, signal processing, and system modeling.', teacher: 'Dr. Williams', credits: 3, schedule: 'Mon, Wed - 10:00 AM' },
        { id: 4, name: 'Troubleshooting of Medical Electronics', code: 'TME 304', description: 'Diagnostic techniques, repair procedures, and maintenance of medical electronic equipment.', teacher: 'Eng. Brown', credits: 3, schedule: 'Fri - 2:00 PM' },
        { id: 5, name: 'Electronic Circuits and Devices', code: 'ECD 305', description: 'Fundamentals of electronic circuits, amplifiers, semiconductor devices, and circuit design.', teacher: 'Prof. Davis', credits: 4, schedule: 'Tue, Thu - 8:00 AM' },
        { id: 6, name: 'Medical Imaging Techniques', code: 'MIT 306', description: 'X-ray, CT, MRI, ultrasound, PET scans, and other medical imaging modalities.', teacher: 'Dr. Miller', credits: 3, schedule: 'Wed, Fri - 10:00 AM' },
        { id: 7, name: 'Multi Disciplinary Design Project I / Real life Project II', code: 'MDP 307', description: 'Capstone project combining biomedical engineering principles with real-world applications.', teacher: 'Dr. Wilson', credits: 6, schedule: 'Mon-Fri - Project Work' }
    ],
    materials: [
        { id: 1, classId: 1, title: 'Introduction to Hospital Information Systems', type: 'PDF', size: '2.4 MB', date: '2026-01-15', fileUrl: 'HIS-Introduction.pdf', downloads: 45 },
        { id: 2, classId: 1, title: 'Health Informatics Fundamentals', type: 'PDF', size: '3.1 MB', date: '2026-01-18', fileUrl: 'Health-Informatics.pdf', downloads: 32 },
        { id: 3, classId: 2, title: 'Biosensors - Principles and Applications', type: 'PDF', size: '4.2 MB', date: '2026-01-10', fileUrl: 'Biosensors-Principles.pdf', downloads: 67 },
        { id: 4, classId: 2, title: 'Transducers in Medical Devices', type: 'PPTX', size: '8.5 MB', date: '2026-01-22', fileUrl: 'Transducers-Presentation.pptx', downloads: 89 },
        { id: 5, classId: 3, title: 'ECG Signal Processing Tutorial', type: 'PDF', size: '5.8 MB', date: '2026-01-12', fileUrl: 'ECG-Processing-Tutorial.pdf', downloads: 74 },
        { id: 6, classId: 4, title: 'Troubleshooting Medical Equipment Guide', type: 'PDF', size: '6.2 MB', date: '2026-01-14', fileUrl: 'Troubleshooting-Guide.pdf', downloads: 90 },
        { id: 7, classId: 5, title: 'Amplifier Circuits - Lecture Notes', type: 'PDF', size: '3.5 MB', date: '2026-01-16', fileUrl: 'Amplifier-Circuits.pdf', downloads: 78 },
        { id: 8, classId: 6, title: 'Principles of X-Ray Imaging', type: 'PDF', size: '4.8 MB', date: '2026-01-11', fileUrl: 'X-Ray-Principles.pdf', downloads: 82 },
        { id: 9, classId: 7, title: 'Project Guidelines and Requirements', type: 'PDF', size: '1.8 MB', date: '2026-01-08', fileUrl: 'Project-Guidelines.pdf', downloads: 95 }
    ],
    results: [
        { id: 1, subject: 'Hospital Information System', assignment: 'Midterm Examination', score: 85, grade: 'B+', comment: 'Excellent understanding of health informatics concepts!' },
        { id: 2, subject: 'Biomedical Sensors', assignment: 'Lab Report 1', score: 92, grade: 'A', comment: 'Outstanding sensor calibration analysis.' },
        { id: 3, subject: 'Biomedical Signals', assignment: 'Signal Processing Project', score: 78, grade: 'C+', comment: 'Good work, but MATLAB implementation needs improvement.' },
        { id: 4, subject: 'Medical Electronics', assignment: 'Troubleshooting Assessment', score: 88, grade: 'A-', comment: 'Strong diagnostic skills demonstrated.' },
        { id: 5, subject: 'Electronic Circuits', assignment: 'Circuit Design Quiz', score: 95, grade: 'A', comment: 'Perfect score! Excellent circuit analysis.' },
        { id: 6, subject: 'Medical Imaging', assignment: 'Imaging Modalities Test', score: 90, grade: 'A-', comment: 'Thorough understanding of imaging principles.' },
        { id: 7, subject: 'Capstone Project', assignment: 'Project Proposal', score: 86, grade: 'B+', comment: 'Solid proposal with clear objectives.' }
    ],
    assignments: [
        { id: 1, classId: 1, title: 'Hospital System Analysis', description: 'Analyze a hospital information system and create a report', dueDate: '2026-02-15', status: 'pending', submitted: false },
        { id: 2, classId: 2, title: 'Sensor Design Project', description: 'Design a biosensor for glucose monitoring', dueDate: '2026-02-20', status: 'pending', submitted: false },
        { id: 3, classId: 3, title: 'ECG Analysis Report', description: 'Analyze ECG signals and identify abnormalities', dueDate: '2026-02-10', status: 'submitted', submittedDate: '2026-02-08' }
    ],
    announcements: [
        { id: 1, title: 'Welcome to TDBE 1:2 2025/2026', content: 'Access all your learning materials and track your progress here.', date: '2026-01-26', type: 'urgent' },
        { id: 2, title: 'Exam Schedule Released', content: 'Midterm examination schedule has been posted. Check your email for details.', date: '2026-01-25', type: 'info' },
        { id: 3, title: 'New Materials Uploaded', content: 'Week 3 lecture notes have been uploaded to the Materials section.', date: '2026-01-24', type: 'success' }
    ],
    forum: [
        { id: 1, user: 'Dr. Smith', avatar: '👨‍🏫', content: 'Welcome to the discussion forum! Feel free to ask questions about Hospital Information Systems.', date: '2026-01-26', replies: 5 },
        { id: 2, user: 'John Doe', avatar: '👨‍🎓', content: 'Can someone explain the difference between HIS and EMR systems?', date: '2026-01-25', replies: 3 }
    ],
    settings: {
        siteName: 'TDBE 1:2 2025/2026',
        primaryColor: '#2E7D32',
        backgroundImage: '',
        darkMode: false
    }
};

// ============================================
// GLOBAL VARIABLES
// ============================================
let currentUser = null;
let authMode = 'login';
let selectedFile = null;
let currentViewingMaterial = null;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    checkSavedSession();
    document.getElementById('auth-form').addEventListener('submit', handleAuth);
});

function checkSavedSession() {
    const savedUser = localStorage.getItem('tdbe_currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        loginSuccess();
    }
}

// ============================================
// AUTHENTICATION
// ============================================
function toggleAuthMode(mode) {
    authMode = mode;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('nameGroup').style.display = mode === 'register' ? 'block' : 'none';
}

function handleAuth(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const fullname = document.getElementById('fullname').value;
    
    if (authMode === 'login') {
        const user = db.users.find(u => u.email === email && u.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('tdbe_currentUser', JSON.stringify(user));
            loginSuccess();
        } else {
            showNotification('Invalid credentials! Try: student@gmail.com / 123', 'error');
        }
    } else {
        const exists = db.users.find(u => u.email.toLowerCase() === email);
        if (exists) {
            showNotification('Email already registered!', 'error');
        } else {
            const newUser = { 
                id: db.users.length + 1, email, password, role, 
                name: fullname || email.split('@')[0],
                enrolledClasses: role === 'student' ? [1,2] : [],
                attendance: 100
            };
            db.users.push(newUser);
            currentUser = newUser;
            localStorage.setItem('tdbe_currentUser', JSON.stringify(newUser));
            loginSuccess();
            showNotification('Registration successful! Welcome to TDBE 1:2!', 'success');
        }
    }
}

function loginSuccess() {
    document.getElementById('auth-page').classList.remove('active');
    document.getElementById('auth-page').classList.add('hidden');
    document.getElementById('navbar').classList.remove('hidden');
    
    if (currentUser.role === 'teacher' || currentUser.role === 'admin') {
        document.getElementById('adminLink').classList.remove('hidden');
    }
    showPage(currentUser.role === 'teacher' ? 'admin' : 'dashboard');
    loadAllData();
}

function logout() {
    currentUser = null;
    localStorage.removeItem('tdbe_currentUser');
    document.querySelectorAll('.page').forEach(p => { p.classList.remove('active'); p.classList.add('hidden'); });
    document.getElementById('auth-page').classList.remove('hidden');
    document.getElementById('auth-page').classList.add('active');
    document.getElementById('navbar').classList.add('hidden');
    document.getElementById('adminLink').classList.add('hidden');
    document.getElementById('auth-form').reset();
    showNotification('You have been logged out.', 'info');
}

// ============================================
// NAVIGATION
// ============================================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => { page.classList.remove('active'); page.classList.add('hidden'); });
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) { targetPage.classList.remove('hidden'); targetPage.classList.add('active'); }
}

function toggleNavbar() {
    document.getElementById('navbar').classList.toggle('collapsed');
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    db.settings.darkMode = !db.settings.darkMode;
}

function togglePassword() {
    const input = document.getElementById('password');
    input.type = input.type === 'password' ? 'text' : 'password';
}

// ============================================
// LOAD ALL DATA
// ============================================
function loadAllData() {
    if (currentUser.role === 'student') {
        document.getElementById('student-name').textContent = currentUser.name;
        loadDashboard();
        loadClasses();
        loadMaterials();
        loadResults();
        loadSchedule();
        loadAssignments();
        loadForum();
        loadProfile();
    } else {
        loadAdminPanel();
    }
}

// ============================================
// DASHBOARD
// ============================================
function loadDashboard() {
    if (!currentUser || currentUser.role !== 'student') return;
    
    // Stats
    document.getElementById('stat-classes').textContent = currentUser.enrolledClasses.length;
    document.getElementById('stat-materials').textContent = db.materials.length;
    
    const scores = db.results.map(r => r.score);
    const avg = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    document.getElementById('stat-score').textContent = avg + '%';
    
    // Progress bar
    if (document.getElementById('overall-progress')) {
        document.getElementById('overall-progress').style.width = avg + '%';
        document.getElementById('progress-text').textContent = `Overall Performance: ${avg}%`;
    }
    
    // GPA
    const gpa = calculateGPA();
    document.getElementById('gpa-value').textContent = gpa.toFixed(2);
    
    // Recent materials
    const materialsList = document.getElementById('dash-materials-list');
    if (materialsList) {
        materialsList.innerHTML = '';
        db.materials.slice(-3).reverse().forEach(m => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${m.title}</span><span class="file-type">${m.type}</span>`;
            materialsList.appendChild(li);
        });
    }
    
    // Pending assignments
    const assignList = document.getElementById('dash-assignments-list');
    if (assignList) {
        assignList.innerHTML = '';
        db.assignments.filter(a => a.status === 'pending').slice(0, 3).forEach(a => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${a.title}</span><span class="file-type" style="background:rgba(243,156,18,0.1);color:var(--warning)">Due: ${a.dueDate}</span>`;
            assignList.appendChild(li);
        });
    }
}

function calculateGPA() {
    const gradePoints = { 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'F': 0.0 };
    let total = 0, count = 0;
    db.results.forEach(r => { total += gradePoints[r.grade] || 0; count++; });
    return count > 0 ? total / count : 0;
}

// ============================================
// CLASSES
// ============================================
function loadClasses() {
    const container = document.getElementById('classes-container');
    if (!container) return;
    
    container.innerHTML = '';
    db.classes.forEach(cls => {
        const isEnrolled = currentUser.enrolledClasses.includes(cls.id);
        const materialCount = db.materials.filter(m => m.classId === cls.id).length;
        
        const card = document.createElement('div');
        card.className = 'class-card';
        card.innerHTML = `
            <div class="class-header">
                <h3>${cls.code}: ${cls.name}</h3>
                <span class="class-badge">${materialCount} Materials</span>
            </div>
            <p>${cls.description}</p>
            <div class="class-meta">
                <span><i class="fas fa-user"></i> ${cls.