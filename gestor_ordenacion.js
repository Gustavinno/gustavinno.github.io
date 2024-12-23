
document.querySelector("#b-ordenar").onclick = (event) => {
    clearCards();
    const asc = document.querySelector("#r-asc").checked;
    const desc = document.querySelector("#r-desc").checked;
    //Ordenar en función del valor de Runtime
    peliculasFiltradas.sort((p1, p2) => {
        if (asc === true) {
            return parseInt(p1.Runtime) - parseInt(p2.Runtime);
        } else if (desc === true) {
            return parseInt(p2.Runtime) - parseInt(p1.Runtime);
        }
    });
    peliculasFiltradas.map(generateCard);
};