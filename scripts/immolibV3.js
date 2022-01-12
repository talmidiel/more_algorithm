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
