const { Octokit } = require('@octokit/core');

const token = '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';
const octokit = new Octokit({ auth: token });

export function getIssues() {
	return octokit.request('GET /repos/{owner}/{repo}/issues', {
		owner: 'vuejs',
		repo: 'vue'
	});
}
