//Constantes
const formulario = document.querySelector('#formulario')

//clases
class Cliente{
  constructor (nombre,apellido,direccion,numTel,email,cantCred){
  this.nombre= nombre;
  this.apellido= apellido;
  this.direccion= direccion;
  this.numTel= numTel;
  this.email= email;
  this.cantCred=cantCred ;
  }
}

//Formulario

formulario.addEventListener('submit',() => {
       nombre = document.querySelector('#nombre').value;
       apellido = document.querySelector('#apellido').value;
       direccion = document.querySelector('#direccion').value;
       numTel = document.querySelector('#numTel').value;
       email = document.querySelector('#email').value;
       cantCred = document.querySelector('#cantCred').value;    
      

      // ocultar formulario //
      formulario.style.display = 'none';  
      //visualizar y agregar datos en pantalla
      let listado = document.createElement('div');
      listado.innerHTML = `Nombre: ${nombre} </br> Apellido: ${apellido} </br> Dirección:${direccion} </br> Teléfono:${numTel} </br> Email:${email} </br> Monto:${cantCred} </br></br>\n`;
      contenidos.appendChild(listado);  
      
      // eliminar simulación
      let btn = document.createElement("button");
      btn.innerHTML = "Eliminar simulación";
      contenidos.appendChild(btn);
      btn.addEventListener('click',() => {
        contenidos.removeChild(listado);
        location.reload();
      })
    })
    
