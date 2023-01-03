//Constantes
const anual30 = 30;
const anual40 = 40;
const anual50 = 50;
const impuesto=5;

//clases
 class Prestamo {
        constructor(monto){
               this.monto=monto;
               this.montofinal = 0;
        }
        calcularInteres(interes) {
                let resImp= (this.monto * impuesto)/100;
                this.montofinal = (this.monto * (interes/100))+resImp+this.monto;
                console.log("El monto a devolver en un año es de:" + this.montofinal);
        }
        solicitarMonto(){
                this.monto = parseFloat(prompt("Ingrese el monto del credito a solicitar, para finalizar escriba '0':"));
                console.log(this.monto);
        }
        calcularPrestamo(){
                if (this.monto <= 50000) {
                        this.calcularInteres(anual50);
                }else if (this.monto > 50000 && this.monto <= 100000) {
                        this.calcularInteres(anual40);
                }else if (this.monto > 100000) {
                        this.calcularInteres(anual30);
                }
        }
}
class Cliente{
        constructor (nombre,apellido,direccion,telefono,email){
        this.nombre= nombre;
        this.apellido= apellido;
        this.direccion= direccion;
        this.telefono= telefono;
        this.email= email;
        }
}


const cantidad = parseFloat(prompt("Ingrese la cantidad de préstamos que quiere obtener':"));
const prestamos=[];
for (let i=1; i<= cantidad; i++){
        let auxPrestamo    = new Prestamo(0);
        auxPrestamo.solicitarMonto();
        auxPrestamo.calcularPrestamo();
        prestamos.push(auxPrestamo);
        alert("El monto final a pagar es: " + auxPrestamo.montofinal);
}
/*metodo find*/ 
//const detalle = parseFloat(prompt("Ingrese el monto del credito que desea ver el detalle':"));
//prestamos.find(detalle => prestamos.monto == detalle)
//console.log("El monto sin intereses es:"+detalle);
//console.log("El monto con intereses es:"+prestamos.montofinal);


//const formulario = document.getElementById('formulario');
//console.log(formulario);

alert("¡Gracias por confiar en nosotros!");
