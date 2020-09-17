var audio = document.getElementById("audio");
audio.volume = 0.3;
$("#canvas").hide();
var canvas = document.getElementById('Mycanvas');
var ctx = canvas.getContext('2d');

ctx.width = document.getElementById('divimage').clientWidth;
ctx.height = document.getElementById('divimage').clientHeight/1.5;

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
            document.getElementById("divimage").style.backgroundPosition = "center"
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
                document.getElementById("divimage").style.backgroundPosition = "center"
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
            document.getElementById("divimage").style.backgroundPosition = "center"
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
            document.getElementById("divimage").style.backgroundPosition = "center"
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
            document.getElementById("divimage").style.backgroundPosition = "center"
            break;
        default:
            null;
    }
}

function save() {
    $("#canvas").show();
    make_base();
}

function make_base() {
    base_image = new Image();
    charc_image = new Image();
    const elem1 = document.querySelector('#divimage').style.backgroundImage;
    const img1 = elem1.split('"')[1];
    const elem2 = document.querySelector('#img2');
    base_image.src = img1;
    charc_image.src = elem2.src;
    base_image.onload = function(){
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle="rgb(2,2,26)";
        ctx.fill();
        ctx.drawImage(base_image, 0, 0, canvas.width, canvas.height/1.4);
        ctx.drawImage(charc_image, canvas.width/2-(elem2.width/2),canvas.height/32,elem2.width,elem2.height);
        ctx.font="bold xxx-large 'Crimson Pro'";
        ctx.fillStyle="rgb(244,89,96)";
        ctx.textAlign = "center";
        ctx.fillText(document.getElementById('h2').firstChild.data,canvas.width/2,ctx.height*1.7);
        ctx.fillStyle="white";
        wrapText(ctx, document.getElementById('h1').firstChild.data, canvas.width/2, ctx.height*1.85, canvas.width,50);
        ctx.fillStyle="rgb(244,89,96)";
        ctx.font="bold xx-large 'Crimson Pro'";
        console.log((document.getElementById('h1').firstChild.data).length);
        ctx.fillText(document.getElementById('h3').firstChild.data,canvas.width/2,ctx.height*2.1);
        
  }
}

function wrapText(ctx, text, x, y, maxWidth, fontSize, fontFace) {
    var words = text.split(' ');
    var line = '';
    var lineHeight = fontSize+2;

    ctx.font = fontSize + " " + fontFace;

    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}