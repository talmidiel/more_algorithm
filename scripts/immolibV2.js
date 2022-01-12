module.exports = class Immolib {
  constructor(data) {
    this.data = data.reverse();
    this.result = 1;
    this.iterations = 0;
    this.tmp = []
  }

  run(i = 0) {
    if (this.data[0]) this.tmp.push(this.data[0]);
    console.log(this.data,  this.tmp)
    if (i > this.data.length) return this.result = this.tmp.length;


    this.data = this.data.filter((n) => {
      this.iterations += 1;
      return n > this.data[0];
    });

    this.run(i + 1);
  }
};
