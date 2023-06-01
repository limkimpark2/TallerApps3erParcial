const socket = io();

// Almacenar los productos que se compraron
const productosComprados = [];

// Elemento donde se van a mostrar los productos comprados
const listaProductosComprados = document.getElementById("lista-productos-comprados");

// Generar el gráfico
const grafico = generarGrafico();

// Escuchar el evento de nueva-compra desde el servidor
socket.on("nueva-compra", datos => {
    // Vaciar la lista de productos comprados
    listaProductosComprados.innerHTML = "";

    console.log(datos);

    // Comprobar si el producto ya esta en la lista de productos comprados
    const indiceProductoDentroListaProductos = productosComprados.findIndex(producto => producto.id === datos.producto.id);

    // Si el producto ya esta en la lista de productos comprados
    if (indiceProductoDentroListaProductos !== -1) {
        // Aumentar la cantidad del producto
        productosComprados[indiceProductoDentroListaProductos].cantidad++;
    } else {
        // Agregar el producto a la lista de productos comprados
        productosComprados.push({
            cantidad: 1,
            ...datos.producto
        });
    }

    // Actualizar el gráfico
    actualizarGrafico(grafico, productosComprados);

    // Mostrar la lista de productos comprados
    for (let i = 0; i < productosComprados.length; i++) {
        const productoComprado = productosComprados[i];

        // Crear un elemento HTML para cada producto
        const filaProductoComprado = /*html*/`
            <tr>
                <td>${i + 1}</td>
                <td>${productoComprado.nombre}</td>
                <td>${productoComprado.cantidad}</td>
                <td>${productoComprado.precio}</td>
                <td>${productoComprado.precio * productoComprado.cantidad}</td>
            </tr>
        `;

        // Agregar el elemento HTML al contenedor de productos comprados
        listaProductosComprados.innerHTML += filaProductoComprado;
    }
});