import { Application } from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const application: Application = new Application();
application.startServer();
