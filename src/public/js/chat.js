// Formulario del chat
const formularioChat = document.getElementById('formulario-chat');
// Para comprobar si es el usuario que actual
const usuarioActual = usuario;

formularioChat.addEventListener('submit', (event) => {
    event.preventDefault();
    formularioChat
    const mensaje = textareaMensaje.value.trim()

    if (mensaje) {
        socket.emit('chat', { usuario, mensaje: mensaje.replace(/\r?\n/g, '<br>') });

        textareaMensaje.value = '';
    }
});

// Escuchar los mensajes del chat que envía el servidor
socket.on('chat', ({ usuario, mensaje }) => {
    const esElUsuarioActual = usuarioActual === usuario;

    const burbuja = /*html*/ `
        <div class="chat__fila ${esElUsuarioActual ? 'chat__fila--izquierda' : 'chat__fila--derecha'}">
            <div class="burbuja">
                <span class="burbuja__usuario">${esElUsuarioActual ? 'Yo' : `${usuario}`}</span>
                <p class="burbuja__texto">
                    ${mensaje}
                </p>
            </div>
        </div>`

    chat.insertAdjacentHTML('beforeend', burbuja);
    chat.scrollTop = chat.scrollHeight;
});