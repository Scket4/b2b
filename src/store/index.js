import Vue from 'vue'
import Vuex from 'vuex'
import { getIssues } from './api'

Vue.use(Vuex)

export default new Vuex.Store({
	state() {
		return {
			issues: [],
			isLoading: false,
		}
	},
	mutations: {
		setNewIssues(state, newIssues) {
			state.issues = newIssues
		},
		changeIsLoading(state) {
			state.isLoading = !state.isLoading
		},
	},
	actions: {
		async getIssuesFromApi(context) {
			context.commit('changeIsLoading')
			const newIssues = await getIssues()
			context.commit('setNewIssues', newIssues)
			context.commit('changeIsLoading')
		},
	},
	getters: {
		getIssues(state) {
			return state.issues
		},
		getIsLoading(state) {
			return state.isLoading
		},
	},
})
