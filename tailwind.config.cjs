import { join } from 'path'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			colors: {
				'one-cost': '#687989',
				'two-cost': '#20b157',
				'three-cost': '#18c1ee',
				'four-cost': '#c61b95',
				'five-cost': '#f6850b'
			}
		},
	},
	plugins: [forms,typography,...skeleton()],
}
