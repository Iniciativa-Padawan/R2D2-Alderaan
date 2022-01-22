const movieList = require("../db/movies")

/*
Criação de funções CRUD (Create - get - Update - Delete)
*/

/**
 * Adiciona um filme
 * @param  {string} type - Determina o local em que o filme será inserido na listagem
 * @param  {movie} movie - Filme que vai ser inserido na listagem
 * @param  {number} index - Determina a posição que será inserido o filme na listagem
 */
 function createMovies(type, movie, index) {
    switch (type) {
      case "begin":
        createMoviesBefore(movie)
        break;
      case "middle":
        creatMoviesMiddle(index, movie)
        break;
      case "end":
        createMoviesOrder(movie)
        break;
      default:
        break;
    }  
  }
  
  /**
   * Adiciona um filme ao final da lista
   * @param  {movie} movie - Filme que vai ser inserido no final da listagem
   */
  function createMoviesOrder(movie) {
    movieList.push(movie)
  }
  
  /**
   * Adiciona um filme no início da lista
   * @param  {movie} movie - Filme que vai ser inserido no início da listagem
   */
  
  function createMoviesBefore(movie) {
    movieList.unshift(movie)
  }
  
  /**
   * Funções de Criação
   * @param  {movie} movie - Filme sendo inserido entre filmes da listagem
   */
  
  function creatMoviesMiddle(index, movie) {
    movieList.splice(index, 0, movie)
  }
  
  /**
   * Funções de Pesquisa
   * @param  {movie} movie - Utilizado para que seja vista a listagem final
   */
  
  function readMovies(indice) {
    if (indice != undefined) {
      return movieList [indice]
    }
    return movieList.map((item, index) => {
      item.index = index
      return item
    })
  }

  /*find
  // @param {string} text - Texto utilizado para procurar o filme na lista
  */
  
  function findMovie(text){
    return movieList.findMovie(movie => movie.name.toLowerCase().includes(text.toLowerCase))
  }
  
  function find(text){
    if (text != undefined){
      return findMovie(movieList[text])}
      return movieList.map(findMovie)
   }
  
  
  /**
   * Função de editar 
   * @param  {number} index -  Determina a posição do filme na listagem que será editado
   * @param  {movie} movie - Descrição utilizada para transformar a estrutura antiga na nova, lembrar de utilizar exatamente os itens, na ordem, de acordo com a var movie
  */
  
  function editMovies(index, movie) {
    movieList[index] = movie
  }
  
  /**
   * @param  {number} index - Determina a posição do filme na listagem que será excluido
   */
  
  function deleteMovies(index) {
    movieList.splice(index, 1)
  }
  /**
   * @param  {number} index - Determina a posição inicial das exclusões, caso o valor seja vazio ou zero, toda a listagem será excluida
   * @param  {Function} MAX_VALUE - é uma função automática, em que levará a exclusão até o último item da lista.
   */
  function deleteAll(index,MAX_VALUE) {
    movieList.splice(index, Number.MAX_VALUE)
  }
  
  module.exports = {createMovies, readMovies, find, editMovies, deleteMovies, deleteAll, createMoviesOrder}