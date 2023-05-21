import { createboardWithFigures } from './board.js'
import { boxesArray } from './board.js'

createboardWithFigures()

document.querySelector('section').addEventListener('click', getBoxId)

function getBoxId(e) {
  clearSelected()

  let id = e.target.id
  let div = document.getElementById(id)

  function findFigure() {
    return boxesArray.find(box => box.coordinate === id).figure
  }

  let figure = findFigure()

  if (div.children.length === 2) {
    div.classList.add('selectedBox')
    let possibles = []
    figure.directions.forEach(direction =>
      possibles.push(...direction(id, figure.color)),
    )

    possibles.forEach(square => {
      if (square) {
        let div = document.getElementById(square)
        let circle = div.children[0]
        circle.style = 'display:block'
      }
    })
  }
}
function clearSelected() {
  document
    .querySelectorAll('span')
    .forEach(circle => (circle.style = 'display:none'))

  Array.from(document.querySelector('section').children).forEach(div =>
    div.classList.remove('selectedBox'),
  )
}
