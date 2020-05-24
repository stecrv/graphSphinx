"use strict";

const { timeSeries } = require('./main');

const defaultData = require("./data/data.json");

const result = timeSeries("2015-01-01", "2015-12-31", defaultData,  {startEndDateMandatory: false});
console.log(result);