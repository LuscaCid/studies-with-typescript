"use strict";
//secaozinha apenas para revisar criacoes de variaveis tipadas
const numeros = []; //array de numbers
let numeroOuStrings = "lucas?";
numeroOuStrings = 123; //dupla atribuicao, este é o union type
let verdadeirosOuFalsos; //so criei, ou seja, nao tem nd dentro desta variavel
verdadeirosOuFalsos = true;
// ainda tem o literal type
let especificWord = 'word'; //se eu passar valores diferentes do que corresponde a tipagem, vai dar erro pois apenas o valor igual que for passado apos os dois pontos que vai ser ok
console.log(typeof especificWord);
//uma funcao que recebe como parametro um objeto do tipo point que contem x : number, y : number e z :numnber de forma abstrata
const showCoordinates = (obj) => {
    console.log(`x:${obj.x}`);
    console.log(`y:${obj.y}`);
    console.log(`z:${obj.z}`);
};
const pointObject = {
    x: 2,
    y: 4,
    z: 4
};
showCoordinates(pointObject);
const Person = {
    name: "lucas eh top"
};
const personWithNameAndAge = {
    name: "rebece",
    age: 17
};
//type alias nao pode ser modificado com o tempo,
//mas o interface sim 
console.log(Person);
console.log(personWithNameAndAge);
//literal types
//restricao de valores que podem ser recebidos dentro de uma variavel, q doideira
const showDirection = (dir) => (console.log(dir));
//apenas posso passar valores que union type aceita
//non null assertion operator serve para mostrar ao ts que tem sim algo que vai ser preenchido, no caso, os elementos da dom
const h1 = document.querySelector('h1');
console.log(h1?.textContent);
//ele autocompleta como se dissesse que este valor pode ser null pq o ts nao consegue identificar os elementos da dom  
//concept about bigint
const num = 100n;
const numToString = String(num);
const numFloat = parseFloat(numToString);
console.log(numFloat);
//symbol cria uma referencia unica
const symbolA = Symbol.for("a symbol to symbolA");
const symbolB = Symbol("asda");
//a descricao independe, a cada chamada da funcao, a variavel vai possuir um identificador unico
//para dentro de um symbol consigo atribuir uma descricao
console.log(symbolA.description);
console.log(symbolA === symbolB); //nunca serao iguais pois sao unicos
const pessoa = { name: "lucas" };
const ArrayCreated = [];
const object = {
    name: "lucas",
    password: "12312312312q",
    age: 32,
    newColum: 'sda'
};
ArrayCreated.push(object);
ArrayCreated.push(object);
ArrayCreated.push(object);
ArrayCreated.push(object);
const newFormToCreateAnArray = [2, 3, 4, 5];
console.log(newFormToCreateAnArray);
console.log(ArrayCreated);
const newObjectWithNewColumn = {
    name: "luquetinha",
    password: "luqu",
    newColum: "coluninh"
};
//na interface ta dizendo basicamente que :
//a variavel que implements esta interface vai possuir uma funcao que recebe dois parametros do tipo number e o retorno também é do tipo number --> sdds de C que era int...
console.log(newObjectWithNewColumn);
class ContainsMaterialsToDo {
    constructor(name) {
        this.name = name;
    }
}
class ClasseComInterface {
    funcao(a) {
        let count = a;
        let ver = 0;
        while (count >= 0) {
            if (a % count == 0)
                ver++;
            count--;
        }
        if (ver == 2)
            return true;
        else
            return false;
    }
}
const tryToSeeAnPrimNumber = new ClasseComInterface();
const isPrim = tryToSeeAnPrimNumber.funcao(7);
isPrim ? console.log('é primo') : console.log('nao eh');
