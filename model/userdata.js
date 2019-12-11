const mongoose = require('mongoose');


let UserData = mongoose.model('UserData', new mongoose.Schema({

    playerInfo:
            {
                platform: String,
                userID: String
            }
    
}, { strict: false }));


module.exports = UserData; 