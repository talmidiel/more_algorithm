
/*
Problematic :
  You work in a real estate agency.
  Given an Array of every building of the street, sorted from east to west,
  check how many of them will be able to see the sunset (to the west)

  Basically, you have to check how many integers have an integer bigger than
  them after them in the array

  return the results and the number of comparisons for every version

Version :
  Solve the problematic by iterating over the array only once
 */
module.exports = class Immolib {
  constructor(data) {
    this.data = data;
    this.result = 1;
    this.iterations = 0;
    this.last = 0;
  }

  run() {
    this.last = this.data[this.data.length - 1];
    for (let i = this.data.length - 1; i >= 0; i -= 1) {
      this.iterations += 1;
      if (this.data[i] > this.last) {
        this.last = this.data[i];
        this.result += 1;
      }
    }
  }
};
