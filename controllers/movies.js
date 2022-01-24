const  movieList = require('../database/movies')

/**
 * Lista todos os filmes ou apenas 1 pelo índice
 * @param {number} index - indica a posição do filme escolhido para ser mostrado 
 * @returns - todos os filmes ou apenas 1
 */
function showMe(index) {
    if (index != undefined) {
    return movieList[index]
    }
    return movieList
}

/**
 * 
 * @param {string} type - "begin" - para add um filme ao início da lista, ou "end" para add ao fim da mesma 
 * @param {*} movie - filme a ser inserido a lista
 */
function insertMovie(type, movie){
    switch (type) {
      case "begin":
        insertMovieBegin(movie)        
        break;
      case "end":
        insertMovieEnd(movie)        
        break;
      default:
        console.log("Please choose a correct path")
        break;
    }
}

/**
 * Adiciona filme ao início do filme
 * @param {*} movie - filme a ser inserido
 */
function insertMovieBegin(movie){  
     movieList.data.unshift(movie)
} 
/**
 * Adiciona filme ao fim da lista
 * @param {*} movie - filme a ser inserido
 */
function insertMovieEnd(movie){  
     movieList.data.push(movie)
}

/**
 * Busca filme por tag
 * @param {*} tag - Título ou trecho do título a ser utilizado na pesquisa 
 * @returns - Primeiro título referente a tag
 */
function searchMovie(tag) {  
    var tagLower = tag.toLowerCase()
    return movieList.find(movie => movie.name.toLowerCase().includes(tagLower))               
}


/**
 * Retorna a lista na ordem de Ernst
 * @returns - movieList na ordem de Ernst
 */
function ernstOrder() {
    return movieList.data.sort((a, b) => a.sequential - b.sequential)
}
/**
 * Deleta um filme da lista pelo seu índice
 * @param {*} index - Índice referente ao filme a ser deletado 
 */
function deleteMovie(index) {
    movieList.data.splice(index, 1)
}
/**
 * Altera/atualiza um filme da lista
 * @param {*} index - Índice referente ao filme a ser alterado 
 * @param {*} movie - Novo filme, ou alteração
 */
function updateMovie(index, movie) {
    movieList.data[index] = movie    
}

module.exports = {
    updateMovie,
    deleteMovie,
    showMe,
    insertMovie,
    insertMovieBegin,
    insertMovieEnd,
    searchMovie,
    ernstOrder
}



