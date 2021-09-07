import * as express from 'express';
import accountController from '../controllers/query';
import { authenticateToken } from '../middlewares/authenticate';
const publicRoute = express.Router();
// insert more routes private

publicRoute.post('/login', accountController.login);
publicRoute.get('/login', authenticateToken);
export { publicRoute };
