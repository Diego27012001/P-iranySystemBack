import { DataTypes } from "sequelize"
import  {sequelize}  from "../../../../db/connection"
import { Marked } from "../../../marked/infrastructure/models/marked.model";
import { Permission } from "../../../permission/infrastructure/models/permission.model";


export const Employees = sequelize.define("Employee",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameuser: {
      type: DataTypes.STRING,
    },
    lastnameuser: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    dni: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    photoPath: {
      type: DataTypes.STRING,
    }
  }
)


/* EMPLOYEE- PERMISSION */
Employees.hasMany(Permission,{
  foreignKey: 'employeeId',
  sourceKey: 'user_id'
})


Permission.belongsTo(Employees,{
  foreignKey: 'employeeId',
  targetKey: 'user_id'
})

/*EMPLOYEE- MARKED*/

Employees.hasMany(Marked,{
  foreignKey: 'employeeId',
  sourceKey: 'user_id'
})

Marked.belongsTo(Employees,{
  foreignKey: 'employeeId',
  targetKey: 'user_id'
})
