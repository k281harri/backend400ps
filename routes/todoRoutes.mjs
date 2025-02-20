import express from 'express';
import Todo from '../model/Todo.mjs';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  try {
    // Declare a variable then perform action on collection
    let newTodo = await Todo.create(req.body);

    // Return variable
    res.json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Read`
router.get('/', async (req, res) => {
  try {
    let allTodos = await Todo.find({});

    res.json(allTodos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    let updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);

    res.json({ msg: 'todo Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

export default router;
