const  movieList = require('../database/movies')

//ler
function showMe(index) {
    if (index != undefined) {
    return movieList[index]
    }
    return movieList
}

//inserir
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


function insertMovieBegin(movie){  
     movieList.data.unshift(movie)
} 

function insertMovieEnd(movie){  
     movieList.data.push(movie)
}

//procurar por tag
function searchMovie(tag) {  
    var tagLower = tag.toLowerCase()
    return movieList.find(movie => movie.name.toLowerCase().includes(tagLower))               
}


//listar em ordem crono
function ernstOrder() {
    return movieList.data.sort((a, b) => a.sequential - b.sequential)
}
//deletar
function deleteMovie(index) {
    movieList.data.splice(index, 1)
}
//altera um filme
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



