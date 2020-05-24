const _ = require("lodash");
const { isBeforeDate } = require("./date");
const {
  AGGREGATION_TYPE,
  AGGREGATION_KEY,
  DETAILS_KEY,
} = require(`../constants`);

const getSequence = (series) => {
  // get series data
  const seriesData = _.get(series, "data", null);
  // get series data by aggregation slug
  const seriesAggregations = _.keyBy(seriesData, AGGREGATION_KEY);
  // get details with aggregation-overall typ eslug
  const details = _.get(seriesAggregations, `${AGGREGATION_TYPE}.details`, []);
  // get score values
  const dataScores = _.get(_.keyBy(details, DETAILS_KEY), "score", false);
  // get extra values
  const dataExtra = _.get(_.keyBy(details, DETAILS_KEY), "extra", {
    series: [],
    key: "extra",
  });

  if (seriesData && seriesAggregations && dataScores !== false) {
    return { score: dataScores.series, extra: dataExtra.series };
  } else {
    return false;
  }
};

const sliceTimeSeries = (
  timeSeries = [],
  startingDate = null,
  endingDate = null,
  exactDateMatch = true
) => {
  let result = [];
  if (exactDateMatch) {
     const startIndex = _.findIndex(timeSeries, function(el) {
       return el.x === startingDate;
     });
     const endIndex = _.findLastIndex(timeSeries, function(el) { return el.x === endingDate; });
     result = (startIndex > -1 && endIndex > -1) ?
                timeSeries.slice(startIndex, endIndex) : [];
  } else {
    result = timeSeries.filter((el) => {
      return isBeforeDate(startingDate, el.x) && isBeforeDate(el.x, endingDate);
    });
  }
  return result;
};

module.exports = { sliceTimeSeries, getSequence };
