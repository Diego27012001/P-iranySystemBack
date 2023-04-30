import { ScheduleRepository } from '../domain/schedule.repository';
import { ScheduleValue } from '../domain/schedule.value';

export class ScheduleUseCase {
    
  constructor(private readonly ScheduleRepository: ScheduleRepository) {}

  public listSchedule = async () =>{
    const scheduleValue = await this.ScheduleRepository.listSchedule(); 
    return scheduleValue; 
  }

  public insertSchedule = async ({entry_time, departure_time}:
    {entry_time:number, departure_time:number}) =>{

      
      const schedule = new ScheduleValue({entry_time, departure_time})
      const scheduleCreate = await this.ScheduleRepository.insertSchedule(schedule);
      return scheduleCreate;
   
  }

}
