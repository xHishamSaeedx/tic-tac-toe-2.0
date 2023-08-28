var turn = document.getElementById("turn"),
  boxes = document.querySelectorAll("#main div"),
  X_or_O = 0;

var moves = 0;
var count = 0;
var check = 0;

function selectWinnerBoxes(b1, b2, b3) {
  b1.classList.add("win");
  b2.classList.add("win");
  b3.classList.add("win");
  turn.innerHTML = b1.innerHTML + " is a winner";
  turn.style.fontSize = "40px";
}

function getWinner() {
  var box1 = document.getElementById("box1"),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),
    box4 = document.getElementById("box4"),
    box5 = document.getElementById("box5"),
    box6 = document.getElementById("box6"),
    box7 = document.getElementById("box7"),
    box8 = document.getElementById("box8"),
    box9 = document.getElementById("box9");

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  )
    selectWinnerBoxes(box1, box2, box3);
  else if (
    box4.innerHTML !== "" &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  )
    selectWinnerBoxes(box4, box5, box6);
  else if (
    box7.innerHTML !== "" &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  )
    selectWinnerBoxes(box7, box8, box9);
  else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  )
    selectWinnerBoxes(box1, box4, box7);
  else if (
    box2.innerHTML !== "" &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  )
    selectWinnerBoxes(box2, box5, box8);
  else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  )
    selectWinnerBoxes(box3, box6, box9);
  else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  )
    selectWinnerBoxes(box1, box5, box9);
  else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  )
    selectWinnerBoxes(box3, box5, box7);
  else if (
    box1.innerHTML !== "" &&
    box2.innerHTML !== "" &&
    box3.innerHTML !== "" &&
    box4.innerHTML !== "" &&
    box5.innerHTML !== "" &&
    box6.innerHTML !== "" &&
    box7.innerHTML !== "" &&
    box8.innerHTML !== "" &&
    box9.innerHTML !== ""
  ) {
    moves = 0;
    // Add an event listener to track moves on all boxes
    boxes.forEach((box) => {
      box.addEventListener("click", original);
    });

    if (X_or_O % 2 === 0) {
      turn.innerHTML = "O remove 2 pieces";
    } else if (X_or_O % 2 === 1) {
      turn.innerHTML = "X remove 2 pieces";
    }

    for (i = 0; i < boxes.length; i++) {
      boxes[i].onclick = function () {
        if (X_or_O % 2 === 0) {
          if (this.innerHTML === "X") {
            console.log(X_or_O);
            this.innerHTML = "";
            moves++;
            count += 1;
            if (check === 0) {
              if (count === 2) {
                X_or_O += 1;
                turn.innerHTML = "O Remove 3 pieces";
                count = 0;
                check = 1;
              }
            } else if (check === 1) {
              if (count === 3) {
                X_or_O += 1;
                turn.innerHTML = "O Remove 2 pieces";
                count = 0;
                check = 0;
              }
            }
          }
        } else if (X_or_O % 2 === 1) {
          if (this.innerHTML === "O") {
            console.log(X_or_O);
            this.innerHTML = "";
            moves++;
            count += 1;
            if (check === 0) {
              if (count === 2) {
                X_or_O += 1;
                turn.innerHTML = "X Remove 3 pieces";
                count = 0;
                check = 1;
              }
            } else if (check === 1) {
              if (count === 3) {
                X_or_O += 1;
                turn.innerHTML = "X Remove 2 pieces";
                count = 0;
                check = 0;
              }
            }
          }
        }
      };
    }
  }
}

var i = 0;

for (i = 0; i < boxes.length; i++) boxes[i].onclick = originalsetting;

document.getElementById("replay").addEventListener("click", replay);

function replay() {
  for (i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("win");
    boxes[i].innerHTML = "";
    turn.innerHTML = "Play";
    turn.style.fontSize = "25px";
  }
}

function original() {
  // Check if the desired number of moves is reached
  if (moves === 5) {
    // Change the .onclick function for all boxes
    moves = 0;
    if (X_or_O % 2 === 0) {
      turn.innerHTML = "X Turn Now";
    } else if (X_or_O % 2 === 1) {
      turn.innerHTML = "O Turn Now";
    }

    for (i = 0; i < boxes.length; i++) {
      boxes[i].onclick = originalsetting;
    }

    boxes.forEach((box) => {
      box.removeEventListener("click", original);
    });
  }
}

function originalsetting() {
  if (this.innerHTML !== "X" && this.innerHTML !== "O") {
    if (X_or_O % 2 === 0) {
      console.log(X_or_O);
      this.innerHTML = "X";
      turn.innerHTML = "O Turn Now";
      getWinner();
      X_or_O += 1;
    } else {
      console.log(X_or_O);
      this.innerHTML = "O";
      turn.innerHTML = "X Turn Now";
      getWinner();
      X_or_O += 1;
    }
  }
}
