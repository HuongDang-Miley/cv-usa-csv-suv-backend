const getTotalCasesByDay = function(date, data) {
  for (const row of data) {
    if (date === row[3]) {
      return row[4]
    }

  }
}


if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
