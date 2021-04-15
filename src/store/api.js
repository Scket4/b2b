const { Octokit } = require('@octokit/core');

const token = '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';
const octokit = new Octokit({ auth: token });

export function getIssues() {
	return octokit.request('GET /repos/{owner}/{repo}/issues', {
		owner: 'vuejs',
		repo: 'vue'
	});
}
