import { Request, Response } from 'express'
import { info } from '../client/logs'
import { MCep } from '../model/cep'
import service from "../services/cep"

class CepController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { cep, state, city, street } = req.params
        let response = undefined
        if (cep) {
            response = await service.getByCep(Number(cep))
            await info(req.params, response)
        } else {
            const mcep: MCep = {
                state: state,
                city: city,
                street: street
            }
            response = await service.getByParams(mcep)
        }
        return res.json(response)
    }
}

export default new CepController()