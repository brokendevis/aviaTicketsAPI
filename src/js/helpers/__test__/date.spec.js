import { formatDate } from '../date';

describe('formatDate', () => {
  it('check format date', () => {
    expect(formatDate(1690872596, 'yyyy')).toBe('1970')
  })
})