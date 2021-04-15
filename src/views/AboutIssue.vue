<template>
	<div class="wrapper">
		<p class="backPage" @click="goBack">Назад</p>
		<div class="about-issue">
			<div class="about-issue__header">
				<div class="about-issue__header--user">
					{{ issueInfo.user.login }}
				</div>
				<p class="isRight">написал</p>
				<div class="about-issue__header--date">{{ createdDate }}</div>
			</div>
			<main class="about-issue__main">
				<p class="about-issue__main--text" ref="mainText"></p>
			</main>
		</div>
	</div>
</template>

<script>
import { formatDate } from '../utils/formatDate';

const showdown = require('showdown'),
	converter = new showdown.Converter();

export default {
	name: 'AboutIssue',
	props: {
		issue: String
	},
	data() {
		return {
			issueInfo: null
		};
	},
	beforeMount() {
		this.issueInfo = JSON.parse(this.issue);
	},
	mounted() {
		this.$refs.mainText.innerHTML = this.mainText;
	},
	computed: {
		createdDate() {
			return formatDate(this.issueInfo.created_at);
		},
		mainText() {
			return converter.makeHtml(this.issueInfo.body);
		}
	},
	methods: {
		goBack() {
			this.$router.push('/');
		}
	}
};
</script>

<style lang="sass">
@import '../variables/variables.sass'

.wrapper
	width: 100%
	display: flex
	justify-content: center
	padding-top: 200px
	position: relative

.about-issue
	width: 50%
	border: 1px solid $grey
	border-radius: 15px
	&__header
		width: 100%
		height: 60px
		padding: 0 30px
		background-color: $low-blue-bg
		border-radius: 15px
		border-bottom: 1px solid $grey
		display: flex
		justify-content: flex-start
		align-items: center
		&--user,
		&--date
			margin: 0 10px
	&__main
		padding: 20px 30px
		overflow: hidden
		&--text
			line-height: 30px

.backPage
	position: absolute
	font-size: 26px
	cursor: pointer
	top: 20px
	left: 20px

@media (max-width: 1024px)
	.about-issue
		width: 90%
</style>