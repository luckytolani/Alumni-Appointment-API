const express = require("express");
const Appointment = require("../model/appointment");

const router = new express.Router();

router.post("/appointuser", async (req,res) => {
    var t = req.body
    const data = new Appointment(t)
    console.log(t);
    try {
      await data.save();
      res.status(201).send(data);
    } catch (e) {
      res.status(400).send(e);
    }
});

router.get("/getList", async(req,res)=>{
  Appointment.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
})

router.patch("/accept/:id" , async(req,res)=>{
  try {
    const data = await Appointment.findByIdAndUpdate(req.params.id, {pending:false});
  
    if (!data) {
      return res.status(404).send("Sorry, data not found!");
    }
    res.status(200).send(data);
  } catch (e) {
    res.status(404).send(e);
  }

})


module.exports = router;