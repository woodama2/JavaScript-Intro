// IIFE containing repository of pokemons and functions to access them
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // Function to return the array pokemonList
  function getAll() {
    return pokemonList;
  }

  // Function to add new pokemon to pokemonList
  function add(pokemon) {
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  // To add, append elements (li & button) and event listener
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let li = document.createElement("li");
    li.classList.add("col-12", "col-md-4", "mb-2");
    pokemonList.appendChild(li);

    let button = document.createElement("button");
    button.innerHTML = pokemon.name;
    li.appendChild(button);
    button.classList.add("btn", "btn-lg", "btn-block", "btn-outline-dark");
    button.setAttribute("data-target", "#exampleModal");
    button.setAttribute("data-toggle", "modal");
    addEventListenerToButton(button, pokemon);
  }

  //   button.addEventListener("click", function () {
  //     showDetails(pokemon);
  //   });
  // }

  // Function to add an event listener to the button
  function addEventListenerToButton(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  // Function to load list of pokemon from API, then write pokemons into array pokemonList
  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function (response) {
        hideLoadingMessage();
        return response.json();
      })
      .then(function (json) {
        hideLoadingMessage();
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          // displays all of the pokemons in the console
          //   console.log(pokemon);
        });
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });

    if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }
  }

  // Function to load the details of each pokemon from API
  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        hideLoadingMessage();
        return response.json();
      })
      .then(function (details) {
        hideLoadingMessage();
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        // item.types = details.types;
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  // Create the modal & add the 'modal' class
  let modal = document.querySelector(".modal");

  // After details of pokemon have been loaded from api, call function to display modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
      console.log(pokemon);
    });
  }

  // Function for showing selected pokemon details in a modal on top of list
  function showModal(pokemon) {
    let modalBody = document.querySelector(".modal-body");
    let modalHeader = document.querySelector(".modal-header");
    modalBody.innerHTML = "";

    // Clear all existing modal content
    // modalContainer.innerHTML = "";

    // Add modal content
    let modalTitle = document.querySelector(".modal-title");
    var capitalizedName = pokemon.name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    modalTitle.innerHTML = capitalizedName;

    let closeButtonElement = document.querySelector(".close");

    let imageUrl = document.createElement("img");
    imageUrl.classList.add("modal-img");
    imageUrl.src = pokemon.imageUrl;
    imageUrl.alt = "Front image of " + pokemon.name;

    // let typesElement = document.createElement("p");
    // let types = [pokemon.types[0].type.name];
    // for (let i = 1; i < pokemon.types.length; i++) {
    //   types.push(", " + pokemon.types[i].type.name);
    // }
    // typesElement.innerHTML = "Types: " + types.join("");

    let heightElement = document.createElement("p");
    heightElement.innerHTML = "Height: " + pokemon.height;

    let weightElement = document.createElement("p");
    weightElement.innerHTML = "Weight: " + pokemon.weight;

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButtonElement);
    modalBody.appendChild(imageUrl);
    // modalBody.appendChild(typesElement);
    modalBody.appendChild(heightElement);
    modalBody.appendChild(weightElement);

    // modalContainer.classList.add("is-visible");
    // modalContainer.addEventListener("click", (e) => {
    //   // Since this is also triggered when clicking INSIDE the modal
    //   // We only want to close if the user clicks directly on the overlay
    //   let target = e.target;
    //   if (target === modalContainer) {
    //     hideModal();
    //   }
    // });
  }

  function hideModal() {
    modal.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-visible")) {
      hideModal();
    }
  });

  modal.addEventListener("click", (e) => {
    let target = e.target;
    if (target === modal) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

// Function to hide the modal
// function hideModal() {
//   let modalContainer = document.querySelector(".modal");
//   modalContainer.classList.remove("is-visible");
// }

// // add a new object(pokemon) to the pokemonList
// pokemonRepository.add({
//   name: "Krabby",
//   height: 4,
//   types: ["water"],
// });

// written using forEach() loop syntax
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

pokemonRepository.loadList().then(function () {
  //Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function showLoadingMessage() {
  document.getElementById("loadingMessage").style.display = "block";
}

function hideLoadingMessage() {
  document.getElementById("loadingMessage").style.display = "none";
}

// window.addEventListener("keydown", (e) => {
//   let modalContainer = document.querySelector("#modal-container");
//   if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
//     hideModal();
//   }
// });
