import express from 'express';
import cors from 'cors';

const routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log(`[server]: Server is running at https://localhost:3000`);
});