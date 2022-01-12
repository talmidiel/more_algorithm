/*
Problematic :
  Given an array of integers (positive or negatives) and a number k
  check if the given array contain two numbers whose sum is equal to k

  return the results and the number of comparisons for every version

Version :
  Solve the problematic by iterating over the array only once
 */

module.exports = class ContainSum {
  constructor(data, k) {
    this.data = data;
    this.iterations = 0;
    this.k = k;
    this.result = false;
  }

  /* a mon avis c'est de la triche, car includes() comme un passage sur l'arrayil verfifie dans
  toutes l'array les element un par un pour voir s'il correspond au parametre donné */

  run() {
    for (let i = 0; i < this.data.length; i += 1) {
      this.iterations += 1;
      if (this.data.includes(this.k - this.data[i])) {
        this.result = `true ${this.data[i]} + ${(this.k - this.data[i])} = ${this.k}`;
        return;
      }
    }
  }
};
