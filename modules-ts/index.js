"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importDefault(require("./greet"));
console.log((0, greet_1.default)());
//ja inicializei com nodemon, para testar a aplicacao
const tudo = __importStar(require("./variable"));
//acima o import alias para mudar o nome do que vem, vai que vem um nome semelhante a de alguma variavel ja existente aq
console.log(tudo.varA);
//posso importar tudo, mas preciso dar um alias para inserir dentro de um objeto de clarado
//importante lembrar que ha uma forma de importar todos os dados de um arquivo com apenas um '*'
tudo.functione("meu amoor era verdadeiro, o teu era pirata"); //literalmente funciona como um objeto
class ClassWithExportedInterface {
    constructor(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
}
const newWoman = new ClassWithExportedInterface("maria", 23, true);
console.log(newWoman);
const objetoLiteral = {
    name: "akdsas",
    age: 23,
    isMarried: false
};
console.log(objetoLiteral);
let variii = 2; //eu preciso dar valor antes de verificar o tipo, independentemente se ja foi declarada
console.log(typeof variii);
const ArrayDeStringsENumeros = [123, "cccssdd"];
console.log(ArrayDeStringsENumeros);
const arrayWithTupla = ["posicao da string", 3, {
        numberStringArray() {
            return ['', 23];
        }
    }];
const valueArray = arrayWithTupla[2];
console.log(valueArray.numberStringArray());
console.log(arrayWithTupla[2].numberStringArray()[1]);
//finshed, o proximo assunto eh decorators, o professor disse q é o assunto mais dificil do typescript
