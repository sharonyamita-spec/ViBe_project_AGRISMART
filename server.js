const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const cropRoutes = require('./routes/cropRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/api/crops', cropRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
