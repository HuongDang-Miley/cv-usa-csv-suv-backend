
const getNewCasesByDay = function(date, data) {
  for (const row of data) {
    if (date === row[3]) {
      return row[5]
    }
  }
}


if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
