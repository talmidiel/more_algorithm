/*
Problematic :
  You work in a real estate agency.
  Given an Array of every building of the street, sorted from east to west,
  check how many of them will be able to see the sunset (to the west)

  Basically, you have to check how many integers have an integer bigger than
  them after them in the array

  return the results and the number of comparisons for every version

Version :
  Solve the problematic with an O(n) algorithm
 */

module.exports = class Immolib {
  constructor(data) {
    this.data = data.reverse();
    this.result = 1;
    this.iterations = 0;
    this.tmp = []
  }

  run(i = 0) {
    if (this.data[0]) this.tmp.push(this.data[0]);
    if (i > this.data.length) return this.result = this.tmp.length;

    this.data = this.data.filter((n) => {
      this.iterations += 1;
      return n > this.data[0];
    });

    this.run(i + 1);
  }
};
