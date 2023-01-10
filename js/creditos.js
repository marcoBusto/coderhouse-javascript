//Constante formulario
const formulario = document.querySelector('#formulario');

//Constantes calculos
const anual30 = 30;
const anual40 = 40;
const anual50 = 50;
const impuesto=5;
let resultado=0;
// funcion calcular credito
function calcular(datosStorageMonto){
        if (datosStorageMonto <= 50000) {
                resultado = (parseInt(datosStorageMonto)*anual50)/100+parseInt(datosStorageMonto);
                console.log(resultado);
        }else if (datosStorageMonto > 50000 && datosStorageMonto <= 100000) {
                resultado = (parseInt(datosStorageMonto)*anual40)/100+parseInt(datosStorageMonto);
                console.log(resultado);
        }else if (this.monto > 100000) {
                resultado = (parseInt(datosStorageMonto)*anual30)/100+parseInt(datosStorageMonto);
                console.log(resultado);
        }
} 
//variable listado
let listado = document.createElement('div');


//Formulario
formulario.addEventListener('submit',(event) => { 
       event.preventDefault();
       nombre = document.querySelector('#nombre').value;
       apellido = document.querySelector('#apellido').value;
       direccion = document.querySelector('#direccion').value;
       numTel = document.querySelector('#numTel').value;
       email = document.querySelector('#email').value;
       cantCred = document.querySelector('#cantCred').value;    
       
       //localstorage ///
       localStorage.setItem("nombre", JSON.stringify(nombre));
       localStorage.setItem("apellido", JSON.stringify(apellido));
       localStorage.setItem("direccion", JSON.stringify(direccion));
       localStorage.setItem("telefono", JSON.stringify(numTel));
       localStorage.setItem("email", JSON.stringify(email));
       localStorage.setItem("monto", JSON.parse(cantCred));
       
       /*Limpiando los campos o inputs*/
       document.querySelector("#nombre").value = "";
       document.querySelector("#apellido").value = "";
       document.querySelector("#direccion").value = "";
       document.querySelector("#numTel").value = "";
       document.querySelector("#email").value = "";
       document.querySelector("#cantCred").value = "";
       
       
      // ocultar formulario //
      formulario.style.display = 'none';

            

      // crear boton mostrar registro
      let btn1 = document.createElement("button");
      btn1.innerHTML = "Mostrar Registro";
      contenidos.appendChild(btn1);
      btn1.classList.add('btn-primary');
      
      // evento mostrar registro
      btn1.addEventListener('click',() => {
        let datosStoragNom = localStorage.getItem('nombre');
        let datosStoragApe = localStorage.getItem('apellido');
        let datosStorageDir = localStorage.getItem('direccion');
        let datosStorageTel = localStorage.getItem('telefono');
        let datosStorageEmail = localStorage.getItem('email');
        let datosStorageMonto = localStorage.getItem('monto');

       
        calcular(datosStorageMonto);
        // crea listado de registro de local storage
        listado.innerHTML = `Nombre: ${datosStoragNom} </br> Apellido: ${datosStoragApe} </br> Dirección:${datosStorageDir} </br> Teléfono:${ datosStorageTel} </br> Email:${datosStorageEmail} </br> Monto:${datosStorageMonto} </br>Monto a devolver en un año:${resultado}</br></br>\n`;
        listado.style.marginBottom='60px';
        contenidos.appendChild(listado);  
      })

      //Crear boton eliminar registro
      let btn2 = document.createElement("button");
      btn2.innerHTML = "Eliminar Registro";
      contenidos.appendChild(btn2);
      btn2.classList.add('btn-primary');
      btn2.style.marginLeft='3px';
      
     
      
     //eliminar simulación y eventro click
      btn2.addEventListener('click',() => {
      contenidos.removeChild(listado); 
       localStorage.removeItem("nombre", JSON.stringify(nombre));
       localStorage.removeItem("apellido", JSON.stringify(apellido));
       localStorage.removeItem("direccion", JSON.stringify(direccion));
       localStorage.removeItem("telefono", JSON.stringify(numTel));
       localStorage.removeItem("email", JSON.stringify(email));
       localStorage.removeItem("monto", JSON.parse(cantCred));
      location.reload();
      })
})
    
