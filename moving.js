// directions

// up
// right
// left
// down

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

function upDirection(startingPosition, figure) {
  let possiblesUp = []

  function checkNext(currentPosition, figure) {
    let nextSquare = up(currentPosition)
    if (isOnBoard(nextSquare) && isNotFriend(nextSquare)) {
      possiblesUp.push(nextSquare)
      checkNext(nextSquare, figure)
    }
  }
  checkNext(startingPosition, figure)
  return possiblesUp
}

upDirection('A2', 'wRook')
