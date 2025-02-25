// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import todoRoutes from './routes/todoRoutes.mjs';
import cors from 'cors';

// Setup
const app = express();
dotenv.config();
const PORT = process.env.port || 3000;

// DB Connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Routes
app.use('/todo', todoRoutes);

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));

// menu schema
const menuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const Menu = mongoose.model('Menu', menuSchema);

app.get('/menu', async (req, res) => {
  const menuItems = await Menu.find();
  res.json(menuItems);
});

app.post('/menu', async (req, res) => {
  const newItem = new Menu(req.body);
  await newItem.save();
  res.json(newItem);
});


// Listener
app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
})
