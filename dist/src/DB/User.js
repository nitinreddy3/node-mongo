const mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});
module.exports = UserSchema = mongoose.model('user', UserSchema);
