indexMax = ids.length
baseURL = "https://pokeapi.co/api/v2/pokemon/"
analyzed = 0
firstError = true
document.getElementById("loading").style.color = "orange"

for(var i=0; i<indexMax; i++){
  var element = ids[i][0].toLowerCase()
  url_A = baseURL + element
  url_B = baseURL + element + "/" 
  urlExists(url_A, someCallback)
  urlExists(url_B, someCallback)
}


function urlExists(url, callback){
  $.ajax({
    type: 'HEAD',
    url: url,
    success: function(){
      callback(url, true);
    },
    error: function() {
      callback(url, false);
    }
  });
}


function someCallback(url, isSuccess){
    if(isSuccess){
      // console.log(url)
    }
    else{
      console.error(url)
      if(firstError){
        firstError = false;
        link = "<a href=\"" + url + "\">" + url + "</a>"
      }
      else{
        link = "<br><a href=\"" + url + "\">" + url + "</a>"
      }
      content = document.getElementById("results").innerHTML;
      document.getElementById("results").innerHTML = content + link
    }

    analyzed = analyzed + 1;
    progress = 100*analyzed/(indexMax*2)
    text = parseInt(progress) + " %";
    document.getElementById("loading").innerHTML = text

    if(progress==100){
      document.getElementById("loading").style.color = "green"
    }
}



/*
function testAPI() {
    console.log("START")
    baseURL = "https://pokeapi.co/api/v2/pokemon/"
    startIndex = 1
    endIndex = 898
    for(index = startIndex; index <= endIndex; index++){
        url_A = baseURL + index
        url_B = baseURL + index + "/" 
        urlExists(url_A, someCallback)
        urlExists(url_B, someCallback)
        // console.info(index)
    }
    console.log("END")
}

testAPI()
*/



/*
minPoke = 0
maxPoke = 420

function random(){

  var rand = Math.floor(Math.random() * Math.floor(maxPoke));
  // console.log(rand)
  
  if(dict[rand]==undefined){
  	dict[rand] = 1
  }
  else{
   dict[rand] = dict[rand] + 1
  }
}

iterationSize = maxPoke * maxPoke
dict = {}

for(var i = 0; i < iterationSize; i++){
	random()
}
console.log(dict)


console.log("MISSING :")
for(var j = minPoke; j <= maxPoke; j++){
	if(dict[j]==undefined){
  	console.log(j)
  }
}
*/