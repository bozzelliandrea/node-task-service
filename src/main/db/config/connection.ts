import {createConnection} from "typeorm";

export const connect = async () => { await createConnection({
        type: process.env.DB_TYPE as any,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
        synchronize: true,
        logging: true,
        entities: [
            'src/db/entity/*.ts'
        ],
        migrations: [
            'src/db/migrations/*.ts'
        ],
        cli: {
            entitiesDir: 'src/db/entity/',
            migrationsDir: 'src/db/migrations/'
        }
    });
};