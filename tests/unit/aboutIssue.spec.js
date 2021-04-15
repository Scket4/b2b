import { mount, createLocalVue } from '@vue/test-utils';
import AboutIssue from '@/views/AboutIssue';

const localVue = createLocalVue();
const issue = {
	title: 'Ошибка в асинхронных операциях vue',
	created_at: '2012-10-09T23:39:01Z',
	user: {
		login: 'alxxsck'
	},
	body: '### Some markDown text ###'
};

describe('unit tests for issues page', () => {
	it('should init correctly', () => {
		const wrapper = mount(AboutIssue, {
			localVue,
			propsData: { issue: JSON.stringify(issue) }
		});

		expect(wrapper.isVueInstance).toBeTruthy();
		expect(wrapper.is(AboutIssue)).toBeTruthy();
		expect(wrapper.vm.issue).toEqual(JSON.stringify(issue));
		expect(wrapper.vm.createdDate).toEqual('09.10.2012');
		expect(wrapper.vm.mainText).toEqual(
			'<h3 id="somemarkdowntext">Some markDown text</h3>'
		);
	});

	it('should render correctly', () => {
		const wrapper = mount(AboutIssue, {
			localVue,
			propsData: { issue: JSON.stringify(issue) }
		});

		expect(wrapper.find('.about-issue__header--user').text()).toEqual(
			issue.user.login
		);
		expect(wrapper.find('h3').text()).toEqual('Some markDown text');
	});

	it('should match the snapshot', () => {
		const wrapper = mount(AboutIssue, {
			localVue,
			propsData: { issue: JSON.stringify(issue) }
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
