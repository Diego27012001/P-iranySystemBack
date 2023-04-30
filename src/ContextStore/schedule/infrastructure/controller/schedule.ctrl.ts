import { Response , Request } from "express";
import { ScheduleUseCase } from "../../application/scheduleUseCase";

export class ScheduleController {

  constructor(private ScheduleUseCase: ScheduleUseCase) {
    this.listScheduleCtrl = this.listScheduleCtrl.bind(this)
    this.insertScheduleCtrl = this.insertScheduleCtrl.bind(this)
  }

  public async listScheduleCtrl(req: Request, res: Response){
    
    const schedule =await this.ScheduleUseCase.listSchedule();
    
    try {
      res.send(schedule);
    } catch (error) {
      res.status(400)
    }
  
  }


  public async insertScheduleCtrl({ body }: Request, res: Response) {

    try {
      const schedule = await this.ScheduleUseCase.insertSchedule(body);
      res.send(schedule);
    } catch (error) {
      res.status(500).json({
        message: "ERROR" + error
      })
    }
  }
}
