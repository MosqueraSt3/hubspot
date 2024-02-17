import express, { Router } from 'express';
import cors from 'cors';

interface IOptions {
    port: number;
    routes: Router;
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: IOptions) {
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
    }

    async start() {

        //* Middlewares
        this.app.use(cors()); // CORS
        this.app.use(express.json()); //raw
        this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded

        //* Routes
        this.app.use(this.routes);

        this.app.listen(this.port, () => {
            console.log(`SERVER http://localhost:${this.port}`);
        });
    };
};