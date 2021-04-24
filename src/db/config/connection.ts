import {createConnection} from "typeorm";

export const connect = async () => { await createConnection({
        type: "postgres",
        host: "ec2-54-75-248-49.eu-west-1.compute.amazonaws.com",
        port: 5432,
        username: "ijmnrctliiubsu",
        password: "bea22ee611eff566e9d1114d705900300ed9cec337ea82c0fa635782a0d595c1",
        database: "ddgl2d6q4mmbd7",
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
        synchronize: false,
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