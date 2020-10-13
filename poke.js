function selectPoke() {
    var mon1 = (document.getElementById("fname1")).value.toLowerCase();
    var mon2 = (document.getElementById("fname2")).value.toLowerCase();
    var fmon1 = mon1.charAt(0).toUpperCase() + mon1.slice(1);
    var fmon2 = mon2.charAt(0).toUpperCase() + mon2.slice(1);
    document.getElementById("FP1").innerHTML=fmon1+"/"+fmon2;
    document.getElementById("FP2").innerHTML=fmon2+"/"+fmon1;
    console.log(mon1, mon2);
    if ((mon1 == "" || mon1.length == 0 || mon1 == null) || (mon2 == "" || mon2.length == 0 || mon2 == null)) {
        alert("Please fill the two text inputs!");
        return null
    } else {
        var txhr = new XMLHttpRequest();  
        var poke1 = 'https://pokeapi.co/api/v2/pokemon/'+mon1
        txhr.open('GET', poke1, true);
        txhr.send();
        txhr.onload = function() {
            var jsonBody = txhr.responseText;
            var jsonString = JSON.parse(jsonBody);
            var stats1 = jsonString.stats;
            var mon1stats = [];
            for (i=0; i<stats1.length;i++) {
                mon1stats.push(stats1[i].base_stat)
            }
            var ab1 = jsonString.abilities;
            console.log(ab1);
            var pxhr = new XMLHttpRequest();
            var poke2 = 'https://pokeapi.co/api/v2/pokemon/'+mon2
            pxhr.open('GET', poke2, true);
            pxhr.send();
            pxhr.onload = function() {
                var jsonBody = pxhr.responseText;
                var jsonString = JSON.parse(jsonBody);
                var stats2 = jsonString.stats;
                var mon2stats = [];
            for (i=0; i<stats2.length;i++) {
                mon2stats.push(stats2[i].base_stat)
            }
            var ab2 = jsonString.abilities;
            var abs = [];
            for (i=0;i<ab1.length;i++) {
                abs.push(" "+ab1[i].ability.name);
            }
            for (i=0;i<ab2.length;i++) {
                if (!(abs.includes(ab2[i].ability.name))) {
                    abs.push("  "+ab2[i].ability.name);
                    abs.push();
                }
            }
            console.log("abs:" + abs);
            document.getElementById("ab").innerHTML="Possible abilites: "+abs;
            document.getElementById("lien").innerHTML="How to know the abilities?";
            
            var hp1 = (mon2stats[0]/3)+2*(mon1stats[0]/3);
            var atk1 = 2*(mon2stats[1]/3)+(mon1stats[1]/3);
            var def1 = 2*(mon2stats[2]/3)+(mon1stats[2]/3);
            var spatk1 = (mon2stats[3]/3)+2*(mon1stats[3]/3);
            var spdef1 = (mon2stats[4]/3)+2*(mon1stats[4]/3);
            var spe1 = 2*(mon2stats[5]/3)+(mon1stats[5]/3);
            var bs1 = Math.floor(hp1)+Math.floor(atk1)+Math.floor(def1)+Math.floor(spatk1)+Math.floor(spdef1)+Math.floor(spe1);

            var hp2 = (mon1stats[0]/3)+2*(mon2stats[0]/3);
            var atk2 = 2*(mon1stats[1]/3)+(mon2stats[1]/3);
            var def2= 2*(mon1stats[2]/3)+(mon2stats[2]/3);
            var spatk2 = (mon1stats[3]/3)+2*(mon2stats[3]/3);
            var spdef2 = (mon1stats[4]/3)+2*(mon2stats[4]/3);
            var spe2 = 2*(mon1stats[5]/3)+(mon2stats[5]/3);
            var bs2 = Math.floor(hp2)+Math.floor(atk2)+Math.floor(def2)+Math.floor(spatk2)+Math.floor(spdef2)+Math.floor(spe2);

            document.getElementById("hp1").innerHTML="HP: "+Math.floor(hp1);
            document.getElementById("atk1").innerHTML="ATK: "+Math.floor(atk1);
            document.getElementById("def1").innerHTML="DEF: "+Math.floor(def1);
            document.getElementById("spatk1").innerHTML="SPE.ATK: "+Math.floor(spatk1);
            document.getElementById("spdef1").innerHTML="SPE.DEF: "+Math.floor(spdef1);
            document.getElementById("spe1").innerHTML="SPEED: "+Math.floor(spe1);
            document.getElementById("bs1").innerHTML="TOTAL: "+Math.floor(bs1);

            document.getElementById("hp2").innerHTML="HP: "+Math.floor(hp2);
            document.getElementById("atk2").innerHTML="ATK: "+Math.floor(atk2);
            document.getElementById("def2").innerHTML="DEF: "+Math.floor(def2);
            document.getElementById("spatk2").innerHTML="SPE.ATK: "+Math.floor(spatk2);
            document.getElementById("spdef2").innerHTML="SPE.DEF: "+Math.floor(spdef2);
            document.getElementById("spe2").innerHTML="SPEED: "+Math.floor(spe2);
            document.getElementById("bs2").innerHTML="TOTAL: "+Math.floor(bs2);
            }

        }
    }
}