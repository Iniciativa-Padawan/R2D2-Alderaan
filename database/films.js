
//Constante que armazena a lista dos filmes.
const films = [
  
        {
      sequential: 2,
      name: 'Attack of the Clones',
      type:'Prequel',
      index: 0,
    },
    {
        sequential: 3,
        name: 'Revenge of the Sith',
        type:'Prequel',
        index: 1
      },
      {
        sequential: 4,
        name: 'New Hope',
        type:'Classic',
        index: 2,
      },
      {
        sequential: 5,
        name: 'Empire Strikes Back',
        type:'Classic',
        index: 3
      },
]

//Esse módulo permite chamar films em outros lugares.
module.exports = films