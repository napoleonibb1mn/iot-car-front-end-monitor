
let respuesta = document.getElementById('respuesta');

function callApiRequest(){

    // Hacer una petición para un usuario con ID especifico
axios.get('https://3.17.4.88/iot-car-control/back-end/apis/getRegistro.php')
.then(function (response) {
  // manejar respuesta exitosa
  console.log(response);

  let respuestaservidor = response.data == "w"?"ADELANTE":response.data == "s"?"ATRAS":response.data == "a"?"IZQUIERDA":response.data == "d"?"DERECHA": response.data == "p"?"PARAR":"LETRA NO CONOCIDA";
  respuesta.innerHTML = "Respuesta: <strong>" +respuestaservidor;
})
.catch(function (error) {
  // manejar error
  console.log(error);
})
.finally(function () {
  // siempre sera executado
});
}

// Repite la función cada 2 segundos
setInterval(callApiRequest, 1000);


