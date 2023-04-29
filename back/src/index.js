const express =  require ('express');
const app = express();
const morgan = require('morgan')

app.use(morgan('dev'))


app.listen(4000)
console.log("server on port 4000");