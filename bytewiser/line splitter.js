#!/usr/bin/env node

var fs = require('fs');

fs.readFile(process.argv[2], function (err, data){
  if (err) throw err;

  var offset = 0;

  for (var i = 0; i < data.length; i++ ){

    if (data[i] === 0xA) {     
      console.log(data.slice(offset, i));
      offset = i + 1; 
    }
  }
  console.log(data.slice(offset, i));
});