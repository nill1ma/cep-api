import { Router } from "express"
import CepController from './controllers/cep'

const routes = Router()

routes.get('/:cep', CepController.index)
routes.get('/:state/:city/:street', CepController.index)

export default routes