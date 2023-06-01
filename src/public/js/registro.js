// Este va ser el archivo que se encargue de manejar el registro de usuarios
const formularioRegistro = document.getElementById('formulario-registro');
const campoUsuario = document.getElementById('usuario');
const campoRol = document.getElementById('rol');

// Agregar el evento submit al formulario de registro
formularioRegistro.addEventListener('submit', (event) => {
    event.preventDefault();

    // Capturar los valores de los campos
    const usuario = campoUsuario.value;
    const rol = campoRol.value;

    // Validar que los campos no estén vacíos
    // trim() elimina los espacios en blanco al inicio y al final de una cadena
    if (usuario.trim() === '' || rol.trim() === '') {
        return;
    }

    // Crear cookie con el nombre de usuario
    document.cookie = `usuario=${usuario}`;
    // Crear cookie con el rol del usuario
    document.cookie = `rol=${rol}`;

    // Redireccionar a la página principal
    document.location.href = "/";

    // Crear un objeto con los datos del formulario
    // const datos = {
    //     usuario,
    //     rol
    // };
});