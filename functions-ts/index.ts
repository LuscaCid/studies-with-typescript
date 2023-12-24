//void return, this remember me of lang C with type static

const greeting = (name : string) : string => {//this function create the sentence
    return `olá ${name}, como vai voce?`
}

const voidFunc = async (func : (name : string)=> string) : Promise<void> => {//this callback argument receive the greeting function, para fazer isso ela precisa ter os mesmos parametros e o mesmo tipo de retorno
    const personName : string = "lucas"
    console.log(func(personName))//this execute eh print in console
}

voidFunc(greeting) // eu fiz aquele arrodeio todo para poder usar o await para essa funcao assincrona
async function saudar() : Promise<void>{ //4
    await voidFunc(greeting) //5 greeting is passed with args for callback at voidFunc
}
class saudacao{
    constructor(){//with this after instance
        this.saudeO()//and this calls the function bellow // 2
    }
    async saudeO(){
        await saudar()//to this //3
    }
}

//poderia fazer com uma funcao que é disparada assim que encontrada

const fc = async():Promise<void> => {
    await voidFunc(greeting)
    console.log('chegou nessa funcao que nao precisa ser chamada para ser executada')
}
fc()
const sauc : saudacao = new saudacao()//at first this is called // 1
//callback functions at parameter in another function obviously

//one more situation with callback use in ts

interface User {
    name : string
    email : string
    username : string
    password : string
}
const usuario : User = {
    name : "lucas",
    email : "lucas1@gmail.com",
    username : "lucasflcid",
    password : "123"
}
function primaryFunc(cb : (user : User) =>string ){
    //simulacao de uma funcao assincrona
    //
    //const response = await knex('users')
    //.where({email : usuario.email })
    //é como se minha funcao resgatasse esse usuario do banco
    const usuario : User = {
        name : "lucas",
        email : "lucas1@gmail.com",
        username : "lucasflcid",
        password : "123"
    }
    return cb(usuario)
}

const callback = (user : User) : string=> {

    const infoUser : string = `nome : ${user.name}, email : ${user.email}, username : ${user.username}`
    return JSON.stringify(infoUser)
    
}
const usuarioRecebido = primaryFunc(callback) 
console.log(usuarioRecebido)

//passa-se apenas o nome da funcao sem os parenteses pq eu quero passar a funcao como um todo e nao apenas o resultado que ela dá
/**
 * isso faz muito sentido pq eu quero ter sendo executado oq tem dentro dela
 */

//generic functions --> oloko, assunto importantissimo

class oq {
    private carro : string
    
    constructor(nameCarro : string){
        this.carro = nameCarro
    }
    private getCarro(){
        return this.carro
    }
    public getgetCarro(){
        return this.getCarro()
    }
}
const oq2 : oq = new oq('sandero')
console.log(oq2.getgetCarro())//getters and setters do java, mds que nostalgia


//generics functions now

function generic<T extends string  | number>(arg : T) : T{//é uma funcao que pode ser reutilizad para diversos tipos de dados, ela é flexivel
    return arg
}


//é bom conseguir restringir os tipos de dados que podem ser aceitos pela generic function, por isso no primeiro <> posso passar que ele extende dos tipos que eu quero q ele aceite no maximo
console.log(generic(12))

function mergeObjects<t>(object1 : t, object2 : t) : t{
    return {
        ...object1,
        ...object2
    }
}

interface ObjectsInfo {//o usuario pode ser desempregado
    name : string
    job? : string
    age : number

    dizerQueFoiTrabalhar?() : string
}

const object1 : ObjectsInfo = {
    name : "lucas",
    age : 30
}
const object2 : ObjectsInfo= {
    age : 20,
    name : "lucas",
    job : "developer",
    dizerQueFoiTrabalhar() : string{
        return `eu sou um ${this.job} e vou trabalhar`
    }
}

console.log(mergeObjects(object1, object2))//nesta funcao eu nao deixo explicito na chamada dela quais serao os tipos a serem enviados para a mergeObjects

//a entrada do object1 no primeiro parametro disse pro meu typescript que a primeira posicao so vai aceitar objetos como o que foi enviado, ou seja, igual

function mergeArrays<T, U >(arr1 : T[], arr2 : U[]){
    type TU  = T | U
    const arrayConcated : TU[]= [...arr1, ...arr2]

    return arrayConcated
}

 
console.log(mergeArrays([1,23,4],["23", "2312312"]))

const createdGenericFunction = <T extends string | number>(argument : T[]) : T[] => {
    return argument
}

//no caso da funcao acima eu estou dizendo que eu posso aceitar apenas string ou number para o parametro e o tipo que for enviado ao parametro que vai dizer o tipo de retorno da minha funcao, ou seja, serao iguais se caso eu passar dessa forma

//entrega de valor default

function somaDefault(parametro1 : number , parametro2 = 1) : number{
    return parametro1 + parametro2
}
console.log(somaDefault(3, 12))
//se caso nao for passado um valor, ele vai aceitar o padrao estipulado no segundo paramtro --> 1

//tipo unknow, desconhecido e para ser utilizado, é necessario fazer validacao de dados, narrowing

function unknownType(x : unknown):void{
    if(Array.isArray(x))return console.log(x[1])
    else if(typeof x === 'string')return console.log('é string')
    // return console.log(x[1])//precisa ser validado
}
unknownType([2,3,4])
unknownType('sdasd')


//simplesmente o never é quando a funcao nao retorna nunca, n eh que ela nao retorne nada, é que ela de fato nunca vai retornar ent basicamente é em caso de throw de erro, lancamentos e loops infinitos que realmente nao retornam da funcao

const throwError = (error : {
    message : string,
    statusCode : number
}) : never => {
    throw new CustomError(error.message, error.statusCode)
}
interface erro {
    message:string
    statusCode:number
}
const internalServerError : erro = {
    message: "internal Server Error",
    statusCode: 500
}

const someAppError : erro = {
    message : "e-mail em uso",
    statusCode : 401 //unathorized
}
//throwError(someAppError)
//throwError(internalServerError)//essa nunca vai ser executada pq a de cima nao retorna nunca. meu deus

class CustomError implements erro {
    message : string
    statusCode: number

    constructor(message : string, statusCode = 401){
        this.message = message
        this.statusCode = statusCode
    }
}

// throwError(internalServerError) throwing error when i wanted

//rest parameters

function multiplyAll (...nValues : number []) : number{
    return  nValues.reduce((sum, total) => sum * total)
}
//este operador pegar os parametros que eu passar e os transforma em uma lista de numbers
console.log(multiplyAll(2,3,4,5,2,1,2,3))

type NS = number | string

function genericsWithRestOperator<T extends NS>(...n : T[]) : T[] {
    const onlyNumbers =  n.filter(element => {
        if(typeof element === 'number'){
            return element
        }
    })
    return onlyNumbers
}
console.log(genericsWithRestOperator<NS>("123", 23, 2, 3, 4 , "121212"))

//destructuring with params at functions

function showProduct({name, price} : {name : string , price : number}) : string {
    return `o nome do produto é ${name} e o preço dele é ${price}`
}
//posso criar um type alias para esta situacao, para encurtar minha vida
interface product {
    name : string
    price : number
    size : string[1]
}

function showProductWithTypeAlias ({name , price, size}: product) : string {
    return `o nome do produto é: ${name}
            custa : R$${price}
            e o tamanho é ${size}
    `
}

const shirt : product ={
    name : "gola polo",
    price : 222.99,
    size : 'm'
}
console.log(showProductWithTypeAlias(shirt))