class Cidadao {
    name! : string
    age! : number
}

const newUser = new Cidadao()

newUser.name = "lucas cid"
newUser.age = 20
console.log(newUser)

//constructors --> bases of classes

type calo = {
    name : string
    qtdWheels : number
}

class Calo implements calo {
    name : string
    qtdWheels : number
    
    constructor(name : string, qtdWheels : number){
        this.name = name
        this.qtdWheels = qtdWheels
    }
}
type possibleName = string | undefined
class Fucker{
    public name! : possibleName
    public isAlive! : boolean
    private arrCars : calo[]
    private testeCalo! : calo
    constructor(name: string, isAlive : boolean){
        this.name = name
        this.isAlive = isAlive
        this.arrCars = []
    }

    setName<T extends possibleName>(name : T) : void{
        this.name = name
        return console.log(this.name)
    }

    setIsAlive(isAlive : unknown) : string {
        if(typeof isAlive === 'boolean'){
            this.isAlive = isAlive
            return `alterated`
        }
        else return `only pass booleans right now!`
    }
    get testeCaloReturns() : calo {
        return this.testeCalo
    }
    set setArrCars(car : calo) {
        this.arrCars.push(car)
    }
    get getArrCars() : calo [] {// ele vai retornar naturalmente um array do tipo calo
        return this.arrCars
    }
}

const pessoinha = new Fucker("loque", true)

type pegoDaClasse = typeof pessoinha['name']
const tipoAdvindoDaPropriedadeName : pegoDaClasse = 'dsa'
console.log(typeof tipoAdvindoDaPropriedadeName === typeof pessoinha['name'])

console.log(pessoinha)

pessoinha.setName('luquitos')
console.log(pessoinha)
const carToPush : calo = {
    name : "fusca herbie",
    qtdWheels : 4
}

pessoinha.setArrCars = carToPush
pessoinha.setArrCars = {name : "ferrari", qtdWheels : 4}
console.log(pessoinha.getArrCars)

//getters and setters to an class with typescrip

const arrOfPeople : Fucker [] = []
arrOfPeople.push(pessoinha)
arrOfPeople.push(pessoinha)
arrOfPeople.pop()
console.log(arrOfPeople)//at this way i can see the array of cars inside each object

abstract class Animaiszinhos {
    abstract makeSounds(sound : string) : string //i can make an abstract class to make my objects addict to then their methods
}

class Doggos extends Animaiszinhos{
    makeSounds(sound: string): string {
        return `o cachorro faz ${sound}`
    }
}
//ao usar os set e get paramos de manipular como uma funcao e aparentemente passa a ser como uma propriedade, wtf
/**
 * onde eles recebem os valores que sao passados para a logica, mas nao diretamente à propriedade, antes passa por 
 * uma logica de setter
 * 
 */
/**
 * short section to train with tupla
 */
type myTrainWithTupla = [number, string, calo]

const traininTupla : myTrainWithTupla = [2,'frase aqui, string', {name : "tupla", qtdWheels : 4}]


function returnsTupla() : myTrainWithTupla{
    return [2, '232', {name : 'string', qtdWheels : 3}]
}

const retornodatupla : myTrainWithTupla = returnsTupla()

console.log(retornodatupla)

/**
 * tratamento com superclasses e classes filhas testas. HERANÇA
 */
interface FatherAndChildMethods{
    sayIm<T>(content? : T) : string
}
type Son = {
    name : string
    age : number
    crackedBones? : number
    isBoy : boolean
}

class Father implements FatherAndChildMethods {
    
    private name : string
    private sons : Array<Son>
    private readonly height! : number
    
    constructor(name : string, height : number){
        this.name = name
        this.height = height
        this.sons = []
    }

    sayIm<T>(content?: T | undefined): string {
        let message : string ;
        if(content){
            return message = `i, ${this.name} am your father!. Addcitional message ${content}`
        } else return `i, ${this.name} am your father!`
       
    }

    set setSons(newSon : Son) {
        this.sons.push(newSon)
    }
    get getSons() : Son [] {
        return this.sons
    }

    get getName() : string{
        return this.name
    }
}

class Children extends Father implements FatherAndChildMethods {
    private actualCountOfTeethDownned : number 
    
    constructor(name : string, height : number, teethDown : number){
        super(name, height)
        this.actualCountOfTeethDownned = teethDown
    }
    
    get returnDownTeeth() : number {
        return this.actualCountOfTeethDownned
    }

    sayIm<T>(content?: T | undefined): string {
        let message : string ;
        if(content){
            return message = `Daddy, i, ${this.getName}, am your son. Addcitional message ${content}`
        } else return `Daddy, i, ${this.getName}, am your son.`
        
    }
}

const filho = new Children('pedrinho', 1.10, 0)
console.log(filho)
const phrase : string = ' a   a   sdasd  asdas a as'
const phraseWithOutSpaces = phrase.trim()
console.log(phraseWithOutSpaces)

// trabalhando com as implementacoes de interfaces nos objetos

interface PostsDefault {
    showPostsDetails () : string 
}

class BlogPost implements PostsDefault{
    private itemTitle : string
    private itemContent! :  string
    private readonly codigo : number = Math.round(Math.random()*50000)
    constructor(itemTitle : string, itemContent? : string){
        this.itemTitle = itemTitle//titulo obrigatorio e o conteudo nao
        if(itemContent) this.itemContent = itemContent
    }

    showPostsDetails(): string {
        let finalMessage : string;
        finalMessage = this.itemTitle

        if(this.itemContent) finalMessage.concat(this.itemContent)
        return finalMessage
    }

    set setContent (newContent : string){
        this.itemContent = newContent
    }
    get getContent() : string {
        return this.itemContent
    }
    set setTitle (newTitle : string)  {
        this.itemTitle = newTitle
    }
    get getTitle() : string{
        return this.itemTitle
    }

    get itemCode () : number {
        return this.codigo
    }

}

//sobrescrita de metodos, ou override

interface intObjecs {
    someMethod() : string
}
class Velha implements intObjecs{
    someMethod(): string {
        return `to the base`
    }
}

class Nova extends Velha{//agora minha Nova tem acesso à velha
    someMethod(): string {
        return `outro valor de retorno, peguei o objeto e apenas sobrescrevi o metodo someMethod`
    }
}
const objetoNovo : Nova = new Nova()
const oldObject : Velha = new Velha()

console.log(oldObject.someMethod())
console.log(objetoNovo.someMethod())

/**
 * propriedade de protecao de propriedades e metodos --> 
 * --public é muito utilizado para a questao de transformar a propriedade visivel para as filhas
 * para acessar tanto por fora das classes quanto para acessar diretamente atraves da intancia de um objeto
 * 
 * --private é usado para proteger o metodo ou propriedade apenas dentro da classe, para ser acessado por fora
 * é necessario se utilizar de outros metodos de acesso que controlam, possivelmente, atraves de logica condicional
 * 
 * --protected é visivel apenas a classe criou e para as que estendem dela
 */
class TestProtected implements showsProtectedAndPrivate{
    protected protegido : string
    private privado : string
    constructor(text : string) {
        this.protegido = text
        this.privado = text
    }
    protected protectedMethod() : string{
        return `metodo privado`
    }
    public showPrivado(): string {
        return this.privado // somente visivel a esta classe e nao as outras que herdam desta
    }
    private privateMethod(): string{
        return `private method`
    }
}

interface showsProtectedAndPrivate{
    showProtegido?() : void
    showPrivado() : string
}
class FilhaTest extends TestProtected implements showsProtectedAndPrivate{
    showPrivado(): string {
        return this.protegido //como classe filha, tenho acesso a este que é protected, mas nao ao outro que é private
    }
    showProtegido():void{
        console.log(this.protegido)//tem acesso ao atributo protected
    }
    protected protectedMethod(): string {
        return  `de dentro da filha aqui`
    }
    /*privateMethod() : string{
        return `asdas`
    }*/ //isso gera u erro de compilacao, pois nao se pode fazer a sobrescrita de un metodo que é privado de outra classe
}

const instanciaFilha = new FilhaTest('message')

instanciaFilha.showProtegido()
//instanciaFilha.protegido //erro de compilacao pois o protected so é possivel acessar atraves de outro metodo

/**
 * basicamente o protected e o private necessitam de metodos para serem acessados. o private precisa de
 * metedos nas subclasses tambem
 */
type ErrorConstuction = {
    message : string
    statusCode : number
}

class AppError{
    public static unathorizedStatus(message : string, statusCode = 401) : never {
        const ErrorBuilder : ErrorConstuction = {
            message: message, 
            statusCode : statusCode
        }
        throw new Error(JSON.stringify(ErrorBuilder))
    }
    
    public static internalServerError<T extends ErrorConstuction | string>(object : T) : never {//vou misturar com generics
        if(typeof object === 'string'){
            throw new Error(object)
        }
        const ErrorBuilder : ErrorConstuction = {
            message : object.message,
            statusCode : object.statusCode
        }
        throw new Error(JSON.stringify(ErrorBuilder))
    }
}
//AppError.internalServerError('messagem de erro, typescript é incrivel')
//AppError.unathorizedStatus('e-mail ja usado na alicacao', 401)

class ClasseGenerica<T, U> {
    private first! : T
    private seccond! : U
    
    constructor(first : T, seccond : U){
        this.first = first
        this.seccond = seccond
    }
    get showFirst() : T {
        return this.first
    }
    get showSeccond() : U {//passando tipos de forma generica
        return this.seccond
    }
}

const first = new ClasseGenerica<string, number>('a de amor',2) //tipagem de forma annotation

console.log(first.showFirst)

class GenericaWithStatic {
    public static staticMethods<T extends string | number>(content : T) : void {
        return console.log(content)
    }
} 

GenericaWithStatic.staticMethods<string>("mensagem positiva para todos, do linkeds")
//tipando por annotation o que vai ser passado nos parametros

//parameter properties, torna a classe mais enxuta

class ParametersPoperties{
    constructor(private name : string){//at parameters...
        this.name = name
    }
    
    get showName() : string {
        return this.name
    }
}

const objectWithProperties = new ParametersPoperties("lucas")
/**
 * 
 * asdewqqwerqwerwerqqwerqwertyqwetqwertyqwertyqweteyyyyyyyttyyttyyttyytttyytyttyyttyyytrerterfvdgfgregfdrtedgfdrgf
 */
abstract class ClasseAbstrata {
    public abstract ShowName() : string
}
const myClass = class ClassExpression extends ClasseAbstrata{
    name! : string
    constructor(name : string){
        super()
        this.name = name
    }
    public ShowName(): string {
        return this.name + " " + "é como eu me chamo, nesta classe"
    }//metodo abstrato para ser implementado na classe
}
//diferente de interface, essas regras, contratos sao atribuidos a classe por meio da palavra implements
//ja para uma classe abstrata eh necessario implementar com o extends, é uma heranca e tambem é necessario,
//por conta deste extends, passar um super() por se tratar de um classe filha que herda da classe pai

const newOBJ = new myClass('luquitos')
//forma de criar uma classe atrbuir a uma variavel
console.log(newOBJ.ShowName())
