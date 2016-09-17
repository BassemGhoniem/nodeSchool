/**
var through = require('through2');
var transform = through(write);


var trumpet = require('trumpet');
var tr = trumpet();
tr.selectAll('.loud', function (loud) {
  console.log(loud);
    loud.createReadStream().pipe(transform);
});


function write (buffer, encoding, next) {
  console.log(buffer.toString());
  this.push(buffer.toString().toUpperCase());
  next();
}

process.stdout.pipe(tr).pipe(process.stdout);
*/
var trumpet = require('trumpet');
var tr = trumpet();
var through = require('through');
tr.pipe(process.stdout);

tr.selectAll('.loud', function (loud) {
    var stream = loud.createStream();
    stream.pipe(through(function (buf) {
        this.queue(buf.toString().toUpperCase());
    })).pipe(stream);
});

var fs = require('fs');
process.stdin.pipe(tr);
/**


// Here's the reference solution:

  var trumpet = require('trumpet');
  var through = require('through2');
  var tr = trumpet();
  
  var loud = tr.select('.loud').createStream();
  loud.pipe(through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  })).pipe(loud);
  
  process.stdin.pipe(tr).pipe(process.stdout);
*/
