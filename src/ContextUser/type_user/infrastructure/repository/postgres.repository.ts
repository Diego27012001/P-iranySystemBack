/**
 * Infra! Postgres 
 */


import {UserType} from "../models/type_user.model"


export class PostgresRepository {

    async listType(): Promise<any[] | null> {
        const type_user = await UserType.findAll();
        return type_user;
    }

    async insertType(typeIn: any): Promise<any| null>{

        const type = await  UserType.create(typeIn);
        return type;
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