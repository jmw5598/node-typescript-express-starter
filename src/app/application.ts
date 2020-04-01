import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { applicationRouter } from './routes';

export class Application {
  private _server: Express;

  constructor() {
    this._server = express();
    this._server.set('host', process.env.HOST || 'localhost');
    this._server.set('port', process.env.PORT || 3000);
    this._server.use(bodyParser.json());
    this._server.use(bodyParser.urlencoded({ extended: true }));
    this._server.use(cors());
    this._server.use(applicationRouter);
  }

  public startServer(): void {
    const host: string = this._server.get('host');
    const port: number = this._server.get('port');
    this._server.listen(port, host, () => {
      console.log(`Server started at http://${host}:${port}`);
    });
  }
}
