/**
 * Infra! Postgres 
 */


import {Schedule} from "../models/schedule.model"


export class PostgresRepository {

    async listSchedule(): Promise<any[] | null> {
        const schedule = await Schedule.findAll();
        return schedule;
    }
   

    async insertSchedule(scheduleIn: any): Promise<any| null>{

        const schedule = await Schedule.create(scheduleIn);         
        return schedule;
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