const plugin = require('tailwindcss/plugin')

const rem = (px) => `${px / 16}rem`

const getClamSize = (minSize, maxSize, minWidth = 390, maxWidth = 750) => {
  const clam = (ms) => {
    const v = Math.floor(((100 * (maxSize - ms)) / (maxWidth - minWidth)) * 100) / 100
    const r = (minWidth * maxSize - maxWidth * ms) / (minWidth - maxWidth)
    return `clamp(${rem(ms)}, ${v}vw + ${rem(r)}, ${rem(maxSize)})`
  }
  if (minSize - maxSize === 0 || !maxSize) {
    return `${rem(minSize)}`
  } else if (!minSize) {
    if (maxSize - 6 > 10) {
      return clam(maxSize - 6)
    } else {
      return clam(10)
    }
  } else {
    return clam(minSize)
  }
}

const getLineHeightSize = (lineHeight, minSize, maxSize, minWidth, maxWidth) => {
  if (!lineHeight) {
    return getClamSize(minSize, maxSize, minWidth, maxWidth)
  } else if (!maxSize || !minSize) {
    return `${rem(lineHeight)}`
  } else {
    return getClamSize(lineHeight - (maxSize - minSize), lineHeight, minWidth, maxWidth)
  }
}

const customFont = plugin(function ({ matchUtilities }) {
  matchUtilities({
    'custom-font': (value) => {
      const [minSize, maxSize, weight, lineHeight, letterSpacing, minWidth, maxWidth] = value
        .split('-')
        .map((v) => {
          return Number(v)
        })
      if (!weight && !letterSpacing) {
        return {
          'font-size': getClamSize(minSize, maxSize, minWidth, maxWidth),
          'line-height': getLineHeightSize(lineHeight, minSize, maxSize, minWidth, maxWidth),
        }
      } else if (!weight) {
        return {
          'font-size': getClamSize(minSize, maxSize, minWidth, maxWidth),
          'line-height': getLineHeightSize(lineHeight, minSize, maxSize, minWidth, maxWidth),
          'letter-spacing': `${letterSpacing}em`,
        }
      } else if (!letterSpacing) {
        return {
          'font-weight': `${weight}`,
          'font-size': getClamSize(minSize, maxSize, minWidth, maxWidth),
          'line-height': getLineHeightSize(lineHeight, minSize, maxSize, minWidth, maxWidth),
        }
      } else {
        return {
          'font-weight': `${weight}`,
          'font-size': getClamSize(minSize, maxSize, minWidth, maxWidth),
          'line-height': getLineHeightSize(lineHeight, minSize, maxSize, minWidth, maxWidth),
          'letter-spacing': `${letterSpacing}em`,
        }
      }
    },
  })
})

module.exports = customFont
