var concate = require('concat-stream');

function reverse (data) {
  data = data.toString().split("").reverse().join("");
  process.stdout.write(data);
}

process.stdin.pipe(concate(reverse))//.pipe(process.stdout);

