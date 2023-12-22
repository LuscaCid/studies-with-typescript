//fundamentals of variables with types

const numero : number = 2 //type number
const booleano : boolean = true  //type bool, true or false
const palavra : string = "paralabrinhas de cristal papai 2" //type number
const undefinede : undefined = undefined //type undefined
let doisTipos : (string | number) = "lucas" // ou numneros

doisTipos = 232 //union types for variables with typescript

const vetor : Array<number> = [] // form to declare an array with interface form

const vetorSimples : number [] = []

//union types com arrays

const vetorUnionTypes  : (string | boolean) [] = [true, "lucas", "false", false]

//completely alright with sintax

const vetorInterfaceUnionTypes : Array<number | string> = ['vetorzin', 234.5]

//form to make an float with an string

const numberInString : string = "21242.42"

const valueParsed : number =parseFloat(numberInString)

console.log(valueParsed)
console.log(typeof valueParsed)//number type

//typing most variables to make verifications to continue the program

type typeAlias = {
  numero :  number
  caracteres? : string //optional value
  booleano? : boolean //optional value
}

const variableTypeAlias : typeAlias = {
  numero : 22
}

interface interfaceTemplate {

}

type union = number | string 

const functionWithParametersTyped = (object : {prop1 : string, prop2 : {X :number, y : number}}) : number =>{
  return 2
}