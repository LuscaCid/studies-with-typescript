"use strict";
class Cidadao {
}
const newUser = new Cidadao();
newUser.name = "lucas cid";
newUser.age = 20;
console.log(newUser);
class Calo {
    constructor(name, qtdWheels) {
        this.name = name;
        this.qtdWheels = qtdWheels;
    }
}
class Fucker {
    constructor(name, isAlive) {
        this.name = name;
        this.isAlive = isAlive;
        this.arrCars = [];
    }
    setName(name) {
        this.name = name;
        return console.log(this.name);
    }
    setIsAlive(isAlive) {
        if (typeof isAlive === 'boolean') {
            this.isAlive = isAlive;
            return `alterated`;
        }
        else
            return `only pass booleans right now!`;
    }
    get testeCaloReturns() {
        return this.testeCalo;
    }
    set setArrCars(car) {
        this.arrCars.push(car);
    }
    get getArrCars() {
        return this.arrCars;
    }
}
const pessoinha = new Fucker("loque", true);
const tipoAdvindoDaPropriedadeName = 'dsa';
console.log(typeof tipoAdvindoDaPropriedadeName === typeof pessoinha['name']);
console.log(pessoinha);
pessoinha.setName('luquitos');
console.log(pessoinha);
const carToPush = {
    name: "fusca herbie",
    qtdWheels: 4
};
pessoinha.setArrCars = carToPush;
pessoinha.setArrCars = { name: "ferrari", qtdWheels: 4 };
console.log(pessoinha.getArrCars);
//getters and setters to an class with typescrip
const arrOfPeople = [];
arrOfPeople.push(pessoinha);
arrOfPeople.push(pessoinha);
arrOfPeople.pop();
console.log(arrOfPeople); //at this way i can see the array of cars inside each object
class Animaiszinhos {
}
class Doggos extends Animaiszinhos {
    makeSounds(sound) {
        return `o cachorro faz ${sound}`;
    }
}
const traininTupla = [2, 'frase aqui, string', { name: "tupla", qtdWheels: 4 }];
function returnsTupla() {
    return [2, '232', { name: 'string', qtdWheels: 3 }];
}
const retornodatupla = returnsTupla();
console.log(retornodatupla);
class Father {
    constructor(name, height) {
        this.name = name;
        this.height = height;
        this.sons = [];
    }
    sayIm(content) {
        return `i, ${this.name} am your father!`;
    }
    set setSons(newSon) {
        this.sons.push(newSon);
    }
    get getSons() {
        return this.sons;
    }
    get getName() {
        return this.name;
    }
}
class Children extends Father {
    constructor(name, height, teethDown) {
        super(name, height);
        this.actualCountOfTeethDownned = teethDown;
    }
    get returnDownTeeth() {
        return this.actualCountOfTeethDownned;
    }
    sayIm(content) {
        let message;
        if (content) {
            return message = `Daddy, i, ${this.getName}, am your son. Addcitional message ${content}`;
        }
        else
            return `Daddy, i, ${this.getName}, am your son.`;
    }
}
const filho = new Children('pedrinho', 1.10, 0);
console.log(filho);
const phrase = ' a   a   sdasd  asdas a as';
const phraseWithOutSpaces = phrase.trim();
console.log(phrase);
console.log(phraseWithOutSpaces);
