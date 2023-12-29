//secaozinha apenas para revisar criacoes de variaveis tipadas

const numeros : number [] = [] //array de numbers
let numeroOuStrings : number | string = "lucas?"
numeroOuStrings = 123 //dupla atribuicao, este é o union type

let verdadeirosOuFalsos : boolean //so criei, ou seja, nao tem nd dentro desta variavel

verdadeirosOuFalsos = true

// ainda tem o literal type

let especificWord : "word" = 'word' //se eu passar valores diferentes do que corresponde a tipagem, vai dar erro pois apenas o valor igual que for passado apos os dois pontos que vai ser ok
console.log(typeof especificWord)
//introducao a interfaces


interface Point{
  x : number
  y: number
  z? : number //its an optional value to been receive
}

//uma funcao que recebe como parametro um objeto do tipo point que contem x : number, y : number e z :numnber de forma abstrata

const showCoordinates = (obj : Point) => {//posso passar nos parametros tambem

  console.log(`x:${obj.x}`)
  console.log(`y:${obj.y}`)
  console.log(`z:${obj.z}`)
}

const pointObject : Point = {
  x : 2,
  y : 4,
  z : 4
}

showCoordinates(pointObject)

//type alias x interface

//a principal diferenca é que eu posso simplesmente adicionar novas propiedades dentro da interface, diferentemente do type alias


type PersonType = {
  name : string

}

interface PersonInterface {
  name : string
}

const Person : PersonInterface = {
  name : "lucas eh top"
} 

interface PersonInterface {
  age? : number
}

const personWithNameAndAge : PersonInterface = {
  name : "rebece",
  age : 17
}

//type alias nao pode ser modificado com o tempo,
//mas o interface sim 

console.log(Person)
console.log(personWithNameAndAge)

//literal types
//restricao de valores que podem ser recebidos dentro de uma variavel, q doideira
 

const showDirection = (dir : "right" | "left" | "bottom" ) : void=>(
  console.log(dir)
)


//apenas posso passar valores que union type aceita

//non null assertion operator serve para mostrar ao ts que tem sim algo que vai ser preenchido, no caso, os elementos da dom

const h1 = document.querySelector('h1')

console.log(h1?.textContent)

//ele autocompleta como se dissesse que este valor pode ser null pq o ts nao consegue identificar os elementos da dom  

//concept about bigint

const num : bigint = 100n
const numToString = String(num)
const numFloat : number = parseFloat(numToString)
console.log(numFloat)

//symbol cria uma referencia unica

const symbolA : symbol = Symbol.for("a symbol to symbolA")
const symbolB : symbol = Symbol("asda")

//a descricao independe, a cada chamada da funcao, a variavel vai possuir um identificador unico

//para dentro de um symbol consigo atribuir uma descricao
console.log(symbolA.description)

console.log(symbolA === symbolB)//nunca serao iguais pois sao unicos

//revisando ne

type diferenciado = {
  name : string
  age? : number
}

const pessoa : diferenciado = {name : "lucas"}

const ArrayCreated : Array<object> = []

interface typeForObject {
  name : string
  password : string
  age? : number

}


const object : typeForObject = {
  name : "lucas",
  password : "12312312312q",
  age : 32,
  newColum : 'sda'
}

ArrayCreated.push(object)
ArrayCreated.push(object)
ArrayCreated.push(object)
ArrayCreated.push(object)

const newFormToCreateAnArray : number [] | string [] = [2,3,4,5]
console.log(newFormToCreateAnArray)
console.log(ArrayCreated)


interface typeForObject {
  newColum : any
}

const newObjectWithNewColumn : typeForObject = {
  name : "luquetinha",
  password : "luqu",
  newColum : "coluninh"
} 

interface interWithFunction {//no caso um objeto que eu criasse 
  funcao(a: number) : boolean
}//receberia este tipo que implicitamente me diz que eu tenho que ter uma funcao que vai receber estes parametros

//na interface ta dizendo basicamente que :
//a variavel que implements esta interface vai possuir uma funcao que recebe dois parametros do tipo number e o retorno também é do tipo number --> sdds de C que era int...

console.log(newObjectWithNewColumn)
type anyType = {
  name : string
  optional? : number
}
class ContainsMaterialsToDo implements anyType{
  name : string
  constructor(name : string){
    this.name = name  
  }
}


class ClasseComInterface implements interWithFunction {
  funcao(a: number): boolean {//precisa retornar um number
    let count = a
    let ver = 0
    while(count >= 0){
      if(a % count == 0)ver++
      count--
    }
    if(ver == 2)return true
    else return false
  }
}

const tryToSeeAnPrimNumber = new ClasseComInterface()

const isPrim : boolean = tryToSeeAnPrimNumber.funcao(7)
isPrim ? console.log('é primo') : console.log('nao eh')