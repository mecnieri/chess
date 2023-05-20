import { createboard } from './createbord.js'

createboard()

document.addEventListener('click', getBoxId)

function getBoxId(e) {
  console.log(e.target.id)
}
