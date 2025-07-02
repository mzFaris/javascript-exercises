const fibonacci = function(n) {
  if (n < 0) {
    return "OOPS";
  }

  const result = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      result.push(i);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result.pop();
};

// Do not edit below this line
module.exports = fibonacci;
