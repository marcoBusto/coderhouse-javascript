//Constante formulario
const formulario = document.querySelector('#formulario');
//Formulario
formulario.addEventListener('submit',(event) => { 
       event.preventDefault();
     // obtención de datos de los input
       let usuario = document.querySelector('#usuario').value;
       let password = document.querySelector('#password').value;
    
     
     let datosStorage = JSON.parse(localStorage.getItem('usuarios'));
     if(datosStorage != null){
          [,, datosStorageUsuario, datosStoragePassword ] = Object.values(datosStorage);
     }else{
          datosStorageUsuario = null;
          datosStoragePassword= null;
     } 
     // validación de usuario y contraseña login

     if(usuario === datosStorageUsuario && password === datosStoragePassword){
          window.location="index1.html";
     }else if (usuario != datosStorageUsuario && password === datosStoragePassword){
          Swal.fire({
               icon: 'error',
               title: 'Usuario incorrecto',
               text: 'Verifica que el usuario sea correcto',
             })        
     } else if (usuario === datosStorageUsuario && password != datosStoragePassword){
          Swal.fire({
               icon: 'error',
               title: 'Password incorrecto',
               text: 'Verifica que el password sea correcto',
             }) 


     } else if (usuario != datosStorageUsuario && password != datosStoragePassword){
          Swal.fire({
               icon: 'error',
               title: 'Usuario  y Password Incorrectos',
               text: 'Verifica que el usuario y el password sean correctos',
             }) 
     }
}) 

