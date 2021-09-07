import express from 'express';
import { privateRouter } from '../routes/private';
import publicRouter from './public';

const apiRouter = express.Router();

apiRouter.use(privateRouter);
apiRouter.use(publicRouter);

export default apiRouter;
