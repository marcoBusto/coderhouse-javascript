let promedio= 0;
let nota1=prompt("Ingrese la primer nota");
let nota2=prompt("Ingrese la segunda nota");
let nota3=prompt("Ingrese la tercer nota");
 promedio=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3
if (promedio>= 6){
alert("Estás aprobado"+" "+parseFloat(promedio));
}else{
 alert("Estás desaprobado"+" "+parseFloat(promedio));
}