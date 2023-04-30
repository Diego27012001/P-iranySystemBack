import { DataTypes, Model } from "sequelize"
import  {sequelize}  from "../../../../db/connection"


export const Permission = sequelize.define("Permission",
  {
    id_permission: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    day_permission: {
      type: DataTypes.STRING,
    },
    reason:{
      type: DataTypes.STRING,
    }
  }
)




