import { DataTypes, Model } from "sequelize"
import  sequelize  from "../../../../db/connection"
import { Employees } from "../../../employee/infrastructure/models/employee.model"

export const Store = sequelize.define("Store",
  {
    id_store: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_store: {
      type: DataTypes.STRING,
    },
    ruc: {
      type: DataTypes.STRING,
    },
    length_store: {
      type: DataTypes.FLOAT,
    },
    latitude_store: {
      type: DataTypes.FLOAT,
    }
  }
)


Store.hasMany(Employees, {
  foreignKey: 'storeId',
  sourceKey: 'id_store'
});


Employees.belongsTo(Store, {
  foreignKey: 'storeId',
  targetKey: 'id_store'
})


