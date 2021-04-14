import { createRouter, createWebHistory } from 'vue-router';
import Issues from '../views/Issues.vue';
import AboutIssue from '../views/AboutIssue.vue';

const routes = [
	{
		path: '',
		component: Issues
	},
	{
		path: '/issue/:id',
		component: AboutIssue,
		name: 'issue',
		props: true
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
