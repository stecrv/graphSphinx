const { timeSeries } = require('./main');

const defaultData = require('./data/data.json');

/*
Write a function that having a start_date and an end_date as input returns
the subset of data included between the two
for the slug ‘aggregation-overall’ and for the key ‘score’

Assume the start_date and end_date exactly match the “x” key in the serie
start_date and end_date must be included in the returned data.
The series always contains start_date and end_date
*/

const result1 = timeSeries(
  '2015-08-19T14:00:19.352000Z',
  '2018-04-25T17:51:51.430831Z',
  defaultData
);
console.log(result1);

/*
Write the same function as above to match the case that:

The series does not always contains end_date or start_date
Start_date and end_date don’t match the “x” key in the serie
 */
const result2 = timeSeries('2015-01-01', '2015-12-31', defaultData, {
  startEndDateMandatory: false,
  exactDateMatch: false,
});
console.log(result2);

/*
Consider that we want to display the data with the key “extra”
on mouse over on a point of the key “score”.
Write a function to format the data for this use case.
 */
const result3 = timeSeries('2015-01-01', '2015-12-31', defaultData, {
  startEndDateMandatory: false,
  exactDateMatch: false,
  returnExtraValues: true,
});
console.log(result3);
