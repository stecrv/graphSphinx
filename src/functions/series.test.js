const { getSequence, sliceTimeSeries } = require('./series');
const data = require('../data/data.json');
const dataEmpty = require('../../test/mocks/dataEmpty.json');
const dataEmptyInvalid = require('../../test/mocks/dataEmptyInvalid.json');
const dataInvalid = require('../../test/mocks/dataInvalid.json');

describe('getting the series values', () => {
  test('consider an empty data to be valid', () => {
    expect(getSequence(dataEmpty)).not.toBeFalsy();
  });
  test('consider an empty data with errors to be invalid', () => {
    expect(getSequence(dataEmptyInvalid)).toBeFalsy();
  });
  test('consider a wrong data to be invalid', () => {
    expect(getSequence(dataInvalid)).toBeFalsy();
  });
  test('consider a regular data to be valid', () => {
    expect(getSequence(data)).not.toBeFalsy();
  });
});

const series2018_2019 = require('../../test/mocks/scoreSeries/series2018_2019.json');

describe('slice the series values', () => {
  describe('consider start/end as exact match', () => {
    test('find some values', () => {
      const result = sliceTimeSeries(
        series2018_2019,
        '2018-07-09T15:57:23.363714Z',
        '2019-11-12T13:52:42.502002Z',
      );

      expect(result.length).toBe(45);
    });
  });

  describe('consider start/date as loose match', () => {
    test('find all values for 2018 / 2019', () => {
      const result = sliceTimeSeries(series2018_2019, '2018', '2019', false);
      expect(result.length).toBe(98);
    });

    test('find zero values about future dates', () => {
      const result = sliceTimeSeries(
        series2018_2019,
        '2020-01-01',
        '2022-05-24',
        false
      );
      expect(result.length).toBe(0);
    });
  });
});
