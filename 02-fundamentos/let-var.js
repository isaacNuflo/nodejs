let nombre = 'Wolverine';

if (true) { //nuevo scope -> otro let
    nombre = 'Magneto';
}
//let no inicializa otra vez
//Var chanca
console.log(nombre);

for (let index = 0; index <= 5; index++) { //otro scope
    console.log(`index: ${index}`);
}