"use strict";
const array = [];
//new form to do this
const array2 = [];
//old form where the array its an object
array.push(2);
array.push("23");
console.log(array);
array2.push(2);
array2.push("121");
console.log(array2);
//type guard
const array3 = [];
const emptyArray = [];
console.log(typeof array3, "tipo");
function chooseOfOperation(array, operations) {
    if (operations) {
        let value; // only for atribute to an variable --> 
        switch (operations) {
            case "sum":
                return array.reduce((i, total) => total + i);
            case "minus":
                return value = array.reduce((i, total) => total - i);
            case "multiply":
                return value = array.reduce((i, total) => total * i);
            default:
                return "preencha com uma operacao";
        }
    }
    else {
        return "";
    }
}
const operacaoEscolhida = "sum"; //only values that can be accept to type operations
const arrayValues = [2, 3, 4];
const result = chooseOfOperation(arrayValues, operacaoEscolhida);
console.log(result);
const multiplyOperation = 'multiply';
console.log(chooseOfOperation(arrayValues, multiplyOperation));
//try of tuples
