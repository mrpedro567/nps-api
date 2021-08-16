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

    create(req: Request, res: Response){
        const query = `
            INSERT INTO Nps (
                Nota,
                Motivo,
                Email, 
                Nome,
                dataInclusao
            )
            VALUES (
                ${req.body.nota},
                '${req.body.motivo}',
                '${req.body.email}',
                '${req.body.nome}',
                '${req.body.data}'
            )
        `;

        this.database.raw(query)
            .then((result) => {
                res.status(201).send({status: true});
            })
            .catch((err) => {
                console.log(err);

                res.status(500).send(err.message);
            });
    }
}



export default NpsController;