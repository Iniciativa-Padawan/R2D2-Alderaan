const movies = require('../db/movies');

//CRUD
/* 
  Create
  Read
  Update
  Delete
*/

/* adicionar*/
function createMovie(movie) {
  movies.push(movie)
}

/*ler*/
function readMovie(indice) { 
  if (indice != undefined) { 
  return movies [indice] } 
  return movies.map((item, index) => { 
  item.index = index 
  return item }) 
}

/*localizar*/
function findMovie(name) {
  return movies.find(movie => movie.name.toLowerCase().includes(name.toLowerCase()))
}

/*editar*/
function updateMovie(indice, movie) {
  movies[indice] = movie
}

/*excluir*/
function deleteMovie(indice) {
  movies.splice(indice, 1)
}

module.exports = { createMovie, readMovie, updateMovie, deleteMovie, findMovie }