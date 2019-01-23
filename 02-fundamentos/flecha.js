// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

let saludar = (nombre) => `Hola ${nombre}`;

// console.log(sumar(10, 20));
console.log(saludar('Isaac'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());