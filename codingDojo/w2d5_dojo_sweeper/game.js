var theDojo = [[1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
[3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
[5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
[2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
[6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
[0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
[0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
[2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
[5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
[9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for (var i = 0; i < theDojo.length; i++) {
    for (var j = 0; j < theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  console.log(i, j)
  if (isBetween(i, j)) total = between(i, j)
  else if (isFirstRow(i)) total = firstRow(i, j)
  else if (isLastRow(i)) total = lastRow(i, j)
  else if (isFirstColumn(j)) total = firstColumn(i, j)
  else total = lastColumn(i, j)
  element.innerText = total
  if (isFirstRow(i)) total = firstRow(i, j)
}

function isBetween(i, j) {
  if (i > 0 && i < 9 && j > 0 && j < 9) {
    return true
  } else {
    return false
  }
}

function isFirstRow(i) {
  if (i == 0) return true
  else return false
}

function isLastRow(i) {
  if (i == 9) return true
  else return false
}

function isFirstColumn(j) {
  if (j == 0) return true
  else return false
}

function isLastColumn(j) {
  if (j == 9) return true
  else return false
}

function between(i, j) {
  var topRow = 0
  var middleRow = 0
  var bottomRow = 0
  var total = 0
  var total = []
  topRow = theDojo[i - 1][j - 1] + theDojo[i - 1][j] + theDojo[i - 1][j + 1]
  middleRow = theDojo[i][j - 1] + theDojo[i][j + 1]
  bottomRow = theDojo[i + 1][j - 1] + theDojo[i + 1][j] + theDojo[i + 1][j + 1]
  total = topRow + middleRow + bottomRow
  return total
}

function firstRow(i, j) {
  var middleRow = 0
  var bottomRow = 0
  var total = 0
  middleRow = theDojo[i][j - 1] + theDojo[i][j + 1]
  bottomRow = theDojo[i + 1][j - 1] + theDojo[i + 1][j] + theDojo[i + 1][j + 1]
  total = middleRow + bottomRow
  return total
}

function lastRow(i, j) {
  var topRow = 0
  var middleRow = 0
  var total = 0
  topRow = theDojo[i - 1][j - 1] + theDojo[i - 1][j] + theDojo[i - 1][j + 1]
  middleRow = theDojo[i][j - 1] + theDojo[i][j + 1]
  total = topRow + middleRow
  return total
}

function firstColumn(i, j) {
  var topRow = 0
  var middleRow = 0
  var bottomRow = 0
  var total = 0
  topRow = theDojo[i - 1][j] + theDojo[i - 1][j + 1]
  middleRow = theDojo[i][j + 1]
  bottomRow = theDojo[i + 1][j] + theDojo[i + 1][j + 1]
  total = topRow + middleRow + bottomRow
  return total
}

function lastColumn(i, j) {
  var topRow = 0
  var middleRow = 0
  var bottomRow = 0
  var total = 0
  topRow = theDojo[i - 1][j - 1] + theDojo[i - 1][j]
  middleRow = theDojo[i][j - 1]
  bottomRow = theDojo[i + 1][j - 1] + theDojo[i + 1][j]
  total = topRow + middleRow + bottomRow
  return total
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);

