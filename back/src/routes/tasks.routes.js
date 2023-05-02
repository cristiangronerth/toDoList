const {Router} = require('express');
const router = Router();

router.get("/tasks", (req, res)=>{
  res.send("Retornando una lista de tareas")
})

router.get("/tasks/10", (req, res)=>{
  res.send("Retornando una sola tarea")
})

router.post("/tasks", (req, res)=>{
  res.send("Creando una lista de tareas")
})

router.delete("/tasks", (req, res)=>{
  res.send("Eliminando una tarea")
})

router.put("/tasks", (req, res)=>{
  res.send("Actualizando una tarea")
})


module.exports = router