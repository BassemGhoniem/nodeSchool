/**
 * Readable streams produce data that can be fed into a writable, transform,
 * or duplex stream by calling .pipe():
 */
var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep ');
rs.push('boop\n');
rs.push(null);

rs.pipe(process.stdout);
