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
  } else {
    return `${rem(lineHeight)}`
  }
}

const customFont = plugin(function ({ matchUtilities }) {
  matchUtilities({
    'custom-font': (value) => {
      const [minSize, maxSize, weight, lineHeight, letterSpacing, minWidth, maxWidth] = value
        .split(',')
        .map((v) => {
          return Number(v)
        })
      return {
        'font-weight': `${weight ? weight : 400}`,
        'font-size': getClamSize(minSize, maxSize, minWidth, maxWidth),
        'line-height': getLineHeightSize(lineHeight, minSize, maxSize, minWidth, maxWidth),
        'letter-spacing': `${letterSpacing ? letterSpacing : 0}em`,
      }
    },
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'error-color': '#FF0000',
      },
    },
  },
  plugins: [customFont],
}
