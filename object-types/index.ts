//object types in typescript, more productivity
//training more with interfaces to make more visible, simple and organized my code

interface AnimalInterface {
    name : string
    breed : string
    isAlive : boolean
    age? : number | undefined
}

const showAnimal = (animal : AnimalInterface)  : string=> {
    return `
nome : ${animal.name}
idade : ${animal.age}
raça : ${animal.breed}
${animal.isAlive ? "este animal está vivo" : "nao esta mais entre nós"}`
}

class Animal implements AnimalInterface {
    public name //ja é implicito que eh string por causa da interface
    public breed 
    public isAlive 
    public age 
    constructor(name : string, breed : string, isAlive : boolean, age : number){
        this.name = name
        this.breed = breed
        this.isAlive= isAlive
        this.age = age
    }
}

const macaco : Animal = new Animal("golias", "macaco", true, 32)

console.log(showAnimal(macaco))

//implementacao da propriedade readonly em ts

interface Car {
    brand : string //marca do carro
    readonly wheels : number

}
const kombi : Car = {
    brand : "vw",
    wheels : 4
}

//kombi.wheels = 3 //nao se pode fzr isso pq eh uma propiedade apenas de leitura, nao se pode mudar o valor, apenas adicionar quando se declara pela primeira vez

console.log(kombi)

const truck : Car= {
    brand : "scania",
    wheels : 8
} 
///console.log(truck.wheels = 2)//its impossible to say, couz its an readonly property

//index signature // server pra ser usado quando nao se sabe o nome, NOME DAS CHAVES QUE VAO RECEBER VALORES, APENAS O TIPO DELAS 

interface coordObjects {
    [endereco : number | string] : number | string
    //[text : string] : string
    neighborhood : string

}//o typescript so aceita uma assinatura de index por interface

let coords : coordObjects = {
    1 : 3,
    neighborhood : "IAPI"
}
//coords[3] = "2321" // foi criado um index signature acima e nao se aceitam valores do tipo string nestes que sao numbers
coords[2] = 24 //propiedade do tipo number e valor tbm
coords[1] = 12
console.log(coords[1])
coords[24] = "gay" //propiedade tipo number e valor tipo string

coords.x = "12" //propiedade do tipo string e valor dela em string
coords.y = "22"
coords.z = "652"
console.log(coords)

interface AnimalKingdom {
    name : string
    specie : string
    eats(food : string) : void
}

interface Birds extends AnimalKingdom {
    fly() : void
}

interface Mammal extends AnimalKingdom {//caracteristicas unicas
    breastfeed (puppyName :string) : void
}

const Doggo : Mammal = {
    name : "amora",
    specie : "canino",
    eats(food : string) : void {
        return console.log(`${this.name} eats ${food}`)
    },
    breastfeed (puppyName : string) : void {
        return console.log(`${this.name} amamenta o ${puppyName}`)
    }

}
//heranca de interfaces em typescript
Doggo.breastfeed('amora fi')
console.log(Doggo.name)

// intersection types, sem explicitamente usar o extends, mas o operador '&'

interface Character {
    name : string
}
interface Gun {
    type : string
    caliber : number
    arrOfPeopleKilledByHim? :Array< string>

}

type CharacterWithGun = Character & Gun

const person : CharacterWithGun = {
    name : "arnold shuarz",
    type : "submetralhadora",
    caliber : 9,
    arrOfPeopleKilledByHim : []
}

person.arrOfPeopleKilledByHim!.push("zezin")
person.arrOfPeopleKilledByHim!.push("gutierres")

console.log(person)

//readonly arrays in typescript

let MyArray : ReadonlyArray<number | string> = ['goiaba', 2, "121", "cana de açucar"] 

MyArray = MyArray.map(eachElement => {
    return `elemento ${eachElement} que era do tipo ${typeof eachElement}`
})
console.log(MyArray)

let stringDeLetras = "a b c d e r k l c t"

const vetorDasLetras : Array<string> = stringDeLetras.split(' ')

console.log(vetorDasLetras)

//cheguei nas tuplas. assunto bem importante

type date = [number, string, number?]//padronizacao do codigo com tuplas

const time = new Date()

const data : date = [Number(time.getDate()), String(time.getMonth()), Number(time.getFullYear())]

console.log(data)
console.log(data[0], data[1],data[2])

//one more time with readonly arrays and properties in types

interface readnly  {
    readonly name : string //estou dizendo que o nome so pode ser lido
}

const userWithread : readnly = {
    name : "lucas"
}

//userWithread.name = "23" nao pode ser alterado, apenas leitura

let ArrayWithReadOnly : ReadonlyArray<readnly> = [{name : "lucas"}, {name : "zezinho"}]

console.log(ArrayWithReadOnly)
//ArrayWithReadOnly.push({name : "dasda"})//nao pode ser acrescido, apenas no momento da criacao

ArrayWithReadOnly = ArrayWithReadOnly.map(element =>{
    const newObj : readnly = {//preciso tipar este object literal antes de implementar no mesmo array, pois ele ja era do tipo readnly
        name : `${element.name}, nome delo`
    }
    return newObj

})
console.log(ArrayWithReadOnly)

//estou passando uma tupla para dentro de numbers 
//a clausula readonly define que este array chamado numbers nao pode ser alteraldo em alguma posicao
function showNumbers(numbers : readonly [number, number]) : void{
    //numbers[1] = 23 X somente leitura
    return console.log(numbers[1], numbers[0])
}

//showNumbers([0,0,2])//o limite de posicoes aceitas neste vetor é de 2 pos
showNumbers([2,4])

//secao para tipar objetos como sao considerados no typescript

//mais um treinamento de como unir interfaces em um type 
