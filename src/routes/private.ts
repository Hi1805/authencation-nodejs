import * as express from 'express';
import accountController from '../controllers/query';
const privateRouter = express.Router();
// insert more routes private

privateRouter.get('/users', accountController.getUsers);
export { privateRouter };
