import { ScheduleEntity } from "./schedule.entity";

export class ScheduleValue implements ScheduleEntity {
    

    entry_time: number;
    departure_time: number

  constructor({entry_time,departure_time}:
    { entry_time:number,departure_time:number}) {
   
  
        this.entry_time = entry_time;
        this.departure_time=departure_time
    }
}