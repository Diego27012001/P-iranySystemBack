import { Response , Request } from "express";
import { TypeUseCase } from "../../application/type_userUseCase";

export class TypeController {
  
  constructor(private TypeUseCase: TypeUseCase) {
    this.listTypeCtrl = this.listTypeCtrl.bind(this)
    this.insertTypeCtrl = this.insertTypeCtrl.bind(this)
  }

  public async listTypeCtrl(req: Request, res: Response){
    
    const type_user =await this.TypeUseCase.listType();
    
    try {
      res.send(type_user);
    } catch (error) {
      res.status(400)
    }
  
  }


  public async insertTypeCtrl({ body }: Request, res: Response) {

    try {
      const type = await this.TypeUseCase.insertType(body);
      res.send(type)
    } catch (error) {
      res.status(500).json({
        message: "ERROR" + error
      })
    }
  }

}
