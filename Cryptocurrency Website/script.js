var btc = document.getElementById("btc");
var eth = document.getElementById("ETH"); 
var shiba = document.getElementById("shiba");
var settings={
    "async": true,
    "scrossDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,shiba-inu&vs_currencies=usd",
    "method": "GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd; 
    eth.innerHTML = response.ethereum.usd; 
    shiba.innerHTML = response["shiba-inu"].usd; // Access key with a dash using bracket notation.

});
