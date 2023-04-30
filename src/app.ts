import express,{ Application } from 'express';
import cors from 'cors';


import './ContextUser/store/infrastructure/models/store.model';
import './ContextUser/marked/infrastructure/models/marked.model';
import './ContextUser/snackTime/infrastructure/models/snack_time.model';
import './ContextUser/type_user/infrastructure/models/type_user.model';
import './ContextUser/permission/infrastructure/models/permission.model';
import './ContextStore/locationStore/infrastructure/models/location_store.model';
import './ContextStore/schedule/infrastructure/models/schedule.model';

import userRoute from './ContextUser/employee/infrastructure/route/employee.route';
import markedRoute from './ContextUser/marked/infrastructure/route/marked.route';
import permissionRoute from './ContextUser/permission/infrastructure/route/permission.route';
import snackRouter from './ContextUser/snackTime/infrastructure/route/store.route';
import storeRouter from './ContextUser/store/infrastructure/route/store.route';
import typeRouter from './ContextUser/type_user/infrastructure/route/type_user.route';
import locationRouter from './ContextStore/locationStore/infrastructure/route/location.route';
import scheduleRouter from './ContextStore/schedule/infrastructure/route/schedule.route';
import {sequelize} from './db/connection';



import  serveStatic from "serve-static";
import path from 'path';





var bodyParser = require('body-parser')

class app{

    private app: Application; // express.Aplication
    private port: string;




    constructor() {

        this.app = express();
        // Permitir solicitudes desde cualquier origen
        this.app.use(cors());

        // Permitir solicitudes con los siguientes métodos HTTP
        this.app.options('*', cors());
        this.app.use(express.json());
        this.port = process.env.PORT || '3001';

        this.app.use(serveStatic(path.join(__dirname, 'public')));
        console.log(__dirname)
        // Métodos iniciales
        this.dbConnection();
         
        this.app.use(express.json());
        
        this.app.use(userRoute);
        this.app.use(markedRoute);
        this.app.use(permissionRoute);
        this.app.use(snackRouter);
        this.app.use(storeRouter);
        this.app.use(typeRouter);
        this.app.use(locationRouter);
        this.app.use(scheduleRouter);
         
    }

    async dbConnection() {

        try {

            await sequelize.sync(); //{force:true} 
            console.log('Database Connect');

        } catch (error: any) {
            throw new Error( error );
        }

    }

    /*
    middlewares(): void {

        
    }*/

    listen(): void {
        this.app.listen( this.port, () => {
            console.log('Working on port:', this.port);
        });
    }

}

export default app;



