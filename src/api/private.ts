import * as express from 'express';
import { authenticateToken } from '../middlewares/authenticate';
import { privateRouter } from '../routes/private';
const privateRoute = express.Router();
// insert more routes private

privateRoute.use(authenticateToken, privateRouter);
export default privateRoute;
