import elasticsearch from 'elasticsearch'

function getClintElasticSearch() {
    const client = new elasticsearch.Client({
        host: '0.0.0.0:9200',
        log: 'trace'
    })
    return client
}

export default getClintElasticSearch