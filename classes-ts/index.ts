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

class Fucker{
    public name! : string | undefined
    public isAlive! : boolean
    private arrCars : calo[]

    constructor(name: string, isAlive : boolean){
        this.name = name
        this.isAlive = isAlive
        this.arrCars = []
    }

    setName<T extends string | undefined>(name : T) : void{
        this.name = name
    }

    setIsAlive(isAlive : unknown) : string {
        if(typeof isAlive === 'boolean'){
            this.isAlive = isAlive
            return `alterated`
        }
        else return `only pass booleans right now!`
    }

    setArrCars(car : calo) : number{
        return this.arrCars.push(car)
    }

    getArrCars() : calo [] {
        return this.arrCars
    }

}
const pessoinha = new Fucker("loque", true)

console.log(pessoinha)

const carToPush : calo = {
    name : "fusca herbie",
    qtdWheels : 4
}

pessoinha.setArrCars(carToPush)
pessoinha.setArrCars({name : "ferrari", qtdWheels : 4})// an object literal made with properties that have in type calo
console.log(pessoinha.getArrCars())

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