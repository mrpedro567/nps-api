import { Request, Response } from "express";
import { Knex } from 'knex';

class NpsController {
    database: Knex;

    constructor(database: Knex){
        this.database = database;
    }

    get(req: Request, res: Response){
        res.status(200).send({message: 'Ok'});
    }
}



export default NpsController;