const mongoose = require('mongoose')

const connectDB  = async ()=>{
 try {
    const connect =await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database connect sucssfully`);
 } catch (error) {
   console.log('Database not connected');
   process.exit(1)
 }
}


module.exports = connectDB