// file system 
// synchronas
// asynchronas


console.log("read start");
const fs = require('fs');
fs.readFile('input.txt',function (err, data)  {
    if(err) {
        console.log(err);
        return err;
    }
    console.log(data.toString())
    return data ;


});
console.log('other ')