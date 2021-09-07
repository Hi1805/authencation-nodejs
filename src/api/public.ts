import * as express from 'express';
import { publicRoute } from '../routes/public';

const publicRouter = express.Router();
publicRouter.use(publicRoute);
export default publicRouter;
