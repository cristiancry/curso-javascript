// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);
// console.log(producto["precio"]);

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg'; 

// Eliminar propiedades
delete producto.disponible;

const caracteristicas={
    color: "rojo",
    tamaño:"20",
    modeloAntiguo:"false"

}
caracteristicas.unidades="20";

console.log(producto);
console.log(caracteristicas);