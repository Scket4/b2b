import { createRouter, createWebHistory } from 'vue-router';
import Issues from '../views/Issues.vue';
import AboutIssue from '../views/AboutIssue.vue';

const routes = [
	{
		path: '/',
		name: 'Issues',
		component: Issues
	},
	{
		path: '/about/:id',
		name: 'AboutIssue',
		component: AboutIssue
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
