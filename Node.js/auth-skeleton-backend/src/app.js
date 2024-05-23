const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const passportConfig = require('./config/passport-config');
const { authenticateJwt } = require('./middleware/auth.middleware');

dotenv.config();

const app = express();

app.use(express.json());

// Initialize passport
app.use(passport.initialize());
passportConfig(passport);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

app.get('/api/protected', authenticateJwt, (req, res) => {
  res.send('This is a protected route');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
