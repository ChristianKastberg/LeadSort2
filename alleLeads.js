var fs = require('graceful-fs');

// OBS overskriv ikke alle leads sorted 
var leadsArr = fs.readFileSync('AlleKunderOgLeads.txt').toString().split('\n');
//console.log(leadsArr.length) // 16968 length
//leadsArr = [...new Set(leadsArr)]
//leadsArr = Array.from(leadsArr)
//console.log(leadsArr.length) // 16753 length after duplicate removal 

var dayshopArr = fs.readFileSync('dayshopSortedV2.txt').toString().split('\n');
console.log(dayshopArr.length) // 800 length



function lowerCaseFirstLetter(str) {

    const lower = str.charAt(0).toLowerCase() + str.slice(1);

    return lower;
}

for(i in leadsArr){
    leadsArr[i] = lowerCaseFirstLetter(leadsArr[i])
}
for(i in dayshopArr){
    dayshopArr[i] = lowerCaseFirstLetter(dayshopArr[i])
}

//console.log(leadsArr) lowercase
//console.log(leadsArr.length) // 16969 length all lowercase
//console.log(dayshopArr.length) // 800 length
//console.log(dayshopArr) // all lowercase

// FILTER V1
dayshopArr = dayshopArr.filter(val => !leadsArr.includes(val));

console.log(dayshopArr.length) // 800 intet fjernes fra listen?? - der er duplicates  


// FILTER V2
/** 
function duplicateFilter(arr1, arr2){
    arr1 = arr1.filter(function(val) {
        return arr2.indexOf(val) == -1;
      });
}

var newArr = duplicateFilter(dayshopArr, leadsArr);
*/





// AlleLeadsSortedFile Created
fs.writeFile("AlleLeadsSorted.txt","" , (err) => {
    if (err)
      console.log(err);
    });

for(i in dayshopArr){
    var res = dayshopArr[i]
    fs.appendFile("AlleLeadsSorted.txt", res, function (err) {
        if (err) throw err;
    });
}

// AlleKunderOgLeads Created -- ingen grund til at gøre det hver gang

/** 

fs.writeFile("AlleKunderOgLeads.txt","" , (err) => {
    if (err)
      console.log(err);
    });

for(i in leadsArr){
    var res = leadsArr[i]
    fs.appendFile("AlleKunderOgLeads.txt", res, function (err) {
        if (err) throw err;
      });
}
*/