<template>
	<div class="issue">
		<div class="issue__main-info">
			<div class="issue__tag" @click="openIssueInfo">
				{{ issue.title }}
			</div>
			<div class="issue__author">
				<p class="issue__author--date">
					Автор: {{ issue.user.login }} от {{ dateCreated }}
				</p>
			</div>
		</div>
		<div class="issue__number"># {{ issue.number }}</div>
	</div>
</template>

<script>
export default {
	name: 'Issue',
	props: {
		issue: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	computed: {
		dateCreated() {
			return new Date(this.issue.created_at).toLocaleDateString();
		}
	},
	methods: {
		openIssueInfo() {
			this.$router.push({
				name: 'issue',
				params: {
					id: this.issue.number,
					issue: JSON.stringify(this.issue)
				}
			});
		}
	}
};
</script>

<style lang="sass" solid>
@import '../variables/variables.sass'

.issue
	width: 100%
	border-bottom: 1px solid $grey
	padding: 10px 20px
	display: flex
	justify-content: space-between
	align-items: center
	&__main-info
		display: flex
		flex-direction: column
		justify-content: space-between
		align-items: flex-start
	&__tag
		font-weight: bold
		margin-bottom: 10px
		cursor: pointer
	&__author
		display: flex
	&__number
		font-style: italic
		width: 60px
	&:hover
		background-color: $low-blue-bg

p
	margin: 0
</style>