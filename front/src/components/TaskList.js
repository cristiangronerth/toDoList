import { useEffect, useState } from "react"
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function TaskList() {

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () =>{
    const response = await fetch('http://localhost:4000/tasks')
    const data = await response.json()
    setTasks(data);

  }

  useEffect(()=>{
    loadTasks()
  },[])
  

  return (
    <>
      <h1>Lista de Tareas</h1>
      {
        tasks.map(task => (
          <Card style={{
            marginBottom: ".7rem",
            backgroundColor:"#1e272e"
          }}>
            <CardContent style={{
              display:"flex",
              justifyContent:"space-between"
            }}>
            <div style={{color: "white"}}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>

            <div> 
              <Button variant="contained" color="inherit" onClick={()=>console.log("Editar")} >
                Edit
              </Button>

              <Button variant="contained" color="warning" onClick={()=>console.log("Eliminar")} style={{marginLeft: ".5rem"}}>
                Eliminar
              </Button>
            </div>



            </CardContent>
          </Card>

        ))
      }
    </>
  )
}
