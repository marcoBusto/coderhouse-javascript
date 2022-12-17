const anual30 = 30;
const anual40 = 40;
const anual50 = 50;
const impuesto=5;
let resultado = 0;
let listadoRecargos=[]


let monto = parseFloat(prompt("Ingrese el monto del credito a solicitar, para finalizar escriba '0':"));
/*Funciones*/
function calcularInteres(interes) {
        resImp= (monto * impuesto)/100;
        resultado = (monto * (interes/100))+resImp+monto;
                alert("El monto a devolver en un año es de:" + resultado);
}
function mostrarListado{ 
        var lista='';
        for(let i=0; i<listadoRecargos.length; i++){
        
        }
    }
while (monto != 0) {
    if (monto <= 50000) {
            calcularInteres(anual50);
    }   else if (monto > 50000 && monto <= 100000) {
            calcularInteres(anual40);
    }   else if (monto > 100000) {
            calcularInteres(anual30);
    }
    alert("¡Gracias por confiar en nosotros!");
    monto = parseFloat(prompt("Ingrese el monto del credito a solicitar, para finalizar escriba '0':"));
}
    

