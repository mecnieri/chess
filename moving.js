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

export function knightDirections(startingPosition, figure) {
  return [
    knightUpRight(startingPosition, figure),
    knightUpLeft(startingPosition, figure),
    knightRightUp(startingPosition, figure),
    knightRightDown(startingPosition, figure),
    knightDownRight(startingPosition, figure),
    knightLeftUp(startingPosition, figure),
    knightLeftDown(startingPosition, figure),
    knightDownLeft(startingPosition, figure),
  ]
}
function knightUpRight(startingPosition, figure) {
  let nextSquare = up(up(right(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function knightUpLeft(startingPosition, figure) {
  let nextSquare = up(up(left(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function knightRightUp(startingPosition, figure) {
  let nextSquare = right(right(up(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function knightRightDown(startingPosition, figure) {
  let nextSquare = right(right(down(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function knightDownRight(startingPosition, figure) {
  let nextSquare = down(down(right(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function knightDownLeft(startingPosition, figure) {
  let nextSquare = down(down(left(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function knightLeftUp(startingPosition, figure) {
  let nextSquare = left(left(up(startingPosition, figure), figure), figure)
  if (isOnBoard(nextSquare)) {
    return nextSquare
  }
}
function knightLeftDown(startingPosition, figure) {
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
