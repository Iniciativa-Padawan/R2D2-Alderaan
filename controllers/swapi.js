const axios = require("axios");
const instance = axios.create({
    baseURL: "https://swapi.dev/api"
})
/**
 * @param  {data} data - this is where the request data is
 */
//function for manipulation of objects
function handleResult(data) {
    let count = data.count;
    let arrayResults = data.results;
    let returnObj = {
      count: count,
      data: arrayResults.map((item) => {
        return { name: item.name || item.title };
      }),
    };
    return returnObj;
  }
  
  async function getPlanets() {
    let res = await instance.get("planets");
  
    return handleResult(res.data);
  }
  
  async function getStarships() {
    let res = await instance.get("starships");
    return handleResult(res.data);
  }
  
  async function getVehicles() {
    let res = await instance.get("vehicles");
    return handleResult(res.data);
  }
  
  async function getPeople() {
    let res = await instance.get("people");
    return handleResult(res.data);
  }
  
  async function getFilms() {
    let res = await instance.get("films");
    return handleResult(res.data);
  }
  
  async function getSpecies() {
    let res = await instance.get("species");
    return handleResult(res.data);
  }


  
  module.exports = {
    getPlanets,
    getStarships,
    getVehicles,
    getPeople,
    getSpecies,
    getFilms,
  };
