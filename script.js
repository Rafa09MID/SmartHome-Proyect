const estadoElemento = document.getElementById("estado");

function actualizarEstado() {
  fetch("https://smarthome-teamrafa-default-rtdb.firebaseio.com/cochera/estado.json")
    .then(response => response.json())
    .then(data => {
      estadoElemento.textContent = `🚗 Cochera: ${data}`;
    })
    .catch(error => {
      estadoElemento.textContent = "❌ Error al obtener estado";
      console.error("Error:", error);
    });
}

actualizarEstado();
setInterval(actualizarEstado, 3000); // Actualiza cada 3 segundos
