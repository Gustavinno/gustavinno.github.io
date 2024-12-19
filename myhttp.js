
function doGetRequest(url, processData) {
  fetch(url)
      .then((response) => {
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          return response.json();
      })
      .then((data) => {
          processData(data);
      })
      .catch((error) => console.error("Fetch error:", error));
}





/*
//Otro ejemplo usando fetch
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json(); // Parsear el JSON
  })
  .then(data => {
    console.log('Datos recibidos:', data);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });
*/


