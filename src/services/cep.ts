import axios from "axios"
import ICep from "../interfaces/ICep"
import { MCep } from "../model/cep"

class Cep implements ICep {

    async getByCep(cep: number) {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        if (response.data.erro) {
            return []
        }
        return response.data
    }

    async getByParams(params: MCep) {
        const { state, city, street } = params
        const response = await axios.get(`https://viacep.com.br/ws/${state}/${city}/${street}/json/`)
        if (response.data.erro) {
            return []
        }
        return response.data
    }
}

export default new Cep()