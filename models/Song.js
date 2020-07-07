const { model, Schema } = require('mongoose')

const SongSchema = new Schema({
	id: Number,
	title: String,
	album: String,
	album_art: String,
	artist: String,
	preview: String,
	public: Boolean,
})

module.exports = model('Song', SongSchema)
