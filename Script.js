const fs = require("fs");
const data = JSON.parse(fs.readFileSync("sample.json", "utf8"));
const n = data.keys.n;
const k = data.keys.k;

let X = [],
  Y = [];

for (let key in data) {
  if (key === "keys") continue;
  X.push(parseInt(key));
  Y.push(parseInt(data[key].value, parseInt(data[key].base)));
}

function lagrangeZero(X, Y, k) {
  let c = 0;
  for (let i = 0; i < k; i++) {
    let li = 1;
    for (let j = 0; j < k; j++) {
      if (i != j) li *= (0 - X[j]) / (X[i] - X[j]);
    }
    c += Y[i] * li;
  }
  return Math.round(c);
}

console.log(lagrangeZero(X, Y, k));
