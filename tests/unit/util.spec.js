import { formatDate } from '@/utils/formatDate'

describe('util for date format', () => {
	it('format date from github view to usual', () => {
		expect(formatDate('2011-04-10T20:09:31Z')).toBe('10.04.2011')
		expect(formatDate('2013-02-12T13:22:01Z')).toBe('12.02.2013')
		expect(formatDate('2012-10-09T23:39:01Z')).toBe('09.10.2012')
	})
})
