const express = require('express');
const SlackBot = require('./helpers/slackBot');

// MOUNT API
var user = express();
user.on('mount', function (parent) {
    console.log('> User API Mounted');
});

// DEFINE ROUTES
user.get('/register/:email/:type', (req, res) => {
    // add to database =>
    // TODO:

    // notify slack
    // SlackBot.signupNotification(req.params.email, req.params.type) 
    
    // send ok
    res.send(`OK`);
});

module.exports = user;