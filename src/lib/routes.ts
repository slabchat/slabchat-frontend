import indexPage from '../pages/index.svelte';
import dmPage from '../pages/dm/dm.svelte';

export const routes = {
	'/': indexPage,
	'/dm/:id': dmPage
};
