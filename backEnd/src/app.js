import express from 'express';
import routes from './routes/index.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();


app.use(express.json());
app.use(authMiddleware);

app.use("/api", routes);

export default app; 
