let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasaur", height: 7, types: ["grass", "poison"] },
    { name: "Charmander", height: 6, types: ["fire"] },
    { name: "Diglett", height: 2, types: ["ground"] },
    { name: "Tangela", height: 10, types: ["grass"] },
    { name: "Sharpedo", height: 18, types: ["dark", "water"] },
    { name: "Smoochum", height: 4, types: ["psychic", "ice"] },
    { name: "Squirtle", height: 5, types: ["water"] },
    { name: "Pikachu", height: 4, types: ["electric"] },
    { name: "Starmie", height: 11, types: ["psychic", "water"] },
    { name: "Caterpie", height: 3, types: ["bug"] },
  ];

  function add(pokemon) {
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addEventListener(event) {
    let button = document.querySelector(".pokemon-button");
    let listItem = document.querySelector(li);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    button.addEventListener("click", function () {
      showDetails(pokemon.name);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

// // add a new object(pokemon) to the pokemonList
pokemonRepository.add({
  name: "Krabby",
  height: 4,
  types: ["water"],
});

// written using forEach() loop syntax
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
