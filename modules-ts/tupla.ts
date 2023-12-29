interface segundaPosicaoTupla { // the object that i'll join in scnd position of array, must to have this method
    numberStringArray() : (number | string) []
}

type tuplaMuchoLoka = [string, number, segundaPosicaoTupla]

export default tuplaMuchoLoka // so uma, por isso irei usar o defualt