/**
 * Infra! Postgres 
 */


import { Store } from "../../../store/infrastructure/models/store.model";
import { UserType } from "../../../type_user/infrastructure/models/type_user.model";
import {Employees} from "../models/employee.model"


export class PostgresRepository {

    async listEmployee(): Promise<any[] | null> {
        const employee = await Employees.findAll({
            include: [{
                model: Store,
                attributes: ['name_store']
              },
              {
                model: UserType,
                attributes:  ['worth']
              }
            ]
        });
        return employee;
    }

    async listEmployeeId(): Promise<any[] | null> {
        const employee = await Employees.findAll({
            include: [{
                model: Store,
                attributes: ['name_store']
              },
              {
                model: UserType,
                attributes:  ['worth']
              }
            ]
        });
        return employee;
    }

    async insertEmployee(employeeIn: any): Promise<any| null>{

        const employee = await Employees.create(employeeIn);         
        return employee;
    }
   
    
}


/*
import { UserEntity } from "../../domain/user.entity";
import store from '../models/store.model';
 async findUserById(uuid: string): Promise<any> {
        const user = await UserModel.findOne({uuid})
        return user
    }
    async registerUser(userIn: UserEntity): Promise<any> {
        const user = await UserModel.create(userIn)
        return user
    }
    async listUser(): Promise<any> {
        const user = await UserModel.find()
        return user
    }

    */