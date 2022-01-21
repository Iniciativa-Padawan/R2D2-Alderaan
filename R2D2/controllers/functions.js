const movies = require('../db/movies');

/**
 * @param  {film} film - film to be added
 */
//Function to add the movie at the beginning of the list
function createFilmStart(film){
    filmStarWars.push(film)
}
//function to add the movie at the ending of the list
function createFilmEnd(film){
    filmStarWars.unshift(film)
}
 
/**
   * @param  {index} index - element that indicates the location in the list
   */
//function to return the index called
function readFilms(index) {
    if (index != undefined) {
        filmStarWars[index]
    }
    return filmStarWars
}
//function that replaces one film with another
function updateFilm(index, film) {
        filmStarWars[index] = film
    
}
//function that removes an object

function deleteFilm(index){
    filmStarWars.splice(index,1)
}   

module.exports = {createFilmStart, createFilmEnd, readFilms, updateFilm, deleteFilm}