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

    var result = arrayComparator(yourNumArray , gameArray)
    console.log(result[0])
    console.log(result[1])

    $(".good-result").append("I numeri che hai azzeccato sono:"+ result[0])
    $(".bad-result").append("Purtroppo i numeri che hai sbagliato sono:"+ result[1])
  }

  else{

  yourNumArray.push(inputNum)

  }

}
