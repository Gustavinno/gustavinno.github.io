const URL='https://gustavinno.github.io/movies-250.json';

function generateCard(pelicula){
    
    //1. Crear la tarjeta
    const nuevaCard = document.createElement("div");//Crea un elemento de tipo div
    nuevaCard.setAttribute("class","card");

    //2. Crear la imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", pelicula.Poster);
    nuevaImg.setAttribute("alt", `Póster de la película ${pelicula.Title}`);
    nuevaCard.appendChild(nuevaImg);

    //3. Crear el contenido de la tarjeta
    const nuevoContenido = document.createElement("div");
    nuevoContenido.setAttribute("class","card-content");
    nuevaCard.appendChild(nuevoContenido);

    //4. Crear el h3 del título <h3>El Padrino</h3>
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = pelicula.Title;
    nuevoContenido.appendChild(nuevoTitulo);

    //5. Crear el director <p><strong>Director:</strong> Francis Ford Coppola</p>
    const nuevoParrafoDirector = document.createElement("p");
    const nuevaNegrita = document.createElement("strong");
    nuevoParrafoDirector.appendChild(nuevaNegrita);
    nuevaNegrita.textContent = "Director: ";
    nuevoContenido.appendChild(nuevoParrafoDirector);
    const textoDirector = document.createTextNode(pelicula.Director)
    nuevoParrafoDirector.appendChild(textoDirector);

    //6. Año
    const nuevoParrafoAnyo = document.createElement('p');
    const nuevaCelda = document.createElement("strong");
    nuevoParrafoAnyo.appendChild(nuevaCelda);
    nuevaCelda.textContent = "Año: ";
    nuevoContenido.appendChild(nuevoParrafoAnyo);
    const textoAnyo = document.createTextNode(pelicula.textoAnyo)
    nuevoParrafoAnyo.appendChild(textoAnyo);
    //7. Genero
    const nuevoParrafoGenero = document.createElement('p');
    const nuevaCelda2 = document.createElement("strong");
    nuevoParrafoGenero.appendChild(nuevaCelda2);
    nuevaCelda2.textContent = "Genero: ";
    nuevoContenido.appendChild(nuevoParrafoGenero);
    const textoGenero = document.createTextNode(pelicula.textoGenero)
    nuevoParrafoGenero.appendChild(textoGenero);

    
    //Último paso: Agregar al contenedor la ficha recién creada
    document.querySelector("#container").appendChild(nuevaCard);//Agregamos el div al contenedor
}

function processMovie(data) {
    const peliculas = data.movies;
    //FORMAS DE RECORRER ARRAYS Y OBJETOS
    /*
    //Recorremos con bucle for tradicional
    for (let i=0;i<peliculas.length;i++){
        console.log("Duration:" + peliculas[i].Runtime);
    }
    //Recorremos con bucle for-of
    for (pelicula of peliculas) {
        console.log("Director:" + pelicula.Director);
    }
    //Recorremos con el método forEach
    peliculas.forEach(pelicula => {
        console.log("Título:" + pelicula.Title);
    });
    //Recorre el contenido de un objeto
    for (atributo in peliculas[0]){
        console.log(atributo, peliculas[0][atributo]);
    }
    */
    peliculas.forEach(pelicula => {
        generateCard(pelicula);
    });
}

doGetRequest(URL, processMovie);