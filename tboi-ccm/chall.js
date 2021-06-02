var btn = document.getElementById("save");


btn.onclick = function() {
  var text = document.getElementById("ta")
  var err = document.getElementById("error")
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
    if (IsNumeric(id)) {
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
        if (!IsNumeric(vals[i]) || (IsNumeric(vals[i]) && vals[i]>729)) {
          err.textContent = "Items: "+vals[i]+" is an invalid item ID"
          return false;
        }
      }
      text.value += 'startingitems="'+item+'" '
    } else {
      if (!IsNumeric(item) || item>729) {
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
        if (!IsNumeric(vals[i]) || (IsNumeric(vals[i]) && vals[i]>189)) {
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
      if (!IsNumeric(trinket) || (IsNumeric(trinket) && trinket>189)) {
        err.textContent = "Trinkets: "+trinket+" is an invalid trinket ID"
        return false;
      } else {
        text.value += 'startingtrinkets="'+trinket+'" '
      }
    }
  }

  var pill= document.getElementById("pill").value
  if (pill.length!=0) {
    if (!IsNumeric(pill)) {
      err.textContent = "Pill: "+pill+" is an invalid pill ID"
      return false;
    } else {
      text.value += 'startingpill="'+pill+'" '
    }
  }

  var card = document.getElementById("card").value
  if (card.length!=0) {
    if (!IsNumeric(card)) {
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
          if (!IsNumeric(vals[i]) || (IsNumeric(vals[i]) && vals[i]>637)) {
            console.log(vals[i])
            err.textContent = "Achievement: "+vals[i]+" is an invalid room ID"
            return false;
          }
        }
        text.value += 'achievements="'+achiv+'" '
      } else {
        if (!IsNumeric(achiv) || (IsNumeric(achiv) && achiv>637)) {
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
    if (!IsNumeric(maxhp)) {
      err.textContent = "Max HP: Not a number"
      return false;
    } else {
      text.value += 'maxhp="'+maxhp+'" '
    }
  }

  var red= document.getElementById("red").value
  if (red.length!=0) {
    if (!IsNumeric(red)) {
      err.textContent = "Red Heart: Not a number"
      return false;
    } else {
      text.value += 'redhp="'+red+'" '
    }
  }

  var soul= document.getElementById("soul").value
  if (soul.length!=0) {
    if (!IsNumeric(soul)) {
      err.textContent = "Soul Heart: Not a number"
      return false;
    } else {
      text.value += 'soulhp="'+soul+'" '
    }
  }

  var black= document.getElementById("black").value
  if (black.length!=0) {
    if (!IsNumeric(black)) {
      err.textContent = "Black Heart: Not a number"
      return false;
    } else {
      text.value += 'blackhp="'+black+'" '
    }
  }

  var coins= document.getElementById("coins").value
  if (coins.length!=0) {
    if (!IsNumeric(coins)) {
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
        if (!IsNumeric(vals[i])) {
          console.log(vals[i])
          err.textContent = "Add Damage: "+vals[i]+" is not a number"
          return false;
        }
      }
      text.value += 'adddamage="'+adddmg+'" '
    }
  }

  var minfr= document.getElementById("minfr").value
  if (minfr.length!=0) {
    if (!IsNumeric(minfr)) {
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
  err.textContent+="Copy and paste the content into your:\r\n"
  err.textContent+="SteamLibrary/steamapps/common/The Binding of Isaac Rebirth/mods/Your custom challenge folder/content/challenges.xml\r\n"
  text.value = (text.value).substring(0,text.value.length-1)+"/>"
}

function IsNumeric(input)
{
    return (input - 0) == input && (''+input).trim().length > 0;
}



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 