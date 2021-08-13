import { Request, Response } from "express";
import { Knex } from 'knex';

class UserController {
    database: Knex;

    constructor(database: Knex){
        this.database = database;
    }

    validate(req: Request, res: Response){
        
    }
}

export default UserController;