const anual30=30;
const anual40=40;
const anual50=50;
let resultado=0;
let monto=parseFloat(prompt("¡Bienvenido! Si desea salir, ingrese la palabra salir Ingrese el monto del credito a solicitar"));

/*Funciones*/

function interes30(){
    resultado=monto+parseFloat((monto*anual30)/100);
    alert("El monto a devolver en un año es de:"+resultado);    
}

function interes40(){
    resultado=monto+parseFloat((monto*anual40)/100);
    alert("El monto a devolver en un año es de:"+resultado);    
}

function interes50(){
   resultado=monto+parseFloat((monto*anual50)/100);
   alert("El monto a devolver en un año es de:"+""+resultado);    
}

	     
 while (monto !== "salir"){
        if(monto<=50000){
            interes50();
            alert("¡Gracias por confiar en nosotros!");
        } else if(monto > 50000 && monto <= 100000){
            interes40();
            alert("¡Gracias por confiar en nosotros!");
        } else if(monto > 100000) {
            interes50();
            alert("¡Gracias por confiar en nosotros!");
        } 
    monto=parseFloat(prompt("Ingrese el monto del credito a solicitar"));
    }
    
    
    

