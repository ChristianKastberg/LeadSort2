var fs = require('fs');
 
fs.writeFile('dayshopSorted.txt',"",(err)=>{
    if(err)
        console.log(err);
        else
        console.log("file created");
});


// 816 entries pre sort
var basicArr = fs.readFileSync("anydayUnfilteredShops.txt").toString().split('\n');
var compareArr = fs.readFileSync("tempSet.txt").toString().split('\n');

// filter 
// "https://"
// ?utm

var newarr = [];
for(i in basicArr){
    // 
    newarr.push(basicArr[i].substring(basicArr[i].indexOf('//')+2,basicArr[i].indexOf('/?')))
}
// edgecase filters
for(i in newarr){
    if(newarr[i].includes("www.")){
        newarr[i] = newarr[i].slice(4);
    }
    if(newarr[i].includes("xn--")){
        newarr[i] = newarr[i].slice(4);
    }
    if(newarr[i].includes("https://")){
        newarr[i] = newarr[i].slice(8);
    }
}

newarr.sort();


var finalArr = Array.from(newarr);



// program der converter det første bogstav til uppercase
// identiske sider fanges ikke hvis den ene har uppercase og den anden ikke har 

function capitalizeFirstLetter(str) {

    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}


for(i in finalArr){
    finalArr[i] = capitalizeFirstLetter(finalArr[i]);
    
}
for(i in compareArr){
    compareArr[i] = capitalizeFirstLetter(compareArr[i]);
}


// prototype.unique løsningen virker ikke


console.log(compareArr.length)
console.log(finalArr.length)

finalArr = finalArr.filter(val => !compareArr.includes(val));

// err Seramikku findes i begge lister!
// hvad sker der for min filter funktion????

// filter fase 1 done 
// 2. compare til final_list... wth
// 3 gem resultat i .txt fil done

for(i in finalArr){
  var res = finalArr[i]

   fs.appendFileSync('dayshopSorted.txt', res+'\n' , function (err) {
    if (err) throw err;
  });
}
