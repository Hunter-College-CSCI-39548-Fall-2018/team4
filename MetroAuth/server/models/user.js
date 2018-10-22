const sqlite3 = require('sqlite3')

const Schema = sqlite3.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
});

module.exports = sqlite3.model('user', userSchema, 'users');