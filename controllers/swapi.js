const axios = require('axios')
const instance = axios.create(
    {
        baseURL: 'https://swapi.dev/api/'
    }
)

/**
 * Manipula os resultados referentes à SWAPI
 * @param {*} data - parâmetro referente aos dados da API
 * @returns - retorna apenas os dados escolhidos: "count" e "results"
 */
function handleResult(data) {
    let count = data.count
    let arrayResults = data.results
    let returnObj = {
        count: count,
        data: arrayResults.map(item => { return { name: item.name || item.title }})
    }
    return returnObj
}

/**
 * Mostra os resultados dos filmes
 * @async
 * @returns - Retorna o "count" e os títulos
 */
async function getMovies(){
    let response = await instance.get('films')

    return handleResult(response.data)
}

/**
 * Mostra os resultados das espécies
 * @async
 * @returns Retorna o "count" e as espécies
 */ 
async function getSpecies(){
    let response = await instance.get('species')

    return handleResult(response.data);
}

/**
 * Mostra os resultados dos planetas
 * @async
 * @returns - Retorna o "count" e nome dos planetas
 */
async function getPlanets(){
    let response = await instance.get('planets')

    return handleResult(response.data);
}

/**
 * Mostra os resultados dos personagens
 * @async
 * @returns - Retorna o "count" e os nomes dos personagens
 */
async function getPeople(){
    let response = await instance.get('people')

    return handleResult(response.data);
}

/**
 * Mostra os resultados das Espaçonaves
 * @async
 * @returns - Retorna o "count" e o nome das Espaçonaves
 */
async function getSpaceShips(){
    let response = await instance.get('starships')

    return handleResult(response.data);
}

/**
 * Mostra os resultados dos veículos
 * @async
 * @returns - Retorna o "count" e os nomes dos veículos 
 */
async function getVehicles(){
    let response = await instance.get('vehicles')

    return handleResult(response.data);
}


module.exports = { 
    getMovies,
    handleResult,
    getPeople,
    getSpaceShips,
    getVehicles,
    getSpecies,
    getPlanets
}

