const express = require ("express")
const tareas = express.Router()
// para guardar dentro de postgre
const Task = require ("../models/index")

const saludoInicial= (req, res)=>{
  res.send("Hello world")
}

// traer todas las tareas
const getAllTasks = async (req, res, next)=>{
  try {
    const result = await Task.findAll()
    //res.status(200).send(result)
    res.status(200).json(
      result, // funciona solo con {dataValues.result}
    ) 
  } catch (error) {
      next(error)
  }
}

// traer una sola tarea
const getTask = async (req, res, next)=>{
  try {
    const { id } = req.params
    const result = await Task.findByPk(id)
      if(result === null) 
      return res.status(400).json({message:"Task not found"})
    res.status(200).json({result})
  } catch (error) {
      next(error)
  }
}

/* const createTask =  (req, res)=>{
  const { title, description } = req.body
  const result =  Task.create({ title, description }).then((user) => res.send(user))
  
 // console.log(result);

  //res.send("CREANDO una lista de tareas") 
} */
// crear una tarea
const createTask =  async (req, res, next)=>{
  const { title, description } = req.body
  try {
    const result = await Task.create({ title, description });
   // console.log(result);
    res.status(201).json({
      title,
      description
    })
  } catch (error) {
      next(error)
  }
  
}

// borrar una tarea
const deleteTask = async (req, res, next)=>{
  try {
    const { id } = req.params
    const result = await Task.destroy({
      where:{
        id: id
      }})
      if (result === 0) 
      return res.status(400).json({message: "Task not found"})
      res.sendStatus(204) 
  } catch (error) {
      next(error)
  } 
}


/* const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const {title, description} = req.body
    
    const result = await Task.update({title, description}, {where:{id}})
  
    if(!result) // (result===null)
      return res.status(404).json({message:"Task not found"})// no funciona el error
      console.log(result);
    return res.json(result) // no puedo hacer que me muestre como queda en thunderclient
    } catch (error) {
    next(error)
  }
} */
const updateTask = async (req, res) => {
  try {
    const[row, result] = await Task.update(req.body, {
      where: { id: req.body.id },
      returning: true
    })  
    if(!result)      
      return res.status(404).json({message:"Task not found"});
      
    const tarea = result[0]
    const payload = {
      id: tarea.id,
      title: tarea.title,
      description: tarea.description
    }
    res.status(200).send(payload)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  saludoInicial,
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
}