/*const URL = 'https://gustavinno.github.io/movies-250.json';
let url = `https://www.omdbapi.com/?apikey=${apiKey}&s=Inception`;
let URL = `https://www.omdbapi.com/?apikey=92358e11&s=${tituloBuscado}&page=${page}`;*/

let URL = 'https://www.omdbapi.com/?apikey=92358e11';



let peliculas;
let peliculasFiltradas;
let currentPage = 1;

/*function initApp() {
    document.querySelector("#t-apikey").value = getApiKey();
}*/

function processMovie(data) {
    if (data.Response === 'True') {
        peliculas = data.Search;
        peliculasFiltradas = peliculas;  // Asegúrate de que esta variable se actualice
        renderPaginationControls(Math.ceil(data.totalResults / 10)); // Generamos los controles de paginación
        clearCards();
        peliculasFiltradas.forEach(generateCard);  // Asegúrate de usar peliculasFiltradas aquí
        document.querySelector("#contador").textContent = peliculasFiltradas.length;  // Actualiza el contador
    } else {
        alert('Error: ' + data.Error);
    }
}


function generateCard(pelicula) {
    document.querySelector("#contador").textContent = peliculasFiltradas.length;

    const nuevaCard = document.createElement("div");
    nuevaCard.setAttribute("class", "card");

    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", pelicula.Poster);
    nuevaImg.setAttribute("alt", `Póster de la película ${pelicula.Title}`);
    nuevaCard.appendChild(nuevaImg);

    const nuevoContenido = document.createElement("div");
    nuevoContenido.setAttribute("class", "card-content");
    nuevaCard.appendChild(nuevoContenido);

    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = pelicula.Title;
    nuevoContenido.appendChild(nuevoTitulo);

    const nuevoParrafoDirector = document.createElement("p");
    const nuevaNegrita = document.createElement("strong");
    nuevoParrafoDirector.appendChild(nuevaNegrita);
    nuevaNegrita.textContent = "Director: ";
    nuevoContenido.appendChild(nuevoParrafoDirector);
    const textoDirector = document.createTextNode(pelicula.Director);
    nuevoParrafoDirector.appendChild(textoDirector);

    const nuevoParrafoAnyo = document.createElement("p");
    const nuevaNegritaAnyo = document.createElement("strong");
    nuevoParrafoAnyo.appendChild(nuevaNegritaAnyo);
    nuevaNegritaAnyo.textContent = "Año: ";
    nuevoContenido.appendChild(nuevoParrafoAnyo);
    const textoAnyo = document.createTextNode(pelicula.Year);
    nuevoParrafoAnyo.appendChild(textoAnyo);

    document.querySelector("#container").appendChild(nuevaCard);
}

function generarDesplegableTipo(peliculas) {
    if (!Array.isArray(peliculas)) {
        console.error("La variable 'peliculas' no es un array válido.");
        return;
    }

    const desplegable = document.querySelector("#s-tipo");
    if (!desplegable) {
        console.error("El elemento con ID 's-tipo' no existe en el DOM.");
        return;
    }

    document.querySelectorAll("#s-tipo option").forEach(option => option.remove());

    let setTipos = new Set();
    peliculas.forEach(pelicula => {
        if (pelicula && pelicula.Type) {
            setTipos.add(pelicula.Type);
        }
    });

    Array.from(setTipos)
        .sort()
        .forEach(tipo => {
            let tipoOption = document.createElement("option");
            tipoOption.setAttribute("value", tipo.toLowerCase());
            tipoOption.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
            desplegable.appendChild(tipoOption);
        });
}

function clearCards() {
    document.querySelectorAll(".card").forEach(card => card.remove());
}

function renderPaginationControls(totalPages) {
    const controlsContainer = document.getElementById('pagination-controls');
    controlsContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.disabled = i === currentPage;
        button.addEventListener('click', () => {
            currentPage = i;
            getMoviesFromOMDB(currentPage);
        });
        controlsContainer.appendChild(button);
    }
}

/*initApp()*/