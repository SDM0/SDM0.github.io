var result1 = new Array();
var result2 = new Array();
var typeComp = 0;

var mon1, mon2;
var num1, num2;
var mon1stats, mon2stats;
var mon1types, mon2types;
var mon1abilities, mon2abilities;
var jsonBody;

//Press ENTER on text area 1
var pkmn1 = document.getElementById('fname1');
pkmn1.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});


//Press ENTER on text area 2
var pkmn2 = document.getElementById('fname2');
pkmn2.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});


//Empty pokemon text area
function resetPoke() {
    document.getElementById("fname1").value = null;
    document.getElementById("fname2").value = null;
}


function getRandomPokeID(){
    maxPoke = 420
    return Math.floor(Math.random() * Math.floor(maxPoke));
}


function randomPoke() {
    document.getElementById("random").disabled = true;
    rand1 = getRandomPokeID()
    rand2 = getRandomPokeID()

    var name = ids[rand1][0].toLowerCase();
    if (nameFix.includes(name)) {
        name = nameException[nameFix.indexOf(name)];
    }
    document.getElementById("fname1").value = name

    var name2 = ids[rand2][0].toLowerCase();
    if (nameFix.includes(name2)) {
        name2 = nameException[nameFix.indexOf(name2)];
    }
    document.getElementById("fname2").value = name2

    fusePoke()
}


function getPokemonName(htmlId){
    var pokemonName = (document.getElementById(htmlId)).value.toLowerCase();
    pokemonName = pokemonName.replace(/\W/g, '');
    return pokemonName;
}


//Fusion calculation function
function fusePoke() {

    //Pokemon from both text area
    mon1 = getPokemonName("fname1");
    mon2 = getPokemonName("fname2");

    if (isMissingNames(mon1, mon2)) {
	    document.getElementById("random").disabled = false
        alert("Please fill the two text inputs!");
    }

    // TODO : test if poke is in fangame
    // idCheck

    else {
        //Special mon selector: Giratina, Deoxys
        if (nameException.includes(mon1)) {
            mon1 = nameFix[nameException.indexOf(mon1)];
        }

        if (nameException.includes(mon2)) {
            mon2 = nameFix[nameException.indexOf(mon2)];
        }

        // First request - version A
        var xhr1a = new XMLHttpRequest();
        var url1a = "https://pokeapi.co/api/v2/pokemon/" + mon1;
        xhr1a.open('GET', url1a, true);
        xhr1a.send();
        xhr1a.onload = function() {
            jsonBody = xhr1a.responseText;
            if(jsonBody) {
                if(jsonBody != "Not Found"){
                    jp = JSON.parse(jsonBody);
                    fuseFirstPoke(jp);
                }
                else{

                    //First request - version B
                    var xhr1b = new XMLHttpRequest();
                    var url1b = "https://pokeapi.co/api/v2/pokemon/" + mon1 + "/";
                    xhr1b.open('GET', url1b, true);
                    xhr1b.send();
                    xhr1b.onload = function() {
                        jsonBody = xhr1b.responseText;
                        if(jsonBody) {
                            if(jsonBody != "Not Found"){
                                jp = JSON.parse(jsonBody);
                                fuseFirstPoke(jp);
                            }
                            else{
                                alert("First pokemon was misspelled ?");
                            }
                        }
                        else{
                            alert("PokeAPI is unreachable (1b)");
                        }
                    }
                }
            }
            else{
                alert("PokeAPI is unreachable (1a)");
            }
        }
    }
}


function fuseFirstPoke(jsonString){

    //ID selector for sprite showcase of the 1st mon/ Validator for 1st mon
    num1 = jsonString.id;
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
    }
    else {

        //#region Type of 1st mon
        //Type selector for fusion type knowledge of the 1st mon
        var type1 = jsonString.types;
        mon1types = [];
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
        //#endregion

        //#region Stats of 1st mon
        var stats1;
        if (statsException.includes(mon1)) {
            stats1 = statsFix[statsException.indexOf(mon1)];
        } else {
            stats1 = jsonString.stats;
        }

        mon1stats = [];
        for (var i = 0; i < stats1.length; i++) {
            mon1stats.push(stats1[i].base_stat);
        }
        //#endregion

        //#region Abilities of 1st mon
        var ab1;
        if (abilitiesException.includes(mon1)) {
            ab1 = abilitiesFix[abilitiesException.indexOf(mon1)];
        } else {
            ab1 = jsonString.abilities;
        }
        mon1abilities = [];
        for (var i = 0; i < ab1.length; i++) {
            mon1abilities.push([ab1[i].ability, ab1[i].is_hidden]);
        }  
        //#endregion

        //#region Request
        // Second request - version A
        var xhr2a = new XMLHttpRequest();
        var url2a = "https://pokeapi.co/api/v2/pokemon/" + mon2;
        xhr2a.open('GET', url2a, true);
        xhr2a.send();
        xhr2a.onload = function() {
            jsonBody = xhr2a.responseText;
            if(jsonBody){
                if(jsonBody != "Not Found"){
                    jp = JSON.parse(jsonBody);
                    fuseSecondPoke(jp);
                }
                else{

                    // Second request - version B
                    var xhr2b = new XMLHttpRequest();
                    var url2b = "https://pokeapi.co/api/v2/pokemon/" + mon2 + "/";
                    xhr2b.open('GET', url2b, true);
                    xhr2b.send();
                    xhr2b.onload = function() {
                        jsonBody = xhr2b.responseText;
                        if(jsonBody) {
                            if(jsonBody != "Not Found"){
                                jp = JSON.parse(jsonBody);
                                fuseSecondPoke(jp);
                            }
                            else{
                                alert("Second pokemon was misspelled ?");
                            }
                        }
                        else{
                            alert("PokeAPI is unreachable (2b)");
                        }
                    }
                }
            }
            else{
                alert("PokeAPI is unreachable (2a)");
            }
            
        }
        //#endregion
    }
}


function fuseSecondPoke(jsonString){
    
    //ID selector for sprite showcase of the 2st mon
    num2 = jsonString.id;
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
    }
    else {

        //#region Type of 2nd mon
        //Type selector for fusion type knowledge of the 2nd mon
        var type2 = jsonString.types;
        mon2types = [];
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
        //#endregion

        //#region Stats of 2nd mon
        var stats2;
        if (statsException.includes(mon2)) {
            stats2 = statsFix[statsException.indexOf(mon2)];
        } else {
            stats2 = jsonString.stats;
        }
        mon2stats = [];
        for (var i = 0; i < stats2.length; i++) {
            mon2stats.push(stats2[i].base_stat);
        }
        //#endregion

        //#region Abilities of 2nd mon
        var ab2;
        if (abilitiesException.includes(mon2)) {
            ab2 = abilitiesFix[abilitiesException.indexOf(mon2)];
        } else {
            ab2 = jsonString.abilities;
        }

        mon2abilities = [];
        for (var i = 0; i < ab2.length; i++) {
            mon2abilities.push([ab2[i].ability, ab2[i].is_hidden]);
        }                     
        //#endregion

        fuseBothPoke()

    }
    
}


function fuseBothPoke(){

    //TODO : factor this
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

    //Dex Numbers
    var dexnum1 = Math.floor(num1 + (420 * num2));
    var dexnum2 = Math.floor(num2 + (420 * num1));
    document.getElementById("dexnumber1").innerHTML = "#: " + dexnum1;
    document.getElementById("dexnumber2").innerHTML = "#: " + dexnum2;
    
    //Name of fusions
    document.getElementById("FP1").innerHTML = fmon1+ "/" + fmon2;
    document.getElementById("FP2").innerHTML = fmon2 + "/" + fmon1;

    //Name of pictures
    var pic1 = num1 + "." + num2 + ".png";
    var pic2 = num2 + "." + num1 + ".png";

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
    var fmonres1 = null;
    var fmonres2 = null;
    if(mon1 == mon2 && selfFusionTypeException.includes(mon1)){
        fmonres1 = selfFusionTypeFix[selfFusionTypeException.indexOf(mon1)];
        fmonres2 = fmonres1
    }
    else{
        fmonres1 = fusType(mon1types, mon2types);
        fmonres2 = fusType(mon2types, mon1types);
    }

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
        image.src = "Types/" + typeName[i] + ".png";
        
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
        image.src = "Types/" + typeName[i] + ".png";

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

    //Abilities 1
    var abilities1 = fusionAbilities(mon1abilities, mon2abilities);
    var hiddenAbilities1 = fusionHiddenAbilities(mon1abilities, mon2abilities, abilities1);
    var abilitiesText1 = "ABILITY: " + sanitizeAbilityList(abilities1);
    var hiddenAbilitiesText1 = sanitizeAbilityList(hiddenAbilities1);

    document.getElementById("ab1").innerHTML = abilitiesText1;
    document.getElementById("hab1").innerHTML = hiddenAbilitiesText1;

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
function showFusion(elementId, fusionId){
    
    fusionUrl = "https://aegide.github.io/CustomBattlers/" + fusionId;
    document.getElementById(elementId).title = fusionId;

    if(doesImageExists(fusionUrl)){
        document.getElementById(elementId).src = fusionUrl;
    }
    else{//Screenshot of autogen pokemon
        fallbackFusionRepository = "https://raw.githubusercontent.com/Aegide/FusionSprites/master/Japeal/"
        headId = fusionId.split(".")[0];
        fallbackFusionUrl = fallbackFusionRepository + headId + "/" + fusionId;
        
        document.getElementById(elementId).src = fallbackFusionUrl;
    }
}

//Error detection
function doesImageExists(imageUrl){
    var http = new XMLHttpRequest();
    http.open('HEAD', imageUrl, false);
    
    // Can't handle error in an easy way
    http.send();
    return http.status != 404;
}


function fusionAbilities(headAbilities, bodyAbilities) {
    var B0 = bodyAbilities[0][0].name;
    var H1;
    
    //If there is only ability, pick that one
    if(headAbilities.length == 1){
        H1 = headAbilities[0][0].name;
    }

    //If the second ability is a hidden ability, pick the first ability
    else if(headAbilities[1][1] == true){
        H1 = headAbilities[0][0].name;
    }
    //Otherwise, actually take the second ability
    else{
        H1 = headAbilities[1][0].name;
    }

    return [B0, H1];
}


function fusionHiddenAbilities(headAbilities, bodyAbilities, fusionAbilities){

    var headAbility, bodyAbility;
    var allAbilities = [];

    var maxAbilities = 3;//Pokémons can't have more than 3 abilities
    for(var a = 0; a < maxAbilities; a++){
        if( a < headAbilities.length){
            headAbility = ability = headAbilities[a][0].name;
            allAbilities.push(headAbility);
        }
        if( a < bodyAbilities.length){
            bodyAbility = bodyAbilities[a][0].name;
            allAbilities.push(bodyAbility);
        }
    }

    hiddenAbilities = allAbilities.filter(n => !fusionAbilities.includes(n));

    return hiddenAbilities;
}


function removeDuplicates(list){
    return Array.from(new Set(list));
}


function sanitizeAbilityList(abilityList){

    if(abilityList.length == 0){
        return abilityList;
    }

    abilityList = removeDuplicates(abilityList);

    var listAb1 = "";
    for (var i = 0; i < abilityList.length; i++) {
        listAb1 = listAb1 + abilityList[i].charAt(0).toUpperCase() + abilityList[i].slice(1) + " / ";
    }
    listAb1 = listAb1.slice(0, listAb1.length - 1);
    listAb1 = listAb1.split("-").join(" ")
    listAb1 = listAb1.split(" ")
    for (var i = 0, x = listAb1.length; i < x; i++) {
        listAb1[i] = listAb1[i][0].toUpperCase() + listAb1[i].substr(1);
    }
    listAb1 = listAb1.join(" ").slice(0, -2);

    return listAb1;
}


//Ability fusion function
function fusAb(mon1, mon2) {
    var fabs = [];
    var H0 = mon1[0][0].name;
    if (mon1.length == 3 && mon1[2][1] == true) {
        var H1 = mon1[1][0].name;
        var HH = mon1[2][0].name;
    }else if (mon1.length == 2 && mon1[1][1] == true) {
        var HH = mon1[1][0].name;
    } else if (mon1.length == 2 && mon1[1][1] == false){
        var H1 = mon1[1][0].name;
    }
    var B0 = mon2[0][0].name;
    if (mon2.length == 3 && mon2[2][1] == true) {
        var B1 = mon2[1][0].name;
        var BH = mon2[2][0].name;  
    }else if (mon2.length == 2 && mon2[1][1] == true) {
        var BH = mon2[1][0].name;
    } else if (mon1.length == 2 && mon1[1][1] == false){
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
    } else if (mon1.length == 3 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == false && mon1[2][1] == true && mon2[0][1]==false && mon2[1][1] == false) {
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
    } else if (mon1.length == 2 && mon2.length == 2 && mon1[0][1] == false && mon1[1][1] == true && mon2[0][1] == false && mon2[1][1]==true) {
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
    } else if (mon1.length == 1 && mon2.length == 3 && mon1[0][1] == false  && mon2[0][1] == false && mon2[1][1] == false && mon2[2][1] == true) {
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
    } else if (mon1.length == 2 && mon2.length == 3 && mon1[0][1]==false && mon1[1][1] == true && mon2[0][1] == false && mon2[1][1] == false && mon2[2][1] == true) {
        if (H0!=B1 && HH!=B1) {
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
    var fmon = []

    //cas H0/null + B0/null [H0#B0] -> H0/B0
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

    // Exception:
    // The body will provide its primary type
    // instead of the secondary
    // if the head is already providing that element.

    //cas H0/H1 + B0/null [H0=B0] -> H0
        } else {
            fmon.push(mon1[0]);
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


function isMissingNames(mon1, mon2){
    return (mon1 == "" || mon1.length == 0 || mon1 == null) || (mon2 == "" || mon2.length == 0 || mon2 == null)
}