import { MCep } from "../model/cep"
import service from "./cep"
describe('Get CEP API researching by cep number', () => {
  

  it('Should return response status code 400', async () => {
    const response = await service.getByCep(88000231)
    expect(response).toEqual([])
  })


  it('Should return a address researched by cep', async () => {
    expect(await service.getByCep(88020231)).toBe(JSON.stringify({
      "cep": "88020-231",
      "logradouro": "Rua 13 de Maio",
      "complemento": "lado ímpar",
      "bairro": "Centro",
      "localidade": "Florianópolis",
      "uf": "SC",
      "ibge": "4205407",
      "gia": "",
      "ddd": "48",
      "siafi": "8105"
    }))
  })
})

describe('Get CEP API researching by params', () => {

  it('Should return response with a list of address', async () => {
    const mcep = new MCep()
    mcep.state = 'RS'
    mcep.city = 'Porto%20Alegre'
    mcep.street = 'Domings'
    const response = await service.getByParams(mcep)
    expect(response).toEqual([])
  })

  it('Should return response with a list of address', async () => {
    const mcep = new MCep()
    mcep.state = 'RS'
    mcep.city = 'Porto Alegre'
    mcep.street = 'Domingos%20Jose'
    const response = await service.getByParams(mcep)
    expect(response).toEqual([
      {
        "cep": "91790-072",
        "logradouro": "Rua Domingos José Poli",
        "complemento": "",
        "bairro": "Restinga",
        "localidade": "Porto Alegre",
        "uf": "RS",
        "ibge": "4314902",
        "gia": "",
        "ddd": "51",
        "siafi": "8801"
      },
      {
        "cep": "90420-200",
        "logradouro": "Rua Domingos José de Almeida",
        "complemento": "",
        "bairro": "Rio Branco",
        "localidade": "Porto Alegre",
        "uf": "RS",
        "ibge": "4314902",
        "gia": "",
        "ddd": "51",
        "siafi": "8801"
      }
    ])
  })
})