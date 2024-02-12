let pokemonRepository = (function(){

let pokemonList = [
    { name: 'Bulbasaur', height: 7, types: ['grass', 'poison'] },
    { name: 'Charmander', height: 6, types: ['fire'] },
    { name: 'Diglett', height: 2, types: ['ground'] },
    { name: 'Tangela', height: 10, types: ['grass'] },
    { name: 'Sharpedo', height: 18, types: ['dark', 'water'] },
    { name: 'Smoochum', height: 4, types: ['psychic', 'ice'] },
    { name: 'Squirtle', height: 5, types: ['water'] },
    { name: 'Pikachu', height: 4, types: ['electric'] },
    { name: 'Starmie', height: 11, types: ['psychic', 'water'] },
    { name: 'Caterpie', height: 3, types: ['bug'] }
];

function add(pokemon) {
    if (typeof pokemon === 'object') {
        pokemonList.push(pokemon);    
    }
}

function getAll(){
    return pokemonList;
}

return {
    add: add,
    getAll: getAll
}
})();



// add a new object(pokemon) to the pokemonList
pokemonRepository.add({
    name: 'Krabby', height: 4, types: ['water']
});


// written using forEach() loop syntax
// print the list of names from pokemonList and corresponding height of that name
pokemonRepository.getAll().forEach(function(pokemon) {
    // print a message if the height is bigger than 15
    if (pokemon.height > 15) {
        document.write(pokemon.name + ' \(height\: ' + pokemon.height + '\) \- Wow\, that\'s big!' + '<br>')
    } else {
        //print without the message
        document.write(pokemon.name + ' \(height\: ' + pokemon.height + '\)' + '<br>')
    }    
})
