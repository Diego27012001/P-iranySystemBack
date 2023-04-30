import { DataTypes } from "sequelize"
import  sequelize  from "../../../../db/connection"
import { Employees } from "../../../employee/infrastructure/models/employee.model"


export const Snack_Time = sequelize.define("Snack_time",
  {
    id_snack_time: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    entry_time: {
      type: DataTypes.TIME,
    },
    departure_time: {
        type: DataTypes.TIME,
    }
  }
)
/*

Snack_Time.hasMany(Employees,{
  foreignKey: 'snackId',
  sourceKey: 'id_snack_time'
});


Employees.belongsTo(Snack_Time,{
  foreignKey: 'snackId',
  targetKey: 'id_snack_time'
})*/


