import { defineConfig } from 'windicss/helpers';
import plugin from 'windicss/plugin';
import daisyui from 'daisyui';

export default defineConfig({
	theme: {},
	plugins: [
		daisyui,
		plugin(({ addUtilities }) => {
			addUtilities({
				'.scrollbar-hidden': {
					'&::-webkit-scrollbar': {
						width: '0',
						background: 'transparent'
					}
				}
			});
		})
	]
});
