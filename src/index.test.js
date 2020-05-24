const defaultData = require("./data/data.json");
const { timeSeries } = require("./main");

describe("testing the main functions", () => {
  test("getting all the data from 2015", () => {
    const result = timeSeries("2015-01-01", "2015-12-31", defaultData, {
      exactDateMatch: false,
    });
    expect(result.start_date).toBe("2015-01-01");
    expect(result.end_date).toBe("2015-12-31");
    expect(result.score.length).toBe(27);
  });
  test("getting all the data from until 2018", () => {
    const result = timeSeries(null, "2018-04-25T17:51:51.430831Z", defaultData, {
      startEndDateMandatory: false,
    });
    expect(result.start_date).toBe("2015-08-19T14:00:19.352000Z");
    expect(result.end_date).toBe("2018-04-25T17:51:51.430831Z");
    expect(result.score.length).toBe(974);
  });
  test("getting extra data", () => {
    const result = timeSeries("2015-08-19T14:00:19.352000Z", "2018-04-25T17:51:51.430831Z", defaultData, {
      returnExtraValues: true,
    });
    expect(result.start_date).toBe("2015-08-19T14:00:19.352000Z");
    expect(result.end_date).toBe("2018-04-25T17:51:51.430831Z");
    expect(result.score.length).toBe(974);
    expect(result.extra.length).toBe(974);
  });
});
