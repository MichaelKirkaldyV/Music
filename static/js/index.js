
//Takes full token from url window then
//splits the access token and the refresh token in two. 
var full_token = window.location.hash;
var tokens = full_token.split('&', 2);
var hidden_token = "";

console.log("Full token-", full_token);
console.log("tokens-", tokens);

//Accepts a token as a parameter and removes the first 14 characters, 
//leaving only the actual token to be returned. 
function getHash(hash){
	for(var t=0; t<=tokens.length; t++){
		a_token = hash[0];
		r_token = hash[1];
	}
	a_token = a_token.substring(14, a_token.length);
	r_token = r_token.substring(14, r_token.length);
	console.log(a_token);
	console.log(r_token);
	return a_token, r_token;
}

getHash(tokens);

document.getElementById('hidden').value = a_token;
document.getElementById("hidden-form").submit();





