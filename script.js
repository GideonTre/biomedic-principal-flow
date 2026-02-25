// ============================================
// TDBE 1:2 2025/2026 - COMPLETE JAVASCRIPT
// Full Functional LMS for Students & Teachers
// ============================================

// Base URL for file downloads
const BASE_URL = 'https://gideontre.github.io/biomedic-principal-flow/downloads/';

// ============================================
// MOCK DATABASE
// ============================================
const db = {
    users: [
        { 
            id: 1, 
            email: 'student@gmail.com', 
            password: '123', 
            role: 'student', 
            name: 'Gideon Tre', 
            studentId: 'TDBE/2025/001',
            enrolledClasses: [1, 2, 3, 4, 5, 6, 7],
            attendance: 98,
            verified: true,
            avatar: null,
            createdAt: '2025-09-01'
        },
        { 
            id: 2, 
            email: 'teacher@gmail.com', 
            password: '123', 
            role: 'teacher', 
            name: 'Dr. Smith',
            department: 'Biomedical Engineering',
            verified: true,
            createdAt: '2025-01-01'
        },
        { 
            id: 3, 
            email: 'admin@gmail.com', 
            password: 'admin', 
            role: 'admin', 
            name: 'Administrator',
            verified: true,
            createdAt: '2025-01-01'
        }
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
    verificationCodes: {},
    passwordResetTokens: {}
};

// ============================================
// GLOBAL VARIABLES
// ============================================
let currentUser = null;
let pendingRegistration = null;
let selectedFile = null;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    checkSavedSession();
    setupAllForms();
});

function checkSavedSession() {
    const savedUser = localStorage.getItem('tdbe_currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        if (currentUser.verified) {
            loginSuccess();
        } else {
            currentUser = null;
            localStorage.removeItem('tdbe_currentUser');
        }
    }
}

function setupAllForms() {
    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Register form
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    
    // Verify form
    document.getElementById('verify-form').addEventListener('submit', handleVerification);
    
    // Forgot password form
    document.getElementById('forgot-form').addEventListener('submit', handleForgotPassword);
    
    // Reset password form
    document.getElementById('reset-form').addEventListener('submit', handleResetPassword);
}

// ============================================
// NAVIGATION
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

function toggleNavbar() {
    document.getElementById('navbar').classList.toggle('collapsed');
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === 'password' ? 'text' : 'password';
}

// ============================================
// LOGIN
// ============================================
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    
    // Find user
    const user = db.users.find(u => u.email.toLowerCase() === email && u.password === password);
    
    if (user) {
        if (!user.verified) {
            showVerificationPage(email);
            showNotification('Please verify your email first!', 'warning');
            return;
        }
        
        currentUser = user;
        
        if (document.getElementById('remember-me').checked) {
            localStorage.setItem('tdbe_currentUser', JSON.stringify(user));
        }
        
        loginSuccess();
        showNotification(`Welcome back, ${user.name}!`, 'success');
    } else {
        showNotification('Invalid email or password!', 'error');
    }
}

function loginSuccess() {
    // Hide auth pages
    document.querySelectorAll('#login-page, #register-page, #verify-page, #forgot-password-page, #reset-password-page').forEach(p => {
        p.classList.remove('active');
        p.classList.add('hidden');
    });
    
    // Show navbar and dashboard
    document.getElementById('navbar').classList.remove('hidden');
    
    if (currentUser.role === 'teacher' || currentUser.role === 'admin') {
        document.getElementById('adminLink').classList.remove('hidden');
    }
    
    // Redirect based on role
    if (currentUser.role === 'teacher' || currentUser.role === 'admin') {
        showPage('admin');
    } else {
        showPage('dashboard');
    }
    
    // Load all data
    loadAllData();
}

function logout() {
    currentUser = null;
    localStorage.removeItem('tdbe_currentUser');
    
    // Reset UI
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    
    // Show login page
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('login-page').classList.add('active');
    document.getElementById('navbar').classList.add('hidden');
    document.getElementById('adminLink').classList.add('hidden');
    
    // Clear forms
    document.getElementById('login-form').reset();
    
    showNotification('You have been logged out.', 'info');
}

// ============================================
// REGISTRATION
// ============================================
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim().toLowerCase();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm').value;
    const role = document.getElementById('reg-role').value;
    
    // Validation
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    if (!email.endsWith('@gmail.com')) {
        showNotification('Please use a valid Gmail address!', 'error');
        return;
    }
    
    // Check if email exists
    if (db.users.find(u => u.email.toLowerCase() === email)) {
        showNotification('This email is already registered!', 'error');
        return;
    }
    
    // Store pending registration
    pendingRegistration = {
        name,
        email,
        password,
        role,
        verified: false
    };
    
    // Generate verification code
    const code = generateVerificationCode();
    db.verificationCodes[email] = {
        code: code,
        expires: Date.now() + 10 * 60 * 1000 // 10 minutes
    };
    
    // Simulate sending email
    simulateEmailSend(email, code, 'verification');
    
    // Show verification page
    showVerificationPage(email);
    showNotification('Registration successful! Please verify your email.', 'success');
}

function showVerificationPage(email) {
    document.getElementById('verify-email-display').textContent = email;
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('register-page').classList.remove('active');
    document.getElementById('verify-page').classList.remove('hidden');
    document.getElementById('verify-page').classList.add('active');
    
    // Clear previous code inputs
    document.querySelectorAll('.code-input').forEach(input => {
        input.value = '';
    });
    document.getElementById('code1').focus();
}

function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function simulateEmailSend(email, code, type) {
    // In a real application, this would send an actual email
    // For demo purposes, we'll show the code in a notification
    if (type === 'verification') {
        showNotification(`📧 Verification code sent to ${email}`, 'success');
        setTimeout(() => {
            showNotification(`🔑 Your verification code is: ${code}`, 'info');
        }, 2000);
    } else if (type === 'passwordReset') {
        showNotification(`📧 Password reset code sent to ${email}`, 'success');
        setTimeout(() => {
            showNotification(`🔑 Your reset code is: ${code}`, 'info');
        }, 2000);
    }
}

function moveToNext(current, nextId) {
    if (current.value.length === 1) {
        const nextInput = document.getElementById(nextId);
        if (nextInput) {
            nextInput.focus();
        }
    }
}

function handleVerification(e) {
    e.preventDefault();
    
    // Collect all code digits
    let code = '';
    for (let i = 1; i <= 6; i++) {
        code += document.getElementById('code' + i).value;
    }
    
    const email = document.getElementById('verify-email-display').textContent;
    const verificationData = db.verificationCodes[email];
    
    if (!verificationData || verificationData.code !== code) {
        showNotification('Invalid verification code!', 'error');
        return;
    }
    
    if (Date.now() > verificationData.expires) {
        showNotification('Verification code has expired!', 'error');
        return;
    }
    
    // Complete registration
    if (pendingRegistration) {
        pendingRegistration.verified = true;
        db.users.push(pendingRegistration);
        pendingRegistration = null;
    }
    
    // Clean up verification code
    delete db.verificationCodes[email];
    
    // Show success and redirect to login
    showSuccessPage('