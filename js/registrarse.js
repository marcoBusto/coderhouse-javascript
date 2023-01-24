//Constante formulario
const formulario = document.querySelector('#formulario');
//Formulario
formulario.addEventListener('submit',(event) => { 
       event.preventDefault();
       nomLog  = document.querySelector('#nomLog').value;
       apeLog =  document.querySelector('#apeLog').value;
       usuario = document.querySelector('#usuario').value;
       password = document.querySelector('#password').value;
       
       function UsuarioPerfil(nomLog,apeLog,usuario,password){
          this.nomLog = nomLog;
          this.apeLog = apeLog;
          this.usuario= usuario;
          this.password= password;
      }
      
      let usuarios = new UsuarioPerfil(nomLog,apeLog,usuario,password)

      /// almacenamiento de usuarios en local storage
     localStorage.setItem("usuarios", JSON.stringify(usuarios));
      
     Swal.fire(
      '¡Registro guardado!',
      'Exito'
    )     
    setTimeout(function(){
      window.location.href = "../index.html";
    }, 2000);
})