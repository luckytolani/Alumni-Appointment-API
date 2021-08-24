const express = require("express");
const Appointment = require("../model/appointment");

const router = new express.Router();

router.post("/appointuser", async (req,res) => {
    var t = req.body
    // console.log(temp.getDate());
    const data = new Appointment(t)
    console.log(t);
    try {
      await data.save();
      res.status(201).send(data);
    } catch (e) {
      res.status(400).send(e);
    }
});


module.exports = router;