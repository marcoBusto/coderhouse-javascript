//Constante formulario
const formulario = document.querySelector('#formulario');
//Formulario
formulario.addEventListener('submit',(event) => { 
       event.preventDefault();
     // obtención de datos de los input
       let usuario = document.querySelector('#usuario').value;
       let password = document.querySelector('#password').value;

     // obtención de datos localstorage
       let datosStorageUsuario = JSON.parse(localStorage.getItem('usuario'));
       let datosStoragePassword = JSON.parse(localStorage.getItem('password'));
     
     // validación de usuario y contraseña login

     if(usuario === datosStorageUsuario && password === datosStoragePassword){
          window.location="index1.html";
     }else if (usuario != datosStorageUsuario && password === datosStoragePassword){
          alert('Usuario incorrecto');
     } else if (usuario === datosStorageUsuario && password != datosStoragePassword){
          alert('Password incorrecto');
     } else if (usuario != datosStorageUsuario && password != datosStoragePassword){
          alert('Usuario y Password incorrectos');}
}) 

