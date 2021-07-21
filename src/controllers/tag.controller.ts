import { Request, Response, Errback } from 'express';
import { Knex } from 'knex';

class TagController {
    database: Knex;

    constructor(database: Knex){
        this.database = database;
    }

    getAllTags(req: Request, res: Response){
        const query = `
            SELECT * FROM Tag WHERE dataExclusao IS NULL;
        `;

        this.database.raw(query).then((result) => {
            res.status(200).send(result);
        })
        .catch((err: any) => {
            res.status(500).send(err);
        });
    }

    getTag(req: Request, res: Response){
        const query = `
            SELECT * FROM Tag WHERE dataExclusao IS NULL AND idTag = ${req.params.idTag}; 
        `;

        this.database.raw(query).then((result) => {
            res.status(200).send(result);
        })
        .catch((err: any) => {
            res.status(500).send(err);
        });
    }

    create(req: Request, res: Response){
        const query = `
            INSERT INTO Tag (descTag, dataInclusao) VALUES ('${req.body.descTag}', '${req.body.dataInclusao}');
            SELECT @@IDENTITY as 'id';
        `;

        this.database.raw(query).then((result) => {
            res.status(201).send(result);
        })
        .catch((err: any) => {
            res.status(500).send(err);
        });
    }

    update(req: Request, res: Response){
        const query = `
            UPDATE Tag SET descTag = '${req.body.descTag}' WHERE idTag = ${req.params.idTag};
            SELECT * FROM Tag WHERE idTag = ${req.params.idTag} AND dataExclusao IS NULL;
        `;

        this.database.raw(query).then((result) => {
            res.status(200).send(result);
        })
        .catch((err: any) => {
            res.status(500).send(err);
        });
    }
}

export default TagController;