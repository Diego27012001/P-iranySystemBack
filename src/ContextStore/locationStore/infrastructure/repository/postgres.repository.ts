/**
 * Infra! Postgres 
 */


import {LocationStore} from "../models/location_store.model"


export class PostgresRepository {

    async listLocation(): Promise<any[] | null> {
        const locationStore = await LocationStore.findAll();
        return locationStore;
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