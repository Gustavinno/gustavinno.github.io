
function getMoviesFromOMDB(page = 1) {

    const apikey = document.querySelector("#t-apikey").value;
    if (!apikey) {
        alert("Por favor, ingrese una clave API válida.");
        return; // Salir de la función si no hay clave API.
    }
    const tituloBuscado = document.querySelector("#t-titulo-omdb").value;
    let nuevaURL = `${URL}${apikey}&s=${tituloBuscado}&page=${page}`;

    doGetRequest(nuevaURL, processMovie);
}

//Busqueda por Título, pulsando el botón Buscar
document.querySelector("#b-titulo").addEventListener("click", () => {
    filtrarPeliculas("#t-titulo", "Title");
});

//Busqueda por Actor, pulsando el botón Buscar
document.querySelector("#b-actor").addEventListener("click", () => {
    filtrarPeliculas("#t-actor", "Actors");
});


//Busqueda por Género, cambiando la selección del desplegable
document.querySelector("#s-genero").addEventListener("change", () => {
    filtrarPeliculas("#s-genero", "Genre");
});

//Busqueda por Año, pulsando el botón Buscar
document.querySelector("#b-anyo").addEventListener("click", () => {
    filtrarPeliculas("#t-anyo", "Year");
});

function filtrarPeliculas(idElementoBusqueda, nombreAtributoBusqueda) {
    clearCards();
    if (!peliculas || peliculas.length === 0) {
        console.log("No hay películas para filtrar.");
        return; // No hace nada si no hay películas cargadas.
    }

    const textoBusqueda = document.querySelector(idElementoBusqueda).value;
    peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula[nombreAtributoBusqueda]
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.map(generateCard);
}