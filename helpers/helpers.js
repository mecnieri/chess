export function displayLabelForChoosingFigure(param) {
  document.querySelector('label').style.display = param
  if (param === 'block') {
    document.querySelector('section').style.pointerEvents = 'none'
  } else {
    document.querySelector('section').style.pointerEvents = 'auto'
  }
}

export function clearSelectedCircles() {
  document
    .querySelectorAll('span')
    .forEach(circle => (circle.style = 'display:none'))

  Array.from(document.querySelector('section').children).forEach(div =>
    div.classList.remove('selectedBox'),
  )
}

