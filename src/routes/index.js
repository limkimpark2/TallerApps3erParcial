const express = require("express");
const router = express.Router();
const path = require("path");

// Path de la carpeta views
const views = path.join(__dirname, "/../views");

// Middleware para validar si el usuario está conectado
const estaConectado = require("../middlewares/esta-conectado");
// Middleware para validar si el usuario es administrador
const esAdministrador = require("../middlewares/es-admin");

// Ruta para el registro
router.get("/registro", (req, res) => { // http://localhost:3000/registro
    res.sendFile(views + "/registro.html");
});

// Ruta para la pagina principal
router.get("/", estaConectado, (req, res) => { // http://localhost:3000/
    res.sendFile(views + "/index.html");
});

// Ruta para la pagina del panel de compras
router.get("/panel-compras", esAdministrador, (req, res) => { // http://localhost:3000/compras
    res.sendFile(views + "/panel-compras.html");
});

// Ruta para la pagina del panel de chat
router.get("/panel-chat", esAdministrador, (req, res) => { // http://localhost:3000/chat
    res.sendFile(views + "/panel-chat.html");
});

module.exports = router;