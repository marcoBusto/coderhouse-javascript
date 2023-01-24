//validar sesión
let datosStorage = JSON.parse(localStorage.getItem('usuarios'));     


const myPromise = new Promise((resolve, reject) => {
    if (datosStorage === null) {
     resolve   (window.location.href="../index.html");
    }  else{
     reject (console.log('Sesión exitosa'));  
    }      
  });
  
