"use strict";
//void return, this remember me of lang C with type static
const greeting = (name) => {
    return `olá ${name}, como vai voce?`;
};
const voidFunc = async (func) => {
    const personName = "lucas";
    console.log(func(personName)); //this execute eh print in console
};
voidFunc(greeting); // eu fiz aquele arrodeio todo para poder usar o await para essa funcao assincrona
async function saudar() {
    await voidFunc(greeting); //5 greeting is passed with args for callback at voidFunc
}
class saudacao {
    constructor() {
        this.saudeO(); //and this calls the function bellow // 2
    }
    async saudeO() {
        await saudar(); //to this //3
    }
}
//poderia fazer com uma funcao que é disparada assim que encontrada
const fc = async () => {
    await voidFunc(greeting);
    console.log('chegou nessa funcao que nao precisa ser chamada para ser executada');
};
fc();
const sauc = new saudacao(); //at first this is called // 1
//callback functions at parameter in another function obviously
