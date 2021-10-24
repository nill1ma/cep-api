import getClintElasticSearch from './elasticsearch'

async function info(reqParams: any, response: Response) {
    const elasticSearch = getClintElasticSearch()
    await elasticSearch.index({
        index: 'cep',
        type: 'info',
        body: {
            reqParams,
            response
        }
    })
}

async function error(reqParams: Request, response: Response) {
    const elasticSearch = getClintElasticSearch()
    await elasticSearch.index({
        index: 'cep',
        type: 'error',
        body: {
            reqParams,
            response
        }
    })
}
export { info, error }