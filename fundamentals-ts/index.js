"use strict";
//fundamentals of variables with types
const numero = 2; //type number
const booleano = true; //type bool, true or false
const palavra = "paralabrinhas de cristal papai 2"; //type number
const undefinede = undefined; //type undefined
let doisTipos = "lucas"; // ou numneros
doisTipos = 232; //union types for variables with typescript
const vetor = []; // form to declare an array with interface form
const vetorSimples = [];
//union types com arrays
const vetorUnionTypes = [true, "lucas", "false", false];
//completely alright with sintax
const vetorInterfaceUnionTypes = ['vetorzin', 234.5];
//form to make an float with an string
const numberInString = "21242.42";
const valueParsed = parseFloat(numberInString);
console.log(valueParsed);
console.log(typeof valueParsed); //number type
const variableTypeAlias = {
    numero: 22
};
const functionWithParametersTyped = (object) => {
    return 2;
};
