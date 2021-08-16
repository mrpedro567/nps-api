import express from 'express';
import TagController from '../controllers/tag.controller';
import NpsController from '../controllers/nps.controller';
import UserController from '../controllers/user.controller';
import connection from '../config/connection';

export const routes = express.Router();
const tagController = new TagController(connection);
const npsController = new NpsController(connection);
const userController = new UserController(connection);

routes.get('/api', (req, res) => { res.status(200).send('Level5 Jr Nps collector API') });

/**
 * Roatas Tags
 */
routes.get('/api/tag/all', (req, res) => tagController.getAllTags(req, res));
routes.get('/api/tag/:idTag', (req, res) => tagController.getTag(req, res));
routes.post('/api/tag', (req, res) => tagController.create(req, res));
routes.put('/api/tag/:idTag', (req, res) => tagController.update(req, res));

/**
 * Rotas NPS
 */
routes.get('/api/nps', (req, res) => npsController.get(req, res));
routes.post('/api/nps', (req, res) => npsController.create(req, res));

/**
 * Rotas Users
 */
routes.post('/api/login', (req, res) => userController.validate(req, res));


module.exports = routes;