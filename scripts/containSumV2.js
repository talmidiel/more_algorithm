module.exports = class ContainSum {
  constructor(data, k) {
    this.data = data;
    this.iterations = 0;
    this.k = k;
    this.result = false;
  }

  run(low = 0) {
    for (let i = low + 1; i < this.data.length; i += 1) {
      this.iterations += 1;
      if (this.data[low] + this.data[i] === this.k) {
        this.result = `true ${this.data[low]} + ${this.data[i]} = ${this.k}`;
        return;
      }
    }

    if (!this.result && low < this.data.length - 2) {
      //this.run(low + 1);
      return
    }
  }
};
