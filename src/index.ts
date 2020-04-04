import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Application } from './app';
import * as dotenv from 'dotenv';

dotenv.config();

createConnection().then(async () => {
  const application: Application = new Application();
  application.startServer();
});
