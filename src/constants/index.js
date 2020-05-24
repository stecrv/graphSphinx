const defaultOptions = {
  /*
  Consider that we want to display the data with the key “extra” associated with  “score”. Write a function to format the data for this use case.
  */
  returnExtraValues: false,
  /*
  Start_date and end_date don’t match the “x” key in the serie
  */
  exactDateMatch: true,
  /*
  The series does not always contains end_date or start_date
  */
  startEndDateMandatory: true,
};

const AGGREGATION_TYPE = "aggregation-overall";
const AGGREGATION_KEY = "slug";
const DETAILS_KEY = "key";

module.exports = {
  AGGREGATION_TYPE,
  AGGREGATION_KEY,
  DETAILS_KEY,
  defaultOptions,
};