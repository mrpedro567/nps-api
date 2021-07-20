import { knex } from 'knex';
import databaseConfig from './database';

const connection = knex(databaseConfig);

export default connection;