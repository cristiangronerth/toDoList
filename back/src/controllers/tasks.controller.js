
const saludoInicial= (req, res)=>{
  res.send("Hello world")
}

const getAllTasks = async (req, res)=>{
  res.send("RETORNANDO una LISTA de tareas")
}

const getTask = async (req, res)=>{
  res.send("RETORNANDO una SOLA tarea")
}

const createTask = async (req, res)=>{
  res.send("CREANDO una lista de tareas")
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