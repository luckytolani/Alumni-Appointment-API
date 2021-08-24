const Agenda = require("agenda");

const agenda = new Agenda({
  db: {
    address: 'mongodb+srv://lucky:lucky@cluster0.mojdf.mongodb.net/task?retryWrites=true&w=majority',
    collection: "Fetching-jobs",
  },
});

require("./jobs/job1")(agenda);

agenda
  .on("ready", () => console.log("Agenda is ready!"))
  .on("error", () => console.log("Agenda connection error!"));



(async function(){
  await agenda.start();
  console.log("Agenda is started");
  await agenda.every("10 seconds", 'Fetch Appointment')
  // await agenda.every("1 minutes", 'Print activity')
})();


module.exports = agenda;
