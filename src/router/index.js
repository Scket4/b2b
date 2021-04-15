import Vue from 'vue'
import VueRouter from 'vue-router'
import Issues from '../views/Issues.vue'
import AboutIssue from '../views/AboutIssue.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		component: Issues,
	},
	{
		path: '/issue/:id',
		component: AboutIssue,
		name: 'issue',
		props: true,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
