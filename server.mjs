// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import todoRoutes from './routes/todoRoutes.mjs';

// Setup
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

// DB Connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/todo', todoRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));



// Listener
app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
})
