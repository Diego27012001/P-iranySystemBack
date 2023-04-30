/**
 * Infra! Postgres 
 */


import { Employees } from "../../../employee/infrastructure/models/employee.model";
import {Marked} from "../models/marked.model"


export class PostgresRepository {

    async listMarked(): Promise<any[] | null> {
        const marked = await Marked.findAll({
            include: [{
                model: Employees,
                attributes: ['nameuser']
              }
            ]
        });
        return marked;
    }
   
    async insertMarked(markedIn: any): Promise<any| null>{

        const marked = await Marked.create(markedIn);
        return marked;
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