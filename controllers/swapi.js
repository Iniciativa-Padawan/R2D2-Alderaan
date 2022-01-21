//O axios serve para poder armazenas numa variável a chamada da outra API que vamos utilizar.
const axios = require("axios");
const instance = axios.create({
    baseURL: "https://swapi.dev/api"
})
/**
 * @param  {} data - Lugar onde ficam armazenado os dados da requisição.
 * @param  {} item - Item acessado dentro dos dados (chamamos o nome)
 */
//Função que manipula os dados retornados da lista. 
function handleResult(data) {
    let count = data.count;
    let arrayResults = data.results;
    let returnObj = {
      count: count,
      data: arrayResults.map((item) => {
        return { name: item.name};
      }),
    };
    return returnObj;
  }
//Função que puxa os planetas da API
async function getPlanets() {
  let res = await instance.get("planets");
  
  return handleResult(res.data);
}
//Função que puxa as espaçonaves da API.
async function getStarships() {
  let res = await instance.get("starships");
  return handleResult(res.data);
}
//Função que puxa os veiculos da API.
async function getVehicles() {
  let res = await instance.get("vehicles");
  return handleResult(res.data);
}
//Função que puxa os personagens da API
async function getPeople() {
  let res = await instance.get("people");
  return handleResult(res.data);
}
//Função que puxa as espécies da API  
async function getSpecies() {
  let res = await instance.get("species");
  return handleResult(res.data);
}


//Modulo que exporta as funções para serem usadas na API.  
  module.exports = {
    getPlanets,
    getStarships,
    getVehicles,
    getPeople,
    getSpecies,
  };
