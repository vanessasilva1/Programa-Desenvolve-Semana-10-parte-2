const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)

// mais de um array

const arrayOriginal1 = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat2 = arrayOriginal1.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat2)
console.log(arrayOriginal1)

//Como um último teste, vamos ver o que acontece se um dos parâmetros for um array com dois elementos, um número e um array:
const arrayOriginal2 = [50, 60, 70]
const arrayConcat3 = arrayOriginal2.concat([80, [90, 100]])

console.log(arrayConcat3)
console.log(arrayOriginal2)