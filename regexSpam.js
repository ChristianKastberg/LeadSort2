var fs = require('graceful-fs');



var AltingArr = fs.readFileSync('AlleKunderOgLeads.txt').toString().split('\n');
//console.log(AltingArr.length) // 16975 length

//Maks 1 domæne pr. linje
//Ingen domæner med æøå
//KUN rene domæner (ingen ekstra tegn eller lign på linjen)


var resultArr = [];
for(i in AltingArr){
    var regex = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
    //if(AltingArr[i].match(regex) == !null ) { // match returns array IKKE true/false if træder ikke i kraft
       resultArr = resultArr.concat(AltingArr[i].match(regex))
    

}
console.log(resultArr.length) // 16975
//console.log(resultArr) 

/** 
for(i in resultArr){
    if(resultArr[i] == null){
        var x = 0;
        var pos = resultArr.indexOf(resultArr[i])
        res = resultArr.splice(pos,1)
    }
}
*/
// hov er det filter der smækker mine arrays ind i en stor klump!!
resultArr = resultArr.filter(n => n)

console.log(resultArr.length) // 16934 - 41 ryger 
console.log(resultArr) // 

fs.writeFile("filterKundeLeadsList.txt","" , (err) => {
    if (err)
      console.log(err)});


for(i in resultArr){
var res = resultArr[i] 
fs.appendFile('filterKundeLeadsList.txt', res, function (err) {
    if (err) throw err;
        });
      }
  