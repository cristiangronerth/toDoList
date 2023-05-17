const {Router} = require('express');
const router = Router();

router.get("/", (req, res)=>{
  res.send("Hello world")
})
router.get("/tasks", (req, res)=>{
  res.send("RETORNANDO una LISTA de tareas")
})

router.get("/tasks/10", (req, res)=>{
  res.send("RETORNANDO una SOLA tarea")
})

router.post("/tasks", (req, res)=>{
  res.send("CREANDO una lista de tareas")
})

router.delete("/tasks", (req, res)=>{
  res.send("ELIMINANDO una tarea")
})

router.put("/tasks", (req, res)=>{
  res.send("ACTUALIZANDO una tarea")
})


module.exports = router