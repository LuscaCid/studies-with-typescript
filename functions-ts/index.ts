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

interface errorInterface {
 message : string
 statusCode : number
}
const throwError = (error : errorInterface) : never => {
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

//revisao com generics para aquecer

function showData<T>(args : T) : string{
    return `os dados papa. ${args}`
}

console.log(showData(5))
console.log(showData("lucassss"))
console.log(showData("luquetinha"))

//generics with less types inside of variable

function onlyNumOrarr<T extends number | string []>(argumentos : T) {
    if(Array.isArray(argumentos)){
        return argumentos.filter((element) => element === "amor")
    } else {
        return typeof argumentos
    }

}

console.log(onlyNumOrarr(['adsdas', 'amor']))//apenas retorna pra mim se for igual a amor, o conteudo e o tipo
console.log(onlyNumOrarr(5))// retornou o tipo em string

function showProductGeneric<T extends {name : string, age? : number}>(objecto : T){
    return `o nome do objeto é ${objecto.name}`
}

console.log(showProductGeneric({ name : "carrinho de mao"}))

//secao de generics com interfaces

interface GenericToFunction {
    name : string
    sentimento : string
    isAliveNow : boolean //so pra adicionar um tipo diferent // only for addict an different type
}

function showPersonFeelings<T extends GenericToFunction>(person : T) : void{
    return console.log(`nome : ${person.name}; sentindo agora: ${person.sentimento } e esta viva? ${person.isAliveNow ? "sim" : "nao"}`)
}

const pessoa12 : GenericToFunction = {
    name : "luquetildes",
    sentimento : "feliz",
    isAliveNow : true
}

showPersonFeelings(pessoa12)

// possibility to make an interface with generics to been passed when create an object

interface interWithGen<T ,U>{//podem ser qualquer coisa que eu passar
    //can be anything that i pass in arguments
    name : string
    wheels : T
    engine : U
}

const carro : interWithGen<string, string> =  {// a depender da situacao eu posso mudar para me adaptar
    name : "volks",
    wheels : 'traçada, filho',
    engine : "motor v8"
}
//tudo gira entorno da adaptação

interface indexo<T, U>{
    //[index : string] : T //a propiedade tem a chave do tipo texto porem o conteudo eu que defino
    assinatura : T
    propert : U
}

const ind : indexo<string, number> = {
    assinatura : "a de amor", //nao defini uma propiedade com o nome de x, mas o index signature definiu
    propert : 12
}
//se eu disse que o conteudo é em string, ele n pode receber outra coisa que nao seja string

console.log(ind)

// outro melhor exemplo de criacao de tipos passando generics para interfaces

interface ModelCarDefault <U, T, C>{
    name : string
    wheels : U
    engine : T
    color : C 
}

type Auto = ModelCarDefault<number, number, string> 
type Pen = ModelCarDefault<boolean, boolean, string>

const caneta : Pen = {
    name : "caneta azul, azul caneta",
    wheels : false,
    engine : false,
    color : "blue"
}

const Motorcycle : Auto = {
    name : "motinho",
    wheels  : 2,
    engine : 2.4,
    color : "black"
} 


/**
 * bloco de codigo que demonstra uma organizacao onde se cria uma interface que tem 
 * a possibilidade de possuir propiedades com tipos diferentes onde pode ser passado 
 * por uma <> de generics
 */

interface AnimalOrObject <U, T> {
    name : string
    size : number
    species? : U
    material? : T
    utility? : T

}

type ObjetoQualquer = AnimalOrObject<boolean, string>//nao possui especie, mas possui uma materia prima
type AnyAnimal = AnimalOrObject<string,boolean>//animal possui uma especie, mas n material

const Giraffe : AnyAnimal = {
    name : 'girafinha',
    size : 5.5,
    species : "girafa specie",
    material : false,
    utility : false
}

const myPen : ObjetoQualquer ={
    name : "caneta bic",
    size : .05,
    species : false,
    material : "some plastic",
    utility : "write on writeable superficies"
}

const printObjInfo = <T extends ObjetoQualquer | AnyAnimal>(objectooos : T) : string => {
    return `
    ${objectooos.material ? "objeto:" : "animal:"}   
    nome : ${objectooos.name}
    tamanho : ${objectooos.size}
    ${objectooos.material ? `Material do objeto:` + objectooos.material : ''  }
    ${objectooos.utility ? `utilidade do objeto:` + objectooos.utility :'' }
    `
}

console.log(printObjInfo(Giraffe))
console.log(printObjInfo(myPen))

//keyof pode recuperar o valor de uma propriedade dentro de um objeto a partir do seu nome
//mais conhecido tbm por chave, a chave pq somente ela pode ter esse nome dentro do objeto

const server = {
    hd : "2TB",
    ram : "32GB"
}
//limitei o acesso de k, dizendo que os unicos valores dele podem ser as propiedades de t
function primKeyOfServer<T, K extends keyof T>(objeto : T, key : K ){
    return `o valor da propiedade é : ${objeto[key]} `
}
/**
 * determinei que o parametro key é um symbol que advem de uma chave presente em T
 * que neste caso se refere ao objeto T
 * quando eu falo que "K extends keyof T" para o typescript, K se trata de um symbol 
 * onde ele vai possuir as possibilidades de ter os nomes presentes dentro das propiedades
 * do objeto em questao, chave de...
*/

console.log(primKeyOfServer(server, 'ram'))

console.log()
const sim : symbol = Symbol("lcCid")


