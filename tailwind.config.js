const {fontFamily} = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false,
		container: false,
	},
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{jsx,tsx,html,ts,js}'],
	theme: {
		extend: {
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
					from: {transform: 'translateX(0)'},
					to: {transform: 'translateX(-100%)'},
				},
			},
			fontFamily: {
				sans: ['"Inter"', ...fontFamily.sans],
				jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
				mono: ['"Fira Code"', ...fontFamily.mono],
			},
			borderRadius: {
				sm: '4px',
			},
			screens: {
				sm: '0px',
				lg: '997px',
			},
			colors: {},
		},
	},
	plugins: [],
};
