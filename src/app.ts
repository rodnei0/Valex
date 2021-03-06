import cors from 'cors';
import express from 'express';
import "express-async-errors";
import handleErrorsMiddleware from './middlewares/handleErrorsMiddleware.js';
import cardRouter from './routers/cardRouter.js';
import purchaseRouter from './routers/purchaseRouter.js';
import rechargeRouter from './routers/rechargeRouter.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cardRouter);
app.use(rechargeRouter);
app.use(purchaseRouter);
app.use(handleErrorsMiddleware);

export default app;