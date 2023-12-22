

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

//try of tuples