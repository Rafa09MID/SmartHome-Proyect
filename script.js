// Función para controlar la cochera
function controlarCochera(estado) {
  fetch(`https://smarthome-teamrafa-default-rtdb.firebaseio.com/casa/cochera.json`, {
    method: 'PUT',
    body: JSON.stringify({ estado: estado }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("Estado de la cochera actualizado:", data);
  })
  .catch(error => console.error("Error al actualizar la cochera:", error));
}

// Función para controlar la cocina
function controlarCocina(estado) {
  fetch(`https://smarthome-teamrafa-default-rtdb.firebaseio.com/casa/cocina.json`, {
    method: 'PUT',
    body: JSON.stringify({ estado: estado }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("Estado de la cocina actualizado:", data);
  })
  .catch(error => console.error("Error al actualizar la cocina:", error));
}

// Función para controlar la sala
function controlarSala(estado) {
  fetch(`https://smarthome-teamrafa-default-rtdb.firebaseio.com/casa/sala.json`, {
    method: 'PUT',
    body: JSON.stringify({ estado: estado }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("Estado de la sala actualizado:", data);
  })
  .catch(error => console.error("Error al actualizar la sala:", error));
}

// Función para controlar la entrada
function controlarEntrada(estado) {
  fetch(`https://smarthome-teamrafa-default-rtdb.firebaseio.com/casa/entrada.json`, {
    method: 'PUT',
    body: JSON.stringify({ estado: estado }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("Estado de la entrada actualizado:", data);
  })
  .catch(error => console.error("Error al actualizar la entrada:", error));
}
