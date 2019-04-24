var spotifyApi = require("spotify-web-api-node");
var spotify = new spotifyApi();


module.exports = {
	index: function(req, res){
		access_token = req.body.hidden
		console.log(req.body.hidden);
		spotify.setAccessToken(access_token);
		res.render('index');
	},

	search: function(req, res){
		spotify.getArtistAlbums(
		  '0kc6tkhco0k6x017grhqplk3d',
		  { limit: 10, offset: 20 },
		  function(err, data) {
		    if (err) {
		      console.error('Something went wrong!');
		    } else {
		      console.log(data.body);
		    }
		  }
		);
	}
}