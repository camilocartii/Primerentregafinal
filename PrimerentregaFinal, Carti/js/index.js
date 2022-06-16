class producto {
    constructor (nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
    mostrarProdcuto(){}
}

const producto1 = new producto ( "zapatillas Nike", 5000);
console.log (producto1)
const producto2 = new producto ( "Remera Nike" , 2500)
console.log (producto2)
const producto3 = new producto ("Pantalon Nike", 3000);
console.log (producto3)


class Detallepedido {
    constructor (producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    calcularSubtotal(){
        let subtotal = this.producto.precio * this.cantidad;
        return subtotal;
    }
    mostrarDetalle(){}
   
}

const Detallepedido1 = new Detallepedido(producto1, 1);

const Detallepedido2 = new Detallepedido(producto2, 2);

const Detallepedido3 = new Detallepedido(producto3, 3);

console.log (Detallepedido1.calcularSubtotal())
console.log (Detallepedido2.calcularSubtotal())
console.log (Detallepedido3.calcularSubtotal())

class pedido {
    constructor (fecha, detalles){
        this.fecha = fecha;
        this.detalles = detalles;
    }
    calcularTotal(){
        let total = 0;
        for(const dp of this.detalles){
            console.log(dp.producto)
          total = total + dp.calcularSubtotal();
        }
        return total;
    }
    mostrarPedido(){}
}

const array = [];

array.push(Detallepedido1);

array.push(Detallepedido2);

array.push(Detallepedido3);

console.log(array);


const pedido1 = new pedido (new Date(),array);

console.log(pedido1.calcularTotal())
