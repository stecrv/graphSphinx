const isValidDate = (date) => new Date(date).getTime() > 0;

const isBeforeDate = (dateA, dateB) => new Date(dateA) <= new Date(dateB);

module.exports = { isValidDate, isBeforeDate };
