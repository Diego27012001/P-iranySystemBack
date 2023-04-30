/**
 * Infra! Postgres 
 */


import { SnackRepository } from '../../domain/snack.repository';
import { Snack_Time } from '../models/snack_time.model';



export class PostgresRepository implements SnackRepository{

    async listSnack(): Promise<any[] | null> {
        const snack = await Snack_Time.findAll();
        return snack;
    }
   
    async insertSnack(snackIn: any): Promise<any| null>{
        console.log(snackIn);
        const snack = await Snack_Time.create(snackIn);
        return snack;
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