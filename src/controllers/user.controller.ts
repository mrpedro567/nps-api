import { Request, Response } from "express";
import { Knex } from 'knex';
import md5 from 'md5';

class UserController {
    database: Knex;

    constructor(database: Knex){
        this.database = database;
    }

    validate(req: Request, res: Response){
        const senha = md5(req.body.login + req.body.senha);
        console.log(senha);

        const query = `
            SELECT * FROM Users WHERE descLogin = '${req.body.login}' AND dataExclusao IS NULL
        `;
        
        this.database.raw(query)    
            .then((result) => {
                if(result.length > 0){
                    if(result[0].descSenha == senha){
                        res.status(200).send(result);
                    }
                    else{
                        res.status(401).send({message: 'Login ou senha inválidos'});
                    }
                }
                else{
                    res.status(404).send({ message: 'Login inexistente'});
                }
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                res.status(500).send(err);
            });
    }
}

export default UserController;