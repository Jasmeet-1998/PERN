const express = require('express');
const app = express();
const cors = require('cors');


require('dotenv').config();

const pool = require('./db');

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//Routes

// Create POST
app.post('/api/todos/new',async(req,res)=>{
  try{
    const {description} = req.body;

    const newToDo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);

    return res.json({
      status : '200',
      message : 'New To Do Added',
      new_todo: newToDo.rows[0]
    });
  }catch(err){
    console.error(err.message);
    return res.json({
      status: 'Failed',
      message: err
    });
  }
});

// Read GET
app.get('/api/todos/all',async(req,res)=>{
  try{

    const allToDo = await pool.query("SELECT * FROM todo");

    return res.json({
      status : '200',
      message : 'All todos grabbed..✨',
      all_todos: allToDo.rows
    });
  }catch(err){
    console.error(err.message);
    return res.json({
      status: 'Failed',
      message: err
    });
  }
});

// Single TODO by id GET
app.get('/api/todos/:id',async(req,res)=>{
  try{

    const {id} = req.params;
    const singletodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
    if(!singletodo.rows[0]){
      return res.status(500).json({
        status : '500',
        message : 'No Data Found'
      });
    }
    return res.json({
      status : '200',
      message : 'Single todo grabbed..✨',
      single_todo: singletodo.rows[0]
    });

  }catch(err){
    console.error(err.message);
    return res.json({
      status: 'Failed',
      message: err
    });
  }
});

// Update TODO by id PUT
app.put('/api/todos/:id',async(req,res)=>{
  try{

    const {id} = req.params;
    const {description} = req.body;
    const updateToDo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id]);

    return res.json({
      status : '200',
      message : 'To do updated✨',
      updated_todo_id: id
    });

  }catch(err){
    console.error(err.message);
    return res.json({
      status: 'Failed',
      message: err
    });
  }
});

// Delete TODO by id DELETE
app.delete('/api/todos/:id',async(req,res)=>{
  try{

    const {id} = req.params;
    const deleteToDo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);

    return res.json({
      status : '200',
      message : 'To do deleted✨',
      deleted_todo_id: id
    });

  }catch(err){
    console.error(err.message);
    return res.json({
      status: 'Failed',
      message: err
    });
  }
});

app.listen(5000,()=>{
  console.log(`Server Started at ${PORT}`)
});
