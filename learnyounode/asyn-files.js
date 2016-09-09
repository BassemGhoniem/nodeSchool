var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (err, text) {
  if (err)
    return console.error("can't read file");
  console.log(text.split("\n").length - 1);
});
