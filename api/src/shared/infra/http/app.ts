import 'reflect-metadata';
import '@shared/container';
import { createConnection } from 'typeorm';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '../errors/AppError';

createConnection();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message });
    }

    console.log(error);

    return response.status(500).json({ message: 'Internal Server Error' });
  },
);

export default app;
