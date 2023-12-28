"use strict";
class Agent {
    constructor(name, codMat, age) {
        this.codMat = codMat;
        this.name = name;
        if (age)
            this.age = age;
    }
    sellItem(item) {
        return this.selled?.push(item);
    }
    getAge() {
        return this.age;
    }
    updateAge(newAge) {
        this.age = newAge;
    }
}
const product1 = {
    productName: "camisa",
    productPrice: 29.99
};
const agentLucas = new Agent('lucas', '123123');
agentLucas.sellItem(product1);
console.log(agentLucas.selled);
const genericaao = ['amor', 2907];
const genericoo = { nome: 'lucas', 'andar': 2 }; //tipado da forma que eu decidi 
//defini a segunda posicao do vetor como sendo algo opcional
const variableWithTuplaGeneric = [];
variableWithTuplaGeneric.push(true); //tipo que é aceito na segunda posicao
//variableWithTuplaGeneric[1] = true//erro de compilacao apenas ao tentar forcar fazer a entrada do valor desta forma
variableWithTuplaGeneric[1] = 2; //accepts numbers only
console.log(variableWithTuplaGeneric);
/**
 * i have to learn more about more forms to work with class in ts, oop
 */ 
