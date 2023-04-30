
import { Sequelize } from 'sequelize';



export const sequelize = new Sequelize({
    database: "defaultdb",
    username: "doadmin",
    password: "AVNS_9rXvMpCOWkYL7_R3eyM",
    host: "db-systempirani-do-user-14026668-0.b.db.ondigitalocean.com",
    port: 25060,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    },
});

