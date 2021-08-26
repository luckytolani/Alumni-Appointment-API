const express = require("express");
const User = require("../model/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const router = new express.Router();

//API for Signup of user

router.post("/signup", async (req, res) => {

    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        const data = {
            user: req.body.user,
            password: hash,
            maxapp: req.body.maxapp
        }
        const t = new User(data)
        try {
            await t.save();
            res.status(201).send(t);
        } catch (e) {
            res.status(400).send(e);
        }
    });

});

//API for login of user

router.post("/login", async (req, res) => {
    User.findOne({ user: req.body.user }).then((data) => {
        bcrypt.compare(req.body.password, data.password, function (err, result) {
            if (result) {
                res.send(data);
            }
            else{
                res.status(400).send("password not match")
            }
        });
    })
        .catch((e) => {
            res.status(500).send("not found");
        });
});

module.exports = router