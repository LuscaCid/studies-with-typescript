"use strict";
//object types in typescript, more productivity
//training more with interfaces to make more visible, simple and organized my code
const showAnimal = (animal) => {
    return `
nome : ${animal.name}
idade : ${animal.age}
raça : ${animal.breed}
${animal.isAlive ? "este animal está vivo" : "nao esta mais entre nós"}`;
};
class Animal {
    constructor(name, breed, isAlive, age) {
        this.name = name;
        this.breed = breed;
        this.isAlive = isAlive;
        this.age = age;
    }
}
const macaco = new Animal("golias", "macaco", true, 32);
console.log(showAnimal(macaco));
const kombi = {
    brand: "vw",
    wheels: 4
};
//kombi.wheels = 3 //nao se pode fzr isso pq eh uma propiedade apenas de leitura, nao se pode mudar o valor, apenas adicionar quando se declara pela primeira vez
console.log(kombi);
const truck = {
    brand: "scania",
    wheels: 8
};
let coords = {
    1: 3,
    neighborhood: "IAPI"
};
//coords[3] = "2321" // foi criado um index signature acima e nao se aceitam valores do tipo string nestes que sao numbers
coords[2] = 24; //propiedade do tipo number e valor tbm
coords[1] = 12;
console.log(coords[1]);
coords[24] = "gay"; //propiedade tipo number e valor tipo string
coords.x = "12"; //propiedade do tipo string e valor dela em string
coords.y = "22";
coords.z = "652";
console.log(coords);
const Doggo = {
    name: "amora",
    specie: "canino",
    eats(food) {
        return console.log(`${this.name} eats ${food}`);
    },
    breastfeed(puppyName) {
        return console.log(`${this.name} amamenta o ${puppyName}`);
    }
};
//heranca de interfaces em typescript
Doggo.breastfeed('amora fi');
console.log(Doggo.name);
const person = {
    name: "arnold shuarz",
    type: "submetralhadora",
    caliber: 9,
    arrOfPeopleKilledByHim: []
};
person.arrOfPeopleKilledByHim.push("zezin");
person.arrOfPeopleKilledByHim.push("gutierres");
console.log(person);
//readonly arrays in typescript
let MyArray = ['goiaba', 2, "121", "cana de açucar"];
MyArray = MyArray.map(eachElement => {
    return `elemento ${eachElement} que era do tipo ${typeof eachElement}`;
});
console.log(MyArray);
let stringDeLetras = "a b c d e r k l c t";
const vetorDasLetras = stringDeLetras.split(' ');
console.log(vetorDasLetras);
const time = new Date();
const data = [Number(time.getDate()), String(time.getMonth()), Number(time.getFullYear())];
console.log(data);
console.log(data[0], data[1], data[2]);
const userWithread = {
    name: "lucas"
};
//userWithread.name = "23" nao pode ser alterado, apenas leitura
let ArrayWithReadOnly = [{ name: "lucas" }, { name: "zezinho" }];
console.log(ArrayWithReadOnly);
//ArrayWithReadOnly.push({name : "dasda"})//nao pode ser acrescido, apenas no momento da criacao
ArrayWithReadOnly = ArrayWithReadOnly.map(element => {
    const newObj = {
        name: `${element.name}, nome delo`
    };
    return newObj;
});
console.log(ArrayWithReadOnly);
//estou passando uma tupla para dentro de numbers 
//a clausula readonly define que este array chamado numbers nao pode ser alteraldo em alguma posicao
function showNumbers(numbers) {
    //numbers[1] = 23 X somente leitura
    return console.log(numbers[1], numbers[0]);
}
//showNumbers([0,0,2])//o limite de posicoes aceitas neste vetor é de 2 pos
showNumbers([2, 4]);
//secao para tipar objetos como sao considerados no typescript
//mais um treinamento de como unir interfaces em um type 
