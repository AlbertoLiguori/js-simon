//Genera e visualizza  5 numeri casuali
var newArray = (arrayGenerator(5,10))

console.log(newArray)
newArray.forEach(function(element){
  $(".given-num-list").append("<li>" + element +"</li>")
})

//Nasconde i numeri visualizzati
setTimeout(hider, 3000);










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
