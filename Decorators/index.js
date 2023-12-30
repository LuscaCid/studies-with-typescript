"use strict";
//exemplo de decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log('iniciando o decorator');
    return function (target, propertyKey, descriptor) {
        console.log('executando decorator');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClasses {
    testing() {
        return console.log('terminando execucao do metodo');
    }
    anotherMethodToRunThisDecorator() {
        return console.log('outra fonte de execucao para rodar o decorator');
    }
}
__decorate([
    myDecorator()
], myClasses.prototype, "anotherMethodToRunThisDecorator", null);
const newObjects = new myClasses();
//newObjects.testing()
/**
 * consigo tirar o target, a propertyKey- chave da propriedade
 *  descriptor que recebe o tipo PropertyDescriptor
 */
//multiple decorators and rules to run them
//sao executados de baixo pra cima
class MultipleDecorators {
    testingFunction() {
        return console.log('fim da execucao');
    }
}
__decorate([
    decorator1() //terceiro
    ,
    decorator2() //segundo
    ,
    decorator3() //primeiro
], MultipleDecorators.prototype, "testingFunction", null);
function decorator1() {
    console.log('executou o primeiro');
    return (a, b, c) => {
        console.log(a);
        console.log(b);
        console.log(c);
        return console.log('executando decorator1');
    };
}
function decorator2() {
    console.log('executou o segundo');
    return (a, b, c) => {
        return console.log('executando decorator2');
    };
}
function decorator3() {
    console.log('executou o terceiro');
    return (a, b, c) => {
        return console.log('executando decorator3');
    };
}
const multipleDecorators = new MultipleDecorators();
multipleDecorators.testingFunction();
/**
 * target : any
 * propertyKey : string // retorna qual é a funcao atralad
 * descriptor : PropertyDescriptor // tipo especial
 */
//os argumentos da funcao de retorno de um decorator
function ShowDecorator(constructor) {
    console.log(constructor);
    if (constructor.name === 'DefaultClass')
        console.log('acertou, miseravi');
    console.log(constructor.name);
}
//posso usar um decorator para atrelar a uma classe
let DefaultClass = class DefaultClass {
    constructor(name) {
        this.name = name;
    }
    metodo(name) {
        return console.log('metodo');
    }
};
DefaultClass = __decorate([
    ShowDecorator
], DefaultClass);
//decorator de metodo --> methods decorators
function enumerable(value) {
    return (target, propertyKey, descriptor) => {
        descriptor.enumerable = value; //o que é listado na classe
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
let Machine = class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `o nome desta maquina é ${this.name}`;
    }
    onlyGreet() {
        return console.log('void por inferencia');
    }
};
__decorate([
    enumerable(true) // a depender do que é passado, é listado
], Machine.prototype, "showName", null);
__decorate([
    enumerable(false) //so funciona para funcoes literais
], Machine.prototype, "onlyGreet", null);
Machine = __decorate([
    ShowDecorator
], Machine);
const machine1 = new Machine('trator');
console.log(machine1.showName());
machine1.onlyGreet();
/** property decorator */
function sayIsPrim() {
    return (target, propertyKey) => {
        let value; //se for primo, ele vira 0
        //value é a variabel que é trabalhada e eh oq o setter modifica no final
        //no caso ela eh o que o propertyKey verdadeiramente aponta
        const getter = () => {
            return value;
        };
        const setter = (someValue) => {
            let counter = someValue;
            function isPrim() {
                let ver = 0;
                let flagIsPrim;
                while (counter >= 0) {
                    if (someValue % counter == 0)
                        ver++;
                    counter--;
                }
                if (ver == 2)
                    return flagIsPrim = true;
                else
                    return flagIsPrim = false;
            }
            value = isPrim() ? someValue = 0 : someValue = someValue;
        };
        Object.defineProperty(target, propertyKey, {
            //definicao das novas properties ou modificacoes
            get: getter,
            set: setter
        });
    };
}
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = () => {
            return value;
        };
        const setter = (newValue) => {
            value = newValue.padStart(5, "0"); //add 5 positions of 0
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter //neste setter eu modifico o valor dela
        }); //adiciona uma propriedade ou modifica
    };
    //mas eu preciso aplicar a chave da propriedade que estas configuracoes vao entrar, no caso se passa no segundo argumento
}
let ID = class ID {
    constructor(id, anyNumber) {
        this.id = id;
        this.anyNumber = anyNumber;
    }
};
__decorate([
    formatNumber() //se refere no properyKey ao id logo abaixo
], ID.prototype, "id", void 0);
__decorate([
    sayIsPrim()
], ID.prototype, "anyNumber", void 0);
ID = __decorate([
    ShowDecorator //vai retornar as informacoes acerca da classe
], ID);
const newItem = new ID('1', 11); //target se refere a propria instancia, mais ou menos como o this, entao
console.log(newItem); //output 00001
newItem.anyNumber = 29; // se no caso o valor que entrar for primo, a logica é modificar
/**
 * decorators sao excelentes para modificar valores de propriedades
 * acessando diretamente com o propertyKey do campo presente dentro
 * da classe e isso é incrivel
 */
//method decorator. exemplo real
function catchArgs() {
    return function (target, key, descriptor) {
        //console.log(descriptor.value, 'descriptor.value')
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (typeof args[0] === 'string' || typeof args[0] === 'number') {
                return childFunction.apply(this, args);
            }
            else {
                return null; // e nao executa a proxima funcao que no caso
                //seria o proprio metodo chamado
            }
        };
        return descriptor;
    };
}
function checkIsPosted() {
    return (target, key, descriptor) => {
        const childFunction = descriptor.value;
        //o valor presente nele é a funcao que é referenciada
        descriptor.value = function (...args) {
            console.log(args[0]);
            console.log(args[1]);
            if (args[1]) {
                console.log('user ja postou');
                return null;
            }
            else {
                return childFunction.call(this, args);
            }
        };
        return descriptor;
    };
}
class Postagem {
    constructor() {
        this.alreadyPosted = false;
    }
    onlyCheckArgs(nome) {
        console.log('rodando normal ' + nome);
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`post do usuario: ${content}`);
    }
}
__decorate([
    catchArgs()
], Postagem.prototype, "onlyCheckArgs", null);
__decorate([
    checkIsPosted()
], Postagem.prototype, "post", null);
const user = new Postagem();
user.onlyCheckArgs('luccas posicao 0');
//example property decorator, interceptar propriedades e nao metodo
function maxChar(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = () => {
            return value + ' ' + 'o getter está trabalhando';
        };
        const setter = (newValue) => {
            console.log(newValue);
            if (newValue.length > limit) {
                console.log('o valor deve ter no maximo ', limit, 'digitos');
                return null;
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    maxChar(3)
], Admin.prototype, "username", void 0);
const murilo = new Admin('mlo');
console.log(murilo.username);
