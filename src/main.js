

const _ = require('lodash');

const { isBeforeDate, isValidDate } = require('./functions/date');
const { sliceTimeSeries, getSequence } = require('./functions/series');
const { defaultOptions } = require('./constants');

const timeSeries = (startingDate, endingDate, data, opt = {}) => {
  // set default options
  const options = { ...defaultOptions, ...opt };
  // validate data
  const series = getSequence(data);

  if (!series) {
    throw 'Invalid data set';
  }

  // check dates
  if (options.startEndDateMandatory) {
    if (_.isNil(startingDate) || _.isNil(endingDate)) {
      throw 'Insert starting and ending dates';
    }
  } else if (!options.startEndDateMandatory) {
    if (_.isNil(startingDate)) {
      startingDate = series.score[0].x;
    }
    if (_.isNil(endingDate)) {
      endingDate = series.score[series.length - 1].x;
    }
  }

  if (!isValidDate(startingDate) ||
    !isValidDate(endingDate) ||
    !isBeforeDate(startingDate, endingDate)
  ) {
    throw 'Insert valid date values';
  }

  const slicedScore = sliceTimeSeries(
    series.score,
    startingDate,
    endingDate,
    options.exactDateMatch
  );

  const result = {
    start_date: startingDate,
    end_date: endingDate,
    score: slicedScore,
  };

  if (options.returnExtraValues) {
    const slicedExtra = sliceTimeSeries(
      series.extra,
      startingDate,
      endingDate,
      options.exactDateMatch,
    );
    result.extra = slicedExtra;
  }

  return result;
};

module.exports = { timeSeries };
