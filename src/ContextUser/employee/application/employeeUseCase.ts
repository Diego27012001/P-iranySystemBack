import { EmployeeRepository } from '../domain/employee.repository';
import { EmployeeValue } from '../domain/employee.value';

export class EmployeeUseCase {
    
  constructor(private readonly  EmployeeRepository:  EmployeeRepository) {}

  public listEmployee = async () =>{
    const employeeValue = await this.EmployeeRepository.listEmployee();
    return employeeValue;  
  }

 

  public insertPermission = async ({nameuser, lastnameuser, phone,dni, email,storeId,typeId,photo}:
    {nameuser:string, lastnameuser:string, phone:string,dni:string, email:string,storeId:number,typeId:number,photo:Buffer}) =>{

      
      const employee = new EmployeeValue({nameuser,lastnameuser, phone,dni, email,storeId,typeId,photo})
      const employeeCreate = await this.EmployeeRepository.insertEmployee(employee);
      return employeeCreate;
   
  }

}

