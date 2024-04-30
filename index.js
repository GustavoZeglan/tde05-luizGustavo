const calculate = require("./calculate");
const { createRandomUser } = require("./people")

console.log("Soma:", calculate.sum(2,4));
console.log("Subtração:",calculate.subtraction(8,6));
console.log("Multiplicação:",calculate.multiplication(2,8));
console.log("Divisão:",calculate.division(10,2));
console.log(createRandomUser())