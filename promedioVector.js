let promedio= 0;
let suma=0;
let cant=0;
for (let i = 0; cant < 10 ; i++) {    
    i=prompt("Ingresar nota");
    suma += parseFloat(i);
    cant=cant+1;
}
promedio= parseFloat((suma)/cant);
alert(promedio);