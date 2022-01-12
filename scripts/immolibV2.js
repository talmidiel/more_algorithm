module.exports = class Immolib {
  constructor(data) {
    this.data = data;
    this.result = 1;
    this.iterations = 0;
  }

  run(last = this.data.length - 1) {
    for (let i = last; i >= 0; i -= 1) {
      this.iterations += 1;
      if (this.data[i] > this.data[last]) {
        this.result += 1;
        return this.run(i);
      }
    }
  }
};
