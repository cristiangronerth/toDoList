const { Router } = require('express');
const router = Router();

const { getAllTasks, getTask, createTask, deleteTask, updateTask, saludoInicial } = require ('../controllers/tasks.controller')

router.get("/tasks", getAllTasks) 


router.get("/", saludoInicial)

router.get("/tasks/10", getTask)

router.post("/tasks", createTask)

router.delete("/tasks", deleteTask)

router.put("/tasks", updateTask)


module.exports = router