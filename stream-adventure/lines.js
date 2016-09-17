var through = require('through2');
var split = require('split');
var tr = through(write);
var even = false;
process.stdin.pipe(split(/(\r?\n)/)).pipe(tr).pipe(process.stdout);
function write (line, encoding, next) {
  line = line.toString();
  if(line != '\n') {
    if (even) {
      even = false;
      line = line.toUpperCase();
    } else {
      even = true;
      line = line.toLowerCase();
    }

  }
  this.push(line);
  next();
}
