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
