import { EmployeeEntity } from "./employee.entity";

export interface EmployeeRepository {

    // Metodos

    listEmployee(): Promise<EmployeeEntity[] | null>;
    listEmployeeId(id_user:Number): Promise<EmployeeEntity[] | null>;
    insertEmployee(employee:EmployeeEntity): Promise<EmployeeEntity | null>;
    
   
   
  
}
