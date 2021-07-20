import express from 'express';
import TagController from '../controllers/tag.controller';
import connection from '../config/connection';

export const routes = express.Router();
const tagController = new TagController(connection);

routes.get('/', (req, res) => {
    res.status(200).send('Level5Jr Nps collector API')
});

routes.get('/tag', (req, res) => tagController.getTag(req, res));

module.exports = routes;