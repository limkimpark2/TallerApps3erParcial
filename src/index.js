// Cargar variables de entorno
require('dotenv').config();

// Instanciar el servidor de Express
const express = require("express");

const path = require("path");

const { createServer } = require("http");

// Importar el servidor de Socket.io
const servidorRealtime = require("./servidor-tiempo-real");

// Para utilizar cookies en el servidor
const cookieParser = require("cookie-parser");


// Inicializar el servidor de Express
const app = express();
const httpServer = createServer(app);
//configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());

// Definicion de rutas
app.use(require("./routes"));
// Servir archivos estaticos para que el navegador pueda acceder a ellos
app.use(express.static(path.join(__dirname, "public")));

// Iniciar el servidor
httpServer.listen(app.get("port"), () => {
    console.log("El servidor está corriendo en el puerto", app.get("port"));
});

// Llamar al  servidor de Socket.io
servidorRealtime(httpServer);