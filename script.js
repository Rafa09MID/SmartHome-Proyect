const log = document.getElementById("log");
const baseUrl = "https://smarthome-teamrafa-default-rtdb.firebaseio.com";

// Formatea y agrega un mensaje nuevo
function agregarMensaje(mensaje, tipo = "info") {
  const div = document.createElement("div");
  div.className = "log-entry " + tipo;
  div.textContent = mensaje;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

// Guarda estados previos
let estadoAnterior = {
  cochera: "",
  fuego: "",
  temperatura: ""
};

// Función de actualización periódica (cada 3 segundos)
setInterval(async () => {
  try {
    const res = await fetch(`${baseUrl}/.json`);
    const data = await res.json();

    // Estado de cochera
    const estadoCochera = data?.cochera?.estado || "";
    if (estadoCochera !== estadoAnterior.cochera) {
      agregarMensaje(
        estadoCochera === "abierto" ? "🚗 Abriendo cochera automáticamente" : "🔒 Cerrando cochera automáticamente"
      );
      estadoAnterior.cochera = estadoCochera;
    }

    // Alerta de fuego
    const fuego = data?.sensor_fuego?.alerta || "";
    if (fuego !== estadoAnterior.fuego) {
      if (fuego === "fuego") {
        agregarMensaje("🔥 Fuego detectado. Activando alarma...", "alerta");
      } else {
        agregarMensaje("✅ Sin fuego");
      }
      estadoAnterior.fuego = fuego;
    }

    // Estado de temperatura
    const temperatura = data?.sensor_temperatura?.estado || "";
    if (temperatura !== estadoAnterior.temperatura) {
      if (temperatura === "calor") {
        agregarMensaje("🌡️ Hace calor. Encendiendo LED rojo", "alerta");
      } else {
        agregarMensaje("✅ Temperatura normal. Apagando LED rojo");
      }
      estadoAnterior.temperatura = temperatura;
    }
  } catch (error) {
    console.error("❌ Error obteniendo datos:", error);
  }
}, 3000);
