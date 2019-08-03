((outlineSize = 0, boxShadowSize = 30) => {
  const getRandomColor = () => {
    const getRandomColorValue = () => Math.floor(Math.random() * 256)
    const convertTo16 = n => n < 16 ? '0' + n.toString(16) : n.toString(16)
    const getHexColor = () => convertTo16(getRandomColorValue())

    const r = getHexColor()
    const g = getHexColor()
    const b = getHexColor()

    return "#" + r + g + b
  }
  if (outlineSize < 0 || (outlineSize < 1 && boxShadowSize < 1)) {
    outlineSize = 0
    boxShadowSize = 0
  }

  const getOutline = outlineSize => ({
    outline: outlineSize + 'px solid black',
    outlineOffset: '-1px',
  })

  const getBoxShadow = boxShadowSize => boxShadowSize < 1 ? 'none' :
    `inset 0px 0px ${boxShadowSize}px 1px ${getRandomColor()}`

  const elements = document.querySelectorAll('body *')
  elements.forEach(elem => {
    const { outline, outlineOffset } = getOutline(outlineSize)
    const shadow = getBoxShadow(boxShadowSize)
    elem.style.outline = outline
    elem.style.outlineOffset = outlineOffset
    elem.style.boxShadow = shadow
  })
})() // (1, 0) - For Only Lines Snippet
