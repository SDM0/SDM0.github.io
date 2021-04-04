//Fusion calculation function
function fusePoke() {

    //Pokemon from both text area
    var mon1 = getPokemonName("fname1");
    var mon2 = getPokemonName("fname2");
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
        var poke1 = "https://pokeapi.co/api/v2/pokemon/" + mon1; //may cause issues
        txhr.open('GET', poke1, true);
        txhr.send();
        txhr.onload = function() {
        var jsonBody = txhr.responseText;

        if(jsonBody) {
            if(jsonBody != "Not Found"){
                try {
                    a = JSON.parse(jsonBody);
                } catch(e) {
                    alert("First pokemon was misspelled or PokeAPI is having issues !");
                }
            }
            else{
                alert("First pokemon was misspelled or PokeAPI is having issues !");
            }
        }

        // Can't parse if the json is trash
        var jsonString = JSON.parse(jsonBody);

        //ID selector for sprite showcase of the 1st mon/ Validator for 1st mon
        var num1 = jsonString.id;
        var id1 = num1;
        var idCheck1 = false;
        for (var i = 0; i < ids.length; i++){
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
            var compt = 0;

            //Exception mon selected for swapped types
            for (var i = 0; i < typeSwap.length; i++) {
                if (typeSwap[i][2] == mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                    mon1types.push(typeSwap[i][0]);
                    mon1types.push(typeSwap[i][1]);
                    var compt = 1;
                }
            }

            //Exception mon selected for one type
            for (var i = 0; i < typeUni.length; i++) {
                if (typeUni[i][1] == mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                    mon1types.push(typeUni[i][0]);
                    var compt = 2;
                }
            }

            //Type of 1st mon
            if (compt == 0) {
                mon1types.push(type1[0].type.name);
                if (type1.length == 2 && compt != 2) {
                    if (type1[0].type.name == "normal" && type1[1].type.name == "flying" && mon1 != "fletchling") {
                        mon1types[0] = "flying";
                    } else {
                        mon1types.push(type1[1].type.name);
                    }
                }
            }
            
            //Stats of 1st mon
            var stats1;
            if (statsException.includes(mon1)) {
                stats1 = statsFix[statsException.indexOf(mon1)];
            } else {
                stats1 = jsonString.stats;
            }

            var mon1stats = [];
            for (var i = 0; i < stats1.length; i++) {
                mon1stats.push(stats1[i].base_stat);
            }

            //Ability of 1st mon
            var ab1;
            if (abilitiesException.includes(mon1)) {
                ab1 = abilitiesFix[abilitiesException.indexOf(mon1)];
            } else {
                ab1 = jsonString.abilities;
            }

            var mon1abilities = [];
            for (var i = 0; i < ab1.length; i++) {
                mon1abilities.push([ab1[i].ability, ab1[i].is_hidden]);
            }  

            //2nd request
            var pxhr = new XMLHttpRequest();
            var poke2 = "https://pokeapi.co/api/v2/pokemon/" + mon2; //may cause issues
            pxhr.open('GET', poke2, true);
            pxhr.send();
            pxhr.onload = function() {
                var jsonBody = pxhr.responseText;

                if(jsonBody) {
                    if(jsonBody != "Not Found"){
                        try {
                            a = JSON.parse(jsonBody);
                        } catch(e) {
                            alert("Second pokemon was misspelled or PokeAPI is having issues !");
                        }
                    }
                    else{
                        alert("Second pokemon was misspelled or PokeAPI is having issues !");
                    }
                }
        
                // Can't parse if the json is trash
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
                for (var i = 0; i < ids.length; i++){
                    if (ids[i][0] == mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                        idCheck2 = true;
                        num2 = ids[i][1];
                    }
                }
                if (idCheck2 == false && id2 >= 252) {
                    alert("The second pokemon isn't in the fangame!")
                } else {

                    //Name of fusions
                    document.getElementById("FP1").innerHTML = fmon1+ "/" + fmon2;
                    document.getElementById("FP2").innerHTML = fmon2 + "/" + fmon1;

                    //Name of pictures
                    var pic1 = num1 + "." + num2 + ".png";
                    var pic2 = num2 + "." + num1 + ".png";

                    //Type selector for fusion type knowledge of the 2nd mon
                    var type2 = jsonString.types;
                    var mon2types = [];
                    var compt = 0;

                    //Exception mon selected for swapped types
                    for (var i = 0; i < typeSwap.length; i++) {
                        if (typeSwap[i][2] == mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                            mon2types.push(typeSwap[i][0]);
                            mon2types.push(typeSwap[i][1]);
                            var compt = 1;
                        }
                    }
            
                    //Exception mon selected for one type
                    for (var i = 0; i < typeUni.length; i++) {
                        if (typeUni[i][1] == mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                            mon2types.push(typeUni[i][0]);
                            var compt = 2;
                        }
                    }
            
                    //Type of 2nd mon
                    if (compt == 0) {
                        mon2types.push(type2[0].type.name);
                        if (type2.length == 2 && compt != 2) {
                            if (type2[0].type.name == "normal" && type2[1].type.name == "flying" && mon2 != "fletchling") {
                                mon2types[0] = "flying";
                            } else {
                                mon2types.push(type2[1].type.name);
                            }
                        }
                    }
                    
                    //Stats of 2nd mon
                    var stats2;
                    if (statsException.includes(mon2)) {
                        stats2 = statsFix[statsException.indexOf(mon2)];
                    } else {
                        stats2 = jsonString.stats;
                    }
                    var mon2stats = [];
                    for (var i = 0; i < stats2.length; i++) {
                        mon2stats.push(stats2[i].base_stat);
                    }

                    //Abilities of 2nd mon
                    var ab2;
                    if (abilitiesException.includes(mon2)) {
                        ab2 = abilitiesFix[abilitiesException.indexOf(mon2)];
                    } else {
                        ab2 = jsonString.abilities;
                    }

                    var mon2abilities = [];
                    for (var i = 0; i < ab2.length; i++) {
                        mon2abilities.push([ab2[i].ability, ab2[i].is_hidden]);
                    }                     

                    //Stats calculation
                    var hp1 = (mon2stats[0]/3) + 2*(mon1stats[0]/3);
                    var atk1 = 2*(mon2stats[1]/3) + (mon1stats[1]/3);
                    var def1 = 2*(mon2stats[2]/3) + (mon1stats[2]/3);
                    var spatk1 = (mon2stats[3]/3) + 2*(mon1stats[3]/3);
                    var spdef1 = (mon2stats[4]/3) + 2*(mon1stats[4]/3);
                    var spe1 = 2*(mon2stats[5]/3) + (mon1stats[5]/3);
                    var bs1 = Math.floor(hp1) + Math.floor(atk1) + Math.floor(def1) + Math.floor(spatk1) + Math.floor(spdef1) + Math.floor(spe1);

                    var hp2 = (mon1stats[0]/3) + 2*(mon2stats[0]/3);
                    var atk2 = 2*(mon1stats[1]/3) + (mon2stats[1]/3);
                    var def2= 2*(mon1stats[2]/3) + (mon2stats[2]/3);
                    var spatk2 = (mon1stats[3]/3) + 2*(mon2stats[3]/3);
                    var spdef2 = (mon1stats[4]/3) + 2*(mon2stats[4]/3);
                    var spe2 = 2*(mon1stats[5]/3) + (mon2stats[5]/3);
                    var bs2 = Math.floor(hp2) + Math.floor(atk2) + Math.floor(def2) + Math.floor(spatk2) + Math.floor(spdef2) + Math.floor(spe2);

                    var L0 = ["hp1","atk1","def1","spatk1","spdef1","spe1","bs1"];
                    var L1 = ["hp2","atk2","def2","spatk2","spdef2","spe2","bs2"];
                    var L2 = [Math.floor(hp1), Math.floor(atk1), Math.floor(def1), Math.floor(spatk1), Math.floor(spdef1), Math.floor(spe1), Math.floor(bs1)];
                    var L3 = [Math.floor(hp2), Math.floor(atk2), Math.floor(def2), Math.floor(spatk2), Math.floor(spdef2), Math.floor(spe2), Math.floor(bs2)];
                    var L4 = [];
                    var L5 = [];
                    for (var i = 0; i < L0.length; i++) {
                        L4.push(Math.max(L2[i], L3[i])-Math.min(L2[i], L3[i]));
                    }
                    //Color of stats
                    for (var i = 0; i < L1.length; i++) {
                        if (L2[i] < L3[i]) {
                            document.getElementById(L0[i]).style.color = "red";
                            document.getElementById(L1[i]).style.color = "green";
                            L5.push(" (+" + L4[i] + ")");
                            L4[i] = " (-" + L4[i] + ")";
                        } else if (L2[i] > L3[i]) {
                            document.getElementById(L1[i]).style.color = "red";
                            document.getElementById(L0[i]).style.color = "green";
                            L5.push(" (-" + L4[i] + ")");
                            L4[i] = " (+" + L4[i] + ")";
                        } else {
                            document.getElementById(L1[i]).style.color = "orange";
                            document.getElementById(L0[i]).style.color = "orange";
                            L4[i] = " (0)";
                            L5.push(" (0)");
                        }
                        document.getElementById(L0[i]).innerHTML = L0[i].slice(-1) + ": " + L2[i];
                        document.getElementById(L1[i]).innerHTML = L1[i].slice(-1) + ": " + L3[i];
                    }

                    //Writting stat in HTML

                    /*
                    if (mon1 == "shedinja" || mon2 == "shedinja") {
                        document.getElementById("hp1").innerHTML = "HP: 1 (0)";
                        document.getElementById("hp1").style.color = "orange";
                    } else {*/
                    document.getElementById("hp1").innerHTML = "HP: " + Math.floor(hp1) + L4[0];
                    /*}*/

                    document.getElementById("atk1").innerHTML = "ATK: " + Math.floor(atk1) + L4[1];
                    document.getElementById("def1").innerHTML = "DEF: " + Math.floor(def1) + L4[2];
                    document.getElementById("spatk1").innerHTML = "SPE.ATK: " + Math.floor(spatk1) + L4[3];
                    document.getElementById("spdef1").innerHTML = "SPE.DEF: " + Math.floor(spdef1) + L4[4];
                    document.getElementById("spe1").innerHTML = "SPEED: " + Math.floor(spe1) + L4[5];
                    document.getElementById("bs1").innerHTML = "TOTAL: " + Math.floor(bs1) + L4[6];

                    /*
                    if (mon1 == "shedinja" || mon2 == "shedinja") {
                        document.getElementById("hp2").innerHTML = "HP: 1 (0)";
                        document.getElementById("hp2").style.color = "orange";
                    } else {*/
                    document.getElementById("hp2").innerHTML = "HP: " + Math.floor(hp2) + L5[0];
                    /*}*/
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

                    //Type of fused mons
                    var fmonres1 = fusType(mon1types, mon2types);
                    var fmonres2 = fusType(mon2types, mon1types);

                    //Types effectiveness
                    if (typeComp>0) {
                        c = document.getElementsByClassName('monweak');
                        for( b=0; b < c.length; b++ )
                        { 
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

                    for (var i = 0; i < typeName.length; i++) {
                        result2[i] = (types[i][tyeffid1[0]] * types[i][tyeffid1[1]]);
                    }

                    for (var i = 0; i < typeName.length; i++) {
                        var image = new Image();
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
                    if (fmonres1.length!=1 && (fmonres1.length == 2 && fmonres1[0] != fmonres1[1])) {
                        document.getElementById("p2").style.display = "inline-block";
                        document.getElementById("p2").src = "Types/" + fmonres1[1] + ".png";
                    } else {
                        document.getElementById("p2").style.display = "none";
                    }

                    document.getElementById("p3").src = "Types/" + fmonres2[0] + ".png";

                    if (fmonres2.length!=1 && (fmonres2.length == 2 && fmonres2[0] != fmonres2[1])) {
                        document.getElementById("p4").style.display = "inline-block";
                        document.getElementById("p4").src = "Types/" + fmonres2[1] + ".png";
                    } else {
                        document.getElementById("p4").style.display = "none";
                    }

                    //Picture of fusions (if inside CustomBattlers)
                    showFusion("pic1", pic1);
                    showFusion("pic2", pic2);

                    //NEW
                    //Abilities 1
                    var abilities1 = fusionAbilities(mon1abilities, mon2abilities);
                    var hiddenAbilities1 = fusionHiddenAbilities(mon1abilities, mon2abilities, abilities1);
                    var abilitiesText1 = "ABILITY: " + sanitizeAbilityList(abilities1);
                    var hiddenAbilitiesText1 = sanitizeAbilityList(hiddenAbilities1);

                    document.getElementById("ab1").innerHTML = abilitiesText1;
                    document.getElementById("hab1").innerHTML = hiddenAbilitiesText1;

                    //NEW
                    //Abilities 2
                    var abilties2 = fusionAbilities(mon2abilities, mon1abilities);
                    var hiddenAbilities2 = fusionHiddenAbilities(mon2abilities, mon1abilities, abilties2);
                    var abilitiesText2 = "ABILITY: " + sanitizeAbilityList(abilties2);
                    var hiddenAbilitiesText2 = sanitizeAbilityList(hiddenAbilities2);

                    document.getElementById("ab2").innerHTML = abilitiesText2;
                    document.getElementById("hab2").innerHTML = hiddenAbilitiesText2;

                    //Fusion done
                    document.getElementById("random").disabled = false;
                    }
                }
            }
        }
    }
}
