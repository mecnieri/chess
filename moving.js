// check next square:
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

export function upRightDirection(startingPosition, figure) {
  let possiblesUp = []
  function checkNext(currentPosition, figure) {
    let nextSquare = up(right(currentPosition, figure), figure)
    // if (isOnBoard(nextSquare) && isNotFriend(nextSquare)) {
    if (isOnBoard(nextSquare)) {
      possiblesUp.push(nextSquare)
      checkNext(nextSquare, figure)
    }
  }
  checkNext(startingPosition, figure)
  return possiblesUp
}
export function upLeftDirection(startingPosition, figure) {
  let possiblesUp = []
  function checkNext(currentPosition, figure) {
    let nextSquare = up(left(currentPosition, figure), figure)
    console.log(nextSquare)
    // if (isOnBoard(nextSquare) && isNotFriend(nextSquare)) {
    if (isOnBoard(nextSquare)) {
      possiblesUp.push(nextSquare)
      checkNext(nextSquare, figure)
    }
  }
  checkNext(startingPosition, figure)
  return possiblesUp
}
export function downRightDirection(startingPosition, figure) {
  let possiblesUp = []
  function checkNext(currentPosition, figure) {
    let nextSquare = down(right(currentPosition, figure), figure)
    console.log(nextSquare)
    // if (isOnBoard(nextSquare) && isNotFriend(nextSquare)) {
    if (isOnBoard(nextSquare)) {
      possiblesUp.push(nextSquare)
      checkNext(nextSquare, figure)
    }
  }
  checkNext(startingPosition, figure)
  return possiblesUp
}
export function downLeftDirection(startingPosition, figure) {
  let possiblesUp = []
  function checkNext(currentPosition, figure) {
    let nextSquare = down(left(currentPosition, figure), figure)
    console.log(nextSquare)
    // if (isOnBoard(nextSquare) && isNotFriend(nextSquare)) {
    if (isOnBoard(nextSquare)) {
      possiblesUp.push(nextSquare)
      checkNext(nextSquare, figure)
    }
  }
  checkNext(startingPosition, figure)
  return possiblesUp
}

export function horseDirections(startingPosition, figure) {
  return [
    horseUpRight(startingPosition, figure),
    horseUpLeft(startingPosition, figure),
    horseRightUp(startingPosition, figure),
    horseRightDown(startingPosition, figure),
    horseDownRight(startingPosition, figure),
    horseLeftUp(startingPosition, figure),
    horseLeftDown(startingPosition, figure),
    horseDownLeft(startingPosition, figure),
  ]
}
function horseUpRight(startingPosition, figure) {
  let nextSquare = up(up(right(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function horseUpLeft(startingPosition, figure) {
  let nextSquare = up(up(left(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function horseRightUp(startingPosition, figure) {
  let nextSquare = right(right(up(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function horseRightDown(startingPosition, figure) {
  let nextSquare = right(right(down(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function horseDownRight(startingPosition, figure) {
  let nextSquare = down(down(right(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function horseDownLeft(startingPosition, figure) {
  let nextSquare = down(down(left(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function horseLeftUp(startingPosition, figure) {
  let nextSquare = left(left(up(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function horseLeftDown(startingPosition, figure) {
  let nextSquare = left(left(down(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
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
  return left + currentPosition[1]
}
function right(currentPosition, figure) {
  let right = row[row.findIndex(el => el === currentPosition[0]) + 1]
  return right + currentPosition[1]
}
function isOnBoard(nextSquare) {
  return row.includes(nextSquare[0]) && nextSquare[1] >= 1 && nextSquare[1] <= 8
}
