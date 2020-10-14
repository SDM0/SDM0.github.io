ids= 
[["Slowking",199]
,["Azurill",252]
,["Wynaut",253]
,["Ambipom",254]
,["Mismagius",255]
,["Honchrow",256]
,["Bonsly",257]
,["Mime.Jr",258]
,["Happiny",259]
,["Munchlax",260]
,["Mantyke",261]
,["Weavile",262]
,["Magnezone",263]
,["Lickilicky",264]
,["Rhyperior",265]
,["Tangrowth",266]
,["Electivire",267]
,["Magmortar",268]
,["Togekiss",269]
,["Yanmega",270]
,["Leafeon",271]
,["Glaceon",272]
,["Gliscor",273]
,["Mamoswine",274]
,["Porygon-Z",275]
,["Treecko",276]
,["Grovyle",277]
,["Sceptile",278]
,["Torchic",279]
,["Combusken",280]
,["Blaziken",281]
,["Mudkip",282]
,["Marshtomp",283]
,["Swampert",284]
,["Ralts",285]
,["Kirlia",286]
,["Gardevoir",287]
,["Gallade",288]
,["Shedinja",289]
,["Kecleon",290]
,["Beldum",291]
,["Metang",292]
,["Metagross",293]
,["Bidoof",294]
,["Spiritomb",295]
,["Lucario",296]
,["Gible",297]
,["Gabite",298]
,["Garchomp",299]
,["Mawile",300]
,["Lileep",301]
,["Cradily",302]
,["Anorith",303]
,["Armaldo",304]
,["Cranidos",305]
,["Rampardos",306]
,["Shieldon",307]
,["Bastiodon",308]
,["Slaking",309]
,["Absol",310]
,["Duskull",311]
,["Dusclops",312]
,["Dusknoir",313]
,["Wailord",314]
,["Arceus",315]
,["Turtwig",316]
,["Grotle",317]
,["Torterra",318]
,["Chimchar",319]
,["Monferno",320]
,["Infernape",321]
,["Piplup",322]
,["Prinplup",323]
,["Empoleon",324]
,["Nosepass",325]
,["Probopass",326]
,["Honedge",327]
,["Doublade",328]
,["Aegislash",329]
,["Pawniard",330]
,["Bisharp",331]
,["Luxray",332]
,["Aggron",333]
,["Flygon",334]
,["Milotic",335]
,["Salamence",336]
,["Klinklang",337]
,["Zoroark",338]
,["Sylveon",339]
,["Kyogre",340]
,["Groudon",341]
,["Rayquaza",342]
,["Dialga",343]
,["Palkia",344]
,["Giratina",345]
,["Regigigas",346]
,["Darkrai",347]
,["Genesect",348]
,["Reshiram",349]
,["Zekrom",350]
,["Kyurem",351]
,["Roserade",352]
,["Drifblim",353]
,["Lopunny",354]
,["Breloom",355]
,["Ninjask",356]
,["Banette",357]
,["Rotom",358]
,["Reuniclus",359]
,["Whimsicott",360]
,["Krookodile",361]
,["Cofagrigus",362]
,["Galvantula",363]
,["Ferrothorn",364]
,["Litwick",365]
,["Lampent",366]
,["Chandelure",367]
,["Haxorus",368]
,["Golurk",369]
,["Pyukumuku",370]
,["Klefki",371]
,["Talonflame",372]
,["Mimikyu",373]
,["Volcarona",374]
,["Deino",375]
,["Zweilous",376]
,["Hydreigon",377]
,["Latias",378]
,["Latios",379]
,["Deoxys",380]
,["Jirachi",381]
,["Nincada",382]
,["Bibarel",383]
,["Riolu",384]
,["Slakoth",385]
,["Vigoroth",386]
,["Wailmer",387]
,["Shinx",388]
,["Luxio",389]
,["Aron",390]
,["Lairon",391]
,["Trapinch",392]
,["Vibrava",393]
,["Feebas",394]
,["Bagon",395]
,["Shellgon",396]
,["Klink",397]
,["Klank",398]
,["Zorua",399]
,["Budew",400]
,["Roselia",401]
,["Drifloon",402]
,["Buneary",403]
,["Shroomish",404]
,["Shuppet",405]
,["Solosis",406]
,["Duosion",407]
,["Cottonee",408]
,["Sandile",409]
,["Krokorok",410]
,["Yamask",411]
,["Joltik",412]
,["Ferroseed",413]
,["Axew",414]
,["Fraxure",415]
,["Golett",416]
,["Fletchling",417]
,["Fletchinder",418]
,["Larvesta",419]
,["Stunfisk",420]]

typeSwap=
[["steel","electric","Magnemite"]
,["steel","electric","Magneton"]
,["ice","water","Dewgong"]
,["water","rock","Omanyte"]
,["water","rock","Omastar"]
,["steel","bug","Scizor"]
,["steel","electric","Magnezone"]]

typeUni=
[["grass","Bulbasaur"]
,["grass","Ivysaur"]
,["grass","Venusaur"]
,["fire","Charizard"]
,["rock","Geodude"]
,["rock","Graveler"]
,["rock","Golem"]
,["ghost","Gastly"]
,["ghost","Haunter"]
,["ghost","Gengar"]
,["rock","Onix"]
,["bug","Scyther"]
,["water","Gyarados"]
,["ice","Articuno"]
,["electric","Zapdos"]
,["fire","Moltres"]
,["dragon","Dragonite"]
,["steel","Steelix"]]

var pkmn1 = document.getElementById('fname1');
pkmn1.addEventListener("keydown",function(event) {
    if (event.keyCode===13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

var pkmn2 = document.getElementById('fname2');
pkmn2.addEventListener("keydown",function(event) {
    if (event.keyCode===13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

function selectPoke() {
    var mon1 = (document.getElementById("fname1")).value.toLowerCase();
    var mon2 = (document.getElementById("fname2")).value.toLowerCase();
    if ((mon1 == "" || mon1.length == 0 || mon1 == null) || (mon2 == "" || mon2.length == 0 || mon2 == null)) {
        alert("Please fill the two text inputs!");
    } else {
        if (mon1=="giratina") {
            mon1="giratina-altered";
        } else if (mon2=="giratina") {
            mon2="giratina-altered";
        }
        if (mon1=="deoxys") {
            mon1="deoxys-normal";
        } else if (mon2=="deoxys") {
            mon2="deoxys-normal";
        }
        var txhr = new XMLHttpRequest();  
        var poke1 = 'https://pokeapi.co/api/v2/pokemon/'+mon1
        txhr.open('GET', poke1, true);
        txhr.send();
        txhr.onload = function() {
        var jsonBody = txhr.responseText;
        var jsonString = JSON.parse(jsonBody);
        var num1 = jsonString.id;
        for (i=0;i<ids.length;i++){
            if (ids[i][0]==mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                num1=ids[i][1];
            }
        }
        var type1 = jsonString.types;
        var mon1types = [];
        var compt=0
        for (i=0;i<typeSwap.length;i++) {
            if (typeSwap[i][2]==mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                mon1types.push(typeSwap[i][0]);
                mon1types.push(typeSwap[i][1]);
                var compt=1;
            }
        }

        for (i=0;i<typeUni.length;i++) {
            if (typeUni[i][1]==mon1.charAt(0).toUpperCase() + mon1.slice(1)) {
                mon1types.push(typeUni[i][0]);
                var compt=2;
            }
        }

        if (compt==0) {
            mon1types.push(type1[0].type.name);
            if (type1.length==2 && compt!=2) {
                if (type1[0].type.name=="normal" && type1[1].type.name=="flying") {
                    mon1types[0]="flying";
                } else {
                    mon1types.push(type1[1].type.name);
                }
            }
        }
        console.log(mon1types);
        var stats1 = jsonString.stats;
        var mon1stats = [];
        for (i=0; i<stats1.length;i++) {
            mon1stats.push(stats1[i].base_stat)
        }
        var ab1 = jsonString.abilities;
        var pxhr = new XMLHttpRequest();
        var poke2 = 'https://pokeapi.co/api/v2/pokemon/'+mon2
        pxhr.open('GET', poke2, true);
        pxhr.send();
        pxhr.onload = function() {
            if (mon1!="giratina-altered" && mon2!="giratina-altered" && mon1!="deoxys-normal" && mon2!="deoxys-normal") {
            var fmon1 = mon1.charAt(0).toUpperCase() + mon1.slice(1);
            var fmon2 = mon2.charAt(0).toUpperCase() + mon2.slice(1);
            }
            if (mon1=="giratina-altered") {
                var fmon1 = "Giratina";
                var fmon2 = mon2.charAt(0).toUpperCase() + mon2.slice(1);
            }
            if (mon2=="giratina-altered") {
                var fmon1 = mon1.charAt(0).toUpperCase() + mon1.slice(1);
                var fmon2 = "Giratina"
            }
            if (mon1=="deoxys-normal") {
                var fmon1 = "Deoxys";
                var fmon2 = mon2.charAt(0).toUpperCase() + mon2.slice(1);
            }
            if (mon2=="deoxys-normal") {
                var fmon1 = mon1.charAt(0).toUpperCase() + mon1.slice(1);
                var fmon2 = "Deoxys"
            }
            var jsonBody = pxhr.responseText;
            var jsonString = JSON.parse(jsonBody);
            var num2 = jsonString.id;
            for (i=0;i<ids.length;i++){
                if (ids[i][0]==mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                    num2=ids[i][1];
                }
            }
            document.getElementById("FP1").innerHTML=fmon1+"/"+fmon2;
            document.getElementById("FP2").innerHTML=fmon2+"/"+fmon1;
            var pic1 = num1+"."+num2+".png";
            var pic2 = num2+"."+num1+".png";

            var type2 = jsonString.types;
            var mon2types = [];
            var compt=0
            for (i=0;i<typeSwap.length;i++) {
                if (typeSwap[i][2]==mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                    mon2types.push(typeSwap[i][0]);
                    mon2types.push(typeSwap[i][1]);
                    var compt=1;
                }
            }
    
            for (i=0;i<typeUni.length;i++) {
                if (typeUni[i][1]==mon2.charAt(0).toUpperCase() + mon2.slice(1)) {
                    mon2types.push(typeUni[i][0]);
                    var compt=2;
                }
            }
    
            if (compt==0) {
                mon2types.push(type2[0].type.name);
                if (type2.length==2 && compt!=2) {
                    if (type2[0].type.name=="normal" && type2[1].type.name=="flying") {
                        mon2types[0]="flying";
                    } else {
                        mon2types.push(type2[1].type.name);
                    }
                }
            }
            console.log(mon2types);
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
            //document.getElementById("ab").innerHTML="Possible abilites: "+abs;
            //document.getElementById("lien").innerHTML="How to know the abilities?";
            
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

            var L0=["hp1","atk1","def1","spatk1","spdef1","spe1","bs1"];
            var L1=["hp2","atk2","def2","spatk2","spdef2","spe2","bs2"];
            var L2=[Math.floor(hp1),Math.floor(atk1),Math.floor(def1),Math.floor(spatk1),Math.floor(spdef1),Math.floor(spe1),Math.floor(bs1)];
            var L3=[Math.floor(hp2),Math.floor(atk2),Math.floor(def2),Math.floor(spatk2),Math.floor(spdef2),Math.floor(spe2),Math.floor(bs2)];

            for (i=0;i<L1.length;i++) {
                if (L2[i]<L3[i]) {
                    document.getElementById(L0[i]).style.color="red";
                    document.getElementById(L1[i]).style.color="green";
                } else if (L2[i]>L3[i]) {
                    document.getElementById(L1[i]).style.color="red";
                    document.getElementById(L0[i]).style.color="green";
                } else {
                    document.getElementById(L1[i]).style.color="orange";
                    document.getElementById(L0[i]).style.color="orange";
                }
                document.getElementById(L0[i]).innerHTML=L0[i].slice(-1)+": "+L2[i];
                document.getElementById(L1[i]).innerHTML=L1[i].slice(-1)+": "+L3[i];
            }

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

            var fmonres1 = fusType(mon1types,mon2types);
            var fmonres2 = fusType(mon2types,mon1types);
            
            console.log("fmonres1:",fmonres1);
            console.log("fmonres2:",fmonres2);

            document.getElementById("p1").src="./Types/"+fmonres1[0]+".png";
            if (fmonres1.length!=1 && (fmonres1.length==2 && fmonres1[0]!=fmonres1[1])) {
                document.getElementById("p2").style.display="inline-block";
                document.getElementById("p2").src="./Types/"+fmonres1[1]+".png";
            } else {
                document.getElementById("p2").style.display="none";
            }

            document.getElementById("p3").src="./Types/"+fmonres2[0]+".png";

            if (fmonres2.length!=1 && (fmonres2.length==2 && fmonres2[0]!=fmonres2[1])) {
                document.getElementById("p4").style.display="inline-block";
                document.getElementById("p4").src="./Types/"+fmonres2[1]+".png";
            } else {
                document.getElementById("p4").style.display="none";
            }

            document.getElementById("pic1").src="./CustomBattlers/"+pic1;
            document.getElementById("pic2").src="./CustomBattlers/"+pic2;
            }

        }
    }
}

function fusType(mon1,mon2) {
    //cas H1/null + B1/null [H1#B1] -> H1/B1
    var fmon = []
    if (mon1.length==1 && mon2.length==1) {
        if (mon1[0]!=mon2[0]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[0])
    //cas H1/null + B1/null [H1=B1] -> H1/null
        } else {
            fmon.push(mon1[0]);
        }
    } else if (mon1.length==2 && mon2.length==1) {
    //cas H1/H2 + B1/null [H1#B1] -> H1/B1
        if (mon1[0]!=mon2[0]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[0]);
    //cas H1/H2 + B1/null [H1=B1] -> H1/H2
        } else {
            fmon.push(mon1[0]);
            fmon.push(mon1[1]);
        }
    } else if (mon1.length==1 && mon2.length==2) {
    //cas H1/null + B1/B2 [H1#B1] -> H1/B1
            fmon.push(mon1[0]);
            fmon.push(mon2[0]);
    } else if (mon1.length==2 && mon1.length==1) {
    //cas H1/H2 + B1/B2 [H1#B2] -> H1/B2
        if (mon1[0]!=mon2[1]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[1]);
    //cas H1/H2 + B1/B2 [H1=B2] -> H1/B1
        } else {
            fmon.push(mon1[0]);
            fmon.push(mon2[0]);
        }
    } else if (mon1.length==2 && mon1.length==2) {
        if (mon1[0]!=mon2[1]) {
            fmon.push(mon1[0]);
            fmon.push(mon2[1]);
        } else {
            fmon.push(mon1[0]);
            fmon.push(mon1[1]);
        }
    }
    return fmon
}