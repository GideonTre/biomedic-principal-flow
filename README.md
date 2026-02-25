<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TDBE 1:2 2025/2026 - Learning Management System</title>
    <meta name="google-site-verification" content="4aa3f80019ff5f43">
    <meta name="description" content="TDBE 1:2 2025/2026 - Biomedical Engineering Learning Portal">
    <meta name="keywords" content="TDBE 1:2 2025/2026, biomedical engineering, learning management system">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏥</text></svg>">
</head>
<body>

    <!-- Navigation Bar -->
    <nav id="navbar" class="collapsed">
        <div class="logo">
            <i class="fas fa-hospital-alt"></i>
            <span class="logo-text">TDBE 1:2 2025/2026</span>
        </div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#" onclick="showPage('dashboard')"><i class="fas fa-tachometer-alt"></i> <span>Dashboard</span></a></li>
            <li><a href="#" onclick="showPage('classes')"><i class="fas fa-book"></i> <span>My Classes</span></a></li>
            <li><a href="#" onclick="showPage('materials')"><i class="fas fa-file-download"></i> <span>Materials</span></a></li>
            <li><a href="#" onclick="showPage('results')"><i class="fas fa-chart-line"></i> <span>Results</span></a></li>
            <li><a href="#" onclick="showPage('schedule')"><i class="fas fa-calendar-alt"></i> <span>Schedule</span></a></li>
            <li><a href="#" onclick="showPage('assignments')"><i class="fas fa-tasks"></i> <span>Assignments</span></a></li>
            <li><a href="#" onclick="showPage('forum')"><i class="fas fa-comments"></i> <span>Forum</span></a></li>
            <li><a href="#" onclick="showPage('profile')"><i class="fas fa-user"></i> <span>Profile</span></a></li>
            <li><a href="#" onclick="showPage('admin')" id="adminLink" class="hidden"><i class="fas fa-cog"></i> <span>Admin Panel</span></a></li>
            <li><a href="#" onclick="logout()" class="btn-logout"><i class="fas fa-sign-out-alt"></i> <span>Logout</span></a></li>
        </ul>
        <div class="nav-right">
            <button class="dark-mode-btn" onclick="toggleDarkMode()" title="Toggle Dark Mode">
                <i class="fas fa-moon"></i>
            </button>
            <button class="collapse-btn" onclick="toggleNavbar()" title="Collapse/Expand">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="mobile-menu-icon" onclick="toggleMobileMenu()">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <!-- Main Container -->
    <div class="container">

        <!-- LOGIN / REGISTER PAGE -->
        <section id="auth-page" class="page active">
            <div class="auth-container">
                <div class="auth-illustration">
                    <div class="illustration-content">
                        <i class="fas fa-heartbeat"></i>
                        <h2>TDBE 1:2 2025/2026</h2>
                        <p>Biomedical Engineering Learning Portal</p>
                        <div class="features-list">
                            <div class="feature"><i class="fas fa-check-circle"></i> Access Learning Materials</div>
                            <div class="feature"><i class="fas fa-check-circle"></i> Track Your Progress</div>
                            <div class="feature"><i class="fas fa-check-circle"></i> Submit Assignments</div>
                            <div class="feature"><i class="fas fa-check-circle"></i> Connect with Teachers</div>
                        </div>
                    </div>
                </div>
                <div class="auth-box">
                    <div class="auth-header">
                        <div class="auth-logo"><i class="fas fa-hospital-alt"></i></div>
                        <h1>Welcome Back</h1>
                        <p>Sign in to continue learning</p>
                    </div>
                    
                    <div class="tabs">
                        <button class="tab-btn active" onclick="toggleAuthMode('login')">Login</button>
                        <button class="tab-btn" onclick="toggleAuthMode('register')">Register</button>
                    </div>

                    <form id="auth-form">
                        <div class="input-group">
                            <label for="email"><i class="fas fa-envelope"></i> Gmail Address</label>
                            <input type="email" id="email" placeholder="yourname@gmail.com" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="password"><i class="fas fa-lock"></i> Password</label>
                            <div class="password-input">
                                <input type="password" id="password" placeholder="Enter your password" required>
                                <button type="button" onclick="togglePassword()"><i class="fas fa-eye"></i></button>
                            </div>
                        </div>
                        
                        <div class="input-group" id="nameGroup" style="display:none;">
                            <label for="fullname"><i class="fas fa-user"></i> Full Name</label>
                            <input type="text" id="fullname" placeholder="Enter your full name">
                        </div>

                        <select id="role">
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select>
                        
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-sign-in-alt"></i> Sign In
                        </button>
                    </form>
                    <p class="note">Demo: <b>student@gmail.com</b> / <b>123</b> or <b>teacher@gmail.com</b> / <b>123</b></p>
                </div>
            </div>
        </section>

        <!-- DASHBOARD PAGE -->
        <section id="dashboard-page" class="page hidden">
            <div class="page-header">
                <div class="welcome-section">
                    <h2>Welcome back, <span id="student-name">Student</span>!</h2>
                    <p>TDBE 1:2 2025/2026 - Biomedical Engineering</p>
                </div>
                <div class="header-actions">
                    <button class="btn-secondary" onclick="showPage('materials')"><i class="fas fa-plus"></i> Browse Materials</button>
                </div>
            </div>

            <!-- Stats Cards -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="stat-content">
                        <h3>Enrolled Classes</h3>
                        <p class="big-number" id="stat-classes">0</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: linear-gradient(135deg, #2196F3, #1565C0);">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="stat-content">
                        <h3>Average Score</h3>
                        <p class="big-number" id="stat-score">0%</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: linear-gradient(135deg, #FF9800, #E65100);">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="stat-content">
                        <h3>Attendance</h3>
                        <p class="big-number">98%</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: linear-gradient(135deg, #9C27B0, #6A1B9A);">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div class="stat-content">
                        <h3>Total Materials</h3>
                        <p class="big-number" id="stat-materials">0</p>
                    </div>
                </div>
            </div>

            <!-- Progress Section -->
            <div class="dashboard-row">
                <div class="card progress-card">
                    <h3><i class="fas fa-chart-pie"></i> Academic Performance</h3>
                    <div class="progress-bar-container">
                        <div class="progress-bar" id="overall-progress" style="width: 0%"></div>
                    </div>
                    <p id="progress-text">Calculating your GPA...</p>
                    <div class="gpa-display">
                        <div class="gpa-item">
                            <span class="gpa-label">Current GPA</span>
                            <span class="gpa-value" id="gpa-value">0.00</span>
                        </div>
                    </div>
                </div>
                <div class="card announcements-card">
                    <h3><i class="fas fa-bullhorn"></i> Announcements</h3>
                    <div id="announcements-list">
                        <div class="announcement-item urgent">
                            <div class="announcement-icon"><i class="fas fa-exclamation-circle"></i></div>
                            <div class="announcement-content">
                                <h4>Welcome to TDBE 1:2 2025/2026</h4>
                                <p>Access all your learning materials and track your progress here.</p>
                                <span class="announcement-time">Just now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Access -->
            <div class="dashboard-row">
                <div class="card">
                    <h3><i class="fas fa-clock"></i> Recent Materials</h3>
                    <ul id="dash-materials-list" class="quick-list"></ul>
                </div>
                <div class="card">
                    <h3><i class="fas fa-tasks"></i> Pending Assignments</h3>
                    <ul id="dash-assignments-list" class="quick-list"></ul>
                </div>
            </div>
        </section>

        <!-- CLASSES PAGE -->
        <section id="classes-page" class="page hidden">
            <div class="page-header">
                <h2><i class="fas fa-book"></i> My Classes - TDBE 1:2 2025/2026</h2>
                <p>View and manage your enrolled courses</p>
            </div>
            <div class="classes-grid" id="classes-container"></div>
        </section>

        <!-- MATERIALS PAGE -->
        <section id="materials-page" class="page hidden">
            <div class="page-header">
                <h2><i class="fas fa-file-download"></i> Learning Materials</h2>
                <p>Download course materials, notes, and assignments</p>
            </div>
            <div class="filters-bar">
                <div class="search-box">
                    <i class="fas fa-search"></i>
                    <input type="text" id="search-material" placeholder="Search materials..." onkeyup="filterMaterials()">
                </div>
                <select id="filter-class" onchange="filterByClass()">
                    <option value="">All Courses</option>
                </select>
                <select id="filter-type" onchange="filterByType()">
                    <option value="">All Types</option>
                    <option value="PDF">PDF</option>
                    <option value="DOCX">DOCX</option>
                    <option value="PPTX">PPTX</option>
                    <option value="Video">Video</option>
                </select>
            </div>
            <div class="materials-list" id="materials-container"></div>
        </section>

        <!-- RESULTS PAGE -->
        <section id="results-page" class="page hidden">
            <div class="page-header">
                <h2><i class="fas fa-chart-line"></i> Academic Results</h2>
                <p>View your test scores and progress</p>
            </div>
            <div class="results-overview">
                <div class="card">
                    <h3><i class="fas fa-star"></i> Overall Performance</h3>
                    <div class="performance-chart">
                        <div class="chart-ring">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" stroke-width="8"/>
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#4CAF50" stroke-width="8" 
                                    stroke-dasharray="283" stroke-dashoffset="283" id="progressRing"/>
                            </svg>
                            <div class="chart-center">
                                <span id="ring-percent">0%</span>
                            </div>
                        </div>
                    </div>
                    <div class="grade-summary">
                        <div class="grade-stat">
                            <span class="grade-label">Highest</span>
                            <span class="grade-value high" id="grade-high">A</span>
                        </div>
                        <div class="grade-stat">
                            <span class="grade-label">Lowest</span>
                            <span class="grade-value low" id="grade-low">C</span>
                        </div>
                        <div class="grade-stat">
                            <span class="grade-label">GPA</span>
                            <span class="grade-value" id="gpa-result">0.00</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <h3><i class="fas fa-download"></i> Download Report Card</h3>
                    <p>Generate and download your official academic report</p>
                    <button class="btn-primary" onclick="downloadReportCard()">
                        <i class="fas fa-file-pdf"></i> Download PDF Report
                    </button>
                </div>
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
                    <tbody id="results-table-body"></tbody>
                </table>
            </div>
        </section>

        <!-- SCHEDULE PAGE -->
        <section id="schedule-page" class="page hidden">
            <div class="page-header">
                <h2><i class="fas fa-calendar-alt"></i> Class Schedule</h2>
                <p>TDBE 1:2 2025/2026 Weekly Timetable</p>
            </div>
            <div class="schedule-container">
                <div class="schedule-card">
                    <h3><i class="fas fa-clock"></i> Weekly Timetable</h3>
                    <div class="timetable">
                        <div class="timetable-header">
                            <div>Time</div>
                            <div>Monday</div>
                            <div>Tuesday</div>
                            <div>Wednesday</div>
                            <div>Thursday</div>
                            <div>Friday</div>
                        </div>
                        <div class="timetable-row">
                            <div class="time">8:00 - 10:00</div>
                            <div class="subject" data-day="mon">Hospital Info System</div>
                            <div class="subject" data-day="tue">Biomedical Sensors</div>
                            <div class="subject" data-day="wed">Electronic Circuits</div>
                            <div class="subject" data-day="thu">Medical Imaging</div>
                            <div class="subject" data-day="fri">Project Work</div>
                        </div>
                        <div class="timetable-row">
                            <div class="time">10:00 - 12:00</div>
                            <div class="subject" data-day="mon">Biomedical Signals</div>
                            <div class="subject" data-day="tue">Electronic Circuits</div>
                            <div class="subject" data-day="wed">Medical Electronics</div>
                            <div class="subject" data-day="thu">Biomedical Sensors</div>
                            <div class="subject" data-day="fri">Seminar</div>
                        </div>
                        <div class="timetable-row">
