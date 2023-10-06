import * as middlewares from './middlewares';

import MessageResponse from './interfaces/MessageResponse';
import api from './api';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self'"
  );
  
  next();
});

app.use('/', api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
