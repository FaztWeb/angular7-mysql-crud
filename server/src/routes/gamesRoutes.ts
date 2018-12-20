import express, { Router } from 'express';

import gamesController from '../controllers/gamesController';

class GameRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }

}

export default new GameRoutes().router;

