var head, body, fusion, dex, back, icon;
head = "bulbasaur";
body = "charmander";
fusion = head + body;

var hxhr = new XMLHttpRequest();
hxhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+head, true);
hxhr.send( null );
var jsonHead = hxhr.responseText;

var bxhr = new XMLHttpRequest();
bxhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+body, true);
bxhr.send( null );
var jsonBody = bxhr.responseText;

console.log(jsonHead);
console.log(jsonBody); 

var mon1 = (document.getElementById("pokemon1")).value;
var mon2 = (document.getElementById("pokemon2")).value;
document.getElementById(("FP1")).append(" "+mon1+"/"+mon2);
document.getElementById(("FP2")).append(" "+mon2+"/"+mon1);