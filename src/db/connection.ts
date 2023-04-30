import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db_host = process.env.HOST;
const db_port = process.env.PORT ? process.env.PORT : 25060;
const db_user = process.env.USERNAME ? process.env.USERNAME : 'doadmin';
const db_pass = process.env.PASSWORD;
const db_database = process.env.DATABASE ? process.env.DATABASE :'defaultdb' ;


const sequelize = new Sequelize('defaultdb', 'doadmin', 'AVNS_9rXvMpCOWkYL7_R3eyM', {
    host: 'db-systempirani-do-user-14026668-0.b.db.ondigitalocean.com',
    port: 25060,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export default sequelize;