import { createboardWithFigures } from './createbord.js'

createboardWithFigures()

document.addEventListener('click', getBoxId)

function getBoxId(e) {
  console.log(e.target.id)
}
