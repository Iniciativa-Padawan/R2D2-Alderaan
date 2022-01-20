const axios = require ('axios');
const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
});


/*função de manuseio do resultado*/
function handleresult(result){
    return {
        count: result.count,
        results: result.results.map(data => {return { name:data.name || data.title}})
    }
}

/*apontar personagens*/
async function getpeople() {
    const response = await instance.get('people')

    return handleresult (response.data);
}

/*apontar filmes*/
async function getfilms() {
    const response = await instance.get('films')

    return handleresult (response.data);
}

/*apontar veículos*/
async function getvehicles() {
    const response = await instance.get('vehicles')

    return handleresult (response.data);
}

/*apontar planetas*/
async function getplanets() {
    const response = await instance.get('planets')

    return handleresult (response.data);
}

/*apontar naves*/
async function getspaceships() {
    const response = await instance.get('starships')

    return handleresult (response.data);
}

/*apontar espécies*/
async function getspecies() {
    const response = await instance.get('species')

    return handleresult (response.data);
}

module.exports = { getpeople, getfilms, getvehicles, getplanets, getspaceships, getspecies,}