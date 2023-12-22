"use strict";
class Reviwer {
    constructor(name) {
        this.name = name;
    }
}
const user1 = new Reviwer("lucas");
function assignReview(grade) {
    if (typeof grade.stars === 'number') {
        switch (grade.stars) {
            case 1:
                return console.log(`a nota dada pelo usuario foi ${grade.stars} é uma pena`);
            case 2:
                return console.log(`a nota dada pelo usuario foi ${grade.stars}, nao gostou, vish`);
            case 3:
                return console.log(`a nota dada pelo usuario foi ${grade.stars}, achou bem mais ou menos`);
            case 4:
                return console.log(`a nota dada pelo usuario foi ${grade.stars}, que bom que gostou`);
            case 5:
                return console.log(`a nota dada pelo usuario foi ${grade.stars}, o usuario amooou!`);
        }
    }
    else if (!('stars' in grade))
        return console.log('adicione uma nota');
    if (typeof grade === 'undefined')
        return console.log('deu como se nao tivesse passado nada');
}
const notaVazia = {};
assignReview(notaVazia);
const nota = { stars: 5 }; //i created a object type
assignReview(nota);
const mani = 2;
