function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

var arr = ["0", "1", "2", "3"];
var arr1 = ["yes", "no"];

function startGame() {
  document.getElementById("start").style.display = "none";
  document.getElementById("showResult").style.display = "block";
  document.getElementById("ptBtn").style.display = "block";
  shuffle(arr);
  shuffle(arr1);
  console.log(arr);
  userMove();
}
var user1Move;
var user2Move;
var user3Move;
var user4Move;

var caughtBy;
var notCaughtBy;

var thief;

function thiefIsP4() {
  document.getElementById("chorP2").style.display = "none";
  document.getElementById("chorP3").style.display = "none";
  document.getElementById("guessResult").style.display = "block";
  if (user4Move != "c") {
    document.getElementById("guessResult").innerText =
      "Wrong Guess! Player 4 is not Chor ";
  } else {
    document.getElementById("guessResult").innerText =
      "Right Guess! Player 4 is  Chor ";
  }
  thief = "u4";
  //   catchThief();
  // pointAllocation();
}
function thiefIsP2() {
  document.getElementById("chorP4").style.display = "none";
  document.getElementById("chorP3").style.display = "none";
  document.getElementById("guessResult").style.display = "block";
  if (user2Move != "c") {
    document.getElementById("guessResult").innerText =
      "Wrong Guess! Player 2 is not Chor ";
  } else {
    document.getElementById("guessResult").innerText =
      "Right Guess! Player 2 is  Chor ";
  }
  thief = "u2";
  //   catchThief();
  // pointAllocation();
}
function thiefIsP3() {
  document.getElementById("chorP2").style.display = "none";
  document.getElementById("chorP4").style.display = "none";
  document.getElementById("guessResult").style.display = "block";
  if (user3Move != "c") {
    document.getElementById("guessResult").innerText =
      "Wrong Guess! Player 3 is not Chor ";
  } else {
    document.getElementById("guessResult").innerText =
      "Right Guess! Player 3 is  Chor ";
  }
  thief = "u3";
  //   catchThief();
  // pointAllocation();
}

function userMove() {
  if (arr[0] == 0) {
    document.getElementById("raja").style.display = "block";
    document.getElementById("showResult").innerText = "Player 1 is Raja";
    user1Move = "r";
  } else if (arr[0] == 1) {
    document.getElementById("mantri").style.display = "block";
    user1Move = "m";
  } else if (arr[0] == 2) {
    document.getElementById("chor").style.display = "block";
    user1Move = "c";
  } else if (arr[0] == 3) {
    document.getElementById("shipahi").style.display = "block";
    document.getElementById("userIsShipahi").style.display = "block";
    user1Move = "s";
  }
  if (arr[1] == 0) {
    document.getElementById("showResult").innerText = "Player 2 is Raja";
    user2Move = "r";
  } else if (arr[1] == 1) {
    user2Move = "m";
  } else if (arr[1] == 2) {
    user2Move = "c";
  } else if (arr[1] == 3) {
    user2Move = "s";
  }

  if (arr[2] == 0) {
    document.getElementById("showResult").innerText = "Player 3 is Raja";
    user3Move = "r";
  } else if (arr[2] == 1) {
    user3Move = "m";
  } else if (arr[2] == 2) {
    user3Move = "c";
  } else if (arr[2] == 3) {
    user3Move = "s";
  }

  if (arr[3] == 0) {
    document.getElementById("showResult").innerText = "Player 4 is Raja";
    user4Move = "r";
  } else if (arr[3] == 1) {
    user4Move = "m";
  } else if (arr[3] == 2) {
    user4Move = "c";
  } else if (arr[3] == 3) {
    user4Move = "s";
  }
  document.getElementById("new").style.display = "block";

  console.log(user1Move, user2Move, user3Move, user4Move);
  //   pointAllocation();
  //   catchThief();
}

function newGame() {
  document.getElementById("start").style.display = "block";
  document.getElementById("new").style.display = "none";
  document.getElementById("raja").style.display = "none";
  document.getElementById("mantri").style.display = "none";
  document.getElementById("shipahi").style.display = "none";
  document.getElementById("chor").style.display = "none";
  document.getElementById("showResult").style.display = "none";
  document.getElementById("userIsShipahi").style.display = "none";
  document.getElementById("ptBtn").style.display = "none";
  document.getElementById("pointBox").style.display = "none";
  document.getElementById("chorP2").style.display = "block";
  document.getElementById("chorP3").style.display = "block";
  document.getElementById("chorP4").style.display = "block";
  clear();
}
function clear() {
  document.getElementById("p1").innerText = "";
  document.getElementById("p2").innerText = "";
  document.getElementById("p3").innerText = "";
  document.getElementById("p4").innerText = "";
  document.getElementById("showResult").innerText = "";
  document.getElementById("guessResult").innerText = "";
}

function pointAllocation() {
  //   catchThief();
  if (user1Move == "r") {
    document.getElementById("p1").innerText = "1000";
  } else if (user1Move == "m") {
    document.getElementById("p1").innerText = "800";
  } else if (user1Move == "c") {
    if (
      notCaughtBy == "nu1" ||
      notCaughtBy == "nu2" ||
      notCaughtBy == "nu3" ||
      notCaughtBy == "nu4"
    ) {
      document.getElementById("p1").innerText = "500";
    } else if (
      caughtBy == "u1" ||
      caughtBy == "u2" ||
      caughtBy == "u3" ||
      caughtBy == "u4"
    ) {
      document.getElementById("p1").innerText = "000";
    }
  } else if (user1Move == "s") {
    if (caughtBy == "u1") {
      //   document.getElementById("p1").innerText = "500";
    } else {
      //   document.getElementById("p1").innerText = "000";
    }
  }

  if (user2Move == "r") {
    document.getElementById("p2").innerText = "1000";
  } else if (user2Move == "m") {
    document.getElementById("p2").innerText = "800";
  } else if (user2Move == "c") {
    if (
      notCaughtBy == "nu1" ||
      notCaughtBy == "nu2" ||
      notCaughtBy == "nu3" ||
      notCaughtBy == "nu4"
    ) {
      document.getElementById("p2").innerText = "500";
    } else if (
      caughtBy == "u1" ||
      caughtBy == "u2" ||
      caughtBy == "u3" ||
      caughtBy == "u4"
    ) {
      document.getElementById("p2").innerText = "000";
    }
  } else if (user2Move == "s") {
    if (caughtBy == "u2") {
      document.getElementById("p2").innerText = "500";
    } else if (notCaughtBy == "nu2") {
      document.getElementById("p2").innerText = "000";
    }
  }

  if (user3Move == "r") {
    document.getElementById("p3").innerText = "1000";
  } else if (user3Move == "m") {
    document.getElementById("p3").innerText = "800";
  } else if (user3Move == "c") {
    if (
      notCaughtBy == "nu1" ||
      notCaughtBy == "nu2" ||
      notCaughtBy == "nu3" ||
      notCaughtBy == "nu4"
    ) {
      document.getElementById("p3").innerText = "500";
    } else if (
      caughtBy == "u1" ||
      caughtBy == "u2" ||
      caughtBy == "u3" ||
      caughtBy == "u4"
    ) {
      document.getElementById("p3").innerText = "000";
    }
  } else if (user3Move == "s") {
    if (caughtBy == "u3") {
      document.getElementById("p3").innerText = "500";
    } else if (notCaughtBy == "nu3") {
      document.getElementById("p3").innerText = "000";
    }
  }

  if (user4Move == "r") {
    document.getElementById("p4").innerText = "1000";
  } else if (user4Move == "m") {
    document.getElementById("p4").innerText = "800";
  } else if (user4Move == "c") {
    if (
      notCaughtBy == "nu1" ||
      notCaughtBy == "nu2" ||
      notCaughtBy == "nu3" ||
      notCaughtBy == "nu4"
    ) {
      document.getElementById("p4").innerText = "500";
    } else if (
      caughtBy == "u1" ||
      caughtBy == "u2" ||
      caughtBy == "u3" ||
      caughtBy == "u4"
    ) {
      document.getElementById("p4").innerText = "000";
    }
  } else if (user4Move == "s") {
    if (caughtBy == "u4") {
      document.getElementById("p4").innerText = "500";
    } else if (notCaughtBy == "nu4") {
      document.getElementById("p4").innerText = "000";
    }
  }
}

function catchThief() {
  if (user1Move == "s") {
    if (thief == "u2" && user2Move == "c") {
      console.log("Chor caught by User 1");
      document.getElementById("p1").innerText = "500";
      document.getElementById("p2").innerText = "000";
      caughtBy = "u1";
    } else if (thief == "u2" && user2Move != "c") {
      console.log("Chor not caught by User 1");
      document.getElementById("p1").innerText = "000";
      notCaughtBy = "nu1";
    } else if (thief == "u3" && user3Move == "c") {
      console.log("Chor caught by User 1");
      document.getElementById("p1").innerText = "500";
      document.getElementById("p3").innerText = "000";
      caughtBy = "u1";
    } else if (thief == "u3" && user3Move != "c") {
      console.log("Chor not caught by User 1");
      document.getElementById("p1").innerText = "000";
      notCaughtBy = "nu1";
    } else if (thief == "u4" && user4Move == "c") {
      console.log("Chor caught by User 1");
      document.getElementById("p1").innerText = "500";
      document.getElementById("p4").innerText = "000";
      caughtBy = "u1";
    } else if (thief == "u4" && user4Move != "c") {
      console.log("Chor not caught by User 1");
      document.getElementById("p1").innerText = "000";
      notCaughtBy = "nu1";
    }
  }
  if (user2Move == "s") {
    if (arr1[0] == "yes") {
      console.log("Chor caught by User 2");
      caughtBy = "u2";
    } else if (arr1[0] == "no") {
      console.log("Chor not caught by User 2");
      notCaughtBy = "nu2";
    }
  } else if (user3Move == "s") {
    if (arr1[0] == "yes") {
      console.log("Chor caught by User 3");
      caughtBy = "u3";
    } else if (arr1[0] == "no") {
      console.log("Chor not caught by User 3");
      notCaughtBy = "nu3";
    }
  } else if (user4Move == "s") {
    if (arr1[0] == "yes") {
      console.log("Chor caught by User 4");
      caughtBy = "u4";
    } else if (arr1[0] == "no") {
      console.log("Chor not caught by User 4");
      notCaughtBy = "nu4";
    }
  }
  //   pointAllocation();
}
function showPtsBtn() {
  document.getElementById("pointBox").style.display = "block";
  document.getElementById("ptBtn").style.display = "none";
  catchThief();
  pointAllocation();
}
function isToBack() {
  document.getElementById("pointBox").style.display = "none";
  document.getElementById("ptBtn").style.display = "block";
}
