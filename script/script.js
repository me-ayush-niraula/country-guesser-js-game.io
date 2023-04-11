"use strict";
// array with country database
let country = [
  ["nepal", "kathmandu", "Mt.Everest", "asia", "images/nepalFlag.jpg"],
  ["india", "dehli", "Taj Mahal", "asia", "images/indiaFlag.jpg"],
  ["bhutan", "thimpu", "Happiness Index", "asia", "images/bhutanFlag.jpg"],
  ["pakistan", "islamabad", "Mt. K2", "asia", "images/pakistanFlag.jpg"],
  ["maldives", "male", "Islands", "asia", "images/maldivesFlag.jpg"],
  ["srilanka", "colombo", "cinnamon", "asia", "images/srilankaFlag.jpg"],
  [
    "bangladesh",
    "dhaka",
    "Land Of Rivers",
    "asia",
    "images/bangladeshFlag.jpg",
  ],
  ["afganistan", "kabul", "pomegranates", "asia", "images/afganistanFlag.jpg"],
];
// constant values
let score = 20;
// generating random secret country
let logic = Math.trunc(Math.random() * 8);
let secretCountry = country[logic][0];
let countryCapital = country[logic][1];
let countryFamousFor = country[logic][2];
let countryContinent = country[logic][3];
let countryImage = country[logic][4];

console.log(secretCountry);
// guess button linking with the input value
document.querySelector(".guessButton").addEventListener("click", function () {
  let inputtedCountry = document.querySelector("input").value;
  let inputtedCountry1 = inputtedCountry.toLowerCase();
  //   if correct
  if (secretCountry === inputtedCountry1) {
    document.querySelector(".hint").textContent = "You are Right!!😊";
    // calling the confetti
    confetti.start();
    greenScreen();
  }
  //   if nothing is typed
  else if (inputtedCountry1 === "") {
    document.querySelector(".hint").textContent = "Please insert a Country🗺";
  }
  //   if input is wrong
  else {
    document.querySelector(".hint").textContent = "You are Wrong❌";
    decreaseScore();
  }
});

// reveal buttons

document
  .querySelector(".famousRevealButton")
  .addEventListener("click", function () {
    document.querySelector(".famousRevealButton").textContent =
      countryFamousFor;
    decreaseScore();
    decreaseScore();
  });
document
  .querySelector(".continentRevealButton")
  .addEventListener("click", function () {
    document.querySelector(".continentRevealButton").textContent =
      countryContinent;
    decreaseScore();
  });
document
  .querySelector(".capitalRevealButton")
  .addEventListener("click", function () {
    document.querySelector(".capitalRevealButton").textContent = countryCapital;
    decreaseScore();
    decreaseScore();
    decreaseScore();
  });

//   score logic
document.querySelector(".realScore").textContent = score;
function decreaseScore() {
  score--;
  document.querySelector(".realScore").textContent = score;
  if (score === 0) {
    document.querySelector(".hint").tex;
  }
}

//picture reveal
document
  .querySelector(".pictureRevealButton")
  .addEventListener("click", function () {
    picture();
    decreaseScore();
    decreaseScore();
    decreaseScore();
    decreaseScore();
    decreaseScore();
  });
// picture
function picture() {
  var pic = country[logic][4];
  document.querySelector(".pictureSelect").src = pic.replace();
}

//greenScreen
function greenScreen() {
  document.querySelector("body").style.background = "rgba(0, 255, 0, 0.466)";
}
