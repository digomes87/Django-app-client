let myVar = 'global'
myOtherVar = 'globalToo'


function MyFunction() {
  myVar = 'local'
  return myVar
}

function MyOtherFunction() {
  myOtherVar = 'localToo'
  return myOtherVar
}


function condicao(num){
  if(num == 1){
    console.log("Numero é igua;")
  }else{
    console.log('Errorroroororor')
  }
}

// console.log(myVar)
// console.log(myOtherVar)
// console.log(MyFunction)
// console.log(MyOtherFunction)
console.log(condicao(2))
