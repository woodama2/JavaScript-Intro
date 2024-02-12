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



// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].types == 'fire') {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\) \- is ON FIRE!' + '<br>')
//     } else {
//         document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\)' + '<br>')
//     }
// }


for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 15) {
        document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\) \- Wow\, that\'s big!' + '<br>')
    } else {
        document.write(pokemonList[i].name + ' \(height\: ' + pokemonList[i].height + '\)' + '<br>')
    }
}

// function divide(dividend, divisor) {
//     if (divisor === 0){
//         return "You're trying to divide by zero."
//     } else {
//         let result = dividend / divisor;
//         return result;
//     }
// }

// document.write(divide(4, 2));
// document.write(divide(7, 0));
// document.write(divide(1, 4));
// document.write(divide(12, -3));