

const array : (string | number) [] = []
//new form to do this
const array2 : Array<number | string> = []
//old form where the array its an object
array.push(2)
array.push("23")
console.log(array)

array2.push(2)
array2.push("121")
console.log(array2)

//type guard
const array3 : any= []
const emptyArray : Array<number> = []

console.log(typeof array3, "tipo" )


type operations = "sum" | "minus" | "multiply"| undefined;

function chooseOfOperation(array : number [], operations : operations ) : number | string{
    if(operations){
        let value : number; // only for atribute to an variable --> 
        switch(operations){
            case "sum" :
                return  array.reduce((i, total) => total + i) 
            case "minus" :
                return value = array.reduce((i, total) => total - i)
            case "multiply" :
                return value = array.reduce((i, total) => total * i)
            default :
                return "preencha com uma operacao"
        }
    } else {
        return ""
    }
}

const operacaoEscolhida : operations= "sum" //only values that can be accept to type operations

const arrayValues : Array<number> = [2,3,4]

const result = chooseOfOperation(arrayValues, operacaoEscolhida)

console.log(result)

const multiplyOperation : operations = 'multiply'

console.log(chooseOfOperation(arrayValues, multiplyOperation))

// instance of operator to identify if an object variable is like an class passed at second

class User { //its like an normal user in the application
    name
    constructor(name : string){
        this.name = name
    }
}

class SuperUser extends User{
    constructor(name : string){
        super(name)//passando para  a classe mae o meu name que vai receber
    }
    showAdminUser(){
        console.log(`prazer vê-lo: ${this.name}`)
    }

}
const lucas : User = new User("lucas")//instanciando uma variavel de forma annotation e instanciando um objeto User nela
const Paulo : SuperUser = new SuperUser("paulo")

const greetingUser = (user : object) :void => {
    if(!user)return console.log('no user passed')
    if(user instanceof User){
        return console.log(`ola usuario padrao : ${user.name}`)
    } else if (user instanceof SuperUser)return console.log(`ola user administrador do sistema ${user.name}`)
    else return console.log('eoq')
}

greetingUser(Paulo)

console.log(Paulo.showAdminUser())

//Narrowing para identificar valores para dentro de propiedades com classes 

class Dog {
    name : string // tipando
    breed : string | undefined
    constructor(name : string, breed? : string | undefined){
        this.name = name //this.name only can receive strings, of course
        if(breed){
            this.breed = breed
        }
    }
}

const amora : Dog = new Dog('amora') // breed is an optional value

const pedgree : Dog = new Dog('pitbull enraivado', "pitbull")
//estou tipando por annotation as variaveis acima e as instanciando como o objeto Dog


if('breed' in pedgree)console.log("tem raca, viu filho")
if('breed' in amora)console.log("tem raca, viu filho")//breed in amora ta undefined
//este tipo de narrowing vai verificar se o breed que é um campo dentro do objeto Dog 
//tem valor definido, ou seja, que tenha recebido algo em algum momento...
console.log(amora.breed)//undefined