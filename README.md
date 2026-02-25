<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TDBE 1:2 2025/2026 - Learning Management System</title>
    <meta name="description" content="TDBE 1:2 2025/2026 - Biomedical Engineering Learning Portal - Access materials, view results, submit assignments, and connect with teachers.">
    <meta name="keywords" content="TDBE 1:2 2025/2026, biomedical engineering, learning management system, hospital information system, biomedical sensors">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏥</text></svg>">
</head>
<body>

    <!-- Navigation -->
    <nav id="navbar">
        <div class="logo">
            <i class="fas fa-hospital-alt"></i>
            <span class="logo-text">TDBE 1:2 2025/2026</span>
        </div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#" onclick="showPage('dashboard')" class="active"><i class="fas fa-home"></i> <span>Home</span></a></li>
            <li><a href="#" onclick="showPage('classes')"><i class="fas fa-book"></i> <span>Courses</span></a></li>
            <li><a href="#" onclick="showPage('materials')"><i class="fas fa-folder-open"></i> <span>Materials</span></a></li>
            <li><a href="#" onclick="showPage('results')"><i class="fas fa-chart-bar"></i> <span>Results</span></a></li>
            <li><a href="#" onclick="showPage('schedule')"><i class="fas fa-calendar"></i> <span>Schedule</span></a></li>
            <li><a href="#" onclick="showPage('assignments')"><i class="fas fa-tasks"></i> <span>Tasks</span></a></li>
            <li><a href="#" onclick="showPage('forum')"><i class="fas fa-comments"></i> <span>Forum</span></a></li>
            <li><a href="#" onclick="showPage('profile')"><i class="fas fa-user-graduate"></i> <span>Profile</span></a></li>
            <li><a href="#" onclick="showPage('admin')"><i class="fas fa-cogs"></i> <span>Admin</span></a></li>
        </ul>
        <div class="nav-right">
            <button class="collapse-btn" onclick="toggleNavbar()" title="Collapse"><i class="fas fa-chevron-left"></i></button>
            <div class="mobile-menu-icon" onclick="toggleMobileMenu()"><i class="fas fa-bars"></i></div>
        </div>
    </nav>

    <!-- Main Container -->
    <div class="container">

        <!-- HOME PAGE -->
        <section id="dashboard-page" class="page active">
            <div class="hero-section">
                <div class="hero-content">
                    <h1><i class="fas fa-heartbeat"></i> TDBE 1:2 2025/2026</h1>
                    <h2>Biomedical Engineering Learning Portal</h2>
                    <p>Welcome to your comprehensive learning management system. Access all course materials, track your progress, submit assignments, and connect with your teachers.</p>
                    <div class="hero-buttons">
                        <button class="btn-primary" onclick="showPage('materials')"><i class="fas fa-book-open"></i> Browse Materials</button>
                        <button class="btn-secondary" onclick="showPage('classes')"><i class="fas fa-play-circle"></i> View Courses</button>
                    </div>
                </div>
                <div class="hero-stats">
                    <div class="hero-stat">
                        <i class="fas fa-book-medical"></i>
                        <div>
                            <span class="stat-number">7</span>
                            <span class="stat-label">Courses</span>
                        </div>
                    </div>
                    <div class="hero-stat">
                        <i class="fas fa-file-pdf"></i>
                        <div>
                            <span class="stat-number">18</span>
                            <span class="stat-label">Materials</span>
                        </div>
                    </div>
                    <div class="hero-stat">
                        <i class="fas fa-users"></i>
                        <div>
                            <span class="stat-number">50+</span>
                            <span class="stat-label">Students</span>
                        </div>
                    </div>
                    <div class="hero-stat">
                        <i class="fas fa-graduation-cap"></i>
                        <div>
                            <span class="stat-number">87%</span>
                            <span class="stat-label">Avg Score</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Access Cards -->
            <div class="quick-access">
                <div class="quick-card" onclick="showPage('materials')">
                    <div class="quick-icon" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);"><i class="fas fa-download"></i></div>
                    <h3>Download Materials</h3>
                    <p>Access all lecture notes, presentations, and study guides</p>
                </div>
                <div class="quick-card" onclick="showPage('results')">
                    <div class="quick-icon" style="background: linear-gradient(135deg, #2196F3, #1565C0);"><i class="fas fa-chart-line"></i></div>
                    <h3>View Results</h3>
                    <p>Check your grades, feedback, and academic progress</p>
                </div>
                <div class="quick-card" onclick="showPage('assignments')">
                    <div class="quick-icon" style="background: linear-gradient(135deg, #FF9800, #E65100);"><i class="fas fa-tasks"></i></div>
                    <h3>Submit Assignments</h3>
                    <p>View and submit your course assignments online</p>
                </div>
                <div class="quick-card" onclick="showPage('forum')">
                    <div class="quick-icon" style="background: linear-gradient(135deg, #9C27B0, #6A1B9A);"><i class="fas fa-comments"></i></div>
                    <h3>Discussion Forum</h3>
                    <p>Connect with classmates and ask questions</p>
                </div>
            </div>

            <!-- Announcements & Recent -->
            <div class="content-grid">
                <div class="card">
                    <div class="card-header">
                        <h3><i class="fas fa-bullhorn"></i> Announcements</h3>
                        <span class="badge urgent">Important</span>
                    </div>
                    <div class="announcement-list">
                        <div class="announcement-item">
                            <div class="announcement-icon"><i class="fas fa-info-circle"></i></div>
                            <div class="announcement-content">
                                <h4>Welcome to TDBE 1:2 2025/2026</h4>
                                <p>Access all your learning materials and track your progress here.</p>
                                <span class="announcement-time"><i class="fas fa-clock"></i> Just now</span>
                            </div>
                        </div>
                        <div class="announcement-item">
                            <div class="announcement-icon"><i class="fas fa-calendar-check"></i></div>
                            <div class="announcement-content">
                                <h4>Midterm Exam Schedule Released</h4>
                                <p>Check the Schedule page for detailed exam times and locations.</p>
                                <span class="announcement-time"><i class="fas fa-clock"></i> 1 day ago</span>
                            </div>
                        </div>
                        <div class="announcement-item">
                            <div class="announcement-icon"><i class="fas fa-upload"></i></div>
                            <div class="announcement-content">
                                <h4>New Materials Available</h4>
                                <p>Week 3 lecture notes have been uploaded to all courses.</p>
                                <span class="announcement-time"><i class="fas fa-clock"></i> 2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3><i class="fas fa-clock"></i> Recent Materials</h3>
                        <a href="#" onclick="showPage('materials')" class="view-all">View All <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div class="recent-list">
                        <div class="recent-item" onclick="viewMaterialFromList(1)">
                            <div class="recent-icon">📄</div>
                            <div class="recent-info">
                                <h4>Introduction to Hospital Information Systems</h4>
                                <span class="recent-meta">HIS 301 • PDF • 2.4 MB</span>
                            </div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="recent-item" onclick="viewMaterialFromList(4)">
                            <div class="recent-icon">📄</div>
                            <div class="recent-info">
                                <h4>Biosensors - Principles and Applications</h4>
                                <span class="recent-meta">BMD 302 • PDF • 4.2 MB</span>
                            </div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="recent-item" onclick="viewMaterialFromList(7)">
                            <div class="recent-icon">📄</div>
                            <div class="recent-info">
                                <h4>ECG Signal Processing Tutorial</h4>
                                <span class="recent-meta">BSS 303 • PDF • 5.8 MB</span>
                            </div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Performance Overview -->
            <div class="card performance-card">
                <div class="card-header">
                    <h3><i class="fas fa-chart-pie"></i> Academic Performance Overview</h3>
                </div>
                <div class="performance-content">
                    <div class="performance-chart">
                        <div class="chart-circle">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#E0E6ED" stroke-width="10"/>
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#4CAF50" stroke-width="10"
                                    stroke-dasharray="254.47" stroke-dashoffset="33.08" stroke-linecap="round" transform="rotate(-90 50 50)"/>
                            </svg>
                            <div class="chart-center">
                                <span class="chart-percent">87%</span>
                                <span class="chart-label">Overall</span>
                            </div>
                        </div>
                    </div>
                    <div class="performance-details">
                        <div class="performance-stat">
                            <span class="stat-name">GPA</span>
                            <span class="stat-value">3.67</span>
                        </div>
                        <div class="performance-stat">
                            <span class="stat-name">Highest Score</span>
                            <span class="stat-value">95%</span>
                        </div>
                        <div class="performance-stat">
                            <span class="stat-name">Lowest Score</span>
                            <span class="stat-value">78%</span>
                        </div>
                        <div class="performance-stat">
                            <span class="stat-name">Courses Passed</span>
                            <span class="stat-value">7/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- COURSES PAGE -->
        <section id="classes-page" class="page hidden">
            <div class="page-header">
                <div>
                    <h2><i class="fas fa-graduation-cap"></i> My Courses</h2>
                    <p>TDBE 1:2 2025/2026 - All Available Courses</p>
                </div>
            </div>
            <div class="courses-grid" id="courses-container">
                <!-- Courses loaded dynamically -->
            </div>
        </section>

        <!-- MATERIALS PAGE -->
        <section id="materials-page" class="page hidden">
            <div class="page-header">
                <div>
                    <h2><i class="fas fa-folder-open"></i> Learning Materials</h2>
                    <p>Download course materials, notes, and assignments</p>
                </div>
            </div>
            <div class="materials-controls">
                <div class="search-box">
                    <i class="fas fa-search"></i>
                    <input type="text" id="search-material" placeholder="Search materials..." onkeyup="filterMaterials()">
                </div>
                <select id="filter-course" onchange="filterMaterials()">
                    <option value="">All Courses</option>
                    <option value="HIS 301">HIS 301 - Hospital Information System</option>
                    <option value="BMD 302">BMD 302 - Biomedical Sensors</option>
                    <option value="BSS 303">BSS 303 - Biomedical Signals</option>
                    <option value="TME 304">TME 304 - Medical Electronics</option>
                    <option value="ECD 305">ECD 305 - Electronic Circuits</option>
                    <option value="MIT 306">MIT 306 - Medical Imaging</option>
                    <option value="MDP 307">MDP 307 - Capstone Project</option>
                </select>
            </div>
            <div class="materials-grid" id="materials-container">
                <!-- Materials loaded dynamically -->
            </div>
        </section>

        <!-- RESULTS PAGE -->
        <section id="results-page" class="page hidden">
            <div class="page-header">
                <div>
                    <h2><i class="fas fa-chart-bar"></i> Academic Results</h2>
                    <p>View your test scores and academic progress</p>
                </div>
            </div>
            <div class="results-summary">
                <div class="result-card">
                    <i class="fas fa-star"></i>
                    <div>
                        <span class="result-value">87%</span>
                        <span class="result-label">Average Score</span>
                    </div>
                </div>
                <div class="result-card">
                    <i class="fas fa-trophy"></i>
                    <div>
                        <span class="result-value">A-</span>
                        <span class="result-label">Grade Average</span>
                    </div>
                </div>
                <div class="result-card">
                    <i class="fas fa-award"></i>
                    <div>
                        <span class="result-value">3.67</span>
                        <span class="result-label">GPA</span>
                    </div>
                </div>
                <div class="result-card">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <span class="result-value">7</span>
                        <span class="result-label">Courses Passed</span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3><i class="fas fa-table"></i> Detailed Results</h3>
                    <button class="btn-secondary" onclick="downloadResults()"><i class="fas fa-download"></i> Download Report</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Assignment / Test</th>
                                <th>Score</th>
                                <th>Grade</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody id="results-table">
                            <!-- Results loaded dynamically -->
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- SCHEDULE PAGE -->
        <section id="schedule-page" class="page hidden">
            <div class="page-header">
                <div>
                    <h2><i class="fas fa-calendar-alt"></i> Class Schedule</h2>
                    <p>TDBE 1:2 2025/2026 Weekly Timetable</p>
                </div>
            </div>
            <div class="schedule-card">
                <div class="card-header">
                    <h3><i class="fas fa-clock"></i> Weekly Timetable</h3>
                </div>
                <div class="timetable">
                    <div class="timetable-header">
                        <div class="time-col">Time</div>
                        <div class="day-col">Mon</div>
                        <div class="day-col">Tue</div>
                        <div class="day-col">Wed</div>
                        <div class="day-col">Thu</div>
                        <div class="day-col">Fri</div>
                    </div>
                    <div class="timetable-row">
                        <div class="time-col">8:00 - 10:00</div>
                        <div class="day-col subject" onclick="showClassDetails(1)">HIS 301</div>
                        <div class="day-col subject" onclick="showClassDetails(2)">BMD 302</div>
                        <div class="day-col subject" onclick="showClassDetails(5)">ECD 305</div>
                        <div class="day-col subject" onclick="showClassDetails(2)
