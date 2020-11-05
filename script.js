function initGame(sec){

  //Genera e visualizza  5 numeri casuali
  var newArray = (arrayGenerator(5,100))

  console.log(newArray)
  newArray.forEach(function(element){
    $(".given-num-list").append("<li>" + element +"</li>")
  })

  var time = sec*1000
  //Nasconde i numeri visualizzati
  setTimeout(hiderNums, time);

  //Avvia il conto alla rovescia
  backCounter(3,".count-down")

  //Nasconde il Count-Down
  setTimeout(hiderBCounter, time);

  return newArray
}

var gameArray = initGame(5)

//Array dove verranno memorizzati i numeri giocati
var yourNumArray=[]

//Genera la plancia di gioco
dashBoardGenerator(100, ".dashboard" )


//Azione gioca
function play(inputNum){

  inputNum= parseInt(inputNum)

  if(yourNumArray.length== 5){

    console.log(yourNumArray)
    arrayComparator(yourNumArray , gameArray)
  }

  console.log(inputNum)

  yourNumArray.push(inputNum)
  // console.log(yourNumArray)

  console.log(isNumberInArray(inputNum, gameArray))

}




// function isNumberInArray(num,numArray){
//   for(var i=0; i < numArray.length;i++){
//     if (num===numArray[i]){
//       return true
//     }
//   }
// }



//setInterval(,1000)

// var timeInSeconds = 3
//
// $(".count-down").text(timeInSeconds)
//
// var interval =setInterval(function(){
//   timeInSeconds --;
//   $(".count-down").text(timeInSeconds),1000;
// })

// setTimeout(function(){
//   clearInterval(interval)
// },3000)

//ogni secondo deve decrementare e stampare di uno


// while (timeToGo>=0){
// setInterval(function(){
//   timeToGo--;
//   $(".count-down").text(timeToGo)
// },1000)

// function hello(){
//   console.log("hello")
// }
//
// setInterval(hello,1000)



//setTimeout(myfunction,2000

// function hello(){
//   console.log("hello")
// }

//ritarda l'esecusione della funzione in ARG del tempo indicato
//setTimeout(hello,2000)

//setInterval
//esegue la funzione all'infinito ogni tot tempo
//setInterval(hello,-1000)
//
// function randomOnConsole(){
// console.log(Math.random())
// }
//
// setInterval(randomOnConsole,1000)

// va ad interrompere
// clearInterval()
