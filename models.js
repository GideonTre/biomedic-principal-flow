const mongoose = require('mongoose');

// ================= ANNOUNCEMENT =================
const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  type: { type: String, default: 'info' }
});

// ================= ASSIGNMENT =================
const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: String, required: true },
  fileName: { type: String },
  filePath: { type: String },
  author: { type: String, required: true },
  date: { type: String, required: true }
});

// ================= SYLLABUS =================
const syllabusSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  fileName: { type: String, required: true },
  filePath: { type: String },
  date: { type: String, required: true },
  author: { type: String, required: true }
});

// ================= MATERIAL =================
const materialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  fileName: { type: String, required: true },
  filePath: { type: String },
  date: { type: String, required: true },
  author: { type: String, required: true }
});

// ================= PORTAL =================
const portalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String }
});

// ================= VIDEO =================
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String }
});

// ================= SUBMISSION =================
const submissionSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  studentId: { type: String, required: true },
  subject: { type: String, required: true },
  assignmentRef: { type: String, required: true },
  fileName: { type: String, required: true },
  filePath: { type: String },
  date: { type: String, required: true },
  status: { type: String, default: 'pending' }
});

// ================= CONTACT =================
const contactSchema = new mongoose.Schema({
  name: { type: String, default: 'TDBE Administration' },
  email: { type: String, default: 'admin@tdbe.edu' },
  phone: { type: String, default: '+1234567890' }
});

// ================= USER =================
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  name: { type: String, required: true },
  subjects: [{ type: String }]
});

// ================= EXPORT MODELS =================
module.exports = {
  Announcement: mongoose.model('Announcement', announcementSchema),
  Assignment: mongoose.model('Assignment', assignmentSchema),
  Syllabus: mongoose.model('Syllabus', syllabusSchema),
  Material: mongoose.model('Material', materialSchema),
  Portal: mongoose.model('Portal', portalSchema),
  Video: mongoose.model('Video', videoSchema),
  Submission: mongoose.model('Submission', submissionSchema),
  Contact: mongoose.model('Contact', contactSchema),
  User: mongoose.model('User', userSchema)
};