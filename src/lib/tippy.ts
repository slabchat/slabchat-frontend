import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective-subtle.css';
import { createTippy } from 'svelte-tippy';

export const tippy = createTippy({
	animation: 'perspective-subtle',
	arrow: false
});
