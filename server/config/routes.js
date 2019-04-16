var controller = require('./../controllers/musics.js')

module.exports = function(app) {
		app.get('/', controller.index)

}//End of exports