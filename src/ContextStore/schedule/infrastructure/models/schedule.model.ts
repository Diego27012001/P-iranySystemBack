import { DataTypes, Model } from "sequelize"
import  {sequelize}  from "../../../../db/connection"
import { Store } from '../../../../ContextUser/store/infrastructure/models/store.model'

export const Schedule = sequelize.define("Schedule",
  {
    id_schedule: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    entry_time: {
      type: DataTypes.INTEGER,
    },
    departure_time:{
      type: DataTypes.INTEGER,
    }
  }
)

Schedule.hasMany(Store,{
  foreignKey: 'scheduleId',
  sourceKey: 'id_schedule'
});

Store.belongsTo(Schedule,{
  foreignKey: 'scheduleId',
  targetKey: 'id_schedule'
})


