import { Request, Response } from "express";
import { SnackUseCase } from "../../application/snackUseCase";

export class SnackController {
  
  constructor(private SnackUseCase: SnackUseCase) {
    this.listSnackCtrl = this.listSnackCtrl.bind(this)
    this.insertSnacktCtrl = this.insertSnacktCtrl.bind(this)

  }

  public async listSnackCtrl(req: Request, res: Response){
    
    const snack =await this.SnackUseCase.listSnack();
    try {
      res.send(snack);
    } catch (error) {
      res.status(500).json({
        message: "ERROR"+error
      })
    }
  
  }

  public async insertSnacktCtrl({body}: Request, res: Response) {

      try {
        const snack = await this.SnackUseCase.insertSnack(body)
        res.send(snack)
      } catch (error) {
        res.status(500).json({
          message: "ERROR"+error
        })  
      }
  }

}
