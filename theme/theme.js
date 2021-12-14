const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, e, theme, variants }) {

}, {
  theme: {
    extend: {
		colors: {
			themes: {
				default: '#23b747',
				second: '#0c0c0c'
			}
		}
	},
  }
})
