
indexMax = ids.length
baseURL = "https://pokeapi.co/api/v2/pokemon/"

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
      // callback(url, true);
    },
    error: function() {
      // callback(url, false);
    }
  });
}


function someCallback(url, isSuccess){

    if(isSuccess){
      console.log(url)
    }
    else{
      console.error(url)
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
minPoke = 1
maxPoke = 420

function random(){

  var rand = Math.floor(minPoke + Math.random() * Math.floor(maxPoke - minPoke + 1));
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

