
const isValidDate = (date) => {
     return new Date(date).getTime() > 0;
}

const isBeforeDate = (dateA, dateB) => {
  return new Date(dateA) <= new Date(dateB);
};

module.exports = { isValidDate, isBeforeDate };