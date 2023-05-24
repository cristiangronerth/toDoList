const express = require("express");
const app = express();
const morgan = require("morgan");
const taskRoutes = require("./routes/tasks.routes");
const db = require("../database/index")
require("./models/index")


app.use(morgan("dev"));
app.use(express.json());


app.use(taskRoutes);



db.sync({force: false}).then(()=>{
  console.log("Base de datos conectada");
  app.listen(4000, ()=>{
    console.log("server on port 4000");
  });
})