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
        return `i, ${this.name} am your father!`
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
    
    constructor(name : string, height : number){
        super(name, height)
    }
    
    sayIm<T>(content?: T | undefined): string {
        let message : string ;
        if(content){
            return message = `Daddy, i, ${this.getName}, am your son. Addcitional message ${content}`
        } else return `Daddy, i, ${this.getName}, am your son.`
        
    }
}
