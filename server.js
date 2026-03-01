const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const {
  Announcement, Assignment, Syllabus, Material,
  Portal, Video, Submission, Contact, User
} = require('./models');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Create uploads folder
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
  }
});
const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
    seedDatabase();
  })
  .catch(err => console.log('❌ MongoDB Error:', err.message));

// ================= SEED DEFAULT DATA =================
async function seedDatabase() {
  try {
    // Create users if none exist
    if (await User.countDocuments() === 0) {
      await User.insertMany([
        { email: 'admin@tdbe.edu', password: 'admin123', role: 'admin', name: 'Administrator', subjects: [] },
        { email: 'sumaiah@tdbe.edu', password: 'tutor123', role: 'tutor', name: 'Mrs. SUMAIAH ZAID N.', subjects: ['Hospital Management and Information Systems', 'Real Life Project 2'] },
        { email: 'marvin@tdbe.edu', password: 'tutor123', role: 'tutor', name: 'Mr. Marvin MAYAMBALA', subjects: ['Electronics and Devices', 'Real Life Project 2'] },
        { email: 'alice@tdbe.edu', password: 'tutor123', role: 'tutor', name: 'Miss ALICE MARTHA N.', subjects: ['Biomedical Signals and Systems', 'Real Life Project 2'] },
        { email: 'ogwang@tdbe.edu', password: 'tutor123', role: 'tutor', name: 'Mr. OGWANG EMMANUEL', subjects: ['Trouble Shooting in Medical Electronics', 'Medical Imaging Techniques', 'Real Life Project 2'] },
        { email: 'emmanuel@tdbe.edu', password: 'tutor123', role: 'tutor', name: 'Mr. EMMANUEL OMONGO', subjects: ['Biomedical Sensors and Measurement Devices', 'Real Life Project 2'] },
        { email: 'student@tdbe.edu', password: 'student123', role: 'student', name: 'Student User', subjects: [] }
      ]);
      console.log('✅ Users created');
    }

    // Create default announcement
    if (await Announcement.countDocuments() === 0) {
      await Announcement.create({
        title: 'Welcome to TDBE 1:2 2025/2026',
        content: 'Welcome to the Biomedical Engineering Learning Portal! Check regularly for announcements, assignments, and materials.',
        author: 'Administrator',
        date: new Date().toISOString().split('T')[0],
        type: 'info'
      });
    }

    // Create default contact
    if (await Contact.countDocuments() === 0) {
      await Contact.create({ name: 'TDBE 1:2 Administration', email: 'admin@tdbe.edu', phone: '+1234567890' });
    }

    // Create default portals
    if (await Portal.countDocuments() === 0) {
      await Portal.insertMany([
        { name: 'Google Classroom', url: 'https://classroom.google.com', description: 'Submit assignments here' },
        { name: 'Zoom', url: 'https://zoom.us', description: 'Online classes' }
      ]);
    }

    // Create default video
    if (await Video.countDocuments() === 0) {
      await Video.create({
        title: 'Signals and Systems - Neso Academy',
        url: 'https://www.youtube.com/embed/playlist?list=PLBlnK6fEyqRhqzJT87LsdQK_7YjD9R3ew',
        description: 'Complete playlist'
      });
    }

    console.log('✅ Database seeded!');
  } catch (error) {
    console.log('⚠️ Seed error:', error.message);
  }
}

// ================= API ROUTES =================

// ANNOUNCEMENTS
app.get('/api/announcements', async (req, res) => {
  res.json(await Announcement.find().sort({ _id: -1 }));
});
app.post('/api/announcements', async (req, res) => {
  res.json(await Announcement.create(req.body));
});
app.delete('/api/announcements/:id', async (req, res) => {
  await Announcement.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// ASSIGNMENTS
app.get('/api/assignments', async (req, res) => {
  res.json(await Assignment.find().sort({ _id: -1 }));
});
app.post('/api/assignments', upload.single('file'), async (req, res) => {
  const data = { ...req.body, fileName: req.file?.originalname, filePath: req.file?.path };
  res.json(await Assignment.create(data));
});
app.delete('/api/assignments/:id', async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// SYLLABUS
app.get('/api/syllabus', async (req, res) => {
  res.json(await Syllabus.find().sort({ _id: -1 }));
});
app.post('/api/syllabus', upload.single('file'), async (req, res) => {
  const data = { ...req.body, fileName: req.file?.originalname, filePath: req.file?.path };
  res.json(await Syllabus.create(data));
});
app.delete('/api/syllabus/:id', async (req, res) => {
  await Syllabus.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// MATERIALS
app.get('/api/materials', async (req, res) => {
  res.json(await Material.find().sort({ _id: -1 }));
});
app.post('/api/materials', upload.single('file'), async (req, res) => {
  const data = { ...req.body, fileName: req.file?.originalname, filePath: req.file?.path };
  res.json(await Material.create(data));
});
app.delete('/api/materials/:id', async (req, res) => {
  await Material.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// PORTALS
app.get('/api/portals', async (req, res) => res.json(await Portal.find()));
app.post('/api/portals', async (req, res) => res.json(await Portal.create(req.body)));
app.delete('/api/portals/:id', async (req, res) => {
  await Portal.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// VIDEOS
app.get('/api/videos', async (req, res) => res.json(await Video.find()));
app.post('/api/videos', async (req, res) => res.json(await Video.create(req.body)));
app.delete('/api/videos/:id', async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// SUBMISSIONS
app.get('/api/submissions', async (req, res) => res.json(await Submission.find().sort({ _id: -1 })));
app.post('/api/submissions', upload.single('file'), async (req, res) => {
  const data = {
    studentName: req.body.studentName,
    studentId: req.body.studentId,
    subject: req.body.subject,
    assignmentRef: req.body.assignmentRef,
    fileName: req.file?.originalname || 'submission.pdf',
    filePath: req.file?.path,
    date: new Date().toISOString().split('T')[0],
    status: 'pending'
  };
  res.json(await Submission.create(data));
});
app.put('/api/submissions/:id', async (req, res) => {
  await Submission.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
});

// CONTACT
app.get('/api/contact', async (req, res) => {
  let contact = await Contact.findOne();
  if (!contact) contact = await Contact.create({});
  res.json(contact);
});
app.put('/api/contact', async (req, res) => {
  let contact = await Contact.findOne();
  if (contact) await Contact.findByIdAndUpdate(contact._id, req.body);
  else contact = await Contact.create(req.body);
  res.json(contact);
});

// LOGIN
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) res.json({ success: true, user });
  else res.json({ success: false, message: 'Invalid credentials' });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API at http://localhost:${PORT}/api`);
});