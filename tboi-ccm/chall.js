var btn1 = document.getElementById("save");
var btn2 = document.getElementById("sseed");
var btn3 = document.getElementById("lseed");

var seed = document.getElementById("seed")

seed.addEventListener("keyup", function(event) {
  var text = document.getElementById("ta")
  var err = document.getElementById("error")
  text.value=""
  key = event.key || event.keyCode
  if (key== 'Enter' || key == 13) {
    err.textContent="⠀"
    text.style.display="none"
    text.value=""
    seed.style.display = "inline-block"
    if (seed.value.length>0) {
      loadSeed()
    }
  }
})

btn1.onclick = function() {
  var text = document.getElementById("ta")
  var err = document.getElementById("error")
  var seed = document.getElementById("seed")
  text.style.display="inline-block"
  seed.style.display="none"
  text.value=""
  err.style.color="rgb(189, 8, 8)"
  err.textContent = "⠀";

  var name = document.getElementById("name").value;
  if (name.length==0) {
    err.textContent = "Challenge name: Empty";
    return false;
  } else {
    var text = document.getElementById("ta")
    text.value += '<challenge name="'+name+'" ';
  }

  var id = document.getElementById("id").value;
  if (id.length!=0) {
    if (isNum(id)) {
      text.value += 'id="'+id+'" '
    } else {
      err.textContent = "Challenge ID: Not a number";
      return false;
    }
  }

  var item = document.getElementById("item").value;
  if (item.length!=0) {
    if (item.includes(",")) {
      var vals = item.split(",")
      for (var i=0; i<vals.length; i++) {
        if (!isNum(vals[i]) || (isNum(vals[i]) && vals[i]>729)) {
          err.textContent = "Items: "+vals[i]+" is an invalid item ID"
          return false;
        }
      }
      text.value += 'startingitems="'+item+'" '
    } else {
      if (!isNum(item) || item>729) {
        err.textContent = "Items: "+item+" is an invalid ID"
        return false;
      } else {
        text.value += 'startingitems="'+item+'" '
      }
    }
  }

  var trinket = document.getElementById("trinket").value
  if (trinket.length!=0) {
    if (trinket.includes(",")) {
      var vals = trinket.split(",")
      for (var i=0; i<vals.length; i++) {
        if (!isNum(vals[i]) || (isNum(vals[i]) && vals[i]>189)) {
          err.textContent = "Trinkets: "+vals[i]+" is an invalid trinket ID"
          return false;
        }
      }
      if (!(item.includes(139) || item.includes(458))) {
        err.textContent = "Trinkets: You need Mom's Purse(139) or Belly Button(458) to hold 2 trinkets"
        return false;
      }
      text.value += 'startingtrinkets="'+trinket+'" '
    } else {
      if (!isNum(trinket) || (isNum(trinket) && trinket>189)) {
        err.textContent = "Trinkets: "+trinket+" is an invalid trinket ID"
        return false;
      } else {
        text.value += 'startingtrinkets="'+trinket+'" '
      }
    }
  }

  var pill= document.getElementById("pill").value
  if (pill.length!=0) {
    if (!isNum(pill)) {
      err.textContent = "Pill: "+pill+" is an invalid pill ID"
      return false;
    } else {
      text.value += 'startingpill="'+pill+'" '
    }
  }

  var card = document.getElementById("card").value
  if (card.length!=0) {
    if (!isNum(card)) {
      err.textContent = "Card: "+card+" is an invalid card ID"
      return false;
    } else {
      text.value += 'startingcard="'+card+'" '
    }
  } 

  var charc = document.getElementById("chars-select").value
  text.value += 'playertype="'+charc+'" '

  var end = document.getElementById("end-select").value
  text.value += 'endstage="'+end+'" '

  //room
  var selected = [];
  var lock = 0;
  for (var option of document.getElementById('roomfilter-select').options)
  {
    if (option.selected) {
      if (lock==0) {
        text.value += 'roomfilter="'
        lock = 1
      }
      text.value += option.value+","
    }
  }
  if (lock==1) {
    text.value = text.value.substr(0,text.value.length-1)+'" '
  }


  //cursedeny
  var selected = [];
  var lock = 0;
  var sum = 0;
  for (var option of document.getElementById('cursefilter-select').options)
  {
    if (option.selected) {
      if (lock==0) {
        text.value += 'cursefilter="'
        lock = 1
      }
      sum += parseInt(option.value)
    }
  }
  if (lock==1) {
    text.value += sum+'" '
  }

  //curse
  var selected = [];
  var lock = 0;
  var sum = 0;
  for (var option of document.getElementById('curse-select').options)
  {
    if (option.selected) {
      if (lock==0) {
        text.value += 'getcurse="'
        lock = 1
      }
      sum += parseInt(option.value)
    }
  }
  if (lock==1) {
    text.value += sum+'" '
  }

  var achiv = document.getElementById("achievement").value
    if (achiv.length!=0) {
      if (achiv .includes(",")) {
        var vals = achiv .split(",")
        for (var i=0; i<vals.length; i++) {
          if (!isNum(vals[i]) || (isNum(vals[i]) && vals[i]>637)) {
            err.textContent = "Achievement: "+vals[i]+" is an invalid room ID"
            return false;
          }
        }
        text.value += 'achievements="'+achiv+'" '
      } else {
        if (!isNum(achiv) || (isNum(achiv) && achiv>637)) {
          err.textContent = "Achievement: "+achiv+" is an invalid room ID"
          return false;
        } else {
          text.value += 'achievements="'+achiv+'" '
      }
    }
  }
  var alt = document.getElementById("altpath-select").value
  text.value += 'altpath="'+alt+'" '

  var shoot = document.getElementById("shoot-select").value
  text.value += 'canshoot="'+shoot+'" '

  var maxhp= document.getElementById("maxhp").value
  if (maxhp.length!=0) {
    if (!isNum(maxhp)) {
      err.textContent = "Max HP: Not a number"
      return false;
    } else {
      text.value += 'maxhp="'+maxhp+'" '
    }
  }

  var red= document.getElementById("red").value
  if (red.length!=0) {
    if (!isNum(red)) {
      err.textContent = "Red Heart: Not a number"
      return false;
    } else {
      text.value += 'redhp="'+red+'" '
    }
  }

  var soul= document.getElementById("soul").value
  if (soul.length!=0) {
    if (!isNum(soul)) {
      err.textContent = "Soul Heart: Not a number"
      return false;
    } else {
      text.value += 'soulhp="'+soul+'" '
    }
  }

  var black= document.getElementById("black").value
  if (black.length!=0) {
    if (!isNum(black)) {
      err.textContent = "Black Heart: Not a number"
      return false;
    } else {
      text.value += 'blackhp="'+black+'" '
    }
  }

  var coins= document.getElementById("coins").value
  if (coins.length!=0) {
    if (!isNum(coins)) {
      err.textContent = "Coins: Not a number"
      return false;
    } else {
      text.value += 'coins="'+coins+'" '
    }
  }

  var maxdmg = document.getElementById("maxdmg-select").value
  text.value += 'maxdamage="'+maxdmg+'" '

  var adddmg= document.getElementById("adddmg").value
  if (adddmg.length!=0) {
    if (!adddmg.includes(".")) {
      err.textContent = "Add Damage: Invalid syntax (5 -> 5.0)"
      return false;
    } else {
      var vals = adddmg.split(".")
      for (var i=0; i<vals.length; i++) {
        if (!isNum(vals[i])) {
          err.textContent = "Add Damage: "+vals[i]+" is not a number"
          return false;
        }
      }
      text.value += 'adddamage="'+adddmg+'" '
    }
  }

  var minfr= document.getElementById("minfr").value
  if (minfr.length!=0) {
    if (!isNum(minfr)) {
      err.textContent = "Tear Rate: Not a number"
      return false;
    } else {
      text.value += 'minfirerate="'+minfr+'" '
    }
  }

  var minss = document.getElementById("minss-select").value
  text.value += 'minshotspeed="'+minss+'" '

  var br = document.getElementById("br-select").value
  text.value += 'bigrange="'+br+'" '

  var diff = document.getElementById("diff-select").value
  text.value += 'difficulty="'+diff+'" '

  var ms = document.getElementById("ms-select").value
  text.value += 'megasatan="'+ms+'" '

  var rep = document.getElementById("rep-select").value
  text.value += 'secretpath="'+rep+'" '

  err.style.color = "green";
  err.style.whiteSpace= "pre";
  err.textContent="Done!\r\n"
  err.textContent+="\r\n"
  err.textContent+="Copy and paste the content into your:\r\n"
  err.textContent+="SteamLibrary/steamapps/common/The Binding of Isaac Rebirth/mods/Your custom challenge folder/content/challenges.xml\r\n"
  err.textContent+="\r\n"
  err.textContent+="Or save it as a seed using 'Save seed'\r\n"
  text.value = (text.value).substring(0,text.value.length-1)+"/>"
}



btn2.onclick = function() {
  var text = document.getElementById("ta")
  var err = document.getElementById("error")
  seed.style.display = "none"
  if (text.value.length<1) {
    err.style.color="rgb(189, 8, 8)"
    err.textContent="Seed: The text area is empty"
  } else {
    var code = ""
    for (var i=0; i<text.value.length-1;i++) {
    code += (text.value.charCodeAt(i)) + "."
  }
    code += (text.value.charCodeAt(text.value.length-1))
    text.value = code
    err.style.color = "green";
    err.style.whiteSpace= "pre";
    err.textContent="Done!\r\n"
    err.textContent+="Copy and paste the seed and save it somewhere:\r\n"
  }

}

btn3.onclick = function() {
  var text = document.getElementById("ta")
  var seed = document.getElementById("seed")
  var err = document.getElementById("error")
  err.textContent="⠀"
  text.style.display="none"
  text.value=""
  seed.style.display = "inline-block"
  if (seed.value.length>0) {
    loadSeed()
  }
}


function loadSeed() {
  var text = document.getElementById("ta")
  var seed = document.getElementById("seed")
  var err = document.getElementById("error")
  var memo = seed.value.split(".")
  for (var i=0; i<memo.length;i++) {
    if (!isNum(memo[i])) {
      seed.value=""
      err.textContent = "Seed: Invalid syntax"
      return false;
    }
    text.value += String.fromCharCode(memo[i])
  }
  var word = text.value.split('" ')
  for (var i=0; i<word.length;i++) {
    word[i]= word[i].replace(/[^a-zA-Z0-9=,. ]/g, "")
    word[i]=word[i].split("=")
  }
  for (var i=0; i<word.length;i++) {
    switch (word[i][0]) {
      case "challenge name":
        document.getElementById("name").value=word[i][1]
        break;
      case "id":
        document.getElementById("id").value=word[i][1]
        break;
      case "startingitems":
        document.getElementById("item").value=word[i][1]
        break;
      case "startingtrinkets":
        document.getElementById("trinket").value=word[i][1]
        break;
      case "startingpill":
        document.getElementById("pill").value=word[i][1]
        break;
      case "startingcard":
        document.getElementById("card").value=word[i][1]
        break;
      case "playertype":
        document.getElementById("chars-select").value=word[i][1]
        break;
      case "endstage":
        document.getElementById("end-select").value=word[i][1]
        break;
      case "roomfilter":
        if (word[i][1].includes(",")) {
          nums = word[i][1].split(",")
          for (var j=0 ;j<nums.length;j++) {
            nums[j]=parseInt(nums[j])
          }
        } else {
            nums = [parseInt(word[i][1])]
          }
        for (const option of document.querySelectorAll('#roomfilter-select option')) {
          const value = Number.parseInt(option.value);
          if (nums.indexOf(value) !== -1) {
            option.setAttribute('selected', 'selected');
          }
          else {
            option.removeAttribute('selected');
          }
        }
        break;
      case "cursefilter":
        var ids = [1,2,4,8,16,32,64,128]
        var numsum = getSubsets(ids,parseInt(word[i][1]))[0]
        for (const option of document.querySelectorAll('#cursefilter-select option')) {
          const value = Number.parseInt(option.value);
          if (numsum.indexOf(value) !== -1) {
            option.setAttribute('selected', 'selected');
          }
          else {
            option.removeAttribute('selected');
          }
        }
        break;
      case "getcurse":
        var ids = [1,2,4,8,16,32,64,128]
        var numsum = getSubsets(ids,parseInt(word[i][1]))[0]
        for (const option of document.querySelectorAll('#curse-select option')) {
          const value = Number.parseInt(option.value);
          if (numsum.indexOf(value) !== -1) {
            option.setAttribute('selected', 'selected');
          }
          else {
            option.removeAttribute('selected');
          }
        }
        break;
      case "achievements":
        document.getElementById("achievement").value=word[i][1]
        break;
      case "altpath":
        document.getElementById("altpath-select").value=word[i][1]
        break;
      case "canshoot":
        document.getElementById("shoot-select").value=word[i][1]
        break;
      case "maxhp":
        document.getElementById("maxhp").value=word[i][1]
        break;
      case "redhp":
        document.getElementById("red").value=word[i][1]
        break;
      case "soulhp":
        document.getElementById("soul").value=word[i][1]
        break;
      case "blackhp":
        document.getElementById("black").value=word[i][1]
        break;
      case "coins":
        document.getElementById("coins").value=word[i][1]
        break;
      case "maxdamage":
        document.getElementById("maxdmg-select").value=word[i][1]
        break;
      case "adddamage":
        document.getElementById("adddmg").value=word[i][1]
        break;
      case "minfirerate":
        document.getElementById("minfr").value=word[i][1]
        break;
      case "minshotspeed":
        document.getElementById("minss-select").value=word[i][1]
        break;
      case "bigrange":
        document.getElementById("br-select").value=word[i][1]
        break;
      case "difficulty":
        document.getElementById("diff-select").value=word[i][1]
        break;
      case "megasatan":
        document.getElementById("ms-select").value=word[i][1]
        break;
      case "secretpath":
        document.getElementById("rep-select").value=word[i][1]
        break;
      default:
        console.log("Error, no attribute with that name or curse was selected")
    }
  }
  seed.value=""
  seed.style.display="none"

  text.style.display="inline-block"

  err.style.color = "green";
  err.style.whiteSpace= "pre";
  err.textContent="Done!\r\n"
  err.textContent+="Your seed was pasted successfully\r\n"
}



function isNum(input){
  return (input - 0) == input && (''+input).trim().length > 0;
}


function getSubsets(array, sum) {
  function fork(i = 0, s = 0, t = []) {
      if (s === sum) {
          result.push(t);
          return;
      }
      if (i === array.length) {
          return;
      }
      if (s + array[i] <= sum) { // shout circuit for positive numbers only
          fork(i + 1, s + array[i], t.concat(array[i]));
      }
      fork(i + 1, s, t);
  }

  var result = [];
  fork();
  return result;
}


//Example seed:
//60.99.104.97.108.108.101.110.103.101.32.110.97.109.101.61.34.65.115.115.34.32.105.100.61.34.53.34.32.115.116.97.114.116.105.110.103.105.116.101.109.115.61.34.53.44.53.44.53.44.49.51.57.34.32.115.116.97.114.116.105.110.103.116.114.105.110.107.101.116.115.61.34.53.44.54.34.32.115.116.97.114.116.105.110.103.112.105.108.108.61.34.53.34.32.115.116.97.114.116.105.110.103.99.97.114.100.61.34.53.34.32.112.108.97.121.101.114.116.121.112.101.61.34.50.34.32.101.110.100.115.116.97.103.101.61.34.53.34.32.114.111.111.109.102.105.108.116.101.114.61.34.49.44.50.44.52.34.32.97.99.104.105.101.118.101.109.101.110.116.115.61.34.52.56.53.34.32.97.108.116.112.97.116.104.61.34.116.114.117.101.34.32.99.97.110.115.104.111.111.116.61.34.102.97.108.115.101.34.32.109.97.120.104.112.61.34.53.34.32.114.101.100.104.112.61.34.53.34.32.115.111.117.108.104.112.61.34.53.34.32.98.108.97.99.107.104.112.61.34.53.34.32.99.111.105.110.115.61.34.53.34.32.109.97.120.100.97.109.97.103.101.61.34.116.114.117.101.34.32.97.100.100.100.97.109.97.103.101.61.34.53.46.56.34.32.109.105.110.102.105.114.101.114.97.116.101.61.34.53.34.32.109.105.110.115.104.111.116.115.112.101.101.100.61.34.116.114.117.101.34.32.98.105.103.114.97.110.103.101.61.34.116.114.117.101.34.32.100.105.102.102.105.99.117.108.116.121.61.34.49.34.32.109.101.103.97.115.97.116.97.110.61.34.116.114.117.101.34.32.115.101.99.114.101.116.112.97.116.104.61.34.116.114.117.101.34.47.62