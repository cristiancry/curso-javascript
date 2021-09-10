
// Declaración de Función
sumar();
function sumar() {
    console.log(10 + 10);
}



// Expresión de la función

const sumar2 = function() {
    console.log( 3 + 3);
}
sumar2();


sumar3();
function sumar3(){
    console.log((3+3)*2);
}
//IIFE
(function(){
console.log("modo IIFE activado :v");
})();