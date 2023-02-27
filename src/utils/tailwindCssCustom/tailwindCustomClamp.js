const plugin = require('tailwindcss/plugin')

const rem = (px) => `${px / 16}rem`

const clamp = (minSize, maxSize, minWidth, maxWidth) => {
  const v = Math.floor(((100 * (maxSize - minSize)) / (maxWidth - minWidth)) * 100) / 100
  const r = (minWidth * maxSize - maxWidth * minSize) / (minWidth - maxWidth)
  return `clamp(${rem(minSize)}, ${v}vw + ${rem(r)}, ${rem(maxSize)})`
}

const getClampSize = (minSize, maxSize, minWidth = 390, maxWidth = 600) => {
  if (minSize - maxSize === 0 || !maxSize) {
    return `${rem(minSize)}`
  } else if (!minSize) {
    if (maxSize - 6 > 10) {
      return clamp(maxSize - 6, maxSize, minWidth, maxWidth)
    } else {
      return clamp(10, maxSize, minWidth, maxWidth)
    }
  } else {
    return clamp(minSize, maxSize, minWidth, maxWidth)
  }
}

const customClamp = plugin(function ({ matchUtilities }) {
  matchUtilities({
    'clamp-text': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'font-size': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-leading': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'line-height': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-mt': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'margin-top': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-mb': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'margin-bottom': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
  })
})

module.exports = customClamp
