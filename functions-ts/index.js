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
//revisao com generics para aquecer
function showData(args) {
    return `os dados papa. ${args}`;
}
console.log(showData(5));
console.log(showData("lucassss"));
console.log(showData("luquetinha"));
//generics with less types inside of variable
function onlyNumOrarr(argumentos) {
    if (Array.isArray(argumentos)) {
        return argumentos.filter((element) => element === "amor");
    }
    else {
        return typeof argumentos;
    }
}
console.log(onlyNumOrarr(['adsdas', 'amor'])); //apenas retorna pra mim se for igual a amor, o conteudo e o tipo
console.log(onlyNumOrarr(5)); // retornou o tipo em string
function showProductGeneric(objecto) {
    return `o nome do objeto é ${objecto.name}`;
}
console.log(showProductGeneric({ name: "carrinho de mao" }));
function showPersonFeelings(person) {
    return console.log(`nome : ${person.name}; sentindo agora: ${person.sentimento} e esta viva? ${person.isAliveNow ? "sim" : "nao"}`);
}
const pessoa12 = {
    name: "luquetildes",
    sentimento: "feliz",
    isAliveNow: true
};
showPersonFeelings(pessoa12);
const carro = {
    name: "volks",
    wheels: 'traçada, filho',
    engine: "motor v8"
};
const ind = {
    assinatura: "a de amor", //nao defini uma propiedade com o nome de x, mas o index signature definiu
    propert: 12
};
//se eu disse que o conteudo é em string, ele n pode receber outra coisa que nao seja string
console.log(ind);
const caneta = {
    name: "caneta azul, azul caneta",
    wheels: false,
    engine: false,
    color: "blue"
};
const Motorcycle = {
    name: "motinho",
    wheels: 2,
    engine: 2.4,
    color: "black"
};
const Giraffe = {
    name: 'girafinha',
    size: 5.5,
    species: "girafa specie",
    material: false,
    utility: false
};
const myPen = {
    name: "caneta bic",
    size: .05,
    species: false,
    material: "some plastic",
    utility: "write on writeable superficies"
};
const printObjInfo = (objectooos) => {
    return `
    ${objectooos.material ? "objeto:" : "animal:"}   
    nome : ${objectooos.name}
    tamanho : ${objectooos.size}
    ${objectooos.material ? `Material do objeto:` + objectooos.material : ''}
    ${objectooos.utility ? `utilidade do objeto:` + objectooos.utility : ''}
    `;
};
console.log(printObjInfo(Giraffe));
console.log(printObjInfo(myPen));
//keyof pode recuperar o valor de uma propriedade dentro de um objeto a partir do seu nome
//mais conhecido tbm por chave, a chave pq somente ela pode ter esse nome dentro do objeto
const server = {
    hd: "2TB",
    ram: "32GB"
};
//limitei o acesso de k, dizendo que os unicos valores dele podem ser as propiedades de t
function primKeyOfServer(objeto, key) {
    return `o valor da propiedade é : ${objeto[key]} `;
}
/**
 * determinei que o parametro key é um symbol que advem de uma chave presente em T
 * que neste caso se refere ao objeto T
 * quando eu falo que "K extends keyof T" para o typescript, K se trata de um symbol
 * onde ele vai possuir as possibilidades de ter os nomes presentes dentro das propiedades
 * do objeto em questao, chave de...
*/
console.log(primKeyOfServer(server, 'ram'));
//console.log(server["ras"])//at this casem, "ram" is the property present inside of server
console.log(primKeyOfServer(server, 'hd'));
const sim = Symbol("lcCid");
const personagem1 = {
    name: "lucas",
    age: 20,
    hasLicense: true
};
function showDataFromAKey(personage, key) {
    return `o dado encontrado pela passagem da chave é ${personage[key]}`;
}
console.log(showDataFromAKey(personagem1, 'name'));
class TrainingWithKeyOfTypeParameters {
}
function showDataFromAKeyByGenerics(objec, key) {
    return `name do person : ${objec[key]}`;
}
const campo = 'name';
console.log(showDataFromAKeyByGenerics(personagem1, campo)); //pelo parametro eu decido qual campo sera lido
const use = ['asd', 123]; //use atriubuiu ao tipagem o string pq é uma unica variavel
const use2 = [];
console.log(typeof use);
console.log(typeof use2);
const myTruck = {
    description: "caminhao para cargas leves",
    wheels: 4
};
const wheelstruck = 40;
console.log(typeof wheelstruck);
//criei um tipo chamado TruckWheels que recebe o tipo que advem da propriedade wheels que ta dentro do tipo truck
console.log(typeof wheelstruck === 'number'); // true
/**
 * como B extende de A, ele tambem vai possuir acesso ao metodo presente em A
 * logo, é viavel dizer que ele possui este metodo, logo, o resultado da expressao acima
 * é igual a true
 */
// caso onde o resultado do ternario retorna false
const ternB = {
    bProperty: "a nao extende de b, logo é do tipo b",
    showNumbers() {
        return '12313';
    }
};
const ternA = {
    showNumbers() {
        return `213`;
    }
    //bProperty : "" //nao existe no tipo A, ou dentro da interface A, quando tipamos como sendo A
};
console.log(ternB.bProperty);
const litero = 'literal';
console.log(typeof litero === 'string');
const constantObjectWithType = 'literal'; //objecto with 
const uniaoOfTypes = `tipoA tipoB`;
