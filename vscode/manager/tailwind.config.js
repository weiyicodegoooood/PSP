/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-color': '#007750'
			},
			backgroundImage: {
				'login-bg': "url('/src/assets/img/login.png')"
			}
		}
	},
	plugins: []
};
