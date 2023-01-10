let datosStorageUsuario = JSON.parse(localStorage.getItem('usuario'));
let datosStoragePassword = JSON.parse(localStorage.getItem('password'));
console.log(datosStorageUsuario);

if (datosStorageUsuario === null && datosStoragePassword === null) {
    window.location.href="../index.html";
}