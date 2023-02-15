//console.log(document.getElementById("count-el").innerText )
// add the set timer here to see 
//document.getElementById("count-el").innerText = 2;
//console.log(document.getElementById("count-el").innerText )
// let count = 0
// console.log(count)

//1. Create a variable, myAge, and set its value to yoru age 
//let myAge = 36
//2. Log the myAge variable to the console
//console.log(myAge)
// let firstBatch = 5;
// let secondBatch = 10;  

// let count = firstBatch + secondBatch;
// console.log(count)

//1. 1 human years ~ dog years challenge 
// let myAge = 35;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio; 
// console.log(myDogAge)


// let count = 50
// console.log(count)

// let bonusPoint = count + 50 
// console.log(bonusPoint)

// bonusPoint = bonusPoint  - 75 
// console.log(bonusPoint)


// bonusPoint = bonusPoint  + 45
// console.log(bonusPoint)


// initialize the count  as 0 
// listen for clicks on the increment butto
// increment the count variable when the buttn is hit
// chnage the count-el in the html

// function increment() {
//   console.log("the button was clicked")
//  }

//  increment()

// setting up the first race 
// function countdown() {
// console.log(5)

// console.log(4)

// console.log(3)
// }
// countdown()

// // second race 
// countdown()


// create a function  that logs out the number 42 to the console 

// function myLogger(){
//     console.log(42)
// }
// myLogger()


// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// //create a funtion that logges out the total sum 

// function logedLapTime(){
//    // console.log(lap1)
//    // console.log(lap2)
//     console.log(lap1+ lap2+lap3)  //either way is the same 
//     let allSum = lap1+ lap2+lap3
//     console.log(allSum)
// }
// logedLapTime()


// let lapsCompleted = 0 

// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1
    
// }
// incrementLap()

// console.log(lapsCompleted)


// let funds = 2;

// while(funds > 0 && funds < 5){
//     funds = funds  + 1;
//     let answerFunds = funds
//     console.log(funds)
// }

// the following function is the same as before except that it 
//uses a while loop instead of having to mannually run each time 
// let lapsCompleted2 = 0
// while(lapsCompleted2 >= 0 && lapsCompleted2 <= 2){
//     lapsCompleted2 = lapsCompleted2 + 1
//     console.log(lapsCompleted2)
    
// }

let countEl = document.getElementById("count-el") 

console.log(countEl)

let count = 0;

//console.log(count)

// initialize the count  as 0 
// listen for clicks on the increment butto
// increment the count variable when the buttn is hit
// change the count-el in the html

function increment() {
  //console.log("the button was clicked")
  count = count + 1;
  countEl.innerText = count
  //console.log(count)
 }
// next vid
// 1. Create  a function, save(), which logs the count when its called 

// see the index html for this step 

function save(){

    console.log(count)
}

 save()