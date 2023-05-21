import { createboardWithFigures } from './board.js'
import {
  downDirection,
  leftDirection,
  rightDirection,
  upDirection,
  upRightDirection,
  upLeftDirection
} from './moving.js'

createboardWithFigures()

document.querySelector('section').addEventListener('click', getBoxId)

function getBoxId(e) {
  let id = e.target.id
  let div = document.getElementById(id)

  if (div.children.length === 2) {
    div.classList.add('selectedBox')
    let possibles = []
    possibles.push(...upDirection(id, 'wRook'))
    possibles.push(...downDirection(id, 'wRook'))
    possibles.push(...leftDirection(id, 'wRook'))
    possibles.push(...rightDirection(id, 'wRook'))
    possibles.push(...upRightDirection(id,'wRook'))
    possibles.push(...upLeftDirection(id,'wRook'))

    possibles.forEach(square => {
      let div = document.getElementById(square)
      let circle = div.children[0]
      circle.style = 'display:block'
    })
    console.log(possibles)
  }
}
