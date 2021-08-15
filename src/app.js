import express, { json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { join } from 'path';
import dotenv from 'dotenv';
import router from './router';
import { notFound, errorHandler, __dirname } from './middleware/defaults';
import logger from './middleware/winston';

dotenv.config();
const app = express();

app.use('/', express.static(join(__dirname, '../public')));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream: logger.stream }));

app.use('/api/v1', router);

app.use(notFound);
app.use(errorHandler);

export default app;
