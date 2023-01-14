// For Play Button

function play(){
  // dice 1

  let randomNumber1 = Math.floor(Math.random() * 6)+1; // get random no. b/w 1-6
  let randomDice1Image = "dice" + randomNumber1 + ".png"; // connect random no. to dice image no.
  let image1Source = "images/" + randomDice1Image; // images/dice1-6.png

  let image1 = document.querySelectorAll("img")[0]; // select element
  image1.setAttribute("src", image1Source); // change source


  // dice 2

  let randomNumber2 = Math.floor(Math.random()*6)+1;
  let randomDice2Image = "dice" + randomNumber2 + ".png";
  let image2Source = "images/" + randomDice2Image;

  let image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", image2Source);

  // Winner

  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else{
    document.querySelector("h1").innerHTML = "It's a tie";
  }
}

// For Reset button

function reset(){
  document.querySelector("h1").innerHTML = "Welcome !!";
  let dice = 6;
  let imgSrc = "images/" + "dice" + dice + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", imgSrc);
  document.querySelectorAll("img")[1].setAttribute("src", imgSrc);
}
