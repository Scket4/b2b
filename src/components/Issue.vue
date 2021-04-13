<template>
	<div class="issue">
		<div class="issue__main-info">
			<div class="issue__tag">{{ issue.title }}</div>
			<div class="issue__author">
				<p>Автор: {{ issue.user.login }} от {{ dateCreated }}</p>
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
		// На скорую руку набросал, надо исправить и доделать
		dateCreated() {
			const sepT = this.issue.created_at.indexOf('T');
			let dateArr = this.issue.created_at.split('').splice(0, sepT);
			return dateArr.join('').replace(/-/g, '.');
		}
	}
};
</script>

<style lang="sass" solid>
$grey: #e1e4e8

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

p
  margin: 0
</style>