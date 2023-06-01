// Script para la página principal
const socket = io();

// Obtener el elemento donde se va a mostrar el nombre de usuario
const nombreUsuario = document.getElementById('nombre-usuario');

// Obtener el nombre de usuario
const usuario = document.cookie.split('; ').find(row => row.startsWith('usuario')).split('=')[1];
nombreUsuario.innerText = usuario;

// Producto para consultar por chat
let productoChat = null;

// Textarea para enviar mensajes
const textareaMensaje = document.getElementById('textarea-mensaje');

// Obtener el elemento donde se van a mostrar los productos
const listaProductos = document.getElementById('lista-productos');

// Recorrer el array de productos
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    // Crear un elemento HTML para cada producto
    const tarjetaProducto = document.createRange().createContextualFragment(
        // Se usa es6-string-html como extension para visualizar correctamente el código HTML
        /*html*/`
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div class="card" style="width: 100%;">
                <img src="/images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">

                <div class="card-body">
                    <h5 class="card-title">${producto.nombre} BS.- ${producto.precio}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <a href="#" class="btn btn-primary" onclick="comprar(${producto.id})">Comprar</a>
                    <a href="#" class="btn btn-secondary" onclick="abrirModal(${producto.id})">Chatear</a>
                </div>
            </div>
        </div>`
    );

    // Agregar el elemento HTML al contenedor de productos
    listaProductos.appendChild(tarjetaProducto);
}

// Función para comprar un producto
function comprar(id) {
    event.preventDefault();
    console.log('Comprar producto con id:', id);
    // Buscar el producto en el array de productos
    const producto = productos.find(producto => producto.id === id);
    // Enviar un mensaje al servidor
    socket.emit('compra', {
        usuario,
        producto
    });
}

// Función para abrir el modal de chat
function abrirModal(id) {
    event.preventDefault();
    console.log('Abrir modal de chat para el producto con id:', id);
    // Buscar el producto en el array de productos
    productoChat = productos.find(producto => producto.id === id);

    // Usar el objeto Modal de Bootstrap para abrir el modal
    const modal = new bootstrap.Modal(document.getElementById('modal-chat'), {
        keyboard: false,
        backdrop: 'static'
    });

    // Mensaje por defecto
    textareaMensaje.value = `Hola, alguien me puede comentar sobre el producto ${productoChat.nombre}`;

    // Mostrar el modal
    modal.show();
}


