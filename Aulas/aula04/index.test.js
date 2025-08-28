import { soma, sub, div, multi} from "./index.js";

console.log("Teste da função soma()")
if (soma(2, 2) === 4) console.log("Passou no 1º!")
else console.log("Falhou 1º!");

if (soma(-1, 2) === 1) console.log("Passou no 2º!")
else console.log("Falhou no 2º!")

if (soma(2, 0) === 2) console.log("Passou no 3º!")
else console.log("Falhou no 3º!")

// 

console.log("Teste da função subtração()")
if (sub(5, 2) === 3) console.log("Passou no 4º!")
    else console.log("Falhou 4º!");

if (sub(-2, -3) === 1) console.log("Passou no 5º!")
    else console.log("Falhou 5º!");

if (sub(8, 0) === 8) console.log("Passou no 6º!")
    else console.log("Falhou 6º!");

// 

console.log("Teste da função divisão()")
if (div(10, 2) === 5) console.log("Passou no 7º!")
    else console.log("Falhou 7º!");

if (div(90, -3) === -30) console.log("Passou no 8º!")
    else console.log("Falhou 8º!");

if (div(10, 0) === undefined) console.log("Passou no 9º!")
    else console.log("Falhou 9º!");

console.log("Teste da função multiplicação()")
if (multi(1, 2) === 2) console.log("Passou no 10º!")
    else console.log("Falhou 7º!");

if (multi(5, 3) === 15) console.log("Passou no 11º!")
    else console.log("Falhou 8º!");

if (multi(2, 2) === 4) console.log("Passou no 12º!")
    else console.log("Falhou 9º!");