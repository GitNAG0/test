const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
	first_name: String,
	last_name: String,
	username: String,
	password: String,
})

module.exports = model('User', UserSchema)
