<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TDBE 1:2 2025/2026 - Learning Management System</title>
    <meta name="google-site-verification" content="4aa3f80019ff5f43">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏥</text></svg>">
</head>
<body>

    <!-- Navigation Bar -->
    <nav id="navbar" class="hidden">
        <div class="logo">
            <i class="fas fa-hospital-alt"></i>
            <span class="logo-text">TDBE 1:2 2025/2026</span>
        </div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#" onclick="showPage('dashboard')"><i class="fas fa-tachometer-alt"></i> <span>Dashboard</span></a></li>
            <li><a href="#" onclick="showPage('classes')"><i class="fas fa-book"></i> <span>My Classes</span></a></li>
            <li><a href="#" onclick="showPage('materials')"><i class="fas fa-file-download"></i> <span>Materials</span></a></li>
            <li><a href="#" onclick="showPage('results')"><i class="fas fa-chart-line"></i> <span>Results</span></a></li>
            <li><a href="#" onclick="showPage('profile')"><i class="fas fa-user"></i> <span>Profile</span></a></li>
            <li><a href="#" onclick="showPage('admin')" id="adminLink" class="hidden"><i class="fas fa-cog"></i> <span>Admin</span></a></li>
            <li><a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> <span>Logout</span></a></li>
        </ul>
        <div class="nav-right">
            <button class="collapse-btn" onclick="toggleNavbar()"><i class="fas fa-chevron-left"></i></button>
            <div class="mobile-menu-icon" onclick="toggleMobileMenu()"><i class="fas fa-bars"></i></div>
        </div>
    </nav>

    <!-- Main Container -->
    <div class="container">

        <!-- LOGIN PAGE -->
        <section id="login-page" class="page active">
            <div class="auth-wrapper">
                <div class="auth-left">
                    <div class="auth-illustration">
                        <i class="fas fa-heartbeat"></i>
                        <h2>TDBE 1:2 2025/2026</h2>
                        <p>Biomedical Engineering Learning Portal</p>
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle"></i> Access Learning Materials</li>
                            <li><i class="fas fa-check-circle"></i> Track Your Progress</li>
                            <li><i class="fas fa-check-circle"></i> Submit Assignments</li>
                            <li><i class="fas fa-check-circle"></i> View Results</li>
                        </ul>
                    </div>
                </div>
                <div class="auth-right">
                    <div class="auth-box">
                        <div class="auth-header">
                            <div class="auth-logo"><i class="fas fa-hospital-alt"></i></div>
                            <h1>Welcome Back</h1>
                            <p>Sign in to continue learning</p>
                        </div>

                        <form id="login-form" onsubmit="handleLogin(event)">
                            <div class="form-group">
                                <label for="login-email"><i class="fas fa-envelope"></i> Gmail Address</label>
                                <input type="email" id="login-email" placeholder="yourname@gmail.com" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="login-password"><i class="fas fa-lock"></i> Password</label>
                                <input type="password" id="login-password" placeholder="Enter your password" required>
                            </div>
                            
                            <button type="submit" class="btn-primary">
                                <i class="fas fa-sign-in-alt"></i> Sign In
                            </button>
                        </form>
                        
                        <div class="auth-toggle">
                            <p>Don't have an account? <a href="#" onclick="showPage('register')">Register here</a></p>
                        </div>
                        
                        <div class="demo-info">
                            <p><strong>Demo Accounts:</strong></p>
                            <p>Student: <code>student@gmail.com</code> / <code>123</code></p>
                            <p>Teacher: <code>teacher@gmail.com</code> / <code>123</code></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- REGISTER PAGE -->
        <section id="register-page" class="page hidden">
            <div class="auth-wrapper">
                <div class="auth-left">
                    <div class="auth-illustration">
                        <i class="fas fa-user-plus"></i>
                        <h2>Create Account</h2>
                        <p>Join TDBE 1:2 2025/2026</p>
                        <ul class="feature-list">
                            <li><i class="fas fa-check-circle"></i> Instant Registration</li>
                            <li><i class="fas fa-check-circle"></i> Email Verification</li>
                            <li><i class="fas fa-check-circle"></i> Access All Materials</li>
                            <li><i class="fas fa-check-circle"></i> 24/7 Support</li>
                        </ul>
                    </div>
                </div>
                <div class="auth-right">
                    <div class="auth-box">
                        <div class="auth-header">
                            <div class="auth-logo"><i class="fas fa-user-plus"></i></div>
                            <h1>Create Account</h1>
                            <p>Fill in your details to get started</p>
                        </div>

                        <form id="register-form" onsubmit="handleRegister(event)">
                            <div class="form-group">
                                <label for="reg-name"><i class="fas fa-user"></i> Full Name</label>
                                <input type="text" id="reg-name" placeholder="Enter your full name" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="reg-email"><i class="fas fa-envelope"></i> Gmail Address</label>
                                <input type="email" id="reg-email" placeholder="yourname@gmail.com" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="reg-password"><i class="fas fa-lock"></i> Password</label>
                                <input type="password" id="reg-password" placeholder="Create a password (min 6 characters)" minlength="6" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="reg-role"><i class="fas fa-users"></i> Account Type</label>
                                <select id="reg-role" required>
                                    <option value="">Select your role</option>
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                </select>
                            </div>
                            
                            <button type="submit" class="btn-primary">
                                <i class="fas fa-user-plus"></i> Create Account
                            </button>
                        </form>
                        
                        <div class="auth-toggle">
                            <p>Already have an account? <a href="#" onclick="showPage('login')">Sign in here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- DASHBOARD PAGE -->
        <section id="dashboard-page" class="page hidden">
            <div class="page-header">
                <h2><i class="fas fa-tachometer-alt"></i> Dashboard</h2>
                <p>Welcome back, <span id="student-name">Student</span>! - TDBE 1:2 2025/2026</p>
            </div>

            <!-- Stats -->
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
                        <h3>Materials</h3>
                        <p class="big-number" id="stat-materials">0</p>
                    </div>
                </div>
            </div>

            <!-- Dashboard Content -->
            <div class="dashboard-grid">
                <div class="card">
                    <h3><i class="fas fa-chart-pie"></i> Academic Performance</h3>
                    <div class="progress-section">
                        <div class="progress-bar-container">
                            <div class="progress-bar" id="overall-progress" style="width: 0%"></div>
                        </div>
                        <p id="progress-text">Calculating...</p>
                        <p class="gpa-text">GPA: <strong id="gpa-value">0.00</strong></p>
                    </div>
                </div>
                <div class="card">
                    <h3><i class="fas fa-bullhorn"></i> Announcements</h3>
                    <div id="announcements-list">
                        <div class="announcement-item">
                            <div class="announcement-icon"><i class="fas fa-info-circle"></i></div>
                            <div class="announcement-content">
                                <h4>Welcome to TDBE 1:2 2025/2026</h4>
                                <p>Access all your learning materials here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <h3><i class="fas fa-clock"></i> Recent Materials</h3>
                <ul id="dash-materials-list" class="materials-quick-list"></ul>
            </div>
        </section>

        <!-- CLASSES PAGE -->
        <section id="classes-page" class="page hidden">
            <div class="page-header">
                <h2><i class="fas fa-book"></i> My Classes</h2>
                <p>TDBE 1:2 2025/2026 - All Available Courses</p>
            </div>
            <div class="classes-grid" id="classes-container"></div>
        </section>

        <!-- MATERIALS PAGE -->
        <section id="materials-page" class="page hidden">
            <div class="page-header">
                <h2><i class="fas fa-file-download"></i> Learning Materials</h2>
                <p>Download course materials, notes, and assignments</p>
            </div>
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" id="search-material" placeholder="Search materials..." onkeyup="filterMaterials()">
            </div>
            <div class="materials-list" id="materials-container"></div>
        </section>

        <!-- RESULTS PAGE -->
        <section id="results-page" class="page hidden">
            <div class="page-header">
                <h2><i class="fas fa-chart-line"></i> Academic Results</h2>
                <p>View your test scores and progress</p>
            </div>
            <div class="card">
                <h3>Overall Performance: <span id="results-average">0%</span></h3>
                <div class="progress-bar-container" style="height: 20px;">
                    <div class="progress-bar" id="results-progress" style="width: 0%"></div>
                </div>
                <p>GPA: <strong id="results-gpa">0.00</strong></p>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Assignment</th>
                            <th>Score</th>
                            <th>Grade</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody id="results-table-body"></tbody>
                </table>
            </div>
        </section>

        <!-- PROFILE PAGE -->
        <section id="profile-page" class="page hidden">
            <div class="page-header">
                <h2><i class="fas fa-user"></i> My Profile</h2>
            </div>
            <div class="profile-card">
                <div class="profile-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="profile-info">
                    <h3 id="profile-name">Student Name</h3>
                    <p id="profile-email">student@gmail.com</p>
                    <p id="profile-role">Student</p>
                    <p id="profile-id">ID: TDBE/2025/001</p>
                </div>
            </div>
        </section>

        <!-- ADMIN PAGE -->
        <section id="admin-page" class="page hidden">
            <div class="page-header">
                <h2><i class="fas fa-cog"></i> Admin Panel</h2>
                <p>Manage your TDBE 1:2 2025/2026 Website</p>
            </div>
            
            <div class="admin-grid">
                <div class="card">
                    <h3><i class="fas fa-upload"></i> Upload Material</h3>
                    <form onsubmit="handleUpload(event)">
                        <div class="form-group">
                            <select id="upload-class" required><option value="">Select Course</option></select>
                        </div>
                        <div class="form-group">
                            <input type="text" id="upload-title" placeholder="Material Title" required>
                        </div>
                        <div class="form-group">
                            <select id="upload-type" required>
                                <option value="">Select Type</option>
                                <option value="PDF">PDF</option>
                                <option value="DOCX">DOCX</option>
                                <option value="PPTX">PPTX</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-primary"><i class="fas fa-upload"></i> Upload</button>
                    </form>
                </div>
                
                <div class="card">
                    <h3><i class="fas fa-plus"></i> Add Result</h3>
                    <form onsubmit="handleAddResult(event)">
                        <div class="form-group">
                            <input type="text" id="result-subject" placeholder="Course Name" required>
                        </div>
                        <div class="form-group">
                            <input type="text" id="result-assignment" placeholder="Assignment Name" required>
                        </div>
                        <div class="form-group">
                            <input type="number" id="result-score" placeholder="Score (0-100)" required>
                        </div>
                        <div class="form-group">
                            <input type="text" id="result-comment" placeholder="Comment" required>
                        </div>
                        <button type="submit" class="btn-primary"><i class="fas fa-plus"></i> Add Result</button>
                    </form>
                </div>
            </div>
        </section>

    </div>

    <!-- Notification -->
    <div id="notification"></div>

    <!-- Footer -->
    <footer>
        <p><i class="fas fa-hospital-alt"></i> TDBE 1:2 2025/2026 - Biomedical Engineering Learning Portal</p>
        <p>&copy; 2026 All Rights Reserved</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
