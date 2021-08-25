const Activity = require("../model/appointment");

module.exports = function (agenda) {
  agenda.define("Fetch Appointment-slot1", async (job) => {
    try {
      const t = new Date()
      t.setHours(0)
      t.setMinutes(0)
      t.setSeconds(0)
      t.setMilliseconds(0)
      t.setMonth(t.getMonth() + 1)
      const data = await Activity.findOneAndDelete({ slot: 1, date: t });
      if (!data) {
        return console.log("No Appointment");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  })
  agenda.define("Fetch Appointment-slot2", async (job) => {
    try {
      const t = new Date()
      t.setHours(0)
      t.setMinutes(0)
      t.setSeconds(0)
      t.setMilliseconds(0)
      t.setMonth(t.getMonth() + 1)
      const data = await Activity.findOneAndDelete({ slot: 2, date: t });
      if (!data) {
        return console.log("No Appointment");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  })
  agenda.define("Fetch Appointment-slot3", async (job) => {
    try {
      const t = new Date()
      t.setHours(0)
      t.setMinutes(0)
      t.setSeconds(0)
      t.setMilliseconds(0)
      t.setMonth(t.getMonth() + 1)
      const data = await Activity.findOneAndDelete({ slot: 3, date: t });
      if (!data) {
        return console.log("No Appointment");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  })

}