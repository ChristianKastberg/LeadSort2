var fs = require('graceful-fs');


var arr = fs.readFileSync('filterKundeLeadsList.txt').toString().split('\n');


console.log(arr.length) // 1 all bunched up
// console.log(arr) // yep

//arr = arr[0].split(".com") 
//var arr1 = JSON.parse("[" +arr[0] +"]")



//arr = arr[0].split(", ")

//var regex = /.com|.dk/ // kræver flere .net etc 

//var res = regex.exec(arr[0]) 

var longStr = arr[0].toString();
// Country 
longStr = longStr.replaceAll('.com', '.com , \r')
longStr = longStr.replaceAll('.dk', '.dk , \r')
longStr = longStr.replaceAll('.uk', '.uk , \r')
longStr = longStr.replaceAll('.no', '.no , \r')
longStr = longStr.replaceAll('.de', '.de , \r')
longStr = longStr.replaceAll('.se', '.se , \r')
longStr = longStr.replaceAll('.fi', '.fi , \r')

longStr = longStr.replaceAll('.pl', '.pl , \r')
longStr = longStr.replaceAll('.at', '.at , \r')
longStr = longStr.replaceAll('.nu', '.nu , \r')
longStr = longStr.replaceAll('.store', '.store , \r')
longStr = longStr.replaceAll('.eu', '.eu , \r')
longStr = longStr.replaceAll('.ph', '.ph , \r')
longStr = longStr.replaceAll('.bz', '.bz , \r')
longStr = longStr.replaceAll('.as', '.as , \r')
longStr = longStr.replaceAll('.bbb', '.bbb , \r')
longStr = longStr.replaceAll('.shop', '.shop , \r')
longStr = longStr.replaceAll('.website', '.website , \r')
longStr = longStr.replaceAll('.site', '.site , \r')

// Top level domains
longStr = longStr.replaceAll('.org', '.org , \r')
longStr = longStr.replaceAll('.net', '.net , \r')
longStr = longStr.replaceAll('.edu', '.edu , \r')
longStr = longStr.replaceAll('.gov', '.gov , \r')
longStr = longStr.replaceAll('.edu', '.edu , \r')
longStr = longStr.replaceAll('.edu', '.edu , \r')


var arr1 = longStr.split(' , ')


console.log(arr1)
console.log(arr1.length) 




fs.writeFile("spamFilterList.txt","" , (err) => {
    if (err)
      console.log(err)});


for(i in arr1){
var res = arr1[i] 
fs.appendFile('spamFilterList.txt', res, function (err) {
    if (err) throw err;
        });
      }
  