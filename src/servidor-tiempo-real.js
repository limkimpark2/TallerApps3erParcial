module.exports = httpServer => {
    const { Server } = require("socket.io");
    const io = new Server(httpServer);

    // Cuando un cliente se conecta
    io.on("connection", socket => {

        console.log("Un cliente se ha conectado");

        // Escuchar el evento "compra"
        socket.on("compra", datos => {
            console.log(datos);

            io.emit("nueva-compra", datos);
        })

        // Escuchar el evento "chat"
        socket.on('chat', (chat) => {
            console.log(chat)

            io.emit('chat', chat)
        })

        console.log(socket.id);

        // Escuchar el evento "disconnect"
        socket.on("disconnect", () => {
            console.log("El cliente se ha desconectado");
        });
    });
}