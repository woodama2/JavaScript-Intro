let pokemonRepository = (function () {
  let e = [];
  function t() {
    return e;
  }
  function n(t) {
    "object" == typeof t ? e.push(t) : console.log("pokemon is not correct");
  }
  function i(e) {
    return (
      showLoadingMessage(),
      fetch(e.detailsUrl)
        .then(function (e) {
          return hideLoadingMessage(), e.json();
        })
        .then(function (t) {
          hideLoadingMessage(),
            (e.imageUrl = t.sprites.front_default),
            (e.height = t.height),
            (e.weight = t.weight);
        })
        .catch(function (e) {
          hideLoadingMessage(), console.error(e);
        })
    );
  }
  let o = document.querySelector(".modal");
  function a(e) {
    i(e).then(function () {
      var t, n;
      let i, o, a, s, l, d, r;
      (t = e),
        (i = document.querySelector(".modal-body")),
        (o = document.querySelector(".modal-header")),
        (i.innerHTML = ""),
        (a = document.querySelector(".modal-title")),
        (n = t.name
          .split(" ")
          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
          .join(" ")),
        (a.innerHTML = n),
        (s = document.querySelector(".close")),
        (l = document.createElement("img")).classList.add("modal-img"),
        l.classList.add("img-fluid"),
        l.classList.add("pokemonImageSize"),
        (l.src = t.imageUrl),
        (l.alt = "Front image of " + t.name),
        ((d = document.createElement("p")).innerHTML =
          "Height: " + t.height + " decimeters"),
        d.classList.add("text-monospace"),
        d.classList.add("font-weight-bold"),
        ((r = document.createElement("p")).innerHTML =
          "Weight: " + t.weight + " hectograms"),
        r.classList.add("text-monospace"),
        r.classList.add("font-weight-bold"),
        o.appendChild(a),
        o.appendChild(s),
        i.appendChild(l),
        i.appendChild(d),
        i.appendChild(r),
        console.log(e);
    });
  }
  function s() {
    o.classList.remove("is-visible");
  }
  return (
    window.addEventListener("keydown", (e) => {
      "Escape" === e.key && o.classList.contains("is-visible") && s();
    }),
    o.addEventListener("click", (e) => {
      e.target === o && s();
    }),
    {
      add: n,
      getAll: t,
      addListItem: function e(t) {
        let n = document.querySelector(".pokemon-list"),
          i = document.createElement("li");
        i.classList.add("col-12", "col-md-4", "mb-2"), n.appendChild(i);
        let o = document.createElement("button");
        (o.innerHTML = t.name
          .split(" ")
          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
          .join(" ")),
          i.appendChild(o),
          o.classList.add("btn", "btn-lg", "btn-block", "btn-outline-dark"),
          o.setAttribute("data-target", "#exampleModal"),
          o.setAttribute("data-toggle", "modal"),
          (function e(t, n) {
            t.addEventListener("click", function () {
              a(n);
            });
          })(o, t);
      },
      loadList: function e() {
        return (
          showLoadingMessage(),
          fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
            .then(function (e) {
              return hideLoadingMessage(), e.json();
            })
            .then(function (e) {
              hideLoadingMessage(),
                e.results.forEach(function (e) {
                  n({ name: e.name, detailsUrl: e.url });
                });
            })
            .catch(function (e) {
              hideLoadingMessage(), console.error(e);
            })
        );
      },
      loadDetails: i,
      showDetails: a,
    }
  );
})();
function showLoadingMessage() {
  document.getElementById("loadingMessage").style.display = "block";
}
function hideLoadingMessage() {
  document.getElementById("loadingMessage").style.display = "none";
}
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
