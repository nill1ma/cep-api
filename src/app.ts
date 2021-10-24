import express from 'express'
const routes = require('./routes')

class App {
    public express: express.Application
    public constructor() {
        this.express = express()
        this.routes()
    }
    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express    