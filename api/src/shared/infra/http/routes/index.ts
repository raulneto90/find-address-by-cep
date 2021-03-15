import addressRouter from '@modules/adresses/infra/http/routes/address.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/addresses', addressRouter);

export default routes;
