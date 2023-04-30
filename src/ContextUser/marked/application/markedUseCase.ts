import { MarkedRepository } from '../domain/marked.repository';
import { MarkedValue } from '../domain/marked.value';


export class MarkedUseCase {
    
  constructor(private readonly MarkedRepository: MarkedRepository) {}

  public listMarked = async () =>{
    const markedValue = await this.MarkedRepository.listMarked();  
    return markedValue;
  }

  public insertMarked = async ({date,entry_time,departure_time,status_marked,late_time,extraTime,employeeId}
    :{date:string,entry_time:string,departure_time:string,status_marked:string,late_time:string, extraTime:string,employeeId:number}) =>{
      
    const marked = new MarkedValue({date,entry_time,departure_time,status_marked,late_time,extraTime,employeeId})
    const markedCreate = await this.MarkedRepository.insertMarked(marked);  
    return markedCreate;
  }
}
