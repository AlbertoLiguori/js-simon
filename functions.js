//Generatore un numero casuale in un determinato intervallo
function randomBetween(min, max){
  var random = parseInt(Math.floor((Math.random()*(max - min)) + min + 1));
  return random;
}

//Funzione comparazione di un numero in un Array
function isNumberInArray(num,numArray){
  for(var i=0; i < numArray.length;i++){
    if (num===numArray[i]){
      return true
    }
  }
}

//Genera un array i cui elementi sono numeri casuali in un determinato range
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
  $(".given-num-list").slideToggle(400)
}

//Fa partire un countDown e lo stampa in un determinato elemento html
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
  $(".count-down").slideToggle(400)
}

//Genera un Array di "num" numeri ordinati
function ordinateArray(num){
  var anArray=[]
  for(i=1; i<=num; i++){
    anArray.push(i)
  }
  return(anArray)
}

//Genera bottoni da un array e li "appende" ad un elemento html
function htmlElGen(anArray , htmlEl){
  // htmlEl.innerHTML=""
  for (i=0; i< anArray.length; i++){
    $(htmlEl).append(`<li> <button onclick="play(this.value)" id="`  +i+ `" value="` + (i+1) + `">` + anArray[i] + `</button> </li>`)
  }
}

//Genera la Dashboard di "num" pulsanti e li appende ad un elemento html
function dashBoardGenerator(num, htmlEl){

  var anArray = ordinateArray(num)
  htmlElGen(anArray, htmlEl)

}

//Compara gli elementi di due array e resituisce gli elementi in comune

function arrayComparator(anArray1,anArray2){

  var goodNumsArray=[]
  var badNumsArray=[]

  anArray1.forEach(function (element){
    if (isNumberInArray(element, anArray2)){
      goodNumsArray.push(element)
    }else{
      badNumsArray.push(element)
    }
  })
  return[[goodNumsArray],[badNumsArray]]
}
