import { DataTypes, Model } from "sequelize"
import  sequelize  from "../../../../db/connection"
import { Store } from '../../../../ContextUser/store/infrastructure/models/store.model'

export const LocationStore = sequelize.define("LocationStore",
  {
    id_location_store: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    length_store: {
      type: DataTypes.INTEGER,
    },
    latitude_store:{
      type: DataTypes.INTEGER,
    }
  }
)




