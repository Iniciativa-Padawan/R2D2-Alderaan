const filmes = require("../db/movies")

function listaDeFilmes() {
    return filmes
}

function criarFilme(movie) {
    filmes.push(movie)
}

function exibirFilme(sequence) {
    if (sequence != undefined) {
        return filmes[sequence]
    }
    return filmes
}

function atualizarFilme(movie, sequence) {
    filmes[sequence] = movie
}

function deletarFilme(sequence, movie) {
    filmes.splice(sequence, 1)
}

module.exports = { listaDeFilmes, criarFilme, exibirFilme, atualizarFilme, deletarFilme }