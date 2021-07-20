import { Request, Response } from 'express';
import { Knex } from 'knex';

class TagController {
    database: Knex;

    constructor(database: Knex){
        this.database = database;
    }

    getTag(req: Request, res: Response){
        
    }
}

export default TagController;