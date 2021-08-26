const Agenda = require("agenda");

// Getting JOBS to be done
const agenda = new Agenda({
  db: {
    address: process.env.DATABASE,
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

  //JOBS which checks every day on ending time of respective slot that appointment is there or not if its there then it deletes that appointment because now it is of no use
  
  await agenda.every('* 14 * * *', 'Fetch Appointment-slot1')    //for slot 1
  
  await agenda.every('* 17 * * *', 'Fetch Appointment-slot2')   //for slot 2
  
  await agenda.every('* 19 * * *', 'Fetch Appointment-slot3')   // for slot 3
})();


module.exports = agenda;
