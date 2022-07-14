alert("Hola! Bienvenido a Marchena Postres. Te invitamos a escoger la torta que desees");
alert("Recuerda que comprando Online tienes un 10% de Descuento");
alert("El precio del flete a todo CABA será de: $400, adicional a tu torta");

let seleccion = parseInt (prompt ("Selecciona la torta según su número asignado: (1) Tiramisu - (2) Chocotorta - (3) Chessecake - (4) Mousse de Chocolate - (5) Tarta de Frutas"));

// Detalle de Precio
const precios = [
    {id: 1, nombre: "Tiramisu", precio: 3000},
    {id: 2, nombre: "Chocotorta", precio: 2900},
    {id: 3, nombre: "Chessecake", precio: 3800},
    {id: 4, nombre: "Mousse de Chocolate", precio: 2500},
    {id: 5, nombre: "Tarta de Frutas", precio: 3100},
];

// Calculo de Precio
const suma = (a, b) => a + b;
const resta = x => x / 1.10;

// Precio por Producto
let precio1 = parseInt((resta(suma(precios[0].precio, 400))));
let precio2 = parseInt((resta(suma(precios[1].precio, 400))));
let precio3 = parseInt((resta(suma(precios[2].precio, 400))));
let precio4 = parseInt((resta(suma(precios[3].precio, 400))));
let precio5 = parseInt((resta(suma(precios[4].precio, 400))));

// Precio Total
switch (seleccion){
    case 1:
       if (seleccion === 1)
        alert(`Elegiste Tiramisu $3.000 + $400 Envio - 10% de Descuento por tu compra Online. Total a Pagar: ${precio1}`);
        alert("Te direccionamos a MercadoPago. Muchas Gracias por tu compra y por apoyar este emprendimiento!!");
       break
    case 2:
        (seleccion === 2) 
        alert(`Elegiste Chocotorta $2.900 + $400 Envio - 10% de Descuento por tu compra Online. Total a Pagar: ${precio2}`);
        alert("Te direccionamos a MercadoPago. Muchas Gracias por tu compra y por apoyar este emprendimiento!!");
        break
    case 3:
        (seleccion === 3) 
        alert(`Elegiste Chessecake $3.800 + $400 Envio - 10% de Descuento por tu compra Online. Total a Pagar: ${precio3}`);
        alert("Te direccionamos a MercadoPago. Muchas Gracias por tu compra y por apoyar este emprendimiento!!");
        break
    case 4:
        (seleccion === 4) 
        alert(`Elegiste Mousse de Chocolate $2.500 + $400 Envio - 10% de Descuento por tu compra Online. Total a Pagar: ${precio4}`);
        alert("Te direccionamos a MercadoPago. Muchas Gracias por tu compra y por apoyar este emprendimiento!!");
        break
    case 4:
        (seleccion === 4) 
        alert(`Elegiste Tarta de Frutas $3.100 + $400 Envio - 10% de Descuento por tu compra Online. Total a Pagar: ${precio4}`);
        alert("Te direccionamos a MercadoPago. Muchas Gracias por tu compra y por apoyar este emprendimiento!!");
        break
}

// Error de Selección
if (seleccion >= 6){
    alert("Su selección fue incorrecta, por favor elija un número de la lista de productos");
}

