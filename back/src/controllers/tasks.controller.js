const express = require ("express")
const tareas = express.Router()
// para guardar dentro de postgre
const Task = require ("../models/index")

const saludoInicial= (req, res)=>{
  res.send("Hello world")
}
// traer todas las tareas
const getAllTasks = async (req, res)=>{
  try {
    const result = await Task.findAll()
    //res.status(200).send(result)
    res.status(200).json(
      result, // funciona solo con {dataValues.result}
    ) 
  } catch (error) {
    console.log(error.message);
  }
}

// traer una sola tarea
const getTask = async (req, res)=>{
  try {
    const { id } = req.params
    const result = await Task.findByPk(id)
      if(result === null) 
      return res.status(400).json({message:"Task not found"})
    res.status(200).json({result})
  } catch (error) {
      console.log(error.message);
  }
}


/* const createTask =  (req, res)=>{
  const { title, description } = req.body
  const result =  Task.create({ title, description }).then((user) => res.send(user))
  
 // console.log(result);

  //res.send("CREANDO una lista de tareas") 
} */
// crear una tarea
const createTask =  async (req, res)=>{
  const { title, description } = req.body
  try {
    const result = await Task.create({ title, description });
   // console.log(result);
    res.status(201).json({
      title,
      description
    })
  } catch (error) {
    console.log(error);
  }
  
}

const deleteTask = async (req, res)=>{
  res.send("ELIMINANDO una tarea")
}


const updateTask = async (req, res)=>{
  res.send("ACTUALIZANDO una tarea")
}

module.exports = {
  saludoInicial,
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
}