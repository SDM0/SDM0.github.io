//Data exceptions (poke-api isn't fully updated)
const weezingabilities = {
    "abilities": [
        {
            "ability": {
                "name": "levitate",
                "url": "https://pokeapi.co/api/v2/ability/69/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "neutralizing-gas",
                "url": "https://pokeapi.co/api/v2/ability/5/"
            },
            "is_hidden": false,
            "slot": 2
        },
        {
            "ability": {
                "name": "stench",
                "url": "https://pokeapi.co/api/v2/ability/125/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ]
}

const aegislashstats = {
    "stats": [
        {
            "base_stat": 60,
            "effort": 0,
            "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        {
            "base_stat": 50,
            "effort": 0,
            "stat": {
                "name": "attack",
                "url": "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        {
            "base_stat": 140,
            "effort": 2,
            "stat": {
                "name": "defense",
                "url": "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        {
            "base_stat": 50,
            "effort": 0,
            "stat": {
                "name": "special-attack",
                "url": "https://pokeapi.co/api/v2/stat/4/"
            }
        },
        {
            "base_stat": 140,
            "effort": 1,
            "stat": {
                "name": "special-defense",
                "url": "https://pokeapi.co/api/v2/stat/5/"
            }
        },
        {
            "base_stat": 60,
            "effort": 0,
            "stat": {
                "name": "speed",
                "url": "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    ]
}

const types = new Array(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1, 1],// Normal
    [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1, 1],// Fire
    [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1],// Water
    [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1],// Electric
    [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 1],// Grass
    [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 1],// Ice
    [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5, 1],// Fighting
    [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2, 1],// Poison
    [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1, 1],// Ground
    [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1, 1],// Flying
    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1, 1],// Psychic
    [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5, 1],// Bug
    [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1],// Rock
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1],// Ghost
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0, 1],// Dragon
    [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 1],// Dark
    [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2, 1],// Steel
    [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1],// Fairy
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);// None

const typeName = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];
var result1 = new Array();
var result2 = new Array();

var chk = []
var ids2 = []

var typeComp = 0;

//Adding options to datalist
var box1 = document.getElementById('fname1');
var box2 = document.getElementById('fname2');
var dl = document.createElement('datalist');
dl.id = 'dlPkmn';

for (var i = 0; i < ids.length; i += 1) {
    var option = document.createElement('option');
    //Special name case
    option.value = nameCheck(ids[i][0])
    dl.appendChild(option);
}
box1.appendChild(dl);
box2.appendChild(dl);

//Press 'Enter' event
document.addEventListener("keydown", function (event) {
    key = event.key || event.keyCode
    if (key == 'Enter' || key == 13) {
        if (box1 === document.activeElement && box1.value.length != 0) {
            box1.value = nameCheck(outputClosest(box1.value))
        } else if (box2 === document.activeElement && box2.value.length != 0) {
            box2.value = nameCheck(outputClosest(box2.value))
        }
    if (box1.value.length != 0 && box2.value.length != 0) {
        verifInputs()
        }
    }
});

//Empty pokemon text area
function resetPoke() {
    document.getElementById("fname1").value = null;
    document.getElementById("fname2").value = null;
    document.getElementById("p1").src = "Types/null.png";
    document.getElementById("p2").style = "display:none";
    document.getElementById("p3").src = "Types/null.png";
    document.getElementById("p4").style = "display:none";
    document.getElementById("pic1").src = "question.png";
    document.getElementById("pic2").src = "question.png";

    document.getElementById("IG1").innerHTML = "";
    document.getElementById("IG2").innerHTML = "";

    document.getElementById("FP1").innerHTML = "mon1/mon2";
    document.getElementById("FP2").innerHTML = "mon2/mon1";

    document.getElementById("hp1").innerHTML = "HP: ";
    document.getElementById("atk1").innerHTML = "ATK: ";
    document.getElementById("def1").innerHTML = "DEF: ";
    document.getElementById("spatk1").innerHTML = "SPE.ATK: ";
    document.getElementById("spdef1").innerHTML = "SPE.DEF: ";
    document.getElementById("spe1").innerHTML = "SPEED: ";
    document.getElementById("bs1").innerHTML = "TOTAL: ";
    document.getElementById("ab1").innerHTML = "ABILITY:";

    document.getElementById("hp2").innerHTML = "HP: ";
    document.getElementById("atk2").innerHTML = "ATK: ";
    document.getElementById("def2").innerHTML = "DEF: ";
    document.getElementById("spatk2").innerHTML = "SPE.ATK: ";
    document.getElementById("spdef2").innerHTML = "SPE.DEF: ";
    document.getElementById("spe2").innerHTML = "SPEED: ";
    document.getElementById("bs2").innerHTML = "TOTAL: ";
    document.getElementById("ab2").innerHTML = "ABILITY:";

    document.getElementById("weak14").innerHTML = "x4: ";
    document.getElementById("weak12").innerHTML = "x2: ";
    document.getElementById("weak11").innerHTML = "x1: ";
    document.getElementById("weak105").innerHTML = "x0.5: ";
    document.getElementById("weak1025").innerHTML = "x0.25: ";
    document.getElementById("weak100").innerHTML = "x0: ";

    document.getElementById("weak24").innerHTML = "x4: ";
    document.getElementById("weak22").innerHTML = "x2: ";
    document.getElementById("weak21").innerHTML = "x1: ";
    document.getElementById("weak205").innerHTML = "x0.5: ";
    document.getElementById("weak2025").innerHTML = "x0.25: ";
    document.getElementById("weak200").innerHTML = "x0: ";

    var L0 = ["hp1", "atk1", "def1", "spatk1", "spdef1", "spe1", "bs1"];
    var L1 = ["hp2", "atk2", "def2", "spatk2", "spdef2", "spe2", "bs2"];
    for (var i = 0; i < L0.length; i++) {
        document.getElementById(L0[i]).style.color = "";
        document.getElementById(L1[i]).style.color = "";
    }
}

//Random pokemon
function randomPoke() {
    document.getElementById("random").disabled = true;
    var idsRand = orderByEvo()
    var rand1 = Math.floor(Math.random() * (idsRand.length + 1))
    var rand2 = Math.floor(Math.random() * (idsRand.length + 1))
    document.getElementById("fname1").value = nameCheck(idsRand[rand1][0])
    document.getElementById("fname2").value = nameCheck(idsRand[rand2][0])
    document.getElementById("button").click();
}

//Random pokemon for a specific input
function randomHalf(inputField) {
    var idsRand = orderByEvo()
    var rand = Math.floor(Math.random() * (idsRand.length + 1))
    if (inputField == 1) {
        box1.value = nameCheck(idsRand[rand][0])
        if (box2.value.length > 0) {
            document.getElementById("r1").disabled = true;
            document.getElementById("button").click();
        }
    } else {
        box2.value = nameCheck(idsRand[rand][0])
        if (box1.value.length > 0) {
            document.getElementById("r2").disabled = true;
            document.getElementById("button").click();
        }
    }
}

//Fusion calculation function
function fusePoke() {

    //Pokemon from both text area
    var mon1 = (document.getElementById("fname1")).value.toLowerCase();
    var mon2 = (document.getElementById("fname2")).value.toLowerCase();
    if ((mon1 == "" || mon1.length == 0 || mon1 == null) || (mon2 == "" || mon2.length == 0 || mon2 == null)) {
        document.getElementById("random").disabled = false
        alert("Please fill the two text inputs!");
    } else {
        //Special mon selector: Giratina, Deoxys
        if (nameException.includes(mon1)) {
            mon1 = nameFix[nameException.indexOf(mon1)];
        }
        if (nameException.includes(mon2)) {
            mon2 = nameFix[nameException.indexOf(mon2)];
        }

        //First request
        var txhr = new XMLHttpRequest();
        var poke1 = 'https://pokeapi.co/api/v2/pokemon/' + mon1;
        txhr.open('GET', poke1, true);
        txhr.send();
        txhr.onload = function () {
            var jsonBody = txhr.responseText;
            if (jsonBody) {
                try {
                    a = JSON.parse(jsonBody);
                } catch (e) {
                    alert("The first pokemon was misspelled!"); // error in the above string (in this case, yes)!
                }
            }
            var jsonString = JSON.parse(jsonBody);

            //ID selector for sprite showcase of the 1st mon/ Validator for 1st mon
            var num1 = jsonString.id;
            var id1 = num1;
            var idCheck1 = false;
            for (i = 0; i < ids.length; i++) {
                if (ids[i][0] == mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                    idCheck1 = true;
                    num1 = ids[i][1];
                }
            }
            if (idCheck1 == false && id1 >= 252) {
                alert("The first pokemon isn't in the fangame!")
            } else {
                //Type selector for fusion type knowledge of the 1st mon
                var type1 = jsonString.types;
                var poke1 = 'https://pokeapi.co/api/v2/pokemon/' + type1[0].type.name;
                var mon1types = [];
                var compt = 0

                //Exception mon selected for swapped types
                for (i = 0; i < typeSwap.length; i++) {
                    if (typeSwap[i][2] == mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                        mon1types.push(typeSwap[i][0]);
                        mon1types.push(typeSwap[i][1]);
                        var compt = 1;
                    }
                }

                //Exception mon selected for one type
                for (i = 0; i < typeUni.length; i++) {
                    if (typeUni[i][1] == mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                        mon1types.push(typeUni[i][0]);
                        var compt = 2;
                    }
                }

                //Type of 1st mon
                if (compt == 0) {
                    mon1types.push(type1[0].type.name);
                    if (type1.length == 2 && compt != 2) {
                        if (type1[0].type.name == "normal" && type1[1].type.name == "flying") {
                            mon1types[0] = "flying";
                        } else {
                            mon1types.push(type1[1].type.name);
                        }
                    }
                }

                //Stats of 1st mon
                var mon1stats = [];
                if (mon1 != "aegislash-shield") {
                    var stats1 = jsonString.stats;
                } else {
                    var stats1 = aegislashstats.stats;
                }
                for (i = 0; i < stats1.length; i++) {
                    mon1stats.push(stats1[i].base_stat)
                }

                //Ability of 1st mon
                var mon1abilities = [];
                if (mon1 != "weezing") {
                    var ab1 = jsonString.abilities;
                } else {
                    var ab1 = weezingabilities.abilities;
                }
                for (i = 0; i < ab1.length; i++) {
                    mon1abilities.push([ab1[i].ability, ab1[i].is_hidden]);
                }

                //2nd request
                var pxhr = new XMLHttpRequest();
                var poke2 = 'https://pokeapi.co/api/v2/pokemon/' + mon2
                pxhr.open('GET', poke2, true);
                pxhr.send();
                pxhr.onload = function () {

                    var jsonBody = pxhr.responseText;
                    if (jsonBody) {
                        try {
                            a = JSON.parse(jsonBody);
                        } catch (e) {
                            alert("The second pokemon was misspelled!"); // error in the above string (in this case, yes)!
                        }
                    }
                    var jsonString = JSON.parse(jsonBody);

                    //Name of fusion
                    if (!nameFix.includes(mon1) && !nameFix.includes(mon2)) {
                        var fmon1 = mon1.charAt(0).toUpperCase() + mon1.slice(1);
                        var fmon2 = mon2.charAt(0).toUpperCase() + mon2.slice(1);
                    } else if (nameFix.includes(mon1) && !nameFix.includes(mon2)) {
                        var fmon1 = nameException[nameFix.indexOf(mon1)].charAt(0).toUpperCase() + nameException[nameFix.indexOf(mon1)].slice(1);
                        var fmon2 = mon2.charAt(0).toUpperCase() + mon2.slice(1);
                    } else if (!nameFix.includes(mon1) && nameFix.includes(mon2)) {
                        var fmon1 = mon1.charAt(0).toUpperCase() + mon1.slice(1);
                        var fmon2 = nameException[nameFix.indexOf(mon2)].charAt(0).toUpperCase() + nameException[nameFix.indexOf(mon2)].slice(1);
                    } else if (nameFix.includes(mon1) && nameFix.includes(mon2)) {
                        var fmon1 = nameException[nameFix.indexOf(mon1)].charAt(0).toUpperCase() + nameException[nameFix.indexOf(mon1)].slice(1);
                        var fmon2 = nameException[nameFix.indexOf(mon2)].charAt(0).toUpperCase() + nameException[nameFix.indexOf(mon2)].slice(1);
                    }

                    //ID selector for sprite showcase of the 2st mon
                    var num2 = jsonString.id;
                    var id2 = num2;
                    var idCheck2 = false;
                    for (i = 0; i < ids.length; i++) {
                        if (ids[i][0] == mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                            idCheck2 = true;
                            num2 = ids[i][1];
                        }
                    }
                    if (idCheck2 == false && id2 >= 252) {
                        alert("The second pokemon isn't in the fangame!")
                    } else {

                        //Name of fusions
                        document.getElementById("FP1").innerHTML = fmon1 + "/" + fmon2;
                        document.getElementById("FP2").innerHTML = fmon2 + "/" + fmon1;

                        //Name of pictures
                        var pic1 = num1 + "." + num2 + ".png";
                        var pic2 = num2 + "." + num1 + ".png";

                        //Type selector for fusion type knowledge of the 2nd mon
                        var type2 = jsonString.types;
                        var mon2types = [];
                        var compt = 0

                        //Exception mon selected for swapped types
                        for (i = 0; i < typeSwap.length; i++) {
                            if (typeSwap[i][2] == mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                                mon2types.push(typeSwap[i][0]);
                                mon2types.push(typeSwap[i][1]);
                                var compt = 1;
                            }
                        }

                        //Exception mon selected for one type
                        for (i = 0; i < typeUni.length; i++) {
                            if (typeUni[i][1] == mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                                mon2types.push(typeUni[i][0]);
                                var compt = 2;
                            }
                        }

                        //Type of 2nd mon
                        if (compt == 0) {
                            mon2types.push(type2[0].type.name);
                            if (type2.length == 2 && compt != 2) {
                                if (type2[0].type.name == "normal" && type2[1].type.name == "flying") {
                                    mon2types[0] = "flying";
                                } else {
                                    mon2types.push(type2[1].type.name);
                                }
                            }
                        }

                        //Stats of 2nd mon
                        var mon2stats = [];
                        if (mon2 != "aegislash-shield") {
                            var stats2 = jsonString.stats;
                        } else {
                            var stats2 = aegislashstats.stats;
                        }
                        for (i = 0; i < stats2.length; i++) {
                            mon2stats.push(stats2[i].base_stat)
                        }

                        //Abilities of 2nd mon
                        if (mon2 != "weezing") {
                            var ab2 = jsonString.abilities;
                        } else {
                            var ab2 = weezingabilities.abilities;
                        }
                        var mon2abilities = [];
                        for (i = 0; i < ab2.length; i++) {
                            mon2abilities.push([ab2[i].ability, ab2[i].is_hidden]);
                        }

                        //Stats calculation
                        var hp1 = (mon2stats[0] / 3) + 2 * (mon1stats[0] / 3);
                        var atk1 = 2 * (mon2stats[1] / 3) + (mon1stats[1] / 3);
                        var def1 = 2 * (mon2stats[2] / 3) + (mon1stats[2] / 3);
                        var spatk1 = (mon2stats[3] / 3) + 2 * (mon1stats[3] / 3);
                        var spdef1 = (mon2stats[4] / 3) + 2 * (mon1stats[4] / 3);
                        var spe1 = 2 * (mon2stats[5] / 3) + (mon1stats[5] / 3);
                        var bs1 = Math.floor(hp1) + Math.floor(atk1) + Math.floor(def1) + Math.floor(spatk1) + Math.floor(spdef1) + Math.floor(spe1);

                        var hp2 = (mon1stats[0] / 3) + 2 * (mon2stats[0] / 3);
                        var atk2 = 2 * (mon1stats[1] / 3) + (mon2stats[1] / 3);
                        var def2 = 2 * (mon1stats[2] / 3) + (mon2stats[2] / 3);
                        var spatk2 = (mon1stats[3] / 3) + 2 * (mon2stats[3] / 3);
                        var spdef2 = (mon1stats[4] / 3) + 2 * (mon2stats[4] / 3);
                        var spe2 = 2 * (mon1stats[5] / 3) + (mon2stats[5] / 3);
                        var bs2 = Math.floor(hp2) + Math.floor(atk2) + Math.floor(def2) + Math.floor(spatk2) + Math.floor(spdef2) + Math.floor(spe2);

                        var L0 = ["hp1", "atk1", "def1", "spatk1", "spdef1", "spe1", "bs1"];
                        var L1 = ["hp2", "atk2", "def2", "spatk2", "spdef2", "spe2", "bs2"];
                        var L2 = [Math.floor(hp1), Math.floor(atk1), Math.floor(def1), Math.floor(spatk1), Math.floor(spdef1), Math.floor(spe1), Math.floor(bs1)];
                        var L3 = [Math.floor(hp2), Math.floor(atk2), Math.floor(def2), Math.floor(spatk2), Math.floor(spdef2), Math.floor(spe2), Math.floor(bs2)];
                        var L4 = []
                        var L5 = []
                        for (i = 0; i < L0.length; i++) {
                            L4.push(Math.max(L2[i], L3[i]) - Math.min(L2[i], L3[i]))
                        }
                        //Color of stats
                        for (i = 0; i < L1.length; i++) {
                            if (L2[i] < L3[i]) {
                                document.getElementById(L0[i]).style.color = "red";
                                document.getElementById(L1[i]).style.color = "green";
                                L5.push(" (+" + L4[i] + ")")
                                L4[i] = " (-" + L4[i] + ")";
                            } else if (L2[i] > L3[i]) {
                                document.getElementById(L1[i]).style.color = "red";
                                document.getElementById(L0[i]).style.color = "green";
                                L5.push(" (-" + L4[i] + ")")
                                L4[i] = " (+" + L4[i] + ")";
                            } else {
                                document.getElementById(L1[i]).style.color = "orange";
                                document.getElementById(L0[i]).style.color = "orange";
                                L4[i] = " (0)"
                                L5.push(" (0)");
                            }
                            document.getElementById(L0[i]).innerHTML = L0[i].slice(-1) + ": " + L2[i];
                            document.getElementById(L1[i]).innerHTML = L1[i].slice(-1) + ": " + L3[i];
                        }

                        //Writting stat in HTML
                        if (mon1 == "shedinja" || mon2 == "shedinja") {
                            document.getElementById("hp1").innerHTML = "HP: 1 (0)"
                            document.getElementById("hp1").style.color = "orange";
                        } else {
                            document.getElementById("hp1").innerHTML = "HP: " + Math.floor(hp1) + L4[0];
                        }
                        document.getElementById("atk1").innerHTML = "ATK: " + Math.floor(atk1) + L4[1];
                        document.getElementById("def1").innerHTML = "DEF: " + Math.floor(def1) + L4[2];
                        document.getElementById("spatk1").innerHTML = "SPE.ATK: " + Math.floor(spatk1) + L4[3];
                        document.getElementById("spdef1").innerHTML = "SPE.DEF: " + Math.floor(spdef1) + L4[4];
                        document.getElementById("spe1").innerHTML = "SPEED: " + Math.floor(spe1) + L4[5];
                        document.getElementById("bs1").innerHTML = "TOTAL: " + Math.floor(bs1) + L4[6];

                        if (mon1 == "shedinja" || mon2 == "shedinja") {
                            document.getElementById("hp2").innerHTML = "HP: 1 (0)";
                            document.getElementById("hp2").style.color = "orange";
                        } else {
                            document.getElementById("hp2").innerHTML = "HP: " + Math.floor(hp2) + L5[0];
                        }
                        document.getElementById("atk2").innerHTML = "ATK: " + Math.floor(atk2) + L5[1];
                        document.getElementById("def2").innerHTML = "DEF: " + Math.floor(def2) + L5[2];
                        document.getElementById("spatk2").innerHTML = "SPE.ATK: " + Math.floor(spatk2) + L5[3];
                        document.getElementById("spdef2").innerHTML = "SPE.DEF: " + Math.floor(spdef2) + L5[4];
                        document.getElementById("spe2").innerHTML = "SPEED: " + Math.floor(spe2) + L5[5];
                        document.getElementById("bs2").innerHTML = "TOTAL: " + Math.floor(bs2) + L5[6];

                        //Abilities of fused mons
                        if (abilitySwap.includes(mon1)) {
                            [mon1abilities[0], mon1abilities[1]] = [mon1abilities[1], mon1abilities[0]];
                        }
                        if (abilitySwap.includes(mon2)) {
                            [mon2abilities[0], mon2abilities[1]] = [mon2abilities[1], mon2abilities[0]];
                        }
                        var abres1 = fusAb(mon1abilities, mon2abilities);
                        var abres2 = fusAb(mon2abilities, mon1abilities);


                        //Type of fused mons
                        var fmonres1 = fusType(mon1types, mon2types);
                        var fmonres2 = fusType(mon2types, mon1types);

                        //Types effectiveness
                        if (typeComp > 0) {
                            c = document.getElementsByClassName('monweak');
                            for (b = 0; b < c.length; b++) {
                                defaultValue = c[b].getAttribute('data-default');
                                if (defaultValue) {
                                    c[b].innerText = defaultValue;
                                }
                            }
                        }

                        tyeffid1 = typeId(fmonres1);
                        tyeffid2 = typeId(fmonres1);

                        for (var i = 0; i < typeName.length; i++) {
                            result1[i] = (types[i][tyeffid1[0]] * types[i][tyeffid1[1]]);
                        }

                        for (var i = 0; i < typeName.length; i++) {
                            var image = new Image()
                            image.src = 'Types/' + typeName[i] + ".png";

                            if (result1[i] == 4) {
                                document.getElementById("weak14").appendChild(image);
                            }
                            if (result1[i] == 2) {
                                document.getElementById("weak12").appendChild(image);
                            }
                            if (result1[i] == 1) {
                                document.getElementById("weak11").appendChild(image);
                            }
                            if (result1[i] == 0.5) {
                                document.getElementById("weak105").appendChild(image);
                            }
                            if (result1[i] == 0.25) {
                                document.getElementById("weak1025").appendChild(image);
                            }
                            if (result1[i] == 0) {
                                document.getElementById("weak100").appendChild(image);
                            }
                        }

                        tyeffid1 = typeId(fmonres2);
                        tyeffid2 = typeId(fmonres2);

                        for (i = 0; i < typeName.length; i++) {
                            result2[i] = (types[i][tyeffid1[0]] * types[i][tyeffid1[1]]);
                        }

                        for (i = 0; i < typeName.length; i++) {
                            var image = new Image()
                            image.src = 'Types/' + typeName[i] + ".png";

                            if (result2[i] == 4) {
                                document.getElementById("weak24").appendChild(image);
                            }
                            if (result2[i] == 2) {
                                document.getElementById("weak22").appendChild(image);
                            }
                            if (result2[i] == 1) {
                                document.getElementById("weak21").appendChild(image);
                            }
                            if (result2[i] == 0.5) {
                                document.getElementById("weak205").appendChild(image);
                            }
                            if (result2[i] == 0.25) {
                                document.getElementById("weak2025").appendChild(image);
                            }
                            if (result2[i] == 0) {
                                document.getElementById("weak200").appendChild(image);
                            }
                        }

                        typeComp += 1;

                        document.getElementById("p1").src = "Types/" + fmonres1[0] + ".png";
                        if (fmonres1.length != 1 && (fmonres1.length == 2 && fmonres1[0] != fmonres1[1])) {
                            document.getElementById("p2").style.display = "inline-block";
                            document.getElementById("p2").src = "Types/" + fmonres1[1] + ".png";
                        } else {
                            document.getElementById("p2").style.display = "none";
                        }

                        document.getElementById("p3").src = "Types/" + fmonres2[0] + ".png";

                        if (fmonres2.length != 1 && (fmonres2.length == 2 && fmonres2[0] != fmonres2[1])) {
                            document.getElementById("p4").style.display = "inline-block";
                            document.getElementById("p4").src = "Types/" + fmonres2[1] + ".png";
                        } else {
                            document.getElementById("p4").style.display = "none";
                        }

                        //Picture of fusion (if inside CustomBattlers)
                        showFusion("pic1", pic1);
                        showFusion("pic2", pic2);

                        var listAb1 = "ABILITY: ";
                        for (i = 0; i < abres1.length; i++) {
                            listAb1 = listAb1 + abres1[i].charAt(0).toUpperCase() + abres1[i].slice(1) + " / ";
                        }
                        listAb1 = listAb1.slice(0, listAb1.length - 1);
                        listAb1 = listAb1.split("-").join(" ")
                        listAb1 = listAb1.split(" ")
                        for (i = 0, x = listAb1.length; i < x; i++) {
                            listAb1[i] = listAb1[i][0].toUpperCase() + listAb1[i].substr(1);
                        }
                        listAb1 = listAb1.join(" ").slice(0, -2);

                        document.getElementById("ab1").innerHTML = " ";
                        document.getElementById("ab1").innerHTML = listAb1;

                        var listAb2 = "ABILITY: ";
                        for (i = 0; i < abres2.length; i++) {
                            listAb2 = listAb2 + abres2[i].charAt(0).toUpperCase() + abres2[i].slice(1) + " / ";
                        }
                        listAb2 = listAb2.slice(0, listAb2.length - 1);
                        listAb2 = listAb2.split("-").join(" ")
                        listAb2 = listAb2.split(" ")
                        for (i = 0, x = listAb2.length; i < x; i++) {
                            listAb2[i] = listAb2[i][0].toUpperCase() + listAb2[i].substr(1);
                        }
                        listAb2 = listAb2.join(" ").slice(0, -2);
                        document.getElementById("ab2").innerHTML = " ";
                        document.getElementById("ab2").innerHTML = listAb2;


                        //Fusion is already in Showdown or not
                        if (listfusion.includes(fmon1.toLowerCase() + "/" + fmon2.toLowerCase())) {
                            document.getElementById("IG1").style.color = "green";
                            document.getElementById("IG1").innerHTML = "In Showdown";
                        } else {
                            document.getElementById("IG1").style.color = "red";
                            document.getElementById("IG1").innerHTML = "Not in Showdown";
                        }

                        if (listfusion.includes(fmon2.toLowerCase() + "/" + fmon1.toLowerCase())) {
                            document.getElementById("IG2").style.color = "green";
                            document.getElementById("IG2").innerHTML = "In Showdown";
                        } else {
                            document.getElementById("IG2").style.color = "red";
                            document.getElementById("IG2").innerHTML = "Not in Showdown";
                        }

                        document.getElementById("r1").disabled = false
                        document.getElementById("r2").disabled = false
                        document.getElementById("random").disabled = false
                    }
                }
            }
        }
    }
}


function typeId(ftype) {
    var ty1 = typeName.indexOf(ftype[0]);
    if (ftype.length == 2) {
        var ty2 = typeName.indexOf(ftype[1]);
    } else {
        var ty2 = 18;
    }
    return [ty1, ty2];
}

//Custom sprite fusion function
function showFusion(elementId, fusionId) {

    fusionUrl = "https://aegide.github.io/CustomBattlers/" + fusionId;

    if (doesImageExists(fusionUrl)) {
        document.getElementById(elementId).src = fusionUrl;
    }
    else {//Screenshot of autogen pokemon
        fallbackFusionRepository = "https://raw.githubusercontent.com/Aegide/FusionSprites/master/Japeal/"
        headId = fusionId.split(".")[0];
        fallbackFusionUrl = fallbackFusionRepository + headId + "/" + fusionId;

        document.getElementById(elementId).src = fallbackFusionUrl;
    }
}

//Error detection
function doesImageExists(imageUrl) {
    var http = new XMLHttpRequest();
    http.open('HEAD', imageUrl, false);
    http.send();
    return http.status != 404;
}

//Picks the first option from the input datalist
function outputClosest(mon) {
    var saveWrite = mon
    mon = mon[0].toUpperCase() + mon.substring(1)
    for (var i = 0; i < ids.length; i++) {
        if (ids[i][0].substring(0, mon.length) == mon) {
            return ids[i][0]
        }
    }
    return saveWrite
}

//Verify inputs on 'Enter' press (and soon too 'Fuse' button)
function verifInputs() {
    var i = 0
    var bx1 = nameCheck(box1.value[0].toUpperCase() + box1.value.substring(1))
    var bx2 = nameCheck(box2.value[0].toUpperCase() + box2.value.substring(1))
    var boxbool1 = false
    var boxbool2 = false
    while (i < ids.length) {
        if (ids[i].includes(bx1)) {
            var boxbool1 = true
        }
        if (ids[i].includes(bx2)) {
            var boxbool2 = true
        }
        i += 1
    }
    if (boxbool1 == true && boxbool2 == true) {
        event.preventDefault();
        document.getElementById("button").click();
    } else if (boxbool1 == false && boxbool2 == false) {
        box1.value = ""
        box2.value = ""
        alert("Both pokemons were misspelled or aren't in the fangame!")
    } else if (boxbool1 == false) {
        box1.value = ""
        alert("The first pokemon was misspelled or isn't in the fangame!")
    } else if (boxbool2 == false) {
        box2.value = ""
        alert("The second pokemon misspelled or isn't in the fangame!")
    }
}

//Change the pokemon's name if exception (Giratina-origin, Aegislash-shield...)
function nameCheck(mon) {
    if (nameFix.includes(mon.toLowerCase())) {
        var val = nameException[nameFix.indexOf(mon.toLowerCase())]
        val = val[0].toUpperCase() + val.substring(1)
    } else if (nameException.includes(mon.toLowerCase())) {
        var val = nameFix[nameException.indexOf(mon.toLowerCase())]
        val = val[0].toUpperCase() + val.substring(1)
    } else {
        var val = mon;
    }
    return val
}

//Turns on/off the setting menu
function menuBtn() {
    var menu = document.getElementById("menu")
    if (menu.hidden == true) {
        menu.hidden = false;
    } else {
        menu.hidden = true;
    }
}

//Sort ids list by evolution line
function orderByEvo() {
    var chk2 = []
    var matches = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
    for (var i=0; i<matches.length; i++) {
        chk2.push(matches[i].value)
    }
    if (chk2.length > 0 && JSON.stringify(chk) !== JSON.stringify(chk2)) {
        ids2 = []
        if (!chk2.includes("1")) {
            for (var i = 0; i<ids.length; i++) {
                if (ids[i][2]==1) {
                    ids2.push(ids[i])
                }
            }
        }
        if (!chk2.includes("2")) {
            for (var i = 0; i<ids.length; i++) {
                if (ids[i][2]==2) {
                    ids2.push(ids[i])
                }
            }
        }
        if (!chk2.includes("3")) {
            for (var i = 0; i<ids.length; i++) {
                if (ids[i][2]==3) {
                    ids2.push(ids[i])
                }
            }
        }
        chk = chk2
    } else {
        ids2 = ids
    }
    return ids2
}

//Ability fusion function
function fusAb(mon1, mon2) {
    var fabs = [];
    var H0 = mon1[0][0].name;
    if (mon1.length == 3 && mon1[2][1] == true) {
        var H1 = mon1[1][0].name;
        var HH = mon1[2][0].name;
    } else if (mon1.length == 2 && mon1[1][1] == true) {
        var HH = mon1[1][0].name;
    } else if (mon1.length == 2 && mon1[1][1] == false) {
        var H1 = mon1[1][0].name;
    }
    var B0 = mon2[0][0].name;
    if (mon2.length == 3 && mon2[2][1] == true) {
        var B1 = mon2[1][0].name;
        var BH = mon2[2][0].name;
    } else if (mon2.length == 2 && mon2[1][1] == true) {
        var BH = mon2[1][0].name;
    } else if (mon1.length == 2 && mon1[1][1] == false) {
        var B1 = mon2[1][0].name;
    }
    //cas H0/null/null + B0/null/null [H0=B0] -> H0/null/null
    if (mon1.length == 1 && mon2.length == 1 && mon1[0][1] == false && mon2[0][1] == false) {
        if (H0 == B0) {
            fabs.push(H0);
            //cas H0/null/null + B0/null/null [H0#B0] -> H0/B0/null
        } else if (H0 != B0) {
            fabs.push(H0);
            fabs.push(B0);
        }
        //cas H0/H1/null + B0/null/null [H0=B0] -> H0/H1/null
    } else if (mon1.length == 2 && mon2.length == 1 && mon1[0][1] == false && mon1[1][1] == false && mon2[0][1] == false) {
        if (H0 == B0) {
            fabs.push(H0);
            fabs.push(H1);
            //cas H0/H1/null + B0/null/null [H0#B0] -> H0/B0/H1
        } else if (H0 != B0) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(H1);
        }
        //cas H0/null/HH + B0/null/null [H0=B0 | HH=B0] -> H0/null/HH
    } else if (mon1.length == 2 && mon2.length == 1 && mon1[0][1] == false && mon1[1][1] == true && mon2[0][1] == false) {
        if (H0 == B0 || HH == B0) {
            fabs.push(H0);
            fabs.push(HH);
            //cas H0/null/HH + B0/null/null [H0#B0 & HH#B0] -> H0/B0/HH
        } else if (H0 != B0 && HH != B0) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
        }
        //cas H0/H1/HH + B0/null/null [H0=B0 | B0=HH] -> H0/H1/HH
    } else if (mon1.length == 3 && mon2.length == 1 && mon1[0][1] == false && mon1[1][1] == false && mon1[2][1] == true && mon2[0][1] == false) {
        if (H0 == B0 || B0 == HH) {
            fabs.push(H0);
            fabs.push(H1);
            fabs.push(HH);
            //cas H0/H1/HH + B0/null/null [H0#B0 & HH#B0] -> H0/B0/HH
        } else if (H0 != B0 && HH != B0) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
        }
        //cas H0/null/null + B0/B1/null [H0=B1] -> H0/B0/null
    } else if (mon1.length == 1 && mon2.length == 2 && mon1[0][1] == false && mon2[0][1] == false && mon2[1][1] == false) {
        if (H0 == B1) {
            fabs.push(H0);
            fabs.push(B0);
            //cas H0/null/null + B0/B1/null [H0=B0] -> H0/B1/null
        } else if (H0 == B0) {
            fabs.push(H0);
            fabs.punch(B1);
            //cas H0/null/null + B0/B1/null [H0#B0 & H0#B1] -> H0/B1/B0
        } else if (H0 != B0 && H0 != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(B0);
        }
        //cas H0/H1/null + B0/B1/null [H0=B1] -> H0/B0/H1
    } else if (mon1.length == 2 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == false && mon2[0][1] == false && mon2[1][1] == false) {
        if (H0 == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(H1);
            //cas H0/H1/null + B0/B1/null [H0=B0] -> H0/B1/H1
        } else if (H0 == B0) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(H1);
            //cas H0/H1/null + B0/B1/null [H1#B0 & H1#B1] -> H0/B1/H1
        } else if (H1 != B0 && H1 != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(H1);
        }
        //cas H0/null/HH + B0/B01/null [H0=B1 | HH=B1] -> H0/B0/HH
    } else if (mon1.length == 2 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == true && mon2[0][1] == false && mon2[1][1] == false) {
        if (H0 == B1 || HH == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
            //cas H0/null/HH + B0/B1/null [H0#B1 & HH#B1] -> H0/B1/HH
        } else if (H0 != B1 && HH != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(H1);
        }
        //cas H0/H1/HH + B0/B1/null [H0=B1 | HH=B1] -> H0/B0/HH
    } else if (mon1.length == 3 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == false && mon1[2][1] == true && mon2[0][1] == false && mon2[1][1] == false) {
        if (H0 == B1 || HH == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
            //cas H0/H1/HH + B0/B1/null [H0#B1 & HH#B1] -> H0/B1/HH
        } else if (H0 != B1 && HH != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(HH);
        }
        //cas H0/null/null + B0/null/BH [H0=BH] -> H0/null/B0
    } else if (mon1.length == 1 && mon2.length == 2 && mon1[0][1] == false && mon2[0][1] == false && mon2[1][1] == true) {
        if (H0 == BH) {
            fabs.push(H0);
            fabs.push(B0);
            //cas H0/null/null + B0/null/BH [H0=B0] -> H0/null/BH
        } else if (H0 == B0) {
            fabs.push(H0);
            fabs.push(BH);
            //cas H0/null/null + B0/null/BH [H0#B0 & H0#BH] -> H0/B0/BH
        } else if (H0 != B0 && H0 != BH) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(BH);
        }
        //cas H0/H1/null + B0/null/BH [H0=BH] -> H0/B0/H1
    } else if (mon1.length == 2 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == false && mon2[0][1] == false && mon2[1][1] == true) {
        if (H0 == BH) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(H1);
            //cas H0/H1/null + B0/null/BH [H0=B0] -> H0/BH/H1
        } else if (H0 == B0) {
            fabs.push(H0);
            fabs.push(BH);
            fabs.push(H1);
            //cas H0/H1/null + B0/null/BH [H0#BH & H1#BH] -> H0/H1/BH
        } else if (H0 != BH && H1 != BH) {
            fabs.push(H0);
            fabs.push(H1);
            fabs.push(BH);
        }
        //cas H0/null/HH + B0/null/BH [H0=BH | HH=BH] -> H0/B0/HH
    } else if (mon1.length == 2 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == true && mon2[0][1] == false && mon2[1][1] == true) {
        if (H0 == BH || HH == BH) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
            //cas H0/null/HH + B0/null/BH [H0#BH & HH#BH] -> H0/BH/HH
        } else if (H0 != BH && HH != BH) {
            fabs.push(H0);
            fabs.push(BH);
            fabs.push(HH);
        }
        //cas H0/H1/HH + B0/null/BH [H0=BH | HH=BH] -> H0/B0/HH
    } else if (mon1.length == 3 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == false && mon1[2][1] == true && mon2[0][1] == false && mon2[1][1] == true) {
        if (H0 == BH || HH == BH) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
            //cas H0/H1/HH + B0/null/BH [H0#BH & HH#BH] -> H0/BH/HH
        } else if (H0 != BH && HH != BH) {
            fabs.push(H0);
            fabs.push(BH);
            fabs.push(HH);
        }
        //cas H0/null/null + B0/B1/BH [H0#B1 & H0#BH] -> H0/B1/BH
    } else if (mon1.length == 1 && mon2.length == 3 && mon1[0][1] == false && mon2[0][1] == false && mon2[1][1] == false && mon2[2][1] == true) {
        if (H0 != B1 && H0 != BH) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(BH);
            //cas H0/null/null + B0/B1/BH [H0=B1] -> H0/B0/BH
        } else if (H0 == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(BH);
            //cas H0/null/null + B0/B1/BH [H0=BH] -> H0/B1/B0
        } else if (H0 == BH) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(B0);
        }
        //cas H0/H1/null + B0/B1/BH [H0#B1 & H0#BH] -> H0/B1/BH
    } else if (mon1.length == 2 && mon2.length == 3 && mon1[0][1] == false && mon1[1][1] == false && mon2[0][1] == false && mon2[1][1] == false && mon2[2][1] == true) {
        if (H0 == B1 || H0 == BH) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(BH);
            //cas H0/H1/null + B0/B1/BH [H0=B1] -> H0/B0/BH
        } else if (H0 == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(BH);
            //cas H0/H1/null + B0/B1/BH [H0=BH] -> H0/B1/B0
        } else if (H0 == BH) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(B0);
        }
        //cas H0/null/HH + B0/B1/BH [H0#B1 & HH#B1] -> H0/B1/HH
    } else if (mon1.length == 2 && mon2.length == 3 && mon1[0][1] == false && mon1[1][1] == true && mon2[0][1] == false && mon2[1][1] == false && mon2[2][1] == true) {
        if (H0 != B1 && HH != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(HH);
            //cas H0/null/HH + B0/B1/BH [H0=B1 | HH=B1] -> H0/B0/HH
        } else if (H0 == B1 || HH == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
            //cas H0/null/HH + B0/B1/BH [H0=B0 | HH=B0] -> H0/B1/HH
        } else if (H0 == B0 || HH == B0) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(HH);
        }
        //cas H0/H1/HH + B0/B1/BH [H0#B1 & HH#B1] -> H0/B1/HH
    } else if (mon1.length == 3 && mon2.length == 3 && mon1[0][1] == false && mon1[1][1] == false && mon1[2][1] == true && mon2[0][1] == false && mon2[1][1] == false && mon2[2][1] == true) {
        if (H0 != B1 && HH != B1) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(HH);
            //cas H0/H1/HH + B0/B1/BH [H0=B1 | HH=B1] -> H0/B0/HH
        } else if (H0 == B1 || HH == B1) {
            fabs.push(H0);
            fabs.push(B0);
            fabs.push(HH);
            //cas H0/H1/HH + B0/B1/BH [H0=B0 | HH=B0] -> H0/B1/HH
        } else if (H0 == B0 || HH == B0) {
            fabs.push(H0);
            fabs.push(B1);
            fabs.push(HH);
        }
    }
    return fabs
}


//Type fusion function
function fusType(mon1, mon2) {
    //cas H0/null + B0/null [H0#B0] -> H0/B0
    var fmon = []
    if (mon1.length == 1 && mon2.length == 1) {
        if (mon1[0] != mon2[0]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[0])
            //cas H0/null + B0/null [H0=B0] -> H0/null
        } else {
            fmon.push(mon1[0]);
        }
    } else if (mon1.length == 2 && mon2.length == 1) {
        //cas H0/H1 + B0/null [H0#B0] -> H0/B0
        if (mon1[0] != mon2[0]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[0]);
            //cas H0/H1 + B0/null [H0=B0] -> H0/H1
        } else {
            fmon.push(mon1[0]);
            fmon.push(mon1[1]);
        }
    } else if (mon1.length == 1 && mon2.length == 2) {
        //cas H0/null + B0/B1 [H0#B1] -> H0/B1
        if (mon1[0] != mon2[1]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[1]);
            //cas H0/null + B0/B1 [H0=B1] -> H0/B0
        } else {
            fmon.push(mon1[0])
            fmon.push(mon2[0]);
        }
        //cas H0/H1 + B0/B1 [H0=B1] -> H0/B0
    } else if (mon1.length == 2 && mon2.length == 2) {
        if (mon1[0] == mon2[1]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[0]);
            //cas H0/H1 + B0/B1 [H0#B1] -> H0/B1
        } else {
            fmon.push(mon1[0]);
            fmon.push(mon2[1]);
        }
    }
    return fmon
}
