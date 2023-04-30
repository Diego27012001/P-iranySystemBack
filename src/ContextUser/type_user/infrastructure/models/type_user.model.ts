import { DataTypes, Model } from "sequelize"
import  sequelize  from "../../../../db/connection"
import { Employees } from "../../../employee/infrastructure/models/employee.model"

export const UserType = sequelize.define("UserType",
  {
    id_user_type: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    worth: {
      type: DataTypes.STRING,
    }
  }
)

UserType.hasMany(Employees,{
  foreignKey: 'typeId',
  sourceKey: 'id_user_type'
});


Employees.belongsTo(UserType,{
  foreignKey: 'typeId',
  targetKey: 'id_user_type'
})


