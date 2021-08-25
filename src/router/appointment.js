const express = require("express");
const Appointment = require("../model/appointment");

const router = new express.Router();

router.post("/appointuser", async (req, res) => {
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

router.get("/getList", async (req, res) => {
  Appointment.find({})
  .sort({pending:-1 , date:1})
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
})

router.get("/getList/:user", async (req, res) => {
  Appointment.find({user:req.params.user, pending:false})
  .sort({pending:-1 , date:1})
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
})

router.get("/checkavailable", async (req, res) => {
  Appointment.find({ "pending": true })
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
})



router.patch("/accept/:id", async (req, res) => {
  try {
    const data = await Appointment.findByIdAndUpdate(req.params.id, { "pending": false });

    if (!data) {
      return res.status(404).send("Sorry, data not found!");
    }
    res.status(200).send(data);
  } catch (e) {
    res.status(404).send(e);
  }

})
router.delete("/deleteapp/:id", async (req, res) => {
  try {
    const data = await Appointment.findOneAndDelete({ _id: req.params.id });
    if (!data) {
      return res.status(404).send("data not found!");
    }
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/checkstudent/:user", async (req, res) => {
  console.log(req.params.user);

  await Appointment.find({ user: req.params.user })
    .then((data) => {
      if (data.length >= 2) {
        res.send(true);
      }
      else {
        res.send(false);
      }
    })
    .catch((e) => {
      res.status(500).send(e);
    });
})

router.get("/checkslot/:date/:slot", async (req, res) => {
  console.log(req.params.user);

  await Appointment.findOne({ date: req.params.date , slot:req.params.slot })
    .then((data) => {
      if (data) {
        res.send(true);
      }
      else {
        res.status(404).send(false);
      }
    })
    .catch((e) => {
      res.status(500).send(e);
    });
})


module.exports = router;