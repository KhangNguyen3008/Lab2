const fs = require('fs');

const { throws } = require("assert");

const file1Content = fs.readFileSync('file1.txt', 'utf-8', function(err){
    if(err) throw err;

const file2Content = fs.readFileSync('file2.txt', 'utf-8', function(err){
    if (err) throw err;

const file3Content = file1Content + file2Content;
fs.writeFileSync('file3.txt', file3Content, function(err){
    if (err) throw err;

const file3ContentRead = fs.readFileSync('file3.txt', 'utf-8');
console.log(file3ContentRead);
        });
    });
});