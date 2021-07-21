import express from 'express';
import TagController from '../controllers/tag.controller';
import connection from '../config/connection';

export const routes = express.Router();
const tagController = new TagController(connection);

routes.get('/api', (req, res) => { res.status(200).send('Level5Jr Nps collector API') });

//Rotas TAG
routes.get('/api/tag/all', (req, res) => tagController.getAllTags(req, res));
routes.get('/api/tag/:idTag', (req, res) => tagController.getTag(req, res));
routes.post('/api/tag', (req, res) => tagController.create(req, res));

module.exports = routes;