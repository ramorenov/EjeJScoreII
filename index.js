const products = require("./products");
const buylist = require("./buylist");

/**
 * De acuerdo al ejercicio realizado en la última clase, donde se relacionan
 * PRODUCTOS EN STOCK(id, nombre, cantidad en stock, precio) y
 * PRODUCTOS A COMPRAR(id, cantidad a comprar).
 * Se debe crear dos objetos: El primero contiene la estructura de los productos con mínimo 10 registros,
 * el segundo contiene la estructura de los productos a comprar con mínimo 7 registros.
 * Se debe hacer un programa que muestre:
 * 1. La lista de productos en stock.
 * 2. La lista de productos a comprar.
 * 3. Adicionalmente cada uno debe proponer una funcionalidad con el detalle de la venta.
 * Para esta actividad es necesario realizar un repositorio y vincularlo como evidencia.
 * ACLARACIÓN: Esta actividad es independiente de la actividad evaluada anteriormente
 **/

// Desarrollo

//1. Lista de productos en stock

console.log("******* Lista de productos en stock *******");
products.map(item => console.log(item.stock, item.name));

console.log("\n");

// buylist.map(item => console.log(item.id, item.quantity));

//2. Lista de productos a comprar

console.log("********  Lista de productos a comprar ********");
var ventai = [];
var ventap = [];
var ventaq = [];
var valorTotal = 0;
function imprimirListado(arr) {
  let index = buylist.map(item => item.id);

  buylist.map(function(item2, index) {
    // console.log(item2);
    arr.map(function(item) {
      if (item.id === item2.id) {
        if (item2.quantity <= item.stock) {
          item.pedido = item2.quantity;
        } else {
          item.pedido = item.stock;
        }
        valorTotal = valorTotal + item.price * item.pedido;
        ventai[index] = item.name;
        ventaq[index] = item.pedido;
        ventap[index] = item.price;

        console.log(item2.quantity, item.name);
      }
    });
  });
}

imprimirListado(products);
console.log("\n");

// 3 funcionalidad con el detalle de la venta.

console.log("******* Detalle de la venta ******");
ventai.forEach(function(item, index) {
  console.log(ventaq[index], item, ventap[index] * ventaq[index]);
});
console.log("\n");
console.log("El valor total de la venta es:  " + valorTotal.toFixed("2"));
