import { mount, createLocalVue } from '@vue/test-utils'
import Issue from '@/components/Issue'

const localVue = createLocalVue()
const issue = {
	title: 'Ошибка в асинхронных операциях vue',
	number: '12321',
	created_at: '2012-10-09T23:39:01Z',
	user: {
		login: 'alxxsck',
	},
}

describe('unit tests for issue component', () => {
	it('should init correctly', () => {
		const wrapper = mount(Issue, {
			localVue,
			propsData: { issue },
		})

		expect(wrapper.isVueInstance).toBeTruthy()
		expect(wrapper.is(Issue)).toBeTruthy()
		expect(wrapper.vm.issue).toEqual(issue)
		expect(wrapper.vm.dateCreated).toEqual('09.10.2012')
	})

	it('should render correctly', () => {
		const headerText = `Автор: ${issue.user.login} от 09.10.2012`
		const titleText = issue.title
		const numberText = `# ${issue.number}`
		const wrapper = mount(Issue, {
			localVue,
			propsData: { issue },
		})

		expect(wrapper.find('.issue__author--date').text()).toEqual(headerText)
		expect(wrapper.find('.issue__tag').text()).toEqual(titleText)
		expect(wrapper.find('.issue__number').text()).toEqual(numberText)
	})

	it('should match the snapshot', () => {
		const wrapper = mount(Issue, {
			localVue,
			propsData: { issue },
		})

		expect(wrapper.html()).toMatchSnapshot()
	})
})
