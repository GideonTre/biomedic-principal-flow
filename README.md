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

        <!-- LOGIN PAGE -->
        <section id="login-page" class="page active">
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

                    <form id="login-form">
                        <div class="input-group">
                            <label for="login-email"><i class="fas fa-envelope"></i> Gmail Address</label>
                            <input type="email" id="login-email" placeholder="yourname@gmail.com" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="login-password"><i class="fas fa-lock"></i> Password</label>
                            <div class="password-input">
                                <input type="password" id="login-password" placeholder="Enter your password" required>
                                <button type="button" onclick="togglePassword('login-password')"><i class="fas fa-eye"></i></button>
                            </div>
                        </div>
                        
                        <div class="form-options">
                            <label class="remember-me">
                                <input type="checkbox" id="remember-me"> Remember me
                            </label>
                            <a href="#" onclick="showPage('forgot-password')" class="forgot-link">Forgot Password?</a>
                        </div>
                        
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-sign-in-alt"></i> Sign In
                        </button>
                    </form>
                    
                    <div class="auth-footer">
                        <p>Don't have an account? <a href="#" onclick="showPage('register')">Register here</a></p>
                    </div>
                    
                    <div class="demo-accounts">
                        <p><b>Demo Accounts:</b></p>
                        <p>Student: <code>student@gmail.com</code> / <code>123</code></p>
                        <p>Teacher: <code>teacher@gmail.com</code> / <code>123</code></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- REGISTER PAGE -->
        <section id="register-page" class="page hidden">
            <div class="auth-container">
                <div class="auth-illustration">
                    <div class="illustration-content">
                        <i class="fas fa-user-plus"></i>
                        <h2>Create Account</h2>
                        <p>Join TDBE 1:2 2025/2026</p>
                        <div class="features-list">
                            <div class="feature"><i class="fas fa-check-circle"></i> Instant Account Creation</div>
                            <div class="feature"><i class="fas fa-check-circle"></i> Email Verification</div>
                            <div class="feature"><i class="fas fa-check-circle"></i> Access All Materials</div>
                            <div class="feature"><i class="fas fa-check-circle"></i> 24/7 Support</div>
                        </div>
                    </div>
                </div>
                <div class="auth-box">
                    <div class="auth-header">
                        <div class="auth-logo"><i class="fas fa-user-plus"></i></div>
                        <h1>Create Account</h1>
                        <p>Fill in your details to get started</p>
                    </div>

                    <form id="register-form">
                        <div class="input-group">
                            <label for="reg-name"><i class="fas fa-user"></i> Full Name</label>
                            <input type="text" id="reg-name" placeholder="Enter your full name" required>
                        </div>
                        
                        <div class="input-group">
                            <label for="reg-email"><i class="fas fa-envelope"></i> Gmail Address</label>
                            <input type="email" id="reg-email" placeholder="yourname@gmail.com" required>
                            <small class="input-hint">Must be a valid Gmail address</small>
                        </div>
                        
                        <div class="input-group">
                            <label for="reg-password"><i class="fas fa-lock"></i> Password</label>
                            <div class="password-input">
                                <input type="password" id="reg-password" placeholder="Create a password" required minlength="6">
                                <button type="button" onclick="togglePassword('reg-password')"><i class="fas fa-eye"></i></button>
                            </div>
                            <small class="input-hint">Minimum 6 characters</small>
                        </div>
                        
                        <div class="input-group">
                            <label for="reg-confirm"><i class="fas fa-lock"></i> Confirm Password</label>
                            <div class="password-input">
                                <input type="password" id="reg-confirm" placeholder="Confirm your password" required>
                                <button type="button" onclick="togglePassword('reg-confirm')"><i class="fas fa-eye"></i></button>
                            </div>
                        </div>
                        
                        <div class="input-group">
                            <label for="reg-role"><i class="fas fa-users"></i> Account Type</label>
                            <select id="reg-role" required>
                                <option value="">Select your role</option>
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                            </select>
                        </div>
                        
                        <div class="terms-checkbox">
                            <label>
                                <input type="checkbox" id="reg-terms" required> 
                                I agree to the <a href="#" onclick="showTerms()">Terms & Conditions</a>
                            </label>
                        </div>
                        
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-user-plus"></i> Create Account
                        </button>
                    </form>
                    
                    <div class="auth-footer">
                        <p>Already have an account? <a href="#" onclick="showPage('login')">Sign in here</a></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- EMAIL VERIFICATION PAGE -->
        <section id="verify-page" class="page hidden">
            <div class="auth-container">
                <div class="auth-illustration">
                    <div class="illustration-content">
                        <i class="fas fa-envelope-open-text"></i>
                        <h2>Verify Your Email</h2>
                        <p>We've sent a verification code to your email</p>
                    </div>
                </div>
                <div class="auth-box">
                    <div class="auth-header">
                        <div class="auth-logo"><i class="fas fa-envelope"></i></div>
                        <h1>Email Verification</h1>
                        <p>Enter the 6-digit code sent to <span id="verify-email-display"></span></p>
                    </div>

                    <form id="verify-form">
                        <div class="verification-code">
                            <input type="text" maxlength="1" class="code-input" oninput="moveToNext(this, 'code2')" id="code1">
                            <input type="text" maxlength="1" class="code-input" oninput="moveToNext(this, 'code3')" id="code2">
                            <input type="text" maxlength="1" class="code-input" oninput="moveToNext(this, 'code4')" id="code3">
                            <input type="text" maxlength="1" class="code-input" oninput="moveToNext(this, 'code5')" id="code4">
                            <input type="text" maxlength="1" class="code-input" oninput="moveToNext(this, 'code6')" id="code5">
                            <input type="text" maxlength="1" class="code-input" id="code6">
                        </div>
                        
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-check-circle"></i> Verify Email
                        </button>
                    </form>
                    
                    <div class="auth-footer">
                        <p>Didn't receive the code? <a href="#" onclick="resendVerification()">Resend Code</a></p>
                        <p><a href="#" onclick="showPage('register')">← Back to Registration</a></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FORGOT PASSWORD PAGE -->
        <section id="forgot-password-page" class="page hidden">
            <div class="auth-container">
                <div class="auth-illustration">
                    <div class="illustration-content">
                        <i class="fas fa-key"></i>
                        <h2>Reset Password</h2>
                        <p>Enter your email to receive a reset link</p>
                    </div>
                </div>
                <div class="auth-box">
                    <div class="auth-header">
                        <div class="auth-logo"><i class="fas fa-key"></i></div>
                        <h1>Forgot Password?</h1>
                        <p>Enter your email address and we'll send you a reset link</p>
                    </div>

                    <form id="forgot-form">
                        <div class="input-group">
                            <label for="forgot-email"><i class="fas fa-envelope"></i> Gmail Address</label>
                            <input type="email" id="forgot-email" placeholder="yourname@gmail.com" required>
                        </div>
                        
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-paper-plane"></i> Send Reset Link
                        </button>
                    </form>
                    
                    <div class="auth-footer">
                        <p><a href="#" onclick="showPage('login')">← Back to Login</a></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- RESET PASSWORD PAGE -->
        <section id="reset-password-page" class="page hidden">
            <div class="auth-container">
                <div class="auth-illustration">
                    <div class="illustration-content">
                        <i class="fas fa-lock-open"></i>
                        <h2>Set New Password</h2>
                        <p>Enter your new password below</p>
                    </div>
                </div>
                <div class="auth-box">
                    <div class="auth-header">
                        <div class="auth-logo"><i class="fas fa-lock"></i></div>
                        <h1>Set New Password</h1>
                        <p>Your new password must be different from previous passwords</p>
                    </div>

                    <form id="reset-form">
                        <div class="input-group">
                            <label for="new-password"><i class="fas fa-lock"></i> New Password</label>
                            <div class="password-input">
                                <input type="password" id="new-password" placeholder="Enter new password" required minlength="6">
                                <button type="button" onclick="togglePassword('new-password')"><i class="fas fa-eye"></i></button>
                            </div>
                        </div>
                        
                        <div class="input-group">
                            <label for="confirm-new-password"><i class="fas fa-lock"></i> Confirm New Password</label>
                            <div class="password-input">
                                <input type="password" id="confirm-new-password" placeholder="Confirm new password" required>
                                <button type="button" onclick="togglePassword('confirm-new-password')"><i class="fas fa-eye"></i></button>
                            </div>
                        </div>
                        
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-save"></i> Reset Password
                        </button>
                    </form>
                    
                    <div class="auth-footer">
                        <p><a href="#" onclick="showPage('login')">← Back to Login</a></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SUCCESS PAGE -->
        <section id="success-page" class="page hidden">
            <div class="success-container">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h1 id="success-title">Success!</h1>
                <p id="success-message">Your action was completed successfully.</p>
                <button class="btn-primary" onclick="showPage('login')" style="max-width: 300px; margin: 2rem auto;">
                    <i class="fas fa-arrow-right"></i> Continue
                </button>
            </div>
        </section>

        <!-- DASHBOARD PAGE -->
        <section id="dashboard-page" class="page hidden">
            <div class="page-header">
                <div class="welcome-section">
                    <h2>Welcome
