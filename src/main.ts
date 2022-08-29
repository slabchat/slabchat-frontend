import 'virtual:windi.css';
import App from './App.svelte';

const root = document.querySelector('#app');

if (!root) throw new Error('No root element found');

const app = new App({
	target: root
});

export default app;
