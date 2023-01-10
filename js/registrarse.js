//Constante formulario
const formulario = document.querySelector('#formulario');
//Formulario
formulario.addEventListener('submit',(event) => { 
       event.preventDefault();
       nomLog  = document.querySelector('#nomLog').value;
       apeLog =  document.querySelector('#apeLog').value;
       usuario = document.querySelector('#usuario').value;
       password = document.querySelector('#password').value;
      
     /// almacenamiento de usuarios en local storage
     localStorage.setItem("nomLog", JSON.stringify(nomLog));
     localStorage.setItem("apeLog", JSON.stringify(apeLog));
     localStorage.setItem("usuario", JSON.stringify(usuario));
     localStorage.setItem("password", JSON.stringify(password));

     window.location.href = "../index.html";
})