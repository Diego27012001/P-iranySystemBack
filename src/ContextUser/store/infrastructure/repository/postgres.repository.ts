/**
 * Infra! Postgres 
 */


import { Schedule } from "../../../../ContextStore/schedule/infrastructure/models/schedule.model";
import {Store} from "../models/store.model"


export class PostgresRepository {

    async listStore(): Promise<any[] | null> {
        const store = await Store.findAll({
            include: [{
                model: Schedule,
                attributes: ['entry_time','departure_time']
              }
            ]
        });
        return store;
    }
   
    async insertStore(storeIn: any): Promise<any| null>{

        const store = await Store.create(storeIn);         
        return store;
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