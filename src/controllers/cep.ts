import { Request, Response } from 'express'
import { MCep } from '../model/cep'
import service from "../services/cep"

class CepController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { cep, state, city, street } = req.params
        let response = undefined
        if (cep) {
            response = service.getByCep(Number(cep))
        } else {
            const mcep = new MCep()
            mcep.state = state
            mcep.city = city
            mcep.street = street
            response = service.getByParams(mcep)
        }
        return res.json(response)
    }
}



export default new CepController()