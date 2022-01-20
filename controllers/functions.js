const filmes = require("../db/movies")

function listaDeFilmes() {
    return filmes
}

function criarFilme(movie, type, index) {
    switch (type) {
        case "begin":
            criarFilmeAntes(movie)
            break
        case "middle":
            criarFilmeMeio(index, movie)
            break;
        case "end":
            criarFilmeFim(movie)
            break;
        default:
            break
    }
}

function criarFilmeAntes(movie) {
    filmes.unshift(movie)
}

function criarFilmeMeio(index, movie) {
    filmes.splice(index, 0, movie)
}

function criarFilmeFim(movie) {
    filmes.push(movie)
}

function exibirFilme(sequence) {
    if (sequence != undefined) {
        return filmes[sequence]
    }
    return filmes.map((item, index) =>{
        item.index = index
        return item
    })
}

function atualizarFilme(movie, sequence) {
    filmes[sequence] = movie
}

function deletarFilme(sequence) {
    filmes.splice(sequence, 1)
}

function deleteAll(index, MAX_VALUE) {
    filmes.splice(index, Number.MAX_VALUE)
}

module.exports = { listaDeFilmes, criarFilme, exibirFilme, atualizarFilme, deletarFilme, deleteAll }