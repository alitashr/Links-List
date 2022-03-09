var fs = require("fs");
fs.readFile("public/entrypoints.json", function (err, content) {
  if (err) throw err;
  var entrypointsJSON = JSON.parse(content);
  // var entrypoints = entrypointsJSON.entries;

  fs.writeFile("src/entrypoints.json", JSON.stringify(entrypointsJSON), function (err) {
    if (err) throw err;
    // console.log(`Current build number: ${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision} ${metadata.buildTag}`);
  });
});
