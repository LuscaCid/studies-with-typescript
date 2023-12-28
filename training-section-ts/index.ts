type itemsSeling = { productName : string, productPrice : number }
interface defaultFunctinaryInterface {
    name : string 
    codMat : string
    age? : number
    selled? : itemsSeling []
}


class Agent implements defaultFunctinaryInterface {
    name : string
    codMat : string
    age? : number
    selled? : itemsSeling []
    constructor(name : string,  codMat : string, age? : number ){
        this.codMat = codMat
        this.name = name
        if(age)this.age = age
    }
    sellItem(item : itemsSeling) {
        return this.selled?.push(item)
    }
    getAge(){
        return this.age
    }
    updateAge(newAge : number){
        this.age = newAge
    }
}

const product1 : itemsSeling = { 
    productName : "camisa",
    productPrice : 29.99
} 

const agentLucas = new Agent('lucas', '123123')

agentLucas.sellItem(product1)

console.log(agentLucas.selled)

/**
 * 
 * section to train types with generics
 * 
 */

type generico <T, U> = {
    nome : T
    andar : U
}
type genericao <T, U> = T | U //defino o tipo a partir da criacao da variavel apenas passando os argumentos


const genericaao : genericao <string, number> []= ['amor', 2907] 
const genericoo : generico<string, number> = {nome : 'lucas', 'andar' : 2}//tipado da forma que eu decidi 
//eu posso tanto chamar a propriedade do tipo ou interface com uma string '<nome da propriedade>' 
//quando o nome sem as aspas e isso eh muito legal

type tuplaGeneric<T,U> = [T?, U?] // por si so a tupla ja define que o tipo eh um array de duas posicoes fixas
//defini a segunda posicao do vetor como sendo algo opcional
const variableWithTuplaGeneric : tuplaGeneric <boolean, number> = []
variableWithTuplaGeneric.push(true) //tipo que é aceito na segunda posicao
//variableWithTuplaGeneric[1] = true//erro de compilacao apenas ao tentar forcar fazer a entrada do valor desta forma
variableWithTuplaGeneric[1]=2 //accepts numbers only

console.log(variableWithTuplaGeneric)
/**
 * i have to learn more about more forms to work with class in ts, oop
 */