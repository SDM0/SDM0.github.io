var audio = document.getElementById("audio");
audio.volume = 0.3;

document.getElementById("chars").value = "az";
document.getElementById("bgs").value = "bg3";
document.getElementById("bds").value = 1;

document.getElementById("name").onkeyup = function() {change1()};
document.getElementById("chars").onchange = function() {change2()};
document.getElementById("bgs").onchange = function() {change3()};
document.getElementById("bds").onchange = function() {change3()};
document.getElementById("btn").onclick = function() {save()};

function change1() {
    var text = document.getElementById("name").value;
    if (text != "") {
        document.getElementById("h1").innerHTML=text;
    }
}

function change2() {
    var charc = document.getElementById("chars").value;
    switch(charc) {
        case "az":
            document.getElementById("h2").innerHTML= "• Azazel, the Curious Angel •";
            document.getElementById("img2").src="images/az_idle.png"
            break;
        case "justice":
            document.getElementById("h2").innerHTML= "• Justice, the Awesome Demon •";
            document.getElementById("img2").src="images/jus_idle.png"
            break;
        case "cerbes":
            document.getElementById("h2").innerHTML= "• Cerberus, the Triple Demon •";
            document.getElementById("img2").src="images/cer_idle.png"
            break;
        case "beel":
            document.getElementById("h2").innerHTML= "• Beelzebub, the Great Fly •";
            document.getElementById("img2").src="images/beel_idle.png"
            break;
        case "truebeel":
            document.getElementById("h2").innerHTML= "• Beelzebub, the Great Fly •";
            document.getElementById("img2").src="images/beel_fly.png"
            break;
        case "judge":
            document.getElementById("h2").innerHTML= "• Judgement, the High Prosecutor •";
            document.getElementById("img2").src="images/J_introAnim3.png"
            break;
        case "lucifer":
            document.getElementById("h2").innerHTML= "• Lucifer, the CEO of Hell •";
            document.getElementById("img2").src="images/LH_idle.png"
            break;
        case "luciferpan":
            document.getElementById("h2").innerHTML= "• Lucifer, the CEO of Hell •";
            document.getElementById("img2").src="images/LW_talk.png"
            break;
        case "malina":
            document.getElementById("h2").innerHTML= "• Malina, the Sour Demon •";
            document.getElementById("img2").src="images/mal_idle.png"
            break;
        case "modeus":
            document.getElementById("h2").innerHTML= "• Modeus, the Lustful Demon •";
            document.getElementById("img2").src="images/mod_idle.png"
            break;
        case "pandem":
            document.getElementById("h2").innerHTML= "• Pandemonica, the Tired Demon •";
            document.getElementById("img2").src="images/pand_idle.png"
            break;
        case "pandems":
            document.getElementById("h2").innerHTML= "• Pandemonica, the Sadistic Demon •";
            document.getElementById("img2").src="images/pandS_idle.png"
            break;
        case "police":
            document.getElementById("h2").innerHTML= "• Police •";
            document.getElementById("img2").src="images/police_1.png"
            break;
        //case "trance":
        //    document.getElementById("h2").innerHTML= "• Trance, the Loving Devil •";
        //    document.getElementById("img2").src="images/trance.png"
        //    break;
        //case "trancette":
        //    document.getElementById("h2").innerHTML= "• Trance, the Loving Devilette •";
        //    document.getElementById("img2").src="images/trancette.png"
        //    break;
        //case "sdm":
        //    document.getElementById("h2").innerHTML= "• SDM, the Black Demon •";
        //    document.getElementById("img2").src="images/sdm.png"
        //    break;
        case "ht":
            document.getElementById("h2").innerHTML= "• Helltaker •";
            document.getElementById("img2").src="images/man_pc.png"
            break;
        case "htske":
            document.getElementById("h2").innerHTML= "• The Skeletal Guardian •";
            document.getElementById("img2").src="images/man_skele.png"
            break;
        case "zdrada":
            document.getElementById("h2").innerHTML= "• Zdrada, the Bitch Demon •";
            document.getElementById("img2").src="images/z_idle.png"
            break;
        default:
            null;
        }
    }

function change3() {
    var bg = document.getElementById("bgs").value;
    var bd = document.getElementById("bds").value;
    switch(bg) {
        case "bg1":
            if (bd==0) {
            document.getElementById("divimage").style.background = "url(images/bg1_0.png)"
        } else if (bd==1) {
            document.getElementById("divimage").style.background = "url(images/bg1_1.png)"
        } else {
            document.getElementById("divimage").style.background = "url(images/bg1_2.png)"
        }
            document.getElementById("divimage").style.backgroundSize = "cover"
            break;
        case "bg2":
            if (bd==0) {
                document.getElementById("divimage").style.background = "url(images/bg2_0.png)"
            } else if (bd==1) {
                document.getElementById("divimage").style.background = "url(images/bg2_1.png)"
            } else {
                document.getElementById("divimage").style.background = "url(images/bg2_2.png)"
            }
                document.getElementById("divimage").style.backgroundSize = "cover"
                break;
        case "bg3":
            if (bd==0) {
                document.getElementById("divimage").style.background = "url(images/bg3_0.png)"
            } else if (bd==1) {
                document.getElementById("divimage").style.background = "url(images/bg3_1.png)"
            } else {
                document.getElementById("divimage").style.background = "url(images/bg3_2.png)"
            }
            document.getElementById("divimage").style.backgroundSize = "cover"
            break;
        case "bg4":
            if (bd==0) {
                document.getElementById("divimage").style.background = "url(images/bg4_0.png)"
            } else if (bd==1) {
                document.getElementById("divimage").style.background = "url(images/bg4_1.png)"
            } else {
                document.getElementById("divimage").style.background = "url(images/bg4_2.png)"
            }
            document.getElementById("divimage").style.backgroundSize = "cover"
            break;
        case "bg5":
            if (bd==0) {
                document.getElementById("divimage").style.background = "url(images/bg5_0.png)"
            } else if (bd==1) {
                document.getElementById("divimage").style.background = "url(images/bg5_1.png)"
            } else {
                document.getElementById("divimage").style.background = "url(images/bg5_2.png)"
            }
            document.getElementById("divimage").style.backgroundSize = "cover"
            break;
        default:
            null;
    }
}

function save() {
    alert("Saved! ;)  (haha jk doesnt work)");
}