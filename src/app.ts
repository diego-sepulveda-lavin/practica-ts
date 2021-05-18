// Tipo implicito
let nombre = "Pedro"

// Tipo explicito
let apellido: string = "Perez"

// Tipo Any
let cualquiera: any = 34

// Tipo String
let pais: string = "USA"

// Tipo Numero
let numero: number = 10

// Tipo Booleano
let isActive: boolean = true

// Tipo Null
let vacio: null = null

// Tipo Array de strings
let animales: string[] = ["Perro", "Gato", "Pez"]

// Tipo de Array de booleanos
let booleanos: boolean[] = [true, false]

// Tipo de Array de objetos
let objetos: object[] = [{ nombre: "Peter", apellido: "Pan" }, { nombre: "Peter", apellido: "Pan" }]

// Tipo array de arrays
let arrayDeArrays: number[][] = [[1, 2, 3], [4, 5, 6]]

// Tipo Tupla
let numerosImparesMenoresAcinco: [number, number] = [1, 3]

// Tipo Objeto
let persona: { nombre: string, apellido: string, edad?: number } = { nombre: "Peter", apellido: "Pan" }

// Tipo indefinido
let indefinido: undefined = undefined

// Tipo union
let numeroComoIntOString: number | string = 3

// Funciones

function suma(num1: number, num2: number): number {
    return num1 + num2
}
suma(1, 2)

// Funcion tipo flecha
const multiplicar = (num1: number, num2: number): number | string => {
    let total = num1 * num2
    if (total > 10) {
        return `El resultado de la multiplicacion es ${total}`
    }
    return num1 * num2
}

console.log(multiplicar(2, 2))
console.log(multiplicar(2, 10))

// Funcion que no retorna
const saludar = (): void => {
    console.log("Hola")
}

saludar()

// Tipo constante
const pi = 3.141516

// Tipo literal
let feoOLindo: "feo"|"lindo" = "feo"

// Interface
interface IVehiculo {
    modelo:string
    marca:string
    numeroDeRuedas:number
    estaFuncional: boolean
    estaVendido?: boolean
}

let miAuto: IVehiculo = {
    modelo:"Yaris",
    marca:"Toyota",
    numeroDeRuedas:4,
    estaFuncional: true,
}
