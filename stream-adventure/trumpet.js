var trumpet = require('trumpet');
var tr = trumpet();
tr.pipe(process.stdout);

var ws = tr.select('tbody').createWriteStream();
ws.end('<tr><td>rawr</td></tr>');

var fs = require('fs');

s.createReadStream(__dirname + '/table.html').pipe(tr);
