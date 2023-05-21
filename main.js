import { createboardWithFigures } from './board.js'
import {
  downDirection,
  leftDirection,
  rightDirection,
  upDirection,
} from './moving.js'

createboardWithFigures()

document.querySelector('section').addEventListener('click', getBoxId)

function getBoxId(e) {
  let id = e.target.id
  let div = document.getElementById(id)

  if (div.children.length === 2) {
    div.classList.add('selectedBox')
    let possibles = []
    possibles.push(
      ...upDirection(id, 'wRook'),
      ...downDirection(id, 'wRook'),
      ...leftDirection(id, 'wRook'),
      ...rightDirection(id, 'wRook'),
    )
    possibles.forEach(square => {
      let div = document.getElementById(square)
      let circle = div.children[0]
      circle.style = 'display:block'
    })
    console.log(possibles)
  }
}
