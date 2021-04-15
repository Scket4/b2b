<template>
	<div class="issues" :class="{ load: isLoading }">
		<h1 class="issues__title">GitHub Vue Issues</h1>
		<div class="issues__container">
			<div class="issues__sorts">
				<div class="sort__left-panel">
					<p class="sort__counter">
						{{ issuesCount }} Открытых проблем
					</p>
					<input
						type="text"
						class="sort__name"
						placeholder="Поиск"
						v-model="searchText"
					/>
				</div>
				<div class="sort__id" @click="sortOfNumbers">Номер</div>
			</div>
			<div class="issues__list" v-if="issues">
				<issue
					v-for="issue in paginatedIssues"
					:key="issue.id"
					:issue="issue"
				/>
			</div>
			<p v-else class="nothing">Ничего нет..</p>
		</div>
		<div class="pagination">
			<div
				class="prev"
				@click="prevPageClick"
				:class="{ deactive: page === 1 }"
			>
				Назад
			</div>
			<div class="page">{{ page }}</div>
			<div
				class="next"
				@click="nextPageClick"
				:class="{ deactive: !hasNextPage }"
			>
				Вперед
			</div>
		</div>
	</div>
</template>

<script>
import Issue from '../components/Issue.vue';

export default {
	components: { Issue },
	name: 'Issues',
	data() {
		return {
			searchText: '',
			sort: 'down',
			page: 1,
			issuesInPage: 15
		};
	},
	beforeMount() {
		this.$store.dispatch('getIssuesFromApi');
	},
	methods: {
		sortOfNumbers() {
			if (this.sort === 'down') {
				this.issues.sort((a, b) => a.number - b.number);
				this.sort = 'up';
			} else {
				this.issues.sort((a, b) => b.number - a.number);
				this.sort = 'down';
			}
		},
		nextPageClick() {
			if (this.hasNextPage) {
				this.page++;
			}
		},
		prevPageClick() {
			if (this.page <= 1) {
				return;
			}
			this.page--;
		}
	},
	computed: {
		issues() {
			return this.$store.getters.getIssues.data;
		},
		issuesCount() {
			return this.issues ? this.issues.length : 0;
		},
		isLoading() {
			return this.$store.getters.getIsLoading;
		},
		filteredIssues() {
			if (this.issues) {
				return this.issues.filter((iss) =>
					iss.title.includes(this.searchText)
				);
			} else {
				return [];
			}
		},
		startIndex() {
			return (this.page - 1) * this.issuesInPage;
		},
		endIndex() {
			return (this.page - 1) * this.issuesInPage + this.issuesInPage;
		},
		paginatedIssues() {
			return this.filteredIssues.slice(this.startIndex, this.endIndex);
		},
		hasNextPage() {
			if (this.filteredIssues) {
				return this.startIndex < this.filteredIssues.length - this.page;
			} else {
				return false;
			}
		}
	}
};
</script>

<style lang='sass' scoped>
@import '../variables/variables.sass'

.issues
	width: 100%
	height: 100%
	display: flex
	justify-content: center
	align-items: center
	flex-direction: column
	&__title
		font-size: 48px
		text-align: center
	&__container
		width: 80%
		border: 1px solid $grey
		border-radius: 6px
	&__sorts
		width: 100%
		height: 50px
		background-color: $low-blue-bg
		border-bottom: 1px solid $grey
		display: flex
		justify-content: space-between
		align-items: center
		padding: 0 20px

.sort
	&__left-panel
		display: flex
		align-items: center
		flex-wrap: wrap
	&__counter
		font-weight: 600
	&__name
		margin-left: 20px
		border: 1px solid $grey
		&:focus
			outline: none
	&__id
		cursor: pointer

.pagination
	display: flex
	justify-content: space-between
	align-items: center
	margin-top: 40px

.prev,
.next
	font-size: 26px
	color: #56aaff
	text-decoration: underline
	cursor: pointer
	margin: 0 20px

.deactive
	color: grey
	cursor: default
	text-decoration: none

.load
	filter: blur(20px)

@media (max-width: 768px)
	.issues
		&__container
			width: 100%
		&__sorts
			height: 100px
</style>