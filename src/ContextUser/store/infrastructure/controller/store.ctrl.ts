import { Response , Request } from "express";
import { StoreUseCase } from "../../application/storeUseCase";

export class StoreController {
  
  constructor(private StoreUseCase: StoreUseCase) {
    this.listStoreCtrl = this.listStoreCtrl.bind(this)
    this.insertStoreCtrl = this.insertStoreCtrl.bind(this)
  }

  public async listStoreCtrl(req: Request, res: Response){
    
    const user =await this.StoreUseCase.listStore();
    
    try {
      res.send(user);
    } catch (error) {
      res.status(400)
    }
  
  }

  
  public async insertStoreCtrl({ body }: Request, res: Response) {

    try {
      const store = await this.StoreUseCase.insertStore(body);        
      res.send(store)
    } catch (error) {
      res.status(500).json({
        message: "ERROR" + error
      })
    }
  }

}
