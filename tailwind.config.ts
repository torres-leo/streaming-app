import type { Config } from 'tailwindcss';
import animations from 'tailwindcss-animated';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' },
				},
			},
			animation: {
				gradient: 'gradient 6s linear infinite',
			},
		},
	},
	darkMode: 'media',
	plugins: [animations],
};
export default config;
