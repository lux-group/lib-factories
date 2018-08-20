function counter() {
  let count = 0;

  return function() {
    count = count + 1;
    return count;
  };
}

module.exports = counter;
