import greeting from './greet'

console.log(greeting())
//ja inicializei com nodemon, para testar a aplicacao

import * as tudo from './variable'
//acima o import alias para mudar o nome do que vem, vai que vem um nome semelhante a de alguma variavel ja existente aq
console.log(tudo.varA)

//posso importar tudo, mas preciso dar um alias para inserir dentro de um objeto de clarado
//importante lembrar que ha uma forma de importar todos os dados de um arquivo com apenas um '*'

tudo.functione("meu amoor era verdadeiro, o teu era pirata")//literalmente funciona como um objeto

import {exportadaFi} from './exportInterfaces' //interface exported from an archive and received here to make things

class ClassWithExportedInterface implements exportadaFi {
    name : string
    age : number
    isMarried: boolean 
    constructor(name : string, age : number, isMarried : boolean){
        this.name = name
        this.age = age
        this.isMarried = isMarried
    }
}
const newWoman : ClassWithExportedInterface = new ClassWithExportedInterface("maria", 23, true)
console.log(newWoman)

const objetoLiteral : exportadaFi = {
    name : "akdsas",
    age : 23,
    isMarried : false
}
console.log(objetoLiteral)
//criacao de tipo com base em uma propriedade do objeto acima

type tipadinho = typeof objetoLiteral["age"]

let variii : tipadinho = 2; //eu preciso dar valor antes de verificar o tipo, independentemente se ja foi declarada
console.log(typeof variii)

import { uniaoStrinnum } from './exportInterfaces'

const ArrayDeStringsENumeros : uniaoStrinnum = [123, "cccssdd"]
console.log(ArrayDeStringsENumeros)

//import tupla mucho doida
import tuplaNSO from './tupla'

const arrayWithTupla : tuplaNSO = ["posicao da string", 3, {
    numberStringArray(): (string | number) [] {
        return ['', 23]
    }
}]
const valueArray = arrayWithTupla[2]

console.log(valueArray.numberStringArray())

console.log(arrayWithTupla[2].numberStringArray()[1])