const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require ('cors');
const taskRoutes = require("./routes/tasks.routes");
const db = require("../database/index")
require("./models/index")
const { port } = require('./config')

app.use(cors()) //comunica ambos servidores de manera simple, se comunica con otro back, el de react
app.use(morgan("dev"));
app.use(express.json());


app.use(taskRoutes);

app.use((err, req, res, next)=>{
  return res.json({
    message: err.message
  })
})



db.sync({force: false}).then(()=>{
  console.log("Base de datos conectada");
  app.listen(port, ()=>{
    console.log("server on port 4000");
  });
})