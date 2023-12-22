

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