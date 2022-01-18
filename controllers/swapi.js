const axios = require('axios');
const instance = axios.create(
    {
        baseURL:'https://swapi.dev/api/'
    }
)

function handlesResult(data) {
    let count = data.count
    let arrayResults = data.results
    let returnObj = {
        count: count,
        results: arrayResults.map(item => { return { name: item.name || item.title }})
    }
    return returnObj
}

async function getPeople(){
    let response = await instance.get('people')
    
    return handlesResult(response.data)
}

async function getPlanets(){
    let response = await instance.get('planets')
    
    return handlesResult(response.data)
}

async function getStarships(){
    let response = await instance.get('starships')
    
    return handlesResult(response.data)
}

async function getVehicles(){
    let response = await instance.get('vehicles')
    
    return handlesResult(response.data)
}

async function getSpecies(){
    let response = await instance.get('species')
    
    return handlesResult(response.data)
}

module.exports = {getPeople, getPlanets, getStarships, getVehicles, getSpecies}