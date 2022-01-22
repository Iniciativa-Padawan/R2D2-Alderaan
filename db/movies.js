const { type } = require("express/lib/response")

const filmes = [
    {
        name: "The Phantom Menace",
        type: "Prequel",
        sequential: 1
    }, {
        name: "Attack of the Clones",
        type: "Prequel",
        sequential: 2
    }, {
        name: "Revenge of the Sith",
        type: "Prequel",
        sequential: 3
    }, {
        name: "A New Hope",
        type:"Classic",
        sequential: 4
    }, {
        name: "The Empire Strikes Back",
        type:"Classic",
        sequential: 5
    }, {
        name: "Return of the Jedi",
        type:"Classic",
        sequential: 6
    }, {    
        name: "The Force Awakens",
        type: "Sequel",
        sequential: 7
    }, {
        name: "The Last Jedi",
        type: "Sequel",
        sequential: 8
    }, {
        name: "The Rise of Skywalker",
        type: "Sequel",
        sequential: 9
    }
]

module.exports = filmes