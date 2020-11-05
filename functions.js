//Generatore un numero casuale in un determinato intervallo
function randomBetween(min, max){
  var random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
  return random;
}

//Funzione comparazione
function isNumberInArray(num,numArray){
  for(var i=0; i < numArray.length;i++){
    if (num===numArray[i]){
      return true
    }
  }
}

//Generatore di "elements" numeri casuali in un determinato range
function arrayGenerator(elements, range){
  var numArray=[]
    while (numArray.length < elements){
      var el = randomBetween(0, range)
      if (!(isNumberInArray(el, numArray))){
        numArray.push(el)
      }
    }
  return numArray
}

// Nasconde un elemento html

// function hider(htmlEl){
//   $(htmlEl).hide()
//}

//nasconde i numeri generati casualmente
function hider(){
  $(".given-num-list").toggle()
}
