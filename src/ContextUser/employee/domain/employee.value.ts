import { EmployeeEntity } from "./employee.entity";

export class EmployeeValue implements EmployeeEntity {
  
    nameuser: string;
    lastnameuser: string;
    phone: string;
    dni: string;
    email: string;
    storeId: number;
    typeId: number;
    photo: Buffer


  constructor({nameuser, lastnameuser,phone,dni,email,storeId,typeId,photo}:
    {nameuser:string, lastnameuser:string,phone:string,dni:string,email:string,storeId:number,typeId:number,photo:Buffer}) {

        this.nameuser = nameuser;
        this.lastnameuser = lastnameuser;
        this.phone = phone;
        this.dni = dni;
        this.email = email;
        this.storeId = storeId;
        this.typeId = typeId
        this.photo = photo

    }

}