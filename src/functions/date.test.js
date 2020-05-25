const { isValidDate, isBeforeDate } = require('./date');

describe('Testing date functions', () => {
  test('consider 2015-08-19T14:00:19.352000Z a valid format', () => {
    expect(isValidDate('2015-08-19T14:00:19.352000Z')).toBe(true);
  });

  test('consider 2015-08-19 not valid format', () => {
    expect(isValidDate('2015-08-19')).toBe(true);
  });

  test('consider AAA not valid format', () => {
    expect(isValidDate('AAA')).toBe(false);
  });

  test('consider 2015-08-19T14:00:19.352000Z earlier than 2018-07-12T14:00:19.352000Z', () => {
    expect(
      isBeforeDate('2015-08-19T14:00:19.352000Z', '2018-07-12T14:00:19.352000Z')
    ).toBe(true);
  });

  test('consider 2020-01-01T14:00:19.352000Z not earlier than 2018-07-12T14:00:19.352000Z', () => {
    expect(
      isBeforeDate('2020-01-01T14:00:19.352000Z', '2018-07-12T14:00:19.352000Z')
    ).toBe(false);
  });
});
