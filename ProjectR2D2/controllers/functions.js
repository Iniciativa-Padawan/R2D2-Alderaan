const movies = require("../db/atributes")
//CRUD FUNCTIONS
/*
    CREATE
    READ
    UPDATE
    DELETE  
*/

/**
 * CREATE
 * Cria um novo filme na lista
 * @param  {movie} movie - Filme que vai ser adicionado
 */
function createMovieOrder(movie) {
    movies.push(movie)
}
/**
 * READ
 * Ler os filmes, ou um filme por indice a lista
 * @param  {number} index - indice a ser selecionado
 */
function readMovie(index) {
    if (index != undefined) {
        return movies[(index) - 1]
    } else {
        return movies
    }
}
/**
 * UPDATE
 * Atualiza os filmes da lista
 * @param  {number} index - indice a ser selecionado
 * @param  {movie} movie - Filme que vai substituir
 */
function updateMovie(index, movie) {
    movies[index] = movie
}
/**
 * DELETE
 * Deleta um filme da lista
 * @param  {Number} index - Posição do filme que vai ser removido
 */
function deleteMovie(index) {
    movies.splice((index)-1, 1)
}


module.exports = { createMovieOrder, readMovie, updateMovie, deleteMovie }

