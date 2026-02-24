<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biomedic Principal Flow - Learning Management System</title>
    <meta name="google-site-verification" content="4aa3f80019ff5f43">
    <meta name="description" content="Biomedic Principal Flow is a modern online learning platform...">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biomedic Principal Flow - Learning Management System</title>
    <meta name="google-site-verification" content="4aa3f80019ff5f43">
    <meta name="description" content="Biomedic Principal Flow is a modern online learning platform. Access learning materials, track your academic progress, enroll in classes, and view results. Perfect for students and teachers.">
    <meta name="keywords" content="Biomedic Principal Flow, online learning, education, student portal, teacher panel, learning management system, LMS, class materials, academic results, school website">
    <meta name="author" content="Biomedic Principal Flow">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Social Media Sharing -->
    <meta property="og:title" content="Biomedic Principal Flow - Learning Management System">
    <meta property="og:description" content="Access learning materials, track progress, and enroll in classes.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourwebsite.com">
    <meta property="og:image" content="https://yourwebsite.com/logo.png">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Biomedic Principal Flow">
    <meta name="twitter:description" content="Modern learning management system for students and teachers.">
    
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    
    <!-- Favicon -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📚</text></svg>">
</head>
<body>

    <!-- Navigation Bar -->
    <nav id="navbar" class="hidden">
        <div class="logo">Biomedic Principal Flow</div>
        <ul class="nav-links">
            <li><a href="#" onclick="showPage('dashboard')">Dashboard</a></li>
            <li><a href="#" onclick="showPage('classes')">Classes</a></li>
            <li><a href="#" onclick="showPage('materials')">Materials</a></li>
            <li><a href="#" onclick="showPage('results')">Results</a></li>
            <li><a href="#" onclick="showPage('admin')" id="adminLink" class="hidden">Teacher Panel</a></li>
            <li><a href="#" onclick="logout()" class="btn-logout">Logout</a></li>
        </ul>
        <div class="mobile-menu-icon" onclick="toggleMobileMenu()">☰</div>
    </nav>

    <!-- Main Container -->
    <div class="container">

        <!-- LOGIN / REGISTER PAGE -->
        <section id="auth-page" class="page active">
            <div class="auth-box">
                <div class="auth-logo">BPF</div>
                <h1>Biomedic Principal Flow</h1>
                <p>Your Modern Learning Management System</p>
                
                <div class="tabs">
                    <button class="tab-btn active" onclick="toggleAuthMode('login')">Login</button>
                    <button class="tab-btn" onclick="toggleAuthMode('register')">Register</button>
                </div>

                <form id="auth-form">
                    <input type="text" id="username" placeholder="Username" required>
                    <input type="password" id="password" placeholder="Password" required>
                    <select id="role">
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                    <button type="submit" class="btn-primary">Enter</button>
                </form>
                <p class="note">Demo: <b>student</b> / <b>123</b> or <b>teacher</b> / <b>123</b></p>
            </div>
        </section>

        <!-- STUDENT DASHBOARD PAGE -->
        <section id="dashboard-page" class="page hidden">
            <div class="page-header">
                <h2>Welcome back, <span id="student-name">Student</span>!</h2>
                <p>Here's an overview of your learning progress</p>
            </div>
            <div class="dashboard-grid">
                <div class="card stat-card">
                    <div class="stat-icon">📚</div>
                    <div class="stat-content">
                        <h3>Enrolled Classes</h3>
                        <p class="big-number" id="stat-classes">0</p>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon">📊</div>
                    <div class="stat-content">
                        <h3>Average Score</h3>
                        <p class="big-number" id="stat-score">0%</p>
                    </div>
                </div>
                <div class="card stat-card">
                    <div class="stat-icon">✅</div>
                    <div class="stat-content">
                        <h3>Attendance</h3>
                        <p class="big-number">98%</p>
                    </div>
                </div>
                <div class="card wide">
                    <h3>📥 Recent Materials</h3>
                    <ul id="dash-materials-list" class="minimal-list"></ul>
                </div>
            </div>
        </section>

        <!-- CLASSES / ENROLLMENT PAGE -->
        <section id="classes-page" class="page hidden">
            <div class="page-header">
                <h2>Available Classes</h2>
                <p>Browse and enroll in your desired courses</p>
            </div>
            <div class="classes-grid" id="classes-container">
                <!-- Populated by JavaScript -->
            </div>
        </section>

        <!-- LEARNING MATERIALS PAGE -->
        <section id="materials-page" class="page hidden">
            <div class="page-header">
                <h2>Learning Materials</h2>
                <p>Download course materials and assignments</p>
            </div>
            <div class="filters">
                <input type="text" id="search-material" placeholder="🔍 Search materials..." onkeyup="filterMaterials()">
            </div>
            <div class="materials-list" id="materials-container">
                <!-- Populated by JavaScript -->
            </div>
        </section>

        <!-- RESULTS / PROGRESS PAGE -->
        <section id="results-page" class="page hidden">
            <div class="page-header">
                <h2>Academic Results</h2>
                <p>View your test scores and progress</p>
            </div>
            <div class="progress-overview">
                <div class="card">
                    <h3>Overall Performance</h3>
                    <div class="progress-bar-container">
                        <div class="progress-bar" id="overall-progress" style="width: 0%"></div>
                    </div>
                    <p id="progress-text">Calculating...</p>
                </div>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Assignment / Test</th>
                            <th>Score</th>
                            <th>Grade</th>
                            <th>Teacher Comments</th>
                        </tr>
                    </thead>
                    <tbody id="results-table-body">
                        <!-- Populated by JavaScript -->
                    </tbody>
                </table>
            </div>
        </section>

        <!-- TEACHER / ADMIN PANEL -->
        <section id="admin-page" class="page hidden">
            <div class="page-header">
                <h2>Teacher Panel</h2>
                <p>Manage classes, materials, and student progress</p>
            </div>
            
            <div class="admin-grid">
                <div class="card">
                    <h3>📤 Upload New Material</h3>
                    <form onsubmit="handleUpload(event)">
                        <select id="upload-class" required>
                            <option value="">Select Class</option>
                        </select>
                        <input type="text" id="upload-title" placeholder="Material Title" required>
                        <select id="upload-type" required>
                            <option value="">Select Type</option>
                            <option value="PDF">PDF</option>
                            <option value="DOCX">DOCX</option>
                            <option value="PPTX">PPTX</option>
                            <option value="Video">Video</option>
                        </select>
                        <button type="submit" class="btn-primary">Upload Material</button>
                    </form>
                </div>
                
                <div class="card">
                    <h3>➕ Create New Class</h3>
                    <form onsubmit="handleAddClass(event)">
                        <input type="text" id="new-class-name" placeholder="Class Name" required>
                        <input type="text" id="new-class-desc" placeholder="Description" required>
                        <button type="submit" class="btn-secondary">Create Class</button>
                    </form>
                </div>

                <div class="card">
                    <h3>📝 Add Student Result</h3>
                    <form onsubmit="handleAddResult(event)">
                        <input type="text" id="result-subject" placeholder="Subject" required>
                        <input type="text" id="result-assignment" placeholder="Assignment Name" required>
                        <input type="number" id="result-score" placeholder="Score (0-100)" required>
                        <input type="text" id="result-comment" placeholder="Comment" required>
                        <button type="submit" class="btn-primary">Add Result</button>
                    </form>
                </div>
            </div>
        </section>

    </div>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Biomedic Principal Flow. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
