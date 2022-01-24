const axios = require('axios')
const instance = axios.create(
    {
        baseURL: 'https://swapi.dev/api/'
    }
)

function handleResult(data) {
    let count = data.count
    let arrayResults = data.results
    let returnObj = {
        count: count,
        results: arrayResults.map(item => { return { name: item.name || item.title }})
    }
    return returnObj
}



async function getSpecies(){
    let response = await instance.get('species')

    return handleResult(response.data);
}

async function getPlanets(){
    let response = await instance.get('planets')

    return handleResult(response.data);
}

async function getPeople(){
    let response = await instance.get('people')

    return handleResult(response.data);
}

async function getSpaceShips(){
    let response = await instance.get('starships')

    return handleResult(response.data);
}

async function getVehicles(){
    let response = await instance.get('vehicles')

    return handleResult(response.data);
}


module.exports = { 
    handleResult,
    getPeople,
    getSpaceShips,
    getVehicles,
    getSpecies,
    getPlanets
}