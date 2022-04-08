var fs = require('graceful-fs')

var leadsArr = fs.readFileSync('spamFilterList.txt').toString().split('\n');
var dayshopArr = fs.readFileSync('dayshopSortedV2.txt').toString().split('\n');

console.log(leadsArr.length) //16844
console.log(dayshopArr.length) //800


for(i in leadsArr){
    leadsArr[i] = leadsArr[i].toLowerCase(); 
}
console.log(leadsArr.length) // unchanged length -> lowercase

for(i in dayshopArr){
    dayshopArr[i] = dayshopArr[i].toLowerCase(); 
}
console.log(dayshopArr.length) //unchanged length -> lowercase

for(i in leadsArr)[
    leadsArr[i] = leadsArr[i].replace("\r","")
]

dayshopArr = dayshopArr.filter(val => !leadsArr.includes(val));
console.log(dayshopArr.length) // err duplicates findes stadig, seramikku.dk er i begge lister

// Leadsarr har \r bag hver string i listen her er fejlen!
//console.log(dayshopArr.join('##'))




fs.writeFile("anydaySortedUniqueOnly.txt","" , (err) => {
    if (err)
      console.log(err)});


for(i in dayshopArr){
var res = dayshopArr[i] 
fs.appendFile('anydaySortedUniqueOnly.txt', res, function (err) {
    if (err) throw err;
        });
      }
  