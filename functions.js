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

//Nasconde i numeri generati casualmente
function hiderNums(){
  $(".given-num-list").toggle()
}

//Fa partire un countDown e lo stampa in un determinato elementohtml
function backCounter(sec,htmlEl){
  var timeToGo = sec;
  $(htmlEl).text(timeToGo)

  function countDown(){
    timeToGo--
    $(htmlEl).text(timeToGo)
    console.log(timeToGo)
  }

  var counter = setInterval(countDown,1000)

  setTimeout(function(){clearInterval(counter)},(sec*1000+1000))
}

//Nasconde il countDown
function hiderBCounter(){
  $(".count-down").toggle()
}
