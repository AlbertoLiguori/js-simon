//Genera e visualizza  5 numeri casuali
var newArray = (arrayGenerator(5,10))

console.log(newArray)
newArray.forEach(function(element){
  $(".given-num-list").append("<li>" + element +"</li>")
})

//Nasconde i numeri visualizzati
setTimeout(hider, 4000);

//Avvia il conto alla rovescia
backCounter(3,".count-down")







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
