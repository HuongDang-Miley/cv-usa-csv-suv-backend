const getRows = function(str) {
  let arr = str.split('\n')
  let result =[]
  for (const ele of arr) {
    result.push(ele.split(','))
  }
  return   result
}

if (typeof getRows === 'undefined') {
  getRows = undefined;
}

module.exports = getRows;
