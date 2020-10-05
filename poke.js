fs.readFile('/poke.json', function (err, data) {
    if (err) throw err;
    console.log(data);
  });

var mon1 = (document.getElementById("pokemon1")).value;
var mon2 = (document.getElementById("pokemon2")).value;
document.getElementById(("FP1")).append(" "+mon1+"/"+mon2);
document.getElementById(("FP2")).append(" "+mon2+"/"+mon1);

document.getElementById("pokemon1").onchange= function() {change()};
document.getElementById("pokemon2").onchange= function() {change()};

function change() {
    var mon1 = (document.getElementById("pokemon1")).value;
    var mon2 = (document.getElementById("pokemon2")).value;
    console.log(mon1);
    console.log(json.bulbasaur);
    if (mon1!=mon2) {
        console.log(library.includes(mon1));


        console.log(document.getElementById(("FP1")).value);
        document.getElementById(("FP1")).innerHTML=(" "+mon1+"/"+mon2);
        document.getElementById(("FP2")).innerHTML=(" "+mon2+"/"+mon1);
    }
}
