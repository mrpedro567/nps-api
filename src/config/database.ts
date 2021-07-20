import { Knex } from 'knex';

const databaseConfig: Knex.Config = {
    client: 'mssql',
    connection: {
        host: 'localhost',
        user: 'sa',
        password: 'dbaasert',
        database: 'nps'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        database: 'knex_migrations'
    },
    debug: true,
    useNullAsDefault: true
}

export default databaseConfig;