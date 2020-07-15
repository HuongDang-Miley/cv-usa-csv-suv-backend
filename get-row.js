const getRow = function(arr) {
  return arr.split(',')
}


if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
