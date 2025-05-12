// Configura tu Firebase aquí
var firebaseConfig = {
  apiKey: "AIzaSyBXpvGO2elpynhQAHQfR3MAeGibhfienAQ",
  authDomain: "smarthome-teamrafa.firebaseapp.com",
  databaseURL: "https://smarthome-teamrafa-default-rtdb.firebaseio.com",
  projectId: "smarthome-teamrafa",
  storageBucket: "smarthome-teamrafa.firebasestorage.app",
  messagingSenderId: "910175756115",
  appId: "1:910175756115:web:0492ca59f35db1fd9f0ba6",
};

firebase.initializeApp(firebaseConfig);

// Cambiar estado manual
function toggleControl(seccion, onValor, offValor) {
  const ref = firebase.database().ref(`${seccion}/control_manual`);
  ref.once('value').then(snapshot => {
    const actual = snapshot.val();
    const nuevo = actual === onValor ? offValor : onValor;
    ref.set(nuevo);
    document.getElementById(`estado-control-${seccion}`).innerText = `Estado: ${nuevo}`;
  });
}

// Cambiar modo automático/manual
function toggleModo(seccion) {
  const ref = firebase.database().ref(`${seccion}/modo_automatico`);
  ref.once('value').then(snapshot => {
    const actual = snapshot.val();
    ref.set(!actual).then(() => {
      document.getElementById(`estado-modo-${seccion}`).innerText = `Modo actual: ${!actual ? 'Manual' : 'Automático'}`;
    });
  });
}

// Cargar estados al inicio
function cargarEstados() {
  const secciones = ['cochera', 'cocina', 'sala', 'entrada'];
  secciones.forEach(seccion => {
    firebase.database().ref(`${seccion}/modo_automatico`).once('value').then(snapshot => {
      const modo = snapshot.val();
      document.getElementById(`estado-modo-${seccion}`).innerText = `Modo actual: ${modo ? 'Automático' : 'Manual'}`;
    });
    firebase.database().ref(`${seccion}/control_manual`).once('value').then(snapshot => {
      const estado = snapshot.val();
      document.getElementById(`estado-control-${seccion}`).innerText = `Estado: ${estado}`;
    });
  });
}

window.onload = cargarEstados;
