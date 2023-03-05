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

let saveEl = document.getElementById("save-el") 
console.log(saveEl)

let purchaseEl = document.getElementById("purchase-el") 
console.log(purchaseEl)


let count = 0;

// initialize the count  as 0 
// listen for clicks on the increment butto
// increment the count variable when the buttn is hit
// change the count-el in the html

function increment() {
  //console.log("the button was clicked")
    count += 1 
    countEl.textContent = count

  }
// next vid1. Create  a function, save(), which logs the count when its called 


// function save(){
//     let countStr  = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0 


//  }

 //console.log(save)
// let username = "per"  
// console.log(username)






// let messageVariable = "You have three new notifications"
// //console.log(messageVariable + "," + " " + username +  "!")


// let messageToUser = messageVariable + "," + " " + username +  "!";
// console.log(messageToUser)

// let Name = "Shukri";
// let greeting = "Salam, my name is";

// let myGreeting = greeting + " " + Name;
// console.log(myGreeting)


// let points = 14; 
// let bonusPoints = "10";

// let totalPoints = points + bonusPoints;
// console.log(totalPoints)

// console.log(4+5)
// console.log("4" + "5")
// console.log("5" + 1)
// console.log(654 + "654")


// Grab the Welcome paragrapg and store it in a variable called "welcomeEl"

// let WelcomeEl = document.getElementById("Welcome-el") 
// console.log(WelcomeEl)


// Create two variables (name and greeting) that contains your name and the greetinf 

// let Name = "Shukri";
// console.log(Name);

// let greeting = "Salam, my name is";

// let myGreeting = greeting + " " + Name;
// console.log(myGreeting)

// WelcomeEl.innerText = myGreeting;

// WelcomeEl.innerText   +=  "👋🏾"


// practice for  part1: the counter App

// Create two variables, firstName and lastName 

let firstName = "Tasnim";
let lastName = "Adan";
let fullName = firstName + " " + lastName;
console.log(fullName)

// Create a function that logs out "Hi there, Khadija!" when called
let Name = "khadija";
let greeting = "Hi there";
function funGreeting(){
  let newGreeting = greeting + "," + Name + "!";
  console.log(newGreeting)
}
funGreeting()

// incrementing and decrementing: 

let myPoints = 3;

function add3Points(){
  myPoints += 3;
  //console.log(myPoints)
  // myPoints = 3 

}


function remove1Point(){

  myPoints -=1;
  // console.log(myPoints)

}

// add3Points()
// add3Points()
// add3Points()


// remove1Point()
// remove1Point()
// console.log(myPoints)


// let lapsCompleted2 = 0
// while(myPoints >= 3 && myPoints < 10 ){
      
//       myPoints += 3;
//       myPoints -=1;
      
     
    
//  }

//  console.log(myPoints)

//  console.log("2" + 2)
//  console.log("My points are" + ": " + 2) //this is the sentance  plus : and 2 
//  console.log(2 +2) // this is 4 
// console.log("11" + "22") //this is 1122 as two strings connected togather
// console.log(2 + "4") // this is 24

//when the user clicks the purchase button, render out
//"something went wrong, please try again" in the paragraph 
//that has id="error"

console.log("Salam Agian")


//PRACTICE 

function purchase(){
  let countStr  = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0 


}