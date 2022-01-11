module.exports = class Immolib {
  constructor(data) {
    this.data = data;
    this.result = 1;
    this.iterations = 0;
  }

  run() {
    for (let i = 0; i < this.data.length - 1; i += 1) {
      for (let j = i + 1; j < this.data.length; j += 1) {
        this.iterations += 1;
        if (this.data[i] < this.data[j]) {
          this.result -= 1;
          break;
        }
      }
      this.result += 1;
    }
  }
};
