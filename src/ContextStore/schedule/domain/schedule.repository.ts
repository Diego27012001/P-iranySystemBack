import { ScheduleEntity } from "./schedule.entity";

export interface ScheduleRepository {

    // Metodos

    listSchedule(): Promise<ScheduleEntity[] | null>;
    insertSchedule(schedule:ScheduleEntity): Promise<ScheduleEntity | null>;
    
   
   
  
}
