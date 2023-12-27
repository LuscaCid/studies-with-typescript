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
