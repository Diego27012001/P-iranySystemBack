import { Response , Request } from "express";
import { PermissionUseCase } from "../../application/permissionUseCase";


export class PermissionController {
  
  constructor(private PermissionUseCase: PermissionUseCase) {
    this.listPermissionCtrl = this.listPermissionCtrl.bind(this)
    this.insertPermissionCtrl = this.insertPermissionCtrl.bind(this)
  }

  public async listPermissionCtrl(req: Request, res: Response){
    
    const permission =await this.PermissionUseCase.listPermission();
    
    try {
      res.send(permission);
    } catch (error) {
      res.status(400)
    }
  
  }

  public async insertPermissionCtrl({body}: Request, res: Response) {
    console.log('ctrl')
    console.log(body)
 
    try {
      const permission = await this.PermissionUseCase.insertPermission(body); 
      res.send(permission)
    } catch (error) {
      res.status(500).json({
        message: "ERROR"+error
      })  
    }
}

}
