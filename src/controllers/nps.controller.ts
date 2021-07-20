import { Request, Response } from "express";
import { Knex } from 'knex';

class NpsController {
    database: Knex;

    constructor(database: Knex){
        this.database = database;
    }
}

export default NpsController;