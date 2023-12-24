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
const usuario = {
    name: "lucas",
    email: "lucas1@gmail.com",
    username: "lucasflcid",
    password: "123"
};
function primaryFunc(cb) {
    //simulacao de uma funcao assincrona
    //
    //const response = await knex('users')
    //.where({email : usuario.email })
    //é como se minha funcao resgatasse esse usuario do banco
    const usuario = {
        name: "lucas",
        email: "lucas1@gmail.com",
        username: "lucasflcid",
        password: "123"
    };
    return cb(usuario);
}
const callback = (user) => {
    const infoUser = `nome : ${user.name}, email : ${user.email}, username : ${user.username}`;
    return JSON.stringify(infoUser);
};
const usuarioRecebido = primaryFunc(callback);
console.log(usuarioRecebido);
//passa-se apenas o nome da funcao sem os parenteses pq eu quero passar a funcao como um todo e nao apenas o resultado que ela dá
/**
 * isso faz muito sentido pq eu quero ter sendo executado oq tem dentro dela
 */
//generic functions --> oloko, assunto importantissimo
class oq {
    constructor(nameCarro) {
        this.carro = nameCarro;
    }
    getCarro() {
        return this.carro;
    }
    getgetCarro() {
        return this.getCarro();
    }
}
const oq2 = new oq('sandero');
console.log(oq2.getgetCarro()); //getters and setters do java, mds que nostalgia
//generics functions now
function generic(arg) {
    return arg;
}
//é bom conseguir restringir os tipos de dados que podem ser aceitos pela generic function, por isso no primeiro <> posso passar que ele extende dos tipos que eu quero q ele aceite no maximo
console.log(generic(12));
function mergeObjects(object1, object2) {
    return {
        ...object1,
        ...object2
    };
}
const object1 = {
    name: "lucas",
    age: 30
};
const object2 = {
    age: 20,
    name: "lucas",
    job: "developer",
    dizerQueFoiTrabalhar() {
        return `eu sou um ${this.job} e vou trabalhar`;
    }
};
console.log(mergeObjects(object1, object2)); //nesta funcao eu nao deixo explicito na chamada dela quais serao os tipos a serem enviados para a mergeObjects
//a entrada do object1 no primeiro parametro disse pro meu typescript que a primeira posicao so vai aceitar objetos como o que foi enviado, ou seja, igual
function mergeArrays(arr1, arr2) {
    const arrayConcated = [...arr1, ...arr2];
    return arrayConcated;
}
console.log(mergeArrays([1, 23, 4], ["23", "2312312"]));
const createdGenericFunction = (argument) => {
    return argument;
};
//no caso da funcao acima eu estou dizendo que eu posso aceitar apenas string ou number para o parametro e o tipo que for enviado ao parametro que vai dizer o tipo de retorno da minha funcao, ou seja, serao iguais se caso eu passar dessa forma
//entrega de valor default
function somaDefault(parametro1, parametro2 = 1) {
    return parametro1 + parametro2;
}
console.log(somaDefault(3, 12));
//se caso nao for passado um valor, ele vai aceitar o padrao estipulado no segundo paramtro --> 1
//tipo unknow, desconhecido e para ser utilizado, é necessario fazer validacao de dados, narrowing
function unknownType(x) {
    if (Array.isArray(x))
        return console.log(x[1]);
    else if (typeof x === 'string')
        return console.log('é string');
    // return console.log(x[1])//precisa ser validado
}
unknownType([2, 3, 4]);
unknownType('sdasd');
//simplesmente o never é quando a funcao nao retorna nunca, n eh que ela nao retorne nada, é que ela de fato nunca vai retornar ent basicamente é em caso de throw de erro, lancamentos e loops infinitos que realmente nao retornam da funcao
const throwError = (error) => {
    throw new CustomError(error.message, error.statusCode);
};
const internalServerError = {
    message: "internal Server Error",
    statusCode: 500
};
const someAppError = {
    message: "e-mail em uso",
    statusCode: 401 //unathorized
};
//throwError(someAppError)
//throwError(internalServerError)//essa nunca vai ser executada pq a de cima nao retorna nunca. meu deus
class CustomError {
    constructor(message, statusCode = 401) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
// throwError(internalServerError) throwing error when i wanted
//rest parameters
function multiplyAll(...nValues) {
    return nValues.reduce((sum, total) => sum * total);
}
//este operador pegar os parametros que eu passar e os transforma em uma lista de numbers
console.log(multiplyAll(2, 3, 4, 5, 2, 1, 2, 3));
function genericsWithRestOperator(...n) {
    const onlyNumbers = n.filter(element => {
        if (typeof element === 'number') {
            return element;
        }
    });
    return onlyNumbers;
}
console.log(genericsWithRestOperator("123", 23, 2, 3, 4, "121212"));
//destructuring with params at functions
function showProduct({ name, price }) {
    return `o nome do produto é ${name} e o preço dele é ${price}`;
}
function showProductWithTypeAlias({ name, price, size }) {
    return `o nome do produto é: ${name}
            custa : R$${price}
            e o tamanho é ${size}
    `;
}
const shirt = {
    name: "gola polo",
    price: 222.99,
    size: 'm'
};
console.log(showProductWithTypeAlias(shirt));
