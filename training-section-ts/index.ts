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