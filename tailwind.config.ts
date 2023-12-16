import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import Icons from 'unplugin-icons/vite'

export default {
	// modee: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		typography,
		Icons({
			compiler: 'svelte',
			autoInstall: true,
		  }),
		skeleton({
			themes: {
				preset: [
					{
						name: 'wintry',
						enhancements: true,
					},
					{
						name: 'gold-nouveau',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;
