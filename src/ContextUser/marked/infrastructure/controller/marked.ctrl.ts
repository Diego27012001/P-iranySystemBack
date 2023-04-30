import { Response, Request } from "express";
import { MarkedUseCase } from "../../application/markedUseCase";

export class MarkedController {

  constructor(private MarkedUseCase: MarkedUseCase) {
    this.listMarkedCtrl = this.listMarkedCtrl.bind(this)
    this.insertMarkedCtrl = this.insertMarkedCtrl.bind(this)
  }

  public async listMarkedCtrl(req: Request, res: Response) {

    const marked = await this.MarkedUseCase.listMarked();

    try {
      res.send(marked);
    } catch (error) {
      res.status(400)
    }

  }

  public async insertMarkedCtrl({ body }: Request, res: Response) {

    try {
      const marked = await this.MarkedUseCase.insertMarked(body);
      res.send(marked)
    } catch (error) {
      res.status(500).json({
        message: "ERROR" + error
      })
    }
  }

}
