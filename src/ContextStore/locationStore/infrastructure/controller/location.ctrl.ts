import { Response , Request } from "express";
import { LocationUseCase } from "../../application/locationUseCase";

export class LocationController {
  
  constructor(private LocationUseCase:LocationUseCase) {
    this.listLocationCtrl = this.listLocationCtrl.bind(this)
  }

  public async listLocationCtrl(req: Request, res: Response){
    
    const locationStore =await this.LocationUseCase.listLocation();
    
    try {
      res.send(locationStore);
    } catch (error) {
      res.status(400)
    }
  
  }

}
