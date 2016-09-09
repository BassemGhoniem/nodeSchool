(function () {
  var fs = require('fs');
  var path = require('path');
  fs.readdir(process.argv[2], filterExt);
  function filterExt(err, files) {
    if (err) {
      return console.error("error while reading dir");
    }
    files.forEach(function (file) {
      if (path.extname(file) == '.' + process.argv[3]) {
        console.log(file);
      }
    })
  }
})();
