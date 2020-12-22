/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
console.log("Yo");

//prevents wrong statement
var story = "0";
//Which game is in possession
var animalCrossing = false;
var doomEternal = false;
//If key is in possession
var key = false;
//If door has been tried
var tryDoor = false;

//-----------ALL FUNCTIONS FOR B1-----------
function buttonOne() {
  //Greet person
  if (story == "0") {
    document.querySelector("p").textContent = "You try greeting the person, but they're not responding.";
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("b2").style.visibility = "hidden";
    document.getElementById("b3").style.visibility = "visible";
  }
  //Death after picking Animal Crossing
  else if (story == "1") {
    document.querySelector("p").textContent = "As you leave the house with the copy of Animal Crossing, the person you saw earlier is walking up to you. Before you realize it, he attacks you to take the game from you.";
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("b2").style.visibility = "hidden";
    document.getElementById("b3").style.visibility = "visible";
    document.getElementById("b3").value = "Click to try again.";
    document.querySelector("img").src = "./images/gameover.png";
    animalCrossing = true;
  }
  //Man leaves
  else if (story == "2") {
    document.querySelector("p").textContent = "The man shrugs and leaves you alone.";
    document.getElementById("b1").value = "Search the rest of the beach.";
    document.getElementById("b2").value = "Leave the beach.";
    story = "3";
  }
  //Searching the beach
  else if (story == "3") {
    document.querySelector("p").textContent = "You walk around the beach, but don't find anything interesting.";
  }
  //Walking in village
  else if (story == "4.2") {
    document.querySelector("p").textContent = "You walk around in the village for a bit, until you see an overgrown house at the far edge of the village.";
    document.querySelector("img").src = "./images/village.png";
    document.getElementById("b1").value = "Ask the villagers about the house.";
    document.getElementById("b2").value = "Go to the house.";
    story = "4.1";
  }
  //Asking villagers
  else if (story == "4.1") {
    document.querySelector("p").textContent = "'You mean that old house? The owner left to go hunting a while back, but he never returned.'";
  }
  //Go back
  else if (story == "4.3") {
    document.querySelector("p").textContent = "You leave the beach and enter the forest. You find a village.";
    document.getElementById("b1").value = "Enter the village.";
    document.getElementById("b2").value = "Walk around the village.";
    story = "4.2";
  }
  //Try door
  else if (story == "6") {
    //Without key
    if (key == false) {
      document.querySelector("p").textContent = "The door is locked. Try to find a key.";
      tryDoor = true;
    }
    //With key
    else if (key == true) {
      document.querySelector("p").textContent = "You enter the house, inside you find a working pc.";
      document.querySelector("img").src = "./images/computer.png";
      document.getElementById("b1").style.visibility = "hidden";
      document.getElementById("b2").style.visibility = "hidden";
      document.getElementById("b3").style.visibility = "visible";
      story = "end";
      if(doomEternal == true){
        document.getElementById("b3").value = "Play Doom Eternal.";
      }
      else if (doomEternal == false) {
        document.getElementById("b3").value = "Start the pc";
      }
    }
  }
}
document.getElementById("b1").addEventListener("click", buttonOne);

//-----------ALL FUNCTIONS FOR B2-----------
function buttonTwo() {
  //Pick a game
  if (story == "0") {
    story = "1";
    document.querySelector("p").textContent = "The door is unlocked. Inside you find a copy of Animal Crossing and Doom Eternal. Which do you bring with you?";
    document.getElementById("b1").value = "Animal Crossing";
    document.getElementById("b2").value = "Doom Eternal";
    document.querySelector("img").src = "./images/house.png";
  }
  //Pick Doom Eternal
  else if (story == "1") {
    document.querySelector("p").textContent = "As you leave the house with the copy of Doom Eternal, the person you saw earlier is walking up to you. He sees the game in your hand and smiles. 'Doom Eternal wasn't that good.'";
    document.getElementById("b1").value = "'I'd like to try it anyways.'";
    document.getElementById("b2").value = "'Still better than Animal Crossing'";
    doomEternal = true;
    story = "2";
  }
  //Fight result
  else if (story == "2") {
    var math = Math.floor(Math.random() * 3);
    var fight = ["gameover", "win", "loss"];
    var result = fight[math];
    if (result == "gameover") {
      document.querySelector("p").textContent = "You pissed him off... Don't piss him off.";
      document.getElementById("b1").style.visibility = "hidden";
      document.getElementById("b2").style.visibility = "hidden";
      document.getElementById("b3").style.visibility = "visible";
      document.getElementById("b3").value = "Click to try again.";
      document.querySelector("img").src = "./images/gameover.png";
    } else if (result == "win") {
      document.querySelector("p").textContent = "The man got pissed and tried to attack you. Fortunately, you reacted quick enough and managed to knock him out.";
      document.getElementById("b1").value = "Search the rest of the beach.";
      document.getElementById("b2").value = "Leave the beach.";
      story = "3";
    } else if (result == "loss") {
      document.querySelector("p").textContent = "The man got pissed and tried to attack you. You reacted quick enough to knock him out, but you accidentally broke the game.";
      document.getElementById("b1").value = "Search the rest of the beach.";
      document.getElementById("b2").value = "Leave the beach.";
      doomEternal = false;
      story = "3";
    }
  }
  //Finding village
  else if (story == "3") {
    document.querySelector("p").textContent = "You leave the beach and enter the forest. You find a village.";
    document.querySelector("img").src = "./images/forest.png";
    document.getElementById("b1").value = "Enter the village.";
    document.getElementById("b2").value = "Circle the village.";
    story = "4.2";
  }
  //Finding overgrown house
  else if (story == "4.2") {
    document.querySelector("p").textContent = "You see an overgrown house in the distance. It's pretty far away from the village.";
    document.getElementById("b1").value = "Go back";
    document.getElementById("b2").value = "Go to the house";
    story = "4.3";
  }
  //Walking around village
  else if (story == "4.3" || story == "4.1") {
    document.querySelector("p").textContent = "You walk onto the porch of the overgrown house.";
    document.querySelector("img").src = "./images/overgrownHouse.png";
    document.getElementById("b1").value = "Try to open the door.";
    document.getElementById("b2").value = "Walk around the porch.";
    story = "6";
  }
  //Walking around porch
  else if (story == "6") {
    //Before trying door
    if (tryDoor == false) {
      document.querySelector("p").textContent = "You walk around the porch, but don't see anything interesting.";
    }
    //After trying door
    else if (tryDoor == true) {
      document.querySelector("p").textContent = "'Maybe I should try looking under the carpet'";
    }
  }
}
document.getElementById("b2").addEventListener("click", buttonTwo);

//-----------ALL FUNCTIONS FOR B3-----------
function buttonThree() {
  //Go back after greeting person
  if (story == "0") {
    document.querySelector("p").textContent = "You wake up on the beach. To your left you see a person sitting next to a campfire, to your right you see a house. Where do you go?";
    document.getElementById("b1").style.visibility = "visible";
    document.getElementById("b2").style.visibility = "visible";
    document.getElementById("b3").style.visibility = "hidden";
  }
  //Reload after death
  else if (animalCrossing == true || story == "2" || story == "goodEnding" || story == "badEnding") {
    window.location.reload();
  }
  //finish with Doom Eternal
  else if (story == "end" && doomEternal == true) {
    document.querySelector("p").textContent = "You spend the rest of the night playing Doom Eternal.";
    document.getElementById("b3").value = "You achieved the good ending! Click here to play again.";
    story = "goodEnding";
  }
  //Finish without Doom Eternal
  else if (story == "end" && doomEternal == false) {
    document.querySelector("p").textContent = "You don't have any games to play on the pc. You spend the rest of the night staring out the window.";
    document.getElementById("b3").value = "You achieved the bad ending. Click here to play again.";
    story = "badEnding";
  }
}


document.getElementById("b3").addEventListener("click", buttonThree);

//-----------Function for finding key-----------
function findKey() {
  //Find key
  if (tryDoor == true) {
    document.querySelector("img").src = "./images/key.png";
    document.querySelector("p").textContent = "You found the key!";
    key = true;
  }
}
document.querySelector("img").addEventListener("click", findKey);

// ---------------- OUDE CODE ----------------
// function houseOne() {
//   if (story == "0") {
//     story = "1";
//     document.querySelector("p").textContent = "The door is unlocked. Inside you find a copy of Animal Crossing and Doom Eternal. Which do you bring with you?";
//     document.getElementById("b1").value = "Animal Crossing";
//     document.getElementById("b2").value = "Doom Eternal";
//     document.querySelector("img").src = "./images/house.png";
//     console.log(story);
//   }
// }
// document.getElementById("b2").addEventListener("click", houseOne);
//
// function timer(){
//   setTimeout(function delay() {
//     if (story == "1") {
//       story = "2";
//       console.log(story);
//     }
//   }, 10);
// }
// https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
//
// document.getElementById("b2").addEventListener("click", timer);
//
// function person() {
//   if (story == "0") {
//     document.querySelector("p").textContent = "You try greeting the person, but they're not responding.";
//     document.getElementById("b1").style.visibility = "hidden";
//     document.getElementById("b2").style.visibility = "hidden";
//     document.getElementById("b3").style.visibility = "visible";
//   }
// }
// document.getElementById("b1").addEventListener("click", person);
//
// function wrong() {
//   if (story == "0") {
//     document.querySelector("p").textContent = "You wake up on the beach. To your left you see a person sitting next to a campfire, to your right you see a house. Where do you go?";
//     document.getElementById("b1").style.visibility = "visible";
//     document.getElementById("b2").style.visibility = "visible";
//     document.getElementById("b3").style.visibility = "hidden";
//   }
// }
// document.getElementById("b3").addEventListener("click", wrong);
//
// var animalCrossing = false;
// var doomEternal = false;
//
// function anmlCrssng() {
//   if (story == "2") {
//     document.querySelector("p").textContent = "As you leave the house with the copy of Animal Crossing, the person you saw earlier is walking up to you. Before you realize it, he attacks you to take the game from you.";
//     document.getElementById("b1").style.visibility = "hidden";
//     document.getElementById("b2").style.visibility = "hidden";
//     document.getElementById("b3").style.visibility = "visible";
//     document.getElementById("b3").value = "Game over, click to try again.";
//     animalCrossing = true;
//   }
// }
// document.getElementById("b1").addEventListener("click", anmlCrssng);
//
// function refreshPage() {
//   if (animalCrossing == true) {
//     window.location.reload();
//   }
// }
// document.getElementById("b3").addEventListener("click", refreshPage);
//
// function dmTrnl() {
//   if (story == "2") {
//     document.querySelector("p").textContent = "As you leave the house with the copy of Doom Eternal, the person you saw earlier is walking up to you. He sees the game in your hand and smiles. 'Doom Eternal wasn't that good.'";
//     document.getElementById("b1").value = "'I'd like to try it anyways.'";
//     document.getElementById("b2").value = "'Still better than Animal Crossing'";
//     doomEternal = true;
//     story = "3";
//   }
// }
// document.getElementById("b2").addEventListener("click", dmTrnl);
