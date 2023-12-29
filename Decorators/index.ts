//exemplo de decorator

function myDecorator(){
    console.log('iniciando o decorator')
    return function(target : any, propertyKey : string, descriptor : PropertyDescriptor ){
        console.log('executando decorator')
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class myClasses{
    testing(){
        return console.log('terminando execucao do metodo')
    }
    @myDecorator()
    anotherMethodToRunThisDecorator(){
        return console.log('outra fonte de execucao para rodar o decorator')
    }
}

const newObjects = new myClasses()
//newObjects.testing()

/**
 * consigo tirar o target, a propertyKey- chave da propriedade
 *  descriptor que recebe o tipo PropertyDescriptor
 */
//multiple decorators and rules to run them

//sao executados de baixo pra cima
class MultipleDecorators {
    @decorator1()//terceiro
    @decorator2()//segundo
    @decorator3()//primeiro
    testingFunction() : void{
        return console.log('fim da execucao')
    }
}

function decorator1(){
    console.log('executou o primeiro')
    return (
        a : any,
        b : string,
        c : PropertyDescriptor
    ) => {
        console.log(a)
        console.log(b)
        console.log(c)
        return console.log('executando decorator1')
    }
}

function decorator2(){
    console.log('executou o segundo')
    return (
        a : any,
        b : string,
        c : PropertyDescriptor
    ) => {
        return console.log('executando decorator2')
    }
}
function decorator3(){
    console.log('executou o terceiro')
    return (
        a : any,
        b : string,
        c : PropertyDescriptor
    ) => {
        return console.log('executando decorator3')
    }
}
const multipleDecorators = new MultipleDecorators()
multipleDecorators.testingFunction()
/**
 * target : any
 * propertyKey : string // retorna qual é a funcao atralad
 * descriptor : PropertyDescriptor // tipo especial
 */
//os argumentos da funcao de retorno de um decorator

function ShowDecorator(constructor : Function){
    console.log(constructor)
    if(constructor.name === 'DefaultClass')console.log('acertou, miseravi')
    console.log(constructor.name)
}
//posso usar um decorator para atrelar a uma classe

@ShowDecorator
class DefaultClass{
    public name! : string
    constructor(name : string){
        this.name = name
    }

    metodo (name : string) : void{
        return console.log('metodo')
    }
}   
//decorator de metodo --> methods decorators

function enumerable(value : boolean) {
    return (
        target : any,
        propertyKey : string,
        descriptor : PropertyDescriptor
    ) => {
        descriptor.enumerable = value//o que é listado na classe
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}
@ShowDecorator
class Machine {
    
    name : string

    constructor(name :string) {
        this.name = name
    }
    @enumerable(true)// a depender do que é passado, é listado
    showName(): string{
        return `o nome desta maquina é ${this.name}`
    }
    @enumerable(false) //so funciona para funcoes literais
    onlyGreet () {
        return console.log('void por inferencia')
    }
}
const machine1 : Machine =  new Machine('trator')

console.log(machine1.showName())

machine1.onlyGreet()

/** property decorator */

function sayIsPrim(){
    return (target : object, propertyKey : string) => {
        let value : number; //se for primo, ele vira 0
        //value é a variabel que é trabalhada e eh oq o setter modifica no final
        //no caso ela eh o que o propertyKey verdadeiramente aponta
        const getter = () => {
            return value
        }
        const setter = (someValue: number) => { //pega o valor do item
            let counter : number = someValue
            function isPrim() : boolean{
                let ver : number = 0
                let flagIsPrim : boolean;
                while(counter >= 0){
                    if(someValue % counter == 0)ver++
                    counter--;
                }
                if(ver ==2)return flagIsPrim = true
                else return flagIsPrim = false
            }
            value = isPrim() ? someValue = 0 : someValue = someValue
           
        }
        Object.defineProperty(target, propertyKey, {
            //definicao das novas properties ou modificacoes
            get : getter,
            set : setter
        } )
    }
}

function formatNumber() {
    return function(target : object, propertyKey : string){
        let value : string;
        const getter = () => {
            return value
        }
        const setter = (newValue : string) => {
            value = newValue.padStart(5, "0")//add 5 positions of 0
        
        }
        Object.defineProperty(target, propertyKey,{
            get : getter,
            set : setter //neste setter eu modifico o valor dela
        })//adiciona uma propriedade ou modifica
    }
    //mas eu preciso aplicar a chave da propriedade que estas configuracoes vao entrar, no caso se passa no segundo argumento
}
@ShowDecorator //vai retornar as informacoes acerca da classe
class ID {
    @formatNumber()//se refere no properyKey ao id logo abaixo
    public id : string
    @sayIsPrim()
    public anyNumber : number

    constructor(id : string, anyNumber : number){
        this.id = id
        this.anyNumber = anyNumber
    }
}

const newItem = new ID('1', 11)//target se refere a propria instancia, mais ou menos como o this, entao

console.log(newItem)//output 00001

newItem.anyNumber = 29 // se no caso o valor que entrar for primo, a logica é modificar

/**
 * decorators sao excelentes para modificar valores de propriedades
 * acessando diretamente com o propertyKey do campo presente dentro 
 * da classe e isso é incrivel
 */