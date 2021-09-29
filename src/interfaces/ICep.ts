import { MCep } from "../model/cep";

export default interface ICep {
    getByCep(cep:number):any
    getByParams(params:MCep):any
}