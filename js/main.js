// let myVar = 'global'
// myOtherVar = 'globalToo'


// function MyFunction() {
//   myVar = 'local'
//   return myVar
// }

// function MyOtherFunction() {
//   myOtherVar = 'localToo'
//   return myOtherVar
// }


// function condicao(num){
//   if(num == 1){
//     console.log("Numero é igua;")
//   }else{
//     console.log('Errorroroororor')
//   }
// }

// console.log(myVar)
// console.log(myOtherVar)
// console.log(MyFunction)
// console.log(MyOtherFunction)
// console.log(condicao(2))


let obj = new Object()

obj = {
  name: {
    nome: 'Diego',
    sobrenome: 'Go'
  },
  address: {
    cidade: 'Toledo',
    estado: 'Parana',
    pais: 'Brasil'
  },
  idade: 32
}

function Book(title, pages, isbn){
  this.title = title
  this.pages = pages
  this.isbn = isbn
}

const arrowFunction = r => {
  const PI = 3.14
  const area = PI * r * r
  return area
}

console.log(arrowFunction(3))


let bookA = new Book('Jogos de azar', 230, 'naosei')
console.log(bookA.title)
console.log(bookA)
console.log(bookA.pages)
