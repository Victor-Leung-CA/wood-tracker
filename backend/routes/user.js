var express = require('express');
var router = express.Router();
let user = require('../models/userModel');

router.get('/', (req, res, next) => {
    user.find()
        .then(users => {
            res.json(users.map(user => ({name: user.name, subTeam: user.subTeam})));
        })
        .catch((err) => {
            res.status(400).json(err.message);
        })
})

router.post('/add', (req, res) => {
    const name = req.body.name;
    const subTeam = req.body.subTeam;

    const newUser = new user({
        name,
        subTeam
    });

    newUser.save()
        .then(() => {
            res.json("User added!")
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
});

module.exports = router