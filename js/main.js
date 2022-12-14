// Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]
let ulArreglo = document.getElementById ("ulArreglo");
let arreglo = [3, 5, 7, 1, 6];
let badgeMayor = document.getElementById("badgeMayor");


function numeroMayor(arreglo){
    let mayor=0;
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index]>mayor){
             mayor = arreglo[index];
        }
        
    }
        return mayor;

}

for (let index = 0; index < arreglo.length; index++) {
    ulArreglo.innerHTML+= arreglo + "<br/>";




}
badgeMayor.innerHTML+=numeroMayor(arreglo);

//Ejercicio #2
//María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema: Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.

let arreg = [-1, 3, 4, 2, 6];
let badgeMenor = document.getElementById("badgeMenor");
function numeroMenor(arreglo){
    let menor=-1;
    for (let index = -1; index > arreglo.length; index--) {
        if (arreg[index]<menor){
             menor = arreg[index];
        }
        
    }
        return menor;

}

for (let index = -1; index > arreglo.length; index--) {
    ulArreglo.innerHTML+= arreg + "<br/>";
}
badgeMenor.innerHTML+=numeroMenor(arreg);

 // Ejercicio #4
//Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

let desordenado =document.getElementById ("desorden");
let lista = [1, 2, 5, 14, 24, 31, 50, 105];

lista.sort(function(){ return Math.random() -0.5});
desordenado.innerHTML += 'Los numeros aleatorios del array [1, 2, 5, 14, 24, 31, 50, 105]';