/*
Problematic :
  You work in a real estate agency.
  Given an Array of every building of the street, sorted from east to west,
  check how many of them will be able to see the sunset (to the west)

  Basically, you have to check how many integers have an integer bigger than
  them after them in the array

  return the results and the number of comparisons for every version

Version :
  Solve the problematic with an O(n2) algorithm
 */

module.exports = class Immolib {
  constructor(data) {
    this.data = data;
    this.result = 1;
    this.iterations = 0;
    this.isMax = false;
  }

  run() {
    for (let i = 0; i < this.data.length - 1; i += 1) {
      for (let j = i + 1; j < this.data.length; j += 1) {
        this.iterations += 1;
        if (this.data[i] > this.data[j]) {
          this.isMax = true;
        } else {
          this.isMax = false;
          break;
        }
      }
      if (this.isMax) this.result += 1;
    }
  }
};
