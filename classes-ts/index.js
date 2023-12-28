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
    set setArrCars(car) {
        this.arrCars.push(car);
    }
    get getArrCars() {
        return this.arrCars;
    }
}
const pessoinha = new Fucker("loque", true);
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
//ao usar os set e get paramos de manipular como uma funcao e aparentemente passa a ser como uma propriedade, wtf
/**
 * onde eles recebem os valores que sao passados para a logica, mas nao diretamente à propriedade, antes passa por
 * uma logica de setter
 *
 */ 
