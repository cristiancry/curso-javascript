const nombre = 'Juan';
const email = 'correo@correo.com';

// Concatenación
console.log("Nombre Cliente: " + nombre + " Email: " + email);


// Template Strings - String Literals
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);
console.log(`Email: ${email} nombre:${nombre} cantidad: ${(nombre + email).length}`);