const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    hash: String,
    salt: String,
});



module.exports = UserSchema;