import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '..', '.env'), 
});

import {dbConnectMySql} from './config/db'
import { app } from './app';

const PORT = process.env["PORT"] || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

dbConnectMySql();