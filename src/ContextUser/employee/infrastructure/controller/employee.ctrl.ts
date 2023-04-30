import { Response, Request } from "express";
import { EmployeeUseCase } from '../../application/employeeUseCase';


export class EmployeeController {

  constructor(private EmployeeUseCase: EmployeeUseCase) {
    this.listEmployeeCtrl = this.listEmployeeCtrl.bind(this)
    this.insertEmployeeCtrl = this.insertEmployeeCtrl.bind(this)
  }

  public async listEmployeeCtrl(req: Request, res: Response) {

    const user = await this.EmployeeUseCase.listEmployee();

    try {
      res.send(user);
    } catch (error) {
      res.status(400)
    }

  }

  public async insertEmployeeCtrl(req: Request, res: Response) {


    console.log(req.file)
    try {
      //const employee = await this.EmployeeUseCase.insertPermission(body);     
      //res.send(employee)
    } catch (error) {
      res.status(500).json({
        message: "ERROR" + error
      })
    }
  }

}
