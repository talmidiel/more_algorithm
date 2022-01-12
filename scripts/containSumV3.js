module.exports = class ContainSum {
  constructor(data, k) {
    this.data = data;
    this.iterations = 0;
    this.k = k;
    this.result = false;
  }

  run() {
    for (let i = 0; i < this.data.length; i += 1) {
      this.iterations += 1;
      if (this.data.includes(this.k - this.data[i])) {
        return this.result = `true ${this.data[i]} + ${(this.k - this.data[i])} = ${this.k}`;
      }
    }
  }
}