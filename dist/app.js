"use strict";
let nombre = "Pedro";
let apellido = "Perez";
let cualquiera = 34;
let pais = "USA";
let numero = 10;
let isActive = true;
let vacio = null;
let animales = ["Perro", "Gato", "Pez"];
let booleanos = [true, false];
let objetos = [{ nombre: "Peter", apellido: "Pan" }, { nombre: "Peter", apellido: "Pan" }];
let arrayDeArrays = [[1, 2, 3], [4, 5, 6]];
let numerosImparesMenoresAcinco = [1, 2, false];
let persona = { nombre: "Peter", apellido: "Pan" };
let indefinido = undefined;
let numeroComoIntOString = 3;
function suma(num1, num2) {
    return num1 + num2;
}
suma(1, 2);
const multiplicar = (num1, num2) => {
    let total = num1 * num2;
    if (total > 10) {
        return `El resultado de la multiplicacion es ${total}`;
    }
    return num1 * num2;
};
console.log(multiplicar(2, 2));
console.log(multiplicar(2, 10));
const saludar = () => {
    console.log("Hola");
};
saludar();
const pi = 3.141516;
let feoOLindo = "feo";
let miAuto = {
    modelo: "Yaris",
    marca: "Toyota",
    numeroDeRuedas: 4,
    estaFuncional: true,
};
