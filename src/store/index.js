import { createStore } from 'vuex';
const { Octokit } = require('@octokit/core');

const token = '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';
const octokit = new Octokit({ auth: token });

export default createStore({
	state() {
		return {
			issues: [],
			isLoading: false
		};
	},
	mutations: {
		setNewIssues(state, newIssues) {
			state.issues = newIssues;
		},
		changeIsLoading(state) {
			state.isLoading = !state.isLoading;
		}
	},
	actions: {
		async getIssuesFromApi(context) {
			context.commit('changeIsLoading');
			const newIssues = await octokit.request(
				'GET /repos/{owner}/{repo}/issues',
				{
					owner: 'vuejs',
					repo: 'vue'
				}
			);
			context.commit('setNewIssues', newIssues);
			context.commit('changeIsLoading');
		}
	},
	getters: {
		getIssues(state) {
			return state.issues;
		},
		getIsLoading(state) {
			return state.isLoading;
		}
	},
	modules: {}
});
