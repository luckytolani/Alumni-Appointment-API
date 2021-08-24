const Activity = require("../model/appointment");

module.exports = function(agenda){
    agenda.define("Fetch Appointment", async (job)=>{
        try {
            const t = new Date()
            const news = await Activity.findOneAndDelete({ slot:1 , date:t.getDate() , month:t.getMonth() });
            if (!news) {
              return console.log("not found ko faida nai");
            }
            console.log(news);
          } catch (e) {
            console.log(e);
          }
    })

}