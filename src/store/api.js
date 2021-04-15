const { Octokit } = require('@octokit/core');

const token = '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';
const octokit = new Octokit({ auth: token });

export function getIssues() {
	return octokit.request('GET /repos/{owner}/{repo}/issues', {
		owner: 'vuejs',
		repo: 'vue'
	});
}
