/*
Problematic :
  Given an array of integers (positive or negatives) and a number k
  check if the given array contain two numbers whose sum is equal to k

  return the results and the number of comparisons for every version

Version :
  Solve the problematic with an O(n) algorithm
 */

module.exports = class ContainSum {
  constructor(data, k) {
    this.data = data;
    this.iterations = 0;
    this.k = k;
    this.result = false;
    this.sums = [];
  }

  run() {
    for (let i = 0; i < this.data.length; i += 1) {
      this.iterations += 1;
      if (this.sums.includes(this.data[i])) {
        this.result = `true ${(this.k - this.data[i])} + ${this.data[i]} = ${this.k}`;
        return;
      }
      this.sums.push(this.k - this.data[i]);
    }
  }
};
