const express = require("express");
const User = require("../model/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const router = new express.Router();

router.post("/signup", async (req, res) => {

    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        const data = {
            user: req.body.user,
            password: hash,
            maxapp: req.body.maxapp
        }
        const t = new User(data)
        console.log(t);
        try {
            await t.save();
            res.status(201).send(t);
        } catch (e) {
            res.status(400).send(e);
        }
    });

});

// router.get("/checkstudent/:id" , async(req,res) => {
//     console.log(req.params.id);

//     await User.findOne({_id:req.params.id})
//       .then((data) => {
//           if(data)
//           {
//               console.log(data.maxapp);
//               if(data.maxapp >= 2){
//                   res.send(true);
//               }
//               else{
//                 res.send(false);
//               }
//           }
//       })
//       .catch((e) => {
//         res.status(500).send(e);
//       });
//   })

router.post("/login", async (req, res) => {
    User.findOne({ user: req.body.user }).then((data) => {
        bcrypt.compare(req.body.password, data.password, function (err, result) {
            // console.log(data);
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