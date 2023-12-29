"use strict";
class Cidadao {
}
const newUser = new Cidadao();
newUser.name = "lucas cid";
newUser.age = 20;
console.log(newUser);
class Calo {
    constructor(name, qtdWheels) {
        this.name = name;
        this.qtdWheels = qtdWheels;
    }
}
class Fucker {
    constructor(name, isAlive) {
        this.name = name;
        this.isAlive = isAlive;
        this.arrCars = [];
    }
    setName(name) {
        this.name = name;
        return console.log(this.name);
    }
    setIsAlive(isAlive) {
        if (typeof isAlive === 'boolean') {
            this.isAlive = isAlive;
            return `alterated`;
        }
        else
            return `only pass booleans right now!`;
    }
    get testeCaloReturns() {
        return this.testeCalo;
    }
    set setArrCars(car) {
        this.arrCars.push(car);
    }
    get getArrCars() {
        return this.arrCars;
    }
}
const pessoinha = new Fucker("loque", true);
const tipoAdvindoDaPropriedadeName = 'dsa';
console.log(typeof tipoAdvindoDaPropriedadeName === typeof pessoinha['name']);
console.log(pessoinha);
pessoinha.setName('luquitos');
console.log(pessoinha);
const carToPush = {
    name: "fusca herbie",
    qtdWheels: 4
};
pessoinha.setArrCars = carToPush;
pessoinha.setArrCars = { name: "ferrari", qtdWheels: 4 };
console.log(pessoinha.getArrCars);
//getters and setters to an class with typescrip
const arrOfPeople = [];
arrOfPeople.push(pessoinha);
arrOfPeople.push(pessoinha);
arrOfPeople.pop();
console.log(arrOfPeople); //at this way i can see the array of cars inside each object
class Animaiszinhos {
}
class Doggos extends Animaiszinhos {
    makeSounds(sound) {
        return `o cachorro faz ${sound}`;
    }
}
const traininTupla = [2, 'frase aqui, string', { name: "tupla", qtdWheels: 4 }];
function returnsTupla() {
    return [2, '232', { name: 'string', qtdWheels: 3 }];
}
const retornodatupla = returnsTupla();
console.log(retornodatupla);
class Father {
    constructor(name, height) {
        this.name = name;
        this.height = height;
        this.sons = [];
    }
    sayIm(content) {
        let message;
        if (content) {
            return message = `i, ${this.name} am your father!. Addcitional message ${content}`;
        }
        else
            return `i, ${this.name} am your father!`;
    }
    set setSons(newSon) {
        this.sons.push(newSon);
    }
    get getSons() {
        return this.sons;
    }
    get getName() {
        return this.name;
    }
}
class Children extends Father {
    constructor(name, height, teethDown) {
        super(name, height);
        this.actualCountOfTeethDownned = teethDown;
    }
    get returnDownTeeth() {
        return this.actualCountOfTeethDownned;
    }
    sayIm(content) {
        let message;
        if (content) {
            return message = `Daddy, i, ${this.getName}, am your son. Addcitional message ${content}`;
        }
        else
            return `Daddy, i, ${this.getName}, am your son.`;
    }
}
const filho = new Children('pedrinho', 1.10, 0);
console.log(filho);
const phrase = ' a   a   sdasd  asdas a as';
const phraseWithOutSpaces = phrase.trim();
console.log(phraseWithOutSpaces);
class BlogPost {
    constructor(itemTitle, itemContent) {
        this.codigo = Math.round(Math.random() * 50000);
        this.itemTitle = itemTitle; //titulo obrigatorio e o conteudo nao
        if (itemContent)
            this.itemContent = itemContent;
    }
    showPostsDetails() {
        let finalMessage;
        finalMessage = this.itemTitle;
        if (this.itemContent)
            finalMessage.concat(this.itemContent);
        return finalMessage;
    }
    set setContent(newContent) {
        this.itemContent = newContent;
    }
    get getContent() {
        return this.itemContent;
    }
    set setTitle(newTitle) {
        this.itemTitle = newTitle;
    }
    get getTitle() {
        return this.itemTitle;
    }
    get itemCode() {
        return this.codigo;
    }
}
class Velha {
    someMethod() {
        return `to the base`;
    }
}
class Nova extends Velha {
    someMethod() {
        return `outro valor de retorno, peguei o objeto e apenas sobrescrevi o metodo someMethod`;
    }
}
const objetoNovo = new Nova();
const oldObject = new Velha();
console.log(oldObject.someMethod());
console.log(objetoNovo.someMethod());
/**
 * propriedade de protecao de propriedades e metodos -->
 * --public é muito utilizado para a questao de transformar a propriedade visivel para as filhas
 * para acessar tanto por fora das classes quanto para acessar diretamente atraves da intancia de um objeto
 *
 * --private é usado para proteger o metodo ou propriedade apenas dentro da classe, para ser acessado por fora
 * é necessario se utilizar de outros metodos de acesso que controlam, possivelmente, atraves de logica condicional
 *
 * --protected é visivel apenas a classe criou e para as que estendem dela
 */
class TestProtected {
    constructor(text) {
        this.protegido = text;
        this.privado = text;
    }
    protectedMethod() {
        return `metodo privado`;
    }
    showPrivado() {
        return this.privado; // somente visivel a esta classe e nao as outras que herdam desta
    }
    privateMethod() {
        return `private method`;
    }
}
class FilhaTest extends TestProtected {
    showPrivado() {
        return this.protegido; //como classe filha, tenho acesso a este que é protected, mas nao ao outro que é private
    }
    showProtegido() {
        console.log(this.protegido); //tem acesso ao atributo protected
    }
    protectedMethod() {
        return `de dentro da filha aqui`;
    }
}
const instanciaFilha = new FilhaTest('message');
instanciaFilha.showProtegido();
class AppError {
    static unathorizedStatus(message, statusCode = 401) {
        const ErrorBuilder = {
            message: message,
            statusCode: statusCode
        };
        throw new Error(JSON.stringify(ErrorBuilder));
    }
    static internalServerError(object) {
        if (typeof object === 'string') {
            throw new Error(object);
        }
        const ErrorBuilder = {
            message: object.message,
            statusCode: object.statusCode
        };
        throw new Error(JSON.stringify(ErrorBuilder));
    }
}
//AppError.internalServerError('messagem de erro, typescript é incrivel')
//AppError.unathorizedStatus('e-mail ja usado na alicacao', 401)
class ClasseGenerica {
    constructor(first, seccond) {
        this.first = first;
        this.seccond = seccond;
    }
    get showFirst() {
        return this.first;
    }
    get showSeccond() {
        return this.seccond;
    }
}
const first = new ClasseGenerica('a de amor', 2); //tipagem de forma annotation
console.log(first.showFirst);
class GenericaWithStatic {
    static staticMethods(content) {
        return console.log(content);
    }
}
GenericaWithStatic.staticMethods("mensagem positiva para todos, do linkeds");
//tipando por annotation o que vai ser passado nos parametros
//parameter properties, torna a classe mais enxuta
class ParametersPoperties {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    get showName() {
        return this.name;
    }
}
const objectWithProperties = new ParametersPoperties("lucas");
/**
 *
 * asdewqqwerqwerwerqqwerqwertyqwetqwertyqwertyqweteyyyyyyyttyyttyyttyytttyytyttyyttyyytrerterfvdgfgregfdrtedgfdrgf
 */
class ClasseAbstrata {
}
const myClass = class ClassExpression extends ClasseAbstrata {
    constructor(name) {
        super();
        this.name = name;
    }
    ShowName() {
        return this.name + " " + "é como eu me chamo, nesta classe";
    } //metodo abstrato para ser implementado na classe
};
//diferente de interface, essas regras, contratos sao atribuidos a classe por meio da palavra implements
//ja para uma classe abstrata eh necessario implementar com o extends, é uma heranca e tambem é necessario,
//por conta deste extends, passar um super() por se tratar de um classe filha que herda da classe pai
const newOBJ = new myClass('luquitos');
//forma de criar uma classe atrbuir a uma variavel
console.log(newOBJ.ShowName());
class PrivateProperties {
    constructor(valorInicial) {
        this.crm = Math.round(Math.random() * 5000);
        this.amigo = valorInicial;
    }
    showPrivate() {
        return this.amigo;
    }
}
//a classe abstrata nao pode ser instanciada, apenas usada de 'interface'
const MedicalClass = class extends PrivateProperties {
    constructor(especialidade, name, isTeacherToo, friend) {
        super(friend);
        this.especialidade = especialidade;
        this.name = name;
        this.name = name;
        this.especialidade = especialidade;
        this.isTeacherToo = isTeacherToo;
    }
    showFriend() {
        return console.log(`amigo : ${this.amigo}`);
    }
    realizarConsulta(nomePaciente) {
        return console.log(`eu, ${this.name}, consultei o paciente ${nomePaciente}`);
    }
    showGreeting() {
        return this.greeting();
    }
    greeting() {
        return `bom dia dr. ${this.name}`;
    }
    receiveCallback(callback) {
        return console.log(callback);
    }
};
const DrEduardo = new MedicalClass('retinologo', 'eduardo principe', true, 'zezé');
console.log(DrEduardo);
console.log(DrEduardo.showGreeting());
class GettersAndSetters {
}
const MyClassWithGenerics = class {
    constructor(content, resto) {
        this.content = content;
        this.resto = resto;
        this.content = content;
        this.resto = resto;
    }
    get showContent() {
        return this.content;
    }
    get showResto() {
        return this.resto;
    }
    //set any value
    set SetAnyValue(newAnyValue) {
        this.anyValue = newAnyValue;
    }
};
const objetoTrain = new MyClassWithGenerics("conteeuedo", "dasdas");
objetoTrain.SetAnyValue = { a: 123 };
console.log(objetoTrain);
const funcCallback = (content) => {
    return content;
};
DrEduardo.receiveCallback(funcCallback);
const variavelTipada = [12, '1221'];
const objetoLiteral = {
    name: "adsd",
    numero: 123
};
//console.log(55+45+65+60+55+65)
/** secao para recepcao de callback */
function funcaoRetorno(frase) {
    return `${frase} --> retornada na function`;
}
//passing the callback function to the parameter
function retorneACAllback(callback, argument) {
    return callback(argument);
}
const phraseReturned = retorneACAllback(funcaoRetorno, "paradise pd é uma serie top");
console.log(phraseReturned);
