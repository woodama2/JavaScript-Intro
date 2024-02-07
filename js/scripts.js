// height is in m

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

// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height < 10 && pokemonList[i].height >= 5) {
//         document.write(pokemonList[i].name + ' is medium size.  ')
//     } else if (pokemonList[i].height < 5) {
//         document.write(pokemonList[i].name + ' is small size.  ')
//     } else {
//         document.write(pokemonList[i].name + ' is HUGE!!  ')
//     }
// }


// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height >= 10) {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\) \- is HUGE!' + '<br>')
//     } else {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\)' + '<br>')
//     }
// }


// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height >= 10) {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\) \- is HUGE!' + '<br>')
//     } else if (pokemonList[i].types == 'fire') {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\) \- is ON FIRE!' + '<br>')
//     } else {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\)' + '<br>')
//     }
// }

// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height >= 10) {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\) \- is HUGE!' + '<br>')
//     } else if (pokemonList[i].height >= 10 && pokemonList[i].types == 'water') {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\) \- is a big swimmer!' + '<br>')
//     } else {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\)' + '<br>')
//     }
// }


// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height >= 10 && pokemonList[i].types === 'water') {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\) \- is a big swimmer!' + '<br>')
//     } else if (pokemonList[i].height >= 10) {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\) \- is HUGE!' + '<br>')
//     } else {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\)' + '<br>')
//     }
// }



for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].types == 'fire') {
        document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\) \- is ON FIRE!' + '<br>')
    } else {
        document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\)' + '<br>')
    }
}