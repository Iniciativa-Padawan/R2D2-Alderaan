const axios = require("axios")
const { attachment } = require("express/lib/response")
const instance = axios.create({
    baseURL: "https://swapi.dev/api/"
})


function handleResponse(data){
    let count = data.count
    let arrayResult = data.results
    let returnObj = {
        count: count,
        data: arrayResult.map(item => {return {
            name: item.name
        }    
        })
    }
    return returnObj
}

/**
 * Função que importa o nome dos personagens de StarWars do Swapi.dev
 */
async function getPeople(){
    let res = await instance.get("people")
    return handleResponse(res.data)
}
/**
 * Função que importa o nome dos planetas de StarWars do Swapi.dev
 */
async function getPlanets(){
    let res = await instance.get("planets")
    return handleResponse(res.data)
}
/**
 * Função que importa o nome dos veiculos de StarWars do Swapi.dev
 */
async function getVehicles(){
    let res = await instance.get("vehicles")
    return handleResponse(res.data)
}
/**
 * Função que importa as Espaço-Naves de StarWars do Swapi.Dev
 */
async function getSpaceships(){
    let res = await instance.get("starships")
    return handleResponse(res.data)
}
/**
 * Função que importa as Especies de StarWars do Swapi.dev
 */
async function getSpecies(){
    let res = await instance.get("species")
    return handleResponse(res.data)
}

module.exports = {getPeople, getPlanets, getVehicles, getSpaceships, getSpecies}