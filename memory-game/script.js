const gameContainer = document.getElementById("game");

let classNameArray = [];
let checkColorArray = [];
let numberOfClicks = 0
let clickHolder = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!

function handleCardClick(event) {
  if (event.target && checkColorArray.length < 2){
  classNameArray.push(event.target.className);
  event.target.style.backgroundColor = classNameArray.shift();
  let classHolder = event.target.className;
  checkColorArray.push(classHolder);
  if (checkColorArray[1] == 'selected'){
    checkColorArray[1] = checkColorArray[0];
      }
      else if (checkColorArray[0] == 'done' || checkColorArray[1] == 'done'){
      checkColorArray.pop()
        return
      }
  clickHolder += 1;
if(event.target.className != 'done'){
  event.target.className = "selected";
  }
if (checkColorArray.length == 2){
    let selectedCards = document.getElementsByClassName("selected");
    setTimeout(function(){
    if(checkColorArray[0] !== checkColorArray[1]){
      let temp1 = checkColorArray[0];
      let temp2 = checkColorArray[1];
      if(selectedCards[0].style.backgroundColor == checkColorArray[0] && selectedCards[1].style.backgroundColor == checkColorArray[1]){
        selectedCards[0].className = temp1+"1";
        selectedCards[0].className = temp2+"2";
      } else{       
         selectedCards[0].className =temp2+"2";
      selectedCards[0].className = temp1+"1";} 
      let reSelected = document.getElementsByClassName(checkColorArray[0]+'1');
      let reSelected2 = document.getElementsByClassName(checkColorArray[1]+'2');
      reSelected[0].style.backgroundColor = '';
      reSelected2[0].style.backgroundColor = '';
      reSelected[0].className = checkColorArray[0];
      reSelected2[0].className = checkColorArray[1];
      checkColorArray = [];
          }
          else if (checkColorArray.length == 2){
            let classNameResetOne = checkColorArray[0];
            console.log(classNameResetOne);
            if (selectedCards.length == 2){
              selectedCards[0].className = 'done';
              selectedCards[0].className = 'done';
              checkColorArray = [];
            }
            else {
              if(checkColorArray[0] == 'done'){
                return
                }
              selectedCards[0].style.backgroundColor = checkColorArray[0];
              checkColorArray.pop();
            }
          }
        }, 1000)
  }
  };
 


// event.target.addEventListener('click',handleCardClick);
}


// when the DOM loads
createDivsForColors(shuffledColors);
