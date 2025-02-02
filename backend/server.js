const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const orgRoutes = require('./routes/orgRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
require('dotenv').config();
const path = require('path'); // Import path module

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


  


app.use('/api/auth', authRoutes);
app.use('/api/org', orgRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../frontend/build')));

// // Handle React routing, return all requests to React app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });