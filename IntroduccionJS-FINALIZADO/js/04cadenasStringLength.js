// String o Cadenas de Texto

const producto="Monitor de 20 pulgadas oh yeah";
console.log(typeof producto);// typeof comando para definir el tipo de dato


const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const producto2 = 'Monitor HD"';
const nombre = 'Juan Pablo';
const email = 'correo@correo.com';

// length es para la extension
console.log(tweet.length);
console.log(producto2);

// IndexOf (retorna posición)
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));
console.log(email.indexOf('@'));

// Includes (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));
