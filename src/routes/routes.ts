import express from 'express';

export const routes = express.Router();

routes.get('/', (req, res) => {
    res.status(200).send('Level5Jr Nps collector API')
})

module.exports = routes;