var controller = require('./../controllers/musics.js')

module.exports = function(app) {
		app.get('/', controller.index),
		app.post('/', controller.index),
		app.get('/search', controller.search)

}//End of exports