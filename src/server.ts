import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config';

// import { indexRoute, buildingRoute, tenantRoute, paymentRoute } from '@routes';
// import { routesApp } from '@utils/functions';

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set('port', PORT);

    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes(): void {
    // const routes = routesApp();
    // this.app.use(routes.init, indexRoute.router);
    // this.app.use(routes.buildings, buildingRoute.router);
    // this.app.use(routes.tenants, tenantRoute.router);
    // this.app.use(routes.payments, paymentRoute.router);
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server on port', this.app.get('port'));
    });
  }
}

export const server = new Server();
