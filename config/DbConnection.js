const mongoose = require('mongoose');

const dbConnect =async()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECTION); 
        console.log("Database connected succefully")
    } catch (error) {
          console.log(error)
    }
    
}

module.exports =dbConnect



