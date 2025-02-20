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

// Listener
app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});
