import dotEnv from 'dotenv';
dotEnv.config();
import cors from 'cors';
import express from 'express';
import { setUpSequelize } from './sequelize';
import ApiRouter from './api';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', ApiRouter);
const port = process.env.PORT || 4000;

const sequelize = setUpSequelize();

sequelize.sync().then(() => {
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
  server.on('error', console.error);
});
