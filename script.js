// ============================================
// TDBE 1:2 2025/2026 - COMPLETE JAVASCRIPT
// Full Functional LMS - Open Access Version
// ============================================

// Base URL for downloads
const BASE_URL = 'https://gideontre.github.io/biomedic-principal-flow/downloads/';

// ============================================
// DATA
// ============================================

const db = {
    classes: [
        { id: 1, code: 'HIS 301', name: 'Hospital Information System and Management', teacher: 'Dr. Smith', schedule: 'Mon, Wed, Fri - 8:00 AM', materials: 3 },
        { id: 2, code: 'BMD 302', name: 'Biomedical Sensors and Measurement Devices', teacher: 'Prof. Johnson', schedule: 'Tue, Thu - 10:00 AM', materials: 3 },
        { id: 3, code: 'BSS 303', name: 'Biomedical Signals and Systems', teacher: 'Dr. Williams', schedule: 'Mon, Wed - 10:00 AM', materials: 2 },
        { id: 4, code: 'TME 304', name: 'Troubleshooting of Medical Electronics', teacher: 'Eng. Brown', schedule: 'Fri - 2:00 PM', materials: 2 },
        { id: 5, code: 'ECD 305', name: 'Electronic Circuits and Devices', teacher: 'Prof. Davis', schedule: 'Tue, Thu - 8:00 AM', materials: 2 },
        { id: 6, code: 'MIT 306', name: 'Medical Imaging Techniques', teacher: 'Dr. Miller', schedule: 'Wed, Fri - 10:00 AM', materials: 3 },
        { id: 7, code: 'MDP 307', name: 'Multi Disciplinary Design Project I / Real life Project II', teacher: 'Dr. Wilson', schedule: 'Mon-Fri - Project Work', materials: 3 }
    ],
    materials: [
        { id: 1, classId: 1, code: 'HIS 301', title: 'Introduction to Hospital Information Systems', type: 'PDF', size: '2.4 MB', date: '2026-01-15', content: 'This PDF covers the fundamentals of Hospital Information Systems including:\n\n• Overview of HIS\n• Electronic Health Records\n• Hospital Management Software\n• Health Informatics' },
        { id: 2, classId: 1, code: 'HIS 301', title: 'Health Informatics Fundamentals', type: 'PDF', size: '3.1 MB', date: '2026-01-18', content: 'This document covers:\n\n• Health Information Systems\n• Data Management in Healthcare\n• Privacy and Security\n• Interoperability Standards' },
        { id: 3, classId: 1, code: 'HIS 301', title: 'Hospital Management Software Demo', type: 'Video', size: '150 MB', date: '2026-01-20', content: 'Video demonstration of hospital management software features.' },
        { id: 4, classId: 2, code: 'BMD 302', title: 'Biosensors - Principles and Applications', type: 'PDF', size: '4.2 MB', date: '2026-01-10', content: 'This PDF covers:\n\n• Types of Biosensors\n• Working Principles\n• Medical Applications\n• Signal Transduction' },
        { id: 5, classId: 2, code: 'BMD 302', title: 'Transducers in Medical Devices', type: 'PPTX', size: '8.5 MB', date: '2026-01-22', content: 'Presentation on transducers used in medical devices.' },
        { id: 6, classId: 2, code: 'BMD 302', title: 'Lab: Pulse Oximeter Construction', type: 'DOCX', size: '1.2 MB', date: '2026-01-25', content: 'Laboratory guide for building a pulse oximeter.' },
        { id: 7, classId: 3, code: 'BSS 303', title: 'ECG Signal Processing Tutorial', type: 'PDF', size: '5.8 MB', date: '2026-01-12', content: 'Complete guide to ECG signal processing techniques.' },
        { id: 8, classId: 3, code: 'BSS 303', title: 'MATLAB Exercises for Signal Analysis', type: 'ZIP', size: '12 MB', date: '2026-01-19', content: 'MATLAB exercises and code for biomedical signal analysis.' },
        { id: 9, classId: 4, code: 'TME 304', title: 'Troubleshooting Medical Equipment Guide', type: 'PDF', size: '6.2 MB', date: '2026-01-14', content: 'Comprehensive troubleshooting guide for medical electronics.' },
        { id: 10, classId: 4, code: 'TME 304', title: 'Safety Standards in Medical Electronics', type: 'PDF', size: '2.8 MB', date: '2026-01-21', content: 'IEC safety standards for medical electrical equipment.' },
        { id: 11, classId: 5, code: 'ECD 305', title: 'Amplifier Circuits - Lecture Notes', type: 'PDF', size: '3.5 MB', date: '2026-01-16', content: 'Detailed notes on amplifier circuit design.' },
        { id: 12, classId: 5, code: 'ECD 305', title: 'Semiconductor Devices Overview', type: 'PPTX', size: '4.1 MB', date: '2026-01-23', content: 'Presentation on semiconductor devices and their applications.' },
        { id: 13, classId: 6, code: 'MIT 306', title: 'Principles of X-Ray Imaging', type: 'PDF', size: '4.8 MB', date: '2026-01-11', content: 'Physics and principles of X-ray imaging technology.' },
        { id: 14, classId: 6, code: 'MIT 306', title: 'MRI Physics and Applications', type: 'PDF', size: '6.5 MB', date: '2026-01-24', content: 'Comprehensive guide to MRI physics and clinical applications.' },
        { id: 15, classId: 6, code: 'MIT 306', title: 'Ultrasound Imaging Techniques', type: 'Video', size: '200 MB', date: '2026-01-26', content: 'Video lecture on ultrasound imaging techniques.' },
        { id: 16, classId: 7, code: 'MDP 307', title: 'Project Guidelines and Requirements', type: 'PDF', size: '1.8 MB', date: '2026-01-08', content: 'Complete guidelines for the capstone project.' },
        { id: 17, classId: 7, code: 'MDP 307', title: 'Project Proposal Template', type: 'DOCX', size: '450 KB', date: '2026-01-09', content: 'Template for writing your project proposal.' },
        { id: 18, classId: 7, code: 'MDP 307', title: 'Previous Year Projects Showcase', type: 'PDF', size: '15 MB', date: '2026-01-10', content: 'Examples of previous capstone projects.' }
    ],
    results: [
        { subject: 'Hospital Information System', assignment: 'Midterm Examination', score: 85, grade: 'B+', comment: 'Excellent understanding of health informatics concepts!' },
        { subject: 'Biomedical Sensors', assignment: 'Lab Report 1', score: 92, grade: 'A', comment: 'Outstanding sensor calibration analysis.' },
        { subject: 'Biomedical Signals', assignment: 'Signal Processing Project', score: 78, grade: 'C+', comment: 'Good work, but MATLAB implementation needs improvement.' },
        { subject: 'Medical Electronics', assignment: 'Troubleshooting Assessment', score: 88, grade: 'A-', comment: 'Strong diagnostic skills demonstrated.' },
        { subject: 'Electronic Circuits', assignment: 'Circuit Design Quiz', score: 95, grade: 'A', comment: 'Perfect score! Excellent circuit analysis.' },
        { subject: 'Medical Imaging', assignment: 'Imaging Modalities Test', score: 90, grade: 'A-', comment: 'Thorough understanding of imaging principles.' },
        { subject: 'Capstone Project', assignment: 'Project Proposal', score: 86, grade: 'B+', comment: 'Solid proposal with clear objectives.' }
    ],
    assignments: [
        { title: 'Hospital System Analysis', course: 'HIS 301', description: 'Analyze a hospital information system and create a report', dueDate: '2026-02-15', status: 'pending' },
        { title: 'Sensor Design Project', course: 'BMD 302', description: 'Design a biosensor for glucose monitoring', dueDate: '2026-02-20', status: 'pending' },
        { title: 'ECG Analysis Report', course: 'BSS 303', description: 'Analyze ECG signals and identify abnormalities', dueDate: '2026-02-10', status: 'submitted' }
    ],
    announcements: [
        { title: 'Welcome to TDBE 1:2 2025/2026', content: 'Access all your learning materials and track your progress here.', date: 'Just now', type: 'urgent' },
        { title: 'Exam Schedule Released', content: 'Midterm examination schedule has been posted.', date: '1 day ago', type: 'info' },
        { title: 'New Materials Uploaded', content: 'Week 3 lecture notes have been uploaded.', date: '2 days ago', type: 'success' }
    ],
    forum: [
        { user: 'Dr. Smith', avatar: '👨‍🏫', content: 'Welcome to the discussion forum! Feel free to ask questions about Hospital Information Systems.', date: '2026-01-26', replies: 5 },
        { user: 'Student A', avatar: '👨‍🎓', content: 'Can someone explain the difference between HIS and EMR systems?', date: '2026-01-25', replies: 3 }
    ],
    profile: {
        name: 'Gideon Tre',
        email: 'student@gmail.com',
        role: 'Student',
        id: 'TDBE/2025/001',
        avatar: null
    }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    loadDashboard();
    loadMaterials();
    loadResults();
    loadSchedule();
    loadAssignments();
    loadForum();
    loadProfile();
    populateAdminSelects();
});

// ============================================
// NAVIGATION
// ============================================

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.remove('hidden');
        targetPage.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function toggleNavbar() {
    document.getElementById('navbar').classList.toggle('collapsed');
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
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
    }
}

// ============================================
// DASHBOARD
// ============================================

function loadDashboard() {
    // Update stats
    document.getElementById('stat-classes').textContent = db.classes.length;
    document.getElementById('stat-materials').textContent = db.materials.length;
    
    // Calculate average
    const scores = db.results.map(r => r.score);
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    document.getElementById('stat-score').textContent = avg + '%';
    document.getElementById('overall-progress').style.width = avg + '%';
    document.getElementById('progress-text').textContent = 'Overall Performance: ' + avg + '%';
    
    // Calculate GPA
    const gpa = calculateGPA();
    document.getElementById('gpa-value').textContent = gpa.toFixed(2);
    
    // Load recent materials
    const materialsList = document.getElementById('dash-materials-list');
    if (materialsList) {
        materialsList.innerHTML = '';
        db.materials.slice(0, 5).forEach(m => {
            const li = document.createElement('li');
            li.innerHTML = '<span>' + m.title + '</span><span class="file-type">' + m.type + '</span>';
            materialsList.appendChild(li);
        });
    }
}

function calculateGPA() {
    const gradePoints = { 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'F': 0.0 };
    let total = 0;
    db.results.forEach(r => {
        total += gradePoints[r.grade] || 0;
    });
    return total / db.results.length;
}

// ============================================
// MATERIALS
// ============================================

function loadMaterials() {
    const container = document.getElementById('materials-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    db.materials.forEach(m => {
        const item = document.createElement('div');
        item.className = 'material-item';
        
        const icon = getFileIcon(m.type);
        
        item.innerHTML = '<div class="material-icon">' + icon + '</div>' +
            '<div class="material-info">' +
            '<h4>' + m.title + '</h4>' +
            '<p>' + m.code + ' • ' + m.type + ' • ' + m.size + ' • ' + m.date + '</p>' +
            '</div>' +
            '<div class="material-actions">' +
            '<button class="btn-primary" onclick="downloadMaterial(\'' + m.title + '\', \'' + m.type + '\')"><i class="fas fa-download"></i> Download</button>' +
            '<button class="btn-secondary" onclick="viewMaterial(\'' + m.title + '\', \'' + icon + '\', \`' + m.content + '\`)"><i class="fas fa-eye"></i> View</button>' +
            '</div>';
        
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

function downloadMaterial(title, type) {
    showNotification('📥 Downloading: ' + title, 'success');
    
    setTimeout(function() {
        alert('Download started for: ' + title + '\n\nFile type: ' + type + '\n\nIn a live website, the actual file would download now.\n\nTo make this work for real:\n1. Upload your files to a "downloads" folder\n2. Add the file URLs to the JavaScript database');
    }, 1000);
}

function viewMaterial(title, icon, content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h3>' + icon + ' ' + title + '</h3>' +
        '<button onclick="closeModal()">×</button>' +
        '</div>' +
        '<div class="modal-body">' +
        '<pre style="white-space: pre-wrap; font-family: inherit; line-height: 1.8;">' + content + '</pre>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button class="btn-primary" onclick="closeModal()">Close</button>' +
        '</div>' +
        '</div>';
    
    document.body.appendChild(modal);
    
    // Style the modal
    modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:10000;';
    const content = modal.querySelector('.modal-content');
    content.style.cssText = 'background:white;padding:2rem;border-radius:12px;max-width:600px;width:90%;max-height:80vh;overflow-y:auto;';
    modal.querySelector('.modal-header').style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;';
    modal.querySelector('.modal-header button').style.cssText = 'background:none;border:none;font-size:1.5rem;cursor:pointer;';
    modal.querySelector('.modal-body').style.cssText = 'margin-bottom:1rem;';
    modal.querySelector