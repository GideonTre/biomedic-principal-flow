// ============================================
// TDBE 1:2 2025/2026 - COMPLETE JAVASCRIPT
// Fully Functional LMS
// ============================================

// ============================================
// DATA - All Website Content
// ============================================

const db = {
    courses: [
        { 
            id: 1, 
            code: 'HIS 301', 
            name: 'Hospital Information System and Management', 
            teacher: 'Dr. Smith', 
            schedule: 'Mon, Wed, Fri - 8:00 AM', 
            materials: 3,
            color: '#4CAF50',
            icon: 'fa-hospital',
            description: 'Learn about healthcare IT systems, hospital management software, health informatics, and electronic health records.'
        },
        { 
            id: 2, 
            code: 'BMD 302', 
            name: 'Biomedical Sensors and Measurement Devices', 
            teacher: 'Prof. Johnson', 
            schedule: 'Tue, Thu - 10:00 AM', 
            materials: 3,
            color: '#2196F3',
            icon: 'fa-microchip',
            description: 'Study of biosensors, transducers, medical measurement equipment, and signal acquisition systems.'
        },
        { 
            id: 3, 
            code: 'BSS 303', 
            name: 'Biomedical Signals and Systems', 
            teacher: 'Dr. Williams', 
            schedule: 'Mon, Wed - 10:00 AM', 
            materials: 2,
            color: '#9C27B0',
            icon: 'fa-wave-square',
            description: 'Analysis of biological signals, ECG, EEG, signal processing, and system modeling.'
        },
        { 
            id: 4, 
            code: 'TME 304', 
            name: 'Troubleshooting of Medical Electronics', 
            teacher: 'Eng. Brown', 
            schedule: 'Fri - 2:00 PM', 
            materials: 2,
            color: '#FF9800',
            icon: 'fa-wrench',
            description: 'Diagnostic techniques, repair procedures, and maintenance of medical electronic equipment.'
        },
        { 
            id: 5, 
            code: 'ECD 305', 
            name: 'Electronic Circuits and Devices', 
            teacher: 'Prof. Davis', 
            schedule: 'Tue, Thu - 8:00 AM', 
            materials: 2,
            color: '#E91E63',
            icon: 'fa-plug',
            description: 'Fundamentals of electronic circuits, amplifiers, semiconductor devices, and circuit design.'
        },
        { 
            id: 6, 
            code: 'MIT 306', 
            name: 'Medical Imaging Techniques', 
            teacher: 'Dr. Miller', 
            schedule: 'Wed, Fri - 10:00 AM', 
            materials: 3,
            color: '#00BCD4',
            icon: 'fa-x-ray',
            description: 'X-ray, CT, MRI, ultrasound, PET scans, and other medical imaging modalities.'
        },
        { 
            id: 7, 
            code: 'MDP 307', 
            name: 'Multi Disciplinary Design Project I / Real life Project II', 
            teacher: 'Dr. Wilson', 
            schedule: 'Mon-Fri - Project Work', 
            materials: 3,
            color: '#673AB7',
            icon: 'fa-project-diagram',
            description: 'Capstone project combining biomedical engineering principles with real-world applications.'
        }
    ],
    
    materials: [
        { id: 1, courseId: 1, code: 'HIS 301', title: 'Introduction to Hospital Information Systems', type: 'PDF', size: '2.4 MB', date: '2026-01-15', content: 'This comprehensive PDF covers the fundamentals of Hospital Information Systems including:\n\n• Overview of HIS Architecture\n• Electronic Health Records (EHR)\n• Hospital Management Software\n• Health Informatics Standards\n• Patient Data Management\n• Appointment Scheduling Systems\n\nPerfect for understanding the core concepts of healthcare IT.' },
        
        { id: 2, courseId: 1, code: 'HIS 301', title: 'Health Informatics Fundamentals', type: 'PDF', size: '3.1 MB', date: '2026-01-18', content: 'Health Informatics Fundamentals covers:\n\n• Health Information Systems\n• Clinical Data Management\n• Privacy and Security (HIPAA)\n• Interoperability Standards\n• Health Data Analytics\n• Telemedicine Basics' },
        
        { id: 3, courseId: 1, code: 'HIS 301', title: 'Hospital Management Software Demo', type: 'Video', size: '150 MB', date: '2026-01-20', content: 'Video demonstration of hospital management software features including patient registration, appointment scheduling, billing, and inventory management.' },
        
        { id: 4, courseId: 2, code: 'BMD 302', title: 'Biosensors - Principles and Applications', type: 'PDF', size: '4.2 MB', date: '2026-01-10', content: 'Comprehensive guide to Biosensors:\n\n• Types of Biosensors\n• Working Principles\n• Medical Applications\n• Signal Transduction\n• Enzyme-based Sensors\n• DNA Biosensors\n• Glucose Monitoring' },
        
        { id: 5, courseId: 2, code: 'BMD 302', title: 'Transducers in Medical Devices', type: 'PPTX', size: '8.5 MB', date: '2026-01-22', content: 'Presentation covering all aspects of transducers used in medical devices including pressure sensors, temperature sensors, and flow sensors.' },
        
        { id: 6, courseId: 2, code: 'BMD 302', title: 'Lab: Pulse Oximeter Construction', type: 'DOCX', size: '1.2 MB', date: '2026-01-25', content: 'Step-by-step laboratory guide for building a pulse oximeter including circuit design, LED placement, and signal processing.' },
        
        { id: 7, courseId: 3, code: 'BSS 303', title: 'ECG Signal Processing Tutorial', type: 'PDF', size: '5.8 MB', date: '2026-01-12', content: 'Complete guide to ECG signal processing:\n\n• ECG Fundamentals\n• Signal Acquisition\n• Noise Removal\n• Feature Extraction\n• Arrhythmia Detection\n• MATLAB Implementation' },
        
        { id: 8, courseId: 3, code: 'BSS 303', title: 'MATLAB Exercises for Signal Analysis', type: 'ZIP', size: '12 MB', date: '2026-01-19', content: 'Collection of MATLAB exercises for biomedical signal analysis including ECG, EEG, and EMG processing codes.' },
        
        { id: 9, courseId: 4, code: 'TME 304', title: 'Troubleshooting Medical Equipment Guide', type: 'PDF', size: '6.2 MB', date: '2026-01-14', content: 'Comprehensive troubleshooting guide:\n\n• Safety Precautions\n• Common Faults Diagnosis\n• Equipment Testing Procedures\n• Repair Techniques\n• Preventive Maintenance' },
        
        { id: 10, courseId: 4, code: 'TME 304', title: 'Safety Standards in Medical Electronics', type: 'PDF', size: '2.8 MB', date: '2026-01-21', content: 'IEC safety standards for medical electrical equipment including IEC 60601-1 requirements and electrical safety testing.' },
        
        { id: 11, courseId: 5, code: 'ECD 305', title: 'Amplifier Circuits - Lecture Notes', type: 'PDF', size: '3.5 MB', date: '2026-01-16', content: 'Detailed notes on amplifier circuit design:\n\n• Operational Amplifiers\n• Common Configurations\n• Feedback Circuits\n• Audio Amplifiers\n• Instrumentation Amplifiers' },
        
        { id: 12, courseId: 5, code: 'ECD 305', title: 'Semiconductor Devices Overview', type: 'PPTX', size: '4.1 MB', date: '2026-01-23', content: 'Presentation on semiconductor devices including diodes, transistors, and integrated circuits.' },
        
        { id: 13, courseId: 6, code: 'MIT 306', title: 'Principles of X-Ray Imaging', type: 'PDF', size: '4.8 MB', date: '2026-01-11', content: 'Physics and principles of X-ray imaging:\n\n• X-Ray Production\n• Image Formation\n• Radiation Safety\n• Digital Radiography\n• Contrast Agents' },
        
        { id: 14, courseId: 6, code: 'MIT 306', title: 'MRI Physics and Applications', type: 'PDF', size: '6.5 MB', date: '2026-01-24', content: 'Comprehensive guide to MRI physics:\n\n• Nuclear Magnetic Resonance\n• Pulse Sequences\n• Image Weighting\n• Clinical Applications\n• Safety Considerations' },
        
        { id: 15, courseId: 6, code: 'MIT 306', title: 'Ultrasound Imaging Techniques', type: 'Video', size: '200 MB', date: '2026-01-26', content: 'Video lecture on ultrasound imaging techniques including probe operation, image interpretation, and Doppler imaging.' },
        
        { id: 16, courseId: 7, code: 'MDP 307', title: 'Project Guidelines and Requirements', type: 'PDF', size: '1.8 MB', date: '2026-01-08', content: 'Complete guidelines for the capstone project:\n\n• Project Phases\n• Documentation Requirements\n• Evaluation Criteria\n• Timeline\n• Presentation Guidelines' },
        
        { id: 17, courseId: 7, code: 'MDP 307', title: 'Project Proposal Template', type: 'DOCX', size: '450 KB', date: '2026-01-09', content: 'Template for writing your project proposal including abstract, objectives, methodology, and expected outcomes.' },
        
        { id: 18, courseId: 7, code: 'MDP 307', title: 'Previous Year Projects Showcase', type: 'PDF', size: '15 MB', date: '2026-01-10', content: 'Examples of previous capstone projects from TDBE students including project descriptions and outcomes.' }
    ],
    
    results: [
        { course: 'Hospital Information System', assignment: 'Midterm Examination', score: 85, grade: 'B+', comment: 'Excellent understanding of health informatics concepts!' },
        { course: 'Biomedical Sensors', assignment: 'Lab Report 1', score: 92, grade: 'A', comment: 'Outstanding sensor calibration analysis.' },
        { course: 'Biomedical Signals', assignment: 'Signal Processing Project', score: 78, grade: 'C+', comment: 'Good work, but MATLAB implementation needs improvement.' },
        { course: 'Medical Electronics', assignment: 'Troubleshooting Assessment', score: 88, grade: 'A-', comment: 'Strong diagnostic skills demonstrated.' },
        { course: 'Electronic Circuits', assignment: 'Circuit Design Quiz', score: 95, grade: 'A', comment: 'Perfect score! Excellent circuit analysis.' },
        { course: 'Medical Imaging', assignment: 'Imaging Modalities Test', score: 90, grade: 'A-', comment: 'Thorough understanding of imaging principles.' },
        { course: 'Capstone Project', assignment: 'Project Proposal', score: 86, grade: 'B+', comment: 'Solid proposal with clear objectives.' }
    ],
    
    assignments: [
        { id: 1, course: 'HIS 301', title: 'Hospital System Analysis', description: 'Analyze a hospital information system and create a comprehensive report', dueDate: '2026-02-15', status: 'pending' },
        { id: 2, course: 'BMD 302', title: 'Sensor Design Project', description: 'Design a biosensor for glucose monitoring with full specifications', dueDate: '2026-02-20', status: 'pending' },
        { id: 3, course: 'BSS 303', title: 'ECG Analysis Report', description: 'Analyze ECG signals and identify abnormalities in provided samples', dueDate: '2026-02-10', status: 'submitted' },
        { id: 4, course: 'TME 304', title: 'Equipment Maintenance Plan', description: 'Create a preventive maintenance plan for medical equipment', dueDate: '2026-02-25', status: 'pending' },
        { id: 5, course: 'ECD 305', title: 'Amplifier Circuit Design', description: 'Design an audio amplifier circuit with given specifications', dueDate: '2026-03-01', status: 'pending' }
    ],
    
    forum: [
        { user: 'Dr. Smith', avatar: '👨‍🏫', role: 'Teacher', content: 'Welcome to the discussion forum! Feel free to ask questions about Hospital Information Systems and any other topics.', date: '2026-01-26', replies: 12 },
        { user: 'Gideon Tre', avatar: '👨‍🎓', role: 'Student', content: 'Can someone explain the difference between HIS and EMR systems?', date: '2026-01-25', replies: 8 },
        { user: 'Sarah Johnson', avatar: '👩‍🎓', role: 'Student', content: 'Has anyone started working on the Capstone Project? Looking for teammates!', date: '2026-01-24', replies: 5 },
        { user: 'Prof. Johnson', avatar: '👨‍🏫', role: 'Teacher', content: 'Reminder: The MATLAB exercises for signal processing are now available in the Materials section.', date: '2026-01-23', replies: 3 }
    ],
    
    profile: {
        name: 'Gideon Tre',
        email: 'student@tdbe2026.edu',
        phone: '+1234567890',
        id: 'TDBE/2025/001',
        department: 'Biomedical Engineering',
        year: 'Second Year',
        avatar: null
    }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    loadCourses();
    loadMaterials();
    loadResults();
    loadAssignments();
    loadForum();
    loadProfile();
    setupEventListeners();
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
    
    // Update nav active state
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') === "showPage('" + pageId + "')") {
            link.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function toggleNavbar() {
    document.getElementById('navbar').classList.toggle('collapsed');
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (window.innerWidth <= 768) {
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
}

// ============================================
// LOAD COURSES
// ============================================

function loadCourses() {
    const container = document.getElementById('courses-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    db.courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.borderTop = '4px solid ' + course.color;
        
        card.innerHTML = 
            '<div class="course-header">' +
                '<div class="course-icon" style="background: ' + course.color + '20; color: ' + course.color + ';">' +
                    '<i class="fas ' + course.icon + '"></i>' +
                '</div>' +
                '<span class="course-code">' + course.code + '</span>' +
            '</div>' +
            '<div class="course-body">' +
                '<h3>' + course.name + '</h3>' +
                '<p>' + course.description + '</p>' +
                '<div class="course-meta">' +
                    '<span><i class="fas fa-user"></i> ' + course.teacher + '</span>' +
                    '<span><i class="fas fa-clock"></i> ' + course.schedule + '</span>' +
                    '<span><i class="fas fa-file-alt"></i> ' + course.materials + ' Materials</span>' +
                '</div>' +
            '</div>' +
            '<div class="course-footer">' +
                '<button class="btn-primary" onclick="showPage(\'materials\')"><i class="fas fa-book-open"></i> View Materials</button>' +
            '</div>';
        
        container.appendChild(card);
    });
}

// ============================================
// LOAD MATERIALS
// ============================================

function loadMaterials() {
    const container = document.getElementById('materials-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    db.materials.forEach(material => {
        const card = document.createElement('div');
        card.className = 'material-card';
        card.setAttribute('data-code', material.code);
        
        const icon = getFileIcon(material.type);
        const color = getTypeColor(material.type);
        
        card.innerHTML = 
            '<div class="material-icon" style="background: ' + color + '20; color: ' + color + ';">' +
                '