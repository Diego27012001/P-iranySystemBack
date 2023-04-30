/**
 * Infra! Postgres 
 */


import {Permission} from "../models/permission.model"
import { PermissionRepository } from '../../domain/permission.repository';
import { Employees } from "../../../employee/infrastructure/models/employee.model";

export class PostgresRepository implements PermissionRepository{

    async listPermission(): Promise<any[] | null> {
        const permission = await Permission.findAll({
            include: [{
                model: Employees,
                attributes: ['nameuser','lastnameuser']
              }
            ]
        });
        return permission;
    }
   
    async insertPermission(permissionIn: any): Promise<any| null>{

        const permission = await Permission.create(permissionIn);
        return permission;
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