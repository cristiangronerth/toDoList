const express = require("express");
const app = express();
const morgan = require("morgan");

const taskRoutes = require("./routes/tasks.routes");

app.use(morgan("dev"));

app.use(taskRoutes);

app.listen(4000);
console.log("server on port 4000");
