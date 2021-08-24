const express = require("express");
const Appointment = require("../model/appointment");

const router = new express.Router();

router.post("/appointuser", async (req,res) => {
    // const data = new Appointment(req.body)
    // console.log(req.body);
    // try {
    //   await data.save();
    //   res.status(201).send(data);
    // } catch (e) {
    //   res.status(400).send(e);
    // }
    console.log("hello");
    res.send("hi")
});


module.exports = router;