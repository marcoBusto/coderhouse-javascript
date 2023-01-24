// fetch a api 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'AzLLJ7Ql85zQwUzxDx25ABGsFtCWwAqo8lRGP5mX',
		'X-RapidAPI-Host': 'api.currencyapi.com'
	}
};

fetch('https://api.currencyapi.com/v3/latest?apikey=AzLLJ7Ql85zQwUzxDx25ABGsFtCWwAqo8lRGP5mX&currencies=EUR%2CUSD%2CCAD&base_currency=ARS', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//Constantes 
const formulario = document.querySelector('#formulario');

const anual30 = 30;
const anual40 = 40;
const anual50 = 50;
const impuesto=5;
let resultado=0;
// calculos
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
 

//Formulario
formulario.addEventListener('submit',(event) => { 
       event.preventDefault();
       nombre = document.querySelector('#nombre').value;
       apellido = document.querySelector('#apellido').value;
       direccion = document.querySelector('#direccion').value;
       numTel = document.querySelector('#numTel').value;
       email = document.querySelector('#email').value;
       cantCred = document.querySelector('#cantCred').value;    
       
       let arrCliente = [nombre,apellido,direccion,numTel,email,cantCred]

       //localstorage ///
       localStorage.setItem("cliente", JSON.stringify(arrCliente));
       
  
       document.querySelector("#nombre").value = "";
       document.querySelector("#apellido").value = "";
       document.querySelector("#direccion").value = "";
       document.querySelector("#numTel").value = "";
       document.querySelector("#email").value = "";
       document.querySelector("#cantCred").value = "";
       
       

       formulario.style.display = 'none';         
       
       let listado = document.createElement('div');  
       let arrClientestorage =localStorage.getItem('cliente');
       arrClientestorage = JSON.parse(arrClientestorage);
       let datosStorageMonto = arrClientestorage[5];
       calcular(datosStorageMonto)
       
      
        

       for(elemento of arrClientestorage){
             listado.innerHTML =`Nombre: ${arrClientestorage[0]} </br> Apellido: ${arrClientestorage[1]} </br> Dirección:${arrClientestorage[2]} </br> Teléfono:${ arrClientestorage[3]} </br> Email:${arrClientestorage[4]} </br> Monto:${arrClientestorage[5]} </br>Monto a devolver en un año:${resultado}</br></br>\n`;
        }
      
      listado.style.color='gold'
      listado.style.marginBottom='60px';
      contenidos.appendChild(listado);  

      //Crear boton 
      let btn2 = document.createElement("button");
      btn2.innerHTML = "Eliminar Registro";
      contenidos.appendChild(btn2);
      btn2.classList.add('btn-primary');
      btn2.style.marginLeft='3px';
 
     //eliminar simulación 
      btn2.addEventListener('click',() => {
        contenidos.removeChild(listado);
        Swal.fire({
                title: '¿Desea eliminar el registro?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
        }).then((result) => {
                if (result.isConfirmed) {     
                localStorage.removeItem('cliente');        
                Swal.fire(
                        'Borrado',
                        'Su registro fue eliminado',
                        'success'
                        )
                location.reload();
                }
        })
     
      })

})    
