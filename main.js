const fs = require('fs');

const generateData = () => {
  let array = [];
  for (let i = 0; i < 10; i += 1) array.push(Math.floor(Math.random() * 201) - 100);
  fs.writeFileSync('./data/small_sum.txt', array.join(' '));
  array = [];
  for (let i = 0; i < 1000; i += 1) array.push(Math.floor(Math.random() * 20001) - 10000);
  fs.writeFileSync('./data/medium_sum.txt', array.join(' '));
  array = [];
  for (let i = 0; i < 10000; i += 1) array.push(Math.floor(Math.random() * 2000001) - 1000000);
  fs.writeFileSync('./data/huge_sum.txt', array.join(' '));
  array = [];
  for (let i = 0; i < 10; i += 1) array.push(Math.floor(Math.random() * 100));
  fs.writeFileSync('./data/small_immolib.txt', array.join(' '));
  array = [];
  for (let i = 0; i < 1000; i += 1) array.push(Math.floor(Math.random() * 10000));
  fs.writeFileSync('./data/medium_immolib.txt', array.join(' '));
  array = [];
  for (let i = 0; i < 10000; i += 1) array.push(Math.floor(Math.random() * 1000000));
  fs.writeFileSync('./data/huge_immolib.txt', array.join(' '));
};

//generateData()

const scripts = fs.readdirSync('scripts');

try {
  scripts.map((script) => {
    const Script = require(`./scripts/${script}`);
    const algorithm = new Script(
      fs.readFileSync(process.argv[2], 'utf8').split(' ').map((i) => parseInt(i, 10)),
      parseInt(process.argv[3], 10),
    );
    algorithm.run();
    console.log(`${script}: ${algorithm.iterations} comparaisons, resultats: ${algorithm.result}`);
  });
} catch (err) {
  console.error(err.message);
}
