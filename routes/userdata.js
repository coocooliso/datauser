const express = require('express');
const UserData = require('../model/userdata');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send("User Data !");
});

router.post("/", async (req, res) => {
   
    const query = {
        playerInfo: {
            platform: req.body.playerInfo.platform,
            userID: req.body.playerInfo.userID
        }
        
    }   
    let dataUser = await UserData.findOne({"playerInfo.platform":query.playerInfo.platform,"playerInfo.userID":query.playerInfo.userID}, (err)=> {
     if(err) res.send(err);
    
 });

    try{
            if(!dataUser){
            
                dataUser = new UserData(req.body);
                dataUser.userIp = req.connection.remoteAddress;
                const result = await dataUser.save();
                res.status(201).send('Created...');
            
            } else{
                
                let savedUser = await dataUser.updateOne(req.body);
                savedUser = await dataUser.updateOne({userIp: req.connection.remoteAddress});
                const result = await dataUser.save();
                res.status(200).send('Updated...');
            }
            
            

    } catch(err) {
        res.status(400).send(`Error: ${err}`);
    }
   
});

module.exports = router; 