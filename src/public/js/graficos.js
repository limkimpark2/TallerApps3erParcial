// Funcion para generar colores aleatorios
function generarColorAleatorio() {
    // Genera tres componentes de color aleatorios en el rango de 0 a 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Convierte los componentes de color en formato rgb(r, g, b, a)
    var colorHex = `rgb(${r}, ${g}, ${b}, 0.5)`;

    // Que no sea colores muy claros o muy oscuros

    // Retorna el color hexadecimal
    return colorHex;
}

// Funcion para generar un arreglo con n elmentos de codigo de colores aleatorios
function generarColoresAleatorios(n) {
    const colores = [];

    for (let i = 0; i < n; i++) {
        // Generar un color aleatorio
        const color = generarColorAleatorio();
        // Agregar el color al arreglo de colores
        colores.push(color);
    }

    return colores;
}

// Arreglo con 100 colores aleatorios
const codigoColoresArreglo = generarColoresAleatorios(10);


function generarGrafico() {
    // Obtener una referencia al elemento canvas
    const ctx = document.getElementById('grafico').getContext('2d');

    // Generar el gráfico
    const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Cantidad',
                data: [],
                backgroundColor: [],
            }]
        },
        borderWidth: 1,
        options: {
            scales: {
                y: {
                    beginAtZero: true // Iniciar el eje y en cero
                }
            }
        }
    });

    return grafico;
}

function actualizarGrafico(grafico, productosComprados = []) {
    // Obtener los nombres de los productos comprados
    grafico.data.labels = productosComprados.map(producto => producto.nombre);

    // Obtener las cantidades de los productos comprados
    grafico.data.datasets[0].data = productosComprados.map(producto => producto.cantidad);

    // Obtener los colores de los productos comprados
    grafico.data.datasets[0].backgroundColor = codigoColoresArreglo.filter((color, indice) => indice < productosComprados.length);

    // Actualizar el gráfico
    grafico.update();

}