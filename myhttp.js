function doGetRequest(url, callback) {
  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Error en la solicitud');
          }
          return response.json();
      })
      .then(data => callback(data))
      .catch(error => {
          console.error('Error al obtener datos:', error);
          alert('Hubo un problema al obtener las películas.');
      });
}
