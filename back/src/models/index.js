const S =  require("sequelize");
const db = require("../../database/index");

class Task extends S.Model{}

Task.init({
  title:{
    type: S.STRING
  },
  description:{
    type: S.STRING
  }
},{
    sequelize:db,
    modelName: "Task"
})


module.exports = Task