import { createboardWithFigures } from './board.js'

createboardWithFigures()

document.querySelector('section').addEventListener('click', getBoxId)

function getBoxId(e) {
  console.log(e.target.id)
}
