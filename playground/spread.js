function add (a, b) {
  return a + b;
}

var nums = [5, 3];
console.log(add(...nums));
console.log(add(...[6, 4]));
