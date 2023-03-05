
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





// practice for  part1: the counter App

console.log("Salam Agian")


//PRACTICE 

function purchase(){
  let countStr  = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0 


}