const { Octokit } = require('@octokit/core');

const token = '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';
const octokit = new Octokit({ auth: token });

export function getIssues() {
	return octokit.request('GET /repos/{owner}/{repo}/issues', {
		owner: 'vuejs',
		repo: 'vue'
	});
}
