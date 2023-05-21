// directions

// up right
// down right
// down left
// up left

// horse up right
// horse up left
// horse right up
// horse right down
// horse down right
// horse down left
// horse left up
// horse left down

// check next square:
//  is it on board ?
//  is there friend piece ?
//  is there enemy piece ?

const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export function upDirection(startingPosition, figure) {
  let possiblesUp = []
  function checkNext(currentPosition, figure) {
    let nextSquare = up(currentPosition, figure)
    // if (isOnBoard(nextSquare) && isNotFriend(nextSquare)) {
    if (isOnBoard(nextSquare)) {
      possiblesUp.push(nextSquare)
      checkNext(nextSquare, figure)
    }
  }
  checkNext(startingPosition, figure)
  return possiblesUp
}

export function downDirection(startingPosition, figure) {
  let possiblesUp = []
  function checkNext(currentPosition, figure) {
    let nextSquare = down(currentPosition, figure)
    // if (isOnBoard(nextSquare) && isNotFriend(nextSquare)) {
    if (isOnBoard(nextSquare)) {
      possiblesUp.push(nextSquare)
      checkNext(nextSquare, figure)
    }
  }
  checkNext(startingPosition, figure)
  return possiblesUp
}
export function leftDirection(startingPosition, figure) {
  let possiblesUp = []
  function checkNext(currentPosition, figure) {
    let nextSquare = left(currentPosition, figure)
    // if (isOnBoard(nextSquare) && isNotFriend(nextSquare)) {
    if (isOnBoard(nextSquare)) {
      possiblesUp.push(nextSquare)
      checkNext(nextSquare, figure)
    }
  }
  checkNext(startingPosition, figure)
  return possiblesUp
}
export function rightDirection(startingPosition, figure) {
  let possiblesUp = []
  function checkNext(currentPosition, figure) {
    let nextSquare = right(currentPosition, figure)
    // if (isOnBoard(nextSquare) && isNotFriend(nextSquare)) {
    if (isOnBoard(nextSquare)) {
      possiblesUp.push(nextSquare)
      checkNext(nextSquare, figure)
    }
  }
  checkNext(startingPosition, figure)
  return possiblesUp
}

function up(currentPosition, figure) {
  return (
    currentPosition[0] + (+currentPosition[1] + (figure[0] === 'w' ? 1 : -1))
  )
}

function down(currentPosition, figure) {
  return (
    currentPosition[0] + (+currentPosition[1] + (figure[0] === 'w' ? -1 : 1))
  )
}

function left(currentPosition, figure) {
  let left = row[row.findIndex(el => el === currentPosition[0]) - 1]
  console.log(left)
  return left + currentPosition[1]
}

function right(currentPosition, figure) {
  let right = row[row.findIndex(el => el === currentPosition[0]) + 1]
  console.log(right)
  return right + currentPosition[1]
}

function isOnBoard(nextSquare) {
  return row.includes(nextSquare[0]) && nextSquare[1] >= 1 && nextSquare[1] <= 8
}
