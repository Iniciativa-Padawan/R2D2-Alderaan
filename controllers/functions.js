// Puxando a constante films (que esta no database) para poder usa-la nas funções.
const films = require('../database/films');
//Funções em CRUD
/*
    CREATE
    READ
    UPDATE
    DELETE  
*/

/**
 * CREATE
 * @param  {} film - filme passado como parâmetro a ser adicionado.
 */
//Função que vai criar um filme no final da lista.
function createFilm(film){
    films.push(film)
}

/**
 * READ
* @param  {} index - elemento que indica o seu lugar na lista
*/
//Função que vai mostrar todos os filmes, ou o filme pelo indice que for chamado.
 function readFilm(index) {
    if (index != undefined) {
        return films(index)
    } else {
        return films
    }
}


/**
 * UPDATE
 * @param  {} index - Indica qual elemento do filme será removido.
 * @param  {} film - Indica qual filme será colocado.
 */
//Função que coloca um filme no lugar de outro (atualiza).
function updateFilm(index, film) {
        films[index] = film
    
}


/**
 * DELETE
 * @param  {} index - Indica o elemento(filme) que vai ser deletado.
 */
//Função que deleta um filme.
function deleteFilm(index){
    films.splice(index,1)
}   

module.exports = {createFilm, readFilm, updateFilm, deleteFilm}