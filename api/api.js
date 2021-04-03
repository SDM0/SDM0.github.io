function urlExists(url, callback){
    $.ajax({
      type: 'HEAD',
      url: url,
      success: function(){
        callback(true);
      },
      error: function() {
        callback(false);
      }
    });
  }

function someCallback(){
    // do something, perhaps
}

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