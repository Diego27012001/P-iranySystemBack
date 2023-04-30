import { DataTypes } from "sequelize"
import  sequelize  from "../../../../db/connection"
import { Employees } from "../../../employee/infrastructure/models/employee.model"


export const Marked = sequelize.define("Marked",
  {
    id_marked: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date:{
      type: DataTypes.STRING,
    },
    entry_time: {
      type: DataTypes.STRING,
    },
    departure_time: {
        type: DataTypes.STRING,
    },
    status_marked: {
        type: DataTypes.STRING,
    },
    late_time:{
      type: DataTypes.STRING,
    },
    extraTime:{
      type: DataTypes.STRING,
    }
  }
)
    
/*

Marked.hasMany(Employees,{
  foreignKey: 'markedId',
  sourceKey: 'id_marked'
})

Employees.belongsTo(Marked,{
  foreignKey: 'markedId',
  targetKey: 'id_marked'
})*/
