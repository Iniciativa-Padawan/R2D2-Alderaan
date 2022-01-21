const films = require('../database/films');

/**
 * @param  {film} film - film to be added
 */
//Function to add the movie at the beginning of the list
function createFilm(film){
    films.push(films)
}

/**
   * @param  {index} index - element that indicates the location in the list
   */

 function readFilm(index) {
    if (index != undefined) {
        return films[(index) -1]
    } else {
        return films
    }
}

//function that replaces one film with another
function updateFilm(index, film) {
        films[index] = film
    
}
//function that removes an object

function deleteFilm(index){
    films.splice(index,1)
}   

module.exports = {createFilm, readFilm, updateFilm, deleteFilm}